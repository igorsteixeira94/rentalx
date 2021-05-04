import { ICategoriesRepository } from '../repositories/ICategoryRepository';

interface IRequestDTO {
  name: string;
  description: string;
}

class CreateCategoryServices {
  constructor(private categoriesRepository: ICategoriesRepository) {} // Dependency inversion principle

  execute({ name, description }: IRequestDTO): void {
    const categoryAlreadyExists = this.categoriesRepository.findByName(name);

    if (categoryAlreadyExists) {
      throw new Error('Category Already Exists');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryServices };
