import { PageInfo }from "../typings"
import {baseUrl} from "./url"
// import { basePath } from "@/sanity/env"
export const fetchPageInfo = async() =>{

    const res = await fetch(`${baseUrl}/api/getPageInfo`)

    console.log(res)

    const data = await res.json();
    const pageInfo: PageInfo = data.pageInfo;

    return pageInfo;
}