interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void;
  error?: string;
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  rows?: number;
  helpText?: string;
}

const FormField = ({
  label,
  name,
  type = 'text',
  value,
  onChange,
  error,
  required = false,
  placeholder,
  options,
  rows,
  helpText,
}: FormFieldProps) => {
  const inputClasses = `w-full px-4 py-3 border rounded-md font-body text-foreground bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-200 ${
    error ? 'border-destructive' : 'border-input'
  }`;

  return (
    <div className="space-y-2">
      <label htmlFor={name} className="block font-body font-medium text-foreground">
        {label}
        {required && <span className="text-destructive ml-1">*</span>}
      </label>

      {type === 'textarea' ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          rows={rows || 4}
          required={required}
          className={inputClasses}
        />
      ) : type === 'select' ? (
        <select
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          required={required}
          className={inputClasses}
        >
          <option value="">Select an option</option>
          {options?.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          required={required}
          className={inputClasses}
        />
      )}

      {helpText && <p className="text-sm text-muted-foreground">{helpText}</p>}
      {error && <p className="text-sm text-destructive">{error}</p>}
    </div>
  );
};

export default FormField;