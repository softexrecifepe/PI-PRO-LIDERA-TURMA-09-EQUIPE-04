"use client";
import { useRouter } from "next/navigation";
import IconTab, { VAlignOptions } from "@/components/IconTab";
import Header from "@/components/Header"
import InputField, {FieldTypes} from "@/components/InputField"
import TextButton, {BtnTypes} from "@/components/TextButton";
import { useUser } from "@/contexts/UserContext";
import Gender, {messages} from "@/models/gender";
import { registerUser, registerWithGoogle } from "@/services/userService";
import LoadingScreen from "@/components/Loading";

import "./styles.css"

export default function Signup() {
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
          router.push("/user");
        } catch (error) {
          console.error("Erro ao registrar usuário:", error);
          alert("Erro ao registrar usuário. Tente novamente.");
        }
      };
      
    
    async function handleGoogleSignup() {
        try {
          await registerWithGoogle();
          setTimeout(() => { router.push("/user"); }, 1000);
        } catch (error) {
          console.error("Erro ao cadastrar com Google:", error);
          alert("Erro ao cadastrar com Google. Tente novamente.");
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

              <form className="fields-container" onSubmit={handleSubmit}>
                  <div className="w-[100%]">
                      <InputField type={FieldTypes.EMAIL} name="email" label="E-Mail*" placeholder="Digite seu e-mail..." required={true}/>
                      <InputField name="name" label="Nome Completo*" placeholder="Digite seu nome..." required={true}/>
                      <div className="w-[100%] flex gap-[30px] content-between items-center">
                          <InputField name="username" label="Nome de Usuário*" placeholder="Digite seu nome de usuário..." required={true}/>
                          <InputField type={ FieldTypes.COMBO } name="gender" label="Gênero" options={genderArrayKeysMap}/>
                      </div>
                      <div className="w-[100%] flex gap-[30px] content-between items-center">
                          <InputField name="telefone" label="Telefone" placeholder="Digite seu Telefone..."/>
                          <InputField type={FieldTypes.DATE} name="aniversario" label="Data de Nascimento*" required={true}/>
                      </div>
                      <div className="w-[100%] flex gap-[30px] content-between items-center">
                          <InputField type={FieldTypes.PSWD} name="senha" label="Senha*" placeholder="Digite sua Senha..." required={true}/>
                          <InputField type={FieldTypes.PSWD} name="confsenha" label="Confirmar Senha*" placeholder="Confirme sua Senha..." required={true}/>
                      </div>
                  </div>
                  <span className="signup-text text-[1.25rem] averia-serif-libre-regular text-primary-c3">Já tem uma conta? <a className="text-primary-c1 hover:text-primary-c2 active:text-primary-c4" href="/user/login" onClick={redirect}>Clique Aqui</a></span>
                  <TextButton text="Finalizar Cadastro" type={BtnTypes.SUBMIT}/>
                  <TextButton text="Entrar com o Google" onClick={handleGoogleSignup}/>
              </form>
            </div>
        </div>
    );
}


  