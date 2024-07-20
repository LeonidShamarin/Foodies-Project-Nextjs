import classes from "./loading.module.css";

export default function MealsLoadingPage() {
  return <p className={classes.loading}>Loading...</p>;
}

//перейменували в loading-out, якщо просто loading то next ща замовчуванням огортає
//в suspense, а зараз додали просто іншу логіку в page
// <Suspense fallback={<p className={classes.loading}>Loading...</p>}>
/* <Meals />
</Suspense> */
