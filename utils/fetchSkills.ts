import { Skill }from "../typings"
import {baseUrl} from "./url"
// import { basePath } from "@/sanity/env"
export const fetchSkills = async() =>{
    const res =await fetch(`${baseUrl}/api/getSkills`)

    const data = await res.json();
    const skill: Skill[] = data.skill;

    return skill;
}