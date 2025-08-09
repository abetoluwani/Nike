# Snickers Collections

## Technologies Used

- [Vite](https://vitejs.dev/guide/)
- [HeroUI](https://heroui.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Tailwind Variants](https://tailwind-variants.org)
- [TypeScript](https://www.typescriptlang.org)
- [Framer Motion](https://www.framer.com/motion)

## How to Use

To clone the project, run the following command:

```bash
git clone https://github.com/abetoluwani/Sneakers-Collection.git
```

### Install dependencies

You can use one of them `npm`, `yarn`, `pnpm`, `bun`, Example using `npm`:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### Setup pnpm (optional)

If you are using `pnpm`, you need to add the following code to your `.npmrc` file:

```bash
public-hoist-pattern[]=*@heroui/*
```

After modifying the `.npmrc` file, you need to run `pnpm install` again to ensure that the dependencies are installed correctly.

## Working Demo

[Live Demo on Vercel](sneakers-collections.vercel.app)

## Layout Approach

The layout uses a responsive grid and flexbox via Tailwind CSS, ensuring the cart and product pages adapt smoothly to both mobile and desktop screens. Components are modular, with clear separation for navigation, cart, and shipping forms.

## Responsiveness Considerations

Mobile-first design is prioritized, with breakpoints for grid and flex layouts to maintain usability and visual appeal across devices. Scrollable containers and adaptive spacing prevent overflow and maintain accessibility.
