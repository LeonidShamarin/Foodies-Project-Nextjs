import Image from "next/image";
import { getMeal } from "@/lib/meals";
import classes from "./page.module.css";

import { notFound } from "next/navigation";

export default function MealDetailsPage({ params }) {
  // атрибут fill вказує, що зображення має заповнити контейнер, в якому воно знаходиться,
  // зберігаючи при цьому правильні пропорції. Це корисно для адаптивних дизайнів, де
  // зображення повинні масштабуватися відповідно до розмірів їхнього контейнера.
  const meal = getMeal(params.mealSlug);

  if (!meal) {
    notFound();
  }

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            by <a href={`mailto:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={classes.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={classes.instructions}
          dangerouslySetInnerHTML={{
            __html: meal.instructions,
          }}
        ></p>
      </main>
    </>
  );
}
