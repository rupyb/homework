export interface Electronics {
   name: string;
   image: any;
   price: number;
   voltage: string;
}

export interface Mp3 extends Electronics {
    screen: boolean;
    touchscreen: boolean;
    category: 'electronic';
}
