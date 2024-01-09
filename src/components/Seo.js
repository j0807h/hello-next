import Head from "next/head";

export default function Seo({ title }) {
    const titleMsg = `${title} | next Movies`;
    return(
        <Head>
            <title>{ titleMsg }</title>
        </Head>
    );
}