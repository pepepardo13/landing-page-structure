import { useState, type ReactNode } from "react";

import elevenLabsLogo from "./elevenlabs-logo.png";
import envatoLogo from "./envato-logo.png";
import klingLogo from "./kling-logo.png";
import lumaAiLogo from "./luma-ai-logo.png";
import openAiLogo from "./openai-logo.png";
import seedreamLogo from "./seedream-logo.png";
import baseStyles from "./PricingPage.module.scss";
import styles from "./PricingPageGlobalSeatSelection.module.scss";

const assets = {
  aiLabs: "https://www.figma.com/api/mcp/asset/1d54f6e5-dfaa-4da0-80f6-a89d079a7555",
  amex: "https://www.figma.com/api/mcp/asset/b582ab39-b681-4550-899c-cfdc7e587e83",
  applePay: "https://www.figma.com/api/mcp/asset/ef0f36a0-29cc-4fc4-850c-bf3cc061a394",
  canva: "https://www.figma.com/api/mcp/asset/a0e68677-367a-4fbc-898b-164e16ae99df",
  check: "https://www.figma.com/api/mcp/asset/c60a056c-303a-40a5-81f4-f88dcf0295e2",
  cube: "https://www.figma.com/api/mcp/asset/edab3a22-d700-475a-bda4-f77ff2d8e429",
  daVinci: "https://www.figma.com/api/mcp/asset/e8f5438f-8b4a-4bcd-a88e-7e76fdc4b682",
  dropdownChevron: "https://www.figma.com/api/mcp/asset/7aa7d2c1-88e0-42b9-9002-65c75a9c6e55",
  finalCut: "https://www.figma.com/api/mcp/asset/407556c6-413e-407a-8f6f-07ee44abff93",
  flux: "https://www.figma.com/api/mcp/asset/d7a93a9b-81ae-40c1-9eba-eda5df9174ee",
  fluxSmall: "https://www.figma.com/api/mcp/asset/26b83e6d-4053-46bb-b478-31dcd366e0c5",
  graphics: "https://www.figma.com/api/mcp/asset/d374f8cf-28c8-44d3-9f55-3e1555c121ab",
  graphicsGen: "https://www.figma.com/api/mcp/asset/2d98eb4e-4c7c-4fce-b50e-01121711088f",
  imageEdit: "https://www.figma.com/api/mcp/asset/3e98a446-42ce-48f1-8bcf-b6192ea765af",
  imageGen: "https://www.figma.com/api/mcp/asset/b2fae8a1-414a-490c-9b0d-2eb93b79bbd2",
  mastercardLeft: "https://www.figma.com/api/mcp/asset/60d3aca3-c140-4358-82ea-ab6d6bc24f9a",
  mastercardMiddle: "https://www.figma.com/api/mcp/asset/2cc99287-207e-4ad9-bb2f-83d1e3cdecc2",
  mastercardRight: "https://www.figma.com/api/mcp/asset/c6062ad0-3b37-4e80-8bdd-ebe992a36fa1",
  minimax: "https://www.figma.com/api/mcp/asset/86c0cc4c-dcec-4187-8e6c-2c1ad0a03d37",
  minimaxSmall: "https://www.figma.com/api/mcp/asset/ab1b882b-c770-4fb3-b84d-3f2c951b854c",
  music: "https://www.figma.com/api/mcp/asset/154b3fe0-3f46-4487-9ff9-e4c39e1cd4f0",
  musicGen: "https://www.figma.com/api/mcp/asset/1ed55898-5732-4ac1-b517-4cd58eb622ad",
  palette: "https://www.figma.com/api/mcp/asset/7a37608c-2f7e-4677-95bb-2659fc1a82ee",
  paypal: "https://www.figma.com/api/mcp/asset/678efd7b-0fee-4946-9a67-80b0c383f658",
  photo: "https://www.figma.com/api/mcp/asset/af69dd65-3fe4-4a1a-8605-1964eca1f1e4",
  search: "https://www.figma.com/api/mcp/asset/8f546c79-9e92-422b-aa95-af8dd601c3e5",
  stylus: "https://www.figma.com/api/mcp/asset/47bc34be-968b-4869-b7c5-e0a8d10e9b95",
  teamsIcon: "https://www.figma.com/api/mcp/asset/128026d8-ec44-4d6b-8c3a-0402db33a6c9",
  vectorG: "https://www.figma.com/api/mcp/asset/ee6fffc4-9172-4b22-baef-e9cbf9d53799",
  vectorGSmall: "https://www.figma.com/api/mcp/asset/7c55084f-bb83-440d-9524-dd98a2b3a336",
  videoGen: "https://www.figma.com/api/mcp/asset/cc4a9cec-529f-4c3a-9aa3-282ffaef0816",
  videoTemplates: "https://www.figma.com/api/mcp/asset/923a16e0-90eb-4423-94ab-5341acbfd741",
  visa: "https://www.figma.com/api/mcp/asset/264e8c69-65ce-4134-93f7-e70eca23e1c2",
  voiceGen: "https://www.figma.com/api/mcp/asset/7e72af2c-d407-4059-8bd5-9a429d66579d",
  wordpress: "https://www.figma.com/api/mcp/asset/44472bee-11c1-4380-8968-e129f1a24b82",
};

