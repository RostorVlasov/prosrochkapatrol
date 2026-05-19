'use client'

import React, { useEffect } from 'react'
import { useField, useFormFields, FieldDescription } from '@payloadcms/ui'

const getScoreColor = (score: number): string => {
    if (score >= 4) return 'green'
    if (score >= 3) return 'orange'
    return 'red'
}

const TotalScore = ({ path }: { path: string }) => {
    const { setValue } = useField({ path })

    const qualityScore = useFormFields(([fields]) => {
        return (fields?.['quality_final_score']?.value as number) || 0
    })

    const storageScore = useFormFields(([fields]) => {
        return (fields?.['storage_final_score']?.value as number) || 0
    })

    const calculatedTotal = Math.round(((qualityScore + storageScore) / 2) * 10) / 10

    useEffect(() => {
        setValue(calculatedTotal)
    }, [calculatedTotal, setValue])

    return (
        <div className="field-type">
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                Итоговая оценка
            </label>
            <div
                style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid var(--theme-elevation-200)',
                    borderRadius: 'var(--style-radius-s)',
                    background: 'var(--theme-input-bg)',
                    color: `${getScoreColor(calculatedTotal)}`,
                    fontSize: 'inherit',
                    lineHeight: '1.5',
                    cursor: 'default',
                    boxSizing: 'border-box',
                    minHeight: '35px',
                    fontWeight: 700,
                }}
            >
                {calculatedTotal}
            </div>
            <FieldDescription path={path} description="Вычисляется автоматически: (Качество + Хранение) / 2" />
        </div>
    )
}

export default TotalScore