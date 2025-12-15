import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
import { Label } from '../Label';

const meta = {
    title: 'Atoms/Textarea',
    component: Textarea,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light',
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================================================
// BASIC STORIES
// ============================================================================

export const Default: Story = {
    args: {
        placeholder: 'Type your message...',
    },
};

export const Disabled: Story = {
    args: {
        placeholder: 'This textarea is disabled',
        disabled: true,
    },
};

export const WithDefaultValue: Story = {
    args: {
        defaultValue: 'This is some pre-filled content in the textarea.\n\nIt supports multiple lines as you can see.',
    },
};

export const WithRows: Story = {
    args: {
        placeholder: 'Custom height with rows',
        rows: 6,
    },
};

// ============================================================================
// COMPOSITION PATTERNS (Label + Textarea)
// ============================================================================

export const WithLabel: Story = {
    render: () => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="message">Your message</Label>
            <Textarea id="message" placeholder="Type your message here." />
        </div>
    ),
};

export const WithHelperText: Story = {
    render: () => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="bio">Bio</Label>
            <Textarea id="bio" placeholder="Tell us about yourself" />
            <p className="text-sm text-muted-foreground">
                You can use markdown formatting.
            </p>
        </div>
    ),
};

export const WithCharacterCount: Story = {
    render: () => {
        const [value, setValue] = React.useState('');
        const maxLength = 280;

        return (
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="tweet">Tweet</Label>
                <Textarea
                    id="tweet"
                    placeholder="What's happening?"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    maxLength={maxLength}
                    rows={4}
                />
                <p className="text-sm text-muted-foreground text-right">
                    {value.length} / {maxLength}
                </p>
            </div>
        );
    },
};

export const WithErrorState: Story = {
    render: () => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="description" className="text-destructive">
                Description
            </Label>
            <Textarea
                id="description"
                placeholder="Describe the issue"
                className="border-destructive focus-visible:ring-destructive"
                aria-invalid="true"
                aria-describedby="description-error"
            />
            <p id="description-error" className="text-sm text-destructive">
                Description must be at least 10 characters.
            </p>
        </div>
    ),
};

export const DisabledWithLabel: Story = {
    render: () => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="disabled">Disabled Textarea</Label>
            <Textarea
                id="disabled"
                placeholder="Can't edit this"
                disabled
                defaultValue="This content cannot be edited."
            />
        </div>
    ),
};

// ============================================================================
// FORM EXAMPLES
// ============================================================================

export const FeedbackForm: Story = {
    render: () => (
        <form className="w-full max-w-md space-y-4">
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="form-name">Name</Label>
                <input
                    type="text"
                    id="form-name"
                    placeholder="John Doe"
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                />
            </div>

            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="feedback">Feedback</Label>
                <Textarea
                    id="feedback"
                    placeholder="Tell us what you think..."
                    rows={5}
                />
                <p className="text-sm text-muted-foreground">
                    Your feedback helps us improve our products.
                </p>
            </div>
        </form>
    ),
};

// ============================================================================
// DARK MODE
// ============================================================================

export const DarkMode: Story = {
    render: () => (
        <div className="dark p-8 bg-surface-dark rounded-lg">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="dark-message" className="text-text-primary-dark">
                    Message (Dark Mode)
                </Label>
                <Textarea
                    id="dark-message"
                    placeholder="Type your message..."
                    className="bg-surface-dark text-text-primary-dark"
                    rows={4}
                />
                <p className="text-sm text-text-muted-dark">
                    Dark mode styling applied
                </p>
            </div>
        </div>
    ),
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};