type Feature = {
  icon: "check" | "ai";
  content: ReactNode;
};

type Plan = {
  name: string;
  annualMonthlyPrice: number;
  monthToMonthPrice: number;
  features: Feature[];
};

type PricingMode = "individual" | "teams";

type TeamPlanData =
  | {
      kind: "team";
      nameLines: [string, string];
      annualMonthlyPrice: Record<1 | 2 | 3 | 4 | 5, string>;
      monthToMonthPrice: number;
      features: Feature[];
    }
  | {
      kind: "enterprise";
      name: string;
      description: string;
      features: Feature[];
    };

const topNavItems = ["License", "Pricing"];
const bottomNavItems = [
  "Stock Video",
  "Video Templates",
  "Music",
  "Sound Effects",
  "Graphic Templates",
  "Graphics",
  "Presentation Templates",
  "Photos",
  "Fonts",
  "Add-ons",
  "More",
];

const individualPlans: Plan[] = [
  {
    name: "Core",
    annualMonthlyPrice: 16.5,
    monthToMonthPrice: 39,
    features: [
      {
        icon: "check",
        content: (
          <>
            <strong>Unlimited downloads of 26+ million creative assets:</strong>
            <ul>
              <li>Stock Video & Photos</li>
              <li>Video Templates</li>
              <li>Music & Sound Effects</li>
              <li>Design Templates</li>
              <li>Graphics & 3D</li>
              <li>Fonts & add-ons</li>
              <li>& more</li>
            </ul>
          </>
        ),
      },
      {
        icon: "ai",
        content: (
          <>
            <strong>10 AI generations per month across</strong>
            <div>our AI toolkit</div>
          </>
        ),
      },
      {
        icon: "check",
        content: (
          <>
            <strong>Lifetime commercial license </strong>
            <span>for all creative assets and AI generations</span>
          </>
        ),
      },
    ],
  },
  {
    name: "Plus",
    annualMonthlyPrice: 39,
    monthToMonthPrice: 59,
    features: [
      {
        icon: "check",
        content: <strong>Everything in Core</strong>,
      },
      {
        icon: "ai",
        content: (
          <>
            <strong>100 AI generations per month</strong>
            <div>
              <strong>across our AI toolkit:</strong>
            </div>
            <ul>
              <li>AI image generation & editing</li>
              <li>AI video generation & editing</li>
              <li>AI voice over</li>
              <li>AI music & sound effects generation</li>
              <li>AI graphics & mockup generation</li>
              <li>& more</li>
            </ul>
          </>
        ),
      },
    ],
  },
  {
    name: "Ultimate",
    annualMonthlyPrice: 109,
    monthToMonthPrice: 169,
    features: [
      {
        icon: "check",
        content: <strong>Everything in Plus</strong>,
      },
      {
        icon: "ai",
        content: (
          <div className={baseStyles["featureInline"]}>
            <span className={baseStyles["badge"]}>Unlimited</span>
            <div>
              <div>
                <strong>AI generations per month</strong>
              </div>
              <div>across our AI toolkit</div>
            </div>
          </div>
        ),
      },
    ],
  },
];

