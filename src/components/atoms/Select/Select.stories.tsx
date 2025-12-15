import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from './Select';
import { Label } from '../Label';

const meta = {
    title: 'Atoms/Select',
    component: Select,
    parameters: {
        layout: 'centered',
        backgrounds: {
            default: 'light',
        },
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================================================
// BASIC EXAMPLES
// ============================================================================

export const Default: Story = {
    render: () => (
        <Select>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectContent>
        </Select>
    ),
};

export const WithLabel: Story = {
    render: () => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="fruit-select">Favorite Fruit</Label>
            <Select>
                <SelectTrigger id="fruit-select" className="w-full">
                    <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="apple">Apple</SelectItem>
                    <SelectItem value="banana">Banana</SelectItem>
                    <SelectItem value="blueberry">Blueberry</SelectItem>
                    <SelectItem value="grapes">Grapes</SelectItem>
                    <SelectItem value="pineapple">Pineapple</SelectItem>
                </SelectContent>
            </Select>
        </div>
    ),
};

export const WithGroups: Story = {
    render: () => (
        <Select>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a timezone" />
            </SelectTrigger>
            <SelectContent>
                <SelectGroup>
                    <SelectLabel>North America</SelectLabel>
                    <SelectItem value="est">Eastern Standard Time (EST)</SelectItem>
                    <SelectItem value="cst">Central Standard Time (CST)</SelectItem>
                    <SelectItem value="mst">Mountain Standard Time (MST)</SelectItem>
                    <SelectItem value="pst">Pacific Standard Time (PST)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>Europe</SelectLabel>
                    <SelectItem value="gmt">Greenwich Mean Time (GMT)</SelectItem>
                    <SelectItem value="cet">Central European Time (CET)</SelectItem>
                    <SelectItem value="eet">Eastern European Time (EET)</SelectItem>
                </SelectGroup>
                <SelectGroup>
                    <SelectLabel>Asia</SelectLabel>
                    <SelectItem value="ist">India Standard Time (IST)</SelectItem>
                    <SelectItem value="jst">Japan Standard Time (JST)</SelectItem>
                    <SelectItem value="cst-china">China Standard Time (CST)</SelectItem>
                </SelectGroup>
            </SelectContent>
        </Select>
    ),
};

export const Disabled: Story = {
    render: () => (
        <Select disabled>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
            </SelectContent>
        </Select>
    ),
};

export const WithDefaultValue: Story = {
    render: () => (
        <Select defaultValue="apple">
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a fruit" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="apple">Apple</SelectItem>
                <SelectItem value="banana">Banana</SelectItem>
                <SelectItem value="blueberry">Blueberry</SelectItem>
                <SelectItem value="grapes">Grapes</SelectItem>
                <SelectItem value="pineapple">Pineapple</SelectItem>
            </SelectContent>
        </Select>
    ),
};

// ============================================================================
// FORM EXAMPLES
// ============================================================================

export const MigrationStrategy: Story = {
    render: () => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="migration">Migration Strategy</Label>
            <Select>
                <SelectTrigger id="migration" className="w-full">
                    <SelectValue placeholder="Select strategy" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="greenfield">Greenfield Implementation</SelectItem>
                    <SelectItem value="brownfield">Brownfield Conversion</SelectItem>
                    <SelectItem value="selective">Selective Data Transition</SelectItem>
                    <SelectItem value="hybrid">Hybrid Approach</SelectItem>
                </SelectContent>
            </Select>
            <p className="text-sm text-muted-foreground">
                Choose your SAP migration approach
            </p>
        </div>
    ),
};

export const ProjectStatus: Story = {
    render: () => (
        <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="status">Project Status</Label>
            <Select defaultValue="active">
                <SelectTrigger id="status" className="w-full">
                    <SelectValue />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="planning">
                        <span className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-blue-500"></span>
                            Planning
                        </span>
                    </SelectItem>
                    <SelectItem value="active">
                        <span className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-green-500"></span>
                            Active
                        </span>
                    </SelectItem>
                    <SelectItem value="completed">
                        <span className="flex items-center gap-2">
                            <span className="h-2 w-2 rounded-full bg-gray-500"></span>
                            Completed
                        </span>
                    </SelectItem>
                </SelectContent>
            </Select>
        </div>
    ),
};

