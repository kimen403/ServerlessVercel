import { Request, ResponseToolkit } from '@hapi/hapi';
import { PrismaProductRepository } from '../../../infrastructure/repositories/prisma-product-repository';
import { CreateProductUseCase } from '../../../application/use-cases/products/create-product';
import { GetProductsUseCase } from '../../../application/use-cases/products/get-products';
import { UpdateProductUseCase } from '../../../application/use-cases/products/update-product';
import { DeleteProductUseCase } from '../../../application/use-cases/products/delete-product';
import { NotFoundError, ValidationError, BaseError } from '../../../common/errors';

const productRepository = PrismaProductRepository.getInstance();
const createProductUseCase = new CreateProductUseCase(productRepository);
const getProductsUseCase = new GetProductsUseCase(productRepository);
const updateProductUseCase = new UpdateProductUseCase(productRepository);
const deleteProductUseCase = new DeleteProductUseCase(productRepository);

export const ProductHandlers = {
    createProduct: async (request: Request, h: ResponseToolkit) => {
        try {
            const payload = request.payload as any;
            const product = await createProductUseCase.execute(payload);
            return h.response(product).code(201);
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return h.response(error.toJSON()).code(error.statusCode);
            }
            throw error;
        }
    },

    getAllProducts: async (_request: Request, h: ResponseToolkit) => {
        try {
            const products = await getProductsUseCase.executeGetAll();
            return h.response(products).code(200);
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return h.response(error.toJSON()).code(error.statusCode);
            }
            throw error;
        }
    },

    getProductById: async (request: Request, h: ResponseToolkit) => {
        try {
            const id = parseInt(request.params.id);
            const product = await getProductsUseCase.executeGetById(id);
            
            if (!product) {
                throw new NotFoundError('Product not found');
            }
            
            return h.response(product).code(200);
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return h.response(error.toJSON()).code(error.statusCode);
            }
            throw error;
        }
    },

    updateProduct: async (request: Request, h: ResponseToolkit) => {
        try {
            const id = parseInt(request.params.id);
            const payload = request.payload as any;
            
            if (!id) {
                throw new ValidationError('Invalid product ID');
            }

            const product = await updateProductUseCase.execute(id, payload);
            return h.response(product).code(200);
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return h.response(error.toJSON()).code(error.statusCode);
            }
            throw error;
        }
    },

    deleteProduct: async (request: Request, h: ResponseToolkit) => {
        try {
            const id = parseInt(request.params.id);
            const soft = request.query.soft !== 'false';
            
            if (!id) {
                throw new ValidationError('Invalid product ID');
            }

            await deleteProductUseCase.execute(id, soft);
            return h.response().code(204);
        } catch (error: unknown) {
            if (error instanceof BaseError) {
                return h.response(error.toJSON()).code(error.statusCode);
            }
            throw error;
        }
    }
};
