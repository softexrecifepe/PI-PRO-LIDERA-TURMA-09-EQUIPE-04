import React, { ReactNode } from "react";
import { useRouter } from "next/router";
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
        <div onClick={handleClick} className={`header-wrapper${props.className ? ` ${props.className}` : ""}`}>
            <div className="logo-container">

                {appLogo && (
                    <Image
                        alt="Logo"
                        width={84}
                        height={84}
                        className="logo"
                        src={`/assets/${appLogo}`}
                    />
                )}
                <h3>{process.env.NEXT_PUBLIC_APP_NAME}</h3>
            </div>
            {props.children}
        </div>
    );
}
