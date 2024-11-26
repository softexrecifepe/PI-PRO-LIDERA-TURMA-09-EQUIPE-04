"use client";

import "./styles.css"
import { useUser } from "@/contexts/UserContext";
import { useTestContext, TestResult } from '@/contexts/TestContext';

import { useRouter } from "next/navigation";

import IconTab, { VAlignOptions } from "@/components/IconTab";
import Header from "@/components/Header"
import Question from "@/components/Question"
import questions from "@/data/questions.json"
import LoadingScreen from "@/components/Loading";

import { FormEvent } from "react";


export default function Test() {
    const { user, loading } = useUser();
    const { setTestResults } = useTestContext();
    const router = useRouter();

    if (loading) {
        return <LoadingScreen/>;
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
        <div className="flex flex-col gap-[10px]">
            <Header>
                <IconTab route="/help" iconVAlingn={VAlignOptions.MIDDLE} name="Ajuda" icon="bi bi-question"/>
                <IconTab route="/user" iconVAlingn={VAlignOptions.BOTTOM} name={user ? user.username : "Entrar"} icon="bi bi-person-fill"/>
            </Header>
            <form className="flex flex-col gap-[10px]" onSubmit={handleSubmit}>
                {questions.questões.map((q) => <Question key={q.id} name={q.id.toString()} question={q.pergunta} options={q.alternativas} required={true}/>)}
                <div className="w-full h-fit px-[10px] py-[40px]">
                    <button type="submit" name="submit-btn" className="cinzel-bold text-[2rem] w-full px-[20px] py-[21px] rounded-md flex flex-col text-center items-center justify-center bg-primary-c3 hover:bg-primary-c1 active:bg-primary-c2 text-neutral-purewhite transition-all duration-100">
                        <h4 className="leading-[100%]">Enviar</h4>
                    </button>
                </div>
                
            </form>
        </div>
    );
}


  