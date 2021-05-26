import { ISpecificationsRepository } from '../../repositories/ISpecificationsRepository';

interface IRequestDTO {
  name: string;
  description: string;
}

class CreateSpecificationUseCase {
  constructor(private specificationsRepository: ISpecificationsRepository) {} // Dependency inversion principle

  execute({ name, description }: IRequestDTO): void {
    const specificationAlreadyExists = this.specificationsRepository.findByName(
      name
    );

    if (specificationAlreadyExists) {
      throw new Error('Specification Already Exists');
    }

    this.specificationsRepository.create({ name, description });
  }
}

export { CreateSpecificationUseCase };
