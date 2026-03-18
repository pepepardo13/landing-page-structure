import type { Meta, StoryObj } from "@storybook/react-vite";

import { Bleed } from "@envato/design-system/components";

import { AIToolsLandingPage } from "./AIToolsLandingPage.tsx";

const meta = {
  title: "Pages / AI Tools Landing Page",
  component: AIToolsLandingPage,
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <Bleed uniform="3x">
      <AIToolsLandingPage />
    </Bleed>
  ),
} satisfies Meta<typeof AIToolsLandingPage>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
