import React from 'react';
import { Card, CardContent } from '../../components/molecules/Card';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

export interface ActionCardProps {
    title: string;
    description: string;
    actionLabel: string;
    icon: React.ReactNode;
    onClick?: () => void;
    className?: string;
    variant?: 'default' | 'primary' | 'secondary';
}

export const ActionCard = ({
    title,
    description,
    actionLabel,
    icon,
    onClick,
    className,
    variant = 'default'
}: ActionCardProps) => {
    return (
        <Card
            onClick={onClick}
            className={cn(
                "group relative overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300 border-border/50 h-full",
                className
            )}
        >
            {/* Decorative Background Shape */}
            <div className={cn(
                "absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl transition-opacity duration-500 opacity-50 group-hover:opacity-100",
                variant === 'default' && "bg-orange-50 dark:bg-orange-900/10",
                variant === 'primary' && "bg-primary/10",
                variant === 'secondary' && "bg-secondary/10"
            )} />

            <CardContent className="p-6 relative z-10 flex flex-col h-full">
                {/* Icon */}
                <div className={cn(
                    "w-12 h-12 rounded-2xl flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-105 shadow-sm",
                    "bg-secondary/10 text-secondary-foreground dark:bg-secondary/20"
                )}>
                    {React.cloneElement(icon as React.ReactElement, {
                        className: "w-6 h-6"
                    })}
                </div>

                {/* Content */}
                <h3 className="text-xl font-bold tracking-tight mb-2 text-foreground group-hover:text-primary transition-colors">
                    {title}
                </h3>
                <p className="text-muted-foreground text-sm mb-6 leading-relaxed flex-grow">
                    {description}
                </p>

                {/* Action Link */}
                <div className="flex items-center gap-2 text-primary font-bold text-sm group-hover:gap-3 transition-all mt-auto">
                    {actionLabel}
                    <ArrowRight className="w-4 h-4" />
                </div>
            </CardContent>
        </Card>
    );
};
