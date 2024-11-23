"use client";

import "./styles.css"
import { useUser } from "@/contexts/UserContext";
import { useTestContext, TestResult } from '@/contexts/TestContext';

import { useRouter } from "next/navigation";

import IconTab, { VAlignOptions } from "@/components/IconTab";
import Header from "@/components/Header"
import Question from "@/components/Question"
import questions from "@/data/questions.json"

import { FormEvent } from "react";


export default function Test() {
    const { user, loading } = useUser();
    const { setTestResults } = useTestContext();
    const router = useRouter();

    if (loading) {
        return <p>Carregando...</p>;
    }  

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
    
        const results: TestResult = {};
        formData.forEach((value, key) => {
            if (typeof value === 'string') {
                results[key] = Number(value);
            }
        });
    
        setTestResults(results);
        router.push("/test/result")
        
    }

    return (
        <div className="test-page">
            <Header>
                <IconTab route="/help" iconVAlingn={VAlignOptions.MIDDLE} name="Ajuda" icon="bi bi-question"/>
                <IconTab route="/user" iconVAlingn={VAlignOptions.BOTTOM} name={user ? user.username : "Entrar"} icon="bi bi-person-fill"/>
            </Header>
            <form className="test-form" onSubmit={handleSubmit}>
                {questions.questões.map((q) => <Question key={q.id} name={q.id.toString()} question={q.pergunta} options={q.alternativas} required={true}/>)}
                <div className="btn-container">
                    <button type="submit" name="submit-btn" className="submit-btn"><h4>Enviar</h4></button>
                </div>
                
            </form>
        </div>
    );
}


  