import Hapi from '@hapi/hapi';
import productRoutes from './presentation/api/products/routes';

const init = async () => {
    const server = Hapi.server({
        port: process.env.PORT || 3000,
        host: '0.0.0.0',
        routes: {
            cors: {
                origin: ['*']
            }
        }
    });

    server.route(productRoutes);
    server.route([
        {
          method: 'GET',
          path: '/',
          handler: () => {
            return { message: 'Hello from Hapi TypeScript on Vercel!' };
          },
        },
        {
          method: 'GET',
          path: '/hello/{name}',
          handler: (request) => {
            const name = request.params['name'];
            return { message: `Hello, ${name}` };
          },
        },
      ]);
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
