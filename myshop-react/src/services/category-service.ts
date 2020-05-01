import { BaseService } from "./base-service";

export interface ICategory {
  id: number;
  name: string;
}

class CategoryService extends BaseService {
  public getCategories() {
    return this.get<ICategory[]>("/api/categories");
  }
}

export const categoryService = new CategoryService();
