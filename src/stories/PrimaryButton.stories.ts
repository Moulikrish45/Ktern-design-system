import type { Meta, StoryObj } from '@storybook/react-vite';
import { PrimaryButton } from '@/components/atoms/Button/PrimaryButton';

const meta = {
    title: 'Components/Buttons/Primary Button',
    component: PrimaryButton,
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
} satisfies Meta<typeof PrimaryButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Submit',
    },
};

export const Disabled: Story = {
    args: {
        children: 'Submit',
        disabled: true,
    },
};

export const CustomLabel: Story = {
    args: {
        children: 'Yes, Proceed',
    },
};
