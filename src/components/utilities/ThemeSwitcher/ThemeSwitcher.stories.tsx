/*
import React from 'react'
import type { Meta, StoryObj } from '@storybook/react'
import { ThemeSwitcher } from './ThemeSwitcher'

const meta = {
    title: 'Utilities/ThemeSwitcher',
    component: ThemeSwitcher,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
    argTypes: {
        mode: {
            control: 'select',
            options: ['icon', 'labeled'],
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg'],
        },
    },
} satisfies Meta<typeof ThemeSwitcher>

export default meta
type Story = StoryObj<typeof meta>

export const IconMode: Story = {
    args: {
        mode: 'icon',
        size: 'md',
    },
}

export const LabeledMode: Story = {
    args: {
        mode: 'labeled',
    },
}

export const Small: Story = {
    args: {
        mode: 'icon',
        size: 'sm',
    },
}

export const Large: Story = {
    args: {
        mode: 'icon',
        size: 'lg',
    },
}
*/

// Empty export to satisfy build tools while stories are hidden
export default {};

