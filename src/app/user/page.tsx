"use client";

import IconTab, { VAlignOptions } from "@/components/IconTab";
import Header from "@/components/Header"
import Question from "@/components/Question"

export default function Home() {
    return (
        <div>
            <Header>
                <IconTab route="/help" iconVAlingn={VAlignOptions.MIDDLE} name="Ajuda" icon="bi bi-question"/>
                <IconTab route="/user" iconVAlingn={VAlignOptions.BOTTOM} name="Entrar" icon="bi bi-person-fill"/>
            </Header>
            <Question name="teste" question="Teste Pergunta" options={['Opção A', 'Opção B', 'Opção C', 'Opção D']} allowMultiple={false}/>
        </div>
    );
}


  