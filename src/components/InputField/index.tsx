import './styles.css';

enum FieldTypes {
    TEXT = "text",
    PSWD = "password",
}

interface TextButtonProps {
    className?: string;
    label: string;
    name: string;
    alt?: string;
    type?: FieldTypes;
    placeholder?: string;
    textSize?: number;
    required?: boolean;
}

export default function TextButton(props: TextButtonProps) {
    const type = props.type ? props.type : FieldTypes.TEXT;

    return (
        <div className={`input-wrapper${props.className ? ` ${props.className}` : ""}`}>
            <label className='field-label' htmlFor={props.name}>{props.label}</label>
            <input 
                className='field'
                type={type} 
                name={props.name} 
                required={props.required} 
                placeholder={props.placeholder} />
        </div>
    );
}
