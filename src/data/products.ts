import type { Category, Product } from "@/types/product";
import { categories } from "@/types/product";

export const products: Product[] = [
  {
    id: "classic-chocolate-fudge-cake",
    slug: "classic-chocolate-fudge-cake",
    name: "Classic Chocolate Fudge Cake",
    category: "cakes",
    description:
      "A tall chocolate sponge finished with a soft fudge frosting and a glossy chocolate drip. Made for sharing after dinner or at a birthday table.",
    price: 285,
    image: "/images/products/cakes/classic-chocolate-fudge-cake.jpg",
    alt: "Slice of dense chocolate fudge cake with a ganache top and a chocolate curl",
    isBestseller: true,
    isFeatured: true,
    tags: ["chocolate", "celebration", "birthday"],
    unit: "cake",
  },
  {
    id: "red-velvet-celebration-cake",
    slug: "red-velvet-celebration-cake",
    name: "Red Velvet Celebration Cake",
    category: "cakes",
    description:
      "Deep red velvet layers with a generous cream-cheese style frosting. A familiar celebration cake with a soft, plush crumb.",
    price: 320,
    image: "/images/products/cakes/red-velvet-celebration-cake.jpg",
    alt: "Tall red velvet layer cake with cream-cheese frosting and red crumbs",
    isBestseller: true,
    isFeatured: true,
    tags: ["red velvet", "celebration", "cream cheese"],
    unit: "cake",
  },
  {
    id: "vanilla-berry-cake",
    slug: "vanilla-berry-cake",
    name: "Vanilla Berry Cake",
    category: "cakes",
    description:
      "Pale vanilla sponge layered with berry cream and finished with fresh raspberries. Light enough for afternoon tea, sweet enough for a toast.",
    price: 295,
    image: "/images/products/cakes/vanilla-berry-cake.jpg",
    alt: "Vanilla cake cut open to show cream, strawberries, and blueberries",
    isBestseller: false,
    isFeatured: true,
    tags: ["vanilla", "berry", "raspberry"],
    unit: "cake",
  },
  {
    id: "carrot-walnut-cake",
    slug: "carrot-walnut-cake",
    name: "Carrot Walnut Cake",
    category: "cakes",
    description:
      "A warmly spiced carrot sponge with walnut pieces and a swirl of cream-cheese frosting. Comforting, fragrant, and easy to slice.",
    price: 265,
    image: "/images/products/cakes/carrot-walnut-cake.jpg",
    alt: "Carrot walnut cake with cream-cheese frosting and chopped walnuts",
    isBestseller: false,
    isFeatured: false,
    tags: ["carrot", "walnut", "spice"],
    unit: "cake",
  },
  {
    id: "lemon-drizzle-cake",
    slug: "lemon-drizzle-cake",
    name: "Lemon Drizzle Cake",
    category: "cakes",
    description:
      "A bright lemon bake with a tart citrus crumb and a soft sweet topping. A smaller cake for tea, gifting, or a quiet weekday treat.",
    price: 185,
    image: "/images/products/cakes/lemon-drizzle-cake.jpg",
    alt: "Lemon drizzle loaf cake with white glaze and lemon slices on a cream plate",
    isBestseller: false,
    isFeatured: false,
    tags: ["lemon", "citrus", "tea"],
    unit: "cake",
  },
  {
    id: "black-forest-cake",
    slug: "black-forest-cake",
    name: "Black Forest Cake",
    category: "cakes",
    description:
      "Chocolate layers, whipped cream, and a crown of cherries. A dramatic cake for guests who want something rich and familiar.",
    price: 345,
    image: "/images/products/cakes/black-forest-cake.jpg",
    alt: "Black Forest cake with whipped cream swirls, cherries, and chocolate shavings",
    isBestseller: true,
    isFeatured: true,
    tags: ["chocolate", "cherry", "celebration"],
    unit: "cake",
  },
  {
    id: "strawberry-shortcake",
    slug: "strawberry-shortcake",
    name: "Strawberry Shortcake",
    category: "cakes",
    description:
      "Soft vanilla layers, lightly sweet cream, and plenty of strawberries. A fresh-looking cake for showers, brunches, and garden parties.",
    price: 315,
    image: "/images/products/cakes/strawberry-shortcake.jpg",
    alt: "Strawberry shortcake with biscuit layers, cream, and fresh strawberries",
    isBestseller: false,
    isFeatured: true,
    tags: ["strawberry", "vanilla", "celebration"],
    unit: "cake",
  },
  {
    id: "salted-caramel-cake",
    slug: "salted-caramel-cake",
    name: "Salted Caramel Cake",
    category: "cakes",
    description:
      "A caramel-glazed cake with a gentle salt finish and a smooth, glossy top. Rich without being heavy on decoration.",
    price: 335,
    image: "/images/products/cakes/salted-caramel-cake.jpg",
    alt: "Round cake with a salted caramel drip and pale tan frosting",
    isBestseller: false,
    isFeatured: false,
    tags: ["caramel", "salted", "chocolate"],
    unit: "cake",
  },
  {
    id: "coconut-cream-cake",
    slug: "coconut-cream-cake",
    name: "Coconut Cream Cake",
    category: "cakes",
    description:
      "White frosting, toasted coconut, and a pale, tender sponge. A soft celebration cake for people who prefer something less chocolate-forward.",
    price: 290,
    image: "/images/products/cakes/coconut-cream-cake.jpg",
    alt: "White coconut cake covered in toasted coconut flakes with a slice removed",
    isBestseller: false,
    isFeatured: false,
    tags: ["coconut", "cream", "celebration"],
    unit: "cake",
  },
  {
    id: "cookies-and-cream-cake",
    slug: "cookies-and-cream-cake",
    name: "Cookies and Cream Cake",
    category: "cakes",
    description:
      "Chocolate sponge and sweet cream folded with cookie crumbs. A playful cake that still looks tidy on a party table.",
    price: 300,
    image: "/images/products/cakes/cookies-and-cream-cake.jpg",
    alt: "Cookies and cream layer cake with white frosting and cookie pieces",
    isBestseller: true,
    isFeatured: false,
    tags: ["cookies", "chocolate", "cream"],
    unit: "cake",
  },
  {
    id: "chocolate-ganache-cupcake",
    slug: "chocolate-ganache-cupcake",
    name: "Chocolate Ganache Cupcake",
    category: "cupcakes",
    description:
      "A dark chocolate cupcake capped with a smooth ganache dome. Small, glossy, and easy to box for a thank-you.",
    price: 18,
    image: "/images/products/cupcakes/chocolate-ganache-cupcake.jpg",
    alt: "Chocolate cupcake topped with a smooth dark ganache dome",
    isBestseller: false,
    isFeatured: false,
    tags: ["chocolate", "ganache"],
    unit: "each",
  },
  {
    id: "vanilla-buttercream-cupcake",
    slug: "vanilla-buttercream-cupcake",
    name: "Vanilla Buttercream Cupcake",
    category: "cupcakes",
    description:
      "A classic vanilla cupcake with a tall swirl of buttercream. The simple one people reach for first at a gathering.",
    price: 15,
    image: "/images/packaging/cupcake-box.jpg",
    alt: "Four vanilla buttercream cupcakes in an open Golden Oven box",
    isBestseller: false,
    isFeatured: true,
    tags: ["vanilla", "buttercream"],
    unit: "each",
  },
  {
    id: "red-velvet-cupcake",
    slug: "red-velvet-cupcake",
    name: "Red Velvet Cupcake",
    category: "cupcakes",
    description:
      "A red velvet cupcake with cream-cheese frosting and a light crumb topping. The same celebration flavour, in a single bite.",
    price: 18,
    image: "/images/products/cupcakes/red-velvet-cupcake.jpg",
    alt: "Red velvet cupcake with white frosting and red crumbs on a wooden board",
    isBestseller: true,
    isFeatured: true,
    tags: ["red velvet", "cream cheese"],
    unit: "each",
  },
  {
    id: "strawberry-swirl-cupcake",
    slug: "strawberry-swirl-cupcake",
    name: "Strawberry Swirl Cupcake",
    category: "cupcakes",
    description:
      "Vanilla sponge with a pink strawberry swirl through the frosting and a fresh berry on top. Pretty in a mixed box.",
    price: 16,
    image: "/images/products/cupcakes/strawberry-swirl-cupcake.jpg",
    alt: "Cupcake with pink and cream swirled frosting and a fresh strawberry",
    isBestseller: false,
    isFeatured: false,
    tags: ["strawberry", "vanilla"],
    unit: "each",
  },
  {
    id: "lemon-meringue-cupcake",
    slug: "lemon-meringue-cupcake",
    name: "Lemon Meringue Cupcake",
    category: "cupcakes",
    description:
      "A citrus cupcake with a bright lemon crumb and a cloud of white frosting. Sharp, sweet, and easy to share.",
    price: 17,
    image: "/images/products/cupcakes/lemon-meringue-cupcake.jpg",
    alt: "Cupcake with white frosting and citrus sugar crystals in a yellow paper case",
    isBestseller: false,
    isFeatured: false,
    tags: ["lemon", "citrus", "meringue"],
    unit: "each",
  },
  {
    id: "salted-caramel-cupcake",
    slug: "salted-caramel-cupcake",
    name: "Salted Caramel Cupcake",
    category: "cupcakes",
    description:
      "Golden sponge, caramel buttercream, and a thin caramel drip. A small version of the salted caramel cake.",
    price: 18,
    image: "/images/products/cupcakes/salted-caramel-cupcake.jpg",
    alt: "Cupcake with caramel buttercream and a caramel drip",
    isBestseller: false,
    isFeatured: false,
    tags: ["caramel", "salted"],
    unit: "each",
  },
  {
    id: "cookies-and-cream-cupcake",
    slug: "cookies-and-cream-cupcake",
    name: "Cookies and Cream Cupcake",
    category: "cupcakes",
    description:
      "Chocolate cupcake and pale cream frosting scattered with cookie crumbs. A favourite for mixed dessert boxes.",
    price: 17,
    image: "/images/products/cupcakes/cookies-and-cream-cupcake.jpg",
    alt: "Chocolate cupcake with white frosting and cookie crumbs on a cream plate",
    isBestseller: false,
    isFeatured: false,
    tags: ["cookies", "chocolate", "cream"],
    unit: "each",
  },
  {
    id: "double-chocolate-cupcake",
    slug: "double-chocolate-cupcake",
    name: "Double Chocolate Cupcake",
    category: "cupcakes",
    description:
      "Chocolate sponge under a second layer of chocolate frosting and shavings. For the person who always chooses the darkest option.",
    price: 20,
    image: "/images/products/cupcakes/double-chocolate-cupcake.jpg",
    alt: "Dark chocolate cupcake with chocolate frosting and chocolate shavings",
    isBestseller: true,
    isFeatured: false,
    tags: ["chocolate", "ganache"],
    unit: "each",
  },
  {
    id: "coconut-cream-cupcake",
    slug: "coconut-cream-cupcake",
    name: "Coconut Cream Cupcake",
    category: "cupcakes",
    description:
      "A soft cupcake finished with white frosting and toasted coconut. Light, fragrant, and neat in a gift box.",
    price: 16,
    image: "/images/products/cupcakes/coconut-cream-cupcake.jpg",
    alt: "Cupcake with white frosting and toasted coconut flakes",
    isBestseller: false,
    isFeatured: false,
    tags: ["coconut", "cream"],
    unit: "each",
  },
  {
    id: "mocha-cupcake",
    slug: "mocha-cupcake",
    name: "Mocha Cupcake",
    category: "cupcakes",
    description:
      "Chocolate and coffee in one cupcake, with a coffee-tinted swirl on top. A grown-up flavour for afternoon orders.",
    price: 18,
    image: "/images/products/cupcakes/mocha-cupcake.jpg",
    alt: "Mocha cupcake with coffee-coloured frosting and coffee beans beside it",
    isBestseller: false,
    isFeatured: false,
    tags: ["coffee", "chocolate", "mocha"],
    unit: "each",
  },
  {
    id: "classic-white-bread",
    slug: "classic-white-bread",
    name: "Classic White Bread",
    category: "bread",
    description:
      "A soft white sandwich loaf with a thin golden crust. The everyday loaf for toast, school boxes, and simple breakfasts.",
    price: 18,
    image: "/images/products/bread/classic-white-bread.jpg",
    alt: "Sliced soft white sandwich loaf on a wooden board",
    isBestseller: false,
    isFeatured: false,
    tags: ["white", "sandwich", "loaf"],
    unit: "loaf",
  },
  {
    id: "whole-wheat-bread",
    slug: "whole-wheat-bread",
    name: "Whole Wheat Bread",
    category: "bread",
    description:
      "A sliced whole-wheat loaf with a nutty crumb and a sturdy crust. Useful for toast and sandwiches through the week.",
    price: 22,
    image: "/images/products/bread/whole-wheat-bread.jpg",
    alt: "Sliced whole wheat loaf on a wooden cutting board",
    isBestseller: false,
    isFeatured: false,
    tags: ["wheat", "wholegrain", "sandwich"],
    unit: "loaf",
  },
  {
    id: "milk-bread",
    slug: "milk-bread",
    name: "Milk Bread",
    category: "bread",
    description:
      "A soft, pull-apart milk loaf with a tender crumb and a gentle sweetness. Lovely warm, or toasted with butter.",
    price: 25,
    image: "/images/products/bread/milk-bread.jpg",
    alt: "Soft square milk bread loaf with one slice leaning against it",
    isBestseller: true,
    isFeatured: true,
    tags: ["milk", "soft", "sweet"],
    unit: "loaf",
  },
  {
    id: "brioche-loaf",
    slug: "brioche-loaf",
    name: "Brioche Loaf",
    category: "bread",
    description:
      "An enriched brioche with a shiny crust and a yellow, buttery crumb. Excellent for French toast or a special breakfast.",
    price: 35,
    image: "/images/products/bread/brioche-loaf.jpg",
    alt: "Golden brioche loaf torn open to show a soft yellow crumb",
    isBestseller: false,
    isFeatured: false,
    tags: ["brioche", "butter", "breakfast"],
    unit: "loaf",
  },
  {
    id: "garlic-bread",
    slug: "garlic-bread",
    name: "Garlic Bread",
    category: "bread",
    description:
      "Toasted slices brushed with garlic butter and herbs. A savoury loaf to share beside soup or a weekend meal.",
    price: 28,
    image: "/images/products/bread/garlic-bread.jpg",
    alt: "Toasted garlic bread slices with herbs on a white plate",
    isBestseller: false,
    isFeatured: false,
    tags: ["garlic", "savoury", "herb"],
    unit: "loaf",
  },
  {
    id: "banana-bread",
    slug: "banana-bread",
    name: "Banana Bread",
    category: "bread",
    description:
      "A moist banana loaf with a tender crumb, finished with a few chocolate pieces and nuts on top. Sweet enough for a snack.",
    price: 32,
    image: "/images/products/bread/banana-bread.jpg",
    alt: "Banana bread loaf topped with pecans and chocolate chips, with a buttered slice",
    isBestseller: true,
    isFeatured: false,
    tags: ["banana", "sweet", "loaf"],
    unit: "loaf",
  },
  {
    id: "cinnamon-swirl-bread",
    slug: "cinnamon-swirl-bread",
    name: "Cinnamon Swirl Bread",
    category: "bread",
    description:
      "A sweet loaf rolled with cinnamon sugar so every slice shows a spiral. Best slightly warm.",
    price: 30,
    image: "/images/products/bread/cinnamon-swirl-bread.jpg",
    alt: "Sliced cinnamon swirl loaf with a spiral visible in the crumb",
    isBestseller: false,
    isFeatured: false,
    tags: ["cinnamon", "sweet", "swirl"],
    unit: "loaf",
  },
  {
    id: "coconut-bread",
    slug: "coconut-bread",
    name: "Coconut Bread",
    category: "bread",
    description:
      "A lightly sweet loaf with coconut through the crumb and a golden crust. A favourite for tea time.",
    price: 26,
    image: "/images/products/bread/coconut-bread.jpg",
    alt: "Coconut bread loaf with a slice cut to show coconut in the crumb",
    isBestseller: false,
    isFeatured: false,
    tags: ["coconut", "sweet", "loaf"],
    unit: "loaf",
  },
  {
    id: "sweet-raisin-bread",
    slug: "sweet-raisin-bread",
    name: "Sweet Raisin Bread",
    category: "bread",
    description:
      "A soft sweet loaf studded with raisins. Simple, fragrant, and good toasted with a little butter.",
    price: 24,
    image: "/images/products/bread/sweet-raisin-bread.jpg",
    alt: "Sliced raisin bread loaf on a wooden board",
    isBestseller: false,
    isFeatured: false,
    tags: ["raisin", "sweet", "breakfast"],
    unit: "loaf",
  },
  {
    id: "multigrain-bread",
    slug: "multigrain-bread",
    name: "Multigrain Bread",
    category: "bread",
    description:
      "A seeded, grain-topped loaf with a deeper flavour than white bread. Hearty enough for a proper sandwich.",
    price: 28,
    image: "/images/products/bread/multigrain-bread.jpg",
    alt: "Three rustic loaves topped with seeds and grains on a dark wooden table",
    isBestseller: false,
    isFeatured: false,
    tags: ["seed", "grain", "hearty"],
    unit: "loaf",
  },
  {
    id: "butter-croissant",
    slug: "butter-croissant",
    name: "Butter Croissant",
    category: "pastries",
    description:
      "A laminated butter croissant with a shatteringly crisp outside and a soft, honeycombed centre.",
    price: 12,
    image: "/images/packaging/pastry-box.jpg",
    alt: "Butter croissants in a Golden Oven pastry box tied with a sage ribbon",
    isBestseller: true,
    isFeatured: true,
    tags: ["croissant", "butter", "breakfast"],
    unit: "each",
  },
  {
    id: "chocolate-croissant",
    slug: "chocolate-croissant",
    name: "Chocolate Croissant",
    category: "pastries",
    description:
      "The same flaky pastry, baked with dark chocolate tucked inside. A morning pastry that feels a little more indulgent.",
    price: 15,
    image: "/images/products/pastries/chocolate-croissant.jpg",
    alt: "Two golden croissants on parchment, with chocolate visible in the front pastry",
    isBestseller: true,
    isFeatured: false,
    tags: ["croissant", "chocolate"],
    unit: "each",
  },
  {
    id: "cinnamon-roll",
    slug: "cinnamon-roll",
    name: "Cinnamon Roll",
    category: "pastries",
    description:
      "A spiral of sweet dough, cinnamon, and a light sugar finish. Sticky, warm, and generous.",
    price: 14,
    image: "/images/products/pastries/cinnamon-roll.jpg",
    alt: "Cinnamon roll with white icing on a small plate",
    isBestseller: true,
    isFeatured: true,
    tags: ["cinnamon", "sweet"],
    unit: "each",
  },
  {
    id: "apple-turnover",
    slug: "apple-turnover",
    name: "Apple Turnover",
    category: "pastries",
    description:
      "Flaky pastry folded around a soft apple filling. A handheld pastry with a little tartness in the fruit.",
    price: 16,
    image: "/images/products/pastries/apple-turnover.jpg",
    alt: "Golden apple turnover with flaky pastry and apple filling on a cream plate",
    isBestseller: false,
    isFeatured: false,
    tags: ["apple", "fruit", "flaky"],
    unit: "each",
  },
  {
    id: "sausage-roll",
    slug: "sausage-roll",
    name: "Sausage Roll",
    category: "pastries",
    description:
      "Seasoned sausage wrapped in golden puff pastry. A savoury counter snack for late morning or after school.",
    price: 12,
    image: "/images/products/pastries/sausage-roll.jpg",
    alt: "Golden sausage rolls on parchment, one cut open to show the filling",
    isBestseller: false,
    isFeatured: false,
    tags: ["savoury", "sausage"],
    unit: "each",
  },
  {
    id: "meat-pie",
    slug: "meat-pie",
    name: "Meat Pie",
    category: "pastries",
    description:
      "A hand pie with a flaky crust and a savoury minced filling. The kind of pastry people pick up on the way home.",
    price: 15,
    image: "/images/products/pastries/meat-pie.jpg",
    alt: "Golden meat pie with a crimped lid and a steam hole",
    isBestseller: true,
    isFeatured: false,
    tags: ["savoury", "meat", "pie"],
    unit: "each",
  },
  {
    id: "chicken-pie",
    slug: "chicken-pie",
    name: "Chicken Pie",
    category: "pastries",
    description:
      "A round pie with a golden lid and a chicken filling. Heartier than a turnover, still easy to take away.",
    price: 18,
    image: "/images/products/pastries/chicken-pie.jpg",
    alt: "Chicken pie with a golden pastry lid and a wedge removed",
    isBestseller: false,
    isFeatured: false,
    tags: ["savoury", "chicken", "pie"],
    unit: "each",
  },
  {
    id: "fruit-danish",
    slug: "fruit-danish",
    name: "Fruit Danish",
    category: "pastries",
    description:
      "Laminated pastry with custard and fruit in the centre. A bright counter piece beside the croissants.",
    price: 14,
    image: "/images/products/pastries/fruit-danish.jpg",
    alt: "Two fruit danishes with strawberry and custard centres on a cream plate",
    isBestseller: false,
    isFeatured: false,
    tags: ["fruit", "custard", "danish"],
    unit: "each",
  },
  {
    id: "cream-puff",
    slug: "cream-puff",
    name: "Cream Puff",
    category: "pastries",
    description:
      "Light choux buns filled with vanilla cream and dusted with sugar. Delicate, and best eaten the day they are baked.",
    price: 10,
    image: "/images/products/pastries/cream-puff.jpg",
    alt: "Cream puffs split open to show pastry cream",
    isBestseller: false,
    isFeatured: false,
    tags: ["choux", "cream", "vanilla"],
    unit: "each",
  },
  {
    id: "chocolate-eclair",
    slug: "chocolate-eclair",
    name: "Chocolate Éclair",
    category: "pastries",
    description:
      "An oblong choux pastry filled with cream and finished with a dark chocolate glaze. A patisserie classic from the counter.",
    price: 16,
    image: "/images/products/pastries/chocolate-eclair.jpg",
    alt: "Chocolate eclair with cream filling on a cream plate",
    isBestseller: false,
    isFeatured: false,
    tags: ["chocolate", "choux", "eclair"],
    unit: "each",
  },
];

