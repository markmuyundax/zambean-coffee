// Zambean Coffee Co. Data Layer — CMS-Ready
// Reads from JSON files (managed by admin panel) with hardcoded fallback.

import menuJson from "../data/menu.json";
import specialsJson from "../data/specials.json";
import beansJson from "../data/beans.json";
import testimonialsJson from "../data/testimonials.json";
import galleryJson from "../data/gallery.json";
import eventsJson from "../data/events.json";

// Zambean Coffee Co. Data Layer — CMS-Ready
// Reads from JSON files (managed by admin panel) with hardcoded fallback.

// Zambean Coffee Co. Data Layer — CMS-Ready
// Replace with Payload CMS API calls in production.

export interface MenuItem {
  id: string;
  name: string;
  category: string;
  description: string;
  price: number;
  dietaryTags: string[];
  image: string;
  featured?: boolean;
  pairing?: string;
}

export interface Special {
  id: string; title: string; description: string;
  validUntil: string; image: string; price?: number;
}

export interface CoffeeBean {
  id: string; name: string; origin: string;
  roast: string;
  description: string; price: number; image: string; inStock: boolean;
}

export interface Review {
  id: string; author: string; rating: number; text: string;
  date: string; platform: string;
}

export interface GalleryImage {
  id: string; src: string; alt: string; width: number; height: number;
}

export interface Event {
  id: string; title: string; date: string; description: string;
  image: string; price?: string;
}

