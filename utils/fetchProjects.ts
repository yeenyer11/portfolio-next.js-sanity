import { Project }from "../typings"
import {baseUrl} from "./url"
// import { basePath } from "@/sanity/env"
export const fetchProjects = async() =>{
    const res =await fetch(`${baseUrl}/api/getProjects`)

    const data = await res.json();
    const projects: Project[] = data.projects;
    console.log(projects)

    return projects;
}