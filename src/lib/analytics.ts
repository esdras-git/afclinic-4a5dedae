// Lightweight analytics helper.
// Dispatches events to whatever provider is loaded on the page:
// - Google Analytics (gtag)
// - GTM (dataLayer)
// - Plausible
// Always safe to call — no-ops if nothing is loaded.

type EventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    plausible?: (event: string, opts?: { props?: EventParams }) => void;
  }
}

export const track = (event: string, params: EventParams = {}) => {
  if (typeof window === "undefined") return;
  try {
    window.gtag?.("event", event, params);
    window.dataLayer?.push({ event, ...params });
    window.plausible?.(event, { props: params });
    // eslint-disable-next-line no-console
    if (import.meta.env.DEV) console.debug("[analytics]", event, params);
  } catch {
    /* no-op */
  }
};
