import React from 'react';
import { Button } from '../../atoms/Button';
import { Input } from '../../atoms/Input';
import { StatusBadge } from '../../atoms/StatusBadge';
import { Avatar } from '../../atoms/Avatar';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '../../molecules/Card';
import { ProjectCard } from '../../../patterns/ProjectCard';
import { StatCard } from '../../cards/StatCard';
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '../../molecules/Dialog';
import { Label } from '../../atoms/Label';
import { Textarea } from '../../atoms/Textarea';
import { Container } from '../../foundation/Container';
import { Stack } from '../../foundation/Stack';
import { Box } from '../../foundation/Box';
import { ActionCard } from '../../../patterns/ActionCard';
import { RocketIcon } from '../../icons';

interface DashboardProps {
    className?: string;
}

export const Dashboard = ({ className }: DashboardProps) => {
    return (
        <div className={`min-h-screen bg-background ${className || ''}`}>
            {/* Top Navigation */}
            <header className="sticky top-0 z-40 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <Container size="full">
                    <Stack direction="horizontal" justify="between" align="center" className="h-14 sm:h-16">
                        {/* Logo & Nav */}
                        <Stack direction="horizontal" gap="6" align="center">
                            <Stack direction="horizontal" gap="2" align="center">
                                <div className="h-7 w-7 sm:h-8 sm:w-8 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                                    <span className="text-white font-bold text-xs sm:text-sm">K</span>
                                </div>
                                <span className="font-bold text-base sm:text-lg hidden sm:inline">KTern</span>
                            </Stack>

                            <nav className="hidden md:flex gap-4 lg:gap-6">
                                <a href="#" className="text-sm font-medium hover:text-primary transition-colors">
                                    Dashboard
                                </a>
                                <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                    Projects
                                </a>
                                <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors">
                                    Team
                                </a>
                            </nav>
                        </Stack>

                        {/* Actions */}
                        <Stack direction="horizontal" gap="2" align="center" className="sm:gap-3">
                            <Input
                                type="search"
                                placeholder="Search..."
                                aria-label="Search projects..."
                                className="w-[160px] lg:w-[240px] hidden sm:block"
                            />
                            <Avatar fallback="JD" size="sm" className="sm:hidden" />
                            <Avatar fallback="JD" size="md" className="hidden sm:block" />
                        </Stack>
                    </Stack>
                </Container>
            </header>

            {/* Main Content */}
            <Box as="main" className="py-4 sm:py-6 lg:py-8">
                <Container size="full">
                    <Stack gap="6" className="sm:gap-8">
                        {/* Page Header with Action */}
                        <Stack direction="horizontal" justify="between" align="start" className="flex-wrap gap-4">
                            <Stack gap="2">
                                <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold tracking-tight">Dashboard</h1>
                                <p className="text-muted-foreground text-sm sm:text-base">
                                    Welcome back! Here's your SAP transformation overview.
                                </p>
                            </Stack>

                            {/* Create Project Dialog */}
                            <Dialog>
                                <DialogTrigger asChild>
                                    <Button variant="primary" size="sm">
                                        Create Project
                                    </Button>
                                </DialogTrigger>
                                <DialogContent className="sm:max-w-[500px]">
                                    <DialogHeader>
                                        <DialogTitle>Create New Project</DialogTitle>
                                        <DialogDescription>
                                            Start a new SAP transformation project. Fill in the details below.
                                        </DialogDescription>
                                    </DialogHeader>
                                    <Stack gap="4" className="py-4">
                                        <Input
                                            id="project-name"
                                            label="Project Name"
                                            placeholder="SAP S/4HANA Migration"
                                        />
                                        <Textarea
                                            id="description"
                                            label="Description"
                                            placeholder="Describe your project..."
                                            rows={3}
                                        />
                                        <Input
                                            id="client"
                                            label="Client Name"
                                            placeholder="Acme Corporation"
                                        />
                                    </Stack>
                                    <DialogFooter className="gap-2">
                                        <Button variant="outline" size="sm">Cancel</Button>
                                        <Button variant="primary" size="sm">Create Project</Button>
                                    </DialogFooter>
                                </DialogContent>
                            </Dialog>
                        </Stack>

                        {/* DashboardGrid Pattern: 3-col grid with KPIs, Main Chart (2-col), Sidebar (1-col) */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4">
                            {/* KPI Cards - Each takes 1 column */}
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
                                label="Success Rate"
                                value="94%"
                                trend={{ value: "+2.5% from last month", isPositive: true }}
                            />

                            {/* Main Chart Area - Takes 2 columns on tablet+ */}
                            <div className="sm:col-span-2">
                                <Card className="h-full">
                                    <CardHeader>
                                        <CardTitle>Project Timeline</CardTitle>
                                        <CardDescription>Overview of active projects and milestones</CardDescription>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="h-[240px] sm:h-[320px] flex items-center justify-center bg-muted/20 rounded-lg border-2 border-dashed border-muted">
                                            <p className="text-muted-foreground text-sm">Chart Component Placeholder</p>
                                        </div>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Sidebar/Activity Feed - Takes 1 column */}
                            <Card className="h-full">
                                <CardHeader>
                                    <CardTitle>Recent Activity</CardTitle>
                                    <CardDescription>Latest updates</CardDescription>
                                </CardHeader>
                                <CardContent>
                                    <Stack gap="4">
                                        <Stack direction="horizontal" gap="3" align="start">
                                            <div className="h-2 w-2 rounded-full bg-green-500 mt-2 shrink-0" />
                                            <Stack gap="1" className="flex-1 min-w-0">
                                                <p className="text-sm font-medium truncate">Milestone completed</p>
                                                <p className="text-xs text-muted-foreground truncate">S/4HANA Migration</p>
                                                <p className="text-xs text-muted-foreground">2h ago</p>
                                            </Stack>
                                        </Stack>
                                        <Stack direction="horizontal" gap="3" align="start">
                                            <div className="h-2 w-2 rounded-full bg-blue-500 mt-2 shrink-0" />
                                            <Stack gap="1" className="flex-1 min-w-0">
                                                <p className="text-sm font-medium truncate">Team member added</p>
                                                <p className="text-xs text-muted-foreground truncate">Sarah Johnson</p>
                                                <p className="text-xs text-muted-foreground">5h ago</p>
                                            </Stack>
                                        </Stack>
                                        <Stack direction="horizontal" gap="3" align="start">
                                            <div className="h-2 w-2 rounded-full bg-yellow-500 mt-2 shrink-0" />
                                            <Stack gap="1" className="flex-1 min-w-0">
                                                <p className="text-sm font-medium truncate">Planning initiated</p>
                                                <p className="text-xs text-muted-foreground truncate">Process Automation</p>
                                                <p className="text-xs text-muted-foreground">1d ago</p>
                                            </Stack>
                                        </Stack>
                                    </Stack>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Projects Section */}
                        <Stack gap="3">
                            <Stack direction="horizontal" justify="between" align="center">
                                <h2 className="text-lg sm:text-xl font-bold tracking-tight">Recent Projects</h2>
                                <Button variant="ghost" size="sm">
                                    View All
                                </Button>
                            </Stack>

                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
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
                        </Stack>

                        {/* Quick Actions */}
                        <Stack gap="3">
                            <h2 className="text-lg sm:text-xl font-bold tracking-tight">Quick Actions</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4">
                                <ActionCard
                                    title="Project Launch"
                                    description="Deploy your SAP S/4HANA migration with confidence and speed."
                                    actionLabel="Start Project"
                                    icon={<RocketIcon />}
                                />
                                <ActionCard
                                    title="Team Management"
                                    description="Add team members and manage roles for your transformation projects."
                                    actionLabel="Manage Team"
                                    icon={<RocketIcon />}
                                />
                                <ActionCard
                                    title="Analytics"
                                    description="View detailed insights and reports on project performance."
                                    actionLabel="View Reports"
                                    icon={<RocketIcon />}
                                />
                            </div>
                        </Stack>
                    </Stack>
                </Container>
            </Box>
        </div>
    );
};

export default Dashboard;
