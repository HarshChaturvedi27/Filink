"use client"
import Image from "next/image"

export default function Navbar() {
    return (
        <div className="items-center justify-stretch flex w-full border-b-3 h-16">
            <div className="m-3 text-md flex items-center">
                <Image
                    src="/logoo.png"
                    alt="Logo"
                    width={0}     
                    height={0}    
                    sizes="7vw"
                    className="h-full w-auto object-contain"
                />
            </div>
        </div>
    )
}