const teamPlans: TeamPlanData[] = [
  {
    kind: "team",
    nameLines: ["Team", "Core"],
    annualMonthlyPrice: {
      1: "16.50",
      2: "29",
      3: "37.25",
      4: "45.50",
      5: "53.75",
    },
    monthToMonthPrice: 16.5,
    features: [
      {
        icon: "check",
        content: (
          <>
            <strong>Unlimited downloads of 26+ million creative assets:</strong>
            <ul>
              <li>Stock Video & Photos</li>
              <li>Video Templates</li>
              <li>Music & Sound Effects</li>
              <li>Design Templates</li>
              <li>Graphics & 3D</li>
              <li>Fonts & Add-ons</li>
              <li>& more</li>
            </ul>
          </>
        ),
      },
      {
        icon: "ai",
        content: <strong>10 AI generations per member, per month, across our AI toolkit</strong>,
      },
      {
        icon: "check",
        content: <strong>Scale and change members at any time</strong>,
      },
      {
        icon: "check",
        content: (
          <>
            <strong>Lifetime commercial license </strong>
            <span>for all creative assets and AI generations</span>
          </>
        ),
      },
      {
        icon: "check",
        content: <strong>Save up to 34% compared to Individual Core</strong>,
      },
    ],
  },
  {
    kind: "team",
    nameLines: ["Team", "Plus"],
    annualMonthlyPrice: {
      1: "39",
      2: "74",
      3: "106",
      4: "138",
      5: "170",
    },
    monthToMonthPrice: 39,
    features: [
      {
        icon: "check",
        content: <strong>Everything in Team Core</strong>,
      },
      {
        icon: "ai",
        content: (
          <>
            <strong>100 AI generations per member, per month, across our AI toolkit:</strong>
            <ul>
              <li>AI image generation & editing</li>
              <li>AI video generation & editing</li>
              <li>AI voice over</li>
              <li>AI music & sound effects generation</li>
              <li>AI graphics & mockup generation</li>
              <li>& more</li>
            </ul>
          </>
        ),
      },
      {
        icon: "check",
        content: <strong>Save up to 11% compared to Individual Plus</strong>,
      },
    ],
  },
  {
    kind: "team",
    nameLines: ["Team", "Ultimate"],
    annualMonthlyPrice: {
      1: "109",
      2: "199",
      3: "291",
      4: "383",
      5: "475",
    },
    monthToMonthPrice: 109,
    features: [
      {
        icon: "check",
        content: <strong>Everything in Plus</strong>,
      },
      {
        icon: "ai",
        content: (
          <div className={baseStyles["featureInline"]}>
            <span className={baseStyles["badge"]}>Unlimited</span>
            <div>
              <div>
                <strong>AI generations for all members, per month, across our AI toolkit</strong>
              </div>
            </div>
          </div>
        ),
      },
      {
        icon: "check",
        content: <strong>Save up to 10% compared to Individual Ultimate</strong>,
      },
    ],
  },
  {
    kind: "enterprise",
    name: "Enterprise",
    description:
      "Create at scale. Perfect for organizations, agencies, and companies with more than 50 employees.",
    features: [
      {
        icon: "check",
        content: <strong>Unlimited downloads of 26+ million creative assets</strong>,
      },
      {
        icon: "ai",
        content: (
          <div className={baseStyles["featureInline"]}>
            <span className={baseStyles["badge"]}>Unlimited</span>
            <div>
              <div>
                <strong>AI generations with our Complete plan</strong>
              </div>
            </div>
          </div>
        ),
      },
      {
        icon: "check",
        content: <strong>Custom number of user seats</strong>,
      },
      {
        icon: "check",
        content: <strong>Custom licensing & tailored indemnification</strong>,
      },
      {
        icon: "check",
        content: <strong>Simple invoicing & dedicated account manager</strong>,
      },
    ],
  },
];

