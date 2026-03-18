import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

import styles from "./AIToolsLandingPage.module.scss";
import {
  AI_VIDEO_STEPS,
  AI_VIDEO_STEPS_IMAGE,
  AI_VIDEO_STEPS_SUBTITLE,
  AI_VIDEO_STEPS_TITLE,
  CATEGORY_CARDS,
  FAQ_ITEMS,
  FAQ_TITLE,
  FEATURES,
  FEATURE_CHECK_ICON,
  FOOTER_COPY,
  FOOTER_LINKS,
  HEADER_LOGO,
  HEADER_PRIMARY_LINKS,
  HEADER_SECONDARY_LINKS,
  HERO_ASSETS,
  HERO_INTERACTIVE_CARDS,
  HERO_ROTATING_PROMPTS,
  HERO_SCENE_ASSETS,
  HERO_TOOL_ITEMS,
  MODEL_LOGOS,
  PRICING_ASSETS,
  PRICING_MODELS_TITLE,
  PRICING_MODEL_ROWS,
  PRICING_PLANS,
  PRICING_SECTION_TITLE,
  PRICING_STUDENT_LINK_LABEL,
  PRICING_STUDENT_NOTE,
  PROOF_CARDS,
  WHY_CTA_LABEL,
} from "./AIToolsLandingPage.data.ts";

const PRICING_SELECT_URL =
  "https://elements.envato.com/subscribe/create-account?renewalInterval=year&tier=tier1&planGroup=standard";

function HeaderLinks({ items }: { items: Array<{ label: string; href: string }> }) {
  return (
    <>
      {items.map((item) => (
        <a key={item.label} className={styles.headerLink} href={item.href}>
          {item.label}
        </a>
      ))}
    </>
  );
}

function HeaderPrimaryLinks({
  items,
}: {
  items: Array<{ label: string; href: string; hasChevron?: boolean }>;
}) {
  return (
    <>
      {items.map((item) => (
        <a key={item.label} className={styles.headerPrimaryLink} href={item.href}>
          <span>{item.label}</span>
          {item.hasChevron && (
            <span className={styles.headerPrimaryChevron} aria-hidden="true">
              <img alt="" src={HEADER_LOGO.chevron} />
            </span>
          )}
        </a>
      ))}
    </>
  );
}

function HeroVideoIcon() {
  return (
    <div className={styles.toolIconVideo}>
      <img
        alt=""
        aria-hidden="true"
        className={styles.toolIconVideoStroke}
        src={HERO_ASSETS.videoStroke}
      />
      <img
        alt=""
        aria-hidden="true"
        className={styles.toolIconVideoMain}
        src={HERO_ASSETS.videoMainContent}
      />
      {HERO_ASSETS.videoTopIcons.map((src, index) => (
        <img
          key={src}
          alt=""
          aria-hidden="true"
          className={clsx(styles.toolIconVideoSpark, styles[`toolIconVideoSpark${index + 1}`])}
          src={src}
        />
      ))}
    </div>
  );
}

function HeroAssetIcon({ label, src }: { label: string; src: string }) {
  return (
    <span
      className={clsx(
        styles.heroToolAssetIcon,
        label === "Voice" && styles.heroToolAssetIconVoice,
        label === "Graphics" && styles.heroToolAssetIconGraphics,
      )}
    >
      <img alt="" aria-hidden="true" className={styles.heroToolIcon} src={src} />
    </span>
  );
}

function ModelLogo({
  item,
}: {
  item: (typeof MODEL_LOGOS)[number];
}) {
  if (item.kind === "image") {
    return (
      <img
        alt={item.label}
        className={styles.modelLogoImage}
        height={item.height}
        src={item.src}
        style={{ width: `${item.width}px`, height: `${item.height}px` }}
        width={item.width}
      />
    );
  }

  if (item.kind === "text-with-icon") {
    return (
      <span className={styles.modelLogoTextWithIcon}>
        <img
          alt=""
          aria-hidden="true"
          className={styles.modelLogoInlineIcon}
          height={item.height}
          src={item.src}
          width={item.width}
        />
        <span>{item.label}</span>
      </span>
    );
  }

  return <span className={styles.modelLogoText}>{item.label}</span>;
}

