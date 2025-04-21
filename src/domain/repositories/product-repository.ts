import { IProduct, ICreateProductDto, IUpdateProductDto } from '../entities/product';

export interface IProductRepository {
    create(data: ICreateProductDto): Promise<IProduct>;
    findAll(): Promise<IProduct[]>;
    findById(id: number): Promise<IProduct | null>;
    update(id: number, data: IUpdateProductDto): Promise<IProduct>;
    delete(id: number): Promise<void>;
    softDelete(id: number): Promise<void>;
}
