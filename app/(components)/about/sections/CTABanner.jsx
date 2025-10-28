import React from 'react'
import Button from "@/app/(components)/ui/Button"

const CTABanner = () => {
  return (
    <div className="my-16 bg-[#c8004b] text-white rounded-[4px] px-8 py-10 flex flex-col md:flex-row justify-between items-center gap-6 max-w-[1560px] mx-auto shadow-md">
                <div>
                    <h3 className="text-3xl font-bold mb-2">
                        Explore. Apply. Achieve. All in One Place
                    </h3>
                    <p className=" font-medium text-white/90 text-xl max-w-xl">
                        Discover top universities, apply with ease, and track your progress —
                        all through one smart dashboard.
                    </p>
                </div>
                <Button text="Sign Up Now!" color="text-[#C7044C]" bg="bg-white" />
            </div>
  )
}

export default CTABanner