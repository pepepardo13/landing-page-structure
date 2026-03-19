import type { CSSProperties } from "react";

import clsx from "clsx";

import { HERO_ASSETS, MODEL_LOGOS } from "./AIToolsLandingPage.data";
import aiToolsStyles from "./AIToolsLandingPage.module.scss";
import styles from "./LandingPageStructureV2.module.scss";
import {
  ASSET_CATEGORIES,
  CTA_URL,
  FEATURE_ICON_ASSETS,
  FEATURE_ITEMS,
  FOOTER_ASSET,
  FOOTER_COPY,
  FOOTER_LINKS,
  HEADER_LOGO,
  HEADER_PRIMARY_LINKS,
  HEADER_SECONDARY_LINKS,
  HERO_DECORATION_ASSETS,
  MODE_TOGGLE_ASSETS,
  PAGE_COPY,
  SHOWCASE_CARDS,
  START_USING_ASSET,
  START_USING_STEPS,
  TOOL_TILES,
  TOOL_TILE_ASSETS,
  TOOLS_SECTION,
  FAQ_ITEMS,
} from "./LandingPageStructureV2.data";

const altAssetUrls = import.meta.glob("./assets/landing-page-structure-v2/*", {
  eager: true,
  import: "default",
}) as Record<string, string>;

function altHeroAsset(name: string) {
  return altAssetUrls[`./assets/landing-page-structure-v2/${name}`];
}

const ALT_PAGE_COPY = {
  heroTitle: "VideoGen",
  heroSubtitle: "From idea to video in seconds. Write a prompt, upload an image from your gallery or create.",
  modelsLabel: "We use the best models and match them to your prompt",
};

const ALT_MODE_TOGGLE_ITEMS = [
  { id: "imagegen", label: "ImageGen", icon: "image" as const },
  { id: "imageedit", label: "ImageEdit", icon: "edit" as const },
  { id: "videogen", label: "VideoGen", icon: "video" as const, active: true },
  { id: "musicgen", label: "MusicGen", icon: "music" as const },
  { id: "graphicgen", label: "GraphicGen", icon: "graphic" as const },
];

const ALT_HERO_PREVIEW_CARDS = [
  {
    id: "far-left",
    src: altHeroAsset("img05SlimeCoversTheWholeHydrant1.jpg"),
    left: -289,
    top: 250.44,
    width: 133.808,
    height: 237.205,
    rotate: -35.09,
    muted: true,
  },
  {
    id: "left-wide",
    src: altHeroAsset("img03PanRightVerySlowly1.jpg"),
    left: 0,
    top: 125.44,
    width: 237.205,
    height: 133.808,
    rotate: -21.29,
    muted: true,
  },
  {
    id: "left-portrait",
    src: altHeroAsset("img01ThePlushDoesAVictoriousGrowlAndWa1.jpg"),
    left: 339.835,
    top: 8.58,
    width: 133.808,
    height: 237.205,
    rotate: -11.13,
    muted: true,
  },
  {
    id: "center",
    src: altHeroAsset("img06HeSlowlyLooksUpAndDownSubtleMove1.jpg"),
    left: 634,
    top: 39.44,
    width: 243.288,
    height: 136.849,
    rotate: 0,
    highlighted: true,
  },
  {
    id: "center-right",
    src: altHeroAsset("img04PromptDetailsBasePrompt1.jpg"),
    left: 976.027,
    top: 0,
    width: 137.76,
    height: 247.968,
    rotate: 12.58,
    muted: true,
  },
  {
    id: "right-portrait",
    src: altHeroAsset("img10ASafeForWorkClipOfTheBallerinaW1.jpg"),
    left: 1278,
    top: 93.44,
    width: 136.849,
    height: 243.288,
    rotate: 22.69,
    muted: true,
  },
  {
    id: "far-right",
    src: altHeroAsset("img08KnightScansTheBaguetteOneTimeAndT1.jpg"),
    left: 1596.458,
    top: 287.44,
    width: 243.288,
    height: 136.849,
    rotate: 34.47,
    muted: true,
  },
];

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

