import ElSCube from "../assets/ELS_cube.svg?react";
import "./HomePage.css";
import { homePage } from "../data/home";
import { useLanguage } from "../context/languageContext";
import { richText } from "../helpers/processingText";
import ButtonLink from "../components/ButtonLink";
import SectionSeparator from "../components/SectionSeparator";

const HomePage = () => {
  const { language } = useLanguage();
  return (
    <main className="content-wrapper home-container">
      <section className="home-intro">
        <h1 className="home-intro-child">
          {richText(homePage.translations[language].title)}
        </h1>
        <p className="home-intro-child">
          {richText(homePage.translations[language].text)}
        </p>
        <ElSCube className="home-intro-child" />
        <ButtonLink
          classList={["home-intro-child"]}
          label={homePage.translations[language].cta.label}
          href={homePage.translations[language].cta.href}
        />
      </section>
      <SectionSeparator />
    </main>
  );
};

export default HomePage;
