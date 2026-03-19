import type { Meta, StoryObj } from "@storybook/react-vite";

import { Bleed } from "@envato/design-system/components";

import { LandingPageStructureV2Alt } from "./LandingPageStructureV2Alt";

const meta = {
  title: "Pages / Landing Page Structure V2 Alt",
  component: LandingPageStructureV2Alt,
  parameters: {
    layout: "fullscreen",
  },
  render: () => (
    <Bleed uniform="3x">
      <LandingPageStructureV2Alt />
    </Bleed>
  ),
} satisfies Meta<typeof LandingPageStructureV2Alt>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {};
