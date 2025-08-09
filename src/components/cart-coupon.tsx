import { Button } from "@heroui/button";

export function CartCoupon() {
  return (
    <div className="bg-default-50 rounded-lg p-6 shadow-md mb-6">
      <h3 className="font-bold mb-2 text-lg">Coupon Code</h3>
      <p className="text-xs text-default-500 mb-2">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <div className="flex gap-2 mb-2">
        <input
          className="border rounded px-3 py-2 flex-1 text-sm"
          placeholder="Coupon Code"
          type="text"
        />
        <Button color="primary" variant="solid">
          Apply
        </Button>
      </div>
    </div>
  );
}
