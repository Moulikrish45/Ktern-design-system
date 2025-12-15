import type { Meta, StoryObj } from '@storybook/react-vite';
import { Iconography } from '@/components/foundation/Iconography';

const meta = {
    title: 'Foundation/Iconography',
    component: Iconography,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Iconography>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
