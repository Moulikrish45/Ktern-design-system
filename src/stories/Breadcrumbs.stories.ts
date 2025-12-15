import type { Meta, StoryObj } from '@storybook/react-vite';
import { Breadcrumbs } from '@/components/navigation/Breadcrumbs';

const meta = {
    title: 'Components/Navigation/Breadcrumbs',
    component: Breadcrumbs,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Breadcrumbs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        items: [
            { label: 'Home', href: '#', isHome: true },
            { label: 'Projects', href: '#' },
            { label: 'SAP S/4HANA', href: '#' },
            { label: 'Dashboard' },
        ],
    },
};
