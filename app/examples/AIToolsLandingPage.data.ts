export type HeaderLink = {
  label: string;
  href: string;
  hasChevron?: boolean;
};

export type ModelLogoItem =
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
    };

export type ProofCard = {
  title: string;
  description: string;
  height: number;
  topOffset: number;
};

export type Feature = {
  title: string;
  description: string;
};

export type StepItem = {
  title: string;
  description: string;
};

export type PricingFeature = {
  icon: "check" | "ai";
  badge?: string;
  emphasis: string;
  trailing?: string;
  bulletLines?: string[];
};

export type PricingPlan = {
  name: string;
  price: string;
  monthlySuffix: string;
  annualLine: string;
  monthlyLine: string;
  features: PricingFeature[];
};

export type CategoryCard = {
  title: string;
  image: string;
  offset: "base" | "stagger";
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type PricingModelItem = {
  kind: "image" | "label";
  label: string;
  src?: string;
  width: number;
  height: number;
  iconWidth?: number;
  iconHeight?: number;
  fontSize?: number;
};

export type HeroInteractiveCard = {
  id: string;
  left: number;
  top: number;
  width: number;
  height: number;
  zIndex: number;
  parallaxX: number;
  parallaxY: number;
  ctaLabel?: string;
  mediaSrc?: string;
};

export const HEADER_LOGO = {
  logotype: new URL("./assets/ai-tools-landing/8c2e17df-a94c-46fd-ad11-0d23fb86d4f8.svg", import.meta.url).href,
  mark: new URL("./assets/ai-tools-landing/1468c807-85ac-45ca-85f7-edcbd5d0334f.svg", import.meta.url).href,
  chevron: new URL("./assets/ai-tools-landing/0712d383-ac33-4e54-9c2a-a45392a0bb1e.svg", import.meta.url).href,
  userIcon: new URL("./assets/ai-tools-landing/5527f29f-2e66-4ee8-af2c-7361a06d6832.svg", import.meta.url).href,
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

export const HERO_ASSETS = {
  addImagePrimary:
    new URL("./assets/ai-tools-landing/5520e668-6d7a-46c8-a830-f760bf0a31e6.svg", import.meta.url).href,
  addImageSecondary:
    new URL("./assets/ai-tools-landing/7d0f7d98-ddfb-42b5-baba-e77d757ba3b9.svg", import.meta.url).href,
  styleThumbnail:
    new URL("./assets/ai-tools-landing/0a8b1285-5ded-464e-b067-c472842eba67.png", import.meta.url).href,
  styleIcon: new URL("./assets/ai-tools-landing/78a5cff8-df04-4672-8c2f-08f740fb531e.svg", import.meta.url).href,
  styleChevron:
    new URL("./assets/ai-tools-landing/acf11497-016f-49fe-a98b-0a108b9affb1.svg", import.meta.url).href,
  aspectIcon:
    new URL("./assets/ai-tools-landing/9fa82f7e-b16d-4d04-983d-893655ea38cc.svg", import.meta.url).href,
  chipChevron:
    new URL("./assets/ai-tools-landing/5e4a7a70-c591-4a8c-8a58-7e77c0117316.svg", import.meta.url).href,
  variationsIcon:
    new URL("./assets/ai-tools-landing/e00e9964-5d80-4b69-9427-692ae1ddd06f.svg", import.meta.url).href,
  wandIcon:
    new URL("./assets/ai-tools-landing/93b563b4-644c-4244-b97f-7af788b06bed.svg", import.meta.url).href,
  generateArrow:
    new URL("./assets/ai-tools-landing/cd5992c6-9cd5-468f-a91e-c7702dff2b31.svg", import.meta.url).href,
  videoMainContent:
    new URL("./assets/ai-tools-landing/27cc8053-dbd3-4681-a4b5-7152c49fa7e0.svg", import.meta.url).href,
  videoStroke:
    new URL("./assets/ai-tools-landing/01dfde6c-271f-400c-ab4f-aa0d6596dedc.svg", import.meta.url).href,
  videoTopIcons: [
    new URL("./assets/ai-tools-landing/f7a1f7fe-79bd-4027-b2c3-5c858163bed9.svg", import.meta.url).href,
    new URL("./assets/ai-tools-landing/23878803-f644-474f-a9df-a51fbcb4ef7b.svg", import.meta.url).href,
    new URL("./assets/ai-tools-landing/3d3cd80c-8646-43f7-b873-8aacdf059d5b.svg", import.meta.url).href,
    new URL("./assets/ai-tools-landing/640d9248-a578-4a3c-b975-2559140e9f3f.svg", import.meta.url).href,
  ],
};

export const HERO_SCENE_ASSETS = {
  promptSpark: new URL("./assets/ai-tools-landing/pricing-ai-labs.svg", import.meta.url).href,
};

export const HERO_ROTATING_PROMPTS = [
  "A cozy cafe in Paris during sunset with people walking by.",
  "An astronaut floating through a colorful nebula in space.",
  "A cute tiger playing with a ball in a grassy field.",
];

export const HERO_TOOL_ITEMS = [
  { label: "Video", kind: "video" as const },
  {
    label: "Image",
    kind: "asset" as const,
    src: new URL("./assets/ai-tools-landing/8a4fc30f-5465-4337-b087-2122d1107b60.svg", import.meta.url).href,
  },
  {
    label: "Music",
    kind: "asset" as const,
    src: new URL("./assets/ai-tools-landing/628eec26-a527-4a5a-b3f1-2cc89e0163f7.svg", import.meta.url).href,
  },
  {
    label: "Voice",
    kind: "asset" as const,
    src: new URL("./assets/ai-tools-landing/70e421e0-1e3b-410f-975d-c4e6acd30e01.svg", import.meta.url).href,
  },
  {
    label: "Graphics",
    kind: "asset" as const,
    src: new URL("./assets/ai-tools-landing/38e80865-a488-4fc5-a7de-ebffdd4ac22e.svg", import.meta.url).href,
  },
  {
    label: "Sound",
    kind: "asset" as const,
    src: new URL("./assets/ai-tools-landing/38d6d9bd-3d76-44bc-8ba1-5df4c5575166.svg", import.meta.url).href,
  },
  {
    label: "Mockup",
    kind: "asset" as const,
    src: new URL("./assets/ai-tools-landing/789b93f7-791e-41a6-ad1a-bc7c35cfc6a4.svg", import.meta.url).href,
  },
];

export const HERO_INTERACTIVE_CARDS: HeroInteractiveCard[] = [
  {
    id: "top-right",
    left: 1158,
    top: 34,
    width: 354,
    height: 354.251,
    zIndex: 1,
    parallaxX: 184,
    parallaxY: -62,
  },
  {
    id: "upper-left",
    left: -18,
    top: 132,
    width: 299,
    height: 458.533,
    zIndex: 0,
    parallaxX: -172,
    parallaxY: -84,
    mediaSrc: new URL("./assets/ai-tools-landing/hero-top-right-media.gif", import.meta.url).href,
  },
  {
    id: "wide-left",
    left: 203,
    top: 550.14,
    width: 354,
    height: 326,
    zIndex: 3,
    parallaxX: -148,
    parallaxY: 34,
  },
  {
    id: "big-right",
    left: 769,
    top: 571,
    width: 645,
    height: 379,
    zIndex: 1,
    parallaxX: 218,
    parallaxY: 42,
    ctaLabel: "Get prompt",
  },
  {
    id: "center-left",
    left: 330,
    top: 662,
    width: 299,
    height: 458.533,
    zIndex: 2,
    parallaxX: -74,
    parallaxY: 118,
  },
  {
    id: "bottom-left",
    left: -232.883,
    top: 934,
    width: 530.266,
    height: 354.251,
    zIndex: 1,
    parallaxX: -192,
    parallaxY: 110,
  },
  {
    id: "center-right",
    left: 704,
    top: 803,
    width: 354,
    height: 438,
    zIndex: 2,
    parallaxX: 82,
    parallaxY: 128,
  },
  {
    id: "bottom-right",
    left: 1148,
    top: 991,
    width: 354,
    height: 283,
    zIndex: 1,
    parallaxX: 176,
    parallaxY: 108,
  },
];

export const MODEL_LOGOS: ModelLogoItem[] = [
  {
    kind: "image",
    label: "OpenAI",
    src: new URL("./assets/ai-tools-landing/41470a04-1179-46de-a723-e17dc5f10746.svg", import.meta.url).href,
    width: 88.5,
    height: 24,
  },
  {
    kind: "image",
    label: "Luma AI",
    src: new URL("./assets/ai-tools-landing/725b7dcc-af1c-4acf-b2b0-4ff14941e613.svg", import.meta.url).href,
    width: 96.527,
    height: 18,
  },
  { kind: "text", label: "Veo" },
  { kind: "text", label: "Nano Banana" },
  {
    kind: "text-with-icon",
    label: "Seedream",
    src: new URL("./assets/ai-tools-landing/af7a0a27-634c-4b43-88a1-9388cc4b5109.svg", import.meta.url).href,
    width: 20.624,
    height: 18,
  },
  {
    kind: "image",
    label: "Kling AI",
    src: new URL("./assets/ai-tools-landing/cec2dd8b-a6c2-4dc3-b1ef-6deffe5b6eef.svg", import.meta.url).href,
    width: 95.25,
    height: 24.002,
  },
  {
    kind: "image",
    label: "ElevenLabs",
    src: new URL("./assets/ai-tools-landing/62b23307-6079-4c3d-9088-f4a3c28255a2.svg", import.meta.url).href,
    width: 115.5,
    height: 15,
  },
  {
    kind: "text-with-icon",
    label: "Flux",
    src: new URL("./assets/ai-tools-landing/f2e17212-a78c-4e51-a938-1635c84af355.svg", import.meta.url).href,
    width: 24,
    height: 24,
  },
  {
    kind: "text-with-icon",
    label: "Minimax",
    src: new URL("./assets/ai-tools-landing/fc0fea32-5197-4088-92db-681123027815.svg", import.meta.url).href,
    width: 24,
    height: 24,
  },
];

export const WHY_CTA_LABEL = "Start creating";

export const AI_VIDEO_STEPS_TITLE = "Create AI videos in three simple steps";

export const AI_VIDEO_STEPS_SUBTITLE = "Stunning AI-generated videos. Spark your next big idea.";

export const AI_VIDEO_STEPS_IMAGE = new URL(
  "./assets/ai-tools-landing/e998a5f1-53f1-4886-8515-55cb068351c6.png",
  import.meta.url,
).href;

export const AI_VIDEO_STEPS: StepItem[] = [
  {
    title: "Select a first frame",
    description:
      "Pick a preset for cinematic quality or type what you're vision-our 'Enhance prompt' tool perfects the details.",
  },
  {
    title: "Write a prompt",
    description:
      "Pick a preset for cinematic quality or type what you're vision-our 'Enhance prompt' tool perfects the details.",
  },
  {
    title: "Select preset & generate",
    description:
      "Pick a preset for cinematic quality or type what you're vision-our 'Enhance prompt' tool perfects the details.",
  },
];

export const PRICING_SECTION_TITLE = "Unlimited creativity, all in one place";

export const PRICING_MODELS_TITLE = "Powered by leading AI models";

export const PRICING_NOTE =
  "Price in US Dollars, excludes local tax. Subject to Envato’s User Terms; including our Fair Use Policy.";

export const PRICING_STUDENT_NOTE = "Students save 30% on the Core Plan.";

export const PRICING_STUDENT_LINK_LABEL = "Learn more";

export const PRICING_ASSETS = {
  aiLabs: new URL("./assets/ai-tools-landing/pricing-ai-labs.svg", import.meta.url).href,
  checkCircle: new URL("./assets/ai-tools-landing/pricing-check-circle.svg", import.meta.url).href,
  modelSpark: new URL("./assets/ai-tools-landing/pricing-model-spark.svg", import.meta.url).href,
  toggleTeams: new URL("./assets/ai-tools-landing/pricing-toggle-teams.svg", import.meta.url).href,
  toggleUser: new URL("./assets/ai-tools-landing/pricing-toggle-user.svg", import.meta.url).href,
};

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: "Core",
    price: "$16.50",
    monthlySuffix: "/month",
    annualLine: "billed annually,",
    monthlyLine: "or monthly for $39",
    features: [
      {
        icon: "check",
        emphasis: "Unlimited downloads of 26+ million creative assets:",
        bulletLines: [
          "Stock Video & Photos",
          "Video Templates",
          "Music & Sound Effects",
          "Design Templates",
          "Graphics & 3D",
          "Fonts & add-ons",
          "& more",
        ],
      },
      {
        icon: "ai",
        emphasis: "10 AI generations per month across our AI toolkit",
      },
      {
        icon: "check",
        emphasis: "Lifetime commercial license ",
        trailing: "for all creative assets and AI generations",
      },
    ],
  },
  {
    name: "Plus",
    price: "$39",
    monthlySuffix: "/month",
    annualLine: "billed annually,",
    monthlyLine: "or monthly for $59",
    features: [
      {
        icon: "check",
        emphasis: "Everything in Core",
      },
      {
        icon: "ai",
        emphasis: "100 AI generations per month across our AI toolkit:",
        bulletLines: [
          "AI image generation & editing",
          "AI video generation & editing",
          "AI voice over",
          "AI music & sound effects generation",
          "AI graphics & mockup generation",
          "& more",
        ],
      },
    ],
  },
  {
    name: "Ultimate",
    price: "$109",
    monthlySuffix: "/month",
    annualLine: "billed annually,",
    monthlyLine: "or monthly for $169",
    features: [
      {
        icon: "check",
        emphasis: "Everything in Plus",
      },
      {
        icon: "ai",
        badge: "Unlimited",
        emphasis: "AI generations per month across our AI toolkit",
      },
    ],
  },
];

