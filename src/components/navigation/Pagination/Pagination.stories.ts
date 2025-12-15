import type { Meta, StoryObj } from '@storybook/react-vite';
import { Pagination } from '@/components/navigation/Pagination';

const meta = {
    title: 'Molecules/Navigation/Pagination',
    component: Pagination,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Pagination>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        currentPage: 1,
        totalPages: 12,
    },
};

export const MiddlePage: Story = {
    args: {
        currentPage: 2,
        totalPages: 12,
    },
};

export const LastPage: Story = {
    args: {
        currentPage: 12,
        totalPages: 12,
    },
};
