import type { Meta, StoryObj } from '@storybook/react-vite';
import { TextInput } from '@/components/atoms/Input/TextInput';

const meta = {
    title: 'Atoms/Inputs/Text Input',
    component: TextInput,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        state: {
            control: 'select',
            options: ['default', 'focused', 'error', 'success', 'disabled'],
            description: 'Input state',
        },
        label: {
            control: 'text',
            description: 'Label text',
        },
        placeholder: {
            control: 'text',
            description: 'Placeholder text',
        },
        helperText: {
            control: 'text',
            description: 'Helper text below input',
        },
        withIcon: {
            control: 'boolean',
            description: 'Show search icon',
        },
    },
} satisfies Meta<typeof TextInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Project Name',
        placeholder: 'Enter project name',
        state: 'default',
    },
};

export const Focused: Story = {
    args: {
        label: 'Project Name',
        placeholder: 'Enter project name',
        state: 'focused',
    },
};

export const Error: Story = {
    args: {
        label: 'Project Name',
        placeholder: 'Enter project name',
        state: 'error',
        helperText: 'This field is required',
    },
};

export const Success: Story = {
    args: {
        label: 'Project Name',
        placeholder: 'Enter project name',
        state: 'success',
        helperText: 'Looks good!',
    },
};

export const Disabled: Story = {
    args: {
        label: 'Project Name',
        placeholder: 'Enter project name',
        state: 'disabled',
    },
};

export const WithSearchIcon: Story = {
    args: {
        label: 'Search',
        placeholder: 'Search modules...',
        state: 'default',
        withIcon: true,
    },
};
