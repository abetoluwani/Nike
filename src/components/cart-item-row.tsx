import type { CartItem } from "@/context/cart";

import { useMemo } from "react";
import { Button } from "@heroui/button";

import { products } from "@/data/products";

type CartItemRowProps = {
  item: CartItem;
  onRemove: (id: string) => void;
  onQuantityChange: (id: string, quantity: number) => void;
};

export function CartItemRow({
  item,
  onRemove,
  onQuantityChange,
}: CartItemRowProps) {
  // Get the original product image from the products data
  const productImage = useMemo(() => {
    const product = products.find((p) => p.id === item.productId);

    return product?.image || item.image;
  }, [item.productId, item.image]);

  return (
    <div className="flex items-center gap-4 py-4 border-b last:border-b-0">
      <div className="w-16 h-16 bg-gray-100 rounded overflow-hidden">
        {productImage ? (
          <img
            alt={item.name}
            className="w-full h-full object-cover"
            src={productImage}
            onError={(e) => {
              // Fallback to a default image if the product image fails to load
              e.currentTarget.src =
                "https://dummyimage.com/100x100/e0e0e0/333333.png&text=Product";
            }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gray-200 text-xs text-gray-500">
            No Image
          </div>
        )}
      </div>
      <div className="flex-1">
        <div className="font-semibold text-base">{item.name}</div>
        <div className="text-xs text-default-500 mb-1">
          {item.size && <span>Size: {item.size} </span>}
          {item.color && <span>Color: {item.color} </span>}
        </div>
        <div className="text-sm text-default-600">${item.price}</div>
      </div>
      <div className="flex items-center gap-2">
        <Button
          disabled={item.quantity <= 1}
          size="sm"
          variant="flat"
          onClick={() => onQuantityChange(item.id, item.quantity - 1)}
        >
          -
        </Button>
        <span className="px-2 font-bold">{item.quantity}</span>
        <Button
          size="sm"
          variant="flat"
          onClick={() => onQuantityChange(item.id, item.quantity + 1)}
        >
          +
        </Button>
      </div>
      <div className="w-24 text-right font-bold text-base">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
      <Button
        color="danger"
        size="sm"
        variant="flat"
        onClick={() => onRemove(item.id)}
      >
        Remove
      </Button>
    </div>
  );
}
