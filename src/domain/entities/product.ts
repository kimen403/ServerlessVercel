export interface IProduct {
    id?: number;
    name: string;
    description: string | null;
    price: number;
    stock: number;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date | null;
}

export interface ICreateProductDto {
    name: string;
    description?: string | null;
    price: number;
    stock: number;
}

export interface IUpdateProductDto {
    name?: string;
    description?: string | null;
    price?: number;
    stock?: number;
}
