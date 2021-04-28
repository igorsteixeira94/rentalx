import { Router } from 'express';

import { CategoryRepository } from '../repositories/CategoriesRepository';
import { CreateCategoryServices } from '../services/CreateCategoryServices';

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
