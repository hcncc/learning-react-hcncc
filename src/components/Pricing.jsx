import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

export function Pricing(){
    return (
        <div className="mt-20">
            <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">Pricing</h2>
            <div className="flex flex-wrap">
                {pricingOptions.map((price, index)=>(
                    <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
                        <div className="p-10 border border-neutral-700 rounded-xl">
                            <p className="text-4xl mb-8">
                                {price.title}
                                {price.title === "Pro" && <span className="bg-gradient-to-r from-orange-500 to-red-400 text-transparent bg-clip-text text-xl mb-4 ml-2">(Most Popular)</span>}
                            </p>
                            <p className="mb-8">
                                <span>{price.price}</span>
                                <span>/Month</span>
                                <ul>
                                    {price.features.map((feature, index)=>(
                                        <li key={index} className="flex mt-8 items-center gap-2">
                                            <CheckCircle2 />
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                                <a href="#" className="inline-flex justify-center items-center text-center w-full h-12 p-5 mt-20 tracking-tight text-xl hover:bg-orange-900 border border-orange-900 rounded-lg transition duration-200">Subscribe</a>
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}