function CategoryCard({
  title,
  image,
}: {
  title: string;
  image: string;
}) {
  return (
    <article className={styles.categoryCard}>
      <div className={styles.categoryImageFrame}>
        <img alt="" aria-hidden="true" className={styles.categoryImage} src={image} />
      </div>
      <span className={styles.categoryTitle}>{title}</span>
    </article>
  );
}

function HeroInteractiveCard({
  card,
  progress,
  onSelectPrompt,
}: {
  card: (typeof HERO_INTERACTIVE_CARDS)[number];
  progress: number;
  onSelectPrompt: (prompt: string) => void;
}) {
  const isActionable = Boolean(card.promptText);
  const CardTag = isActionable ? "button" : "div";

  return (
    <CardTag
      {...(isActionable
        ? {
            type: "button" as const,
            onClick: () => onSelectPrompt(card.promptText!),
            "aria-label": `Use prompt from ${card.id.replaceAll("-", " ")}`,
          }
        : {})}
      className={clsx(
        styles.heroInteractiveCard,
        isActionable && styles.heroInteractiveCardActionable,
        card.ctaLabel && styles.heroInteractiveCardLarge,
      )}
      style={{
        left: `${card.left}px`,
        top: `${card.top}px`,
        width: `${card.width}px`,
        height: `${card.height}px`,
        opacity: 1 - progress * 0.16,
        transform: `translate3d(${card.parallaxX * progress}px, ${card.parallaxY * progress}px, 0) scale(${1 - progress * 0.035})`,
        zIndex: card.zIndex,
      }}
    >
      <div className={styles.heroInteractiveCardSurface}>
        {card.mediaSrc ? (
          <img
            alt=""
            aria-hidden="true"
            className={styles.heroInteractiveCardMedia}
            src={card.mediaSrc}
          />
        ) : null}
      </div>
      <span className={styles.heroInteractiveCardCta}>
        <img alt="" aria-hidden="true" src={HERO_SCENE_ASSETS.promptSpark} />
        <span>{card.ctaLabel ?? "Get prompt"}</span>
      </span>
    </CardTag>
  );
}

