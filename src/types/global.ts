

export type SupportedLanguages = "es" | "en";

export type HeaderContent = {
    navBar: {
        about: string;
        portfolio: string;
        graphicDesign: string;
        illustrationAndComic: string;
        designUxUi: string;
        development: string;
        others: string;
        contact: string;
        blog: string;
    }
}

export type HeaderTranslations = {
    translations: Record<SupportedLanguages, HeaderContent>;
}