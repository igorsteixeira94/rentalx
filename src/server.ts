import express from 'express';

import { categoriesRouter } from './routes/categories.routes';
import { specificationsRouter } from './routes/specification.routes';

const app = express();

app.use(express.json());

app.use('/categories', categoriesRouter);
app.use('/specifications', specificationsRouter);

app.listen(3333, () => {
  console.log('Server is Running 🚀️🚀️');
});
