import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { BarChart } from './BarChart';

const meta = {
    title: 'Data Visualization/BarChart',
    component: BarChart,
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
} satisfies Meta<typeof BarChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        title: 'Module Split',
        bars: [
            { height: 40, label: '40%' },
            { height: 80, label: '80%' },
            { height: 60, label: '60%' },
        ],
        labels: ['Core', 'Ext', 'API'],
    },
};
