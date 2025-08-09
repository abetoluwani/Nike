import { Button } from "@heroui/button";
import { Link } from "@heroui/link";
import {
  Navbar as HeroUINavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
} from "@heroui/navbar";
import { link as linkStyles } from "@heroui/theme";
import clsx from "clsx";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";
import { useCart } from "@/context/cart";

export const Navbar = () => {
  const { count, items, subtotal } = useCart();
  const cartPreview = (
    <div className="absolute right-0 mt-2 w-80 bg-white shadow-lg rounded-lg z-50 p-4 border">
      <h3 className="font-bold mb-2">Cart</h3>
      {items.length === 0 ? (
        <div className="text-default-500 text-sm">Your cart is empty.</div>
      ) : (
        <div>
          {items.slice(0, 3).map((item) => (
            <div key={item.id} className="flex items-center gap-2 mb-2">
              <img
                alt={item.name}
                className="w-10 h-10 object-cover rounded"
                src={item.image}
              />
              <div className="flex-1">
                <div className="font-medium text-sm">{item.name}</div>
                <div className="text-xs text-default-500">
                  Qty: {item.quantity}
                </div>
              </div>
              <div className="text-xs font-bold">
                ${item.price * item.quantity}
              </div>
            </div>
          ))}
          {items.length > 3 && (
            <div className="text-xs text-default-400">
              ...and {items.length - 3} more
            </div>
          )}
          <div className="mt-2 text-right text-sm font-bold">
            Subtotal: ${subtotal}
          </div>
        </div>
      )}
      <div className="mt-4 text-right">
        <a
          className="text-primary-600 hover:underline font-medium"
          href="/cart"
        >
          Go to Cart
        </a>
      </div>
    </div>
  );
  // search removed per request

  return (
    <HeroUINavbar isBordered maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <span className="text-xl font-extrabold tracking-tight">NIKE</span>
            <span className="sr-only">Nike Kicks</span>
          </Link>
        </NavbarBrand>
        <div className="hidden lg:flex gap-4 justify-start ml-2">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href}>
              <Link
                className={clsx(
                  linkStyles({ color: "foreground" }),
                  "data-[active=true]:text-primary data-[active=true]:font-medium",
                )}
                color="foreground"
                href={item.href}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </div>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-3">
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem className="hidden md:flex">
          <div className="relative group">
            <Button
              isIconOnly
              aria-label="Cart"
              as={Link}
              href="/cart"
              variant="flat"
            >
              <div className="relative">
                <ShoppingCartIcon className="h-5 w-5" />
                {count > 0 && (
                  <span className="absolute -right-2 -top-2 inline-flex h-4 min-w-[1rem] items-center justify-center rounded-full bg-primary-500 px-1 text-[10px] font-bold text-white">
                    {count}
                  </span>
                )}
              </div>
            </Button>
            <div className="hidden group-hover:block">{cartPreview}</div>
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={index === 1 ? "primary" : "foreground"}
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
