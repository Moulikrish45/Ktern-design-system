import type { Meta, StoryObj } from '@storybook/react-vite';
import { TypographyScale } from '@/components/foundation/TypographyScale';

const meta = {
    title: 'Foundation/Typography Scale',
    component: TypographyScale,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof TypographyScale>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
