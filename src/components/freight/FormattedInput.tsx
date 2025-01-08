import React from 'react';

interface FormattedInputProps {
  type: 'currency' | 'weight' | 'dimensions';
  label: string;
  required?: boolean;
  value: string;
  onChange: (value: string) => void;
  className?: string;
}

export function FormattedInput({
  type,
  label,
  required = false,
  value,
  onChange,
  className = ''
}: FormattedInputProps) {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value;
    onChange(newValue);
  };

  const getSuffix = () => {
    switch (type) {
      case 'weight':
        return 'kg';
      case 'dimensions':
        return 'cm';
      case 'currency':
        return null;
      default:
        return null;
    }
  };

  return (
    <div className="space-y-2">
      {label && (
        <label className={`block text-sm font-medium text-gray-700 ${required ? 'required' : ''}`}>
          {label}
        </label>
      )}
      <div className="relative">
        {type === 'currency' && (
          <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
            R$
          </span>
        )}
        <input
          type="number"
          step="0.01"
          value={value}
          onChange={handleChange}
          placeholder="0.00"
          className={`form-input ${type === 'currency' ? 'pl-9' : ''} ${
            getSuffix() ? 'pr-12' : ''
          } ${className}`}
          required={required}
        />
        {getSuffix() && (
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
            {getSuffix()}
          </span>
        )}
      </div>
    </div>
  );
}