function VideoGenMiniIcon({ variant }: { variant: "video" | "music" | "voice" | "graphic" }) {
  const sparks =
    variant === "video"
      ? MODE_TOGGLE_ASSETS.videoIcons
      : variant === "voice"
        ? MODE_TOGGLE_ASSETS.voiceIcons
        : [MODE_TOGGLE_ASSETS.videoIcons[3], MODE_TOGGLE_ASSETS.videoIcons[0], MODE_TOGGLE_ASSETS.musicIcons[0], MODE_TOGGLE_ASSETS.videoIcons[2]];

  return (
    <span className={styles.videoGenMiniIcon} aria-hidden="true">
      <span className={styles.videoGenMiniBar}>
        <img alt="" className={styles.mediaFill} src={MODE_TOGGLE_ASSETS.videoBar} />
      </span>
      <span className={styles.videoGenMiniMain}>
        <img alt="" className={styles.mediaFill} src={MODE_TOGGLE_ASSETS.videoMain} />
      </span>
      {sparks.map((src, index) => (
        <span
          key={`${variant}-${src}`}
          className={clsx(styles.videoGenMiniSpark, styles[`videoGenMiniSpark${index + 1}`])}
        >
          <img alt="" className={styles.mediaFill} src={src} />
        </span>
      ))}
    </span>
  );
}

function AltModeToggleIcon({ icon }: { icon: (typeof ALT_MODE_TOGGLE_ITEMS)[number]["icon"] }) {
  const staticIconClassName = styles.modeToggleStaticIcon;

  if (icon === "image") {
    return <img alt="" aria-hidden="true" className={staticIconClassName} src={MODE_TOGGLE_ASSETS.image} />;
  }

  if (icon === "edit") {
    return <img alt="" aria-hidden="true" className={staticIconClassName} src={MODE_TOGGLE_ASSETS.edit} />;
  }

  return <VideoGenMiniIcon variant={icon} />;
}

function BrandGlyph() {
  return (
    <div className={styles.brandGlyph} aria-hidden="true">
      <img alt="" className={styles.brandGlyphFlattened} src={HERO_DECORATION_ASSETS.flattened} />
    </div>
  );
}

function AltModelLogo({
  item,
}: {
  item: (typeof MODEL_LOGOS)[number];
}) {
  if (item.kind === "image") {
    return (
      <img
        alt={item.label}
        className={aiToolsStyles.modelLogoImage}
        height={item.height}
        src={item.src}
        style={{ width: `${item.width}px`, height: `${item.height}px` }}
        width={item.width}
      />
    );
  }

  if (item.kind === "text-with-icon") {
    return (
      <span className={aiToolsStyles.modelLogoTextWithIcon}>
        <img alt="" aria-hidden="true" className={aiToolsStyles.modelLogoInlineIcon} src={item.src} />
        <span>{item.label}</span>
      </span>
    );
  }

  return <span className={aiToolsStyles.modelLogoText}>{item.label}</span>;
}