// Live data from JSON files (admin-editable), with hardcoded fallback
const _fallback_menuItems = [
  // ── COFFEE & HOT DRINKS ──
  { id: "coffee-01", name: "Zambean House Blend", category: "coffee", description: "Our signature roast — smooth, medium-bodied with notes of dark chocolate and citrus. Sourced from Zambian and Ethiopian beans.", price: 45, dietaryTags: ["vegan", "gluten-free"], image: "https://images.unsplash.com/photo-1509042239860-f550ce710b93?w=600&h=400&fit=crop", featured: true, pairing: "Pairs perfectly with our Carrot Cake Muffin — K140 combo" },
  { id: "coffee-02", name: "Cappuccino", category: "coffee", description: "Double espresso with velvety steamed milk and a cloud of foam. The Lusaka favorite.", price: 65, dietaryTags: ["vegetarian", "gluten-free"], image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?w=600&h=400&fit=crop" },
  { id: "coffee-03", name: "Espresso", category: "coffee", description: "Short, intense, perfect. Single-origin Zambian arabica pulled to order.", price: 45, dietaryTags: ["vegan", "gluten-free"], image: "https://images.unsplash.com/photo-1510707577719-ae7c14805e3a?w=600&h=400&fit=crop" },
  { id: "coffee-04", name: "Iced Latte", category: "coffee", description: "Double espresso over ice with cold milk. Essential Lusaka afternoon fuel.", price: 65, dietaryTags: ["vegetarian", "gluten-free"], image: "https://images.unsplash.com/photo-1461023058943-07fcbe16d735?w=600&h=400&fit=crop" },
  { id: "coffee-05", name: "Moccachino", category: "coffee", description: "Espresso, steamed milk, and house-made chocolate sauce. Rich, indulgent.", price: 85, dietaryTags: ["vegetarian"], image: "https://images.unsplash.com/photo-1578314675249-a6910f80cc4e?w=600&h=400&fit=crop" },
  { id: "coffee-06", name: "French Press", category: "coffee", description: "Single-origin Zambian coffee, full-immersion brewed. Bold, clean, and full-flavored.", price: 80, dietaryTags: ["vegan", "gluten-free"], image: "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=600&h=400&fit=crop" },
  { id: "coffee-07", name: "Americano", category: "coffee", description: "Double espresso lengthened with hot water. Smooth, rich, and endlessly drinkable.", price: 55, dietaryTags: ["vegan", "gluten-free"], image: "https://images.unsplash.com/photo-1551030173-122aabc4489c?w=600&h=400&fit=crop" },
  { id: "coffee-08", name: "Café Latte", category: "coffee", description: "Velvety steamed milk poured over a double espresso. Smooth and creamy.", price: 65, dietaryTags: ["vegetarian", "gluten-free"], image: "https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?w=600&h=400&fit=crop" },
  { id: "coffee-09", name: "Flat White", category: "coffee", description: "Double ristretto with micro-foamed milk. Strong, silky, the Antipodean way.", price: 65, dietaryTags: ["vegetarian", "gluten-free"], image: "https://images.unsplash.com/photo-1577968897966-3d4325b36b61?w=600&h=400&fit=crop" },
  { id: "coffee-10", name: "Macchiato", category: "coffee", description: "Espresso stained with a dollop of steamed milk. Bold with just a touch of creaminess.", price: 50, dietaryTags: ["vegetarian", "gluten-free"], image: "https://images.unsplash.com/photo-1485808191679-5f86510681a2?w=600&h=400&fit=crop" },
  { id: "coffee-11", name: "Hot Chocolate", category: "coffee", description: "Rich Belgian cocoa steamed with whole milk. Topped with whipped cream.", price: 75, dietaryTags: ["vegetarian", "gluten-free"], image: "https://images.unsplash.com/photo-1542990253-0d0f5be5f554?w=600&h=400&fit=crop" },
  { id: "coffee-12", name: "Milo", category: "coffee", description: "The classic malt chocolate drink — steamed, frothy, and nostalgic.", price: 85, dietaryTags: ["vegetarian", "gluten-free"], image: "https://images.unsplash.com/photo-1572490122747-3968b75f699f?w=600&h=400&fit=crop" },

  // ── BREAKFAST (07:30 – 12:00) ──
  { id: "breakfast-01", name: "The Full English", category: "breakfast", description: "Two fried eggs, crispy bacon, fried tomato, pork sausage, baked beans, mushrooms and toast.", price: 200, dietaryTags: [], image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=600&h=400&fit=crop", featured: true },
  { id: "breakfast-02", name: "Avo on Toast", category: "breakfast", description: "Mashed avo on toast served with an egg. Simple, fresh, and perfectly seasoned.", price: 110, dietaryTags: ["vegetarian"], image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&h=400&fit=crop" },
  { id: "breakfast-03", name: "Vanilla French Toast", category: "breakfast", description: "French toast made from our homemade bread served with crispy bacon, golden syrup and a touch of vanilla.", price: 130, dietaryTags: [], image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=600&h=400&fit=crop" },
  { id: "breakfast-04", name: "Vegan Breakfast", category: "breakfast", description: "Creamy avo, caramelized onions, fried mushrooms, roasted tomato and baked beans served on a toasted baguette.", price: 170, dietaryTags: ["vegan"], image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop" },
  { id: "breakfast-05", name: "Blue Cheese Toast", category: "breakfast", description: "Sliced avo, grilled tomato, fried egg, crumbled blue cheese and crispy bacon on sourdough toast.", price: 200, dietaryTags: [], image: "https://images.unsplash.com/photo-1528736235302-52922df5c122?w=600&h=400&fit=crop" },
  { id: "breakfast-06", name: "Bacon Scrambled Eggs", category: "breakfast", description: "Creamy scrambled eggs with crispy bacon, mushrooms, avo with fried tomato on a toasted baguette.", price: 185, dietaryTags: [], image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&h=400&fit=crop" },
  { id: "breakfast-07", name: "Bacon & Egg Roll", category: "breakfast", description: "Two fried eggs in a fresh, lightly toasted sesame bun with crispy bacon.", price: 100, dietaryTags: [], image: "https://images.unsplash.com/photo-1550507992-eb63ffee0847?w=600&h=400&fit=crop" },
  { id: "breakfast-08", name: "Eggs Benedict", category: "breakfast", description: "English muffin, poached egg with a choice of ham or bacon served with Hollandaise sauce.", price: 195, dietaryTags: [], image: "https://images.unsplash.com/photo-1608039829572-fa085600ff38?w=600&h=400&fit=crop" },
  { id: "breakfast-09", name: "Granola & Yoghurt", category: "breakfast", description: "Homemade granola with Greek yoghurt and fresh seasonal fruit.", price: 135, dietaryTags: ["vegetarian"], image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=600&h=400&fit=crop" },
  { id: "breakfast-10", name: "Farmer's Breakfast", category: "breakfast", description: "Two fried eggs, fried tomato, sweetcorn fritters, pork sausage and chips.", price: 200, dietaryTags: [], image: "https://images.unsplash.com/photo-1539764216247-20b9ac53be6b?w=600&h=400&fit=crop" },
  { id: "breakfast-11", name: "Breakfast Croissant", category: "breakfast", description: "Creamy scrambled eggs with crispy bacon and fried tomato on a freshly baked butter croissant.", price: 185, dietaryTags: [], image: "https://images.unsplash.com/photo-1559410541-78de69bb16fe?w=600&h=400&fit=crop" },
  { id: "breakfast-12", name: "Eggs Royale", category: "breakfast", description: "English muffin, poached egg, smoked salmon with Hollandaise sauce.", price: 250, dietaryTags: [], image: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?w=600&h=400&fit=crop" },
  { id: "breakfast-13", name: "Omelettes", category: "breakfast", description: "Three-egg omelette with three fillings of your choice: mushroom, cheddar, tomato, bacon, feta, jalapeño, ham, onion, avo.", price: 135, dietaryTags: ["vegetarian", "gluten-free"], image: "https://images.unsplash.com/photo-1510693206972-df098062cb71?w=600&h=400&fit=crop" },

  // ── LUNCH (12:00 – 16:30) ──
  { id: "lunch-01", name: "Philly Cheese Steak", category: "lunch", description: "Thin-sliced beef, melted cheese, caramelized onions, and peppers on a toasted roll. Our #1 seller. Served with chips & salad.", price: 250, dietaryTags: [], image: "https://images.unsplash.com/photo-1624300629298-e9de39c13be5?w=600&h=400&fit=crop", featured: true, pairing: "Try with our Iced Latte — the perfect contrast" },
  { id: "lunch-02", name: "Beef Cheese Burger", category: "lunch", description: "Beef pattie, tomato, caramelized onions, lettuce and gherkins. Served with chips & salad.", price: 250, dietaryTags: [], image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=600&h=400&fit=crop" },
  { id: "lunch-03", name: "Smoked Chicken Salad", category: "lunch", description: "Sliced smoked chicken, honey mustard dressing, lettuce, feta, pecan nuts, avo, pumpkin and sunflower seeds.", price: 195, dietaryTags: ["gluten-free"], image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=600&h=400&fit=crop" },
  { id: "lunch-04", name: "Margherita Flatbread", category: "lunch", description: "Crispy flatbread with San Marzano tomato sauce, fresh mozzarella, garden basil.", price: 100, dietaryTags: ["vegetarian"], image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=600&h=400&fit=crop" },
  { id: "lunch-05", name: "Chicken & Halloumi Wrap", category: "lunch", description: "Halloumi, crumbed chicken, lettuce, avo, tomato and honey mustard mayo. Served with chips & salad.", price: 250, dietaryTags: [], image: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f?w=600&h=400&fit=crop" },
  { id: "lunch-06", name: "Falafel Wrap", category: "lunch", description: "Falafel, tomato, cucumber, lettuce and tahini yogurt dressing. Served with chips & salad.", price: 240, dietaryTags: ["vegan"], image: "https://images.unsplash.com/photo-1593001872095-7d7dba157e40?w=600&h=400&fit=crop" },
  { id: "lunch-07", name: "Bacon & Blue Cheese Burger", category: "lunch", description: "Beef pattie, bacon, blue cheese sauce, tomato and lettuce. Served with chips & salad.", price: 270, dietaryTags: [], image: "https://images.unsplash.com/photo-1553979459-d2229ba7433b?w=600&h=400&fit=crop" },
  { id: "lunch-08", name: "T-Bone Steak", category: "lunch", description: "Grilled T-bone with homemade mushroom sauce. Served with chips & salad or mash & veg.", price: 400, dietaryTags: [], image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&h=400&fit=crop" },
  { id: "lunch-09", name: "Chicken Schnitzel", category: "lunch", description: "Crispy crumbed chicken breast with cheese sauce. Served with chips & salad or mash & veg.", price: 300, dietaryTags: [], image: "https://images.unsplash.com/photo-1599921841143-819065a55cc6?w=600&h=400&fit=crop" },
  { id: "lunch-10", name: "Ham & Cheese Toastie", category: "lunch", description: "Classic toasted sandwich with ham and melted cheese. Served with chips & salad.", price: 175, dietaryTags: [], image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af?w=600&h=400&fit=crop" },
  { id: "lunch-11", name: "Mozzarella, Tomato & Pesto Toastie", category: "lunch", description: "Fresh mozzarella, tomato and basil pesto on toasted artisan bread. Served with chips & salad.", price: 175, dietaryTags: ["vegetarian"], image: "https://images.unsplash.com/photo-1475090169767-40ed8d18f67d?w=600&h=400&fit=crop" },
  { id: "lunch-12", name: "Garden Salad", category: "lunch", description: "Fresh lettuce, sundried tomatoes, feta, pecan nuts, avo, pumpkin and sunflower seeds.", price: 175, dietaryTags: ["vegetarian", "gluten-free"], image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop" },
  { id: "lunch-13", name: "The Italian Sandwich", category: "lunch", description: "Homemade basil pesto, Italian salami, sundried tomatoes and parmesan shavings. Served with chips & salad.", price: 190, dietaryTags: [], image: "https://images.unsplash.com/photo-1529006557810-274b9b51c783?w=600&h=400&fit=crop" },
  { id: "lunch-14", name: "Club Sandwich", category: "lunch", description: "Grilled chicken, crispy bacon, lettuce, tomato and honey Dijon mayo. Served with chips & salad.", price: 185, dietaryTags: [], image: "https://images.unsplash.com/photo-1567234669003-dce7a7a88821?w=600&h=400&fit=crop" },
  { id: "lunch-15", name: "Smoked Salmon Salad", category: "lunch", description: "Thinly sliced salmon on a bed of fresh lettuce with capers, feta, avo, pumpkin and sunflower seeds.", price: 270, dietaryTags: ["gluten-free"], image: "https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&h=400&fit=crop" },

  // ── CAKES & CROISSANTS ──
  { id: "pastry-01", name: "Carrot Cake Muffin", category: "pastry", description: "Moist spiced carrot cake muffin with cream cheese frosting. Baked fresh every morning.", price: 95, dietaryTags: ["vegetarian"], image: "https://images.unsplash.com/photo-1607478900766-5389a8a0b4e1?w=600&h=400&fit=crop", featured: true, pairing: "Cappuccino + Carrot Cake Muffin — K160 combo" },
  { id: "pastry-02", name: "Plain Butter Croissant", category: "pastry", description: "Buttery, flaky croissant baked on-site. Perfect with a morning coffee.", price: 85, dietaryTags: ["vegetarian"], image: "https://images.unsplash.com/photo-1549903072-7e6e0bedb7fb?w=600&h=400&fit=crop" },
  { id: "pastry-03", name: "Lemon Drizzle Cake", category: "pastry", description: "Zesty lemon cake soaked in citrus syrup with a crackling sugar top.", price: 75, dietaryTags: ["vegetarian"], image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&h=400&fit=crop" },
  { id: "pastry-04", name: "Chocolate Brownie", category: "pastry", description: "Rich, fudgy dark chocolate brownie. The ultimate coffee companion.", price: 75, dietaryTags: ["vegetarian"], image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&h=400&fit=crop" },
  { id: "pastry-05", name: "Banana Choc Chip Muffin", category: "pastry", description: "Ripe Zambian bananas folded into a chocolate-flecked muffin. Sweet, moist, irresistible.", price: 80, dietaryTags: ["vegetarian"], image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&h=400&fit=crop" },
  { id: "pastry-06", name: "Cinnamon Roll", category: "pastry", description: "Soft, gooey cinnamon roll with cream cheese glaze. Warm from the oven.", price: 85, dietaryTags: ["vegetarian"], image: "https://images.unsplash.com/photo-1509365465985-25d11c17e812?w=600&h=400&fit=crop" },
  { id: "pastry-07", name: "Double Chocolate Muffin", category: "pastry", description: "Deep cocoa muffin studded with dark chocolate chunks. For serious chocolate lovers.", price: 85, dietaryTags: ["vegetarian"], image: "https://images.unsplash.com/photo-1607958996333-41aef7caefaa?w=600&h=400&fit=crop" },

  // ── COLD DRINKS ──
  { id: "drinks-01", name: "Fresh Orange Juice", category: "drinks", description: "Cold-pressed from local Zambian oranges. Nothing added.", price: 125, dietaryTags: ["vegan", "gluten-free"], image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?w=600&h=400&fit=crop" },
  { id: "drinks-02", name: "Mango Lassi", category: "drinks", description: "Creamy yogurt blended with ripe Zambian mangoes and a hint of cardamom.", price: 50, dietaryTags: ["vegetarian", "gluten-free"], image: "https://images.unsplash.com/photo-1626200419199-391ae4be7a41?w=600&h=400&fit=crop" },
  { id: "drinks-03", name: "Hibiscus Iced Tea", category: "drinks", description: "House-brewed hibiscus tea, chilled and lightly sweetened. Incredibly refreshing.", price: 70, dietaryTags: ["vegan", "gluten-free"], image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&h=400&fit=crop" },
  { id: "drinks-04", name: "Homemade Passion Fruit", category: "drinks", description: "Fresh passion fruit cordial made in-house. Sweet, tangy, and bursting with tropical flavor.", price: 65, dietaryTags: ["vegan", "gluten-free"], image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&h=400&fit=crop" },
  { id: "drinks-05", name: "Rock Shandy", category: "drinks", description: "Half lemonade, half soda, a splash of bitters. The ultimate refresher on a hot Lusaka day.", price: 85, dietaryTags: ["vegan", "gluten-free"], image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?w=600&h=400&fit=crop" },
  { id: "drinks-06", name: "Fruit Smoothie", category: "drinks", description: "Blended seasonal fruit with yogurt and honey. Thick, creamy, and energizing.", price: 120, dietaryTags: ["vegetarian", "gluten-free"], image: "https://images.unsplash.com/photo-1505252585461-04db1eb84625?w=600&h=400&fit=crop" },
  { id: "drinks-07", name: "Milkshake", category: "drinks", description: "Thick, old-school milkshake. Choose chocolate, vanilla, or strawberry.", price: 95, dietaryTags: ["vegetarian", "gluten-free"], image: "https://images.unsplash.com/photo-1572490122747-3968b75f699f?w=600&h=400&fit=crop" },

  // ── TEAS ──
  { id: "teas-01", name: "Rooibos Tea", category: "teas", description: "Naturally caffeine-free South African red bush tea. Smooth and earthy with a hint of sweetness.", price: 45, dietaryTags: ["vegan", "gluten-free"], image: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=600&h=400&fit=crop" },
  { id: "teas-02", name: "5 Roses Tea", category: "teas", description: "The classic black tea — strong, golden, and comforting.", price: 45, dietaryTags: ["vegan", "gluten-free"], image: "https://images.unsplash.com/photo-1594631252845-29fc4cc8cde9?w=600&h=400&fit=crop" },
  { id: "teas-03", name: "Green Tea", category: "teas", description: "Light, delicate, and packed with antioxidants. Steamed to perfection.", price: 45, dietaryTags: ["vegan", "gluten-free"], image: "https://images.unsplash.com/photo-1556881286-fc6915169721?w=600&h=400&fit=crop" },
  { id: "teas-04", name: "Red Cappuccino", category: "teas", description: "Rooibos tea prepared like a cappuccino — steamed milk and velvety foam. Caffeine-free comfort.", price: 75, dietaryTags: ["vegetarian", "gluten-free"], image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&h=400&fit=crop" },
  { id: "teas-05", name: "Lemon Ginger Water", category: "teas", description: "Fresh ginger, lemon, and honey steeped in hot water. Warming and soothing.", price: 70, dietaryTags: ["vegan", "gluten-free"], image: "https://images.unsplash.com/photo-1597481499750-3e6b226c7b12?w=600&h=400&fit=crop" },
  { id: "teas-06", name: "Fresh Red", category: "teas", description: "A vibrant infusion of red berries and hibiscus. Bright, tart, and refreshing.", price: 70, dietaryTags: ["vegan", "gluten-free"], image: "https://images.unsplash.com/photo-1571934811356-5cc061b6821f?w=600&h=400&fit=crop" },

  // ── KIDDOS ──
  { id: "kiddos-01", name: "Chicken Strips & Chips", category: "kiddos", description: "Crispy chicken strips served with chips and mashed avo. Kid-approved.", price: 120, dietaryTags: [], image: "https://images.unsplash.com/photo-1562967914-608f82629710?w=600&h=400&fit=crop" },
  { id: "kiddos-02", name: "Fish Cakes & Chips", category: "kiddos", description: "Golden fish cakes served with chips and mushy peas.", price: 130, dietaryTags: [], image: "https://images.unsplash.com/photo-1579208030886-b1da4bb3b5e8?w=600&h=400&fit=crop" },
  { id: "kiddos-03", name: "Beef Bolognese", category: "kiddos", description: "Hearty beef bolognese over pasta. Wholesome and filling.", price: 140, dietaryTags: [], image: "https://images.unsplash.com/photo-1598866594230-a7c12756260f?w=600&h=400&fit=crop" },
  { id: "kiddos-04", name: "Creamy Mac 'n Cheese", category: "kiddos", description: "Creamy macaroni cheese. Add bacon bits or peas +K25.", price: 120, dietaryTags: ["vegetarian"], image: "https://images.unsplash.com/photo-1543339494-b4cd4f7ba686?w=600&h=400&fit=crop" },

  // ── COCKTAILS & BEER ──
  { id: "cocktails-01", name: "Aperol Spritz", category: "cocktails", description: "Aperol, Prosecco, soda. Bright, bittersweet, and perfectly refreshing for the garden.", price: 185, dietaryTags: ["vegan", "gluten-free"], image: "https://images.unsplash.com/photo-1563227817-08ea11c3ade9?w=600&h=400&fit=crop" },
  { id: "cocktails-02", name: "Mimosa", category: "cocktails", description: "Fresh orange juice topped with sparkling wine. The brunch essential.", price: 150, dietaryTags: ["vegan", "gluten-free"], image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=600&h=400&fit=crop" },
  { id: "cocktails-03", name: "Irish Coffee", category: "cocktails", description: "Fresh espresso, Irish whiskey, brown sugar, and cream. The ultimate after-dinner warmer.", price: 185, dietaryTags: ["vegetarian", "gluten-free"], image: "https://images.unsplash.com/photo-1517187397637-fa7b7c4c4a7a?w=600&h=400&fit=crop" },
  { id: "cocktails-04", name: "Sauvignon Blanc", category: "cocktails", description: "Crisp, dry white wine with zesty citrus notes. By the glass.", price: 120, dietaryTags: ["vegan", "gluten-free"], image: "https://images.unsplash.com/photo-1558001373-7b93ee48ffa0?w=600&h=400&fit=crop" },
  { id: "cocktails-05", name: "Local Beer", category: "cocktails", description: "Zambia's finest — ice cold Mosi or Castle. The garden essential.", price: 50, dietaryTags: ["vegan", "gluten-free"], image: "https://images.unsplash.com/photo-1566633806327-68e152aaf26d?w=600&h=400&fit=crop" },
  { id: "cocktails-06", name: "Cider", category: "cocktails", description: "Crisp, chilled apple cider. Light and refreshing.", price: 70, dietaryTags: ["vegan", "gluten-free"], image: "https://images.unsplash.com/photo-1576874334257-92649980feb4?w=600&h=400&fit=crop" },
];

export const menuItems: MenuItem[] = (menuJson as unknown as MenuItem[]).length > 0 ? (menuJson as unknown as MenuItem[]) : _fallback_menuItems;

// Live data from JSON files (admin-editable), with hardcoded fallback
const _fallback_weekendSpecials = [
  { id: "special-01", title: "Sunday Braai Platter", description: "A feast for two: grilled T-bone, boerewors, pap & chakalaka, and house wine. Served in the garden.", validUntil: "2026-12-31", price: 380, image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=800&h=500&fit=crop" },
  { id: "special-02", title: "Bottomless Mimosas — Saturday Brunch", description: "Every Saturday 10AM-2PM. Any breakfast dish + 90 minutes of bottomless mimosas.", validUntil: "2026-12-31", price: 250, image: "https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=800&h=500&fit=crop" },
];

export const weekendSpecials: Special[] = (specialsJson as Special[]).length > 0 ? (specialsJson as Special[]) : _fallback_weekendSpecials;

// Live data from JSON files (admin-editable), with hardcoded fallback
const _fallback_coffeeBeans = [
  { id: "bean-01", name: "Zambean House Roast", origin: "Zambia & Ethiopia Blend", roast: "medium", description: "The beans behind every cup. Smooth, chocolatey, citrus finish. 250g.", price: 120, image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=600&h=400&fit=crop", inStock: true },
  { id: "bean-02", name: "Single Origin — Zambia Northern", origin: "Northern Province, Zambia", roast: "light", description: "Bright, floral, stone fruit notes. Direct-trade from smallholder farms. 250g.", price: 140, image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e5?w=600&h=400&fit=crop", inStock: true },
  { id: "bean-03", name: "Dark Roast — Espresso Blend", origin: "Zambia & Tanzania", roast: "dark", description: "Bold, intense, caramel and dark cocoa. Engineered for espresso. 250g.", price: 130, image: "https://images.unsplash.com/photo-1514432324607-a09d9b4aefda?w=600&h=400&fit=crop", inStock: true },
  { id: "bean-04", name: "Decaf — Water Process", origin: "Zambia, Chemical-Free", roast: "medium", description: "All the flavor, none of the caffeine. Swiss Water Process. 250g.", price: 135, image: "https://images.unsplash.com/photo-1611854779393-1b2da9d400fe?w=600&h=400&fit=crop", inStock: true },
];

export const coffeeBeans: CoffeeBean[] = (beansJson as CoffeeBean[]).length > 0 ? (beansJson as CoffeeBean[]) : _fallback_coffeeBeans;

// Live data from JSON files (admin-editable), with hardcoded fallback
const _fallback_reviews = [
  { id: "rev-01", author: "Sarah K.", rating: 5, text: "Best breakfast in Lusaka. The garden setting is absolutely gorgeous — you forget you're in the city.", date: "2026-05-15", platform: "TripAdvisor" },
  { id: "rev-02", author: "James M.", rating: 5, text: "Came for the coffee, stayed for the atmosphere. The antique shop is such a unique touch. Dog-friendly too!", date: "2026-05-28", platform: "Google" },
  { id: "rev-03", author: "Priya R.", rating: 5, text: "The Sunday Braai Platter is incredible value. Beautiful garden, excellent service, great coffee beans for home.", date: "2026-06-01", platform: "TripAdvisor" },
  { id: "rev-04", author: "David N.", rating: 4, text: "Philly Cheese Steak is legit. Great vibe, friendly staff. Only gripe — parking can be tight on weekends.", date: "2026-05-20", platform: "Google" },
  { id: "rev-05", author: "Emily T.", rating: 5, text: "Dog-friendly garden cafe with craft coffee and antique shopping — what a gem! The carrot cake muffin is divine.", date: "2026-06-05", platform: "Facebook" },
];

export const reviews: Review[] = (testimonialsJson as Review[]).length > 0 ? (testimonialsJson as Review[]) : _fallback_reviews;

// Live data from JSON files (admin-editable), with hardcoded fallback
const _fallback_galleryImages = [
  { id: "gal-01", src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop", alt: "Cafe interior", width: 800, height: 600 },
  { id: "gal-02", src: "https://images.unsplash.com/photo-1559339352-11d035aa65de?w=800&h=600&fit=crop", alt: "Garden seating", width: 800, height: 600 },
  { id: "gal-03", src: "https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=800&h=600&fit=crop", alt: "Coffee art", width: 800, height: 600 },
  { id: "gal-04", src: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?w=800&h=600&fit=crop", alt: "Breakfast spread", width: 800, height: 600 },
  { id: "gal-05", src: "https://images.unsplash.com/photo-1498804103079-a6351b050096?w=800&h=600&fit=crop", alt: "Bakery counter", width: 800, height: 600 },
  { id: "gal-06", src: "https://images.unsplash.com/photo-1561047029-3000c68339ca?w=800&h=600&fit=crop", alt: "Dog-friendly patio", width: 800, height: 600 },
  { id: "gal-07", src: "https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?w=800&h=600&fit=crop", alt: "Garden plants", width: 800, height: 600 },
  { id: "gal-08", src: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=800&h=600&fit=crop", alt: "Food plating", width: 800, height: 600 },
];

export const galleryImages: GalleryImage[] = (galleryJson as GalleryImage[]).length > 0 ? (galleryJson as GalleryImage[]) : _fallback_galleryImages;

// Live data from JSON files (admin-editable), with hardcoded fallback
const _fallback_upcomingEvents = [
  { id: "evt-01", title: "Live Jazz Sunday", date: "2026-06-21", description: "Live jazz trio in the garden from 2PM. Special cocktail menu. Booking essential.", image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?w=800&h=500&fit=crop", price: "Free entry — table reservation required" },
  { id: "evt-02", title: "Coffee Tasting Workshop", date: "2026-07-05", description: "Learn to taste coffee like a pro. Covers origins, roasting, and brewing. Includes 250g bag.", image: "https://images.unsplash.com/photo-1507133750040-4a8f57021571?w=800&h=500&fit=crop", price: "K200 per person" },
  { id: "evt-03", title: "Valentine's Dinner — Garden Edition", date: "2026-02-14", description: "Five-course candlelit dinner under the stars. Live acoustic guitar. Limited to 20 couples.", image: "https://images.unsplash.com/photo-1529566652340-2c41a1eb6d93?w=800&h=500&fit=crop", price: "K600 per couple" },
];

export const upcomingEvents: Event[] = (eventsJson as Event[]).length > 0 ? (eventsJson as Event[]) : _fallback_upcomingEvents;

// ── Getter functions for page components ──

export function getFeaturedItems(): MenuItem[] {
  return menuItems.filter((item) => item.featured);
}

export function getSpecials(): Special[] {
  return weekendSpecials;
}

export function getReviews(): Review[] {
  return reviews;
}

export function getEvents(): Event[] {
  return upcomingEvents;
}

export function getGallery(): GalleryImage[] {
  return galleryImages;
}
