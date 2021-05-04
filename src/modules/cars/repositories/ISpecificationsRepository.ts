import { Specification } from '../model/Specification';

interface ICreateSpecificationDTO {
  name: string;
  description: string;
}

// Liskov Substitition Principle.
/**
 * Não importa o tipo Repository(Postgress, MAriaDb,...,), porém todos devem implementar o ISpecification Repository
 */

interface ISpecificationsRepository {
  create({ name, description }: ICreateSpecificationDTO): void;
  findByName(name: string): Specification;
}

export { ISpecificationsRepository, ICreateSpecificationDTO };
