import { Social }from "../typings"
import {baseUrl} from "./url"
// import { basePath } from "@/sanity/env"
export const fetchSocials = async() =>{
    const res =await fetch(`${baseUrl}/api/getSocials`)

    const data = await res.json();
    const socials: Social[] = data.socials;

    return socials;
}