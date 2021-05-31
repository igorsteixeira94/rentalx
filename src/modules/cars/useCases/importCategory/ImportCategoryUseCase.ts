import cvsParse from 'csv-parser';
import fs from 'fs';

import { ICategoriesRepository } from '../../repositories/ICategoryRepository';

interface IRequestDTO {
  file: Express.Multer.File;
}

interface IImportCategories {
  name: string;
  description: string;
}

class ImportCategoryUseCase {
  constructor(private categoryRepository: ICategoriesRepository) {}

  loadCategories({ file }: IRequestDTO): Promise<IImportCategories[]> {
    return new Promise((resolve, reject) => {
      const stream = fs.createReadStream(file.path);
      const categories: IImportCategories[] = [];

      const parseFile = cvsParse({ headers: false });

      stream.pipe(parseFile);

      parseFile
        .on('data', async (line) => {
          const [name, description] = line;
          categories.push({ name, description });
        })
        .on('end', () => {
          resolve(categories);
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }

  async execute({ file }: IRequestDTO): Promise<void> {
    const categories = await this.loadCategories({ file });

    categories.map(async (category) => {
      const { name, description } = category;

      const existsCategory = this.categoryRepository.findByName(name);

      if (!existsCategory) {
        this.categoryRepository.create({ name, description });
      }
    });
  }
}

export { ImportCategoryUseCase };
