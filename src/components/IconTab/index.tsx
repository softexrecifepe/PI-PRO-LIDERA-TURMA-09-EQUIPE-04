import { motion } from "framer-motion";
import { useRouter } from "next/router";

import './styles.css';

export enum VAlignOptions {
    TOP = "calc( (-1) * calc(var(--icon-size) / 10))",
    MIDDLE = "",
    BOTTOM = "calc(var(--icon-size) / 10)",
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
    const storage = globalThis?.sessionStorage;

    const iconVAlingn = props.iconVAlingn ? props.iconVAlingn : VAlignOptions.MIDDLE;
    const selectedIcon = props.selectedIcon ? props.selectedIcon : props.icon
    const defaultBGColor = props.defaultBGColor ? props.defaultBGColor : "var(--wh-1)";
    const defaultIconColor = props.defaultIconColor ? props.defaultIconColor : "var(--primary-01)";
    const selectedBGColor = defaultIconColor;
    const selectedIconColor = defaultBGColor;
    const isSelected = props.route === '/' ? router.pathname === props.route : router.pathname.startsWith(props.route);
    const wasSelected = storage ? ( props.route === '/' ? storage.getItem('prevPath') === props.route : (storage.getItem('prevPath') ? storage.getItem('prevPath')!.startsWith(props.route) : false) ) : false;

    
    console.log(`${props.route} -> ${wasSelected}`)

    function handleClick() {
        router.push(props.route);
    }
    
    return (
    <div onClick={handleClick} className={`wrapper${props.className ? ` ${props.className}`: ""}`}>
        <motion.div
            animate={{ 
                backgroundColor: isSelected ? selectedBGColor : defaultBGColor, 
                color: isSelected ? selectedIconColor : defaultIconColor,
            }}
            initial={wasSelected || isSelected ? { backgroundColor: !isSelected ? selectedBGColor : defaultBGColor, color: !isSelected ? selectedIconColor : defaultIconColor } : false}
            exit={{ backgroundColor: !isSelected ? selectedBGColor : defaultBGColor, color: !isSelected ? selectedIconColor : defaultIconColor }}
            transition={{ duration: 0.5 }}
            className='icon-container'
            style={{
                border: `var(--border-size) solid ${selectedBGColor}`,
                backgroundColor: isSelected ? selectedBGColor : defaultBGColor,
                color: isSelected ? selectedIconColor : defaultIconColor,
            }}
        >
            <i 
                className={`icon ${ isSelected ? selectedIcon : props.icon}`}
                style={{
                    transform: ` translateY(${iconVAlingn})`
                }}
            ></i>
        </motion.div>
        <h6 className='name'>{props.name}</h6>
    </div>
    );
}