const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

async function main() {
	const userIds = ["66722eaab0ebdcee2cec31e0", "6680817d506d87610b808fb9"];

	const recipes = [
		{
			title: "Spaghetti Carbonara",
			oneline: "A classic Italian pasta dish with creamy sauce.",
			description:
				"This delicious recipe for Spaghetti Carbonara is perfect for a quick yet hearty meal. It combines eggs, cheese, pancetta, and pepper to create a creamy and flavorful sauce.",
			steps: [
				"Cook spaghetti according to package instructions.",
				"In a separate pan, cook pancetta until crispy.",
				"Beat eggs and mix with grated cheese and pepper.",
				"Combine pasta, pancetta, and egg mixture, and serve immediately.",
			],
			ingredients: [
				{ name: "Spaghetti", amount: "200g" },
				{ name: "Pancetta", amount: "100g" },
				{ name: "Eggs", amount: "2 large" },
				{ name: "Parmesan cheese", amount: "50g" },
				{ name: "Black pepper", amount: "to taste" },
			],
			extraInfo: "Use freshly grated Parmesan for the best flavor.",
			servingSize: 2,
			expectedTime: "20 minutes",
			category: "Main Course",
			imageUrl: "",
			likes: [],
			saved: [],
			userId: userIds[0],
		},
		{
			title: "Chicken Alfredo",
			oneline: "Creamy pasta with chicken and Alfredo sauce.",
			description:
				"Chicken Alfredo is a rich and creamy pasta dish that combines tender chicken with a luxurious Alfredo sauce. It's a comforting meal that's sure to satisfy.",
			steps: [
				"Cook pasta according to package instructions.",
				"In a pan, cook chicken until golden brown.",
				"Prepare Alfredo sauce by melting butter and adding cream and cheese.",
				"Mix pasta, chicken, and sauce, and serve hot.",
			],
			ingredients: [
				{ name: "Pasta", amount: "200g" },
				{ name: "Chicken breast", amount: "200g" },
				{ name: "Heavy cream", amount: "100ml" },
				{ name: "Butter", amount: "50g" },
				{ name: "Parmesan cheese", amount: "50g" },
			],
			extraInfo: "Add a pinch of nutmeg for extra flavor.",
			servingSize: 2,
			expectedTime: "30 minutes",
			category: "Main Course",
			imageUrl: "",
			likes: [],
			saved: [],
			userId: userIds[1],
		},
		{
			title: "Vegetable Stir Fry",
			oneline: "Quick and healthy vegetable stir fry.",
			description:
				"This Vegetable Stir Fry is a quick and easy dish that's packed with flavor and nutrition. It's perfect for a busy weeknight meal and can be customized with your favorite vegetables.",
			steps: [
				"Heat oil in a pan and add garlic and ginger.",
				"Add mixed vegetables and stir fry until tender.",
				"Add soy sauce and sesame oil, and serve with rice.",
			],
			ingredients: [
				{ name: "Mixed vegetables", amount: "300g" },
				{ name: "Garlic", amount: "2 cloves" },
				{ name: "Ginger", amount: "1 inch" },
				{ name: "Soy sauce", amount: "2 tbsp" },
				{ name: "Sesame oil", amount: "1 tbsp" },
			],
			extraInfo:
				"You can use any vegetables you like, such as bell peppers, broccoli, and carrots.",
			servingSize: 2,
			expectedTime: "15 minutes",
			category: "Main Course",
			imageUrl: "",
			likes: [],
			saved: [],
			userId: userIds[0],
		},
		{
			title: "Beef Tacos",
			oneline: "Flavorful beef tacos with all the fixings.",
			description:
				"Beef Tacos are a fun and flavorful meal that everyone will love. They're easy to make and can be customized with your favorite toppings.",
			steps: [
				"Cook ground beef with taco seasoning.",
				"Warm tortillas in a pan.",
				"Assemble tacos with beef, cheese, lettuce, and salsa.",
			],
			ingredients: [
				{ name: "Ground beef", amount: "200g" },
				{ name: "Taco seasoning", amount: "1 packet" },
				{ name: "Tortillas", amount: "4" },
				{ name: "Cheddar cheese", amount: "50g" },
				{ name: "Lettuce", amount: "1 cup" },
			],
			extraInfo: "Serve with lime wedges for a burst of freshness.",
			servingSize: 2,
			expectedTime: "20 minutes",
			category: "Main Course",
			imageUrl: "",
			likes: [],
			saved: [],
			userId: userIds[1],
		},
		{
			title: "Margherita Pizza",
			oneline: "Classic pizza with tomato, mozzarella, and basil.",
			description:
				"Margherita Pizza is a simple yet delicious dish that showcases the flavors of fresh tomatoes, mozzarella, and basil. It's a great way to enjoy a homemade pizza night.",
			steps: [
				"Roll out pizza dough and spread with tomato sauce.",
				"Top with mozzarella slices and fresh basil.",
				"Bake in a preheated oven at 220°C for 15 minutes.",
			],
			ingredients: [
				{ name: "Pizza dough", amount: "1 ball" },
				{ name: "Tomato sauce", amount: "100g" },
				{ name: "Mozzarella cheese", amount: "100g" },
				{ name: "Fresh basil", amount: "a handful" },
			],
			extraInfo: "Use a pizza stone for a crispier crust.",
			servingSize: 2,
			expectedTime: "30 minutes",
			category: "Main Course",
			imageUrl: "",
			likes: [],
			saved: [],
			userId: userIds[0],
		},
		// Add more recipes as needed...
	];

	// Generate more recipes by copying and modifying the base ones
	for (let i = 6; i <= 30; i++) {
		recipes.push({
			title: `Delicious Recipe ${i}`,
			oneline: `Tasty and easy to make recipe number ${i}.`,
			description: `This is the description for Delicious Recipe ${i}. It's a perfect dish for any occasion.`,
			steps: [
				`Step 1 for Delicious Recipe ${i}.`,
				`Step 2 for Delicious Recipe ${i}.`,
				`Step 3 for Delicious Recipe ${i}.`,
			],
			ingredients: [
				{ name: `Ingredient 1 for Recipe ${i}`, amount: "100g" },
				{ name: `Ingredient 2 for Recipe ${i}`, amount: "2 tbsp" },
			],
			extraInfo: `Extra information about Delicious Recipe ${i}.`,
			servingSize: Math.floor(Math.random() * 10) + 1,
			expectedTime: `${Math.floor(Math.random() * 60) + 10} minutes`,
			category: "Main Course",
			imageUrl: "",
			likes: [],
			saved: [],
			userId: userIds[i % 2],
		});
	}

	// Insert recipes into the database
	for (const recipe of recipes) {
		await prisma.recipe.create({
			data: {
				title: recipe.title,
				oneline: recipe.oneline,
				description: recipe.description,
				steps: recipe.steps,
				ingredients: {
					create: recipe.ingredients,
				},
				extraInfo: recipe.extraInfo,
				servingSize: recipe.servingSize,
				expectedTime: recipe.expectedTime,
				category: recipe.category,
				imageUrl: recipe.imageUrl,
				userId: recipe.userId,
			},
		});
	}

	console.log("Inserted 30 dummy recipes successfully");
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
