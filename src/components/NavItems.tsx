"use client"
import { PRODUCT_CATEGORIES } from "@/config"
import { useState, useRef, useEffect } from "react"
import NavItem from "./NavItem"
import { useOnClickOutside } from "@/hooks/use-on-click-outside"

const NavItems = () => {


    const [activeIndex, setActiveIndex] = useState<null | number>(null)

    // set isAnyOpen to true or false based on the activeIndex state
    const isAnyOpen = activeIndex !== null
    //    a quick way to create and set boolean values to a varibale...
    //   ... the(activeIndex !== null) returns a boolean value which directly becomes value of isAnyOpen true / false.


    const navRef = useRef<HTMLDivElement | null>(null)
    useOnClickOutside(navRef, () => setActiveIndex(null))


    // key Accessability
    // Closes the drop down menu on escape button press 
    useEffect(() => {
        const handler = (e: KeyboardEvent) => {
            if (e.key == "Escape") {
                setActiveIndex(null)
            }
        }

        document.addEventListener("keydown", handler)

        return () => {
            document.addEventListener("keydown", handler)

        }
    }, [])
    return (
        <div ref={navRef} className="flex gap-4 h-full">
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