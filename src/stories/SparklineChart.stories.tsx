import type { Meta, StoryObj } from '@storybook/react-vite';
import { SparklineChart } from '@/components/dataviz/SparklineChart';

const meta = {
    title: 'Patterns/Data Visualization/Sparkline Chart',
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
