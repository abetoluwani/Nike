import { useState, useMemo } from "react";
import { Input } from "@heroui/input";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@heroui/dropdown";
import { Button } from "@heroui/button";
import { Chip } from "@heroui/chip";
import {
  MagnifyingGlassIcon,
  FunnelIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

import DefaultLayout from "@/layouts/default";
import { ProductCard } from "@/components/product-card";
import { useCart } from "@/context/cart";
import { products } from "@/data/products";

export default function ProductsPage() {
  const { addItem } = useCart();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedBrand, setSelectedBrand] = useState<string>("All");

  // Get unique brands from products
  const brands = useMemo(() => {
    return [
      "All",
      ...Array.from(new Set(products.map((p) => p.category || "Unknown"))),
    ];
  }, []);

  // ...existing code...

  // Filter products based on search term and brand only
  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch =
        searchTerm === "" ||
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesBrand =
        selectedBrand === "All" || product.category === selectedBrand;

      return matchesSearch && matchesBrand;
    });
  }, [searchTerm, selectedBrand]);

  const resetFilters = () => {
    setSearchTerm("");
    setSelectedBrand("All");
  };

  return (
    <DefaultLayout>
      <section className="py-8 md:py-12">
        <div className="mb-6">
          <h1 className="text-3xl font-bold mb-6">All Products</h1>

          {/* Search and Filters */}
          <div className="mb-6 flex flex-col gap-4 lg:flex-row">
            {/* Search input */}
            <div className="flex-1">
              <Input
                classNames={{
                  inputWrapper: "bg-default-100",
                }}
                placeholder="Search sneakers..."
                startContent={
                  <MagnifyingGlassIcon className="h-5 w-5 text-default-400" />
                }
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>

            {/* Brand filter */}
            <div className="flex gap-2">
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    endContent={<FunnelIcon className="h-4 w-4" />}
                    variant="flat"
                  >
                    {selectedBrand || "Category"}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Brand selection"
                  onAction={(key) => setSelectedBrand(key as string)}
                >
                  {brands.map((brand) => (
                    <DropdownItem key={brand}>{brand}</DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>

              {/* ...existing code... */}

              {/* Reset filters */}
              {(searchTerm || (selectedBrand && selectedBrand !== "All")) && (
                <Button
                  color="danger"
                  startContent={<XMarkIcon className="h-4 w-4" />}
                  variant="light"
                  onClick={resetFilters}
                >
                  Reset
                </Button>
              )}
            </div>
          </div>

          {/* Active filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedBrand && selectedBrand !== "All" && (
              <Chip variant="flat" onClose={() => setSelectedBrand("All")}>
                Category: {selectedBrand}
              </Chip>
            )}
          </div>

          {/* Results count */}
          <p className="text-default-500 mb-4">
            Showing {filteredProducts.length} of {products.length} products
          </p>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {filteredProducts.map((p) => (
              <ProductCard
                key={p.id}
                product={p}
                onAddToCart={(id, variant) => {
                  const product = products.find((x) => x.id === id)!;

                  addItem(product, variant);
                }}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold">No products found</h2>
            <p className="text-default-500 mt-2">
              Try adjusting your filters or search term
            </p>
            <Button className="mt-4" color="primary" onClick={resetFilters}>
              Reset Filters
            </Button>
          </div>
        )}
      </section>
    </DefaultLayout>
  );
}
