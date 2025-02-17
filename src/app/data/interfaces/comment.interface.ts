export interface Comment {
    id: string;
    postId: string;
    author: string;
    date: string;
    content: string;
    likes?: number;
}
