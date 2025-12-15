import type { Meta, StoryObj } from '@storybook/react-vite';
import { DonutChart } from '@/components/dataviz/DonutChart';

const meta = {
    title: 'Patterns/Data Visualization/Donut Chart',
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
