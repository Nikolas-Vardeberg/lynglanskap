import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
    return {
        name: "Lyng Landskap AS",
        short_name: "Lyng Landskap",
        description: "Lyng Landskap AS tilbyr innovative og bærekraftige landskapsdesigntjenester i Gjøvik. Våre erfarne landskapsarkitekter hjelper deg med å skape vakre og funksjonelle uteområder. Kontakt oss for profesjonell landskapsplanlegging og -design.",
        start_url: "/",
        display: "standalone",
        background_color: "#CDD8E4",
        theme_color: "rgb(0, 0, 0)",
        icons: [
            {
                src: "/icons/favicon.ico",
                sizes: "any",
                type: "image/x-icon",
            },
            {
                src: "/icons/favicon-16x16.png",
                sizes: "16x16",
                type: "image/png",
            },
            {
                src: "/icons/favicon-32x32.png",
                sizes: "32x32",
                type: "image/png",
            },
            {
                src: "/icons/android-chrome-192x192.png",
                sizes: "192x192",
                type: "image/png",
            },
            {
                src: "/icons/android-chrome-512x512.png",
                sizes: "512x512",
                type: "image/png",
            }
        ]
    }
}