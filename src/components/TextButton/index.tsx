import './styles.css';

export enum BtnTypes {
    BUTTON = "button",
    SUBMIT = "submit",
    RESET = "reset"
}

interface TextButtonProps {
    className?: string;
    type?: BtnTypes;
    text: string;
    onClick?: () => void | Promise<void>;
    textSize?: number;
}

export default function TextButton(props: TextButtonProps) {

    return (
        <button type={props.type || BtnTypes.BUTTON} onClick={props.onClick} className={`txt-btn-wrapper${props.className ? ` ${props.className}` : ""}`}>
            <h4  className='text'>{props.text}</h4>
        </button>
    );
}
