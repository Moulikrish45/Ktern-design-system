import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from './Badge';

const meta = {
title: 'Atoms/Badge',
component: Badge,
parameters: {
layout: 'centered',
},
tags: ['autodocs'],
argTypes: {
variant: {
control: 'select',
options: ['default', 'outline', 'ghost', 'muted'],
},
size: {
control: 'select',
options: ['default', 'sm', 'lg'],
},
},
} satisfies Meta<typeof Badge>;

    export default meta;
    type Story = StoryObj<typeof meta>;

        export const Default: Story = {
        args: {
        children: 'Badge Content',
        variant: 'default',
        size: 'default',
        },
        };

        export const Outline: Story = {
        args: {
        children: 'Badge Outline',
        variant: 'outline',
        },
        };

        export const Small: Story = {
        args: {
        children: 'Small',
        size: 'sm',
        },
        };

        export const Large: Story = {
        args: {
        children: 'Large',
        size: 'lg',
        },
        };