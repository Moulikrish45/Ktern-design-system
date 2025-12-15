import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DataVizCard } from './DataVizCard';

const meta = {
    title: 'Cards/DataVizCard',
    component: DataVizCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DataVizCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Overall Status',
        percentage: 76,
        bars: [
            { label: 'Completed', value: 45, color: 'bg-success' },
            { label: 'In Progress', value: 30, color: 'bg-warning' },
            { label: 'Pending', value: 25, color: 'bg-gray-300' },
        ],
    },
};
