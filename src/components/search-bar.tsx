// Added for commit history simulation (Day 1)
import React, { useState } from "react";
import { Input } from "@heroui/input";
import { Button } from "@heroui/button";
import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownItem,
} from "@heroui/dropdown";
import {
    MagnifyingGlassIcon,
    AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

interface SearchBarProps {
    onSearch: (query: string) => void;
    onBrandFilter: (brand: string) => void;
    loading?: boolean;
    placeholder?: string;
}

export const SearchBar: React.FC<SearchBarProps> = ({
    onSearch,
    onBrandFilter,
    loading = false,
    placeholder = "Search for sneakers...",
}) => {
    const [query, setQuery] = useState("");
    const [selectedBrand, setSelectedBrand] = useState<string>("All Brands");

    const handleSearch = () => {
        onSearch(query);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            handleSearch();
        }
    };

    const handleBrandSelect = (brand: string) => {
        setSelectedBrand(brand);
        if (brand === "All Brands") {
            onBrandFilter("");
        } else {
            onBrandFilter(brand);
        }
    };

    return (
        <div className="mb-8 flex flex-col gap-4 sm:flex-row">
            <div className="flex flex-1 gap-2">
                <Input
                    classNames={{
                        input: "text-sm",
                        inputWrapper: "h-12",
                    }}
                    placeholder={placeholder}
                    startContent={
                        <MagnifyingGlassIcon className="h-4 w-4 text-gray-400" />
                    }
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                />
                <Button
                    color="primary"
                    isLoading={loading}
                    size="lg"
                    onPress={handleSearch}
                >
                    Search
                </Button>
            </div>

            <Dropdown>
                <DropdownTrigger>
                    <Button
                        className="min-w-[150px]"
                        size="lg"
                        startContent={<AdjustmentsHorizontalIcon className="h-4 w-4" />}
                        variant="bordered"
                    >
                        {selectedBrand}
                    </Button>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label="Brand filter"
                    onAction={(key) => handleBrandSelect(key as string)}
                >
                    <DropdownItem key="All Brands">All Brands</DropdownItem>
                    <DropdownItem key="Nike">Nike</DropdownItem>
                    <DropdownItem key="Jordan">Jordan</DropdownItem>
                    <DropdownItem key="Adidas">Adidas</DropdownItem>
                    <DropdownItem key="Yeezy">Yeezy</DropdownItem>
                    <DropdownItem key="New Balance">New Balance</DropdownItem>
                    <DropdownItem key="Converse">Converse</DropdownItem>
                    <DropdownItem key="Vans">Vans</DropdownItem>
                    <DropdownItem key="Puma">Puma</DropdownItem>
                </DropdownMenu>
            </Dropdown>
        </div>
    );
};
