import { useState } from "react";
import { useLanguage } from "../context/languageContext";
import { contactContent } from "../data/contact";

const ContactPage = () => {
    const { language } = useLanguage();
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [concept, setConcept] = useState("");
    const [message, setMessage] = useState("");

    return (
        <main className="content-wrapper">
            <h1>{contactContent.translations[language].title}</h1>
            <p>{contactContent.translations[language].text}</p>
            <figure>
                <img
                    src={contactContent.translations[language].image.src}
                    alt={contactContent.translations[language].image.alt}
                />
                <figcaption>{contactContent.translations[language].image.legend}</figcaption>
            </figure>

            <form
                onSubmit={(e) => {
                    e.preventDefault(); // evita que recargue la página
                    alert(`
        Your name is ${name}
        Your email is ${email}
        Your concept is ${concept}
        Your message is ${message}
      `);
                }}
            >
                <fieldset>
                    <legend>{contactContent.translations[language].form.legend}</legend>

                    <div>
                        <label htmlFor="name">{contactContent.translations[language].form.name.label}</label>
                        <input
                            type="text"
                            id="name"
                            placeholder={contactContent.translations[language].form.name.placeholder}
                            value={name}
                            onChange={e => setName(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="email">{contactContent.translations[language].form.email.label}</label>
                        <input
                            type="email"
                            id="email"
                            placeholder={contactContent.translations[language].form.email.placeholder}
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="concept">{contactContent.translations[language].form.concept.label}</label>
                        <input
                            type="text"
                            id="concept"
                            placeholder={contactContent.translations[language].form.concept.placeholder}
                            value={concept}
                            onChange={e => setConcept(e.target.value)}
                        />
                    </div>

                    <div>
                        <label htmlFor="message">{contactContent.translations[language].form.message.label}</label>
                        <textarea
                            id="message"
                            placeholder={contactContent.translations[language].form.message.placeholder}
                            value={message}
                            onChange={e => setMessage(e.target.value)}
                            required
                        />
                    </div>

                    <button type="submit">
                        {contactContent.translations[language].form.buttonLabel}
                    </button>
                </fieldset>
            </form>
        </main>
    )
}

export default ContactPage;