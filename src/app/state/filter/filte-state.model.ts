export type ReadingStatus = 0 | 1 | 2 | 3;

export function isReadingStatus(i: number): i is ReadingStatus {
  return [0, 1, 2, 3].indexOf(i) > -1;
}

export interface FilterState {
    text: string;
    readingStatus: ReadingStatus;
    category: string | null;
}

export const filterStateInit: FilterState = {
    text: '',
    readingStatus: 0,
    category: null
};
