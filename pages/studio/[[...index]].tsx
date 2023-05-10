import Head from 'next/head'
import { NextStudio } from 'next-sanity/studio'
import { metadata } from 'next-sanity/studio/metadata'
import createAbstractBuilder from "@sanity/image-url"
import config from '../../sanity.config'
import { createClient } from 'next-sanity'
export default function StudioPage() {
  return (
    <>
      <Head>
        {Object.entries(metadata).map(([key, value]) => (
          <meta key={key} name={key} content={value} />
        ))}
      </Head>
      <NextStudio config={config} />
    </>
  )
}
export const sanityClient = createClient(config);
export const urlFor =(source:any)=>createAbstractBuilder(config).image(source);