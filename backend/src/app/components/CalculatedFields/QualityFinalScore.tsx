'use client'

import React, { useEffect } from 'react'
import { useField, useFormFields, FieldDescription } from '@payloadcms/ui'

const getScoreColor = (score: number): string => {
    if (score >= 4) return 'green'
    if (score >= 3) return 'orange'
    return 'red'
}

const QualityFinalScore = ({ path }: { path: string }) => {
    const { setValue } = useField({ path })

    const deduction = useFormFields(([fields]) => {
        return (fields?.['quality_total_deduction']?.value as number) || 0
    })

    const calculatedScore = Math.max(0, Math.min(5, 5 - deduction))

    useEffect(() => {
        setValue(calculatedScore)
    }, [calculatedScore, setValue])

    return (
        <div className="field-type">
            <label style={{ display: 'block', marginBottom: '0.5rem', fontWeight: '600' }}>
                Итоговая оценка качества
            </label>
            <div
                style={{
                    width: '100%',
                    padding: '8px 12px',
                    border: '1px solid var(--theme-elevation-200)',
                    borderRadius: 'var(--style-radius-s)',
                    background: 'var(--theme-input-bg)',
                    color: `${getScoreColor(calculatedScore)}`,
                    fontSize: 'inherit',
                    lineHeight: '1.5',
                    cursor: 'default',
                    boxSizing: 'border-box',
                    minHeight: '35px',
                    fontWeight: 600,
                }}
            >
                {calculatedScore}
            </div>
            <FieldDescription path={path} description="Вычисляется автоматически: 5 - штраф" />
        </div>
    )
}

export default QualityFinalScore