import DefaultLayout from "@/layouts/default";
import { ProductCard } from "@/components/product-card";
import { nikeProducts } from "@/data/products";
import { useCart } from "@/context/cart";

export default function ProductsPage() {
  const { addItem } = useCart();

  return (
    <DefaultLayout>
      <section className="py-8 md:py-12">
        <div className="mb-6 flex items-end justify-between">
          <h1 className="text-3xl font-bold">All Products</h1>
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
      </section>
    </DefaultLayout>
  );
}
