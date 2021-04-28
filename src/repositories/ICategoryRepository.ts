import Category from '../model/Category';

interface ICreateCategoryDTO {
  name: string;
  description: string;
}

// Liskov Substitition Principle.
/**
 * Não importa o tipo Repository(Postgress, MAriaDb,...,), porém todos devem implementar o ICategory Repository
 */

interface ICategoriesRepository {
  findByName(name: string): Category;
  list(): Category[];
  create({ name, description }: ICreateCategoryDTO): void;
}

export { ICategoriesRepository, ICreateCategoryDTO };
