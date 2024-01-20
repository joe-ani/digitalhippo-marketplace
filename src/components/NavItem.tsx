"use client"

import { PRODUCT_CATEGORIES } from "@/config"
import { Button } from "./ui/button"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"

type category = typeof PRODUCT_CATEGORIES[number]

interface NavItemProps {
    category: category
    handleOpen: () => void
    isOpen: boolean
    isAnyOpen: boolean
}

const NavItem = ({ category, isAnyOpen, isOpen, handleOpen }: NavItemProps) => {
    return (
        <div className="flex">
            <div className="relatve flex items-center">
                <Button className="gap-1.5"
                    onClick={handleOpen}
                    variant={isOpen ? "secondary" : "ghost"}

                >
                    {category.label}
                    {/* Arrow Icon */}
                    <ChevronDown className={cn("h-4 w-4 transition-all text-muted-foreground",
                        {
                            "-rotate-180": isOpen,
                        }
                    )} />
                </Button>
            </div>

            {isOpen ? (
                <div className={cn("absolute inset-x-0 ")}>

                </div>
            ) : null}
        </div>
    )
}

export default NavItem