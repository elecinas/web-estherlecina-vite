import { createContext, useContext, useState, type ReactNode } from "react";

export type SupportedLanguages = "es" | "en";

type LanguageContextType = {
  language: SupportedLanguages;
  setLanguage: (lang: SupportedLanguages) => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const browserLang = navigator.language.startsWith("es") ? "es" : "en";  
  const [language, setLanguage] = useState<SupportedLanguages>(browserLang);

  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

// custom hook para usar el contexto fácilmente
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage debe usarse dentro de LanguageProvider");
  }
  return context;
};