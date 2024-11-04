"use client";
import { useRouter } from "next/navigation";
import IconTab, { VAlignOptions } from "@/components/IconTab";
import Header from "@/components/Header"
import InputField from "@/components/InputField"
import TextButton, {BtnTypes} from "@/components/TextButton";

import { handleSubmit } from "./data";
import "./styles.css"

export default function Home() {
    const router = useRouter();

    const redirect = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href") ?? "";
        router.push(href);
    };

    return (
        <div className="login-page">
            <Header>
                <IconTab route="/help" iconVAlingn={VAlignOptions.MIDDLE} name="Ajuda" icon="bi bi-question"/>
                <IconTab route="/user" iconVAlingn={VAlignOptions.BOTTOM} name="Entrar" icon="bi bi-person-fill"/>
            </Header>
            
            <h1 className="login-title">Entrar na Conta</h1>

            <form className="fields-container" onSubmit={handleSubmit}>
                <div className="fields">
                    <InputField name="email" label="E-Mail" placeholder="Digite seu e-mail..."/>
                    <InputField name="senha" label="Senha" placeholder="Digite sua Senha..."/>
                </div>
                <span className="signup-text">Não tem uma conta? <a href="/user/signup" onClick={redirect}>Clique Aqui</a></span>
                <TextButton text="Confirmar" type={BtnTypes.SUBMIT}/>
            </form>

        </div>
    );
}


  