const primaryModelLogos = [
  { type: "image", src: openAiLogo, alt: "OpenAI", className: baseStyles["logoOpenAi"] },
  { type: "image", src: lumaAiLogo, alt: "Luma AI", className: baseStyles["logoLuma"] },
  { type: "vectorText", src: assets.vectorG, text: "Veo", alt: "Veo" },
  { type: "vectorText", src: assets.vectorG, text: "Nano Banana", alt: "Nano Banana" },
  { type: "image", src: seedreamLogo, alt: "Seedream", className: baseStyles["logoSeedream"] },
] as const;

const secondaryModelLogos = [
  { type: "image", src: klingLogo, alt: "Kling AI", className: baseStyles["logoKling"] },
  { type: "image", src: elevenLabsLogo, alt: "ElevenLabs", className: baseStyles["logoElevenLabs"] },
  { type: "imageText", src: assets.flux, text: "Flux", alt: "Flux" },
  { type: "imageText", src: assets.minimax, text: "Minimax", alt: "Minimax" },
] as const;

const compactModelLogos = [
  { type: "image", src: openAiLogo, alt: "OpenAI" },
  { type: "image", src: lumaAiLogo, alt: "Luma AI" },
  { type: "vectorText", src: assets.vectorGSmall, text: "Veo", alt: "Veo" },
  { type: "vectorText", src: assets.vectorGSmall, text: "Nano Banana", alt: "Nano Banana" },
  { type: "image", src: klingLogo, alt: "Kling AI" },
  { type: "image", src: elevenLabsLogo, alt: "ElevenLabs" },
  { type: "imageText", src: assets.fluxSmall, text: "Flux", alt: "Flux" },
  { type: "imageText", src: assets.minimaxSmall, text: "Minimax", alt: "Minimax" },
] as const;

const proofRows = [
  {
    title: "The broadest range of creative assets",
    items: [
      { icon: assets.videoTemplates, label: "Video" },
      { icon: assets.music, label: "Audio" },
      { icon: assets.photo, label: "Photos" },
      { icon: assets.graphics, label: "Graphics" },
      { icon: assets.stylus, label: "Fonts" },
      { icon: assets.wordpress, label: "Presentations" },
      { label: "& more" },
    ],
  },
  {
    title: "Templates for all your tools",
    items: [
      { icon: assets.palette, label: "Adobe Creative Cloud" },
      { icon: assets.canva, label: "Canva" },
      { icon: assets.stylus, label: "Affinity" },
      { icon: assets.daVinci, label: "DaVinci Resolve" },
      { icon: assets.finalCut, label: "Final Cut Pro" },
      { icon: assets.cube, label: "Blender" },
    ],
  },
  {
    title: "Powerful generative AI stack",
    items: [
      { icon: assets.imageGen, label: "ImageGen" },
      { icon: assets.imageEdit, label: "ImageEdit" },
      { icon: assets.videoGen, label: "VideoGen" },
      { icon: assets.musicGen, label: "MusicGen" },
      { icon: assets.voiceGen, label: "VoiceGen" },
      { icon: assets.graphicsGen, label: "GraphicsGen" },
    ],
  },
];

const faqItems = [
  "What is Envato?",
  "Do any limits apply to downloads?",
  "How does licensing on Envato work?",
  "Can I cancel or upgrade at any time",
  "Can I get support for specific items on Envato?",
  "Can you use an Envato subscription to purchase assets from Envato Market?",
];

function formatPrice(value: number) {
  return `$${Number.isInteger(value) ? value.toFixed(0) : value.toFixed(2)}`;
}

function FeatureIcon({ type }: { type: Feature["icon"] }) {
  return (
    <img
      alt=""
      aria-hidden="true"
      className={baseStyles["featureIcon"]}
      src={type === "check" ? assets.check : assets.aiLabs}
    />
  );
}

