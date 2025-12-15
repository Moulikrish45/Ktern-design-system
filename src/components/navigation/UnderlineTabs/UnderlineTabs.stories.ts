import type { Meta, StoryObj } from '@storybook/react-vite';
import { UnderlineTabs } from '@/components/navigation/UnderlineTabs';

const meta = {
    title: 'Molecules/Navigation/Underline Tabs',
    component: UnderlineTabs,
    parameters: {
        layout: 'padded',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof UnderlineTabs>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        tabs: [
            { id: 'overview', label: 'Overview' },
            { id: 'analytics', label: 'Analytics' },
            { id: 'configuration', label: 'Configuration' },
        ],
        activeTab: 'overview',
    },
};
