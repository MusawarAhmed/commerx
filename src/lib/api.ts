
import dummyBlogs from './dummy-blogs.json';

// const CMS_URL = process.env.CMS_URL;

export async function getBlogs() {
    // const res = await fetch(`${CMS_URL}/api/posts`, {
    //   next: { revalidate: 60 }
    // });

    // if (!res.ok) throw new Error("Failed to fetch blogs");

    // return res.json();
    return dummyBlogs;
}

export async function getBlogBySlug(slug: string) {
    // const res = await fetch(
    //   `${CMS_URL}/api/posts?where[slug][equals]=${slug}`,
    //   { next: { revalidate: 60 } }
    // );

    // return res.json();

    const blog = dummyBlogs.docs.find((b) => b.slug === slug);
    return {
        ...dummyBlogs,
        docs: blog ? [blog] : []
    };
}
