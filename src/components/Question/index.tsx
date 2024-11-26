import "./styles.css"
interface Alternative {
  letra: string;
  pontos: number;
}

interface MultipleChoiceProps {
  question: string;
  options: Alternative[];
  name: string;
  required: boolean;
}

export default function MultipleChoice({
  question,
  options,
  name,
  required,
}: MultipleChoiceProps) {
  return (
    <div className="py-5 px-[3rem] text-primary-c3" style={{
      backgroundColor: "rgb(from var(--primary-04) r g b / calc(alpha - 0.5))",
      borderTop: "solid 1px rgb(from var(--bl-1) r g b / calc(alpha - 0.5))",
      borderBottom: "solid 1px rgb(from var(--bl-1) r g b / calc(alpha - 0.5))"
    }}>
      <h5 className="pb-3 mb-5 leading-none cinzel-bold text-[1.5rem]"  style={{
      borderBottom: "solid 1px rgb(from var(--bl-1) r g b / calc(alpha - 0.5))"
    }}>{question}</h5>
      <ul className="px-[1rem] list-none m-0 p-0 space-y-2">
      {options.map((option, index) => (
        <li key={index} className="flex items-center gap-2 text-primary-c3 averia-serif-libre-light">
          <label htmlFor={`${name}-${index}`} className="container">
            {option.letra}
            <input
              type="radio"
              id={`${name}-${index}`}
              name={name}
              value={option.pontos}
              required={required}
              className=""
            />
            <span className="checkmark"></span>
          </label>
        </li>
      ))}
      </ul>
    </div>
  );
}