function AltHeroPreviewCard({ card }: { card: (typeof ALT_HERO_PREVIEW_CARDS)[number] }) {
  const motionByCardId: Record<
    (typeof ALT_HERO_PREVIEW_CARDS)[number]["id"],
    {
      x: number;
      y: number;
      rotate: number;
      duration: number;
      delay: number;
    }
  > = {
    "far-left": { x: -2, y: 8, rotate: -0.35, duration: 7.2, delay: -2.6 },
    "left-wide": { x: -2, y: 10, rotate: -0.7, duration: 6.3, delay: -1.2 },
    "left-portrait": { x: -1, y: -14, rotate: -0.5, duration: 5.4, delay: -3.1 },
    center: { x: 1, y: -8, rotate: 0.35, duration: 4.8, delay: -0.9 },
    "center-right": { x: 2, y: -12, rotate: 0.6, duration: 5.9, delay: -2.4 },
    "right-portrait": { x: 3, y: 11, rotate: 0.8, duration: 6.8, delay: -4.2 },
    "far-right": { x: 2, y: 9, rotate: 0.45, duration: 7.1, delay: -3.8 },
  };
  const motion = motionByCardId[card.id];
  const cardStyle = {
    left: `${card.left}px`,
    top: `${card.top}px`,
    width: `${card.width}px`,
    height: `${card.height}px`,
    "--hero-card-base-rotate": `${card.rotate}deg`,
    "--hero-card-float-x": `${motion.x}px`,
    "--hero-card-float-y": `${motion.y}px`,
    "--hero-card-rotate-offset": `${motion.rotate}deg`,
    "--hero-card-duration": `${motion.duration}s`,
    "--hero-card-delay": `${motion.delay}s`,
  } as CSSProperties;

  return (
    <div
      className={clsx(
        styles.heroPreviewCard,
        card.muted && styles.heroPreviewCardMuted,
        card.highlighted && styles.heroPreviewCardHighlighted,
      )}
      style={cardStyle}
    >
      <img alt="" aria-hidden="true" className={styles.heroPreviewCardImage} src={card.src} />
    </div>
  );
}

function AltPromptComposer() {
  return (
    <div className={styles.altHeroComposer}>
      <div className={styles.altHeroComposerInput}>
        <span aria-hidden="true" className={styles.altHeroComposerCaret}>
          |
        </span>
      </div>
      <div className={clsx(styles.altHeroComposerControls, aiToolsStyles.promptActionRow)}>
        <div className={aiToolsStyles.promptLeft}>
          <button aria-label="Upload an image" className={aiToolsStyles.iconChip} type="button">
            <span className={aiToolsStyles.addImageIcon}>
              <img alt="" aria-hidden="true" className={aiToolsStyles.addImageIconPrimary} src={HERO_ASSETS.addImagePrimary} />
              <img alt="" aria-hidden="true" className={aiToolsStyles.addImageIconSecondary} src={HERO_ASSETS.addImageSecondary} />
            </span>
          </button>

          <button className={aiToolsStyles.styleChip} type="button">
            <span className={aiToolsStyles.styleChipThumb}>
              <img alt="" aria-hidden="true" className={aiToolsStyles.styleChipThumbImage} src={HERO_ASSETS.styleThumbnail} />
              <img alt="" aria-hidden="true" className={aiToolsStyles.styleChipThumbIcon} src={HERO_ASSETS.styleIcon} />
            </span>
            <span className={aiToolsStyles.styleChipLabel}>Auto style</span>
            <img alt="" aria-hidden="true" className={aiToolsStyles.chipCaret} src={HERO_ASSETS.styleChevron} />
          </button>

          <button className={aiToolsStyles.promptChip} type="button">
            <img alt="" aria-hidden="true" className={aiToolsStyles.promptChipIcon} src={HERO_ASSETS.aspectIcon} />
            <span>1:1</span>
            <img alt="" aria-hidden="true" className={aiToolsStyles.chipCaret} src={HERO_ASSETS.chipChevron} />
          </button>

          <button className={aiToolsStyles.promptChip} type="button">
            <img alt="" aria-hidden="true" className={aiToolsStyles.promptChipIcon} src={HERO_ASSETS.variationsIcon} />
            <span>6 variations</span>
            <img alt="" aria-hidden="true" className={aiToolsStyles.chipCaret} src={HERO_ASSETS.chipChevron} />
          </button>
        </div>

        <div className={aiToolsStyles.promptRight}>
          <button aria-label="Enhance prompt" className={aiToolsStyles.wandButton} type="button">
            <img alt="" aria-hidden="true" height={16} src={HERO_ASSETS.wandIcon} width={16} />
          </button>
          <a className={aiToolsStyles.generateButton} href={CTA_URL}>
            <span>Generate</span>
            <img alt="" aria-hidden="true" className={aiToolsStyles.generateButtonIcon} src={HERO_ASSETS.generateArrow} />
          </a>
        </div>
      </div>
    </div>
  );
}

