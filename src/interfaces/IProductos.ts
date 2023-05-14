// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface IProductos {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image:string;
    rating: {
      rate: number,
      count: number
    }
}