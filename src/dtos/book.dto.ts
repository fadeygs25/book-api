export interface CreateBookDTO {
    title: string;
    author: string;
    publishedDate: Date;
    genre: string;
    summary: string;
}

export interface UpdateBookDTO {
    title?: string;
    author?: string;
    publishedDate?: Date;
    genre?: string;
    summary?: string;
}