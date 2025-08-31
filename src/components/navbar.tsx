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

import { useCart } from "@/context/cart";
import { ThemeSwitch } from "@/components/theme-switch";
import { siteConfig } from "@/config/site";

// Added for commit history simulation (Day 1)
export const Navbar = () => {
  const { count } = useCart();

  return (
    <HeroUINavbar isBordered maxWidth="xl" position="sticky">
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand className="gap-3 max-w-fit">
          <Link
            className="flex justify-start items-center gap-1"
            color="foreground"
            href="/"
          >
            <span className="text-xl font-extrabold tracking-tight">
              Snickers Collections
            </span>
            <span className="sr-only">All Kicks</span>
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
          </div>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1 pl-4" justify="end">
        <NavbarItem>
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
        </NavbarItem>
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
