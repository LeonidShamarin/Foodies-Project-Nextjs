import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getMeals() {
  //Зробили штучну затримку часу Для відображення страв meals
  await new Promise((resolve) => setTimeout(resolve, 2000));
  //throw new Error('Loading meals failed');
  return db.prepare("SELECT * FROM meals").all();
}

export function getMeal(slug) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}
