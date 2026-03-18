import { PricingPage } from "./PricingPage.tsx";
import styles from "./PricingPage.module.scss";

export function PricingPageGreenActiveTab() {
  return (
    <>
      <style>{`
        .${styles.toggleButtonActive} {
          background: #87e64b;
          color: #191919;
        }

        .${styles.toggleButtonActive} img {
          filter: brightness(0) saturate(100%);
        }

        .${styles.toggleButtonActive}:hover,
        .${styles.toggleButtonActive}:focus-visible {
          background: #6cc832;
          color: #191919;
          box-shadow: 0 0 0 2px #fff;
        }

        .${styles.toggleButtonActive}:hover img,
        .${styles.toggleButtonActive}:focus-visible img {
          filter: brightness(0) saturate(100%);
        }
      `}</style>
      <PricingPage />
    </>
  );
}
