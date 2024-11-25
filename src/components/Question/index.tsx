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
    <div className="p-5 text-primary-navy">
      <h5 className="mb-3 leading-none">{question}</h5>
      <ul className="list-none m-0 p-0 space-y-2">
        {options.map((option, index) => (
          <li
            key={index}
            className="flex items-center gap-2 text-primary-navy font-sans"
          >
            <input
              type="radio"
              name={name}
              value={option.pontos}
              required={required}
              className="accent-primary-teal"
            />
            <label htmlFor={name} className="cursor-pointer">
              {option.letra}
            </label>
          </li>
        ))}
      </ul>
    </div>
  );
}