export const PRICING_MODEL_ROWS: PricingModelItem[][] = [
  [
    {
      kind: "image",
      label: "OpenAI",
      src: new URL("./assets/ai-tools-landing/41470a04-1179-46de-a723-e17dc5f10746.svg", import.meta.url).href,
      width: 118,
      height: 32,
    },
    {
      kind: "image",
      label: "Luma AI",
      src: new URL("./assets/ai-tools-landing/725b7dcc-af1c-4acf-b2b0-4ff14941e613.svg", import.meta.url).href,
      width: 128.703,
      height: 24,
    },
    {
      kind: "label",
      label: "Veo",
      src: new URL("./assets/ai-tools-landing/pricing-model-spark.svg", import.meta.url).href,
      width: 85,
      height: 32,
      iconWidth: 24,
      iconHeight: 24,
      fontSize: 24,
    },
    {
      kind: "label",
      label: "Nano Banana",
      src: new URL("./assets/ai-tools-landing/pricing-model-spark.svg", import.meta.url).href,
      width: 190,
      height: 32,
      iconWidth: 24,
      iconHeight: 24,
      fontSize: 24,
    },
    {
      kind: "label",
      label: "Seedream",
      src: new URL("./assets/ai-tools-landing/af7a0a27-634c-4b43-88a1-9388cc4b5109.svg", import.meta.url).href,
      width: 124.5,
      height: 24,
      iconWidth: 20.624,
      iconHeight: 18,
      fontSize: 18,
    },
  ],
  [
    {
      kind: "image",
      label: "Kling AI",
      src: new URL("./assets/ai-tools-landing/cec2dd8b-a6c2-4dc3-b1ef-6deffe5b6eef.svg", import.meta.url).href,
      width: 127,
      height: 32.002,
    },
    {
      kind: "image",
      label: "ElevenLabs",
      src: new URL("./assets/ai-tools-landing/62b23307-6079-4c3d-9088-f4a3c28255a2.svg", import.meta.url).href,
      width: 154,
      height: 20,
    },
    {
      kind: "label",
      label: "Flux",
      src: new URL("./assets/ai-tools-landing/f2e17212-a78c-4e51-a938-1635c84af355.svg", import.meta.url).href,
      width: 100,
      height: 32,
      iconWidth: 32,
      iconHeight: 32,
      fontSize: 24,
    },
    {
      kind: "label",
      label: "Minimax",
      src: new URL("./assets/ai-tools-landing/fc0fea32-5197-4088-92db-681123027815.svg", import.meta.url).href,
      width: 143,
      height: 32,
      iconWidth: 32,
      iconHeight: 32,
      fontSize: 24,
    },
  ],
];

