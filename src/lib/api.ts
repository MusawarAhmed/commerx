
// Types definitions based on API response
export interface MediaSize {
    url: string | null;
    width: number | null;
    height: number | null;
    mimeType: string | null;
    filesize: number | null;
    filename: string | null;
}

export interface Media {
    id: string | number;
    alt: string;
    url: string;
    filename: string;
    mimeType?: string | null;
    filesize?: number | null;
    width?: number | null;
    height?: number | null;
    sizes?: {
        thumbnail?: MediaSize;
        square?: MediaSize;
        small?: MediaSize;
        medium?: MediaSize;
        large?: MediaSize;
        xlarge?: MediaSize;
        og?: MediaSize;
    };
}

export interface HeroSlide {
    id: string;
    tabLabel: string;
    subtitle: string;
    title: string;
    image: Media | string; // API can return object or ID string, usually object if depth is sufficient
    link?: string;
}

export interface HeroSection {
    type: string;
    heroSlides: HeroSlide[];
}

export interface InsightsBlock {
    blockType: 'insightsSection';
    title: string;
    description1: string;
    description2: string;
    leftImage: Media;
    bgImage: Media;
    linkText: string;
    linkUrl: string;
    id: string;
}

export interface TabItem {
    id: string;
    tabLabel: string;
    contentTitle: string;
    tags: {
        text: string;
        id: string;
    }[];
    innerTitle: string;
    innerDescription: string;
    image: Media | string;
    linkText?: string;
    linkUrl?: string;
}

export interface TabSectionBlock {
    blockType: 'tabSection';
    title: string;
    description: string;
    tabs: TabItem[];
    id: string;
}

export interface StatItem {
    value: string;
    label: string;
    id: string;
}

export interface StatsSectionBlock {
    blockType: 'statsSection';
    title: string;
    description: string;
    backgroundImage: Media;
    stats: StatItem[];
    id: string;
}

export type LayoutBlock = InsightsBlock | TabSectionBlock | StatsSectionBlock;

export interface HomePageData {
    id: string;
    title: string;
    hero: HeroSection;
    layout: LayoutBlock[];
    meta: {
        title: string;
        description: string;
        image: Media;
    };
}

const API_BASE_URL = process.env.NEXT_PUBLIC_SERVER_URL || 'http://localhost:3000';

export async function getHomePageData(): Promise<HomePageData> {
    // Using the specific page ID provided by the user
    const pageId = '2';
    const queryParams = new URLSearchParams({
        depth: '2',
        draft: 'false',
        locale: 'undefined',
        trash: 'false'
    });

    try {
        const res = await fetch(`${API_BASE_URL}/api/pages/${pageId}?${queryParams.toString()}`, {
            next: { revalidate: 30 } // ISR: Revalidate every 30 seconds
        });

        if (!res.ok) {
            throw new Error(`Failed to fetch home page data: ${res.status} ${res.statusText}`);
        }

        const data = await res.json();
        return data;
    } catch (error) {
        console.error("Error fetching home page data:", error);
        throw error;
    }
}

// Keep existing dummy/legacy functions if needed, or remove them. 
// For now, I'll comment them out to clean up, or keep them if other parts of the app rely on them temporarily.
// But as per instructions, I am implementing the API.

export async function getBlogs() {
    return { docs: [] };
}

export async function getBlogBySlug(slug: string) {
    return { docs: [] };
}
