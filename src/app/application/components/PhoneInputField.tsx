'use client';

import { motion } from 'framer-motion';
import Icon from '@/components/ui/AppIcon';

interface PhoneInputFieldProps {
    label: string;
    name: string;
    value: string;
    countryCode: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
    error?: string;
    required?: boolean;
    placeholder?: string;
    icon?: string;
}

const PhoneInputField = ({
    label,
    name,
    value,
    countryCode,
    onChange,
    error,
    required = false,
    placeholder,
    icon,
}: PhoneInputFieldProps) => {
    const countryCodes = [
        { code: '+1', country: 'US/CA', flag: '🇺🇸' },
        { code: '+44', country: 'UK', flag: '🇬🇧' },
        { code: '+91', country: 'IN', flag: '🇮🇳' },
        { code: '+61', country: 'AU', flag: '🇦🇺' },
        { code: '+971', country: 'AE', flag: '🇦🇪' },
        { code: '+65', country: 'SG', flag: '🇸🇬' },
        { code: '+60', country: 'MY', flag: '🇲🇾' },
        { code: '+86', country: 'CN', flag: '🇨🇳' },
        { code: '+81', country: 'JP', flag: '🇯🇵' },
        { code: '+82', country: 'KR', flag: '🇰🇷' },
    ];

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
                className="relative flex"
                whileTap={{ scale: 0.995 }}
            >
                {icon && (
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground/50 transition-colors duration-200 group-focus-within:text-primary z-10">
                        <Icon name={icon} size={20} variant="outline" />
                    </div>
                )}

                {/* Country Code Dropdown */}
                <div className="relative">
                    <select
                        id="countryCode"
                        name="countryCode"
                        value={countryCode}
                        onChange={onChange}
                        className={`h-full ${icon ? 'pl-12' : 'pl-4'} pr-2 py-4 bg-card/40 backdrop-blur-sm border-2 rounded-l-2xl font-body text-foreground transition-all duration-300 focus:outline-none focus:ring-0 focus:bg-card/80 ${error ? 'border-destructive/40 focus:border-destructive' : 'border-border/50 focus:border-primary'} appearance-none cursor-pointer`}
                    >
                        {countryCodes.map(({ code, country, flag }) => (
                            <option key={code} value={code}>
                                {flag} {code}
                            </option>
                        ))}
                    </select>
                    <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none">
                        <Icon name="ChevronDownIcon" size={16} variant="outline" className="text-muted-foreground/50" />
                    </div>
                </div>

                {/* Phone Number Input */}
                <input
                    id={name}
                    name={name}
                    type="tel"
                    value={value}
                    onChange={onChange}
                    placeholder={placeholder}
                    required={required}
                    className={`flex-1 px-5 py-4 bg-card/40 backdrop-blur-sm border-2 border-l-0 rounded-r-2xl font-body text-foreground transition-all duration-300 focus:outline-none focus:ring-0 focus:bg-card/80 ${error ? 'border-destructive/40 focus:border-destructive shadow-[0_0_15px_rgba(var(--destructive),0.1)]' : 'border-border/50 focus:border-primary shadow-sm focus:shadow-[0_10px_30px_rgba(var(--primary),0.05)]'
                        }`}
                />
            </motion.div>
        </div>
    );
};

export default PhoneInputField;
