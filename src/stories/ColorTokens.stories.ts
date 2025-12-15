import type { Meta, StoryObj } from '@storybook/react-vite';
import { ColorTokens } from '@/components/foundation/ColorTokens';

const meta = {
    title: 'Foundation/Color Tokens',
    component: ColorTokens,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ColorTokens>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