export const PROOF_CARDS: ProofCard[] = [
  {
    title: "The latest AI models",
    description:
      "Pick a preset for cinematic quality or type what your vision - our \"Enhance prompt\" tool perfects the details.",
    height: 386,
    topOffset: 6,
  },
  {
    title: "The latest AI models",
    description:
      "Tweak lighting, swap subjects, and more - no need to regenerate from scratch. Keep what's working and fix what isn't.",
    height: 326.169,
    topOffset: 55,
  },
  {
    title: "The latest AI models",
    description:
      "Export your video for TikTok, YouTube, Instagram, or presentations without losing quality or starting over.",
    height: 386,
    topOffset: 28.743,
  },
  {
    title: "The latest AI models",
    description:
      "Pick a preset for cinematic quality or type what your vision - our \"Enhance prompt\" tool perfects the details.",
    height: 326.169,
    topOffset: 10,
  },
];

export const FEATURES: Feature[] = [
  {
    title: "Unlimited downloads",
    description:
      "Pick a preset for cinematic quality or type what your vision - our \"Enhance prompt\" tool perfects the details.",
  },
  {
    title: "Commercial licensing",
    description:
      "Tweak lighting, swap subjects, and more - no need to regenerate from scratch. Keep what's working and fix what isn't.",
  },
  {
    title: "Artist made assets",
    description:
      "Export your video for TikTok, YouTube, Instagram, or presentations without losing quality or starting over.",
  },
];

