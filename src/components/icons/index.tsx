import React from 'react';

export interface IconProps {
    className?: string;
    size?: number;
}

/**
 * Rocket Icon - Represents project launch, innovation
 */
export const RocketIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
    <svg
        width={size || 24}
        height={size || 24}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M21.737 1.5c-5.397.006-9.981 2.975-13.253 6H2.25l-.75.75v4.5l.221.531 1.487 1.487.002.014 6 6 .014.002 1.499 1.499.277.217h4.5l.75-.75v-6.231c3.029-3.268 5.994-7.85 5.988-13.269zM3 9h3.965a36 36 0 0 0-3.338 4.065L3 12.441zm8.55 12-.63-.635a35.4 35.4 0 0 0 4.073-3.324V21zm-1.715-1.716L4.704 14.156C6.192 12 12.569 3.533 20.967 3.024c-.489 8.418-8.981 14.78-11.132 16.26M6 22.5v-1.5H3v-3H1.5v4.5zm10.122-11.5a2.25 2.25 0 1 0-3.744-2.499 2.25 2.25 0 0 0 3.744 2.499z"
            fill="currentColor"
        />
        <path d="M6 22.5v-1.5H3v-3H1.5v4.5z" fill="#ff8f00" />
    </svg>
);

/**
 * Flask Icon - Represents testing, experimentation
 */
export const FlaskIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
    <svg
        width={size || 24}
        height={size || 24}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path
            d="M9 3v4.5l-3.5 6.5v4.5c0 1.933 1.567 3.5 3.5 3.5h6c1.933 0 3.5-1.567 3.5-3.5V14l-3.5-6.5V3M9 3h6"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
        />
        <path d="M6.5 16h11" stroke="#ff8f00" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

/**
 * Enterprise Icon - Represents business, organization
 */
export const EnterpriseIcon: React.FC<IconProps> = ({ className = "w-6 h-6", size }) => (
    <svg
        width={size || 24}
        height={size || 24}
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
    >
        <path d="M4 3h12v18H4V3z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M16 10h4v11h-4V10z" stroke="currentColor" strokeWidth="2" fill="none" />
        <path d="M2 21h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <rect x="6" y="6" width="2" height="2" fill="currentColor" />
        <rect x="10" y="6" width="2" height="2" fill="currentColor" />
        <rect x="6" y="10" width="2" height="2" fill="currentColor" />
        <rect x="10" y="10" width="2" height="2" fill="currentColor" />
        <rect x="6" y="14" width="2" height="2" fill="#ff8f00" />
        <rect x="10" y="14" width="2" height="2" fill="#ff8f00" />
    </svg>
);

/**
 * Calendar Icon - Represents scheduling, deadlines
 */
export const CalendarIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
    <svg
        width={size || 20}
        height={size || 20}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
    >
        <rect x="3" y="4" width="14" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
        <path d="M3 8h14" stroke="currentColor" strokeWidth="2" />
        <path d="M7 2v4M13 2v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

/**
 * Arrow Right Icon - Represents navigation, forward action
 */
export const ArrowRightIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
    <svg
        width={size || 20}
        height={size || 20}
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        stroke="currentColor"
    >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
    </svg>
);

/**
 * Users Icon - Represents team, collaboration
 */
export const UsersIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
    <svg
        width={size || 20}
        height={size || 20}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
    >
        <circle cx="7" cy="6" r="3" stroke="currentColor" strokeWidth="2" />
        <path d="M2 18c0-2.761 2.239-5 5-5s5 2.239 5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="14" cy="5" r="2" stroke="currentColor" strokeWidth="2" />
        <path d="M18 16c0-1.657-1.343-3-3-3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
);

/**
 * Status Badge Icon - Represents project status
 */
export const StatusBadgeIcon: React.FC<IconProps> = ({ className = "w-5 h-5", size }) => (
    <svg
        width={size || 20}
        height={size || 20}
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        fill="none"
    >
        <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="2" />
        <path d="M7 10l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);
