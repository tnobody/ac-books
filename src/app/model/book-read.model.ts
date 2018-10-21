export interface GotInLanguage {
    de: boolean;
    gb: boolean;
    dk: boolean;
}

export type Languages = keyof GotInLanguage;

export interface BookRead extends GotInLanguage {
    read: boolean;
}

export const createBookRead = (): BookRead => ({
    de: false,
    dk: false,
    gb: false,
    read: false
});

export interface BookReadStorage {
    [bookSlug: string]: BookRead;
}