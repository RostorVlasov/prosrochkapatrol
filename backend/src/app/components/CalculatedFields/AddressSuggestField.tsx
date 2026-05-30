'use client'

import React, { useState, useEffect, useRef, useCallback } from 'react'
import { useField, useForm } from '@payloadcms/ui'

interface DadataSuggestion {
    value: string
    unrestricted_value: string
    data: {
        city?: string
        city_district?: string
        city_district_with_type?: string
        settlement?: string
        settlement_with_type?: string
        street_with_type?: string
        house?: string
        house_type?: string
        block?: string
        block_type?: string
        geo_lat?: string
        geo_lon?: string
        region?: string
        region_with_type?: string
    }
}

interface AddressSuggestFieldProps {
    path: string
    label?: string
    required?: boolean
}

const DISTRICT_FIELD = 'district'
const MICRODISTRICT_FIELD = 'microdistrict'
const GEO_LAT_FIELD = 'geo_lat'
const GEO_LON_FIELD = 'geo_lon'

export const AddressSuggestField: React.FC<AddressSuggestFieldProps> = ({
    path,
    label = 'Адрес',
    required,
}) => {
    const { value, setValue } = useField<string>({ path })
    const { dispatchFields } = useForm()

    const [inputValue, setInputValue] = useState<string>((value as string) || '')
    const [suggestions, setSuggestions] = useState<DadataSuggestion[]>([])
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [activeIndex, setActiveIndex] = useState(-1)

    const debounceTimer = useRef<ReturnType<typeof setTimeout> | null>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    const inputRef = useRef<HTMLInputElement>(null)

    useEffect(() => {
        if (value && value !== inputValue) {
            setInputValue(value as string)
        }
    }, [value])

    useEffect(() => {
        const handleClickOutside = (e: MouseEvent) => {
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => document.removeEventListener('mousedown', handleClickOutside)
    }, [])

    const fetchSuggestions = useCallback(async (query: string) => {
        if (!query || query.length < 3) {
            setSuggestions([])
            setIsOpen(false)
            return
        }

        setIsLoading(true)

        try {
            const response = await fetch('/api/dadata/suggest', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ query }),
            })

            if (!response.ok) throw new Error('Ошибка запроса к Dadata')

            const data = await response.json()
            setSuggestions(data.suggestions || [])
            setIsOpen(true)
            setActiveIndex(-1)
        } catch (err) {
            console.error('Dadata suggest error:', err)
            setSuggestions([])
        } finally {
            setIsLoading(false)
        }
    }, [])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        setInputValue(newValue)
        setValue(newValue)

        if (debounceTimer.current) clearTimeout(debounceTimer.current)
        debounceTimer.current = setTimeout(() => {
            fetchSuggestions(newValue)
        }, 300)
    }

    const handleSelectSuggestion = (suggestion: DadataSuggestion) => {
        const address = suggestion.unrestricted_value || suggestion.value
        setInputValue(address)
        setValue(address)
        setIsOpen(false)
        setSuggestions([])

        const d = suggestion.data

        const district =
            d.city_district_with_type ||
            d.city_district ||
            d.settlement_with_type ||
            d.settlement ||
            ''

        const microdistrict = d.settlement_with_type || d.settlement || ''

        dispatchFields({
            type: 'UPDATE',
            path: DISTRICT_FIELD,
            value: district,
        })

        dispatchFields({
            type: 'UPDATE',
            path: MICRODISTRICT_FIELD,
            value: microdistrict,
        })

        if (d.geo_lat && d.geo_lon) {
            dispatchFields({
                type: 'UPDATE',
                path: GEO_LAT_FIELD,
                value: d.geo_lat,
            })
            dispatchFields({
                type: 'UPDATE',
                path: GEO_LON_FIELD,
                value: d.geo_lon,
            })
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (!isOpen || suggestions.length === 0) return

        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault()
                setActiveIndex((prev) => Math.min(prev + 1, suggestions.length - 1))
                break
            case 'ArrowUp':
                e.preventDefault()
                setActiveIndex((prev) => Math.max(prev - 1, 0))
                break
            case 'Enter':
                e.preventDefault()
                if (activeIndex >= 0 && suggestions[activeIndex]) {
                    handleSelectSuggestion(suggestions[activeIndex])
                }
                break
            case 'Escape':
                setIsOpen(false)
                setActiveIndex(-1)
                break
        }
    }

    return (
        <div
            ref={containerRef}
            className="field-type text"
            style={{ position: 'relative', marginBottom: '1rem' }}
        >
            <label className="field-label">
                {label}
                {required && <span style={{ color: 'var(--theme-error-500)', marginLeft: '4px' }}>*</span>}
            </label>

            <div style={{ position: 'relative' }}>
                <input
                    ref={inputRef}
                    type="text"
                    className="field-type__input"
                    value={inputValue}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}
                    onFocus={() => suggestions.length > 0 && setIsOpen(true)}
                    placeholder="Начните вводить адрес..."
                    autoComplete="off"
                    style={{
                        width: '100%',
                        padding: '8px 36px 8px 12px',
                        border: '1px solid var(--theme-elevation-150)',
                        borderRadius: '4px',
                        background: 'var(--theme-input-bg)',
                        color: 'var(--theme-text)',
                        fontSize: '14px',
                    }}
                />

                <span
                    style={{
                        position: 'absolute',
                        right: '10px',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        color: 'var(--theme-elevation-400)',
                        pointerEvents: 'none',
                        fontSize: '16px',
                    }}
                >
                    {isLoading ? '⟳' : '🔍'}
                </span>
            </div>

            {isOpen && suggestions.length > 0 && (
                <ul
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        zIndex: 9999,
                        margin: 0,
                        padding: 0,
                        listStyle: 'none',
                        background: 'var(--theme-elevation-0)',
                        border: '1px solid var(--theme-elevation-150)',
                        borderTop: 'none',
                        borderRadius: '0 0 4px 4px',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
                        maxHeight: '280px',
                        overflowY: 'auto',
                    }}
                >
                    {suggestions.map((s, index) => (
                        <li
                            key={index}
                            onMouseDown={(e) => {
                                e.preventDefault()
                                handleSelectSuggestion(s)
                            }}
                            onMouseEnter={() => setActiveIndex(index)}
                            style={{
                                padding: '10px 14px',
                                cursor: 'pointer',
                                fontSize: '13px',
                                lineHeight: '1.4',
                                color: 'var(--theme-text)',
                                background:
                                    index === activeIndex
                                        ? 'var(--theme-elevation-100)'
                                        : 'transparent',
                                borderBottom: '1px solid var(--theme-elevation-50)',
                            }}
                        >
                            <span style={{ fontWeight: 500 }}>{s.value}</span>
                            {s.data.city_district_with_type && (
                                <span
                                    style={{
                                        display: 'block',
                                        fontSize: '11px',
                                        color: 'var(--theme-elevation-500)',
                                        marginTop: '2px',
                                    }}
                                >
                                    {s.data.city_district_with_type}
                                    {s.data.settlement_with_type && ` · ${s.data.settlement_with_type}`}
                                </span>
                            )}
                        </li>
                    ))}
                </ul>
            )}

            {isOpen && !isLoading && suggestions.length === 0 && inputValue.length >= 3 && (
                <div
                    style={{
                        position: 'absolute',
                        top: '100%',
                        left: 0,
                        right: 0,
                        zIndex: 9999,
                        padding: '12px 14px',
                        background: 'var(--theme-elevation-0)',
                        border: '1px solid var(--theme-elevation-150)',
                        borderTop: 'none',
                        borderRadius: '0 0 4px 4px',
                        fontSize: '13px',
                        color: 'var(--theme-elevation-500)',
                    }}
                >
                    Адрес не найден
                </div>
            )}
        </div>
    )
}

export default AddressSuggestField