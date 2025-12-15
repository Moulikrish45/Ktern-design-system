import type { Meta, StoryObj } from '@storybook/react-vite';
import { SecondaryButton } from '@/components/atoms/Button/SecondaryButton';

const meta = {
    title: 'Components/Buttons/Secondary Button',
    component: SecondaryButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: 'text',
            description: 'Button label',
        },
        disabled: {
            control: 'boolean',
            description: 'Disable the button',
        },
    },
} satisfies Meta<typeof SecondaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Cancel',
    },
};

export const Disabled: Story = {
    args: {
        children: 'Cancel',
        disabled: true,
    },
};
