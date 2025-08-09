import { galleries } from "../data/galleries";
import "./CardGallery.css";

const CardGallery = () => {
    return (
        <div>
            {galleries.map((gallery) => (
                <div key={gallery.id}>
                    <h2>{gallery.title}</h2>
                    <p>{gallery.description}</p>
                    <div>
                        {gallery.images.map((src, index) => (
                            <img key={index} src={src} alt="" />
                        ))}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default CardGallery;