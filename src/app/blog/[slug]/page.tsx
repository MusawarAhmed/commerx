
import { getBlogBySlug } from "@/lib/api";
import { Blog } from "@/lib/types";

type BlogResponse = {
    docs: Blog[];
}

export default async function BlogDetail({ params }: { params: { slug: string } }) {
    const blogData: BlogResponse = await getBlogBySlug(params.slug);
    const blog = blogData.docs[0];

    if (!blog) {
        return <div>Blog not found</div>;
    }

    return (
        <article className="container mx-auto p-4 max-w-2xl">
            <h1 className="text-4xl font-bold mb-4">{blog.title}</h1>
            <div className="prose lg:prose-xl">
                {blog.content || "No content available."}
            </div>
        </article>
    );
}
