"use client";

import "./styles.css"
import { handleSubmit } from "./data";
import { useUser } from "@/contexts/UserContext";

import IconTab, { VAlignOptions } from "@/components/IconTab";
import Header from "@/components/Header"
import Question from "@/components/Question"
import questions from "@/data/questions.json"

export default function Home() {
    const { user, loading } = useUser();

    if (loading) {
        return <p>Carregando...</p>;
    }

    return (
        <div className="test-page">
            <Header>
                <IconTab route="/help" iconVAlingn={VAlignOptions.MIDDLE} name="Ajuda" icon="bi bi-question"/>
                <IconTab route="/user" iconVAlingn={VAlignOptions.BOTTOM} name={user ? user.username : "Entrar"} icon="bi bi-person-fill"/>
            </Header>
            <form className="test-form" onSubmit={handleSubmit}>
                {questions.questões.map((q) => <Question key={q.id} name={q.id.toString()} question={q.pergunta} options={q.alternativas}/>)}
                <div className="btn-container">
                    <button type="submit" name="submit-btn" className="submit-btn"><h4>Enviar</h4></button>
                </div>
                
            </form>
        </div>
    );
}


  