import { Link } from "react-router-dom";
import { galleries } from "../data/galleries";

const GalleryDesignUxUiPage = () => {
  return (
    <div>
      <p>Página Portfolio Diseño UX/UI</p>
      {galleries.map((itemGallery) => {
        return(
            <div style={{ border: '1px solid blue' }} key={itemGallery.id}>
                <h6>{itemGallery.title}</h6>
                <p>{itemGallery.description}</p>
                <img src={itemGallery.cardImage.src} alt={itemGallery.cardImage.alt} />
                <Link to={`/portfolio/${itemGallery.id}`}>Ve a {itemGallery.title}</Link>
            </div>
            
        )
      })}
    </div>
  );
};

export default GalleryDesignUxUiPage;
