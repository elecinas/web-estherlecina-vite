import type { SupportedLanguages } from "./global";

export type HomeContent = {
    title: string;
    text: string;
    cta: {
        label: string;
        href: string;
        title?: string;
        target?: "_blank";
    }
}

export type Home = {
    translations: Record<SupportedLanguages, HomeContent>;
}