// Import
import express from 'express';
import { config } from './config.js';
import handlebars from 'express-handlebars';
import {initSocket} from './sockets.js';
import productsRouter from "./routes/products.routes.js"
import viewsRouter from './routes/views.routes.js';


const app = express();
const expressInstance = app.listen(config.PORT, () => {
    console.log(`Servidor activo en puerto ${config.PORT}`);
});
const socketServer = initSocket(expressInstance);
app.set('socketServer', socketServer);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.engine('handlebars', handlebars.engine());
app.set('views', `${config.DIRNAME}/views`);
app.set('view engine', 'handlebars');

app.use('/', viewsRouter);
app.use('/api/products', productsRouter)
app.use('/static', express.static(`${config.DIRNAME}/public`));