function PricingFeatureItem({
  feature,
}: {
  feature: (typeof PRICING_PLANS)[number]["features"][number];
}) {
  return (
    <div className={styles.pricingFeature}>
      <img
        alt=""
        aria-hidden="true"
        className={styles.pricingFeatureIcon}
        src={feature.icon === "check" ? PRICING_ASSETS.checkCircle : PRICING_ASSETS.aiLabs}
      />
      <div className={styles.pricingFeatureCopy}>
        <div className={styles.pricingFeatureLine}>
          {feature.badge && <span className={styles.pricingFeatureBadge}>{feature.badge}</span>}
          <span className={styles.pricingFeatureEmphasis}>{feature.emphasis}</span>
          {feature.trailing && <span className={styles.pricingFeatureTrailing}>{feature.trailing}</span>}
        </div>
        {feature.bulletLines && (
          <ul className={styles.pricingFeatureList}>
            {feature.bulletLines.map((line) => (
              <li key={line}>{line}</li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function PricingPlanCard({ plan }: { plan: (typeof PRICING_PLANS)[number] }) {
  return (
    <article className={styles.pricingCard}>
      <div className={styles.pricingCardInner}>
        <div className={styles.pricingCardTop}>
          <h3 className={styles.pricingCardTitle}>{plan.name}</h3>

          <div className={styles.pricingPriceRow}>
            <span className={styles.pricingPrice}>{plan.price}</span>
            <span className={styles.pricingPriceSuffix}>{plan.monthlySuffix}</span>
          </div>

          <p className={styles.pricingBillingNote}>
            <span>{plan.annualLine}</span>
            <span>{plan.monthlyLine}</span>
          </p>

          <a className={styles.pricingSelectButton} href={PRICING_SELECT_URL}>
            Select
          </a>

          <p className={styles.pricingIncludesLabel}>Includes:</p>
        </div>

        <div className={styles.pricingFeatures}>
          {plan.features.map((feature) => (
            <PricingFeatureItem key={`${plan.name}-${feature.emphasis}`} feature={feature} />
          ))}
        </div>
      </div>
    </article>
  );
}

function PricingModelLogo({ item }: { item: (typeof PRICING_MODEL_ROWS)[number][number] }) {
  if (item.kind === "image" && item.src) {
    return (
      <img
        alt={item.label}
        className={styles.pricingModelImage}
        height={item.height}
        src={item.src}
        style={{ width: `${item.width}px`, height: `${item.height}px` }}
        width={item.width}
      />
    );
  }

  return (
    <div className={styles.pricingModelLabel} style={{ width: `${item.width}px`, height: `${item.height}px` }}>
      {item.src && item.iconWidth && item.iconHeight ? (
        <img
          alt=""
          aria-hidden="true"
          className={styles.pricingModelLabelIcon}
          height={item.iconHeight}
          src={item.src}
          style={{ width: `${item.iconWidth}px`, height: `${item.iconHeight}px` }}
          width={item.iconWidth}
        />
      ) : null}
      <span style={item.fontSize ? { fontSize: `${item.fontSize}px` } : undefined}>{item.label}</span>
    </div>
  );
}

export function AIToolsLandingPage() {
  const [expandedFaqIndex, setExpandedFaqIndex] = useState<number | null>(null);
  const [autoPromptValue, setAutoPromptValue] = useState("");
  const [promptAnimationPhase, setPromptAnimationPhase] = useState<"typing" | "holding" | "clearing">("typing");
  const [promptIndex, setPromptIndex] = useState(0);
  const [hasPromptOverride, setHasPromptOverride] = useState(false);
  const [isPromptFocused, setIsPromptFocused] = useState(false);
  const [promptInputValue, setPromptInputValue] = useState("");
  const [heroTransitionProgress, setHeroTransitionProgress] = useState(0);
  const promptInputRef = useRef<HTMLInputElement>(null);
  const heroSectionRef = useRef<HTMLElement>(null);
  const modelsSectionRef = useRef<HTMLElement>(null);

  const categoryColumns = [
    [CATEGORY_CARDS[0], CATEGORY_CARDS[5]],
    [CATEGORY_CARDS[1], CATEGORY_CARDS[6]],
    [CATEGORY_CARDS[2], CATEGORY_CARDS[7]],
    [CATEGORY_CARDS[3], CATEGORY_CARDS[8]],
    [CATEGORY_CARDS[4], CATEGORY_CARDS[9]],
  ];
  const heroTransitionEase =
    heroTransitionProgress * heroTransitionProgress * (3 - 2 * heroTransitionProgress);
  const whyEntranceProgress = Math.max(0, Math.min(1, (heroTransitionEase - 0.36) / 0.64));

  useEffect(() => {
    if (hasPromptOverride) {
      return;
    }

    const currentPrompt = HERO_ROTATING_PROMPTS[promptIndex];
    let timeoutId: ReturnType<typeof setTimeout>;

    if (promptAnimationPhase === "typing") {
      if (autoPromptValue.length < currentPrompt.length) {
        timeoutId = setTimeout(() => {
          setAutoPromptValue(currentPrompt.slice(0, autoPromptValue.length + 1));
        }, 32);
      } else {
        timeoutId = setTimeout(() => {
          setPromptAnimationPhase("holding");
        }, 1600);
      }
    } else if (promptAnimationPhase === "holding") {
      timeoutId = setTimeout(() => {
        setPromptAnimationPhase("clearing");
      }, 1100);
    } else if (autoPromptValue.length > 0) {
      timeoutId = setTimeout(() => {
        setAutoPromptValue(currentPrompt.slice(0, autoPromptValue.length - 1));
      }, 16);
    } else {
      timeoutId = setTimeout(() => {
        setPromptIndex((current) => (current + 1) % HERO_ROTATING_PROMPTS.length);
        setPromptAnimationPhase("typing");
      }, 240);
    }

    return () => clearTimeout(timeoutId);
  }, [autoPromptValue, hasPromptOverride, promptAnimationPhase, promptIndex]);

  useEffect(() => {
    let rafId = 0;

    const updateProgress = () => {
      rafId = 0;

      if (!heroSectionRef.current || !modelsSectionRef.current) {
        return;
      }

      const viewportHeight = window.innerHeight;
      const modelsRect = modelsSectionRef.current.getBoundingClientRect();
      const start = viewportHeight * 0.96;
      const end = viewportHeight * 0.26;
      const rawProgress = (start - modelsRect.top) / (start - end);
      const nextProgress = Math.max(0, Math.min(1, rawProgress));

      setHeroTransitionProgress((current) =>
        Math.abs(current - nextProgress) < 0.003 ? current : nextProgress,
      );
    };

    const requestUpdate = () => {
      if (rafId !== 0) {
        return;
      }

      rafId = window.requestAnimationFrame(updateProgress);
    };

    requestUpdate();
    window.addEventListener("scroll", requestUpdate, { passive: true });
    window.addEventListener("resize", requestUpdate);

    return () => {
      if (rafId !== 0) {
        window.cancelAnimationFrame(rafId);
      }

      window.removeEventListener("scroll", requestUpdate);
      window.removeEventListener("resize", requestUpdate);
    };
  }, []);

  const handlePromptFocus = () => {
    setIsPromptFocused(true);

    requestAnimationFrame(() => {
      promptInputRef.current?.focus();
      promptInputRef.current?.setSelectionRange(0, 0);
    });
  };

  const handlePromptBlur = () => {
    setIsPromptFocused(false);

    if (promptInputValue.trim() !== "") {
      return;
    }

    setHasPromptOverride(false);
    setPromptInputValue("");
  };

  const handleHeroCardPromptSelect = (prompt: string) => {
    setHasPromptOverride(true);
    setPromptInputValue(prompt);
    setIsPromptFocused(true);

    if (navigator.clipboard?.writeText) {
      void navigator.clipboard.writeText(prompt).catch(() => {});
    }

    requestAnimationFrame(() => {
      promptInputRef.current?.focus();
      promptInputRef.current?.setSelectionRange(prompt.length, prompt.length);
    });
  };

  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.header} data-node-id="52:6191">
          <div className={styles.headerLeft}>
            <a className={styles.logo} href="#">
              <img
                alt="Envato"
                className={styles.logoMark}
                height={24}
                src={HEADER_LOGO.mark}
                width={24}
              />
              <img
                alt=""
                aria-hidden="true"
                className={styles.logoWordmark}
                height={18}
                src={HEADER_LOGO.logotype}
                width={84}
              />
            </a>

            <nav aria-label="Primary" className={styles.headerNav}>
              <HeaderPrimaryLinks items={HEADER_PRIMARY_LINKS} />
            </nav>
          </div>

          <div className={styles.headerRight}>
            <nav aria-label="Secondary" className={styles.headerNavSecondary}>
              <HeaderLinks items={HEADER_SECONDARY_LINKS} />
            </nav>
            <a className={styles.headerCta} href="#">
              Get unlimited downloads
            </a>
            <button aria-label="Account" className={styles.accountButton} type="button">
              <img alt="" aria-hidden="true" height={24} src={HEADER_LOGO.userIcon} width={24} />
            </button>
          </div>
        </header>

        <main className={styles.main}>
          <section className={styles.heroSection} data-node-id="52:6225" ref={heroSectionRef}>
            <div className={styles.heroScene} style={{ opacity: 1 - heroTransitionProgress * 0.08 }}>
              <div
                className={styles.heroSceneGlow}
                aria-hidden="true"
                style={{
                  opacity: 1 - heroTransitionProgress * 0.22,
                  transform: `translate3d(${heroTransitionProgress * 54}px, ${heroTransitionProgress * 18}px, 0) scale(${1 + heroTransitionProgress * 0.06})`,
                }}
              />
              {HERO_INTERACTIVE_CARDS.map((card) => (
                <HeroInteractiveCard
                  key={card.id}
                  card={card}
                  onSelectPrompt={handleHeroCardPromptSelect}
                  progress={heroTransitionProgress}
                />
              ))}
            </div>

            <div
              className={styles.heroForeground}
              style={{
                opacity: 1 - heroTransitionProgress * 0.12,
                transform: `translate3d(0, ${heroTransitionProgress * -28}px, 0)`,
              }}
            >
              <h1 className={styles.heroTitle}>
                <span className={styles.heroTitleAccent}>Create anything</span>
                <span>
                  in minutes with AI
                </span>
              </h1>

              <p className={styles.heroSubtitle}>
                From idea to video in seconds. Write a prompt, upload an image from your
                gallery or create.
              </p>

              <div className={styles.promptShell}>
                <div className={styles.promptInputRow} onClick={handlePromptFocus} role="presentation">
                  {!hasPromptOverride ? (
                    <span className={styles.promptInputOverlay} aria-hidden="true">
                      {autoPromptValue}
                    </span>
                  ) : null}
                  <input
                    ref={promptInputRef}
                    aria-label="Prompt"
                    className={clsx(
                      styles.promptInput,
                      !hasPromptOverride && styles.promptInputPreview,
                    )}
                    onBlur={handlePromptBlur}
                    onChange={(event) => {
                      if (!hasPromptOverride) {
                        setHasPromptOverride(true);
                      }

                      setPromptInputValue(event.target.value);
                    }}
                    onFocus={handlePromptFocus}
                    type="text"
                    value={hasPromptOverride ? promptInputValue : ""}
                  />
                  {isPromptFocused && !hasPromptOverride ? (
                    <span className={styles.promptCursor} aria-hidden="true" />
                  ) : null}
                </div>

                <div className={styles.promptActionRow}>
                  <div className={styles.promptLeft}>
                    <button aria-label="Upload reference image" className={styles.iconChip} type="button">
                      <span className={styles.addImageIcon}>
                        <img
                          alt=""
                          aria-hidden="true"
                          className={styles.addImageIconPrimary}
                          src={HERO_ASSETS.addImagePrimary}
                        />
                        <img
                          alt=""
                          aria-hidden="true"
                          className={styles.addImageIconSecondary}
                          src={HERO_ASSETS.addImageSecondary}
                        />
                      </span>
                    </button>

                    <button className={styles.styleChip} type="button">
                      <span className={styles.styleChipThumb}>
                        <img
                          alt=""
                          aria-hidden="true"
                          className={styles.styleChipThumbImage}
                          src={HERO_ASSETS.styleThumbnail}
                        />
                        <img
                          alt=""
                          aria-hidden="true"
                          className={styles.styleChipThumbIcon}
                          src={HERO_ASSETS.styleIcon}
                        />
                      </span>
                      <span className={styles.styleChipLabel}>Auto style</span>
                      <img alt="" aria-hidden="true" className={styles.chipCaret} src={HERO_ASSETS.styleChevron} />
                    </button>

                    <button className={styles.promptChip} type="button">
                      <img alt="" aria-hidden="true" className={styles.promptChipIcon} src={HERO_ASSETS.aspectIcon} />
                      <span>1:1</span>
                      <img alt="" aria-hidden="true" className={styles.chipCaret} src={HERO_ASSETS.chipChevron} />
                    </button>

                    <button className={styles.promptChip} type="button">
                      <img alt="" aria-hidden="true" className={styles.promptChipIcon} src={HERO_ASSETS.variationsIcon} />
                      <span>6 variations</span>
                      <img alt="" aria-hidden="true" className={styles.chipCaret} src={HERO_ASSETS.chipChevron} />
                    </button>
                  </div>

                  <div className={styles.promptRight}>
                    <button aria-label="Enhance prompt" className={styles.wandButton} type="button">
                      <img alt="" aria-hidden="true" height={16} src={HERO_ASSETS.wandIcon} width={16} />
                    </button>

                    <a
                      className={styles.generateButton}
                      href="https://elements.envato.com/subscribe/create-account?renewalInterval=year&tier=tier1&planGroup=standard"
                    >
                      <span>Generate</span>
                      <img
                        alt=""
                        aria-hidden="true"
                        className={styles.generateButtonIcon}
                        height={16}
                        src={HERO_ASSETS.generateArrow}
                        width={16}
                      />
                    </a>
                  </div>
                </div>
              </div>

              <div className={styles.heroTools} data-node-id="52:6276">
                {HERO_TOOL_ITEMS.map((tool) => (
                  <button key={tool.label} className={styles.heroToolButton} type="button">
                    <span className={styles.heroToolIconWrap}>
                      {tool.kind === "video" ? (
                        <HeroVideoIcon />
                      ) : (
                        <HeroAssetIcon label={tool.label} src={tool.src} />
                      )}
                    </span>
                    <span className={styles.heroToolLabel}>{tool.label}</span>
                  </button>
                ))}
              </div>
            </div>
          </section>

          <section
            className={styles.modelsSection}
            data-node-id="52:6332"
            ref={modelsSectionRef}
          >
            <p className={styles.modelsTitle}>
              We use the best models and match them to your prompt
            </p>
            <div className={styles.modelsRow}>
              {MODEL_LOGOS.map((item) => (
                <ModelLogo key={`${item.kind}-${item.label}`} item={item} />
              ))}
            </div>
          </section>

          <section
            className={styles.whySection}
            data-node-id="52:6348"
            style={{
              opacity: 0.12 + whyEntranceProgress * 0.88,
              transform: `translate3d(0, ${(1 - whyEntranceProgress) * 150}px, 0)`,
            }}
          >
            <h2 className={styles.sectionTitle}>
              <span>Why creators choose </span>
              <span className={styles.sectionTitleAccent}>Envato?</span>
            </h2>

            <a className={styles.sectionCta} href="#">
              {WHY_CTA_LABEL}
            </a>

            <div className={styles.proofCards}>
              {PROOF_CARDS.map((card) => (
                <article
                  key={`${card.title}-${card.topOffset}`}
                  className={styles.proofCard}
                  style={{
                    height: `${card.height}px`,
                    marginTop: `${card.topOffset}px`,
                  }}
                >
                  <div className={styles.proofCardVisual} />
                  <div className={styles.proofCardOverlay} />
                  <div className={styles.proofCardContent}>
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className={styles.stepsSection} data-node-id="29:19501">
            <div className={styles.stepsHeader}>
              <div className={styles.stepsHeaderCopy}>
                <h2 className={styles.stepsTitle}>{AI_VIDEO_STEPS_TITLE}</h2>
                <p className={styles.stepsSubtitle}>{AI_VIDEO_STEPS_SUBTITLE}</p>
              </div>

              <a className={clsx(styles.sectionCta, styles.stepsCta)} href="#">
                {WHY_CTA_LABEL}
              </a>
            </div>

            <div className={styles.stepsVisualCard}>
              <img
                alt=""
                aria-hidden="true"
                className={styles.stepsVisualImage}
                src={AI_VIDEO_STEPS_IMAGE}
              />
              <div className={styles.stepsVisualOverlay} />

              <div className={styles.stepsItems}>
                {AI_VIDEO_STEPS.map((step) => (
                  <article key={step.title} className={styles.stepItem}>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.featuresSection} data-node-id="52:6442">
            <h2 className={styles.sectionTitleLarge}>
              <span>Access powerful AI tools plus</span>
              <span className={styles.sectionTitleAccent}>millions of creative assets</span>
            </h2>

            <div className={styles.featureRow}>
              {FEATURES.map((feature) => (
                <article key={feature.title} className={styles.featureCard}>
                  <span className={styles.featureIconWrap} aria-hidden="true">
                    <img className={styles.featureIcon} height={32} src={FEATURE_CHECK_ICON} width={32} />
                  </span>
                  <div className={styles.featureContent}>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                </article>
              ))}
            </div>

            <div className={styles.categoryGrid} data-node-id="52:6463">
              {categoryColumns.map((column, columnIndex) => (
                <div
                  key={`column-${columnIndex + 1}`}
                  className={clsx(
                    styles.categoryColumn,
                    columnIndex % 2 === 1 && styles.categoryColumnStagger,
                  )}
                >
                  {column.map((card) => (
                    <CategoryCard key={card.title} image={card.image} title={card.title} />
                  ))}
                </div>
              ))}
            </div>
          </section>

          <section className={styles.pricingSection} data-node-id="6932:55346">
            <div className={styles.pricingHeader}>
              <h2 className={styles.pricingTitle}>{PRICING_SECTION_TITLE}</h2>

              <div className={styles.pricingToggle} data-node-id="6932:55453">
                <button className={clsx(styles.pricingToggleButton, styles.pricingToggleButtonActive)} type="button">
                  <img alt="" aria-hidden="true" className={styles.pricingToggleUserIcon} src={PRICING_ASSETS.toggleUser} />
                  <span>Individual</span>
                </button>

                <button className={styles.pricingToggleButton} type="button">
                  <img alt="" aria-hidden="true" className={styles.pricingToggleTeamsIcon} src={PRICING_ASSETS.toggleTeams} />
                  <span>Teams &amp; Enterprise</span>
                </button>
              </div>
            </div>

            <div className={styles.pricingCards}>
              {PRICING_PLANS.map((plan) => (
                <PricingPlanCard key={plan.name} plan={plan} />
              ))}
            </div>

            <p className={styles.pricingNote}>
              <span>Price in US Dollars, excludes local tax. Subject to </span>
              <a href="#">Envato&apos;s User Terms</a>
              <span>; including our </span>
              <a href="#">Fair Use Policy</a>
              <span>.</span>
            </p>

            <div className={styles.pricingModels}>
              <h3 className={styles.pricingModelsTitle}>{PRICING_MODELS_TITLE}</h3>
              {PRICING_MODEL_ROWS.map((row, index) => (
                <div
                  key={`pricing-row-${index + 1}`}
                  className={styles.pricingModelsRow}
                  style={{ width: index === 0 ? "817px" : "714px" }}
                >
                  {row.map((item) => (
                    <PricingModelLogo key={`${item.label}-${index + 1}`} item={item} />
                  ))}
                </div>
              ))}
            </div>

            <div className={styles.pricingStudentBanner}>
              <p>{PRICING_STUDENT_NOTE}</p>
              <a href="#">{PRICING_STUDENT_LINK_LABEL}</a>
            </div>
          </section>

          <section className={styles.faqSection} data-node-id="52:6480">
            <h2 className={styles.faqTitle}>{FAQ_TITLE}</h2>

            <div className={styles.faqList} data-node-id="52:6481">
              {FAQ_ITEMS.map((item, index) => {
                const isOpen = expandedFaqIndex === index;

                return (
                  <div key={item.question} className={styles.faqItem}>
                    <button
                      aria-expanded={isOpen}
                      className={styles.faqQuestion}
                      onClick={() =>
                        setExpandedFaqIndex((current) => (current === index ? null : index))
                      }
                      type="button"
                    >
                      <span className={styles.faqQuestionLabel}>{item.question}</span>
                      <span className={clsx(styles.faqChevron, isOpen && styles.faqChevronOpen)}>
                        <svg
                          aria-hidden="true"
                          fill="none"
                          height="24"
                          viewBox="0 0 24 24"
                          width="24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M7 10L12 15L17 10"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.75"
                          />
                        </svg>
                      </span>
                    </button>
                    {isOpen && <p className={styles.faqAnswer}>{item.answer}</p>}
                  </div>
                );
              })}
            </div>
          </section>

          <section className={styles.footerSection} data-node-id="52:6395">
            <div className={styles.footerBanner}>
              <h2 className={styles.footerBannerTitle}>
                <span className={styles.sectionTitleAccent}>Create anything with AI.</span>
                <span>Get unlimited creative assets.</span>
                <span>All for one subscription.</span>
              </h2>

              <a className={styles.sectionCta} href="#">
                Start creating
              </a>
            </div>

            <footer className={styles.footerNav} data-node-id="52:6403">
              <div className={styles.footerLinks}>
                {FOOTER_LINKS.map((link, index) => (
                  <span key={link} className={styles.footerLinkWrap}>
                    {index > 0 && <span className={styles.footerDivider} aria-hidden="true" />}
                    <a className={styles.footerLink} href="#">
                      {link}
                    </a>
                  </span>
                ))}
              </div>
              <p className={styles.footerCopy}>{FOOTER_COPY}</p>
            </footer>
          </section>
        </main>
      </div>
    </div>
  );
}

export default AIToolsLandingPage;
