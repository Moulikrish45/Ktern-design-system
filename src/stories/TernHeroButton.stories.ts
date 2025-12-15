import type { Meta, StoryObj } from '@storybook/react-vite';
import { TernHeroButton } from '@/components/atoms/Button/TernHeroButton';

const meta = {
    title: 'Components/Buttons/Tern Hero Button',
    component: TernHeroButton,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        children: {
            control: 'text',
            description: 'Button label',
        },
    },
} satisfies Meta<typeof TernHeroButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Get Started',
    },
};

export const CustomLabel: Story = {
    args: {
        children: 'Start Free Trial',
    },
};
