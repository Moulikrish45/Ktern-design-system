import React from 'react';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../molecules/Card';
import { ProjectCard } from '../../cards/ProjectCard';
import { StatCard } from '../../cards/StatCard';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../molecules/Dialog';
import { Label } from '../../atoms/Label';
import { Textarea } from '../../atoms/Textarea';

interface DashboardProps {
    className?: string;
}

export const Dashboard = ({ className }: DashboardProps) => {
    return (
        <div className={`min-h-screen bg-background ${className || ''}`}>
            {/* Top Navigation */}
            <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-16 items-center justify-between px-4">
                    <div className="flex items-center gap-6">
                        <div className="flex items-center gap-2">
                            <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-brand-primary to-brand-secondary flex items-center justify-center">
                                <span className="text-white font-bold text-sm">K</span>
                            </div>
                            <span className="font-bold text-lg">KTern Design System</span>
                        </div>
                        <nav className="hidden md:flex gap-6">
                            <a href="#" className="text-sm font-medium hover:text-brand-primary transition-colors">
                                Dashboard
                            </a>
                            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-brand-primary transition-colors">
                                Projects
                            </a>
                            <a href="#" className="text-sm font-medium text-muted-foreground hover:text-brand-primary transition-colors">
                                Team
                            </a>
                        </nav>
                    </div>

                    <div className="flex items-center gap-4">
                        <div className="hidden md:block">
                            <Input
                                type="search"
                                placeholder="Search projects..."
                                className="w-[300px]"
                            />
                        </div>
                        <Button variant="outline" size="sm">
                            Settings
                        </Button>
                        <div className="h-8 w-8 rounded-full bg-brand-primary/10 flex items-center justify-center">
                            <span className="text-brand-primary font-medium text-sm">JD</span>
                        </div>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container px-4 py-8">
                {/* Page Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
                        <p className="text-muted-foreground mt-1">
                            Welcome back! Here's your SAP transformation overview.
                        </p>
                    </div>

                    {/* Dialog Integration */}
                    <Dialog>
                        <DialogTrigger asChild>
                            <Button variant="hero">
                                Create Project
                            </Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[525px]">
                            <DialogHeader>
                                <DialogTitle>Create New Project</DialogTitle>
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
                </div>

                {/* Stats Grid */}
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-8">
                    <StatCard
                        label="Active Projects"
                        value="12"
                        trend={{ value: "+2 from last month", isPositive: true }}
                    />
                    <StatCard
                        label="Team Members"
                        value="48"
                        trend={{ value: "+5 from last month", isPositive: true }}
                    />
                    <StatCard
                        label="Completed"
                        value="34"
                        trend={{ value: "+12 from last month", isPositive: true }}
                    />
                    <StatCard
                        label="Success Rate"
                        value="94%"
                        trend={{ value: "+2.5% from last month", isPositive: true }}
                    />
                </div>

                {/* Projects Grid */}
                <div className="mb-8">
                    <h2 className="text-2xl font-bold tracking-tight mb-4">Recent Projects</h2>
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        <ProjectCard
                            title="S/4HANA Migration - ACME Corp"
                            description="Greenfield implementation with custom process optimization"
                            status="active"
                            deadline="Dec 2024"
                            teamSize={3}
                        />
                        <ProjectCard
                            title="Process Automation - TechCo"
                            description="RPA integration with SAP workflow automation"
                            status="planning"
                            deadline="Feb 2025"
                            teamSize={2}
                        />
                        <ProjectCard
                            title="Data Migration - GlobalCorp"
                            description="Legacy system data migration to S/4HANA"
                            status="completed"
                            deadline="Nov 2024"
                            teamSize={3}
                        />
                    </div>
                </div>

                {/* Additional Info Cards */}
                <div className="grid gap-6 md:grid-cols-2">
                    <Card>
                        <CardHeader>
                            <CardTitle>Recent Activity</CardTitle>
                            <CardDescription>Latest updates from your projects</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-start gap-4">
                                    <div className="h-2 w-2 rounded-full bg-green-500 mt-2" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">Project milestone completed</p>
                                        <p className="text-sm text-muted-foreground">S/4HANA Migration - Phase 2 completed</p>
                                        <p className="text-xs text-muted-foreground mt-1">2 hours ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="h-2 w-2 rounded-full bg-blue-500 mt-2" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">New team member added</p>
                                        <p className="text-sm text-muted-foreground">Sarah Johnson joined TechCo project</p>
                                        <p className="text-xs text-muted-foreground mt-1">5 hours ago</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <div className="h-2 w-2 rounded-full bg-yellow-500 mt-2" />
                                    <div className="flex-1">
                                        <p className="text-sm font-medium">Planning phase initiated</p>
                                        <p className="text-sm text-muted-foreground">Process Automation project started</p>
                                        <p className="text-xs text-muted-foreground mt-1">1 day ago</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    <Card>
                        <CardHeader>
                            <CardTitle>System Health</CardTitle>
                            <CardDescription>All systems operational</CardDescription>
                        </CardHeader>
                        <CardContent>
                            <div className="space-y-4">
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">API Status</span>
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-green-500" />
                                        <span className="text-sm text-green-600">Operational</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">Database</span>
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-green-500" />
                                        <span className="text-sm text-green-600">Operational</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">Background Jobs</span>
                                    <div className="flex items-center gap-2">
                                        <div className="h-2 w-2 rounded-full bg-green-500" />
                                        <span className="text-sm text-green-600">Running</span>
                                    </div>
                                </div>
                                <div className="flex items-center justify-between">
                                    <span className="text-sm font-medium">Uptime</span>
                                    <span className="text-sm font-medium">99.9%</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </main>
        </div>
    );
};

export default Dashboard;
