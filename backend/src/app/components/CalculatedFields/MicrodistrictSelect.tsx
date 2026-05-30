'use client'

import React, { useEffect } from 'react'
import { useField, useFormFields, FieldDescription } from '@payloadcms/ui'
import { MICRODISTRICTS_MAP } from '@/data/districts'

const MicrodistrictSelect = ({ path, label, required }: any) => {
  const { value, setValue } = useField<string>({ path })
  
  // Получаем значение выбранного района из формы
  const districtValue = useFormFields(([fields]) => fields?.['district']?.value as string) || ''

  // Определяем список опций в зависимости от района
  const options = districtValue ? (MICRODISTRICTS_MAP[districtValue] || []) : []
  
  // Если выбран район "Советский", опция будет одна: "СНТ / Частный сектор"
  // Если район не выбран, опций нет

  // Очистка поля, если текущий микрорайон не подходит под новый район
  useEffect(() => {
    if (districtValue && value && !options.includes(value)) {
      setValue('')
    }
    if (!districtValue) {
      setValue('')
    }
  }, [districtValue, value, options, setValue])

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value)
  }

  return (
    <div className="field-type select" style={{ marginBottom: '1rem' }}>
      <label 
        style={{ 
          display: 'block', 
          marginBottom: '0.5rem', 
          fontWeight: '600',
          color: 'var(--theme-elevation-800)'
        }}
      >
        {label}
        {required && <span style={{ color: 'var(--theme-error)' }}> *</span>}
      </label>

      {!districtValue ? (
        <div
          style={{
            width: '100%',
            padding: '8px 12px',
            border: '1px solid var(--theme-elevation-150)',
            borderRadius: 'var(--style-radius-s)',
            background: 'var(--theme-input-bg)',
            color: 'var(--theme-elevation-500)',
            fontSize: 'inherit',
            lineHeight: '1.5',
            minHeight: '35px',
            boxSizing: 'border-box',
          }}
        >
          Сначала выберите район
        </div>
      ) : (
        <select
          value={value || ''}
          onChange={handleChange}
          disabled={options.length === 0}
          style={{
            width: '100%',
            padding: '8px 12px',
            border: '1px solid var(--theme-elevation-150)',
            borderRadius: 'var(--style-radius-s)',
            background: 'var(--theme-input-bg)',
            color: 'var(--theme-text)',
            fontSize: 'inherit',
            lineHeight: '1.5',
            minHeight: '35px',
            appearance: 'none', // Убираем стандартную стрелку браузера для стилизации, если нужно
            backgroundImage: 'url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23currentColor%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E")',
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'right 0.7rem top 50%',
            backgroundSize: '0.65rem auto',
            cursor: 'pointer',
          }}
        >
          <option value="" disabled>
            {options.length === 0 ? 'Нет данных' : 'Выберите микрорайон'}
          </option>
          {options.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      )}

      <FieldDescription 
        path={path} 
        description={options.length > 0 ? 'Выберите микрорайон из списка' : 'Микрорайоны отсутствуют для данного района'} 
      />
    </div>
  )
}

export default MicrodistrictSelect