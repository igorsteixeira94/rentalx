import Category from '../../model/Category';
import { ICategoriesRepository } from '../../repositories/ICategoryRepository';

class ListCategoriesUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {} // Dependency inversion principle

  execute(): Category[] {
    return this.categoriesRepository.list();
  }
}

export { ListCategoriesUseCase };
