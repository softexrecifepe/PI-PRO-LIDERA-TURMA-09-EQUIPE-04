"use client";
import { useRouter } from "next/navigation";

import { useUser } from "@/contexts/UserContext";
import IconTab, { VAlignOptions } from "@/components/IconTab";
import Header from "@/components/Header"
import TextButton from "@/components/TextButton"
import InputField from "@/components/InputField" 
import { logoutUser } from "@/services/userService";

export default function User() {
    const router = useRouter();
    const { user, loading } = useUser();

    if (loading) {
        return <p>Carregando...</p>;
    }

    if (!user) {
        router.push("/user/login")

    } else {
        return (
            <div>
                <Header>
                    <IconTab route="/help" iconVAlingn={VAlignOptions.MIDDLE} name="Ajuda" icon="bi bi-question"/>
                    <IconTab route="/user" iconVAlingn={VAlignOptions.BOTTOM} name={user ? user.username : "Entrar"} icon="bi bi-person-fill"/>
                </Header>
                <div>
                    <h1>Bem-vindo, {user?.name}!</h1>
                    <p>Email: {user?.email}</p>
                    <TextButton text="Sair" onClick={logoutUser}/>
                </div>
            </div>
        );
    }
    
    
}


  