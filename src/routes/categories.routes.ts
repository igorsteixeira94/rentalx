import { Router } from 'express';

import { CategoryRepository } from '../modules/cars/repositories/CategoriesRepository';
import { CreateCategoryServices } from '../modules/cars/services/CreateCategoryServices';

const categoriesRouter = Router();
const categoriesRepository = new CategoryRepository();

// Single responsibility Principle
categoriesRouter.post('/', (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryServices(
    categoriesRepository
  );

  createCategoryService.execute({ name, description });

  return response.status(201).send();
});

categoriesRouter.get('/', (request, response) => {
  const categories = categoriesRepository.list();

  return response.json(categories);
});

export { categoriesRouter };
