import { useState, type ReactNode } from "react";

import elevenLabsLogo from "./elevenlabs-logo.png";
import envatoLogo from "./envato-logo.png";
import klingLogo from "./kling-logo.png";
import lumaAiLogo from "./luma-ai-logo.png";
import openAiLogo from "./openai-logo.png";
import seedreamLogo from "./seedream-logo.png";
import styles from "./PricingPage.module.scss";

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
  subtract: "https://www.figma.com/api/mcp/asset/407556c6-413e-407a-8f6f-07ee44abff93",
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
  price: string;
  cadence: string;
  billing: string;
  features: Feature[];
};

type PricingMode = "individual" | "teams";

type TeamPlanData =
  | {
      kind: "team";
      nameLines: [string, string];
      price: string;
      cadence: string;
      billing: string;
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
    price: "$16.50",
    cadence: "/month",
    billing: "billed annually,\nor monthly for $39",
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
    price: "$39",
    cadence: "/month",
    billing: "billed annually,\nor monthly for $59",
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
            <div><strong>across our AI toolkit:</strong></div>
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
    price: "$109",
    cadence: "/month",
    billing: "billed annually,\nor monthly for $169",
    features: [
      {
        icon: "check",
        content: <strong>Everything in Plus</strong>,
      },
      {
        icon: "ai",
        content: (
          <div className={styles["featureInline"]}>
            <span className={styles["badge"]}>Unlimited</span>
            <div>
              <div><strong>AI generations per month</strong></div>
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
    price: "$29",
    cadence: "/month",
    billing: "billed annually,\nor monthly for $33",
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
    price: "$74",
    cadence: "/month",
    billing: "billed annually,\nor monthly for $78",
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
    price: "$199",
    cadence: "/month",
    billing: "billed annually,\nor monthly for $218",
    features: [
      {
        icon: "check",
        content: <strong>Everything in Plus</strong>,
      },
      {
        icon: "ai",
        content: (
          <div className={styles["featureInline"]}>
            <span className={styles["badge"]}>Unlimited</span>
            <div>
              <div><strong>AI generations for all members, per month, across our AI toolkit</strong></div>
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
          <div className={styles["featureInline"]}>
            <span className={styles["badge"]}>Unlimited</span>
            <div>
              <div><strong>AI generations with our Complete plan</strong></div>
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
  { type: "image", src: openAiLogo, alt: "OpenAI", className: styles["logoOpenAi"] },
  { type: "image", src: lumaAiLogo, alt: "Luma AI", className: styles["logoLuma"] },
  { type: "vectorText", src: assets.vectorG, text: "Veo", alt: "Veo" },
  { type: "vectorText", src: assets.vectorG, text: "Nano Banana", alt: "Nano Banana" },
  { type: "image", src: seedreamLogo, alt: "Seedream", className: styles["logoSeedream"] },
] as const;

const secondaryModelLogos = [
  { type: "image", src: klingLogo, alt: "Kling AI", className: styles["logoKling"] },
  { type: "image", src: elevenLabsLogo, alt: "ElevenLabs", className: styles["logoElevenLabs"] },
  { type: "imageText", src: assets.flux, text: "Flux", alt: "Flux" },
  { type: "imageText", src: assets.minimax, text: "Minimax", alt: "Minimax" },
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

const faqItems = [
  "What is Envato?",
  "Do any limits apply to downloads?",
  "How does licensing on Envato work?",
  "Can I cancel or upgrade at any time",
  "Can I get support for specific items on Envato?",
  "Can you use an Envato subscription to purchase assets from Envato Market?",
];

function FeatureIcon({ type }: { type: Feature["icon"] }) {
  return (
    <img
      alt=""
      aria-hidden="true"
      className={styles["featureIcon"]}
      src={type === "check" ? assets.check : assets.aiLabs}
    />
  );
}

function IndividualTabIcon() {
  return (
    <svg
      aria-hidden="true"
      className={styles["toggleSvgIcon"]}
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="8" r="4" fill="currentColor" />
      <path d="M4 20c0-4.19 3.58-7 8-7s8 2.81 8 7v1H4v-1Z" fill="currentColor" />
    </svg>
  );
}

function SeatSelector() {
  return (
    <button className={styles["seatSelector"]} type="button">
      <img alt="" aria-hidden="true" className={styles["seatSelectorIcon"]} src={assets.teamsIcon} />
      <span>2</span>
      <img alt="" aria-hidden="true" className={styles["seatSelectorChevron"]} src={assets.dropdownChevron} />
    </button>
  );
}

function PriceCard({ plan }: { plan: Plan }) {
  return (
    <article className={styles["planCard"]}>
      <div className={styles["planCardTop"]}>
        <h3 className={styles["planName"]}>{plan.name}</h3>
        <div className={styles["priceBlock"]}>
          <div className={styles["priceRow"]}>
            <span className={styles["price"]}>{plan.price}</span>
            <span className={styles["cadence"]}>{plan.cadence}</span>
          </div>
          <p className={styles["billing"]}>{plan.billing}</p>
        </div>
        <button className={styles["selectButton"]} type="button">
          Select
        </button>
      </div>

      <p className={styles["includesLabel"]}>Includes:</p>

      <div className={styles["featureList"]}>
        {plan.features.map((feature, index) => (
          <div className={styles["featureRow"]} key={`${plan.name}-${index}`}>
            <FeatureIcon type={feature.icon} />
            <div className={styles["featureContent"]}>{feature.content}</div>
          </div>
        ))}
      </div>
    </article>
  );
}

function TeamPriceCard({ plan }: { plan: Extract<TeamPlanData, { kind: "team" }> }) {
  return (
    <article className={`${styles["planCard"]} ${styles["teamPlanCard"]}`}>
      <div className={styles["planCardTop"]}>
        <div className={styles["teamCardHeader"]}>
          <div className={styles["teamPlanName"]}>
            <span className={styles["teamPlanEyebrow"]}>{plan.nameLines[0]}</span>
            <span className={styles["teamPlanTitle"]}>{plan.nameLines[1]}</span>
          </div>
          <SeatSelector />
        </div>
        <div className={styles["priceBlock"]}>
          <div className={styles["priceRow"]}>
            <span className={styles["price"]}>{plan.price}</span>
            <span className={styles["cadence"]}>{plan.cadence}</span>
          </div>
          <p className={styles["billing"]}>{plan.billing}</p>
        </div>
        <button className={styles["selectButton"]} type="button">
          Select
        </button>
      </div>

      <p className={styles["includesLabel"]}>Includes:</p>

      <div className={styles["featureList"]}>
        {plan.features.map((feature, index) => (
          <div className={styles["featureRow"]} key={`${plan.nameLines.join("-")}-${index}`}>
            <FeatureIcon type={feature.icon} />
            <div className={styles["featureContent"]}>{feature.content}</div>
          </div>
        ))}
      </div>
    </article>
  );
}

function EnterpriseCard({ plan }: { plan: Extract<TeamPlanData, { kind: "enterprise" }> }) {
  return (
    <article className={`${styles["planCard"]} ${styles["teamPlanCard"]} ${styles["enterpriseCard"]}`}>
      <div className={styles["planCardTop"]}>
        <h3 className={styles["planName"]}>{plan.name}</h3>
        <p className={styles["enterpriseDescription"]}>{plan.description}</p>
        <button className={styles["secondaryButton"]} type="button">
          Contact Sales
        </button>
      </div>

      <p className={styles["includesLabel"]}>Includes:</p>

      <div className={styles["featureList"]}>
        {plan.features.map((feature, index) => (
          <div className={styles["featureRow"]} key={`${plan.name}-${index}`}>
            <FeatureIcon type={feature.icon} />
            <div className={styles["featureContent"]}>{feature.content}</div>
          </div>
        ))}
        <a className={styles["enterpriseLearnMore"]} href="/">
          Learn more
        </a>
      </div>
    </article>
  );
}

function MasterCardLogo() {
  return (
    <div className={styles["paymentCard"]}>
      <div className={styles["masterCardIcon"]}>
        <img alt="" aria-hidden="true" src={assets.mastercardLeft} />
        <img alt="" aria-hidden="true" src={assets.mastercardMiddle} />
        <img alt="" aria-hidden="true" src={assets.mastercardRight} />
      </div>
    </div>
  );
}

function PaymentLogo({ src, alt }: { src: string; alt: string }) {
  return (
    <div className={styles["paymentCard"]}>
      <img alt={alt} className={styles["paymentImage"]} src={src} />
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
    return <img alt={logo.alt} className={compact ? styles["compactLogoImage"] : logo.className} src={logo.src} />;
  }

  if (logo.type === "imageText") {
    return (
      <div className={compact ? styles["compactImageText"] : styles["imageTextLogo"]}>
        <img alt="" aria-hidden="true" className={compact ? styles["compactImageTextIcon"] : styles["imageTextIcon"]} src={logo.src} />
        <span>{logo.text}</span>
      </div>
    );
  }

  return (
    <div className={compact ? styles["compactVectorText"] : styles["vectorTextLogo"]}>
      <img alt="" aria-hidden="true" className={compact ? styles["compactVectorIcon"] : styles["vectorIcon"]} src={logo.src} />
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
    <div className={styles["proofRow"]}>
      <div className={styles["proofLabel"]}>
        <img alt="" aria-hidden="true" className={styles["featureIcon"]} src={assets.check} />
        <span>{title}</span>
      </div>

      <div className={styles["proofContent"]}>
        {renderCompactModels ? (
          <div className={styles["compactModels"]}>
            {compactModelLogos.map((logo) => (
              <ModelLogo compact key={`${logo.alt}-${logo.type}`} logo={logo} />
            ))}
          </div>
        ) : (
          <div className={styles["proofItems"]}>
            {items?.map((item) => (
              <div className={styles["proofItem"]} key={item.label}>
                {item.icon && <img alt="" aria-hidden="true" className={styles["proofItemIcon"]} src={item.icon} />}
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export function PricingPage() {
  const [pricingMode, setPricingMode] = useState<PricingMode>("individual");
  const isTeamsMode = pricingMode === "teams";

  return (
    <div className={styles["page"]}>
      <header className={styles["header"]}>
        <div className={styles["topBar"]}>
          <div className={styles["topBarLeft"]}>
            <a className={styles["brand"]} href="/">
              <img alt="Envato" className={styles["brandImage"]} src={envatoLogo} />
            </a>

            <div className={styles["searchBar"]}>
              <div className={styles["searchDropdown"]}>
                <span>All items</span>
                <img alt="" aria-hidden="true" src={assets.dropdownChevron} />
              </div>
              <div className={styles["searchDivider"]} />
              <div className={styles["searchInput"]}>
                <img alt="" aria-hidden="true" src={assets.search} />
                <span>Search</span>
              </div>
            </div>
          </div>

          <div className={styles["topBarActions"]}>
            {topNavItems.map((item) => (
              <a className={styles["headerLink"]} href="/" key={item}>
                {item}
              </a>
            ))}
            <button className={styles["headerCta"]} type="button">
              Get unlimited downloads
            </button>
            <a className={styles["headerLink"]} href="/">
              Sign In
            </a>
          </div>
        </div>

        <div className={styles["bottomBar"]}>
          <div className={styles["bottomNav"]}>
            {bottomNavItems.map((item) => (
              <a className={styles["bottomNavItem"]} href="/" key={item}>
                {item}
              </a>
            ))}
          </div>
          <div className={styles["bottomBarDivider"]} />
          <a className={styles["bottomNavItem"]} href="/">
            Learn
          </a>
        </div>
      </header>

      <main>
        <section className={styles["heroSection"]}>
          <div className={styles["heroContainer"]}>
            <h1 className={styles["heroTitle"]}>Unlimited creativity, all in one place</h1>

            <div className={styles["toggle"]}>
              <button
                aria-pressed={!isTeamsMode}
                className={`${styles["toggleButton"]} ${
                  isTeamsMode ? styles["toggleButtonPlain"] : styles["toggleButtonActive"]
                }`}
                onClick={() => setPricingMode("individual")}
                type="button"
              >
                <IndividualTabIcon />
                <span>Individual</span>
              </button>
              <button
                aria-pressed={isTeamsMode}
                className={`${styles["toggleButton"]} ${
                  isTeamsMode ? styles["toggleButtonActive"] : styles["toggleButtonDefault"]
                }`}
                onClick={() => setPricingMode("teams")}
                type="button"
              >
                <img alt="" aria-hidden="true" src={assets.teamsIcon} />
                <span>Teams &amp; Enterprise</span>
              </button>
            </div>

            {isTeamsMode ? (
              <div className={styles["teamPlanGrid"]}>
                {teamPlans.map((plan) =>
                  plan.kind === "enterprise" ? (
                    <EnterpriseCard key={plan.name} plan={plan} />
                  ) : (
                    <TeamPriceCard key={plan.nameLines.join("-")} plan={plan} />
                  ),
                )}
              </div>
            ) : (
              <div className={styles["planGrid"]}>
                {individualPlans.map((plan) => (
                  <PriceCard key={plan.name} plan={plan} />
                ))}
              </div>
            )}

            <p className={styles["pricingDisclaimer"]}>
              Price in US Dollars, excludes local tax. Subject to <a href="/">Envato&apos;s User Terms</a>; including our{" "}
              <a href="/">Fair Use Policy</a>.
            </p>

            <div className={styles["modelsBlock"]}>
              <h2 className={styles["sectionTitle"]}>Powered by leading AI models</h2>
              <div className={styles["logoRowPrimary"]}>
                {primaryModelLogos.map((logo) => (
                  <ModelLogo key={`${logo.alt}-${logo.type}`} logo={logo} />
                ))}
              </div>
              <div className={styles["logoRowSecondary"]}>
                {secondaryModelLogos.map((logo) => (
                  <ModelLogo key={`${logo.alt}-${logo.type}`} logo={logo} />
                ))}
              </div>
            </div>

            {!isTeamsMode && (
              <div className={styles["studentBanner"]}>
                <p>Students save 30% on the Core Plan.</p>
                <a href="/">Learn more</a>
              </div>
            )}
          </div>
        </section>

        <section className={styles["detailsSection"]}>
          <div className={styles["detailsContainer"]}>
            <div className={styles["introBlock"]}>
              <h2 className={styles["heroTitle"]}>Loved by millions of creative pros globally</h2>
              <p className={styles["introSubtitle"]}>From independent freelancers to the world&apos;s biggest brands</p>
            </div>

            <div className={styles["proofStack"]}>
              {proofRows.map((row) => (
                <ProofRow items={row.items} key={row.title} title={row.title} />
              ))}
              <ProofRow renderCompactModels title="Powered by leading AI models" />
            </div>

            <div className={styles["paymentSection"]}>
              <h3 className={styles["sectionTitleSmall"]}>Easy and secure payment</h3>
              <div className={styles["paymentColumns"]}>
                <div className={styles["paymentColumn"]}>
                  <div className={styles["paymentHeading"]}>Trusted payment methods</div>
                  <div className={styles["paymentLogos"]}>
                    <PaymentLogo alt="Visa" src={assets.visa} />
                    <MasterCardLogo />
                    <PaymentLogo alt="PayPal" src={assets.paypal} />
                    <PaymentLogo alt="American Express" src={assets.amex} />
                    <PaymentLogo alt="Apple Pay" src={assets.applePay} />
                  </div>
                </div>
                <div className={styles["paymentColumn"]}>
                  <div className={styles["paymentHeading"]}>Secure payments</div>
                  <p className={styles["paymentCopy"]}>Processed in a Level 1 PCI compliant environment.</p>
                </div>
              </div>
            </div>

            <div className={styles["faqSection"]}>
              <div className={styles["faqTitle"]}>Still have Qs?</div>
              <div className={styles["faqList"]}>
                {faqItems.map((item) => (
                  <button className={styles["faqItem"]} key={item} type="button">
                    <span>{item}</span>
                    <img alt="" aria-hidden="true" className={styles["faqChevron"]} src={assets.dropdownChevron} />
                  </button>
                ))}
              </div>
            </div>

            <p className={styles["legalNote"]}>
              All logos are owned by their respective owners and are used for informational purposes only. No affiliation or endorsement is implied.
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}
