import { Link, useParams } from "react-router-dom";
import { galleries } from "../data/galleries";
import './GalleryItemPage.css';
import Embed from "../components/Embed";

const GalleryItemPage = () => {
    const { name } = useParams<{ name: string }>();
    const page = galleries.find((e) => e.id === name);

    return (
        page &&
        <div>
            <h1>{page.title}</h1>
            <p>{page.description}</p>
            {
                page.pageContent.map((pageBlock, indexText) => {
                    return (
                        <>
                            {pageBlock.text && <p key={indexText}>{pageBlock.text}</p>}
                            {pageBlock.images && pageBlock.images?.length > 0 && pageBlock.images.map((image, indexImage) => {
                                return (
                                    <figure key={`img-${indexText}-${indexImage}`}>
                                        <img src={image.src} alt={image.alt} />
                                        <figcaption>{image.legend}</figcaption>
                                    </figure>
                                )
                            })}
                            {pageBlock.embeds && pageBlock.embeds.length > 0 && pageBlock.embeds.map((embed, indexEmbed) => {
                                return(
                                    <div key={indexEmbed}>
                                        <p>{embed.type}</p>
                                        <p>{embed.src}</p>
                                        <p>{embed.title}</p>
                                        <Embed src={embed.src} type={embed.type} title={embed.title} />
                                    </div>
                                    
                                )
                            })}
                        </>)
                })
            }
            {page.links && page.links.map((link, indexLink) => {
                return (link.linkDirection !== "internal" ?
                    <a className={link.linkDirection} href={link.href} title={link.title} key={indexLink} target={link.target ?? "_self"}>{link.label}</a>
                    :
                    <Link to={`/portfolio/${link.href}`} className={link.linkDirection}>{link.label}</Link>
                )
            })}
        </div>
    );
};

export default GalleryItemPage;