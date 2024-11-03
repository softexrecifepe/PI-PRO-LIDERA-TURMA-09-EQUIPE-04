import React from 'react';
import './styles.css';

interface MultipleChoiceProps {
  question: string;
  options: string[];
  name: string;
  allowMultiple: boolean;
}

export default function MultipleChoice({ question, options, allowMultiple, name}: MultipleChoiceProps) {
  return (
    <div className="question-container">
      <h5>{question}</h5>
      <ul className="options-list">
        {options.map((option, index) => (
          <li key={index} className="option-item">
            <input
              type={allowMultiple ? "checkbox" : "radio"}
              name={name}
              value={option}
            />
            <label htmlFor={name} className="option-label">{option}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}
