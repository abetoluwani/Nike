import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import { Snippet } from "@heroui/snippet";
import { motion } from "framer-motion";

import DefaultLayout from "@/layouts/default";
import { ProductCard } from "@/components/product-card";
import { nikeProducts } from "@/data/products";
import { subtitle, title } from "@/components/primitives";
import { useCart } from "@/context/cart";

export default function IndexPage() {
  const { addItem } = useCart();

  return (
    <DefaultLayout>
      {/* Hero */}
      <section className="relative flex flex-col items-center justify-center gap-6 py-12 md:py-16">
        <motion.div
          animate={{ opacity: 1, y: 0 }}
          className="inline-block max-w-3xl text-center"
          initial={{ opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <h1 className="text-balance">
            <span className={title()}>Nike&nbsp;</span>
            <span className={title({ color: "violet" })}>Sneakers&nbsp;</span>
            <br />
            <span className={title()}>Built for speed and style.</span>
          </h1>
          <p className={subtitle({ class: "mt-4 mx-auto" })}>
            Explore our latest Nike collection. Clean UI, responsive grid, and
            delightful animations.
          </p>
        </motion.div>

        <div className="flex gap-4">
          <Button
            as={Link}
            color="primary"
            href="/products"
            radius="full"
            variant="shadow"
          >
            Shop Now
          </Button>
        </div>
      </section>

      {/* Products */}
      <section className="py-6 md:py-10" id="products">
        <div className="mb-6 flex items-end justify-between">
          <h2 className="text-2xl font-bold">Featured Nike Products</h2>
          <Link href="#">See all</Link>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {nikeProducts.map((p) => (
            <ProductCard
              key={p.id}
              product={p}
              onAddToCart={(id, variant) => {
                const product = nikeProducts.find((x) => x.id === id)!;

                addItem(product, variant);
              }}
            />
          ))}
        </div>

        <div className="mt-8 text-center">
          <Snippet hideCopyButton hideSymbol variant="bordered" />
        </div>
      </section>
    </DefaultLayout>
  );
}
