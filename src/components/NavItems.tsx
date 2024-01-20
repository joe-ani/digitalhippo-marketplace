"use client"
import { PRODUCT_CATEGORIES } from "@/config"
import { useState, useRef } from "react"
import NavItem from "./NavItem"

const NavItems = () => {


    const [activeIndex, setActiveIndex] = useState<null | number>(null)

    // set isAnyOpen to true or false based on the activeIndex state
    const isAnyOpen = activeIndex !== null
    //    a quick way to create and set boolean values to a varibale...
    //   ... the(activeIndex !== null) returns a boolean value which directly becomes value of isAnyOpen true / false.


    const navRef = useRef<HTMLDivElement | null>(null)
    return (
        <div className="flex gap-4 h-full">
            {PRODUCT_CATEGORIES.map((category, i) => {
                // Keeps track of which item is currently open
                const handleOpen = () => {
                    if (activeIndex === i) {
                        setActiveIndex(null)
                    } else {
                        setActiveIndex(i)
                    }
                }
                // set isOpen to true or false based on the activeIndex state
                const isOpen = i === activeIndex
                // this sets "isOpen" to true is the value of "i" aligns with the
                // value of "activeIndex" if not set "isOpen" to "false"

                return (
                    <NavItem category={category}
                        handleOpen={handleOpen}
                        isOpen={isOpen}
                        isAnyOpen={isAnyOpen}
                        key={category.value}
                    />
                )

            })}
        </div>
    )
}

export default NavItems