function IndividualTabIcon() {
  return (
    <svg
      aria-hidden="true"
      className={baseStyles["toggleSvgIcon"]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="8" r="4" fill="currentColor" />
      <path d="M4 20c0-4.19 3.58-7 8-7s8 2.81 8 7v1H4v-1Z" fill="currentColor" />
    </svg>
  );
}

function SeatAdjustIcon({ type }: { type: "minus" | "plus" }) {
  return (
    <svg aria-hidden="true" className={styles["seatAdjustIcon"]} viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
      {type === "minus" ? (
        <path d="M4 10h12" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
      ) : (
        <>
          <path d="M4 10h12" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
          <path d="M10 4v12" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="2" />
        </>
      )}
    </svg>
  );
}

function SeatStepper({
  seatCount,
  onDecrement,
  onIncrement,
}: {
  seatCount: number;
  onDecrement: () => void;
  onIncrement: () => void;
}) {
  const memberLabel = seatCount === 1 ? "member" : "members";
  const canDecrement = seatCount > 1;
  const canIncrement = seatCount < 5;

  return (
    <div className={styles["seatStepper"]}>
      <button
        aria-label="Remove seat"
        className={`${styles["seatAdjustButton"]} ${canDecrement ? styles["seatAdjustButtonActive"] : ""}`}
        disabled={!canDecrement}
        onClick={onDecrement}
        type="button"
      >
        <SeatAdjustIcon type="minus" />
      </button>

      <div className={styles["seatCount"]}>
        <span className={styles["seatCountValue"]}>{seatCount}</span>
        <span className={styles["seatCountLabel"]}>{memberLabel}</span>
      </div>

      <button
        aria-label="Add seat"
        className={`${styles["seatAdjustButton"]} ${styles["seatAdjustButtonActive"]}`}
        disabled={!canIncrement}
        onClick={onIncrement}
        type="button"
      >
        <SeatAdjustIcon type="plus" />
      </button>
    </div>
  );
}

function PriceCard({
  plan,
}: {
  plan: Plan;
}) {
  return (
    <article className={`${baseStyles["planCard"]} ${styles["planCard"]}`}>
      <div className={baseStyles["planCardTop"]}>
        <h3 className={baseStyles["planName"]}>{plan.name}</h3>
        <div className={baseStyles["priceBlock"]}>
          <div className={baseStyles["priceRow"]}>
            <span className={baseStyles["price"]}>{formatPrice(plan.annualMonthlyPrice)}</span>
            <span className={baseStyles["cadence"]}>/month</span>
          </div>
          <p className={baseStyles["billing"]}>
            {`billed annually,\nor monthly for ${formatPrice(plan.monthToMonthPrice)}`}
          </p>
        </div>
        <button className={baseStyles["selectButton"]} type="button">
          Select
        </button>
      </div>

      <p className={baseStyles["includesLabel"]}>Includes:</p>

      <div className={baseStyles["featureList"]}>
        {plan.features.map((feature, index) => (
          <div className={baseStyles["featureRow"]} key={`${plan.name}-${index}`}>
            <FeatureIcon type={feature.icon} />
            <div className={baseStyles["featureContent"]}>{feature.content}</div>
          </div>
        ))}
      </div>
    </article>
  );
}

function TeamPriceCard({
  plan,
  seatCount,
}: {
  plan: Extract<TeamPlanData, { kind: "team" }>;
  seatCount: number;
}) {
  const annualTotal = `$${plan.annualMonthlyPrice[seatCount as 1 | 2 | 3 | 4 | 5]}`;
  const monthlyTotal = plan.monthToMonthPrice * seatCount;

  return (
    <article className={`${baseStyles["planCard"]} ${baseStyles["teamPlanCard"]} ${styles["planCard"]}`}>
      <div className={baseStyles["planCardTop"]}>
        <div className={styles["teamPlanHeader"]}>
          <div className={baseStyles["teamPlanName"]}>
            <span className={baseStyles["teamPlanEyebrow"]}>{plan.nameLines[0]}</span>
            <span className={baseStyles["teamPlanTitle"]}>{plan.nameLines[1]}</span>
          </div>
          <span className={styles["seatSummary"]}>{seatCount} seats</span>
        </div>
        <div className={baseStyles["priceBlock"]}>
          <div className={baseStyles["priceRow"]}>
            <span className={baseStyles["price"]}>{annualTotal}</span>
            <span className={baseStyles["cadence"]}>/month</span>
          </div>
          <p className={baseStyles["billing"]}>
            {`billed annually,\nor monthly for ${formatPrice(monthlyTotal)}`}
          </p>
        </div>
        <button className={baseStyles["selectButton"]} type="button">
          Select
        </button>
      </div>

      <p className={baseStyles["includesLabel"]}>Includes:</p>

      <div className={baseStyles["featureList"]}>
        {plan.features.map((feature, index) => (
          <div className={baseStyles["featureRow"]} key={`${plan.nameLines.join("-")}-${index}`}>
            <FeatureIcon type={feature.icon} />
            <div className={baseStyles["featureContent"]}>{feature.content}</div>
          </div>
        ))}
      </div>
    </article>
  );
}

function EnterpriseCard({ plan }: { plan: Extract<TeamPlanData, { kind: "enterprise" }> }) {
  return (
    <article className={`${baseStyles["planCard"]} ${baseStyles["teamPlanCard"]} ${baseStyles["enterpriseCard"]} ${styles["planCard"]}`}>
      <div className={baseStyles["planCardTop"]}>
        <h3 className={baseStyles["planName"]}>{plan.name}</h3>
        <p className={baseStyles["enterpriseDescription"]}>{plan.description}</p>
        <button className={baseStyles["secondaryButton"]} type="button">
          Contact Sales
        </button>
      </div>

      <p className={baseStyles["includesLabel"]}>Includes:</p>

      <div className={baseStyles["featureList"]}>
        {plan.features.map((feature, index) => (
          <div className={baseStyles["featureRow"]} key={`${plan.name}-${index}`}>
            <FeatureIcon type={feature.icon} />
            <div className={baseStyles["featureContent"]}>{feature.content}</div>
          </div>
        ))}
        <a className={baseStyles["enterpriseLearnMore"]} href="/">
          Learn more
        </a>
      </div>
    </article>
  );
}

function MasterCardLogo() {
  return (
    <div className={baseStyles["paymentCard"]}>
      <div className={baseStyles["masterCardIcon"]}>
        <img alt="" aria-hidden="true" src={assets.mastercardLeft} />
        <img alt="" aria-hidden="true" src={assets.mastercardMiddle} />
        <img alt="" aria-hidden="true" src={assets.mastercardRight} />
      </div>
    </div>
  );
}

function PaymentLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={baseStyles["paymentCard"]}>
      <img alt={alt} className={baseStyles["paymentImage"]} src={src} />
    </div>
  );
}

