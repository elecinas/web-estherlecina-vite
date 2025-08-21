export type SupportedLanguages = "es" | "en";

export type LinkDirection = "internal" | "external";

export type Image = {
  src: string;
  alt: string;
  legend?: string;
  width?: number;
  height?: number;
};

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

export type FormElement = {
    label: string,
    placeholder: string,
}

export type ContactContent = {
    title: string,
    text: string,
    image: Image,
    form: {
        legend: string,
        name: FormElement,
        email: FormElement,
        concept: FormElement,
        message: FormElement,
        buttonLabel: string,
    }
}

export type HeaderTranslations = {
    translations: Record<SupportedLanguages, HeaderContent>;
}

export type Contact = {
    translations: Record<SupportedLanguages,ContactContent>;
}