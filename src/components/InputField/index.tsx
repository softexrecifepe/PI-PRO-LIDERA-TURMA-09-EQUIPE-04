export enum FieldTypes {
    TEXT = "text",
    PSWD = "password",
    DATE = "date",
    EMAIL = "email",
    COMBO = "combo",
  }
  
  export interface InputOption {
    value: any;
    label: string;
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
    options?: InputOption[];
  }
  
  export default function TextButton(props: TextButtonProps) {
    const type = props.type || FieldTypes.TEXT;
  
    if (type === FieldTypes.COMBO) {
      if (!props.options) {
        throw new ReferenceError("InputField with type = COMBO must specify options");
      }
      return (
        <div className={`w-full flex flex-col gap-2 p-2 ${props.className ?? ""}`}>
          <label
            htmlFor={props.name}
            className="text-gray-700 font-medium text-sm"
          >
            {props.label}
          </label>
          <select
            name={props.name}
            required={props.required}
            className="w-full rounded-md p-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none"
          >
            {props.options.map((opt, index) => (
              <option key={index} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
        </div>
      );
    } else {
      return (
        <div className={`w-full flex flex-col gap-2 p-2 ${props.className ?? ""}`}>
          <label
            htmlFor={props.name}
            className="text-gray-700 font-medium text-m"
          >
            {props.label}
          </label>
          <input
            type={type}
            name={props.name}
            required={props.required}
            placeholder={props.placeholder}
            className="w-full rounded-md p-2 border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none placeholder-gray-400"
          />
        </div>
      );
    }
  }
  