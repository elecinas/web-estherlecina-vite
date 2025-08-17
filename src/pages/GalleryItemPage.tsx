import { Link, useParams } from "react-router-dom";
import { galleries } from "../data/galleries";
import './GalleryItemPage.css';

const GalleryItemPage = () => {
    const { name } = useParams<{ name: string }>();
    const page = galleries.find((e) => e.id === name);

    return (
        page &&
        <div>
            <h1>{page.title}</h1>
            <p>{page.description}</p>
            {
                page.pageContent.map((pageBlock, i) => {
                    return (
                        <>
                            {pageBlock.text && <p key={i}>{pageBlock.text}</p>}
                            {pageBlock.images && pageBlock.images?.length > 0 && pageBlock.images.map((image, index) => {
                                return (
                                    <figure key={`img-${i}-${index}`}>
                                        <img src={image.src} alt={image.alt} />
                                        <figcaption>{image.legend}</figcaption>
                                    </figure>
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