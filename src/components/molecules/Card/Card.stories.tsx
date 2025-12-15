import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
    Card,
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
} from './Card';
import { Button } from '@/components/atoms/Button';

const meta = {
    title: 'Molecules/Card (Primitive)',
    component: Card,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light',
        },
    },
} satisfies Meta<typeof Card>;

export default meta;
type Story = StoryObj<typeof meta>;

// Basic card with all sections
export const Default: Story = {
    args: {},
    render: () => (
        <Card className="w-[380px]">
            <CardHeader>
                <CardTitle>Card Title</CardTitle>
                <CardDescription>
                    Card description goes here. You can put any supporting text in this section.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-foreground">
                    This is the main content area of the card. You can place any content here, such as forms, lists, or custom components.
                </p>
            </CardContent>
            <CardFooter>
                <Button variant="primary" size="sm">
                    Action
                </Button>
            </CardFooter>
        </Card>
    ),
};

// Card with only header
export const HeaderOnly: Story = {
    args: {},
    render: () => (
        <Card className="w-[380px]">
            <CardHeader>
                <CardTitle>Simple Card</CardTitle>
                <CardDescription>
                    This card only has a header section with a title and description.
                </CardDescription>
            </CardHeader>
        </Card>
    ),
};

// Card with custom content
export const CustomContent: Story = {
    args: {},
    render: () => (
        <Card className="w-[380px]">
            <CardHeader>
                <CardTitle>Project Statistics</CardTitle>
                <CardDescription>Overview of key metrics</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex justify-between items-center">
                        <span className="text-sm text-muted-foreground">Completion</span>
                        <span className="font-semibold text-foreground">78%</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                        <div className="bg-brand-primary h-2 rounded-full" style={{ width: '78%' }} />
                    </div>
                    <div className="grid grid-cols-2 gap-4 pt-2">
                        <div>
                            <div className="text-2xl font-bold text-foreground">24</div>
                            <div className="text-xs text-muted-foreground">Tasks Done</div>
                        </div>
                        <div>
                            <div className="text-2xl font-bold text-foreground">7</div>
                            <div className="text-xs text-muted-foreground">Remaining</div>
                        </div>
                    </div>
                </div>
            </CardContent>
            <CardFooter>
                <Button variant="ghost" className="w-full">
                    View Details
                </Button>
            </CardFooter>
        </Card>
    ),
};

// Interactive card
export const Interactive: Story = {
    args: {},
    render: () => (
        <Card className="w-[380px] hover:shadow-lg hover:shadow-brand-primary/10 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            <CardHeader>
                <CardTitle>Clickable Card</CardTitle>
                <CardDescription>
                    This card has hover effects and can be made interactive.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground">
                    Hover over this card to see the elevation and transform effects.
                </p>
            </CardContent>
        </Card>
    ),
};

// Multiple cards showcase
export const Showcase: Story = {
    args: {},
    render: () => (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 p-8 bg-background">
            <Card className="hover:border-brand-primary transition-colors">
                <CardHeader>
                    <CardTitle>Design</CardTitle>
                    <CardDescription>Create stunning interfaces</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        Beautiful, modern design system components.
                    </p>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" size="sm">
                        Explore
                    </Button>
                </CardFooter>
            </Card>

            <Card className="hover:border-brand-primary transition-colors">
                <CardHeader>
                    <CardTitle>Develop</CardTitle>
                    <CardDescription>Build with confidence</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        Type-safe components with excellent DX.
                    </p>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" size="sm">
                        Learn
                    </Button>
                </CardFooter>
            </Card>

            <Card className="hover:border-brand-primary transition-colors">
                <CardHeader>
                    <CardTitle>Deploy</CardTitle>
                    <CardDescription>Ship to production</CardDescription>
                </CardHeader>
                <CardContent>
                    <p className="text-sm text-muted-foreground">
                        Production-ready components built for scale.
                    </p>
                </CardContent>
                <CardFooter>
                    <Button variant="outline" size="sm">
                        Deploy
                    </Button>
                </CardFooter>
            </Card>
        </div>
    ),
};
