import { useRouter } from 'next/router';
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
    const location = useRouter();
    const iconVAlingn = props.iconVAlingn ? props.iconVAlingn : VAlignOptions.MIDDLE;
    const selectedIcon = props.selectedIcon ? props.selectedIcon : props.icon
    const defaultBGColor = props.defaultBGColor ? props.defaultBGColor : "var(--wh-1)";
    const defaultIconColor = props.defaultIconColor ? props.defaultIconColor : "var(--primary-01)";
    const selectedBGColor = defaultIconColor;
    const selectedIconColor = defaultBGColor;
    const isSelected = props.route === '/' ? location.pathname === props.route : location.pathname.startsWith(props.route);
    
    return (
    <div className={`wrapper${props.className ? ` ${props.className}`: ""}`}>
        <div 
            className='icon-container'
            style={{
                border: `var(--border-size) solid ${selectedBGColor}`,
                backgroundColor: isSelected ? selectedBGColor : defaultBGColor
            }}
        >
            <i 
                className={`icon ${ isSelected ? selectedIcon : props.icon}`}
                style={{
                    color: isSelected ? selectedIconColor : defaultIconColor,
                    transform: ` translateY(${iconVAlingn})`
                }}
            ></i>
        </div>
        <h6 className='name'>{props.name}</h6>
    </div>
    );
}