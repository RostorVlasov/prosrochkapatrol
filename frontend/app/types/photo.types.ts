export interface PhotoMeta {
    id: number;
    alt: string | null;
    uploaded_by: number;
    updatedAt: string;
    createdAt: string;
    url: string;
    thumbnailURL: string | null;
    filename: string;
    mimeType: string;
    filesize: number;
    width: number;
    height: number;
    focalX: number;
    focalY: number;
}

export interface Photo {
    id: string;
    photo: PhotoMeta;
    caption: string | null;
}