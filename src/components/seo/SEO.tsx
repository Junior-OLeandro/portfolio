import { useEffect } from "react";

interface SEOProps {
title: string;
description: string;
canonical?: string;
}

export function SEO({
title,
description,
canonical,
}: SEOProps) {
useEffect(() => {
document.title = title;


    const metaDescription = document.querySelector(
        'meta[name="description"]'
    );

    if (metaDescription) {
        metaDescription.setAttribute(
            "content",
            description
        );
    }

    if (canonical) {
        let canonicalLink = document.querySelector(
            'link[rel="canonical"]'
        );

        if (!canonicalLink) {
            canonicalLink = document.createElement("link");

            canonicalLink.setAttribute(
                "rel",
                "canonical"
            );

            document.head.appendChild(canonicalLink);
        }

        canonicalLink.setAttribute(
            "href",
            canonical
        );
    }
}, [title, description, canonical]);

return null;


}
