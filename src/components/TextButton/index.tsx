import './styles.css';

interface TextButtonProps {
    className?: string;
    text: string;
    onClick: () => void;
    textSize?: number;
}

export default function TextButton(props: TextButtonProps) {

    return (
        <button onClick={props.onClick} className={`txt-btn-wrapper${props.className ? ` ${props.className}` : ""}`}>
            <h4  className='text'>{props.text}</h4>
        </button>
    );
}
