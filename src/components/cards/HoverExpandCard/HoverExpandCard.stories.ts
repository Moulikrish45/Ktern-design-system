import type { Meta, StoryObj } from '@storybook/react-vite';
import { HoverExpandCardAlt } from './HoverExpandCard';

const meta = {
    title: 'Organisms/Cards/Hover Expand Card',
    component: HoverExpandCardAlt,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        icon: {
            control: 'select',
            options: ['rocket', 'flask', 'enterprise'],
        },
    },
} satisfies Meta<typeof HoverExpandCardAlt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Rocket: Story = {
    args: {
        icon: 'rocket',
    },
};

export const Flask: Story = {
    args: {
        icon: 'flask',
    },
};

export const Enterprise: Story = {
    args: {
        icon: 'enterprise',
    },
};
