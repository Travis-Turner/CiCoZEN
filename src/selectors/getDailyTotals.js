export default (meals) => {
    const mealObj = {
        calories: 0,
        carbohydrates: 0,
        protein: 0,
        fat: 0
    }
    meals.forEach((meal) => {
        mealObj.calories += Number(meal.calories);
        mealObj.carbohydrates += Number(meal.carbohydrates);
        mealObj.protein += Number(meal.protein);
        mealObj.fat += Number(meal.fat);
    });
    return mealObj;
};
