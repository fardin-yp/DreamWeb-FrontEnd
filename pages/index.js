import { Fragment } from 'react';
import Home from '../components/Home/Home';
import Head from 'next/head';

export async function getStaticProps() {


    const recaptcha = "6LfMd88dAAAAANh6pGI5JNg-q4m3gkwi8BlYKmHo";

    const res = await fetch(`https://dreamwebbackend.herokuapp.com/allRoutes/articles`);
    const json = await res.json();

    const resSeo = await fetch('https://dreamwebbackend.herokuapp.com/allRoutes/Seo/home');
    const jsonSeo = await resSeo.json();

    const getLinks = await fetch(`https://dreamwebbackend.herokuapp.com/allRoutes/Links`);
     const links = await getLinks.json();
       

    return {
      props:{
        json,
        recaptcha,
        jsonSeo,
        links,
      },
      revalidate:1
    };
  
  }
  

export default function index ({ json ,recaptcha ,jsonSeo ,links }) {

 return (
 <Fragment>
   <Head>
   <link rel="icon" href="/art.png" />
    <title>{jsonSeo && jsonSeo[0].title}</title>
    <meta name="description" content={jsonSeo && jsonSeo[0].description} />
    <meta name="keywords" content={jsonSeo && jsonSeo[0].keywords} />
    <meta property="og:site_name" content="دریم وب"/>
    <meta property="og:title" content={jsonSeo && jsonSeo[0].title} />
    <meta property="og:description" content={jsonSeo && jsonSeo[0].description} />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta property="og:url" content={jsonSeo && jsonSeo[0].ogUrl} />
    <meta name="og:type" content={jsonSeo && jsonSeo[0].ogType}/>
    <meta property="og:locale" content="Fa_IR" /> 
  </Head>
     <Home articles={json.findPost} Questions={json.findQuestions} json={recaptcha} links={links} />
     
 </Fragment >
 )
}
