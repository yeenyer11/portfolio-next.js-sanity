import { Experience }from "../typings"
import {baseUrl} from "./url"
// import { basePath } from "@/sanity/env"
export const fetchExperiences = async() =>{
    const res =await fetch(`${baseUrl}/api/getExperience`)

    const data = await res.json();
    const experience: Experience[] = data.experience;

    return experience;
}