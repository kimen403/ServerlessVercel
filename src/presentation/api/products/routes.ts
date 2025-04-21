import { ServerRoute } from '@hapi/hapi';
import { ProductHandlers } from './handler';
import { ProductValidators } from './validator';

const routes: ServerRoute[] = [
    {
        method: 'POST',
        path: '/products',
        handler: ProductHandlers.createProduct,
        options: {
            validate: ProductValidators.createSchema
        }
    },
    {
        method: 'GET',
        path: '/products',
        handler: ProductHandlers.getAllProducts
    },
    {
        method: 'GET',
        path: '/products/{id}',
        handler: ProductHandlers.getProductById,
        options: {
            validate: ProductValidators.getByIdSchema
        }
    },
    {
        method: 'PUT',
        path: '/products/{id}',
        handler: ProductHandlers.updateProduct,
        options: {
            validate: ProductValidators.updateSchema
        }
    },
    {
        method: 'DELETE',
        path: '/products/{id}',
        handler: ProductHandlers.deleteProduct,
        options: {
            validate: ProductValidators.deleteSchema
        }
    }
];

export default routes;
