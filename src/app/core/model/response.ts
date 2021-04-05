export interface DataResponse {
    message: string,
    data: any[],
    status: Number
}


export interface DialogData {
    id: string;
    name: string;
}

export interface PageResult {
    page: number;
    size: number;
    totalOfItems: number;
    totalPage: number;
    data: Bookmark[]
}

export interface Bookmark {
    id: string;
    link: string;
    category: string;
    title: string;
    status: string;
    imageLink: string;
    createdAt: string;
}
