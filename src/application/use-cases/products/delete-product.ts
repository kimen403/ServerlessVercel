import { IProductRepository } from '../../../domain/repositories/product-repository';

export class DeleteProductUseCase {
    constructor(private readonly productRepository: IProductRepository) {}

    async execute(id: number, soft: boolean = true): Promise<void> {
        if (soft) {
            await this.productRepository.softDelete(id);
        } else {
            await this.productRepository.delete(id);
        }
    }
}
