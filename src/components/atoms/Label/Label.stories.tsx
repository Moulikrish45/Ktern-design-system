import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Label } from './Label';
import { Input } from '../Input';

const meta = {
    title: 'Atoms/Label',
    component: Label,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Label>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        children: 'Email Address',
    },
};

export const Required: Story = {
    render: () => (
        <Label>
            Email Address <span className="text-destructive">*</span>
        </Label>
    ),
};

export const WithInput: Story = {
    render: () => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="example">Click me to focus the input</Label>
            <Input type="text" id="example" placeholder="Input will focus when label is clicked" />
        </div>
    ),
};

export const Disabled: Story = {
    render: () => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="disabled-input" className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Disabled Field
            </Label>
            <Input type="text" id="disabled-input" disabled placeholder="This is disabled" />
        </div>
    ),
};
