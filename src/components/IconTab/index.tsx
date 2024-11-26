"use client";

import { motion } from "framer-motion";
import { useRouter, usePathname } from "next/navigation";

export enum VAlignOptions {
    TOP = "flex-end",
    MIDDLE = "center",
    BOTTOM = "flex-start",
}

interface IconTabProps {
    route: string,
    name: string,
    icon: string,
    iconVAlingn?: VAlignOptions,
    defaultBGColor?: string,
    defaultIconColor?: string,
    selectedIcon?: string,
    selectedBGColor?: string,
    selectedIconColor?: string,
    className?: string
}

export default function IconTab(props: IconTabProps) { 
    const router = useRouter();
    const pathname = usePathname();
    const storage = globalThis?.sessionStorage;

    const iconVAlingn = (props.iconVAlingn || VAlignOptions.MIDDLE);
    const selectedIcon = props.selectedIcon || props.icon;
    const defaultBGColor = props.defaultBGColor || "var(--wh-1)";
    const defaultIconColor = props.defaultIconColor || "var(--primary-01)";
    const selectedBGColor = props.selectedBGColor || defaultIconColor;
    const selectedIconColor = props.selectedIconColor || defaultBGColor;
    const isSelected = props.route === '/' ? pathname === props.route : pathname.startsWith(props.route);
    const wasSelected = storage ? (props.route === '/' ? storage.getItem('prevPath') === props.route : (storage.getItem('prevPath') ? storage.getItem('prevPath')!.startsWith(props.route) : false)) : false;

    function handleClick() {
        router.push(props.route);
    }
    
    return (
        <div
            onClick={handleClick}
            className={`flex flex-col items-center gap-1 w-fit cursor-pointer ${props.className || ""}`}
        >
            <motion.div
                animate={{
                    backgroundColor: isSelected ? selectedBGColor : defaultBGColor,
                    color: isSelected ? selectedIconColor : defaultIconColor,
                }}
                initial={wasSelected || isSelected
                    ? {
                        backgroundColor: !isSelected ? selectedBGColor : defaultBGColor,
                        color: !isSelected ? selectedIconColor : defaultIconColor,
                    }
                    : false}
                exit={{
                    backgroundColor: !isSelected ? selectedBGColor : defaultBGColor,
                    color: !isSelected ? selectedIconColor : defaultIconColor,
                }}
                transition={{ duration: 0.5 }}
                className={`flex items-center justify-center rounded-full w-[4rem] h-[4rem] shadow-md border-[0.3rem] overflow-hidden`}
                style={{
                    borderColor: selectedBGColor,
                    backgroundColor: isSelected ? selectedBGColor : defaultBGColor,
                    color: isSelected ? selectedIconColor : defaultIconColor,
                }}
            >
                <i
                    className={`${isSelected ? selectedIcon : props.icon} text-[4rem]`}
                    style={{
                        margin: "-1rem",
                        alignSelf: iconVAlingn,
                    }}
                ></i>
            </motion.div>
            <h6 className="text-center leading-tight text-s text-neutral-purewhite cinzel-regular">{props.name}</h6>
        </div>
    );
}
