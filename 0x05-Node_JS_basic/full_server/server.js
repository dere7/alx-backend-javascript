import Express from 'express';
import router from './routes';

const app = Express();

app.use('/', router);
app.listen(1245);
export default app;
