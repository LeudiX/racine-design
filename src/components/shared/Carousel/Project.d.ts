interface ArtistProjects {
    subtitle: string;
    media: readonly { type: "image" | "video"; url: string; title?: string; name?: string; }[];
}

export interface Project {
    id: string;
    title: string;
    projects: readonly ArtistProjects[];
}