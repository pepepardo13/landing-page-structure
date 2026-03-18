import type { Meta, StoryObj } from "@storybook/react-vite";

import { Bleed } from "@envato/design-system/components";

import { PricingPage } from "./PricingPage.tsx";

const meta = {
  title: "Layout / Pricing Page",
  component: PricingPage,
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <Bleed uniform="3x">
      <PricingPage />
    </Bleed>
  ),
} satisfies Meta<typeof PricingPage>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
