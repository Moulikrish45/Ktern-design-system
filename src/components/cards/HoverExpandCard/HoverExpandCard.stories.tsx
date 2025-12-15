import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { HoverExpandCard } from './HoverExpandCard';

const meta = {
    title: 'Cards/HoverExpandCard',
    component: HoverExpandCard,
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
} satisfies Meta<typeof HoverExpandCard>;

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
