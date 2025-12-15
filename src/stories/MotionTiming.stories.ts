import type { Meta, StoryObj } from '@storybook/react-vite';
import { MotionTiming } from '@/components/tokens/MotionTiming';

const meta = {
    title: 'Tokens/Motion & Timing',
    component: MotionTiming,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof MotionTiming>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
