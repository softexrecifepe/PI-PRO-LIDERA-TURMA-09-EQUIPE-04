
  

  
  interface TextButtonProps {
    className?: string;
    label: string;
    value: string;
  }
  
  export default function InfoBox(props: TextButtonProps) {  

      return (
        <div className={`w-full flex flex-col gap-2 p-2 ${props.className ?? ""}`}>
          <h4
            className="text-[1.25rem] cinzel-bold text-gray-700 font-medium text-m"
          >
            {props.label}
          </h4>
          <p
            className="
            averia-serif-libre-regular 
            w-full rounded-md 
            p-2 
            border 
            border-gray-300 
            bg-neutral-purewhite
            text-justify
            leading-[1.25rem]"
          >
            {props.value}
          </p>
        </div>
      );
  }
  