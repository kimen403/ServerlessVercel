import { IProduct, IUpdateProductDto } from '../../../domain/entities/product';
import { IProductRepository } from '../../../domain/repositories/product-repository';

export class UpdateProductUseCase {
    constructor(private readonly productRepository: IProductRepository) {}

    async execute(id: number, data: IUpdateProductDto): Promise<IProduct> {
        return await this.productRepository.update(id, data);
    }
}
