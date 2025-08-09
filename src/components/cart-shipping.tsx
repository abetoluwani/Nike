export function CartShipping() {
  return (
    <div className="bg-default-50 rounded-lg p-6 shadow-md mb-6">
      <h3 className="font-bold mb-4 text-lg">Calculated Shipping</h3>
      <form className="flex flex-col gap-2">
        <select className="border rounded px-3 py-2 text-sm">
          <option>Country</option>
        </select>
        <select className="border rounded px-3 py-2 text-sm">
          <option>State / City</option>
        </select>
        <input
          className="border rounded px-3 py-2 text-sm"
          placeholder="ZIP Code"
          type="text"
        />
        <button
          className="bg-black text-white rounded px-4 py-2 mt-2 font-medium"
          type="button"
        >
          Update
        </button>
      </form>
    </div>
  );
}
