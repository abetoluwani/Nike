import type React from "react";

import { Button } from "@heroui/button";

type CartSummaryProps = {
  subtotal: number;
  discount?: number;
};

export function CartSummary({ subtotal, discount = 0 }: CartSummaryProps) {
  return (
    <div className="bg-default-50 rounded-lg p-6 shadow-md">
      <h3 className="font-bold mb-4 text-lg">Cart Total</h3>
      <div className="flex justify-between mb-2 text-sm">
        <span>Cart Subtotal</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mb-2 text-sm">
        <span>Design by Fluttertop</span>
        <span>Free</span>
      </div>
      <div className="flex justify-between mb-2 text-sm">
        <span>Discount</span>
        <span className="text-danger-500">-${discount.toFixed(2)}</span>
      </div>
      <div className="flex justify-between mt-4 text-lg font-bold">
        <span>Cart Total</span>
        <span>${(subtotal - discount).toFixed(2)}</span>
      </div>
      <Button className="w-full mt-6" color="primary" variant="solid">
        Apply
      </Button>
    </div>
  );
}
