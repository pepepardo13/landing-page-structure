import type { Meta, StoryObj } from "@storybook/react-vite";

import { Bleed } from "@envato/design-system/components";

import { LandingPageStructureV2 } from "./LandingPageStructureV2";

const meta = {
  title: "Pages / Landing Page Structure V2",
  component: LandingPageStructureV2,
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <Bleed uniform="3x">
      <LandingPageStructureV2 />
    </Bleed>
  ),
} satisfies Meta<typeof LandingPageStructureV2>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
