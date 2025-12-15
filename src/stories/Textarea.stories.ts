import type { Meta, StoryObj } from '@storybook/react-vite';
import { Textarea } from '@/components/forms/Textarea';

const meta = {
    title: 'Components/Forms/Textarea',
    component: Textarea,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Textarea>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        label: 'Description',
        placeholder: 'Briefly describe the scope of this project...',
        rows: 3,
    },
};
