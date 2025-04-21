import { PrismaClient } from '@prisma/client';
import { IProduct, ICreateProductDto, IUpdateProductDto } from '../../domain/entities/product';
import { IProductRepository } from '../../domain/repositories/product-repository';
import { NotFoundError, InvariantError } from '../../common/errors';

export class PrismaProductRepository implements IProductRepository {
    private static instance: PrismaProductRepository;
    private prisma: PrismaClient;

    private constructor() {
        this.prisma = new PrismaClient();
    }

    public static getInstance(): PrismaProductRepository {
        if (!PrismaProductRepository.instance) {
            PrismaProductRepository.instance = new PrismaProductRepository();
        }
        return PrismaProductRepository.instance;
    }

    async create(data: ICreateProductDto): Promise<IProduct> {
        try {
            return await this.prisma.product.create({
                data
            });
        } catch (error) {
            throw new InvariantError('Failed to create product');
        }
    }

    async findAll(): Promise<IProduct[]> {
        try {
            return await this.prisma.product.findMany({
                where: {
                    deletedAt: null
                }
            });
        } catch (error) {
            throw new InvariantError('Failed to fetch products');
        }
    }

    async findById(id: number): Promise<IProduct | null> {
        try {
            return await this.prisma.product.findFirst({
                where: {
                    id,
                    deletedAt: null
                }
            });
        } catch (error) {
            throw new InvariantError('Failed to fetch product');
        }
    }

    async update(id: number, data: IUpdateProductDto): Promise<IProduct> {
        try {
            const product = await this.findById(id);
            if (!product) {
                throw new NotFoundError('Product not found');
            }

            return await this.prisma.product.update({
                where: { id },
                data: {
                    ...data,
                    updatedAt: new Date()
                }
            });
        } catch (error) {
            if (error instanceof NotFoundError) {
                throw error;
            }
            throw new InvariantError('Failed to update product');
        }
    }

    async delete(id: number): Promise<void> {
        try {
            const product = await this.findById(id);
            if (!product) {
                throw new NotFoundError('Product not found');
            }

            await this.prisma.product.delete({
                where: { id }
            });
        } catch (error) {
            if (error instanceof NotFoundError) {
                throw error;
            }
            throw new InvariantError('Failed to delete product');
        }
    }

    async softDelete(id: number): Promise<void> {
        try {
            const product = await this.findById(id);
            if (!product) {
                throw new NotFoundError('Product not found');
            }

            await this.prisma.product.update({
                where: { id },
                data: {
                    deletedAt: new Date(),
                    updatedAt: new Date()
                }
            });
        } catch (error) {
            if (error instanceof NotFoundError) {
                throw error;
            }
            throw new InvariantError('Failed to soft delete product');
        }
    }
}
