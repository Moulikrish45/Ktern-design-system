import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/ui/button";
import { Sparkles, Trash2, ArrowRight } from "lucide-react";

const meta = {
  title: "Atoms/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "energy", "ghost", "destructive"],
    },
    size: {
      control: "radio",
      options: ["sm", "default", "lg"],
    },
  },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// 1. Primary Action
export const Primary: Story = {
  args: {
    variant: "primary",
    children: "Save Changes",
  },
};

// 2. The "AI Spark" Energy Button
export const EnergyAI: Story = {
  args: {
    variant: "energy",
    children: (
      <>
        <Sparkles className="w-4 h-4 animate-pulse" />
        Generate Insights
      </>
    ),
  },
};

// 3. Destructive
export const Destructive: Story = {
  args: {
    variant: "destructive",
    children: (
      <>
        <Trash2 className="w-4 h-4" />
        Delete Project
      </>
    ),
  },
};

// 4. Loading State
export const Loading: Story = {
  args: {
    variant: "primary",
    isLoading: true,
    children: "Processing...",
  },
};