import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { DonutChart } from './DonutChart';

const meta = {
    title: 'Data Visualization/DonutChart',
    component: DonutChart,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style={{ maxWidth: '300px' }}>
                <Story />
            </div>
        ),
    ],
} satisfies Meta<typeof DonutChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
