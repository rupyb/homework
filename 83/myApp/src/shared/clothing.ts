export interface Clothing {
    image: any;
    name: string;
    price: number;
    color: string;
    type: string;
    id: number;
}

export interface Shoe extends Clothing {
    size: string;
    type: 'footwear';
    category: 'clothing';
}
