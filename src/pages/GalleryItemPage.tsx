import { useParams } from "react-router-dom";
import { galleries } from "../data/galleries";

const GalleryItemPage = () => {
    const { name } = useParams<{ name: string }>();
    const page = galleries.find((e) => e.id === name);

    if (!page) {
        return <div>Este trabajo no existe</div>;
    }

    return (
        <div>
            <h1>{page.title}</h1>
            <p>{page.description}</p>

            {page.pageContent.map((pageBlock) => {
                switch (pageBlock.type) {
                    case 'text':
                        return <p key={pageBlock.id}>{pageBlock.content}</p>;
                    case 'image':
                        return (
                            <figure key={pageBlock.id}>
                                <img src={pageBlock.src} alt={pageBlock.alt} />
                                <figcaption>{pageBlock.legend}</figcaption>
                            </figure>
                        );
                }
            })}
        </div>
    );
};

export default GalleryItemPage;
// <p key={pageBlock.id}></p>