import * as React from 'react';
import { Card, CardHeader, CardContent, CardFooter, CardTitle, CardDescription } from '@/components/molecules/Card';
import { Button } from '@/components/atoms/Button';
import { RocketIcon, CalendarIcon, UsersIcon, ArrowRightIcon } from '@/components/icons';
import { cn } from '@/lib/utils';

export interface ProjectCardProps {
    /** Project name/title */
    title: string;
    /** Project description */
    description: string;
    /** Project status */
    status: 'active' | 'planning' | 'completed';
    /** Project deadline */
    deadline?: string;
    /** Team size */
    teamSize?: number;
    /** Optional click handler for the entire card */
    onClick?: () => void;
    /** Optional action button text */
    actionLabel?: string;
    /** Optional action button click handler */
    onAction?: () => void;
    /** Additional className */
    className?: string;
}

const statusConfig = {
    active: {
        label: 'Active',
        color: 'bg-success/10 text-success border-success/20',
        dotColor: 'bg-success',
    },
    planning: {
        label: 'Planning',
        color: 'bg-warning/10 text-warning border-warning/20',
        dotColor: 'bg-warning',
    },
    completed: {
        label: 'Completed',
        color: 'bg-brand-primary/10 text-brand-primary border-brand-primary/20',
        dotColor: 'bg-brand-primary',
    },
};

/**
 * ProjectCard - Accessible card component for displaying project information
 * 
 * Features:
 * - Composition pattern using Card primitives
 * - Proper semantic HTML (button for clickable areas)
 * - Keyboard accessible
 * - Hover effects with animations
 * - Dark mode support
 */
export const ProjectCard = ({
    title,
    description,
    status,
    deadline,
    teamSize,
    onClick,
    actionLabel = 'View Details',
    onAction,
    className,
}: ProjectCardProps) => {
    const config = statusConfig[status];
    const isCardClickable = !!onClick && !onAction;

    // Wrapper component - either button (clickable card) or div
    const Wrapper = isCardClickable ? 'button' : 'div';
    const wrapperProps = isCardClickable
        ? {
            onClick,
            type: 'button' as const,
            className: 'text-left w-full',
        }
        : {};

    return (
        <Wrapper {...wrapperProps}>
            <Card
                className={cn(
                    'group relative overflow-hidden transition-all duration-300',
                    'hover:shadow-xl hover:shadow-brand-primary/10 hover:-translate-y-1',
                    'hover:border-brand-primary',
                    isCardClickable && 'cursor-pointer',
                    className
                )}
            >
                {/* Animated gradient line */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-brand-primary to-brand-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

                <CardHeader>
                    {/* Icon and Status Row */}
                    <div className="flex items-start justify-between mb-3">
                        <div className="w-12 h-12 rounded-xl bg-brand-primary/10 flex items-center justify-center text-brand-primary group-hover:scale-110 transition-transform duration-300">
                            <RocketIcon className="w-6 h-6" />
                        </div>

                        {/* Status Badge */}
                        <span
                            className={cn(
                                'flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold border',
                                config.color
                            )}
                        >
                            <span className={cn('w-1.5 h-1.5 rounded-full', config.dotColor)} />
                            {config.label}
                        </span>
                    </div>

                    <CardTitle className="group-hover:text-brand-primary transition-colors">
                        {title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">{description}</CardDescription>
                </CardHeader>

                <CardContent>
                    {/* Metadata */}
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        {deadline && (
                            <div className="flex items-center gap-1.5">
                                <CalendarIcon className="w-4 h-4" />
                                <span>{deadline}</span>
                            </div>
                        )}
                        {teamSize && (
                            <div className="flex items-center gap-1.5">
                                <UsersIcon className="w-4 h-4" />
                                <span>{teamSize} members</span>
                            </div>
                        )}
                    </div>
                </CardContent>

                {/* Action Button (only if onAction is provided) */}
                {onAction && (
                    <CardFooter>
                        <Button
                            variant="ghost"
                            size="sm"
                            onClick={(e) => {
                                e.stopPropagation(); // Prevent card click if it's also clickable
                                onAction();
                            }}
                            className="group/btn w-full justify-between"
                        >
                            {actionLabel}
                            <ArrowRightIcon className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                    </CardFooter>
                )}

                {/* Arrow indicator for clickable cards */}
                {isCardClickable && (
                    <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                        <ArrowRightIcon className="w-5 h-5 text-brand-primary" />
                    </div>
                )}
            </Card>
        </Wrapper>
    );
};

export default ProjectCard;
