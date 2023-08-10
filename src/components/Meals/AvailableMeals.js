import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import classes from "./AvailableMeals.module.css";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Hari Pata",
    description: "irresistibly crispy and flavorful deep-fried pork leg",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Egg Sheeran",
    description:
      "poached egg served with bacon & muffin topped with our secret sauce",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Emily in Pares",
    description:
      "combination of tender beef and garlic fried rice, typically served with a flavorful broth on the side",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Coco Martea",
    description: "try our best milktea served with tapioca pearls",
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
