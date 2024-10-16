// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    // Function to load recipe details based on hash
    function loadRecipe() {
      const recipeContent = document.getElementById('recipe-content');
      const hash = window.location.hash.substring(1); // Remove the '#' symbol
  
      // Define recipes
      const recipes = {
        'spaghetti-bolognese': {
          title: 'Spaghetti Bolognese',
          image: 'images/spaghetti.jpg',
          description: 'A classic Italian dish made with ground meat and tomato sauce.',
          ingredients: [
            '200g spaghetti',
            '100g ground beef',
            '1 onion, finely chopped',
            '2 cloves garlic, minced',
            '400g canned tomatoes',
            '2 tbsp tomato paste',
            '1 tsp dried oregano',
            'Salt and pepper to taste',
            '2 tbsp olive oil',
            'Grated Parmesan cheese for serving'
          ],
          instructions: [
            'Cook spaghetti according to package instructions.',
            'Heat olive oil in a pan over medium heat. Add onions and garlic, sauté until translucent.',
            'Add ground beef and cook until browned.',
            'Stir in tomato paste, canned tomatoes, and oregano. Simmer for 20 minutes.',
            'Season with salt and pepper.',
            'Serve sauce over spaghetti and top with grated Parmesan cheese.'
          ]
        },
        'chocolate-cake': {
          title: 'Chocolate Cake',
          image: 'images/chocolate-cake.jpg',
          description: 'Rich and moist chocolate cake perfect for any occasion.',
          ingredients: [
            '1 and 3/4 cups all-purpose flour',
            '3/4 cup cocoa powder',
            '2 cups sugar',
            '1 and 1/2 tsp baking powder',
            '1 and 1/2 tsp baking soda',
            '1 tsp salt',
            '2 eggs',
            '1 cup whole milk',
            '1/2 cup vegetable oil',
            '2 tsp vanilla extract',
            '1 cup boiling water'
          ],
          instructions: [
            'Preheat oven to 350°F (175°C). Grease and flour two 9-inch cake pans.',
            'In a large bowl, combine flour, cocoa powder, sugar, baking powder, baking soda, and salt.',
            'Add eggs, milk, oil, and vanilla. Beat on medium speed for 2 minutes.',
            'Stir in boiling water (batter will be thin).',
            'Pour batter into prepared pans.',
            'Bake for 30-35 minutes or until a toothpick comes out clean.',
            'Cool in pans for 10 minutes, then remove to wire racks to cool completely.'
          ]
        },
        'caesar-salad': {
          title: 'Caesar Salad',
          image: 'images/salad.jpg',
          description: 'Crisp romaine lettuce, creamy dressing, and crunchy croutons.',
          ingredients: [
            '2 heads romaine lettuce, chopped',
            '1 cup croutons',
            '1/2 cup grated Parmesan cheese',
            'For the Dressing:',
            '1/2 cup mayonnaise',
            '2 cloves garlic, minced',
            '2 tbsp lemon juice',
            '1 tsp Dijon mustard',
            '2 anchovy fillets, minced (optional)',
            'Salt and pepper to taste'
          ],
          instructions: [
            'In a large bowl, combine romaine lettuce, croutons, and Parmesan cheese.',
            'In a separate bowl, whisk together mayonnaise, garlic, lemon juice, Dijon mustard, and anchovies.',
            'Season dressing with salt and pepper.',
            'Pour dressing over the salad and toss to combine.',
            'Serve immediately.'
          ]
        },
        'pancakes': {
          title: 'Pancakes',
          image: 'images/pancakes.jpg',
          description: 'Fluffy pancakes served with syrup and fresh fruits.',
          ingredients: [
            '1 and 1/2 cups all-purpose flour',
            '3 and 1/2 tsp baking powder',
            '1 tsp salt',
            '1 tbsp white sugar',
            '1 and 1/4 cups milk',
            '1 egg',
            '3 tbsp melted butter'
          ],
          instructions: [
            'In a large bowl, sift together the flour, baking powder, salt, and sugar.',
            'Make a well in the center and pour in the milk, egg, and melted butter; mix until smooth.',
            'Heat a lightly oiled griddle or frying pan over medium-high heat.',
            'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake.',
            'Brown on both sides and serve hot with syrup and fruits.'
          ]
        },
        'beef-stew': {
          title: 'Beef Stew',
          image: 'images/beef-stew.jpg',
          description: 'Hearty and flavorful beef stew with vegetables and herbs.',
          ingredients: [
            '500g beef chuck, cubed',
            '2 onions, chopped',
            '3 carrots, sliced',
            '3 potatoes, cubed',
            '2 celery stalks, chopped',
            '4 cups beef broth',
            '2 tbsp tomato paste',
            '1 tsp dried thyme',
            '1 tsp dried rosemary',
            '2 cloves garlic, minced',
            'Salt and pepper to taste',
            '3 tbsp flour',
            '2 tbsp vegetable oil'
          ],
          instructions: [
            'Season beef with salt and pepper, then coat with flour.',
            'Heat oil in a large pot over medium-high heat. Brown beef on all sides.',
            'Add onions and garlic, sauté until softened.',
            'Stir in tomato paste, thyme, and rosemary.',
            'Pour in beef broth, bring to a boil, then reduce heat to low.',
            'Cover and simmer for 1.5 hours until beef is tender.',
            'Add carrots, potatoes, and celery. Cook for another 30 minutes.',
            'Adjust seasoning with salt and pepper before serving.'
          ]
        },
        'rice': {
          title: 'Rice',
          image: 'images/rice.jpg',
          description: 'Perfectly cooked fluffy rice to complement any meal.',
          ingredients: [
            '1 cup long-grain white rice',
            '2 cups water',
            '1/2 tsp salt',
            '1 tbsp butter or oil (optional)'
          ],
          instructions: [
            'Rinse the rice under cold water until the water runs clear.',
            'In a medium saucepan, bring water to a boil.',
            'Add salt and butter or oil if using.',
            'Stir in the rice, reduce heat to low, and cover.',
            'Simmer for 18 minutes without lifting the lid.',
            'Remove from heat and let it sit, covered, for 5 minutes.',
            'Fluff with a fork before serving.'
          ]
        },
        'grilled-cheese-sandwiches': {
          title: 'Grilled Cheese Sandwiches',
          image: 'images/grilled-cheese-sandwiches.jpg',
          description: 'Golden and crispy grilled cheese sandwiches with melted cheese.',
          ingredients: [
            '4 slices of bread',
            '4 slices of cheese (Cheddar, American, or your choice)',
            '2 tbsp butter'
          ],
          instructions: [
            'Heat a skillet over medium heat.',
            'Butter one side of each bread slice.',
            'Place two slices, buttered side down, on the skillet.',
            'Add cheese slices on top of the bread.',
            'Cover with the remaining bread slices, buttered side up.',
            'Grill until golden brown, then flip and grill the other side until cheese is melted.',
            'Remove from skillet, slice, and serve hot.'
          ]
        },
        'fried-chicken': {
          title: 'Fried Chicken',
          image: 'images/fried-chicken.jpg',
          description: 'Crispy and juicy fried chicken that\'s finger-licking good.',
          ingredients: [
            '8 chicken pieces (drumsticks, thighs, breasts)',
            '2 cups buttermilk',
            '2 cups all-purpose flour',
            '1 tsp paprika',
            '1 tsp garlic powder',
            '1 tsp onion powder',
            '1 tsp salt',
            '1/2 tsp black pepper',
            'Vegetable oil for frying'
          ],
          instructions: [
            'Marinate chicken pieces in buttermilk for at least 4 hours or overnight in the refrigerator.',
            'In a large bowl, mix flour, paprika, garlic powder, onion powder, salt, and pepper.',
            'Heat vegetable oil in a deep skillet or fryer to 350°F (175°C).',
            'Remove chicken from buttermilk, allowing excess to drip off.',
            'Dredge each piece in the seasoned flour mixture, ensuring an even coating.',
            'Fry the chicken in batches for 15-18 minutes, turning occasionally, until golden brown and cooked through.',
            'Drain on paper towels and serve hot.'
          ]
        },
        'burger': {
          title: 'Burger',
          image: 'images/burger.jpg',
          description: 'Delicious and juicy burgers with all the fixings.',
          ingredients: [
            '500g ground beef',
            '1 small onion, finely chopped',
            '2 cloves garlic, minced',
            '1 egg',
            '1/4 cup breadcrumbs',
            'Salt and pepper to taste',
            '4 burger buns',
            'Lettuce leaves',
            'Tomato slices',
            'Cheddar cheese slices',
            'Ketchup and mustard'
          ],
          instructions: [
            'In a large bowl, combine ground beef, chopped onion, minced garlic, egg, breadcrumbs, salt, and pepper. Mix until just combined.',
            'Form the mixture into 4 equal-sized patties.',
            'Preheat a grill or skillet over medium-high heat.',
            'Cook the patties for about 4-5 minutes on each side for medium doneness. During the last minute, place a slice of cheese on each patty to melt.',
            'Toast the burger buns lightly on the grill or skillet.',
            'Assemble the burgers by placing lettuce, tomato slices, and the cooked patty on each bun.',
            'Add ketchup and mustard as desired and serve immediately.'
          ]
        },
        'pizza': {
          title: 'Pizza',
          image: 'images/pizza.jpg',
          description: 'Classic homemade pizza with your favorite toppings.',
          ingredients: [
            '1 pizza dough (store-bought or homemade)',
            '1/2 cup pizza sauce',
            '2 cups shredded mozzarella cheese',
            'Your choice of toppings (pepperoni, mushrooms, bell peppers, onions, olives, etc.)',
            '1 tbsp olive oil',
            '1 tsp dried oregano'
          ],
          instructions: [
            'Preheat your oven to 475°F (245°C). If using a pizza stone, place it in the oven to heat.',
            'Roll out the pizza dough on a floured surface to your desired thickness.',
            'Transfer the dough to a piece of parchment paper for easy transfer to the oven.',
            'Spread pizza sauce evenly over the dough, leaving a small border for the crust.',
            'Sprinkle shredded mozzarella cheese over the sauce.',
            'Add your favorite toppings evenly across the pizza.',
            'Drizzle olive oil over the toppings and sprinkle with dried oregano.',
            'Transfer the pizza (with parchment paper) onto the preheated pizza stone or a baking sheet.',
            'Bake for 12-15 minutes or until the crust is golden and the cheese is bubbly and slightly browned.',
            'Remove from the oven, let it cool for a few minutes, slice, and serve hot.'
          ]
        }
      };
  
      // Check if the current page is recipes.html
      if (window.location.pathname.endsWith('recipes.html')) {
        if (!hash) {
          // If no hash is present, display a default message or list of recipes
          recipeContent.innerHTML = `
            <h2>Select a recipe to view its details.</h2>
            <p>Go back to the <a href="index.html">Home</a> page to choose a recipe.</p>
          `;
          return;
        }
  
        const recipe = recipes[hash];
  
        if (recipe) {
          // Create HTML content for the recipe
          recipeContent.innerHTML = `
            <h2>${recipe.title}</h2>
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image" loading="lazy">
            <p>${recipe.description}</p>
            <h3>Ingredients</h3>
            <ul>
              ${recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('')}
            </ul>
            <h3>Instructions</h3>
            <ol>
              ${recipe.instructions.map(step => `<li>${step}</li>`).join('')}
            </ol>
            <a href="index.html" class="btn">Back to Home</a>
          `;
        } else {
          // If recipe not found, display an error message
          recipeContent.innerHTML = `
            <h2>Recipe Not Found</h2>
            <p>Sorry, the recipe you're looking for doesn't exist.</p>
            <a href="index.html" class="btn">Back to Home</a>
          `;
        }
      }
    }
  
    loadRecipe();
  });
  // scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('contact-form');
    const responseMessage = document.getElementById('response-message');

    form.addEventListener('submit', async (event) => {
        event.preventDefault(); // Prevent the default form submission

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                responseMessage.textContent = 'Message sent successfully!';
                form.reset(); // Reset the form
            } else {
                responseMessage.textContent = 'Failed to send message. Please try again later.';
            }
        } catch (error) {
            responseMessage.textContent = 'An error occurred. Please try again later.';
            console.error('Error:', error);
        }
    });
});

  