'use client';

import { motion } from 'framer-motion';
import Icon from '@/components/ui/AppIcon';

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
  icon?: string;
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
  icon,
}: FormFieldProps) => {
  const isFilled = value?.length > 0;

  return (
    <div className="space-y-1.5 group">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1 px-1">
        <label htmlFor={name} className="block text-sm font-headline font-bold text-foreground/80 group-focus-within:text-primary transition-colors duration-200 uppercase tracking-wider">
          {label}
          {required && <span className="text-accent ml-1">*</span>}
        </label>
        {error && (
          <motion.span
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-xs font-semibold text-destructive tracking-wide sm:text-right"
          >
            {error}
          </motion.span>
        )}
      </div>

      <motion.div
        className="relative"
        whileTap={{ scale: 0.995 }}
      >
        {icon && (
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50 transition-colors duration-200 group-focus-within:text-primary z-10">
            <Icon name={icon} size={20} variant="outline" />
          </div>
        )}

        {type === 'textarea' ? (
          <textarea
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            rows={rows || 4}
            required={required}
            className={`w-full ${icon ? 'pl-12' : 'px-5'} py-4 bg-card/40 backdrop-blur-sm border-2 rounded-2xl font-body text-foreground transition-all duration-300 focus:outline-none focus:ring-0 focus:bg-card/80 ${error ? 'border-destructive/40 focus:border-destructive shadow-[0_0_15px_rgba(var(--destructive),0.1)]' : 'border-border/50 focus:border-primary shadow-sm focus:shadow-[0_10px_30px_rgba(var(--primary),0.05)]'
              }`}
          />
        ) : type === 'select' ? (
          <div className="relative">
            <select
              id={name}
              name={name}
              value={value}
              onChange={onChange}
              required={required}
              className={`w-full ${icon ? 'pl-12' : 'px-5'} py-4 bg-card/40 backdrop-blur-sm border-2 rounded-2xl font-body transition-all duration-300 appearance-none focus:outline-none focus:ring-0 focus:bg-card/80 ${value === '' ? 'text-foreground/70' : 'text-foreground'
                } ${error ? 'border-destructive/40 focus:border-destructive' : 'border-border/50 focus:border-primary'
                }`}
            >
              <option value="" disabled className="bg-card text-muted-foreground">{placeholder || 'Select an option'}</option>
              {options?.map((option) => (
                <option key={option.value} value={option.value} className="bg-card text-foreground py-2">
                  {option.label}
                </option>
              ))}
            </select>
            <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-muted-foreground/30">
              <Icon name="ChevronDownIcon" size={18} variant="outline" />
            </div>
          </div>
        ) : (
          <input
            id={name}
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            required={required}
            className={`w-full ${icon ? 'pl-12 pr-5' : 'px-5'} py-4 bg-card/40 backdrop-blur-sm border-2 rounded-2xl font-body text-foreground transition-all duration-300 focus:outline-none focus:ring-0 focus:bg-card/80 ${error ? 'border-destructive/40 focus:border-destructive shadow-[0_0_15px_rgba(var(--destructive),0.1)]' : 'border-border/50 focus:border-primary shadow-sm focus:shadow-[0_10px_30px_rgba(var(--primary),0.05)]'
              } ${type === 'date' ? '[&::-webkit-calendar-picker-indicator]:hidden [&::-webkit-inner-spin-button]:hidden [&::-webkit-clear-button]:hidden' : ''}`}
          />
        )}
      </motion.div>

      {helpText && !error && (
        <p className="text-[11px] text-muted-foreground/60 px-1 font-body italic">{helpText}</p>
      )}
    </div>
  );
};

export default FormField;