export const FEATURE_CHECK_ICON =
  new URL("./assets/ai-tools-landing/62ad299b-6d96-45ec-9363-44110daed193.svg", import.meta.url).href;

export const CATEGORY_CARDS: CategoryCard[] = [
  {
    title: "Photos",
    image: new URL("./assets/ai-tools-landing/0cf03ba1-fb97-47a1-979c-669b02f5b450.png", import.meta.url).href,
    offset: "base",
  },
  {
    title: "Video",
    image: new URL("./assets/ai-tools-landing/b5d32744-84a7-42bf-bd7c-bea5f4ea3529.jpg", import.meta.url).href,
    offset: "stagger",
  },
  {
    title: "Video templates",
    image: new URL("./assets/ai-tools-landing/f5934305-116b-4919-80d4-4309fb38c30c.jpg", import.meta.url).href,
    offset: "base",
  },
  {
    title: "Music",
    image: new URL("./assets/ai-tools-landing/c61d8c3a-346d-4e78-810c-0550630dd304.png", import.meta.url).href,
    offset: "stagger",
  },
  {
    title: "Graphics",
    image: new URL("./assets/ai-tools-landing/3954db99-ea39-4ebd-b390-06a53892f39e.png", import.meta.url).href,
    offset: "base",
  },
  {
    title: "Sound effects",
    image: new URL("./assets/ai-tools-landing/7416857e-2619-43c3-936e-4706e2afd0de.png", import.meta.url).href,
    offset: "base",
  },
  {
    title: "Graphic templates",
    image: new URL("./assets/ai-tools-landing/45b92591-633b-43f3-b477-66573510b663.jpg", import.meta.url).href,
    offset: "stagger",
  },
  {
    title: "3D",
    image: new URL("./assets/ai-tools-landing/aeaca7dc-0dd0-4b0b-9844-8ee02f7cc4ae.png", import.meta.url).href,
    offset: "base",
  },
  {
    title: "Presentation templates",
    image: new URL("./assets/ai-tools-landing/468b05c8-89e4-4aa5-bd75-89eb075f2e48.jpg", import.meta.url).href,
    offset: "stagger",
  },
  {
    title: "Add ons",
    image: new URL("./assets/ai-tools-landing/dd68aa22-9a02-4e93-b0af-8c2cdf1b5373.png", import.meta.url).href,
    offset: "base",
  },
];

