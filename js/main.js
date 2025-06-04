// list all the meal options
const meals = [
	"cold pizza and oat milk",
	"vegan nachos with too much hot sauce",
	"spoonfuls of sunflower butter",
	"leftover rice with sriracha",
	"microwave burrito but add pickles",
	"ramen with frozen corn",
	"bagel with hummus",
	"quesadilla with almost expired cheese",
	"chips",
];

// find the button and the paragraph where the meal goes
const button = document.querySelector("#generator");
const result = document.querySelector("#meal");

// give the button a job
button.addEventListener("click", () => {
	// when clicked, take the number of meals and randomize them
	const mealGenerator = meals[Math.floor(Math.random() * meals.length)];
	// put the random meal in the paragraph element
	result.innerHTML = mealGenerator;
});
