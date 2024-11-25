"use client";

import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

interface IconTabProps {
    className?: string;
    children: ReactNode;
}

export default function IconTab(props: IconTabProps) {
    const appLogo = process.env.NEXT_PUBLIC_APP_LOGO;
    const router = useRouter();

    function handleClick() {
        router.push('/');
    }

    return (
        <div
            className={`flex items-center w-full h-fit bg-primary-skyblue p-2 gap-5 shadow-md ${
                props.className || ""
            }`}
        >
            <div className="flex items-center gap-4 flex-1">
                {appLogo && (
                    <Image
                        onClick={handleClick}
                        alt="Logo"
                        width={84}
                        height={84}
                        className="w-21 h-21 rounded-lg bg-neutral-purewhite overflow-hidden cursor-pointer"
                        src={`/assets/${appLogo}`}
                    />
                )}
                <h3
                    className="text-neutral-purewhite cursor-pointer"
                    onClick={handleClick}
                >
                    {process.env.NEXT_PUBLIC_APP_NAME}
                </h3>
            </div>
            {props.children}
        </div>
    );
}
