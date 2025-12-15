import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './Button';

const meta = {
    title: 'Atoms/Button',
    component: Button,
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['primary', 'secondary', 'hero', 'outline', 'ghost', 'destructive', 'link'],
            description: 'The style variant of the button',
        },
        size: {
            control: 'select',
            options: ['default', 'sm', 'lg', 'icon'],
            description: 'The size of the button (Note: Hero ignores this)',
        },
        disabled: {
            control: 'boolean',
        },
    },
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light',
            values: [
                { name: 'light', value: '#f8f8ff' },
                { name: 'dark', value: '#100c08' },
            ],
        },
    },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. Primary Innovation Button
export const Primary: Story = {
    args: {
        variant: 'primary',
        children: 'Start Free Trial',
    },
};

// 2. Secondary Innovation Button
export const Secondary: Story = {
    args: {
        variant: 'secondary',
        children: 'View Demo',
    },
};

// 3. Tern Hero Button
export const Hero: Story = {
    args: {
        variant: 'hero',
        children: 'Tern Hero',
    },
};

// Standard variants
export const Outline: Story = {
    args: {
        variant: 'outline',
        children: 'Outline',
    },
};

export const Ghost: Story = {
    args: {
        variant: 'ghost',
        children: 'Ghost',
    },
};

export const Destructive: Story = {
    args: {
        variant: 'destructive',
        children: 'Delete Project',
    },
};

export const Link: Story = {
    args: {
        variant: 'link',
        children: 'Read Documentation',
    },
};

// Combinations and Icons
export const PrimaryWithIcon: Story = {
    args: {
        variant: 'primary',
        children: (
            <>
                Create Project
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
            </>
        ),
    },
};

export const SecondaryWithIcon: Story = {
    args: {
        variant: 'secondary',
        children: (
            <>
                View Details
                <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                </svg>
            </>
        ),
    },
};

// Showcasing all button variants
export const AllVariants: Story = {
    render: () => (
        <div className="flex flex-col gap-8 p-8 bg-background text-foreground">
            {/* Hero Button */}
            <div className="flex flex-col items-center gap-2">
                <Button variant="hero">Tern Hero</Button>
                <span className="text-xs text-muted-foreground font-mono">Hero CTA</span>
            </div>

            {/* Main Action Buttons */}
            <div className="flex gap-6 flex-wrap justify-center">
                <div className="flex flex-col items-center gap-2">
                    <Button variant="primary">Start Free Trial</Button>
                    <span className="text-xs text-muted-foreground font-mono">Primary</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <Button variant="secondary">View Demo</Button>
                    <span className="text-xs text-muted-foreground font-mono">Secondary</span>
                </div>
            </div>

            {/* Standard Variants */}
            <div className="flex gap-6 flex-wrap justify-center">
                <div className="flex flex-col items-center gap-2">
                    <Button variant="outline">Learn More</Button>
                    <span className="text-xs text-muted-foreground font-mono">Outline</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <Button variant="ghost">Cancel</Button>
                    <span className="text-xs text-muted-foreground font-mono">Ghost</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <Button variant="destructive">Delete Project</Button>
                    <span className="text-xs text-muted-foreground font-mono">Destructive</span>
                </div>

                <div className="flex flex-col items-center gap-2">
                    <Button variant="link">Read Documentation</Button>
                    <span className="text-xs text-muted-foreground font-mono">Link</span>
                </div>
            </div>

            {/* Size Variations */}
            <div className="flex gap-4 items-center justify-center">
                <Button variant="primary" size="sm">Small</Button>
                <Button variant="primary" size="default">Default</Button>
                <Button variant="primary" size="lg">Large</Button>
            </div>
        </div>
    ),
};