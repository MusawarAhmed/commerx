export interface Blog {
    id: string;
    title: string;
    slug: string;
    content?: string;
    publishedAt?: string;
}

export interface BlogResponse {
    docs: Blog[];
    totalDocs: number;
    limit: number;
    totalPages: number;
    page: number;
    pagingCounter: number;
    hasPrevPage: boolean;
    hasNextPage: boolean;
    prevPage: number | null;
    nextPage: number | null;
}
