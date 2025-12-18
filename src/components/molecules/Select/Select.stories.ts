import type { Meta, StoryObj } from '@storybook/react-vite';
import { Select } from './Select';

const meta = {
    title: 'Atoms/Inputs/Select',
    component: Select,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Migration Strategy',
        options: ['Greenfield Implementation', 'Brownfield Conversion', 'Selective Data Transition'],
    },
};
