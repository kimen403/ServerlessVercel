import { IProduct, ICreateProductDto } from '../../../domain/entities/product';
import { IProductRepository } from '../../../domain/repositories/product-repository';

export class CreateProductUseCase {
    constructor(private readonly productRepository: IProductRepository) {}

    async execute(data: ICreateProductDto): Promise<IProduct> {
        return await this.productRepository.create(data);
    }
}
