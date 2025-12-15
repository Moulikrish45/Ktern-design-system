import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { ProjectCard } from './ProjectCard';

const meta = {
    title: 'Organisms/Cards/Project Card',
    component: ProjectCard,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light',
        },
    },
    argTypes: {
        status: {
            control: 'select',
            options: ['active', 'planning', 'completed'],
            description: 'Project status',
        },
        title: {
            control: 'text',
            description: 'Project title',
        },
        description: {
            control: 'text',
            description: 'Project description',
        },
        deadline: {
            control: 'text',
            description: 'Project deadline',
        },
        teamSize: {
            control: 'number',
            description: 'Number of team members',
        },
        actionLabel: {
            control: 'text',
            description: 'Action button label',
        },
    },
} satisfies Meta<typeof ProjectCard>;

export default meta;
type Story = StoryObj<typeof meta>;

// Active project with action button
export const Active: Story = {
    args: {
        title: 'SAP S/4HANA Migration',
        description: 'Complete migration from ECC to S/4HANA with zero downtime strategy and comprehensive testing phase.',
        status: 'active',
        deadline: 'Dec 31, 2024',
        teamSize: 12,
        actionLabel: 'View Details',
        onAction: () => alert('Viewing project details...'),
    },
};

// Planning phase project
export const Planning: Story = {
    args: {
        title: 'Digital Transformation Initiative',
        description: 'Organization-wide digital transformation with cloud migration and process optimization.',
        status: 'planning',
        deadline: 'Q2 2025',
        teamSize: 8,
        actionLabel: 'Review Plan',
        onAction: () => alert('Reviewing plan...'),
    },
};

// Completed project
export const Completed: Story = {
    args: {
        title: 'Global Template Deployment',
        description: 'Successfully deployed standardized SAP templates across 15 regional offices.',
        status: 'completed',
        deadline: 'Sep 15, 2024',
        teamSize: 6,
        actionLabel: 'View Report',
        onAction: () => alert('Viewing report...'),
    },
};

// Clickable card (entire card is clickable, no action button)
export const ClickableCard: Story = {
    args: {
        title: 'Integration Hub Setup',
        description: 'Configure centralized integration hub for all third-party systems and APIs.',
        status: 'active',
        deadline: 'Jan 15, 2025',
        teamSize: 5,
        onClick: () => alert('Card clicked! Opening project...'),
    },
};

// Without metadata
export const Minimal: Story = {
    args: {
        title: 'Quick Project Setup',
        description: 'Minimal project card with just essential information.',
        status: 'planning',
        actionLabel: 'Get Started',
        onAction: () => alert('Getting started...'),
    },
};

// Showcase all statuses
export const AllStatuses: Story = {
    args: {
        title: '',
        description: '',
        status: 'active',
    },
    render: () => (
        <div className="flex flex-col gap-6 p-8 bg-background">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl">
                <ProjectCard
                    title="Active SAP Project"
                    description="Ongoing SAP implementation with daily standup meetings and sprint reviews."
                    status="active"
                    deadline="Dec 31, 2024"
                    teamSize={10}
                    onAction={() => alert('Active project action')}
                />
                <ProjectCard
                    title="Planning Phase Project"
                    description="Currently in planning phase with requirement gathering and initial design."
                    status="planning"
                    deadline="Q1 2025"
                    teamSize={6}
                    onAction={() => alert('Planning project action')}
                />
                <ProjectCard
                    title="Completed Migration"
                    description="Successfully completed migration with full documentation and training."
                    status="completed"
                    deadline="Nov 30, 2024"
                    teamSize={8}
                    onAction={() => alert('Completed project action')}
                />
            </div>
        </div>
    ),
};
