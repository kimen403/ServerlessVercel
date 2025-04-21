import { IProduct } from '../../../domain/entities/product';
import { IProductRepository } from '../../../domain/repositories/product-repository';

export class GetProductsUseCase {
    constructor(private readonly productRepository: IProductRepository) {}

    async executeGetAll(): Promise<IProduct[]> {
        return await this.productRepository.findAll();
    }

    async executeGetById(id: number): Promise<IProduct | null> {
        return await this.productRepository.findById(id);
    }
}
