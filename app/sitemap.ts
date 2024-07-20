import { MetadataRoute } from "next";

const BASE_URL = "https://www.lynglandskap.no";


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {

    const urls = [
        {
            url: `${BASE_URL}`,
            lastModified: new Date(),
            priority: 1,
        },
    ];

    return [...urls];
}