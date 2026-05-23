export interface PhotoMeta {
    id: string;
    alt: string | null;
    uploaded_by: number;
    updatedAt: string;
    createdAt: string;
    url: string;
    thumbnailURL: string
    filename: string;
    mimeType: string;
    filesize: number;
    width: number;
    height: number;
    focalX: number;
    focalY: number;
}

export interface PhotoResponse {
    doc: {
        createdAt: string,
        updatedAt: string,
        url: string,
        filename: string,
        mimeType: string,
        filesize: number,
        width: number,
        height: number,
        focalX: number,
        focalY: number,
        id: string,
        thumbnailURL: string
    },
    message: string
}

export interface Photo {
    id: string;
    photo: PhotoMeta;
    caption?: string | null;
}

