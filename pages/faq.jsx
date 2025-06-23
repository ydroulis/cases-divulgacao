import Head from 'next/head';
import Link from '../src/components/Link';

export const getStaticProps = async () => {
     const FAQ_API_URL = 'https://gist.githubusercontent.com/omariosouto/0ceab54bdd8182cbd1a4549d32945c1a/raw/578ad1e8e5296fa048e3e7ff6b317f7497b31ad9/alura-cases-faq.json'
    const faq = await fetch(FAQ_API_URL)
            .then((respostaDoServidor)  => {
                return respostaDoServidor.json();
            })
            .then((resposta) => {
                return resposta;
            })

    return {
        props: {
            faq
        },
    }
}

export default function FAQPage({ faq }) {

    return (
        <div>
            <Head>
                <title>FAQ - Alura Cases Campanha</title>
            </Head>
            <h1>Alura Cases - Página de Perguntas FAQ</h1>
            <Link href="/">Ir para a home</Link>
            <ul>
                {faq.map(({ answer, question }, i) => {
                    return (
                        <li key={i}>
                            <article>
                                <h2>{question}</h2>
                                <p>{answer}</p>
                            </article>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}