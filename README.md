# Sow's Rasoi 🍛

An Indian vegetarian recipe finder — type any ingredients and get authentic recipes with pictures.

## Files

| File | What it does |
|------|--------------|
| `index.html` | The webpage structure |
| `style.css` | All styling — colors, layout, fonts |
| `recipes.js` | Indian vegetarian recipe database |
| `app.js` | Search logic, autocomplete, save feature |
| `README.md` | This file |
| `.gitignore` | Tells Git what to ignore |

## How to Run

Just open `index.html` in any browser — no server or install needed.

## Features

- 🔍 Search by ingredients across 35+ recipes
- 🌅 Filter by meal type: Breakfast, Lunch, Snacks, Dinner
- ✨ Auto-suggestions while typing ingredients
- ✕ Clear button to reset search
- ★ Save favourite recipes (stored in localStorage)
- 📖 Expand any card to see full steps + pro tips
- 📱 Responsive — works on mobile and desktop

## Adding Recipes

Open `recipes.js` and add a new entry to the relevant category array (`breakfast`, `lunch`, `snacks`, or `dinner`) using this format:

```js
{
  name: "Recipe Name",
  category: "Category Label",
  description: "One line description.",
  prepTime: "10 mins",
  cookTime: "15 mins",
  servings: 2,
  image: "https://image-url.jpg",
  keywords: ["ingredient1", "ingredient2"],
  ingredients: ["quantity item", "quantity item"],
  steps: ["Step one.", "Step two."],
  tip: "Pro tip here."
}
```
