import type { Meta, StoryObj } from '@storybook/react-vite';
import { DialogModal } from '@/components/modals/DialogModal';

const meta = {
    title: 'Components/Modals/Dialog Modal',
    component: DialogModal,
    parameters: {
        layout: 'fullscreen',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof DialogModal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        isOpen: true,
        title: 'Confirm Action',
        subtitle: 'Critical system operation',
        message: 'Are you sure you want to proceed with this data migration? This action cannot be undone and will overwrite existing configurations.',
        confirmText: 'Yes, Proceed',
        cancelText: 'Cancel',
    },
};
