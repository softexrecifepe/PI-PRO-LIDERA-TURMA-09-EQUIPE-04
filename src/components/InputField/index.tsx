import './styles.css';

export enum FieldTypes {
    TEXT = "text",
    PSWD = "password",
    DATE = "date",
    EMAIL = "email",
    COMBO = "combo"
}
export interface InputOption {
    value: any,
    label: string,
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
    options?: InputOption[]
}

export default function TextButton(props: TextButtonProps) {
    const type = props.type || FieldTypes.TEXT;
    console.log(type)
    if (type === FieldTypes.COMBO) {
        if (!props.options) {
            throw new  ReferenceError("InputFiels with type = COMBO must specify options")
        }
        return (
            <div className={`input-wrapper${props.className ? ` ${props.className}` : ""}`}>
                <label className='field-label' htmlFor={props.name}>{props.label}</label>
                <select className='field' name={props.name} required={props.required}>
                    {props.options.map( opt => <option value={opt.value}>{opt.label}</option>)}
                </select>
            </div>
        )
        
    } else {
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
    
}
