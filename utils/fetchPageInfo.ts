import { PageInfo }from "../typings"
import {baseUrl} from "./url"
// import { basePath } from "@/sanity/env"
export const fetchPageInfo = async () => {
    try {
      const res = await fetch(`${baseUrl}/api/getPageInfo`);
      const data = await res.json();
      const pageInfo: PageInfo = data.pageInfo;
      return pageInfo;
    } catch (error) {
      console.error("Error fetching page info:", error);
      return null; // or return a default PageInfo object or an error message
    }
  };