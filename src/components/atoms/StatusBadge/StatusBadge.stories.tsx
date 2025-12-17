import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { StatusBadge } from './StatusBadge';

const meta = {
    title: 'Atoms/StatusBadge',
    component: StatusBadge,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        variant: {
            control: 'select',
            options: ['success', 'warning', 'error', 'info', 'neutral', 'primary'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
        showDot: {
            control: 'boolean',
        },
    },
} satisfies Meta<typeof StatusBadge>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
    args: {
        children: 'Active',
        variant: 'success',
        showDot: true,
    },
};

export const Warning: Story = {
    args: {
        children: 'Pending',
        variant: 'warning',
        showDot: true,
    },
};

export const Error: Story = {
    args: {
        children: 'Failed',
        variant: 'error',
        showDot: true,
    },
};

export const Info: Story = {
    args: {
        children: 'In Progress',
        variant: 'info',
        showDot: true,
    },
};

export const Neutral: Story = {
    args: {
        children: 'Draft',
        variant: 'neutral',
    },
};

export const WithoutDot: Story = {
    args: {
        children: 'Completed',
        variant: 'success',
        showDot: false,
    },
};

export const Small: Story = {
    args: {
        children: 'Small',
        variant: 'info',
        size: 'sm',
        showDot: true,
    },
};

export const Large: Story = {
    args: {
        children: 'Large Badge',
        variant: 'primary',
        size: 'lg',
        showDot: true,
    },
};

export const AllVariants: Story = {
    args: {
        children: 'Variants', // Dummy arg to satisfy type requirement
    },
    render: () => (
        <div className="flex flex-wrap gap-3">
            <StatusBadge variant="success" showDot>Active</StatusBadge>
            <StatusBadge variant="warning" showDot>Pending</StatusBadge>
            <StatusBadge variant="error" showDot>Failed</StatusBadge>
            <StatusBadge variant="info" showDot>In Progress</StatusBadge>
            <StatusBadge variant="neutral" showDot>Draft</StatusBadge>
            <StatusBadge variant="primary" showDot>Featured</StatusBadge>
        </div>
    ),
};

export const AllSizes: Story = {
    args: {
        children: 'Sizes', // Dummy arg to satisfy type requirement
    },
    render: () => (
        <div className="flex items-center gap-3">
            <StatusBadge variant="success" size="sm" showDot>Small</StatusBadge>
            <StatusBadge variant="success" size="md" showDot>Medium</StatusBadge>
            <StatusBadge variant="success" size="lg" showDot>Large</StatusBadge>
        </div>
    ),
};
