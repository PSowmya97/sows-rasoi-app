// ============================================================
// RECIPE DATABASE — Sow's Rasoi — Indian Vegetarian Recipes
// ============================================================
const DB = {
  breakfast: [
    {
      name:"Aloo Poha", category:"Central Indian",
      description:"Light flattened rice tempered with mustard, curry leaves and golden onions.",
      prepTime:"10 mins", cookTime:"10 mins", servings:2,
      image:"https://www.vegrecipesofindia.com/wp-content/uploads/2010/07/Aloo-Poha-Recipe-Batata-Poha-1.jpg",
      keywords:["poha","flattened rice","rice","onion","potato","groundnut","peanut","mustard"],
      ingredients:["2 cups poha (flattened rice)","1 onion chopped","1 potato diced","1 tsp mustard seeds","8 curry leaves","2 green chillies","½ tsp turmeric","Salt to taste","2 tbsp oil","Lemon & coriander to serve"],
      steps:["Rinse poha under water for 30 seconds. Drain and set aside.","Heat oil, add mustard seeds. Wait for them to splutter.","Add curry leaves, green chillies, onion. Sauté until golden.","Add potato, turmeric, salt. Cover and cook 5 mins.","Add soaked poha and mix gently. Cook 2 mins on low.","Squeeze lemon, garnish coriander. Serve hot."],
      tip:"Rinse poha just once — over-soaking makes it mushy."
    },
    {
      name:"Upma", category:"South Indian",
      description:"Savoury semolina porridge tempered with dal, curry leaves and green chillies.",
      prepTime:"5 mins", cookTime:"15 mins", servings:2,
      image:"https://i0.wp.com/spicezone2.wpengine.com/wp-content/uploads/2017/06/Rava-Upma.jpg?ssl=1",
      keywords:["rava","semolina","sooji","upma","onion","groundnut","peanut"],
      ingredients:["1 cup rava (semolina)","1 onion chopped","1 tsp mustard seeds","1 tsp chana dal","8 curry leaves","2 green chillies","2.5 cups water","Salt to taste","2 tbsp oil"],
      steps:["Dry roast rava 3-4 mins until golden and fragrant. Set aside.","Heat oil. Add mustard, chana dal — let splutter.","Add curry leaves, chillies, onion. Sauté 3 mins.","Add water and salt. Bring to boil.","Slowly pour rava while stirring. Avoid lumps.","Cover on low heat 3 mins. Serve hot."],
      tip:"Always add rava to boiling water — this prevents lumps."
    },
    {
      name:"Groundnut Poha", category:"Maharashtra Style",
      description:"Classic poha tossed with crispy fried groundnuts — nutty, crunchy and satisfying.",
      prepTime:"10 mins", cookTime:"10 mins", servings:2,
      image:"https://vegecravings.com/wp-content/uploads/2016/12/Aloo-Poha-Recipe-Step-By-Step-Instructions-scaled.jpg",
      keywords:["groundnut","peanut","poha","flattened rice","onion"],
      ingredients:["2 cups poha","4 tbsp groundnuts","1 onion chopped","1 tsp mustard seeds","8 curry leaves","2 green chillies","¼ tsp turmeric","½ tsp sugar","Salt to taste","2 tbsp oil","Lemon & coriander"],
      steps:["Rinse poha gently, drain, rest 5 mins.","Fry groundnuts in oil until golden. Remove and set aside.","Add mustard seeds in same oil. When splutter, add curry leaves and chillies.","Add onion, cook until translucent.","Add turmeric, salt, sugar. Mix.","Add poha and fried groundnuts. Toss gently. Cook 2 mins. Squeeze lemon and serve."],
      tip:"Sugar balances the lemon sourness — this is authentic Maharashtra style."
    },
    {
      name:"Groundnut Ladoo", category:"Sweet Breakfast",
      description:"Roasted peanuts bound with melted jaggery into sweet round energy balls.",
      prepTime:"10 mins", cookTime:"15 mins", servings:3,
      image:"https://vaya.in/recipes/wp-content/uploads/2018/10/Peanut-ladoo-recipe.jpg",
      keywords:["groundnut","peanut","jaggery","sugar","ladoo","sweet"],
      ingredients:["1 cup groundnuts","½ cup jaggery grated","¼ tsp cardamom powder","1 tbsp ghee"],
      steps:["Dry roast groundnuts on medium 8-10 mins until golden. Cool completely.","Rub to remove skins.","Coarsely grind — keep some texture.","Melt jaggery with 2 tbsp water until sticky.","Mix in ground peanuts and cardamom off heat.","Grease hands with ghee. Shape into ladoos while warm."],
      tip:"Work fast — the mixture hardens quickly as it cools!"
    },
    {
      name:"Banana Pancake", category:"Quick Breakfast",
      description:"Soft wheat pancakes made with ripe bananas — naturally sweet, no sugar needed.",
      prepTime:"5 mins", cookTime:"10 mins", servings:2,
      image:"https://images.unsplash.com/photo-1528207776546-365bb710ee93?w=600&q=80",
      keywords:["banana","wheat flour","atta","jaggery","sugar","pancake"],
      ingredients:["2 ripe bananas","1 cup wheat flour","2 tbsp jaggery or sugar","¼ tsp cardamom","Pinch of salt","Water as needed","Ghee for cooking"],
      steps:["Mash bananas until smooth.","Add flour, jaggery, cardamom, salt. Mix well.","Add water slowly — thick pourable batter.","Heat tawa, grease with ghee.","Pour ladle of batter, spread in circle. Cook medium heat.","Flip when bubbles appear and bottom is golden. Serve warm."],
      tip:"Riper bananas = sweeter pancakes — no extra sugar needed!"
    },
    {
      name:"Moong Dal Chilla", category:"North Indian",
      description:"Crispy protein-rich savoury crepes made from soaked green moong dal.",
      prepTime:"15 mins", cookTime:"15 mins", servings:2,
      image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2022/07/moong-dal-chilla.jpg",
      keywords:["moong dal","green moong","dal","onion","green chilli","chilla"],
      ingredients:["1 cup moong dal soaked 2 hrs","1 onion finely chopped","2 green chillies","½ inch ginger grated","¼ tsp cumin seeds","Salt to taste","Oil for cooking"],
      steps:["Drain soaked dal. Blend with little water to smooth batter.","Add onion, chillies, ginger, cumin, salt.","Heat flat pan, grease lightly.","Pour ladle of batter, spread thin like dosa.","Cook until edges golden. Flip.","Cook other side. Serve with chutney or curd."],
      tip:"Batter should be thick enough to spread but not runny."
    },
    {
      name:"Bread Upma", category:"Quick Breakfast",
      description:"Leftover bread tossed with spices and vegetables — ready in 10 minutes flat.",
      prepTime:"5 mins", cookTime:"10 mins", servings:2,
      image:"https://www.vegrecipesofindia.com/wp-content/uploads/2015/11/bread-upma-recipe-1.jpg",
      keywords:["bread","onion","tomato","green chilli","bread upma"],
      ingredients:["4 bread slices cubed","1 onion chopped","1 tomato chopped","2 green chillies","1 tsp mustard seeds","8 curry leaves","¼ tsp turmeric","Salt to taste","2 tbsp oil"],
      steps:["Lightly toast bread cubes in dry pan. Set aside.","Heat oil, add mustard seeds. Splutter.","Add curry leaves, chillies, onion. Sauté 2 mins.","Add tomato, turmeric, salt. Cook until soft.","Add bread cubes. Toss to coat with masala.","Cook 2 mins and serve."],
      tip:"Slightly stale bread works better — fresh bread gets too soggy."
    },
    {
      name:"Idly", category:"South Indian",
      description:"Soft, fluffy steamed rice cakes — the lightest and most wholesome South Indian breakfast.",
      prepTime:"10 mins", cookTime:"15 mins", servings:4,
      image:"https://images.unsplash.com/photo-1632104667384-06f58cb7ad44?w=600&q=80",
      keywords:["idli","idly","rice","urad dal","sambar","chutney","steamed"],
      ingredients:["2 cups idli batter (fermented rice & urad dal)","Salt to taste","Oil to grease idli moulds","Sambar and coconut chutney to serve"],
      steps:["Add salt to fermented idli batter. Mix gently — don't overbeat.","Grease idli moulds with oil or cooking spray.","Pour batter into moulds — fill ¾ full.","Place in idli steamer or pressure cooker without weight.","Steam on medium heat 10-12 mins until toothpick comes out clean.","Rest 2 mins. Scoop out gently with wet spoon. Serve hot with sambar and chutney."],
      tip:"Don't overfill the moulds — idlis expand as they steam."
    },
    {
      name:"Dosa", category:"South Indian",
      description:"Paper-thin crispy fermented rice and lentil crepe — the king of South Indian breakfasts.",
      prepTime:"10 mins", cookTime:"20 mins", servings:3,
      image:"https://i.ytimg.com/vi/Mdp4-6qGWf0/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLBtIUABPnk0b6NtaH0seuH6jJdiXw",
      keywords:["dosa","rice","urad dal","fermented","crispy","sambar","coconut chutney"],
      ingredients:["2 cups dosa batter (fermented)","Salt to taste","Oil or ghee for cooking","Sambar and coconut chutney to serve"],
      steps:["Add salt to batter. Mix and check consistency — should spread easily.","Heat cast iron or non-stick tawa on medium-high until very hot.","Sprinkle a little water — it should sizzle and evaporate immediately.","Pour ladle of batter at centre. Spiral outward to thin circle.","Drizzle oil or ghee on edges. Cook 2-3 mins until edges lift.","Fold and serve hot with coconut chutney and sambar."],
      tip:"The tawa must be very hot before pouring — this is the secret to crispy dosa."
    },
    {
      name:"Puri", category:"North Indian",
      description:"Golden deep-fried puffed wheat discs — festive, fluffy and irresistible.",
      prepTime:"20 mins", cookTime:"15 mins", servings:4,
      image:"https://images.unsplash.com/photo-1643892467625-65df6a500524?w=600&q=80",
      keywords:["puri","wheat flour","atta","deep fried","aloo sabzi","bhaji"],
      ingredients:["2 cups whole wheat flour (atta)","½ tsp salt","½ tsp ajwain (carom seeds)","1 tsp oil","Water to knead","Oil for deep frying"],
      steps:["Mix flour, salt, ajwain. Add oil and rub into flour.","Add water little by little — knead to a stiff, smooth dough.","Rest 15 mins. Divide into small balls.","Roll each ball into small circles (~4 inches), applying light oil.","Heat oil for deep frying on medium-high.","Slide puri in. Press gently with ladle — it puffs up. Flip after 20 secs. Drain and serve hot."],
      tip:"Stiff dough = puffy puris. Soft dough makes them oily and flat."
    },
    {
      name:"Pongal", category:"South Indian",
      description:"Comforting rice and moong dal porridge tempered with ghee, pepper and cumin — soul food of Tamil Nadu.",
      prepTime:"5 mins", cookTime:"25 mins", servings:3,
      image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/01/pongal-ven-pongal-500x500.jpg",
      keywords:["pongal","ven pongal","rice","moong dal","ghee","pepper","cumin","South Indian"],
      ingredients:["1 cup raw rice","½ cup split yellow moong dal","1 tbsp ghee","1 tsp cumin seeds","1 tsp whole black pepper","2 green chillies slit","1 inch ginger grated","10 curry leaves","½ tsp turmeric","Salt to taste","2.5 cups water","Cashews optional"],
      steps:["Wash rice and moong dal together. Soak 10 mins.","Pressure cook with water, turmeric and salt — 4 whistles. Mash lightly.","Heat ghee in a pan. Fry cashews until golden. Set aside.","Add cumin, pepper, curry leaves, chillies, ginger to ghee. Sauté 1 min.","Pour tadka over mashed pongal. Mix well.","Garnish with fried cashews. Serve hot with coconut chutney and sambar."],
      tip:"Don't skimp on the ghee — it is what makes pongal taste authentic and aromatic."
    },
    {
      name:"Vada", category:"South Indian",
      description:"Crispy-outside, fluffy-inside urad dal fritters shaped like donuts — the perfect chai companion.",
      prepTime:"20 mins", cookTime:"20 mins", servings:3,
      image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/medu-vada-1.jpg",
      keywords:["vada","medu vada","urad dal","black gram","deep fried","sambar","coconut chutney"],
      ingredients:["1 cup urad dal soaked 4 hrs","1 inch ginger grated","2 green chillies chopped","10 curry leaves torn","1 tbsp whole black pepper","Salt to taste","Oil for deep frying"],
      steps:["Drain soaked dal. Blend to thick fluffy batter — minimum water.","Add ginger, chillies, curry leaves, pepper, salt. Mix.","Wet hands with water. Take ball of batter, flatten on palm, make hole in centre.","Heat oil on medium-high.","Slide vada gently into oil. Fry 3-4 mins per side until golden and crisp.","Drain on paper. Serve hot with coconut chutney and sambar."],
      tip:"Thick batter is the key — thin batter gives dense, heavy vadas. Add water drop by drop."
    }
  ],

  lunch: [
    {
      name:"Dal Tadka", category:"North Indian",
      description:"Comforting yellow lentils finished with a sizzling ghee and cumin tadka.",
      prepTime:"10 mins", cookTime:"25 mins", servings:3,
      image:"https://www.scrumptiously.com/wp-content/uploads/2024/10/MoongDalTadka.webp",
      keywords:["dal","toor dal","moong dal","lentil","tomato","onion","garlic"],
      ingredients:["1 cup toor dal","1 tomato chopped","1 onion chopped","3 garlic cloves","½ tsp turmeric","1 tsp cumin seeds","½ tsp red chilli powder","Salt to taste","2 tbsp ghee","Coriander to garnish"],
      steps:["Pressure cook dal with turmeric and 2.5 cups water — 3 whistles. Mash lightly.","Heat ghee. Add cumin seeds — splutter.","Add garlic, sauté 30 secs.","Add onion, cook until golden.","Add tomato, chilli powder, salt. Cook until mushy.","Pour tadka over dal. Simmer 5 mins. Garnish and serve."],
      tip:"A final tadka of ghee + red chilli on top makes it restaurant-style!"
    },
    {
      name:"Aloo Gobi", category:"North Indian",
      description:"Golden potato and cauliflower dry curry fragrant with cumin and coriander.",
      prepTime:"10 mins", cookTime:"20 mins", servings:3,
      image:"https://veganhuggs.com/wp-content/uploads/2021/04/aloo-gobi-in-bowl-side-view.jpg",
      keywords:["potato","aloo","cauliflower","gobi","tomato","onion"],
      ingredients:["2 potatoes cubed","½ cauliflower florets","1 onion chopped","1 tomato chopped","½ tsp turmeric","1 tsp cumin seeds","1 tsp coriander powder","½ tsp garam masala","Salt to taste","3 tbsp oil"],
      steps:["Heat oil. Add cumin seeds — splutter.","Add onion, cook until translucent.","Add tomato, turmeric, coriander, salt. Cook until oil separates.","Add potatoes. Mix and cook 5 mins.","Add cauliflower, sprinkle water. Cover low heat 12-15 mins.","Add garam masala. Garnish and serve."],
      tip:"Don't stir too often — let cauliflower get slightly golden on edges."
    },
    {
      name:"Palak Paneer", category:"North Indian",
      description:"Silky spinach gravy hugging soft paneer cubes — a classic for a reason.",
      prepTime:"15 mins", cookTime:"20 mins", servings:3,
      image:"https://www.feastingathome.com/wp-content/uploads/2018/12/Palak-Paneer-100-6.jpg",
      keywords:["paneer","spinach","palak","onion","tomato","garlic"],
      ingredients:["200g paneer cubed","3 cups spinach blanched","1 onion chopped","1 tomato chopped","3 garlic cloves","1 inch ginger","½ tsp cumin seeds","½ tsp garam masala","2 tbsp oil","Salt and cream to taste"],
      steps:["Blanch spinach 2 mins in hot water, then cold water. Blend to purée.","Heat oil, add cumin. Add onion — cook golden.","Add garlic-ginger paste, cook 1 min.","Add tomato and spices. Cook until soft.","Add spinach purée. Simmer 5 mins.","Add paneer. Cook 5 mins. Add cream and serve."],
      tip:"Cold water bath after blanching keeps spinach bright green."
    },
    {
      name:"Jeera Rice", category:"North Indian",
      description:"Fragrant basmati rice toasted with cumin seeds and whole spices.",
      prepTime:"5 mins", cookTime:"20 mins", servings:2,
      image:"https://quickspicy.com/wp-content/uploads/2025/09/jeera-rice-1.jpg",
      keywords:["rice","cumin","jeera","basmati","jeera rice"],
      ingredients:["1 cup basmati rice","1.5 tsp cumin seeds","1 bay leaf","2 cloves","1 tbsp ghee","Salt to taste","2 cups water"],
      steps:["Wash and soak rice 15 mins. Drain.","Heat ghee. Add cumin, bay leaf, cloves.","When cumin splutters, add rice. Sauté 1-2 mins.","Add water and salt. Bring to boil.","Cover tightly. Lowest heat 12 mins.","Rest 5 mins. Fluff with fork and serve."],
      tip:"Soaking rice makes it fluffier — don't skip!"
    },
    {
      name:"Rajma Curry", category:"North Indian",
      description:"Thick kidney bean curry slow-cooked in a rich tomato-onion masala.",
      prepTime:"10 mins", cookTime:"40 mins", servings:4,
      image:"https://www.indianveggiedelight.com/wp-content/uploads/2020/02/instant-pot-rajma-masala-featured.jpg",
      keywords:["rajma","kidney beans","tomato","onion","garlic","beans"],
      ingredients:["1 cup rajma soaked overnight","2 tomatoes blended","1 onion finely chopped","4 garlic cloves","1 tsp ginger paste","1 tsp cumin seeds","1 tsp coriander powder","½ tsp garam masala","½ tsp red chilli powder","Salt to taste","3 tbsp oil"],
      steps:["Pressure cook soaked rajma with salt — 6-7 whistles.","Heat oil, add cumin. Add onion — cook deep golden.","Add garlic-ginger. Cook 1 min.","Add blended tomatoes and all spice powders. Cook until oil separates.","Add rajma with cooking water. Mash few beans.","Simmer 15 mins until thick. Add garam masala and serve."],
      tip:"Darker masala = richer rajma. Don't rush the onion-tomato step."
    },
    {
      name:"Mixed Veg Curry", category:"South Indian",
      description:"Coconut milk vegetable curry fragrant with curry leaves and sambar spices.",
      prepTime:"15 mins", cookTime:"25 mins", servings:3,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRhFmMGJlfxGvp0zGmsGjUijCWxynckzwvYfQ&s",
      keywords:["mixed vegetables","carrot","beans","potato","coconut","tomato","veg"],
      ingredients:["2 cups mixed vegetables (carrot, beans, potato, peas)","1 onion chopped","2 tomatoes chopped","½ cup coconut milk","1 tsp mustard seeds","1 tsp sambar powder","¼ tsp turmeric","10 curry leaves","2 tbsp oil","Salt to taste"],
      steps:["Heat oil. Add mustard seeds and curry leaves — splutter.","Add onion. Sauté until golden.","Add tomatoes, turmeric, sambar powder, salt. Cook until mushy.","Add mixed vegetables and ½ cup water.","Cover and cook 15 mins until soft.","Add coconut milk. Simmer 5 mins. Serve with rice."],
      tip:"Add vegetables in order of cooking time — potato first, peas last."
    }
  ],

  snacks: [
    {
      name:"Besan Chilla", category:"Quick Snack",
      description:"Crispy chickpea flour savoury crepes — high protein and ready in minutes.",
      prepTime:"10 mins", cookTime:"10 mins", servings:2,
      image:"https://shwetainthekitchen.com/wp-content/uploads/2023/09/Besan-Chilla.jpg",
      keywords:["besan","gram flour","chickpea flour","onion","green chilli","chilla"],
      ingredients:["1 cup besan (gram flour)","1 onion finely chopped","2 green chillies","½ tsp ajwain (carom seeds)","¼ tsp turmeric","Salt to taste","Water for batter","Oil for cooking"],
      steps:["Mix besan, turmeric, ajwain, salt.","Add water gradually — smooth pourable batter.","Add onion and chillies. Mix.","Heat tawa, grease lightly.","Pour ladle, spread thin. Cook medium heat until crispy edges.","Flip, cook 1 more min. Serve with chutney."],
      tip:"Rest batter 5 mins before cooking for better texture."
    },
    {
      name:"Aloo Tikki", category:"Street Food",
      description:"Crispy golden potato patties spiced with chaat masala — the ultimate street snack.",
      prepTime:"15 mins", cookTime:"15 mins", servings:2,
      image:"https://www.vegrecipesofindia.com/wp-content/uploads/2022/07/aloo-tikki-recipe-2.jpg",
      keywords:["potato","aloo","bread","cumin","coriander","tikki"],
      ingredients:["3 potatoes boiled and mashed","2 tbsp bread crumbs","½ tsp cumin seeds","½ tsp chaat masala","¼ tsp red chilli powder","2 tbsp coriander chopped","Salt to taste","Oil for shallow frying"],
      steps:["Mix mashed potato with bread crumbs and spices.","Season with salt and chaat masala. Mix well.","Shape into flat round tikkis.","Heat oil in flat pan on medium.","Cook 3-4 mins until golden. Flip carefully.","Cook other side. Serve with chutney and curd."],
      tip:"Make sure potatoes are fully dry — wet potatoes make tikkis fall apart."
    },
    {
      name:"Onion Pakoda", category:"Monsoon Snack",
      description:"Crispy onion fritters in spiced chickpea batter — perfect with masala chai.",
      prepTime:"10 mins", cookTime:"15 mins", servings:3,
      image:"https://i.ytimg.com/vi/qfZ3axZV48A/maxresdefault.jpg",
      keywords:["onion","besan","gram flour","green chilli","curry leaves","pakoda","pakora"],
      ingredients:["2 large onions thinly sliced","1 cup besan","2 green chillies chopped","10 curry leaves","¼ tsp turmeric","½ tsp red chilli powder","½ tsp ajwain","Salt to taste","Oil for deep frying"],
      steps:["Mix sliced onions with salt. Rest 5 mins — they release water.","Add besan, chillies, curry leaves, all spices.","Mix well. Onion water should be enough — add tiny water if needed.","Batter should be thick and clumpy.","Drop small clusters into hot oil.","Fry on medium heat until crispy and golden (~5 mins). Drain and serve."],
      tip:"Fry on medium — high heat browns outside but leaves inside raw."
    },
    {
      name:"Bread Pakoda", category:"Quick Snack",
      description:"Bread slices dipped in spiced besan batter and fried until golden and crunchy.",
      prepTime:"10 mins", cookTime:"10 mins", servings:2,
      image:"https://static.toiimg.com/thumb/53240499.cms?imgsize=297578&width=800&height=800",
      keywords:["bread","besan","gram flour","potato","green chilli","pakoda"],
      ingredients:["4 bread slices","1 cup besan","¼ tsp turmeric","½ tsp red chilli powder","Pinch of ajwain","Salt to taste","Water for batter","Oil for deep frying"],
      steps:["Make besan batter: mix besan with spices and water until thick and smooth.","Cut bread into triangles.","Optional: spread mashed potato filling between two slices.","Dip bread in batter to coat fully.","Slide into hot oil. Fry until golden and crispy (~3 mins per side).","Drain and serve hot with green chutney."],
      tip:"Batter should coat bread well — too thin drips off, too thick is doughy."
    },
    {
      name:"Poha Chivda", category:"Tea-Time Snack",
      description:"Crunchy roasted poha tossed with peanuts and curry leaves — a perfect jar snack.",
      prepTime:"5 mins", cookTime:"10 mins", servings:4,
      image:"https://vegehomecooking.com/wp-content/uploads/2023/10/RoastedPohaChivdaFeaturedImage.jpg",
      keywords:["poha","flattened rice","peanut","groundnut","curry leaves","mustard","chivda"],
      ingredients:["2 cups thin poha","3 tbsp peanuts","1 tsp mustard seeds","10 curry leaves","2 dried red chillies","¼ tsp turmeric","¼ tsp sugar","Salt to taste","2 tbsp oil"],
      steps:["Dry roast poha on low heat 5-6 mins until crispy. Set aside.","In same pan heat oil. Fry peanuts until golden. Set aside.","Add mustard seeds — splutter. Add curry leaves and red chillies.","Add turmeric, turn off heat.","Add poha and peanuts. Add salt and sugar.","Toss together. Cool completely before storing."],
      tip:"Cool completely before storing — warmth causes moisture and loses crispiness."
    },
    {
      name:"Groundnut Chaat", category:"Street Food",
      description:"Boiled or roasted groundnuts tossed with onion, tomato and tangy chaat spices.",
      prepTime:"10 mins", cookTime:"0 mins", servings:2,
      image:"https://i.ytimg.com/vi/Pg_PR_-NBdk/maxresdefault.jpg",
      keywords:["groundnut","peanut","onion","tomato","chaat","lemon"],
      ingredients:["1 cup boiled or roasted groundnuts","1 onion finely chopped","1 tomato finely chopped","1 green chilli chopped","½ tsp chaat masala","¼ tsp cumin powder","Lemon juice to taste","Fresh coriander","Salt to taste"],
      steps:["Take boiled or roasted groundnuts in a bowl.","Add chopped onion, tomato, green chilli.","Add chaat masala, cumin powder, and salt.","Squeeze fresh lemon juice generously.","Mix everything well.","Garnish with coriander. Serve immediately."],
      tip:"Best served immediately — it gets soggy if left too long."
    },
    {
      name:"Phool Makhana Namkeen", category:"Healthy Snack",
      description:"Lotus seeds roasted in ghee with spices — a light, crunchy and guilt-free munch.",
      prepTime:"5 mins", cookTime:"10 mins", servings:3,
      image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2023/08/phool-makhana-snack-recipe.jpg",
      keywords:["phool makhana","fox nuts","lotus seeds","ghee","namkeen","healthy snack"],
      ingredients:["2 cups phool makhana (fox nuts)","1 tbsp ghee","½ tsp cumin powder","½ tsp chaat masala","¼ tsp black pepper","¼ tsp red chilli powder","Salt to taste"],
      steps:["Heat ghee in a wide pan on low flame.","Add makhana. Roast on low heat 8-10 mins, stirring constantly until crisp.","Test: a makhana should snap cleanly when pressed.","Turn off heat. Add all spices and salt immediately.","Toss well to coat evenly.","Cool completely before storing in an airtight jar."],
      tip:"Roast on low heat only — medium heat burns them unevenly. Patience is the secret!"
    },
    {
      name:"Sweet Potato Chaat", category:"Healthy Snack",
      description:"Roasted sweet potato cubes tossed with tangy chaat spices and fresh herbs — street-style nutrition.",
      prepTime:"10 mins", cookTime:"20 mins", servings:2,
      image:"https://www.dwarakaorganic.com/wp-content/uploads/2025/02/Sweet-Potato-Chaat.jpg",
      keywords:["sweet potato","shakarkandi","chaat","lemon","chaat masala","healthy"],
      ingredients:["2 medium sweet potatoes","½ tsp chaat masala","¼ tsp cumin powder","¼ tsp red chilli powder","1 tsp lemon juice","1 tbsp fresh coriander chopped","1 green chilli chopped (optional)","Salt to taste","1 tsp oil"],
      steps:["Boil or microwave sweet potatoes until just tender. Peel and cube.","Toss cubes lightly with oil and a pinch of salt.","Roast on a hot tawa or oven at 200°C for 8-10 mins until edges caramelise.","Transfer to bowl. Add chaat masala, cumin, chilli powder.","Squeeze lemon juice generously. Add coriander and green chilli.","Toss and serve warm."],
      tip:"Don't overcook sweet potatoes before roasting — they should hold their shape."
    },
    {
      name:"Masala Corn Chaat", category:"Street Food",
      description:"Sweet corn kernels tossed with butter, lime, and bold spices — monsoon favourite in minutes.",
      prepTime:"5 mins", cookTime:"10 mins", servings:2,
      image:"https://www.funfoodfrolic.com/wp-content/uploads/2022/07/Corn-Chaat-Blog.jpg",
      keywords:["corn","sweet corn","bhutta","butter","chaat masala","lemon","street food"],
      ingredients:["2 cups sweet corn kernels (fresh or frozen)","1 tsp butter","½ tsp chaat masala","¼ tsp cumin powder","¼ tsp red chilli powder","1 tsp lemon juice","1 green chilli finely chopped","Fresh coriander","Salt to taste"],
      steps:["If using fresh corn, boil kernels 5-6 mins until tender. Drain.","If frozen, microwave 2 mins. Drain well.","Heat butter in pan. Add corn and sauté 2-3 mins on high until slightly charred.","Transfer to bowl.","Add chaat masala, cumin, chilli powder, green chilli, salt.","Add lemon juice, coriander. Toss and serve immediately."],
      tip:"A quick char on high heat gives bhutta-style smoky flavour — don't skip it."
    },
    {
      name:"Groundnut Masala Fry", category:"Tea-Time Snack",
      description:"Crispy spice-coated roasted peanuts — the ultimate jar snack that disappears instantly.",
      prepTime:"10 mins", cookTime:"15 mins", servings:4,
      image:"https://i.ytimg.com/vi/0lhX0QvBphQ/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLDN6wxIT5TX_ngLMCFtDBFaXIVfsQ",
      keywords:["groundnut","peanut","masala","roasted","besan","namkeen","crispy"],
      ingredients:["1 cup raw groundnuts (peanuts with skin)","2 tbsp besan (gram flour)","1 tbsp rice flour","½ tsp red chilli powder","¼ tsp turmeric","½ tsp chaat masala","¼ tsp garlic powder","Salt to taste","Water (just enough to coat)","Oil for frying"],
      steps:["Wash peanuts and drain. They should be slightly damp.","Mix besan, rice flour and all spices in a bowl.","Toss damp peanuts in the flour-spice mix until evenly coated.","Add drops of water if coating is not sticking.","Heat oil for deep frying on medium.","Fry coated peanuts in batches 4-5 mins until golden and crisp. Drain well.","Cool before storing — they crisp further as they cool."],
      tip:"Rice flour in the coating is the secret to long-lasting crunch."
    },
    {
      name:"Sweet Potato & Corn Tikki", category:"Healthy Snack",
      description:"Wholesome sweet potato and corn patties with herbs — a nutritious twist on the classic tikki.",
      prepTime:"15 mins", cookTime:"15 mins", servings:3,
      image:"https://ichef.bbci.co.uk/food/ic/food_16x9_1600/recipes/sweetcorn_and_sweet_21489_16x9.jpg",
      keywords:["sweet potato","corn","tikki","patty","healthy","coriander","snack"],
      ingredients:["2 sweet potatoes boiled and mashed","½ cup sweet corn kernels (boiled)","¼ cup roasted groundnuts coarsely crushed","2 tbsp besan (gram flour)","1 green chilli finely chopped","1 tsp cumin seeds","½ tsp chaat masala","½ tsp red chilli powder","2 tbsp fresh coriander chopped","Salt to taste","Oil for shallow frying"],
      steps:["Mash boiled sweet potatoes in a bowl.","Add corn kernels, crushed groundnuts, besan, all spices and coriander.","Mix to a firm dough. If sticky, add a little more besan.","Divide into equal portions and shape into flat round tikkis.","Heat oil in flat pan on medium heat.","Cook tikkis 3-4 mins per side until golden and crisp.","Serve hot with mint chutney or tamarind chutney."],
      tip:"Crushed groundnuts add crunch and bind — don't skip them for best texture."
    }
  ],

  dinner: [
    {
      name:"Chapati / Roti", category:"Everyday Staple",
      description:"Soft hand-rolled whole wheat flatbreads — the heart of every Indian dinner.",
      prepTime:"15 mins", cookTime:"20 mins", servings:4,
      image:"https://static.toiimg.com/photo/61203720.cms",
      keywords:["wheat flour","atta","roti","chapati","flour"],
      ingredients:["2 cups whole wheat flour (atta)","½ tsp salt","Water (~¾ cup)","Ghee to apply"],
      steps:["Mix flour and salt. Add water gradually. Knead to soft, smooth dough.","Rest dough 15 mins under damp cloth.","Divide into small balls. Roll each into thin circle.","Heat tawa on medium-high.","Cook 30-40 secs until bubbles appear. Flip and cook.","Press edges with cloth to puff. Apply ghee and serve hot."],
      tip:"Softer dough = softer roti. Don't be stingy with kneading!"
    },
    {
      name:"Bhindi Masala", category:"North Indian",
      description:"Crispy okra tossed in a dry spiced onion-tomato masala — no sliminess guaranteed.",
      prepTime:"10 mins", cookTime:"20 mins", servings:3,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzcd0hFzKDPhKAkB1H-J9lB7nvc3hYkLRxpw&s",
      keywords:["bhindi","okra","ladyfinger","onion","tomato","bhindi masala"],
      ingredients:["250g bhindi (okra) washed & dried","1 onion sliced","1 tomato chopped","½ tsp cumin seeds","¼ tsp turmeric","1 tsp coriander powder","½ tsp amchur (dry mango powder)","Salt to taste","3 tbsp oil"],
      steps:["Dry bhindi COMPLETELY with cloth. Slice into 1-inch pieces.","Fry bhindi in 2 tbsp oil on medium 8-10 mins without lid. Set aside.","In remaining oil, add cumin, then onion. Cook golden.","Add tomato and all spices. Cook until dry.","Add fried bhindi. Toss gently.","Add amchur, mix. Cook 2 more mins. Serve with roti."],
      tip:"Bhindi must be COMPLETELY dry before cooking — any moisture causes sliminess."
    },
    {
      name:"Khichdi", category:"Comfort Food",
      description:"One-pot rice and lentil porridge — India's most comforting home-cooked meal.",
      prepTime:"10 mins", cookTime:"25 mins", servings:3,
      image:"https://www.goodgutayurveda.com/wp-content/uploads/2023/11/Dal-Basic-Khichdi-1200-15-3-edited.jpg",
      keywords:["rice","moong dal","dal","ghee","cumin","khichdi"],
      ingredients:["½ cup rice","½ cup moong dal","1 tsp cumin seeds","¼ tsp turmeric","1 tsp ghee","Salt to taste","3 cups water"],
      steps:["Wash rice and dal together. Soak 10 mins.","Heat ghee in pressure cooker. Add cumin seeds.","Add drained rice and dal. Stir 1 min.","Add turmeric, salt, water. Mix well.","Pressure cook 3 whistles.","Let pressure release naturally. Mash slightly. Serve with ghee and papad."],
      tip:"Khichdi should be soft and porridge-like — don't be shy with water."
    },
    {
      name:"Paneer Butter Masala", category:"Restaurant Style",
      description:"Velvety tomato-cashew gravy with soft paneer — restaurant quality at home.",
      prepTime:"15 mins", cookTime:"25 mins", servings:3,
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6GMD_WH9sl6HjJ4CObB9Lim-51zBji9n5KA&s",
      keywords:["paneer","tomato","onion","cream","butter","cashew","paneer butter masala"],
      ingredients:["200g paneer cubed","3 tomatoes","1 onion","10 cashews","2 garlic cloves","1 tsp butter","1 tsp oil","1 tsp kashmiri red chilli powder","1 tsp coriander powder","½ tsp garam masala","2 tbsp fresh cream","Salt and sugar to taste"],
      steps:["Boil tomatoes, onion, garlic, cashews together 10 mins. Blend smooth.","Heat butter + oil. Add purée. Cook 5 mins.","Add kashmiri chilli, coriander, salt, pinch of sugar.","Cook on medium until butter separates.","Add ½ cup water to adjust consistency. Simmer 5 mins.","Add paneer and cream. Simmer gently 5 mins. Serve with naan."],
      tip:"Kashmiri chilli gives vibrant red colour without much heat — use generously!"
    },
    {
      name:"Aloo Matar", category:"North Indian",
      description:"Tender potato and peas simmered in a fragrant tomato gravy — simple and hearty.",
      prepTime:"10 mins", cookTime:"20 mins", servings:3,
      image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/aloo-matar-aloo-mutter-recipe.jpg",
      keywords:["potato","aloo","peas","matar","tomato","onion","aloo matar"],
      ingredients:["3 potatoes cubed","1 cup green peas","2 tomatoes chopped","1 onion chopped","1 tsp cumin seeds","½ tsp turmeric","1 tsp coriander powder","½ tsp garam masala","Salt to taste","2 tbsp oil","Coriander to garnish"],
      steps:["Heat oil. Add cumin — splutter.","Add onion. Cook until golden.","Add tomatoes and all spice powders. Cook until masala is thick.","Add potatoes. Mix and cook 5 mins.","Add peas and ½ cup water. Cover and cook 10-12 mins.","Sprinkle garam masala. Garnish with coriander. Serve with roti."],
      tip:"Add peas only in the last 5 mins — they cook fast and stay vibrant green."
    },
    {
      name:"Dal Makhani", category:"Punjab Style",
      description:"Slow-cooked black lentils simmered with cream and butter for rich, deep flavour.",
      prepTime:"10 mins", cookTime:"45 mins", servings:4,
      image:"https://sinfullyspicy.com/wp-content/uploads/2015/03/1200-by-1200-images-1.jpg",
      keywords:["dal","black dal","urad dal","rajma","cream","butter","dal makhani"],
      ingredients:["1 cup whole black urad dal soaked overnight","¼ cup rajma","2 tomatoes pureed","1 onion finely chopped","4 garlic cloves minced","1 inch ginger","2 tbsp butter","1 tsp oil","1 tsp red chilli powder","Salt to taste","2 tbsp cream"],
      steps:["Pressure cook soaked urad dal and rajma 8-10 whistles until very soft.","Heat butter + oil. Add onion. Cook dark golden.","Add garlic-ginger. Cook 1-2 mins.","Add tomato purée and red chilli powder. Cook until fat separates.","Add cooked dal with water. Mash slightly.","Simmer on very low heat 20-30 mins. Add cream. Serve with naan."],
      tip:"The longer it simmers, the better it tastes. Patience is the secret ingredient!"
    }
  ]
};
