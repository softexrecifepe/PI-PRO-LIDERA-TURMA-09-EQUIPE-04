"use client";
import { useRouter } from "next/navigation";
import IconTab, { VAlignOptions } from "@/components/IconTab";
import Header from "@/components/Header"
import InputField, { FieldTypes }from "@/components/InputField"
import TextButton, {BtnTypes} from "@/components/TextButton";
import { useUser } from "@/contexts/UserContext";
import { loginWithEmailAndPassword, loginWithGoogle } from "@/services/userService";
import { FormEvent } from "react";
import LoadingScreen from "@/components/Loading";

import "./styles.css"

export default function Login() {
    const router = useRouter();
    const { user, loading } = useUser();

    if (loading) {
        return <LoadingScreen/>;
    }

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

    async function handleGoogleSignin() {
        try {
          await loginWithGoogle();
          setTimeout(() => 
            {
                router.push("/user");
            },
            1000);
        } catch (error) {
          console.error("Erro ao entrar com Google:", error);
          alert("Erro ao entrar com Google. Tente novamente.");
        }
      };

    return (
        <div className="min-h-[100vh] flex flex-col items-center">
            <Header>
                <IconTab route="/help" iconVAlingn={VAlignOptions.MIDDLE} name="Ajuda" icon="bi bi-question"/>
                <IconTab route="/user" iconVAlingn={VAlignOptions.BOTTOM} name={user ? user.username : "Entrar"} icon="bi bi-person-fill"/>
            </Header>
            <div className="h-[100%] w-[100%] flex flex-col items-center justify-center gap-8 my-8">
                <h1 className="text-[4rem] cinzel-bold">Entrar na Conta</h1>

                <form className="fields-container shadow-md rounded-md" onSubmit={handleSubmit}>
                    <div className="w-[100%]">
                        <InputField type={FieldTypes.EMAIL} name="email" label="E-Mail" placeholder="Digite seu e-mail..." required={true}/>
                        <InputField type={FieldTypes.PSWD} name="senha" label="Senha" placeholder="Digite sua Senha..." required={true}/>
                    </div>
                    <span className="signup-text text-[1.25rem] averia-serif-libre-regular text-primary-c3">Não tem uma conta? <a className="text-primary-c1 hover:text-primary-c2 active:text-primary-c4" href="/user/signup" onClick={redirect}>Clique Aqui</a></span>
                    <TextButton text="Confirmar" type={BtnTypes.SUBMIT}/>
                    <TextButton text="Entrar com o Google" onClick={handleGoogleSignin}/>
                </form>
            </div>
        </div>
    );
}


  