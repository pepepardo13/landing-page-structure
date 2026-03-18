import type { Meta, StoryObj } from "@storybook/react-vite";

import { Bleed } from "@envato/design-system/components";

import { PricingPageGreenActiveTab } from "./PricingPageGreenActiveTab.tsx";
import { PricingPage } from "./PricingPage.tsx";
import { PricingPageGlobalSeatSelection } from "./PricingPageGlobalSeatSelection.tsx";

const meta = {
  title: "Prototype / Pricing v0",
  parameters: {
    layout: "fullscreen",
  },
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>;

export const Original: Story = {
  render: () => (
    <Bleed uniform="3x">
      <PricingPage />
    </Bleed>
  ),
};

export const GlobalSeatSelection: Story = {
  render: () => (
    <Bleed uniform="3x">
      <PricingPageGlobalSeatSelection />
    </Bleed>
  ),
};

export const GreenActiveTab: Story = {
  render: () => (
    <Bleed uniform="3x">
      <PricingPageGreenActiveTab />
    </Bleed>
  ),
};
