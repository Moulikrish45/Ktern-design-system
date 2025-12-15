import type { Meta, StoryObj } from '@storybook/react-vite';
import { ShadowsElevation } from '@/components/tokens/ShadowsElevation';

const meta = {
    title: 'Tokens/Shadows & Elevation',
    component: ShadowsElevation,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof ShadowsElevation>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
