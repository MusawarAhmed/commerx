import { getBlogs } from "@/lib/api";
import { Blog } from "@/lib/types";
import BlogList from "@/components/blog/BlogList";

// Helper type if not strictly typed in api.ts, but we know usage
type BlogsResponse = {
    docs: Blog[];
}

export default async function BlogPage() {
    const blogs: BlogsResponse = await getBlogs();

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-6">Blog Posts</h1>
            <BlogList blogs={blogs.docs} />
        </div>
    );
}
