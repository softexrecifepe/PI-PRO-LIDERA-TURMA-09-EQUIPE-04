"use client";
import { useRouter } from "next/navigation";
import IconTab, { VAlignOptions } from "@/components/IconTab";
import Header from "@/components/Header"
import InputField, { FieldTypes }from "@/components/InputField"
import TextButton, {BtnTypes} from "@/components/TextButton";
import { useUser } from "@/contexts/UserContext";
import { loginWithEmailAndPassword, loginWithGoogle } from "@/services/userService";
import { FormEvent } from "react";

import "./styles.css"

export default function Login() {
    const { user, loading } = useUser();

    if (loading) {
        return <p>Carregando...</p>;
    }
    
    const router = useRouter();

    const redirect = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute("href") ?? "";
        router.push(href);
    };

    async function handleSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const password = formData.get("senha")?.toString();
        const email = formData.get("email")?.toString();

        try {
            await loginWithEmailAndPassword(email!, password!);
            setTimeout(() => 
            {
                router.push("/user");
            },
            1000);
            
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            alert("Erro ao fazer login. Tente novamente.");
        }

    }

    return (
        <div className="login-page">
            <Header>
                <IconTab route="/help" iconVAlingn={VAlignOptions.MIDDLE} name="Ajuda" icon="bi bi-question"/>
                <IconTab route="/user" iconVAlingn={VAlignOptions.BOTTOM} name={user ? user.username : "Entrar"} icon="bi bi-person-fill"/>
            </Header>
            
            <h1 className="login-title">Entrar na Conta</h1>

            <form className="fields-container" onSubmit={handleSubmit}>
                <div className="fields">
                    <InputField type={FieldTypes.EMAIL} name="email" label="E-Mail" placeholder="Digite seu e-mail..."/>
                    <InputField type={FieldTypes.PSWD} name="senha" label="Senha" placeholder="Digite sua Senha..."/>
                </div>
                <span className="signup-text">Não tem uma conta? <a href="/user/signup" onClick={redirect}>Clique Aqui</a></span>
                <TextButton text="Confirmar" type={BtnTypes.SUBMIT}/>
            </form>

        </div>
    );
}


  