"use client";

import Error from "next/error";
import { useEffect } from "react";

export default function AboutError  ( { error,
   
         reset,
        
        }: {
            error:Error &
             { digest?: string };
              reset:() => void})  {

useEffect(() => {
        console.error("Error in About page:", error);

    }, [error]);
    return (
        <div>

            <div className="flex items-center justify-center h-screen">
                <h1 className="text-2xl font-bold">Something went wrong!</h1>
                <button onClick={() => reset()}>Try again</button>
            </div>
        </div>
    );
};

