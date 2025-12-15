import type { Meta, StoryObj } from '@storybook/react-vite';
import { DashboardGrid } from '@/components/patterns/DashboardGrid';

const meta = {
    title: 'Patterns/Layout/Dashboard Grid',
    component: DashboardGrid,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DashboardGrid>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
