interface PocketbaseCollection {
    collectionId: string;
    collectionName: string;
}

export interface Postcard extends PocketbaseCollection {
    id: string;
    created: string;
    updated: string;
    picture: string;
    date: string;
    place: string;
    location: string;
    note: string;
    stamp: string;
}