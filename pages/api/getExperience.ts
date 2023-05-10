import type { NextApiRequest, NextApiResponse } from 'next'
import { groq } from "next-sanity"
import {defineConfig} from "sanity"
import {client} from '../../sanity/lib/client'
import { urlForImage } from '../../sanity/lib/image'
import { Experience} from "../../typings"
const query = groq`
    *[_type == "experience"]{
      ...,
      technologies[]->
    }
`;
type Data = {
  experience: Experience[];
    }



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experience: Experience[] = await client.fetch(query);



  res.status(200).json({ experience });
}
