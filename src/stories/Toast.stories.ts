import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toast } from '@/components/feedback/Toast';

const meta = {
    title: 'Components/Feedback/Toast',
    component: Toast,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['success', 'error', 'warning', 'info'],
            description: 'Toast variant',
        },
        title: {
            control: 'text',
            description: 'Toast title',
        },
        message: {
            control: 'text',
            description: 'Toast message',
        },
    },
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
    args: {
        variant: 'success',
        title: 'Success',
        message: 'Project configuration saved successfully.',
    },
};

export const Error: Story = {
    args: {
        variant: 'error',
        title: 'Error',
        message: 'Failed to save changes. Please try again.',
    },
};

export const Warning: Story = {
    args: {
        variant: 'warning',
        title: 'Warning',
        message: 'System maintenance scheduled for tonight.',
    },
};

export const Info: Story = {
    args: {
        variant: 'info',
        title: 'Information',
        message: 'New features available in this release.',
    },
};
