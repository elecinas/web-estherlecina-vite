import { Link } from "react-router-dom";
import { galleries } from "../data/galleries";
import { useLanguage } from "../context/languageContext";

const GalleryDesignUxUiPage = () => {

  const {language} = useLanguage();

  return (
    <div>
      <p>Página Portfolio Diseño UX/UI</p>
      {galleries.map((itemGallery) => {
        return(
            <div style={{ border: '1px solid blue' }} key={itemGallery.id}>
                <h6>{itemGallery.translations[language].title}</h6>
                <p>{itemGallery.translations[language].description}</p>
                <img src={itemGallery.translations[language].cardImage.src} alt={itemGallery.translations[language].cardImage.alt} />
                <Link to={`/portfolio/${itemGallery.id}`}>Ve a {itemGallery.translations[language].title}</Link>
            </div>
            
        )
      })}
    </div>
  );
};

export default GalleryDesignUxUiPage;
