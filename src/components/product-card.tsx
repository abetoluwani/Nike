import React, { useState } from "react";
import { Button } from "@heroui/button";
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from "@heroui/dropdown";
import { motion } from "framer-motion";
import {
  ChevronDownIcon,
  HeartIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import {
  HeartIcon as HeartIconSolid,
  SparklesIcon,
} from "@heroicons/react/24/solid";

import { Product } from "@/data/products";

interface ProductCardProps {
  onAddToCart?: (
    productId: string,
    variant: { color?: string; size?: string },
  ) => void;
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({
  onAddToCart,
  product,
}) => {
  const [selectedSize, setSelectedSize] = useState<string>("");
  const [selectedColor, setSelectedColor] = useState<string>("");
  const [isLiked, setIsLiked] = useState(false);
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const handleAddToCart = () => {
    if (!product.inStock) return;
    // Require size and color selection if available
    if (
      (product.variants.size &&
        product.variants.size.length > 0 &&
        !selectedSize) ||
      (product.variants.color &&
        product.variants.color.length > 0 &&
        !selectedColor)
    ) {
      // Optionally show a message to user here
      return;
    }
    onAddToCart?.(product.id, {
      color: selectedColor,
      size: selectedSize,
    });
  };

  const cardVariants = {
    animate: {
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
      y: 0,
    },
    hover: {
      transition: { duration: 0.3, ease: "easeOut" },
      y: -10,
    },
    initial: { opacity: 0, y: 50 },
  };

  const imageVariants = {
    hover: {
      scale: 1.05,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    initial: { scale: 1 },
  };

  const priceVariants = {
    animate: {
      scale: [1, 1.05, 1] as number[],
      transition: { delay: 0.3, duration: 0.5 },
    },
    initial: { scale: 1 },
  };

  return (
    <motion.div
      animate="animate"
      className="group relative overflow-hidden rounded-2xl bg-white shadow-lg transition-shadow duration-300 hover:shadow-2xl dark:bg-gray-900"
      initial="initial"
      variants={cardVariants}
      whileHover="hover"
    >
      {product.originalPrice && product.originalPrice > product.price && (
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="absolute left-4 top-4 z-10 rounded-full bg-red-500 px-3 py-1 text-sm font-semibold text-white"
          initial={{ opacity: 0, scale: 0 }}
          transition={{ delay: 0.4, duration: 0.3 }}
        >
          Sale
        </motion.div>
      )}

      {/* Featured badge (top-left) */}
      {product.featured && (
        <motion.div
          animate={{ opacity: 1, scale: 1 }}
          className="absolute left-4 top-4 z-10 inline-flex items-center gap-1 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 px-3 py-1 text-sm font-semibold text-white"
          initial={{ opacity: 0, scale: 0 }}
          transition={{ delay: 0.3, duration: 0.25 }}
        >
          <SparklesIcon className="h-4 w-4" />
          Featured
        </motion.div>
      )}

      {/* Like button (top-right) */}
      <motion.button
        className="absolute right-4 top-4 z-10 rounded-full bg-white/80 p-2 backdrop-blur-sm shadow-md transition-colors hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-800"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsLiked(!isLiked)}
      >
        {isLiked ? (
          <HeartIconSolid className="h-5 w-5 text-red-500" />
        ) : (
          <HeartIcon className="h-5 w-5 text-gray-600 dark:text-gray-300" />
        )}
      </motion.button>

      <div className="relative h-64 overflow-hidden bg-gray-100 dark:bg-gray-800">
        <motion.img
          alt={product.name}
          animate={{ opacity: isImageLoaded ? 1 : 0 }}
          className="h-full w-full object-cover"
          initial={{ opacity: 0 }}
          src={product.image}
          transition={{ duration: 0.3 }}
          variants={imageVariants}
          onLoad={() => setIsImageLoaded(true)}
        />

        <motion.div
          className="absolute inset-0 flex items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <motion.div
            className="rounded-lg bg-white/90 px-4 py-2 text-sm font-medium backdrop-blur-sm dark:bg-gray-800/90"
            initial={{ scale: 0 }}
            transition={{ duration: 0.2 }}
            whileHover={{ scale: 1 }}
          >
            Quick View
          </motion.div>
        </motion.div>

        {!product.inStock && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/50">
            <div className="rounded-lg bg-white px-4 py-2 font-semibold text-gray-900 dark:bg-gray-800 dark:text-white">
              Out of Stock
            </div>
          </div>
        )}
      </div>

      <div className="p-6">
        <motion.p
          animate={{ opacity: 1 }}
          className="mb-2 text-sm text-gray-500 dark:text-gray-400"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.2 }}
        >
          {product.category}
        </motion.p>

        <motion.h3
          animate={{ opacity: 1, x: 0 }}
          className="mb-2 line-clamp-2 text-xl font-bold text-gray-900 dark:text-white"
          initial={{ opacity: 0, x: -20 }}
          transition={{ delay: 0.3 }}
        >
          {product.name}
        </motion.h3>

        <motion.p
          animate={{ opacity: 1 }}
          className="mb-4 line-clamp-2 text-sm text-gray-600 dark:text-gray-400"
          initial={{ opacity: 0 }}
          transition={{ delay: 0.4 }}
        >
          {product.description}
        </motion.p>

        <motion.div
          animate="animate"
          className="mb-4 flex items-center gap-2"
          initial="initial"
          variants={priceVariants}
        >
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            ${product.price}
          </span>
          {product.originalPrice && product.originalPrice > product.price && (
            <span className="text-lg text-gray-500 line-through">
              ${product.originalPrice}
            </span>
          )}
        </motion.div>

        <div className="mb-6 space-y-3">
          {product.variants.size && product.variants.size.length > 0 && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.5 }}
            >
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    className="w-full justify-between"
                    endContent={<ChevronDownIcon className="h-4 w-4" />}
                    isDisabled={!product.inStock}
                    variant="bordered"
                  >
                    {selectedSize || "Select Size"}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Size selection"
                  onAction={(key) => setSelectedSize(key as string)}
                >
                  {product.variants.size.map((size: string) => (
                    <DropdownItem key={size}>{size}</DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </motion.div>
          )}

          {product.variants.color && product.variants.color.length > 0 && (
            <motion.div
              animate={{ opacity: 1, y: 0 }}
              initial={{ opacity: 0, y: 10 }}
              transition={{ delay: 0.6 }}
            >
              <Dropdown>
                <DropdownTrigger>
                  <Button
                    className="w-full justify-between"
                    endContent={<ChevronDownIcon className="h-4 w-4" />}
                    isDisabled={!product.inStock}
                    variant="bordered"
                  >
                    {selectedColor || "Select Color"}
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  aria-label="Color selection"
                  onAction={(key) => setSelectedColor(key as string)}
                >
                  {product.variants.color.map((color: string) => (
                    <DropdownItem key={color}>{color}</DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </motion.div>
          )}
        </div>

        <motion.div
          animate={{ opacity: 1, y: 0 }}
          initial={{ opacity: 0, y: 10 }}
          transition={{ delay: 0.7 }}
        >
          <Button
            as={motion.button}
            className="w-full font-semibold"
            color={product.inStock ? "primary" : "default"}
            isDisabled={
              !product.inStock ||
              (product.variants.size &&
                product.variants.size.length > 0 &&
                !selectedSize) ||
              (product.variants.color &&
                product.variants.color.length > 0 &&
                !selectedColor)
            }
            size="lg"
            startContent={
              product.inStock ? (
                <ShoppingCartIcon className="h-5 w-5" />
              ) : undefined
            }
            variant={product.inStock ? "shadow" : "bordered"}
            whileHover={product.inStock ? { scale: 1.02 } : {}}
            whileTap={product.inStock ? { scale: 0.98 } : {}}
            onPress={handleAddToCart}
          >
            {product.inStock ? "Add to Cart" : "Out of Stock"}
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};