const expectedCounts: Record<Category, number> = {
  cakes: 10,
  cupcakes: 10,
  bread: 10,
  pastries: 10,
};

function assertCatalogue(list: Product[]) {
  const ids = new Set<string>();
  const slugs = new Set<string>();

  for (const product of list) {
    if (ids.has(product.id) || slugs.has(product.slug)) {
      throw new Error(`Duplicate product identifier: ${product.id}`);
    }
    ids.add(product.id);
    slugs.add(product.slug);
    if (product.price <= 0) {
      throw new Error(`Invalid price for ${product.id}`);
    }
  }

  for (const category of categories) {
    const count = list.filter((product) => product.category === category).length;
    if (count !== expectedCounts[category]) {
      throw new Error(`Expected 10 ${category}, found ${count}`);
    }
  }
}

assertCatalogue(products);

export function getProductById(id: string) {
  return products.find((product) => product.id === id);
}

export function getProductsByCategory(category: Category) {
  return products.filter((product) => product.category === category);
}

export function getFeaturedProducts() {
  return products.filter((product) => product.isFeatured);
}

export function getBestsellerProducts() {
  return products.filter((product) => product.isBestseller);
}

export const showcaseProductIds = [
  "classic-chocolate-fudge-cake",
  "red-velvet-cupcake",
  "butter-croissant",
] as const;

export function getShowcaseProducts() {
  return showcaseProductIds
    .map((id) => getProductById(id))
    .filter((product): product is Product => Boolean(product));
}
