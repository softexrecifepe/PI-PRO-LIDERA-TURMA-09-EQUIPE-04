"use client";
import { useRouter } from "next/navigation";

import { useUser } from "@/contexts/UserContext";
import IconTab, { VAlignOptions } from "@/components/IconTab";
import Header from "@/components/Header"
import TextButton from "@/components/TextButton"
import { logoutUser } from "@/services/userService";
import LoadingScreen from "@/components/Loading";
import InputField, {FieldTypes} from "@/components/InputField"
import Gender from "@/models/gender";


import "./styles.css"

export default function UserScreen() {
    const router = useRouter();
    const { user, loading } = useUser();

    if (loading) {
        return <LoadingScreen/>;
    }

    const gender_msgs: Record<keyof typeof Gender, string> = {
        UNKNOWN:"Indefinido",
        MALE: "Masculino",
        FEMALE: "Feminino",
        NON_BINARY: "Não binário",
        FLUID: "Gênero fluido",
        AGENDER: "Agênero",
        OTHER: "Outro"
    }

    if (!user) {
        router.push("/user/login")
    } else {
        return (
            <div className="min-h-[100vh] flex flex-col items-center">
                <Header>
                    <IconTab route="/help" iconVAlingn={VAlignOptions.MIDDLE} name="Ajuda" icon="bi bi-question"/>
                    <IconTab route="/user" iconVAlingn={VAlignOptions.BOTTOM} name={user ? user.username : "Entrar"} icon="bi bi-person-fill"/>
                </Header>
                <div className="h-[100%] w-[100%] flex flex-col items-center justify-center gap-8 my-8">
                
                    <h1 className="text-[4rem] cinzel-bold">Informações da Conta</h1>
                    <div className="fields-container">
                        <div className="w-[100%]">
                            <InputField type={FieldTypes.EMAIL} name="email" label="E-Mail" value={user.email} disabled={true}/>
                            <InputField name="name" label="Nome Completo" value={user.name} disabled={true}/>
                            <div className="w-[100%] flex gap-[30px] content-between items-center">
                                <InputField name="username" label="Nome de Usuário" value={user.username} disabled={true}/>
                                <InputField type={ FieldTypes.TEXT } name="gender" label="Gênero" value={gender_msgs[user.gender!]} disabled={true}/>
                            </div>
                            <div className="w-[100%] flex gap-[30px] content-between items-center">
                                <InputField name="telefone" label="Telefone" value={user.phone} disabled={true}/>
                                <InputField type={FieldTypes.DATE} name="aniversario" label="Data de Nascimento"  value={user.birth!.toISOString().substr(0, 10)} disabled={true}/>
                            </div>
                        </div>
                        <TextButton text="Sair" onClick={logoutUser}/>
                    </div>
                </div>
            </div>
        );
    }
}


  


  