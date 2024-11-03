"use client";

import React, { ReactNode } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import './styles.css';

interface IconTabProps {
    className?: string;
    children: ReactNode;
}

export default function IconTab(props: IconTabProps) {
    // Use o caminho da imagem baseado na pasta public
    const appLogo = process.env.NEXT_PUBLIC_APP_LOGO;
    const router = useRouter();

    function handleClick() {
        router.push('/');
    }

    return (
        <div className={`header-wrapper${props.className ? ` ${props.className}` : ""}`}>
            <div className="logo-container">

                {appLogo && (
                    <Image
                        onClick={handleClick}
                        alt="Logo"
                        width={84}
                        height={84}
                        className="logo"
                        src={`/assets/${appLogo}`}
                    />
                )}
                <h3 onClick={handleClick}>{process.env.NEXT_PUBLIC_APP_NAME}</h3>
            </div>
            {props.children}
        </div>
    );
}
