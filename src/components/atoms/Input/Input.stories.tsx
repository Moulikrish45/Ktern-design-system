import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Input } from './Input';
import { Label } from '../Label';

const meta = {
    title: 'Atoms/Input',
    component: Input,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light',
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================================================
// BASIC STORIES
// ============================================================================

export const Default: Story = {
    args: {
        placeholder: 'Enter text...',
    },
};

export const Disabled: Story = {
    args: {
        placeholder: 'Disabled input',
        disabled: true,
    },
};

export const WithDefaultValue: Story = {
    args: {
        defaultValue: 'Pre-filled value',
    },
};

export const EmailType: Story = {
    args: {
        type: 'email',
        placeholder: 'email@example.com',
    },
};

export const PasswordType: Story = {
    args: {
        type: 'password',
        placeholder: 'Enter password',
    },
};

export const FileType: Story = {
    args: {
        type: 'file',
        label: 'Upload Assets',
        helperText: 'Select the files you want to include in your project.',
    },
};

// ============================================================================
// COMPOSITION PATTERNS (Label + Input)
// ============================================================================

export const WithLabel: Story = {
    render: () => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input type="email" id="email" placeholder="Email" />
        </div>
    ),
};

export const WithHelperText: Story = {
    render: () => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email-2">Email</Label>
            <Input type="email" id="email-2" placeholder="Email" />
            <p className="text-sm text-muted-foreground">
                We'll never share your email with anyone else.
            </p>
        </div>
    ),
};

export const WithErrorState: Story = {
    render: () => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="email-3" className="text-destructive">
                Email
            </Label>
            <Input
                type="email"
                id="email-3"
                placeholder="Email"
                className="border-destructive focus-visible:ring-destructive"
                aria-invalid="true"
                aria-describedby="email-error"
            />
            <p id="email-error" className="text-sm text-destructive">
                Please enter a valid email address.
            </p>
        </div>
    ),
};

export const WithSuccessState: Story = {
    render: () => (
        <Input
            type="email"
            label="Email"
            placeholder="Email"
            success="Email is available"
            defaultValue="user@example.com"
            className="max-w-sm"
        />
    ),
};

export const WithWarningState: Story = {
    render: () => (
        <Input
            type="password"
            label="Password"
            placeholder="Enter password"
            warning="Password is weak"
            defaultValue="123456"
            className="max-w-sm"
        />
    ),
};

export const DisabledWithLabel: Story = {
    render: () => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="disabled">Disabled Input</Label>
            <Input
                id="disabled"
                placeholder="Can't edit this"
                disabled
            />
            <p className="text-sm text-muted-foreground">
                This field is currently disabled.
            </p>
        </div>
    ),
};

// ============================================================================
// FORM EXAMPLES
// ============================================================================

export const ContactForm: Story = {
    render: () => (
        <form className="w-full max-w-sm space-y-4">
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="name">Name</Label>
                <Input type="text" id="name" placeholder="John Doe" />
            </div>

            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="email-form">Email</Label>
                <Input type="email" id="email-form" placeholder="john@example.com" />
            </div>

            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="phone">Phone</Label>
                <Input type="tel" id="phone" placeholder="+1 (555) 000-0000" />
            </div>
        </form>
    ),
};
