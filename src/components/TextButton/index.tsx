export enum BtnTypes {
    BUTTON = "button",
    SUBMIT = "submit",
    RESET = "reset",
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
      <button
        type={props.type || BtnTypes.BUTTON}
        onClick={props.onClick}
        className={`rounded-lg bg-primary-teal text-white shadow-md transition-all duration-100 px-4 py-2 hover:bg-primary-skyblue active:bg-primary-navy ${
          props.className ?? ""
        }`}
      >
        <h4 className="leading-none">{props.text}</h4>
      </button>
    );
  }
  