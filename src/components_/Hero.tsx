"use client"

import { useRef, useState } from "react"
import { TiPlus } from "react-icons/ti"

export default function Hero(){

    const fileInputRef = useRef<HTMLInputElement>(null)
    const [isUploaded, setIsUploaded] = useState(false);
    const [fileLink, setFileLink] = useState("");

    const handleClick = () => {
        fileInputRef.current?.click()
    }

    const handleUpload = () => {

    }

    const handleCopyLink = () => {

    }

    return (
        <div className="mt-20 flex flex-col items-center justify-center">
            <div className="h-[40vh] w-[60vh] border-3 border-dashed rounded-lg flex items-center justify-center">
                <div
                    onClick={handleClick}
                    className="border rounded-full p-10 cursor-pointer hover:bg-gray-200 hover:text-black"
                >
                    <TiPlus size={35} />
                </div>

                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                />
            </div>

            <div className="mt-5">
                {
                    isUploaded ? (
                        <button onClick={handleCopyLink} className="px-4 text-2xl py-2 border-2 border-dashed rounded-lg hover:bg-gray-100 hover:text-black cursor-pointer">
                            Copy link
                        </button>
                    ) : (
                        <button onClick={handleUpload} className="px-4 text-2xl py-2 border-2 border-dashed rounded-lg hover:bg-gray-100 hover:text-black cursor-pointer">
                            Upload
                        </button>
                    )
                }
            </div>
        </div>

    )
}
