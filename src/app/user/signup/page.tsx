"use client";
import { useRouter } from "next/navigation";
import IconTab, { VAlignOptions } from "@/components/IconTab";
import Header from "@/components/Header"
import InputField, {FieldTypes} from "@/components/InputField"
import TextButton, {BtnTypes} from "@/components/TextButton";
import { useUser } from "@/contexts/UserContext";
import Gender, {messages} from "@/models/gender";
import { registerUser, registerWithGoogle } from "@/services/userService";

import "./styles.css"

export default function Signup() {
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

    const genderArrayKeysMap = Object.keys(Gender)
    .map((gender: string) => ({
        value: Gender[gender as keyof typeof Gender],
        label: messages[gender as keyof typeof Gender],
    }));


    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
      
        const formData = new FormData(e.currentTarget);
        const password = formData.get("senha")?.toString();
        const confirmPassword = formData.get("confsenha")?.toString();
      
        if (password !== confirmPassword) {
          alert("As senhas não coincidem!");
          return;
        }
      
        const genderValue = formData.get("gender")?.toString() as keyof typeof Gender;
      
        const newUser = {
          email: formData.get("email")?.toString() || "",
          password: formData.get("senha")?.toString() || "",
          name: formData.get("name")?.toString() || "",
          username: formData.get("username")?.toString() || "",
          gender: genderValue ? Gender[genderValue] : Gender.UNKNOWN,
          phone: formData.get("telefone")?.toString() || "",
          birth: formData.get("aniversario") ? new Date(formData.get("aniversario") as string) : undefined,
          createdAt: new Date(),
        };
      
        try {
          await registerUser(newUser);
          alert("Cadastro realizado com sucesso!");
          router.push("/user"); // Redireciona para a página do usuário
        } catch (error) {
          console.error("Erro ao registrar usuário:", error);
          alert("Erro ao registrar usuário. Tente novamente.");
        }
      };
      
    
    async function handleGoogleSignup() {
        try {
          await registerWithGoogle();
          alert("Cadastro com Google realizado com sucesso!");
          router.push("/user"); // Redireciona para a página do usuário
        } catch (error) {
          console.error("Erro ao cadastrar com Google:", error);
          alert("Erro ao cadastrar com Google. Tente novamente.");
        }
      };

    return (
        <div className="login-page">
            <Header>
                <IconTab route="/help" iconVAlingn={VAlignOptions.MIDDLE} name="Ajuda" icon="bi bi-question"/>
                <IconTab route="/user" iconVAlingn={VAlignOptions.BOTTOM} name={user ? user.username : "Entrar"} icon="bi bi-person-fill"/>
            </Header>
            
            <h1 className="login-title">Entrar na Conta</h1>

            <form className="fields-container" onSubmit={handleSubmit}>
                <div className="fields">
                    <InputField type={FieldTypes.EMAIL} name="email" label="E-Mail*" placeholder="Digite seu e-mail..." required={true}/>
                    <InputField name="name" label="Nome Completo*" placeholder="Digite seu nome..." required={true}/>
                    <div style={{width: "100%", display:"flex", gap:"30px", justifyContent: "space-between", alignItems: "center"}}>
                        <InputField name="username" label="Nome de Usuário*" placeholder="Digite seu nome de usuário..." required={true}/>
                        <InputField type={ FieldTypes.COMBO } name="gender" label="Gênero" options={genderArrayKeysMap}/>
                    </div>
                    <div style={{width: "100%", display:"flex", gap:"30px", justifyContent: "space-between", alignItems: "center"}}>
                        <InputField name="telefone" label="Telefone" placeholder="Digite sua Senha..."/>
                        <InputField type={FieldTypes.DATE} name="aniversario" label="Data de Nascimento*" required={true}/>
                    </div>
                    <div style={{width: "100%", display:"flex", gap:"30px", justifyContent: "space-between", alignItems: "center"}}>
                        <InputField type={FieldTypes.PSWD} name="senha" label="Senha*" placeholder="Digite sua Senha..." required={true}/>
                        <InputField type={FieldTypes.PSWD} name="confsenha" label="Confirmar Senha*" placeholder="Confirme sua Senha..." required={true}/>
                    </div>
                </div>
                <span className="signup-text">Já tem uma conta? <a href="/user/login" onClick={redirect}>Clique Aqui</a></span>
                <TextButton text="Finalizar Cadastro" type={BtnTypes.SUBMIT}/>
                <TextButton text="Entrar com o Google" onClick={handleGoogleSignup}/>
            </form>

        </div>
    );
}


  