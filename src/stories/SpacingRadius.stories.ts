import type { Meta, StoryObj } from '@storybook/react-vite';
import { SpacingRadius } from '@/components/tokens/SpacingRadius';

const meta = {
    title: 'Tokens/Spacing & Radius',
    component: SpacingRadius,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof SpacingRadius>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
