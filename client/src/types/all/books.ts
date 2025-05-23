// ? 21 main categories.
// ? 3 subcategories for each category
// ? 21 * 3 = 63

import { BookStoreType, CatBookStore } from "./bookStore";
import { AssetCloudType } from "./images";

export const subcategories = {
  classics: ["greek & roman", "victorian", "modernist"],
  philosophy: ["ethics", "metaphysics", "existentialism"],
  psychology: ["cognitive", "developmental", "clinical"],
  history: ["ancient", "medieval", "20th century"],
  comics: ["superhero", "graphic novels", "anthology"],
  manga: ["shonen", "seinen", "shojo"],

  it: ["programming", "cybersecurity", "networking"],
  politics: ["theory", "elections", "geopolitics"],
  economics: ["microeconomics", "macroeconomics", "behavioral"],
  science: ["physics", "biology", "astronomy"],
  math: ["algebra", "statistics", "geometry"],
  languages: ["english", "spanish", "japanese"],

  crime: ["detective", "thriller", "true crime"],
  sport: ["football", "martial arts", "athletics"],
  children: ["picture books", "fairy tales", "early readers"],
  fantasy: ["high fantasy", "urban fantasy", "dark fantasy"],
  horror: ["gothic", "paranormal", "psychological"],
  biography: ["historical", "political", "artists"],

  cooking: ["baking", "vegetarian", "international cuisine"],
  travel: ["europe", "backpacking", "cultural guides"],
  romance: ["contemporary", "historical", "paranormal"],
};

export const categoriesBooks: string[] = Object.values(subcategories).flat();

export type BookType = {
  id: string;
  bookStoreID: string;
  title: string;
  author: string;
  year: number;
  categories: string[];
  images: AssetCloudType[] | null;
  description: string | null;
  qty: number;
  price: number;

  mainCategories?: CatBookStore[];

  avgRating?: number;
  reviews__0__1?: string;
  reviews__1_1__2?: string;
  reviews__2_1__3?: string;
  reviews__3_1__4?: string;
  reviews__4_1__5?: string;

  store?: BookStoreType;
};