export const FAQ_TITLE = "FAQS";

export const FAQ_ITEMS: FaqItem[] = [
  {
    question: "What is Envato",
    answer:
      "Envato is a creative ecosystem with digital assets, templates, and AI tools that help creators move from idea to finished work faster.",
  },
  {
    question: "Does Envato Elements have the same items as Envato Market?",
    answer:
      "Envato Elements focuses on subscription-based access to a huge library of creative assets, while Envato Market contains individually purchased items.",
  },
  {
    question: "How does licensing on Envato Elements work?",
    answer:
      "Downloads are covered by a commercial license. You register the asset to a project so you can use it in client and personal work under the terms of the license.",
  },
  {
    question: "Do any limits apply to downloads?",
    answer:
      "Downloads are unlimited for active subscribers, which makes it easy to explore variations, concepts, and creative directions as you work.",
  },
  {
    question: "Can I get support for items on Envato Elements?",
    answer:
      "Support varies by item and author, but Envato provides help resources and documentation so you can get the most out of your subscription.",
  },
  {
    question: "Can I cancel or upgrade any time?",
    answer:
      "Yes. You can manage your subscription directly from your account settings and switch plans whenever your needs change.",
  },
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
  "© 2026 Envato Elements Pty Ltd. Trademarks and brands are the property of their respective owners.";
