interface Window {
    dataLayer: unknown[];

    gtag: (
        command: string,
        eventName: string,
        parameters?: Record<string, unknown>
    ) => void;
}