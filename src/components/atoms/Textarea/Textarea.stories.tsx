import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Textarea } from './Textarea';
import { Label } from '../Label';

const meta = {
    title: 'Atoms/Input/Textarea',
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
// COMPOSITION PATTERNS (Integrated Props)
// ============================================================================

export const WithLabel: Story = {
    args: {
        label: "Your Message",
        placeholder: "Type your message here.",
    }
};

export const WithHelperText: Story = {
    args: {
        label: "Bio",
        placeholder: "Tell us about yourself",
        helperText: "You can use markdown formatting.",
    }
};

export const WithErrorState: Story = {
    args: {
        label: "Description",
        placeholder: "Describe the issue",
        error: "Description must be at least 10 characters.",
    }
};

export const WithSuccessState: Story = {
    args: {
        label: "Testimonial",
        placeholder: "Share your experience",
        success: "Thank you for your feedback!",
        defaultValue: "This platform has completely transformed our workflow.",
    }
};

export const WithWarningState: Story = {
    args: {
        label: "Security Update",
        placeholder: "Explain the changes",
        warning: "This message will be visible to all members.",
    }
};

export const WithCharacterCount: Story = {
    render: (args) => {
        const [value, setValue] = React.useState('');
        const maxLength = 280;

        return (
            <div className="w-full max-w-sm">
                <Textarea
                    {...args}
                    label="Tweet"
                    placeholder="What's happening?"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    maxLength={maxLength}
                    rows={4}
                    helperText={`${value.length} / ${maxLength} characters`}
                />
            </div>
        );
    },
};

// ============================================================================
// FORM EXAMPLES
// ============================================================================

export const FeedbackForm: Story = {
    render: () => (
        <form className="w-full max-w-md space-y-4">
            <Textarea
                label="Product Feedback"
                placeholder="Tell us what you think..."
                rows={5}
                helperText="Your feedback helps us improve our products."
            />
        </form>
    ),
};

