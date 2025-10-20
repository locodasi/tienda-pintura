// src/types.d.ts
export interface Product {
    name: string;
    img: string;
}

export interface Subsection {
    text: string;
    products: Product[];
}

export interface SectionData {
    title: string;
    subsections: Record<string, Subsection>;
}

export type StoreData = Record<string, SectionData>;
