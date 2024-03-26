"use client"

import Link from "next/link"

const Error = () => {
    return (
        <div className="grid h-screen place-content-center bg-white px-4">
            <div className="text-center">
                <h1 className="text-2xl  tracking-tight text-gray-900 sm:text-4xl">
                    Something went wrong
                </h1>

                <p className="mt-4 text-gray-600 ">
                    Please contact support.
                </p>

                <Link
                    href="/"
                    className="mt-6 flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500 "
                >
                    Go Back Home
                </Link>
            </div>
        </div>
    )
}

export default Error