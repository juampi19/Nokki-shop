export interface InterfaceProductos {
    _id: string;
    description: string;
    images: string[];
    inStock: number;
    price: number;
    sizes: InterSizes[];
    slug: string;
    tags: string[];
    title: string;
    type: InterTypes;
    gender: 'men'|'women'|'kid'|'unisex'
}

export type InterSizes = 'XS'|'S'|'M'|'L'|'XL'|'XXL'|'XXXL';
export type InterTypes = 'shirts'|'pants'|'hoodies'|'hats';
