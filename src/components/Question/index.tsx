import React from 'react';
import './styles.css';

interface Alternative {
  letra: string;
  pontos: number;
}

interface MultipleChoiceProps {
  question: string;
  options: Alternative[];
  name: string;
}

export default function MultipleChoice({ question, options, name}: MultipleChoiceProps) {
  return (
    <div className="question-container">
      <h5>{question}</h5>
      <ul className="options-list">
        {options.map((option, index) => (
          <li key={index} className="option-item">
            <input
              type="radio"
              name={name}
              value={option.pontos}
            />
            <label htmlFor={name} className="option-label">{option.letra}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
