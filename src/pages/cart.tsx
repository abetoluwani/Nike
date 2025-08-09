import { Button } from "@heroui/button";

import { CartItemRow } from "@/components/cart-item-row";
import { CartSummary } from "@/components/cart-summary";
import { CartCoupon } from "@/components/cart-coupon";
import { CartShipping } from "@/components/cart-shipping";
import DefaultLayout from "@/layouts/default";
import { useCart } from "@/context/cart";

export default function CartPage() {
  const { items, subtotal, removeItem, clear, updateQuantity } = useCart();
  const discount = 4.0;

  const handleQuantityChange = (id: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    updateQuantity(id, newQuantity);
  };

  return (
    <DefaultLayout>
      <section className="py-6 md:py-12 px-2 sm:px-4">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">Shopping Bag</h1>
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Cart Items Table */}
          <div className="w-full lg:flex-1 rounded-xl shadow-md p-4 md:p-6 mb-8 lg:mb-0">
            <div className="mb-4 text-sm text-default-500">
              <span className="font-bold">{items.length}</span> item
              {items.length !== 1 ? "s" : ""} in your bag.
            </div>
            {items.length === 0 ? (
              <div className="text-center py-16 md:py-20">
                <h2 className="text-xl md:text-2xl font-bold">
                  Your cart is empty
                </h2>
                <p className="text-default-500 mt-2">
                  Add some sneakers to your cart!
                </p>
              </div>
            ) : (
              <div>
                <div className="w-full overflow-x-auto">
                  <div>
                    <div className="hidden sm:grid grid-cols-5 gap-4 pb-2 border-b font-bold text-default-600 text-xs sm:text-sm">
                      <div className="col-span-2">Product</div>
                      <div>Price</div>
                      <div>Quantity</div>
                      <div className="text-right">Total Price</div>
                    </div>
                    <div className="block sm:hidden min-w-[400px] pb-2 border-b font-bold text-default-600 text-xs">
                      <div className="flex justify-between">
                        <span>Product</span>
                        <span>Price</span>
                      </div>
                      <div className="flex justify-between mt-1">
                        <span>Quantity</span>
                        <span>Total</span>
                      </div>
                    </div>
                    {items.map((item) => (
                      <CartItemRow
                        key={item.id}
                        item={item}
                        onQuantityChange={handleQuantityChange}
                        onRemove={removeItem}
                      />
                    ))}
                  </div>
                </div>
                <div className="flex justify-end mt-4">
                  <Button color="danger" variant="light" onClick={clear}>
                    Clear Cart
                  </Button>
                </div>
              </div>
            )}
          </div>
          {/* Cart Sidebar */}
          <div className="w-full lg:w-[350px] flex flex-col gap-4">
            <CartShipping />
            <CartCoupon />
            <CartSummary discount={discount} subtotal={subtotal} />
          </div>
        </div>
      </section>
    </DefaultLayout>
  );
}
