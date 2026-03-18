import type { Meta, StoryObj } from "@storybook/react-vite";

import { Bleed } from "@envato/design-system/components";

import { PricingPageGlobalSeatSelection } from "./PricingPageGlobalSeatSelection.tsx";

const meta = {
  title: "Layout / Pricing Page Global Seat Selection",
  component: PricingPageGlobalSeatSelection,
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <Bleed uniform="3x">
      <PricingPageGlobalSeatSelection />
    </Bleed>
  ),
} satisfies Meta<typeof PricingPageGlobalSeatSelection>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
