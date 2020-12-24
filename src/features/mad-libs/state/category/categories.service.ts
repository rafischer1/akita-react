import { categories } from "../../interfaces/category.interface";

export const categoriesServiceCategoryMap = (ids: number[]): string[] => {
  const tmp: string[] = [];
  ids.forEach((id) => {
    categories.forEach((c) => {
      if (c.id === id) {
        tmp.push(c.title);
      }
    });
  });
  return tmp;
};
