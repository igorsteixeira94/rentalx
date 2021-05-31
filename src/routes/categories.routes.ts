import { Router } from 'express';
import multer from 'multer';

import { createCategoryController } from '../modules/cars/useCases/createCategory';
import { importCategoryController } from '../modules/cars/useCases/importCategory';
import { listCategoriesController } from '../modules/cars/useCases/listCategories';

const categoriesRouter = Router();

const uploadFile = multer({
  dest: './tmp',
});

// Single responsibility Principle
categoriesRouter.post('/', (request, response) => {
  createCategoryController.handle(request, response);
});

categoriesRouter.get('/', (request, response) => {
  listCategoriesController.handle(request, response);
});

categoriesRouter.post(
  '/import',
  uploadFile.single('file'),
  (request, response) => {
    importCategoryController.handle(request, response);
  }
);

export { categoriesRouter };
