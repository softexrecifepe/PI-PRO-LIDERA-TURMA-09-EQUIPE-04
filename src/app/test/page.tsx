"use client";

import "./styles.css"
import { handleSubmit } from "./data";

import IconTab, { VAlignOptions } from "@/components/IconTab";
import Header from "@/components/Header"
import Question from "@/components/Question"
import questions from "@/data/questions.json"

export default function Home() {
    return (
        <div className="test-page">
            <Header>
                <IconTab route="/help" iconVAlingn={VAlignOptions.MIDDLE} name="Ajuda" icon="bi bi-question"/>
                <IconTab route="/user" iconVAlingn={VAlignOptions.BOTTOM} name="Entrar" icon="bi bi-person-fill"/>
            </Header>
            <form className="test-form" onSubmit={handleSubmit}>
                {questions.map((q, i) => <Question key={i} name={`question-${i}`} question={q.question} options={q.options} allowMultiple={q.allow_multiple_answers}/>)}
                <div className="btn-container">
                    <button type="submit" name="submit-btn" className="submit-btn"><h4>Enviar</h4></button>
                </div>
                
            </form>
        </div>
    );
}


  