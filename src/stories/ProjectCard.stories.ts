import type { Meta, StoryObj } from '@storybook/react-vite';
import { ProjectCard } from '@/components/cards/ProjectCard';

const meta = {
    title: 'Components/Cards/Project Card',
    component: ProjectCard,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        type: {
            control: 'select',
            options: ['rocket', 'flask', 'enterprise'],
            description: 'Card type/variant',
        },
    },
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ProjectLaunch: Story = {
    args: {
        type: 'rocket',
    },
};

export const TestingLab: Story = {
    args: {
        type: 'flask',
    },
};

export const LandscapeView: Story = {
    args: {
        type: 'enterprise',
    },
};
