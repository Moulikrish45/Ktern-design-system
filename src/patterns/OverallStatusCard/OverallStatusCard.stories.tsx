import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { OverallStatusCard } from './OverallStatusCard';

const meta = {
    title: 'Organisms/Cards/Overall Status Card',
    component: OverallStatusCard,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ maxWidth: '350px' }} >
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof OverallStatusCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Overall Status',
        percentage: '72%',
        subtitle: '4 Phases Active',
        stats: [
            { label: 'Completed', value: '2/4', color: 'text-success' },
            { label: 'In Progress', value: '3', color: 'text-brand-secondary' },
        ],
    },
};
