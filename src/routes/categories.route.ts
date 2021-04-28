import { Router } from 'express';

import { CategoryRepository } from '../repositories/CategoriesRepository';

const categoriesRouter = Router();
const categoriesRepository = new CategoryRepository();

categoriesRouter.post('/', (request, response) => {
  const { name, description } = request.body;

  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if (categoryAlreadyExists) {
    return response.status(400).json({ error: 'Category Already Exists' });
  }

  categoriesRepository.create({ name, description });

  return response.status(201).send();
});

categoriesRouter.get('/', (request, response) => {
  const categories = categoriesRepository.list();

  return response.json(categories);
});

export { categoriesRouter };
