import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from './Dialog';
import { Button } from '../../atoms/Button';
import { Label } from '../../atoms/Label';
import { Input } from '../../atoms/Input';
import { Textarea } from '../../atoms/Textarea';

const meta = {
    title: 'Molecules/Dialog',
    component: Dialog,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],
} satisfies Meta<typeof Dialog>;

export default meta;
type Story = StoryObj<typeof meta>;

// ============================================================================
// BASIC EXAMPLES
// ============================================================================

export const Default: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline">Open Dialog</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Welcome to KTern</DialogTitle>
                    <DialogDescription>
                        This is a fully accessible dialog component with focus trap and keyboard navigation.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <p className="text-sm text-muted-foreground">
                        Try pressing <kbd className="px-2 py-1 bg-muted rounded">Esc</kbd> to close this dialog.
                        Or try using <kbd className="px-2 py-1 bg-muted rounded">Tab</kbd> to navigate through elements.
                        Notice how focus stays within the dialog.
                    </p>
                </div>
            </DialogContent>
        </Dialog>
    ),
};

export const WithActions: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button>Show Actions</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button variant="primary">Continue</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    ),
};

// ============================================================================
// WITH FORM (PROVING COMPOSITION)
// ============================================================================

export const WithForm: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="primary">Edit Profile</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                    <DialogDescription>
                        Make changes to your profile here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                            id="name"
                            defaultValue="Pedro Duarte"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="username">Username</Label>
                        <Input
                            id="username"
                            defaultValue="@peduarte"
                            className="col-span-3"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                            id="email"
                            type="email"
                            defaultValue="pedro@example.com"
                            className="col-span-3"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    ),
};

export const CreateProject: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="hero">Create New Project</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[525px]">
                <DialogHeader>
                    <DialogTitle>Create Project</DialogTitle>
                    <DialogDescription>
                        Start a new SAP transformation project. Fill in the details below.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="project-name">Project Name</Label>
                        <Input
                            id="project-name"
                            placeholder="SAP S/4HANA Migration"
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="description">Description</Label>
                        <Textarea
                            id="description"
                            placeholder="Describe your project..."
                            rows={3}
                        />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="client">Client Name</Label>
                        <Input
                            id="client"
                            placeholder="Acme Corporation"
                        />
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button variant="primary">Create Project</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    ),
};

// ============================================================================
// DESTRUCTIVE CONFIRMATION
// ============================================================================

export const Destructive: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="destructive">Delete Account</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>⚠️ Delete Account</DialogTitle>
                    <DialogDescription>
                        Are you absolutely sure? This action cannot be undone.
                        This will permanently delete your account and remove all your data from our servers.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4">
                    <div className="rounded-lg border border-destructive/50 bg-destructive/10 p-4">
                        <p className="text-sm font-medium text-destructive">
                            Warning: This action is irreversible
                        </p>
                        <ul className="mt-2 text-sm text-destructive/80 list-disc list-inside space-y-1">
                            <li>All projects will be deleted</li>
                            <li>All team members will lose access</li>
                            <li>Billing will stop immediately</li>
                        </ul>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline">Cancel</Button>
                    <Button variant="destructive">Yes, delete my account</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    ),
};

export const ConfirmMigration: Story = {
    render: () => (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="primary">Start Migration</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Confirm Migration Start</DialogTitle>
                    <DialogDescription>
                        You are about to begin the SAP S/4HANA migration process.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4 space-y-4">
                    <div className="rounded-lg border bg-accent/50 p-4">
                        <h4 className="font-medium mb-2">Migration Details:</h4>
                        <dl className="space-y-1 text-sm">
                            <div className="flex justify-between">
                                <dt className="text-muted-foreground">Strategy:</dt>
                                <dd className="font-medium">Greenfield Implementation</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-muted-foreground">Estimated Duration:</dt>
                                <dd className="font-medium">6-8 weeks</dd>
                            </div>
                            <div className="flex justify-between">
                                <dt className="text-muted-foreground">Systems Affected:</dt>
                                <dd className="font-medium">3 Production, 2 QA</dd>
                            </div>
                        </dl>
                    </div>
                    <p className="text-sm text-muted-foreground">
                        Once started, the migration cannot be paused. Ensure all prerequisites are met.
                    </p>
                </div>
                <DialogFooter>
                    <Button variant="outline">Review Checklist</Button>
                    <Button variant="primary">Start Migration</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    ),
};

// ============================================================================
// ACCESSIBILITY DEMONSTRATION
// ============================================================================

export const FocusTrapDemo: Story = {
    render: () => (
        <div className="space-y-4">
            <p className="text-sm text-muted-foreground max-w-md">
                This story demonstrates the focus trap. Open the dialog and try to tab through.
                Notice how focus stays within the dialog and cycles through interactive elements.
            </p>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Test Focus Trap</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Focus Trap Test</DialogTitle>
                        <DialogDescription>
                            Press Tab to cycle through these elements. Focus will stay trapped within this dialog.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="field1">First Field</Label>
                            <Input id="field1" placeholder="Tab stops here" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="field2">Second Field</Label>
                            <Input id="field2" placeholder="Then here" />
                        </div>
                        <div className="grid gap-2">
                            <Label htmlFor="field3">Third Field</Label>
                            <Input id="field3" placeholder="Then here" />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline">Cancel (Tab here)</Button>
                        <Button>Submit (Then here)</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    ),
};

export const EscapeKeyDemo: Story = {
    render: () => (
        <div className="space-y-4">
            <p className="text-sm text-muted-foreground max-w-md">
                Open the dialog and press the <kbd className="px-2 py-1 bg-muted rounded text-xs">Esc</kbd> key.
                The dialog should close immediately.
            </p>
            <Dialog>
                <DialogTrigger asChild>
                    <Button>Test Escape Key</Button>
                </DialogTrigger>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Escape Key Test</DialogTitle>
                        <DialogDescription>
                            Press <kbd className="px-2 py-1 bg-muted rounded text-xs">Esc</kbd> to close this dialog.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="py-8 text-center">
                        <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent mb-4">
                            <kbd className="text-2xl font-bold">Esc</kbd>
                        </div>
                        <p className="text-sm text-muted-foreground">
                            This keyboard shortcut is a standard accessibility feature.
                        </p>
                    </div>
                </DialogContent>
            </Dialog>
        </div>
    ),
};

// ============================================================================
// DARK MODE
// ============================================================================

export const DarkMode: Story = {
    render: () => (
        <div className="dark p-8 bg-surface-dark rounded-lg">
            <Dialog>
                <DialogTrigger asChild>
                    <Button variant="outline" className="text-text-primary-dark">
                        Open Dark Dialog
                    </Button>
                </DialogTrigger>
                <DialogContent className="bg-surface-dark text-text-primary-dark border-border-dark">
                    <DialogHeader>
                        <DialogTitle>Dark Mode Dialog</DialogTitle>
                        <DialogDescription className="text-text-muted-dark">
                            This dialog automatically adapts to dark mode.
                        </DialogDescription>
                    </DialogHeader>
                    <div className="grid gap-4 py-4">
                        <div className="grid gap-2">
                            <Label htmlFor="dark-input" className="text-text-primary-dark">
                                Sample Field
                            </Label>
                            <Input
                                id="dark-input"
                                placeholder="Dark mode input"
                                className="bg-surface-dark text-text-primary-dark border-border-dark"
                            />
                        </div>
                    </div>
                    <DialogFooter>
                        <Button variant="outline">Close</Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    ),
    parameters: {
        backgrounds: {
            default: 'dark',
        },
    },
};
