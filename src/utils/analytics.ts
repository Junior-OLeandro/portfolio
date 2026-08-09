interface AnalyticsEvent {
    [key: string]: string | number | boolean | undefined;
}

export function trackEvent(
    eventName: string,
    parameters?: AnalyticsEvent
) {
    if (typeof window === "undefined") return;

    if (typeof window.gtag !== "function") return;

    window.gtag("event", eventName, parameters);
}