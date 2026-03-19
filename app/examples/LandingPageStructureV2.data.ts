const assetUrls = import.meta.glob("./assets/landing-page-structure-v2/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function asset(name: string) {
  return assetUrls[`./assets/landing-page-structure-v2/${name}`];
}

export type HeaderLink = {
  label: string;
  href: string;
};

export type ModeToggleItem = {
  id: string;
  label: string;
  icon: "image" | "edit" | "video" | "music" | "voice";
  active?: boolean;
};

export type HeroPreviewCard = {
  id: string;
  src: string;
  left: number;
  top: number;
  width: number;
  height: number;
  rotate: number;
  muted?: boolean;
  highlighted?: boolean;
};

export type ModelLogo =
  | {
      kind: "image";
      label: string;
      src: string;
      width: number;
      height: number;
    }
  | {
      kind: "text";
      label: string;
    }
  | {
      kind: "text-with-icon";
      label: string;
      src: string;
      width: number;
      height: number;
      iconWidth: number;
      iconHeight: number;
    };

export type ShowcaseCard = {
  id: string;
  baseSrc: string;
  overlaySrc?: string;
  badge?: string;
};

export type FeatureItem = {
  title: string;
  description: string;
  icon: "video" | "crop" | "movie";
};

export type ToolTile = {
  id: string;
  icon: "image" | "edit" | "voice" | "sound";
  left: number;
  top: number;
  rotate: number;
};

export type AssetCategory = {
  title: string;
  image: string;
  showWaveform?: boolean;
};

export const CTA_URL =
  "https://elements.envato.com/subscribe/create-account?renewalInterval=year&tier=tier1&planGroup=standard";

export const PAGE_COPY = {
  heroTitle: "VideoGen",
  heroSubtitle:
    "From idea to video in seconds. Write a prompt, upload an image from your gallery or create one with our AI tools, and generate high-quality content with the best generative models.",
  modelsLabel: "Powered by leading AI models",
  madeWithTitle: "Made with VideoGen",
  madeWithSubtitle:
    "One place. Every tool. Endless creative possibilities. Write your script, upload a reference, or generate an image with ImageGen then turn it into video.",
  startUsingTitle: "Start Using VideoGen",
  startUsingSubtitle:
    "Describe your vision or upload a reference image, choose your generative model, and produce professional-quality video — no technical setup required.",
  startUsingDemoLabel: "Demo animation goes here",
  toolsTitle: "Full suite of AI tools",
  toolsSubtitle: "Get full access to our entire suite of AI tools, powered by cutting-edge models.",
  toolsBadge: "VideoGen",
  assetsTitle: "Plus get unlimited downloads on 25+ million creative assets.",
  assetsSubtitle: "Everything you need for your videos and more.",
  assetsCta: "Explore now",
  faqTitle: "Still have Qs",
  footerBannerTitleA: "Access powerful AI tools.",
  footerBannerTitleB: "Unlimited creative assets.\nOne low price.",
};

export const HEADER_LOGO = {
  mark: asset("imgMark.svg"),
  logotype: asset("imgLogotype.svg"),
  userIcon: asset("imgIcon.svg"),
};

export const HEADER_PRIMARY_LINKS: HeaderLink[] = [
  { label: "Gen AI", href: "#" },
  { label: "Video Templates", href: "#" },
  { label: "Stock Video", href: "#" },
  { label: "Audio", href: "#" },
  { label: "Graphics", href: "#" },
  { label: "Design Templates", href: "#" },
  { label: "Photos", href: "#" },
  { label: "3D", href: "#" },
  { label: "Fonts", href: "#" },
  { label: "More", href: "#" },
];

export const HEADER_SECONDARY_LINKS: HeaderLink[] = [
  { label: "License", href: "#" },
  { label: "Pricing", href: "#" },
];

export const MODE_TOGGLE_ITEMS: ModeToggleItem[] = [
  { id: "imagegen", label: "ImageGen", icon: "image" },
  { id: "imageedit", label: "ImageEdit", icon: "edit" },
  { id: "videogen", label: "VideoGen", icon: "video", active: true },
  { id: "musicgen", label: "MusicGen", icon: "music" },
  { id: "voicegen", label: "VoiceGen", icon: "voice" },
];

