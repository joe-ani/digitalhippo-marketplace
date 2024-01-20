// This compnent will make sure the entire site looks good in trems of layout.

import { cn } from "@/lib/utils";
import { ReactNode } from "react"

const MaxWidthWrapper = ({
    className,
    children
}: {//Types
    className?: String,
    children: ReactNode
}) => {

    
    return (
        <div className={cn(
            "mx-auto w-full max-w-screen-xl px-2.5 md:px-20",
            className
        )} >
            {children}
        </div>
    )
}

export default MaxWidthWrapper;