function ShowcaseCard({ card }: { card: (typeof SHOWCASE_CARDS)[number] }) {
  return (
    <article
      className={clsx(
        styles.showcaseCard,
        card.id === "left" && styles.showcaseCardLeft,
        card.id === "center" && styles.showcaseCardCenter,
        card.id === "right" && styles.showcaseCardRight,
      )}
    >
      <div
        className={clsx(
          styles.showcaseCardCanvas,
          card.id === "left" && styles.showcaseCardCanvasLeft,
          card.id === "center" && styles.showcaseCardCanvasCenter,
          card.id === "right" && styles.showcaseCardCanvasRight,
        )}
      >
        <img alt="" aria-hidden="true" className={styles.showcaseCardBase} src={card.baseSrc} />
        {card.overlaySrc ? (
          <img
            alt=""
            aria-hidden="true"
            className={clsx(
              styles.showcaseCardOverlay,
              card.id === "left" && styles.showcaseCardOverlayLeft,
              card.id === "right" && styles.showcaseCardOverlayRight,
            )}
            src={card.overlaySrc}
          />
        ) : null}
      </div>
    </article>
  );
}

function FeatureIcon({ icon }: { icon: (typeof FEATURE_ITEMS)[number]["icon"] }) {
  const overlay =
    icon === "video"
      ? FEATURE_ICON_ASSETS.video
      : icon === "crop"
        ? FEATURE_ICON_ASSETS.crop
        : FEATURE_ICON_ASSETS.movie;

  return (
    <span className={styles.featureIcon}>
      <img alt="" aria-hidden="true" className={styles.featureIconRing} src={FEATURE_ICON_ASSETS.ring} />
      <span
        className={clsx(
          styles.featureIconOverlayWrap,
          icon === "video" && styles.featureIconOverlayVideo,
          icon === "crop" && styles.featureIconOverlayCrop,
          icon === "movie" && styles.featureIconOverlayMovie,
        )}
      >
        <img alt="" aria-hidden="true" className={styles.mediaFill} src={overlay} />
      </span>
    </span>
  );
}

function ToolTile({ tile }: { tile: (typeof TOOL_TILES)[number] }) {
  const src =
    tile.icon === "edit"
      ? TOOL_TILE_ASSETS.edit
      : tile.icon === "voice"
        ? TOOL_TILE_ASSETS.voice
        : tile.icon === "sound"
          ? TOOL_TILE_ASSETS.sound
          : TOOL_TILE_ASSETS.image;

  return (
    <div
      className={styles.toolTile}
      style={{
        left: `${tile.left}px`,
        top: `${tile.top}px`,
        transform: `rotate(${tile.rotate}deg)`,
      }}
    >
      <span
        className={clsx(
          styles.toolTileIconFrame,
          tile.icon === "edit" && styles.toolTileEdit,
          tile.icon === "voice" && styles.toolTileVoice,
          tile.icon === "sound" && styles.toolTileSound,
          tile.icon === "image" && styles.toolTileImage,
        )}
      >
        <img alt="" aria-hidden="true" className={styles.mediaFill} src={src} />
      </span>
    </div>
  );
}

function Waveform() {
  return (
    <span className={styles.waveform} aria-hidden="true">
      {[
        12, 20, 18, 13, 11, 20, 30, 22, 12, 14, 20, 23, 27, 18, 23, 19, 22, 24, 14,
      ].map((height, index) => (
        <span key={index} style={{ height: `${height}px` }} />
      ))}
    </span>
  );
}

function AssetCard({ item }: { item: (typeof ASSET_CATEGORIES)[number] }) {
  return (
    <article className={styles.assetCard}>
      <div className={styles.assetCardImageFrame}>
        <img alt="" aria-hidden="true" className={styles.assetCardImage} src={item.image} />
        {item.showWaveform ? <Waveform /> : null}
      </div>
      <span className={styles.assetCardLabel}>{item.title}</span>
    </article>
  );
}