export const MODE_TOGGLE_ASSETS = {
  image: asset("imgIco24GenAiImageGen.svg"),
  edit: asset("imgIco24GenAiImageEdit.svg"),
  music: asset("imgIco24GenAiSoundGenGray.svg"),
  voice: asset("imgIco24GenAiVoiceGenGray.svg"),
  videoMain: asset("imgMainContent.svg"),
  videoBar: asset("imgBackgroundStroke.svg"),
  videoIcons: [
    asset("imgIcon1.svg"),
    asset("imgIcon2.svg"),
    asset("imgIcon3.svg"),
    asset("imgIcon4.svg"),
  ],
  musicIcons: [
    asset("imgIcon5.svg"),
    asset("imgIcon2.svg"),
    asset("imgIcon6.svg"),
    asset("imgIcon4.svg"),
  ],
  voiceIcons: [
    asset("imgIcon7.svg"),
    asset("imgIcon2.svg"),
    asset("imgIcon6.svg"),
    asset("imgIcon4.svg"),
  ],
};

export const HERO_DECORATION_ASSETS = {
  flattened: asset("imgVideoGenHeroFlat84_19555.svg"),
  image: asset("imgImage.svg"),
  polygon: asset("imgPolygon2.svg"),
  line: asset("imgLine2.svg"),
  octoberShape0007: asset("imgOctoberShapes0007Layer15.png"),
  octoberShape0005: asset("imgOctoberShapes0005Layer13.png"),
  octoberShape0003: asset("imgOctoberShapes0003Layer11.png"),
  octoberShape0049: asset("imgOctoberShapes0049Layer57.png"),
  octoberShape0039: asset("imgOctoberShapes0039Layer47.png"),
  sparkMarker: asset("imgSparkMarker11.png"),
};

export const HERO_PREVIEW_CARDS: HeroPreviewCard[] = [
  {
    id: "left-wide",
    src: asset("img03PanRightVerySlowly1.jpg"),
    left: -2,
    top: 316,
    width: 237.205,
    height: 133.808,
    rotate: -21.29,
    muted: true,
  },
  {
    id: "left-portrait",
    src: asset("img01ThePlushDoesAVictoriousGrowlAndWa1.jpg"),
    left: 335,
    top: 196,
    width: 133.808,
    height: 237.205,
    rotate: -11.13,
    muted: true,
  },
  {
    id: "center",
    src: asset("img06HeSlowlyLooksUpAndDownSubtleMove1.jpg"),
    left: 594,
    top: 228,
    width: 243.288,
    height: 136.849,
    rotate: 0,
    highlighted: true,
  },
  {
    id: "center-right",
    src: asset("img04PromptDetailsBasePrompt1.jpg"),
    left: 942,
    top: 168,
    width: 137.76,
    height: 247.968,
    rotate: 12.58,
    muted: true,
  },
  {
    id: "right-portrait",
    src: asset("img10ASafeForWorkClipOfTheBallerinaW1.jpg"),
    left: 1249,
    top: 286,
    width: 136.849,
    height: 243.288,
    rotate: 22.69,
    muted: true,
  },
];

export const MODEL_LOGOS_TIER_ONE: ModelLogo[] = [
  { kind: "image", label: "OpenAI", src: asset("imgOpenAiLogo1.svg"), width: 88.5, height: 24 },
  { kind: "image", label: "Luma AI", src: asset("imgGroup27392.svg"), width: 96.527, height: 18 },
  { kind: "text", label: "Veo" },
  { kind: "text", label: "Nano Banana" },
];

export const MODEL_LOGOS_TIER_TWO: ModelLogo[] = [
  { kind: "image", label: "Kling", src: asset("imgKling.svg"), width: 95.25, height: 24.002 },
  {
    kind: "image",
    label: "ElevenLabs",
    src: asset("imgElevenlabsLogoBlack1.svg"),
    width: 115.5,
    height: 15,
  },
  {
    kind: "text-with-icon",
    label: "Flux",
    src: asset("imgFlux1.svg"),
    width: 75,
    height: 24,
    iconWidth: 24,
    iconHeight: 24,
  },
  {
    kind: "text-with-icon",
    label: "Minimax",
    src: asset("imgMinimax1.svg"),
    width: 107.25,
    height: 24,
    iconWidth: 24,
    iconHeight: 24,
  },
];

export const SHOWCASE_CARDS: ShowcaseCard[] = [
  {
    id: "left",
    baseSrc: asset("imgScreenshot20260312At1212192.png"),
    overlaySrc: asset("imgImageGen1001.png"),
    badge: "PLACEHOLDER",
  },
  {
    id: "center",
    baseSrc: asset("img109C4Db240444A80Bcb5A8183Bb98B3F202603171.png"),
  },
  {
    id: "right",
    baseSrc: asset("imgScreenshot20260312At1212192.png"),
    overlaySrc: asset("img4A832Daa5C7F408B8974A186D7D11E16202603161.png"),
    badge: "PLACEHOLDER",
  },
];

