'use client'

import React, { useState } from 'react'
import { useField } from '@payloadcms/ui'

const TagInputField = (props: { path: string; field?: any }) => {
    const { path, field } = props

    const { value, setValue } = useField({ path })
    const [inputValue, setInputValue] = useState('')

    const tags: string[] = Array.isArray(value) ? value : []

    const handleAdd = () => {
        const trimmed = inputValue.trim()
        if (trimmed && !tags.includes(trimmed)) {
            setValue([...tags, trimmed])
            setInputValue('')
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            handleAdd()
        }
    }

    const handleRemove = (indexToRemove: number) => {
        setValue(tags.filter((_, index) => index !== indexToRemove))
    }

    return React.createElement(
        'div',
        { className: 'field-type', style: { marginBottom: '1rem' } },
        React.createElement(
            'label',
            { className: 'field-label', htmlFor: path },
            typeof field?.label === 'string' ? field.label : path,
        ),
        React.createElement(
            'div',
            {
                style: {
                    display: 'flex',
                    gap: '8px',
                    alignItems: 'center',
                    marginBottom: tags.length > 0 ? '10px' : '0',
                },
            },
            React.createElement('input', {
                type: 'text',
                id: path,
                value: inputValue,
                onChange: (e: React.ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value),
                onKeyDown: handleKeyDown,
                placeholder: 'Введите значение...',
                style: {
                    flex: 1,
                    padding: '8px 12px',
                    border: '1px solid var(--theme-elevation-200)',
                    borderRadius: 'var(--style-radius-s)',
                    background: 'var(--theme-input-bg)',
                    color: 'var(--theme-elevation-800)',
                    fontSize: 'inherit',
                    lineHeight: '1.5',
                    boxSizing: 'border-box',
                    minHeight: '35px',
                },
            }),
            React.createElement(
                'button',
                {
                    type: 'button',
                    onClick: handleAdd,
                    style: {
                        padding: '8px 16px',
                        border: '1px solid var(--theme-elevation-200)',
                        borderRadius: 'var(--style-radius-s)',
                        background: 'var(--theme-elevation-100)',
                        color: 'var(--theme-elevation-800)',
                        cursor: 'pointer',
                        fontSize: '14px',
                        fontWeight: 600,
                        whiteSpace: 'nowrap',
                        minHeight: '35px',
                    },
                },
                'Добавить',
            ),
        ),
        tags.length > 0
            ? React.createElement(
                'div',
                {
                    style: {
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: '8px',
                        padding: '10px',
                        border: '1px solid var(--theme-elevation-100)',
                        borderRadius: 'var(--style-radius-s)',
                        background: 'var(--theme-input-bg)',
                    },
                },
                ...tags.map((tag, index) =>
                    React.createElement(
                        'div',
                        {
                            key: index,
                            style: {
                                display: 'inline-flex',
                                alignItems: 'center',
                                gap: '6px',
                                padding: '4px 8px 4px 12px',
                                border: '1px solid var(--theme-elevation-200)',
                                borderRadius: '16px',
                                background: 'var(--theme-elevation-50)',
                                fontSize: '14px',
                            },
                        },
                        React.createElement('span', { style: { color: 'var(--theme-elevation-800)' } }, tag),
                        React.createElement(
                            'button',
                            {
                                type: 'button',
                                onClick: () => handleRemove(index),
                                style: {
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    width: '20px',
                                    height: '20px',
                                    border: 'none',
                                    borderRadius: '50%',
                                    background: 'var(--theme-elevation-200)',
                                    color: 'var(--theme-elevation-600)',
                                    cursor: 'pointer',
                                    fontSize: '14px',
                                    lineHeight: '1',
                                    transition: 'background 0.2s',
                                },
                                title: 'Удалить',
                            },
                            '×',
                        ),
                    ),
                ),
            )
            : null,
        field?.admin?.description
            ? React.createElement('div', { className: 'field-description' }, field.admin.description)
            : null,
    )
}

export default TagInputField