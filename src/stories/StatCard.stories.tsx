import type { Meta, StoryObj } from '@storybook/react-vite';
import { StatCard } from '@/components/cards/StatCard';

const meta = {
    title: 'Components/Cards/Stat Card',
    component: StatCard,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
    decorators: [
        (Story) => (
            <div style= {{ maxWidth: '350px' }} >
    <Story />
    </div>
    ),
  ],
} satisfies Meta<typeof StatCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Active Projects',
        value: "15",
        trend: {
            value: '+8 this month',
            isPositive: true,
        },
        details: [
            { label: 'In Progress', value: '18' },
            { label: 'Completed', value: '6' },
        ],
    },
};
