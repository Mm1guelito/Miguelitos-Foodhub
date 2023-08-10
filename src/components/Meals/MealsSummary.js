import classes from "./MealsSummary.module.css";

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Food at Your Doorstep</h2>
      <p>
        Choose your favorite meal from our broad selection of available meals
        and enjoy a delicious lunch or dinner at home.
      </p>
      <p>
        With just a few clicks or a phone call, you can experience the pleasure
        of indulging in a delectable meal without the hassle of preparation or
        dining out. The convenience of delicious food delivered to you ensures
        that you can enjoy a delightful culinary experience at any time.
      </p>
    </section>
  );
};

export default MealsSummary;