export const FormExample: Story = {
    render: () => (
        <form className="w-full max-w-sm space-y-4">
            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="country">Country</Label>
                <Select>
                    <SelectTrigger id="country">
                        <SelectValue placeholder="Select country" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="us">United States</SelectItem>
                        <SelectItem value="uk">United Kingdom</SelectItem>
                        <SelectItem value="ca">Canada</SelectItem>
                        <SelectItem value="au">Australia</SelectItem>
                        <SelectItem value="de">Germany</SelectItem>
                        <SelectItem value="fr">France</SelectItem>
                    </SelectContent>
                </Select>
            </div>

            <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="language">Language</Label>
                <Select defaultValue="en">
                    <SelectTrigger id="language">
                        <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="en">English</SelectItem>
                        <SelectItem value="es">Spanish</SelectItem>
                        <SelectItem value="fr">French</SelectItem>
                        <SelectItem value="de">German</SelectItem>
                        <SelectItem value="zh">Chinese</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </form>
    ),
};

// ============================================================================
// DARK MODE
// ============================================================================

export const DarkMode: Story = {
    render: () => (
        <div className="dark p-8 bg-surface-dark rounded-lg">
            <div className="grid w-full max-w-sm items-center gap-1.5">
                <Label htmlFor="dark-select" className="text-text-primary-dark">
                    Select (Dark Mode)
                </Label>
                <Select>
                    <SelectTrigger id="dark-select" className="w-full bg-surface-dark text-text-primary-dark">
                        <SelectValue placeholder="Select an option" />
                    </SelectTrigger>
                    <SelectContent className="bg-surface-dark text-text-primary-dark border-border-dark">
                        <SelectItem value="option1">Option 1</SelectItem>
                        <SelectItem value="option2">Option 2</SelectItem>
                        <SelectItem value="option3">Option 3</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    ),
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};

// ============================================================================
// SCROLLABLE CONTENT
// ============================================================================

export const ScrollableContent: Story = {
    render: () => (
        <Select>
            <SelectTrigger className="w-[280px]">
                <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="af">Afghanistan</SelectItem>
                <SelectItem value="al">Albania</SelectItem>
                <SelectItem value="dz">Algeria</SelectItem>
                <SelectItem value="ar">Argentina</SelectItem>
                <SelectItem value="au">Australia</SelectItem>
                <SelectItem value="at">Austria</SelectItem>
                <SelectItem value="bd">Bangladesh</SelectItem>
                <SelectItem value="be">Belgium</SelectItem>
                <SelectItem value="br">Brazil</SelectItem>
                <SelectItem value="ca">Canada</SelectItem>
                <SelectItem value="cn">China</SelectItem>
                <SelectItem value="dk">Denmark</SelectItem>
                <SelectItem value="eg">Egypt</SelectItem>
                <SelectItem value="fi">Finland</SelectItem>
                <SelectItem value="fr">France</SelectItem>
                <SelectItem value="de">Germany</SelectItem>
                <SelectItem value="in">India</SelectItem>
                <SelectItem value="id">Indonesia</SelectItem>
                <SelectItem value="it">Italy</SelectItem>
                <SelectItem value="jp">Japan</SelectItem>
                <SelectItem value="mx">Mexico</SelectItem>
                <SelectItem value="nl">Netherlands</SelectItem>
                <SelectItem value="nz">New Zealand</SelectItem>
                <SelectItem value="no">Norway</SelectItem>
                <SelectItem value="pk">Pakistan</SelectItem>
                <SelectItem value="pl">Poland</SelectItem>
                <SelectItem value="pt">Portugal</SelectItem>
                <SelectItem value="ru">Russia</SelectItem>
                <SelectItem value="sa">Saudi Arabia</SelectItem>
                <SelectItem value="sg">Singapore</SelectItem>
                <SelectItem value="za">South Africa</SelectItem>
                <SelectItem value="kr">South Korea</SelectItem>
                <SelectItem value="es">Spain</SelectItem>
                <SelectItem value="se">Sweden</SelectItem>
                <SelectItem value="ch">Switzerland</SelectItem>
                <SelectItem value="th">Thailand</SelectItem>
                <SelectItem value="tr">Turkey</SelectItem>
                <SelectItem value="ae">United Arab Emirates</SelectItem>
                <SelectItem value="uk">United Kingdom</SelectItem>
                <SelectItem value="us">United States</SelectItem>
            </SelectContent>
        </Select>
    ),
};
