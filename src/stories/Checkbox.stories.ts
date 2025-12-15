import type { Meta, StoryObj } from '@storybook/react-vite';
import { Checkbox } from '@/components/forms/Checkbox';

const meta = {
    title: 'Components/Forms/Checkbox',
    component: Checkbox,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'I confirm that the data provided is accurate.',
        checked: false,
    },
};

export const Checked: Story = {
    args: {
        label: 'I confirm that the data provided is accurate.',
        checked: true,
    },
};
