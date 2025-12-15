import React from 'react';
import type { Meta, StoryObj } from '@storybook/react-vite';
import { TransformationVelocityCard } from '@/components/cards/TransformationVelocityCard';

const meta = {
    title: 'Organisms/Cards/Transformation Velocity Card',
    component: TransformationVelocityCard,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ maxWidth: '350px' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof TransformationVelocityCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Transformation Velocity',
        percentage: '84.5%',
        badge: '+12%',
        bars: [
            { value: 40, label: '40%' },
            { value: 65, label: '65%' },
            { value: 50, label: '50%' },
            { value: 85, label: '85%' },
            { value: 95, label: '95%' },
        ],
    },
};
