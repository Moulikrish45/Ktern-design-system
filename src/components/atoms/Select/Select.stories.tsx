import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Select } from './Select';

const meta = {
    title: 'Atoms/Input/Select',
    component: Select,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light',
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// Sample options for stories
const sampleOptions = [
    { value: 'greenfield', label: 'Greenfield Implementation' },
    { value: 'brownfield', label: 'Brownfield Conversion' },
    { value: 'selective', label: 'Selective Data Transition' },
    { value: 'hybrid', label: 'Hybrid Approach' },
];

const countryOptions = [
    { value: 'us', label: 'United States' },
    { value: 'uk', label: 'United Kingdom' },
    { value: 'ca', label: 'Canada' },
    { value: 'au', label: 'Australia' },
    { value: 'de', label: 'Germany' },
];

// ============================================================================
// BASIC STORIES
// ============================================================================

export const Default: Story = {
    args: {
        label: "Migration Strategy",
        options: sampleOptions,
        placeholder: "Select a strategy...",
    },
};

export const WithHelperText: Story = {
    args: {
        label: "Deployment Region",
        options: countryOptions,
        helperText: "Select the primary region for your SAP deployment.",
        placeholder: "Choose a region...",
    },
};

export const WithDefaultValue: Story = {
    args: {
        label: "Migration Strategy",
        options: sampleOptions,
        defaultValue: "greenfield",
    },
};

export const Disabled: Story = {
    args: {
        label: "Locked Option",
        options: sampleOptions,
        defaultValue: "greenfield",
        disabled: true,
        helperText: "This option is currently locked.",
    },
};

// ============================================================================
// VALIDATION STATES
// ============================================================================

export const WithErrorState: Story = {
    args: {
        label: "Migration Strategy",
        options: sampleOptions,
        error: "Please select a migration strategy.",
        placeholder: "Select a strategy...",
    },
};

export const WithSuccessState: Story = {
    args: {
        label: "Migration Strategy",
        options: sampleOptions,
        success: "Strategy confirmed and validated.",
        defaultValue: "greenfield",
    },
};

export const WithWarningState: Story = {
    args: {
        label: "Migration Strategy",
        options: sampleOptions,
        warning: "This option requires additional review.",
        defaultValue: "hybrid",
    },
};

// ============================================================================
// INTERACTIVE EXAMPLE
// ============================================================================

export const Interactive: Story = {
    args: {
        options: sampleOptions,
    },
    render: (args) => {
        const [selectedValue, setSelectedValue] = React.useState('');
        const [message, setMessage] = React.useState('');

        const handleChange = (value: string) => {
            setSelectedValue(value);
            const option = sampleOptions.find(opt => opt.value === value);
            setMessage(`You selected: ${option?.label || 'None'}`);
        };

        return (
            <div className="w-full max-w-sm space-y-4">
                <Select
                    {...args}
                    label="Migration Strategy"
                    options={sampleOptions}
                    placeholder="Select a strategy..."
                    onChange={handleChange}
                    value={selectedValue}
                    helperText="Choose the best strategy for your transformation."
                />
                {message && (
                    <div className="p-3 bg-brand-primary/5 border border-brand-primary/20 rounded-md">
                        <p className="text-sm text-brand-primary font-medium">{message}</p>
                    </div>
                )}
            </div>
        );
    },
};

// ============================================================================
// FORM EXAMPLES
// ============================================================================

export const ProjectSetupForm: Story = {
    args: {
        options: sampleOptions,
    },
    render: () => (
        <form className="w-full max-w-md space-y-4">
            <Select
                label="Project Type"
                options={[
                    { value: 'migration', label: 'SAP S/4HANA Migration' },
                    { value: 'implementation', label: 'New Implementation' },
                    { value: 'upgrade', label: 'System Upgrade' },
                ]}
                placeholder="Choose project type..."
                helperText="Select the type of SAP transformation project."
            />
            <Select
                label="Priority Level"
                options={[
                    { value: 'critical', label: 'Critical' },
                    { value: 'high', label: 'High' },
                    { value: 'medium', label: 'Medium' },
                    { value: 'low', label: 'Low' },
                ]}
                defaultValue="high"
            />
            <Select
                label="Deployment Region"
                options={countryOptions}
                placeholder="Select region..."
                helperText="Primary region for deployment."
            />
        </form>
    ),
};
