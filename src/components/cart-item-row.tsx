import type { CartItem } from "@/context/cart";

import { Button } from "@heroui/button";
import React from "react";

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
  return (
    <div className="flex items-center gap-4 py-4 border-b last:border-b-0">
      <img
        alt={item.name}
        className="w-16 h-16 object-cover rounded"
        src={item.image}
      />
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