function ModelLogo({
  logo,
  compact = false,
}: {
  logo: (typeof primaryModelLogos)[number] | (typeof secondaryModelLogos)[number] | (typeof compactModelLogos)[number];
  compact?: boolean;
}) {
  if (logo.type === "image") {
    return <img alt={logo.alt} className={compact ? baseStyles["compactLogoImage"] : logo.className} src={logo.src} />;
  }

  if (logo.type === "imageText") {
    return (
      <div className={compact ? baseStyles["compactImageText"] : baseStyles["imageTextLogo"]}>
        <img
          alt=""
          aria-hidden="true"
          className={compact ? baseStyles["compactImageTextIcon"] : baseStyles["imageTextIcon"]}
          src={logo.src}
        />
        <span>{logo.text}</span>
      </div>
    );
  }

  return (
    <div className={compact ? baseStyles["compactVectorText"] : baseStyles["vectorTextLogo"]}>
      <img
        alt=""
        aria-hidden="true"
        className={compact ? baseStyles["compactVectorIcon"] : baseStyles["vectorIcon"]}
        src={logo.src}
      />
      <span>{logo.text}</span>
    </div>
  );
}

function ProofRow({
  title,
  items,
  renderCompactModels = false,
}: {
  title: string;
  items?: Array<{ icon?: string; label: string }>;
  renderCompactModels?: boolean;
}) {
  return (
    <div className={baseStyles["proofRow"]}>
      <div className={baseStyles["proofLabel"]}>
        <img alt="" aria-hidden="true" className={baseStyles["featureIcon"]} src={assets.check} />
        <span>{title}</span>
      </div>

      <div className={baseStyles["proofContent"]}>
        {renderCompactModels ? (
          <div className={baseStyles["compactModels"]}>
            {compactModelLogos.map((logo) => (
              <ModelLogo compact key={`${logo.alt}-${logo.type}`} logo={logo} />
            ))}
          </div>
        ) : (
          <div className={baseStyles["proofItems"]}>
            {items?.map((item) => (
              <div className={baseStyles["proofItem"]} key={item.label}>
                {item.icon && <img alt="" aria-hidden="true" className={baseStyles["proofItemIcon"]} src={item.icon} />}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function PricingPageGlobalSeatSelection() {
  const [pricingMode, setPricingMode] = useState<PricingMode>("individual");
  const [seatCount, setSeatCount] = useState(1);
  const isTeamsMode = pricingMode === "teams";

  return (
    <div className={baseStyles["page"]}>
      <header className={baseStyles["header"]}>
        <div className={baseStyles["topBar"]}>
          <div className={baseStyles["topBarLeft"]}>
            <a className={baseStyles["brand"]} href="/">
              <img alt="Envato" className={baseStyles["brandImage"]} src={envatoLogo} />
            </a>

            <div className={baseStyles["searchBar"]}>
              <div className={baseStyles["searchDropdown"]}>
                <span>All items</span>
                <img alt="" aria-hidden="true" src={assets.dropdownChevron} />
              </div>
              <div className={baseStyles["searchDivider"]} />
              <div className={baseStyles["searchInput"]}>
                <img alt="" aria-hidden="true" src={assets.search} />
                <span>Search</span>
              </div>
            </div>
          </div>

          <div className={baseStyles["topBarActions"]}>
            {topNavItems.map((item) => (
              <a className={baseStyles["headerLink"]} href="/" key={item}>
                {item}
              </a>
            ))}
            <button className={baseStyles["headerCta"]} type="button">
              Get unlimited downloads
            </button>
            <a className={baseStyles["headerLink"]} href="/">
              Sign In
            </a>
          </div>
        </div>

        <div className={baseStyles["bottomBar"]}>
          <div className={baseStyles["bottomNav"]}>
            {bottomNavItems.map((item) => (
              <a className={baseStyles["bottomNavItem"]} href="/" key={item}>
                {item}
              </a>
            ))}
          </div>
          <div className={baseStyles["bottomBarDivider"]} />
          <a className={baseStyles["bottomNavItem"]} href="/">
            Learn
          </a>
        </div>
      </header>

      <main>
        <section className={baseStyles["heroSection"]}>
          <div className={baseStyles["heroContainer"]}>
            <h1 className={baseStyles["heroTitle"]}>Unlimited creativity, all in one place</h1>

            <div className={styles["controlsRow"]}>
              <div className={`${baseStyles["toggle"]} ${styles["toggleGroup"]}`}>
                <button
                  aria-pressed={!isTeamsMode}
                  className={`${baseStyles["toggleButton"]} ${
                    isTeamsMode ? baseStyles["toggleButtonPlain"] : baseStyles["toggleButtonActive"]
                  }`}
                  onClick={() => {
                    setPricingMode("individual");
                    setSeatCount(1);
                  }}
                  type="button"
                >
                  <IndividualTabIcon />
                  <span>Individual</span>
                </button>
                <button
                  aria-pressed={isTeamsMode}
                  className={`${baseStyles["toggleButton"]} ${
                    isTeamsMode ? baseStyles["toggleButtonActive"] : baseStyles["toggleButtonDefault"]
                  }`}
                  onClick={() => {
                    setPricingMode("teams");
                    setSeatCount((count) => Math.max(2, count));
                  }}
                  type="button"
                >
                  <img alt="" aria-hidden="true" src={assets.teamsIcon} />
                  <span>Teams &amp; Enterprise</span>
                </button>
              </div>

              <SeatStepper
                onDecrement={() => {
                  setSeatCount((count) => {
                    const nextCount = Math.max(1, count - 1);
                    if (nextCount === 1) {
                      setPricingMode("individual");
                    }
                    return nextCount;
                  });
                }}
                onIncrement={() => {
                  setPricingMode("teams");
                  setSeatCount((count) => Math.min(5, count + 1));
                }}
                seatCount={seatCount}
              />
            </div>

            {isTeamsMode ? (
              <div className={baseStyles["teamPlanGrid"]}>
                {teamPlans.map((plan) =>
                  plan.kind === "enterprise" ? (
                    <EnterpriseCard key={plan.name} plan={plan} />
                  ) : (
                    <TeamPriceCard key={plan.nameLines.join("-")} plan={plan} seatCount={seatCount} />
                  ),
                )}
              </div>
            ) : (
              <div className={baseStyles["planGrid"]}>
                {individualPlans.map((plan) => (
                  <PriceCard key={plan.name} plan={plan} />
                ))}
              </div>
            )}

            <p className={baseStyles["pricingDisclaimer"]}>
              Price in US Dollars, excludes local tax. Subject to <a href="/">Envato&apos;s User Terms</a>; including our{" "}
              <a href="/">Fair Use Policy</a>.
            </p>

            <div className={baseStyles["modelsBlock"]}>
              <h2 className={baseStyles["sectionTitle"]}>Powered by leading AI models</h2>
              <div className={baseStyles["logoRowPrimary"]}>
                {primaryModelLogos.map((logo) => (
                  <ModelLogo key={`${logo.alt}-${logo.type}`} logo={logo} />
                ))}
              </div>
              <div className={baseStyles["logoRowSecondary"]}>
                {secondaryModelLogos.map((logo) => (
                  <ModelLogo key={`${logo.alt}-${logo.type}`} logo={logo} />
                ))}
              </div>
            </div>

            {!isTeamsMode && (
              <div className={baseStyles["studentBanner"]}>
                <p>Students save 30% on the Core Plan.</p>
                <a href="/">Learn more</a>
              </div>
            )}
          </div>
        </section>

        <section className={baseStyles["detailsSection"]}>
          <div className={baseStyles["detailsContainer"]}>
            <div className={baseStyles["introBlock"]}>
              <h2 className={baseStyles["heroTitle"]}>Loved by millions of creative pros globally</h2>
              <p className={baseStyles["introSubtitle"]}>From independent freelancers to the world&apos;s biggest brands</p>
            </div>

            <div className={baseStyles["proofStack"]}>
              {proofRows.map((row) => (
                <ProofRow items={row.items} key={row.title} title={row.title} />
              ))}
              <ProofRow renderCompactModels title="Powered by leading AI models" />
            </div>

            <div className={baseStyles["paymentSection"]}>
              <h3 className={baseStyles["sectionTitleSmall"]}>Easy and secure payment</h3>
              <div className={baseStyles["paymentColumns"]}>
                <div className={baseStyles["paymentColumn"]}>
                  <div className={baseStyles["paymentHeading"]}>Trusted payment methods</div>
                  <div className={baseStyles["paymentLogos"]}>
                    <PaymentLogo alt="Visa" src={assets.visa} />
                    <MasterCardLogo />
                    <PaymentLogo alt="PayPal" src={assets.paypal} />
                    <PaymentLogo alt="American Express" src={assets.amex} />
                    <PaymentLogo alt="Apple Pay" src={assets.applePay} />
                  </div>
                </div>
                <div className={baseStyles["paymentColumn"]}>
                  <div className={baseStyles["paymentHeading"]}>Secure payments</div>
                  <p className={baseStyles["paymentCopy"]}>Processed in a Level 1 PCI compliant environment.</p>
                </div>
              </div>
            </div>

            <div className={baseStyles["faqSection"]}>
              <div className={baseStyles["faqTitle"]}>Still have Qs?</div>
              <div className={baseStyles["faqList"]}>
                {faqItems.map((item) => (
                  <button className={baseStyles["faqItem"]} key={item} type="button">
                    <span>{item}</span>
                    <img alt="" aria-hidden="true" className={baseStyles["faqChevron"]} src={assets.dropdownChevron} />
                  </button>
                ))}
              </div>
            </div>

            <p className={baseStyles["legalNote"]}>
              All logos are owned by their respective owners and are used for informational purposes only. No affiliation or endorsement is implied.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
