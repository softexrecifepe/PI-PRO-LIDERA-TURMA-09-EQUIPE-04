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
        className={`text-btn rounded-lg bg-primary-c3 text-white shadow-md transition-all duration-100 px-4 py-2 hover:bg-primary-c1 active:bg-primary-c2 ${
          props.className ?? ""
        }`}
      >
        <h4 className="cinzel-regular text-[3rem] leading-none ">{props.text}</h4>
      </button>
    );
  }
  