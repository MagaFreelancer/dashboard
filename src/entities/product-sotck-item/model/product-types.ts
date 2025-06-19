export type TypeProductStock = {
    id: number;
    image: string;
    title: string;
    category: string;
    price: number;
};

export type IPropsProductStock = Omit<TypeProductStock, "id">;
