import MaxWidthWrapper from "@/components/MaxWidthWrapper"
import { Button, buttonVariants } from "@/components/ui/button"
import { ArrowDownToLine, Laptop2, Sparkles, Clock12 } from "lucide-react"
import Link from "next/link"

export default function Home() {


  // This is going to be a list of perks that will be mapped through to display on the DOM
  const perks = [
    {
      name: "Instant Delivery",
      Icon: ArrowDownToLine,
      description: "We deliver your products instantly."
    },
    {
      name: "Guaranteed Quality",
      Icon: Sparkles,
      description: "We guarantee the quality of our products."
    },
    {
      name: "24/7 Support",
      Icon: Clock12,
      description: "We are always available 24/7."
    },
    {
      name: "Customer Support",
      Icon: Laptop2,
      description: "We are always available 24/7."
    },
  ]

  return <>
    <MaxWidthWrapper >
      <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">Your market place for high-quality {' '}
          <span className="text-blue-600"> digital assets</span>.
        </h1>
        <p className="mt-6 text-lg max-w-prose text-muted-foreground">Welcome to DigitalHippo.
          Every asset on our platform is verified
          by our team of experts to ensure high quality services.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-6">
          {/* Used The shadcn Button Components  */}
          <Link href="/products" className={buttonVariants()}>Browse Trending</Link>
          <Button variant="ghost">Our quality promise &rarr;</Button>
        </div>
      </div>

      {/* TODO: list products */}
    </MaxWidthWrapper>

    <section className="border-t border-gray-200 bg-gray-50">
      <MaxWidthWrapper className="py-20">  {/* dynamiclly adding classes */}
        <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12 ">
          {perks.map((perk) => {
            return (
            <div key={perk.name} className="text-center md:flex md:items-start md:text-left lg:block lg:text-center ">
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-13 h-13" />}
                  </div>
                </div>

                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm txet-muted-foreground " >
                    {perk.description}
                  </p>
                </div>
              </div>
            )
          })}
        </div>
      </MaxWidthWrapper>
    </section>
  </>  // Reacts requires a top level child 


}
