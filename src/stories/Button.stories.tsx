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

// 2. Secondary Action
export const Secondary: Story = {
  args: {
    variant: "secondary",
    children: "Secondary Action",
  },
};

// 3. The "AI Spark" Energy Button
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

// 4. Ghost Button
export const Ghost: Story = {
  args: {
    variant: "ghost",
    children: (
      <>
        Tertiary Link <ArrowRight className="w-4 h-4" />
      </>
    ),
  },
};

// 5. Destructive
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

// 6. Loading State
export const Loading: Story = {
  args: {
    variant: "primary",
    isLoading: true,
    children: "Processing...",
  },
};

// 7. All Variants Grid (Layout Test)
export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 border border-border rounded-xl bg-background text-foreground">
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-muted-foreground">Primary (Cosmic Polish)</h3>
        <Button variant="primary">Save Changes</Button>
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-muted-foreground">Secondary (Outline)</h3>
        <Button variant="secondary">Secondary Action</Button>
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-muted-foreground">Energy (Aurora Flow)</h3>
        <Button variant="energy">
          <Sparkles className="w-4 h-4 animate-pulse" />
          Generate Insights
        </Button>
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-muted-foreground">Destructive (Red Alert)</h3>
        <Button variant="destructive">
          <Trash2 className="w-4 h-4" />
          Delete Project
        </Button>
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-muted-foreground">Ghost (Link)</h3>
        <Button variant="ghost">
          Tertiary Link <ArrowRight className="w-4 h-4" />
        </Button>
      </div>
      <div className="space-y-2">
        <h3 className="text-sm font-semibold text-muted-foreground">Loading</h3>
        <Button variant="primary" isLoading>Processing...</Button>
      </div>
    </div>
  ),
  parameters: {
    layout: 'fullscreen',
  }
};

// 8. Dark Mode Showcase (Explicit)
export const AllVariantsDark: Story = {
  ...AllVariants,
  name: "All Variants (Forced Dark Mode)",
  decorators: [
    (Story) => (
      <div className="dark bg-[#100c08] p-8 min-h-screen">
        <Story />
      </div>
    )
  ]
}