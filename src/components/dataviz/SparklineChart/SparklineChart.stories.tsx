import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { SparklineChart } from './SparklineChart';

const meta = {
    title: 'Data Visualization/SparklineChart',
    component: SparklineChart,
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
} satisfies Meta<typeof SparklineChart>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