export function LandingPageStructureV2Alt() {
  return (
    <div className={styles.page}>
      <div className={styles.shell}>
        <header className={styles.header}>
          <div className={styles.headerLeft}>
            <a className={styles.logo} href="#">
              <span className={styles.logoMark}>
                <img alt="Envato" className={styles.mediaFill} height={24} src={HEADER_LOGO.mark} width={24} />
              </span>
              <span className={styles.logoWordmark}>
                <img
                  alt=""
                  aria-hidden="true"
                  className={styles.mediaFill}
                  height={18}
                  src={HEADER_LOGO.logotype}
                  width={84}
                />
              </span>
            </a>

            <nav aria-label="Primary" className={styles.headerNav}>
              <HeaderLinks items={HEADER_PRIMARY_LINKS} />
            </nav>
          </div>

          <div className={styles.headerRight}>
            <nav aria-label="Secondary" className={styles.headerSecondary}>
              <HeaderLinks items={HEADER_SECONDARY_LINKS} />
            </nav>
            <a className={styles.headerCta} href={CTA_URL}>
              Get unlimited downloads
            </a>
            <button aria-label="Account" className={styles.headerAccount} type="button">
              <img alt="" aria-hidden="true" height={24} src={HEADER_LOGO.userIcon} width={24} />
            </button>
          </div>
        </header>

        <main className={styles.main}>
          <section className={styles.altHeroSection}>
            <div className={styles.altHeroModeToggle}>
              {ALT_MODE_TOGGLE_ITEMS.map((item) => (
                <span
                  key={item.id}
                  className={clsx(styles.modeToggleChip, item.active && styles.modeToggleChipActive)}
                >
                  <AltModeToggleIcon icon={item.icon} />
                  <span>{item.label}</span>
                </span>
              ))}
            </div>

            <div className={styles.altHeroIntro}>
              <BrandGlyph />
              <h1>{ALT_PAGE_COPY.heroTitle}</h1>
              <p>{ALT_PAGE_COPY.heroSubtitle}</p>
            </div>

            <AltPromptComposer />

            <div className={styles.altHeroModels}>
              <p className={aiToolsStyles.modelsTitle}>{ALT_PAGE_COPY.modelsLabel}</p>
              <div className={aiToolsStyles.modelsRow}>
                {MODEL_LOGOS.map((item) => (
                  <AltModelLogo key={`${item.kind}-${item.label}`} item={item} />
                ))}
              </div>
            </div>

            <div className={styles.altHeroPreviewScene} aria-hidden="true">
              {ALT_HERO_PREVIEW_CARDS.map((card) => (
                <AltHeroPreviewCard key={card.id} card={card} />
              ))}
            </div>
          </section>

          <section className={styles.showcaseSection}>
            <div className={styles.sectionHeading}>
              <h2>{PAGE_COPY.madeWithTitle}</h2>
              <p>{PAGE_COPY.madeWithSubtitle}</p>
            </div>

            <div className={styles.showcaseRail}>
              {SHOWCASE_CARDS.map((card) => (
                <ShowcaseCard key={card.id} card={card} />
              ))}
            </div>

            <div className={styles.featureBand}>
              <div className={styles.featurePanel}>
                <div className={styles.featureRow}>
                  {FEATURE_ITEMS.map((item) => (
                    <article key={item.title} className={styles.featureItem}>
                      <FeatureIcon icon={item.icon} />
                      <div>
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            </div>
          </section>

          <section className={styles.startSection}>
            <div className={styles.sectionHeading}>
              <h2>{PAGE_COPY.startUsingTitle}</h2>
              <p>{PAGE_COPY.startUsingSubtitle}</p>
            </div>

            <a className={styles.sectionCta} href={CTA_URL}>
              Start Creating
            </a>

            <div className={styles.startStage}>
              <img alt="" aria-hidden="true" className={styles.startStageImage} src={START_USING_ASSET} />
              <div className={styles.startStageOverlay} />
              <span className={styles.startStageBadge}>{PAGE_COPY.startUsingDemoLabel}</span>

              <div className={styles.startStageSteps}>
                {START_USING_STEPS.map((step) => (
                  <article key={step.title}>
                    <h3>{step.title}</h3>
                    <p>{step.description}</p>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section className={styles.toolsSection}>
            <div className={styles.sectionHeading}>
              <h2 className={styles.toolsTitle}>{PAGE_COPY.toolsTitle}</h2>
              <p>{PAGE_COPY.toolsSubtitle}</p>
            </div>

            <div className={styles.toolsStage}>
              <button className={styles.toolsNavButton} type="button">
                <img alt="" aria-hidden="true" src={TOOLS_SECTION.chevronLeft} />
              </button>
              <button className={styles.toolsNavButton} type="button">
                <img alt="" aria-hidden="true" src={TOOLS_SECTION.chevronRight} />
              </button>

              {TOOL_TILES.map((tile) => (
                <ToolTile key={tile.id} tile={tile} />
              ))}

              <div className={styles.toolsCenterCard}>
                <span className={styles.toolsCenterMain}>
                  <img alt="" aria-hidden="true" className={styles.mediaFill} src={TOOLS_SECTION.centerCard} />
                </span>
                <span className={styles.toolsCenterStroke}>
                  <img alt="" aria-hidden="true" className={styles.mediaFill} src={TOOLS_SECTION.centerStroke} />
                </span>
                {TOOLS_SECTION.centerStickers.map((src, index) => (
                  <span
                    key={src}
                    className={clsx(styles.toolsCenterSticker, styles[`toolsCenterSticker${index + 1}`])}
                  >
                    <img alt="" aria-hidden="true" className={styles.mediaFill} src={src} />
                  </span>
                ))}
              </div>

              <span className={styles.toolsBadge}>{PAGE_COPY.toolsBadge}</span>
            </div>
          </section>

          <section className={styles.assetsSection}>
            <div className={styles.assetsHeader}>
              <div>
                <h2>{PAGE_COPY.assetsTitle}</h2>
                <p>{PAGE_COPY.assetsSubtitle}</p>
              </div>
              <a className={styles.assetsCta} href={CTA_URL}>
                {PAGE_COPY.assetsCta}
              </a>
            </div>

            <div className={styles.assetsGrid}>
              {ASSET_CATEGORIES.map((item) => (
                <AssetCard key={item.title} item={item} />
              ))}
            </div>
          </section>

          <section className={styles.faqSection}>
            <h2>{PAGE_COPY.faqTitle}</h2>
            <div className={styles.faqList}>
              {FAQ_ITEMS.map((item, index) => (
                <button key={`${item}-${index}`} className={styles.faqItem} type="button">
                  <span>{item}</span>
                  <img alt="" aria-hidden="true" src={FOOTER_ASSET.faqChevron} />
                </button>
              ))}
            </div>
          </section>

          <section className={styles.footerBanner}>
            <div className={styles.footerBannerInner}>
              <h2>
                <span>{PAGE_COPY.footerBannerTitleA}</span>
                <span>{PAGE_COPY.footerBannerTitleB}</span>
              </h2>
              <a className={styles.sectionCta} href={CTA_URL}>
                Start creating
              </a>
            </div>
          </section>
        </main>

        <footer className={styles.footer}>
          <div className={styles.footerLinks}>
            {FOOTER_LINKS.map((item, index) => (
              <span key={item} className={styles.footerLinkItem}>
                <span>{item}</span>
                {index < FOOTER_LINKS.length - 1 ? (
                  <img alt="" aria-hidden="true" className={styles.footerDivider} src={FOOTER_ASSET.divider} />
                ) : null}
              </span>
            ))}
          </div>
          <p className={styles.footerCopy}>{FOOTER_COPY}</p>
        </footer>
      </div>
    </div>
  );
}