export const FEATURE_ITEMS: FeatureItem[] = [
  {
    title: "Transform text into video",
    description:
      "Pick a preset for cinematic quality or type what you're vision—our 'Enhance prompt' tool perfects the details.",
    icon: "video",
  },
  {
    title: "Edit & control your videos",
    description:
      "Tweak lighting, swap subjects, and more—no need to regenerate from scratch. Keep what's working and fix what isn't.",
    icon: "crop",
  },
  {
    title: "Resize for every platform",
    description:
      "Export your video for TikTok, YouTube, Instagram, or presentations without losing quality or starting over.",
    icon: "movie",
  },
];

export const FEATURE_ICON_ASSETS = {
  ring: asset("imgUiIcons.svg"),
  video: asset("imgAiVideo.svg"),
  crop: asset("imgCrop.svg"),
  movie: asset("imgMovie.svg"),
};

export const START_USING_STEPS = [
  {
    title: "Select a first frame",
    description:
      "Pick a preset for cinematic quality or type what you're vision—our 'Enhance prompt' tool perfects the details.",
  },
  {
    title: "Write a prompt",
    description:
      "Pick a preset for cinematic quality or type what you're vision—our 'Enhance prompt' tool perfects the details.",
  },
  {
    title: "Select preset & generate",
    description:
      "Pick a preset for cinematic quality or type what you're vision—our 'Enhance prompt' tool perfects the details.",
  },
];

export const START_USING_ASSET = asset("imgEec78E06C17A496CAfda71E96983C758202603111.png");

export const TOOLS_SECTION = {
  centerCard: asset("imgGroup43960.svg"),
  centerStroke: asset("imgRectangle10920Stroke.svg"),
  centerStickers: [
    asset("imgGroup43921.svg"),
    asset("imgGroup43974.svg"),
    asset("imgGroup43975.svg"),
    asset("imgGroup43976.svg"),
  ],
  chevronLeft: asset("imgChevronLeft.svg"),
  chevronRight: asset("imgChevronRight.svg"),
};

export const TOOL_TILES: ToolTile[] = [
  { id: "image-edit", icon: "edit", left: 330, top: 196, rotate: -10 },
  { id: "voice-left", icon: "voice", left: 70, top: 254, rotate: -20 },
  { id: "voice-far-left", icon: "voice", left: -163, top: 352, rotate: -30 },
  { id: "image-gen", icon: "image", left: 912, top: 212, rotate: 10 },
  { id: "sound-right", icon: "sound", left: 1132, top: 270, rotate: 20 },
  { id: "sound-far-right", icon: "sound", left: 1346, top: 364, rotate: 30 },
];

export const TOOL_TILE_ASSETS = {
  image: asset("imgIco24GenAiImageGen1.svg"),
  edit: asset("imgIco24GenAiImageEdit1.svg"),
  voice: asset("imgIco24GenAiVoiceGen.svg"),
  sound: asset("imgIco24GenAiSoundGen.svg"),
};

export const ASSET_CATEGORIES: AssetCategory[] = [
  { title: "Photos", image: asset("imgRectangle10926.png") },
  { title: "Video", image: asset("imgRectangle10931.jpg") },
  { title: "Video templates", image: asset("imgRectangle10935.jpg") },
  { title: "Music", image: asset("imgRectangle10939.png") },
  { title: "Graphics", image: asset("imgRectangle10942.png") },
  { title: "Sound effects", image: asset("imgRectangle10943.jpg"), showWaveform: true },
  { title: "Graphic templates", image: asset("imgRectangle10949.png") },
  { title: "Fonts", image: asset("imgRectangle10956.jpg") },
  { title: "3D", image: asset("imgRectangle10958.png") },
  { title: "Presentation templates", image: asset("imgRectangle10963.png") },
  { title: "Add ons", image: asset("imgRectangle10966.png") },
  { title: "Web templates", image: asset("imgRectangle10968.png") },
];

export const FAQ_ITEMS = [
  "How does licensing on Envato Elements work?",
  "Does Envato Elements have the same items as Envato Market?",
  "How does licensing on Envato Elements work?",
  "Do any limits apply to downloads?",
  "Can I get support for items on Envato Elements?",
  "Can I cancel or upgrade any time?",
];

export const FOOTER_LINKS = [
  "About Envato",
  "Plans & Pricing",
  "License Terms",
  "Terms & Conditions",
  "Privacy Policy",
  "Cookies",
  "Help",
  "Do not sell or share my personal information",
];

export const FOOTER_COPY =
  "\u00a9\ufe0f 2026 Envato Elements Pty Ltd. Trademarks and brands are the property of their respective owners.";

export const FOOTER_ASSET = {
  divider: asset("imgLine104.svg"),
  faqChevron: asset("imgChevronDown.svg"),
};
