"use client";

import { useUser } from "@/contexts/UserContext";
import IconTab, { VAlignOptions } from "@/components/IconTab";
import Header from "@/components/Header"
import TextButton from "@/components/TextButton"
import InputField from "@/components/InputField" 

export default function Home() {
    const { user, loading } = useUser();

    if (loading) {
        return <p>Carregando...</p>;
    }
    
    return (
        <div>
            <Header>
                <IconTab route="/help" iconVAlingn={VAlignOptions.MIDDLE} name="Ajuda" icon="bi bi-question"/>
                <IconTab route="/user" iconVAlingn={VAlignOptions.BOTTOM} name={user ? user.username : "Entrar"} icon="bi bi-person-fill"/>
            </Header>
            <TextButton text="Click Me" onClick={() => {console.log("AAAAAAAAAAA")}}/>
            <div style={{backgroundColor: '#fff', width: '100%'}}>
                <InputField label="Teste Input Field" name="teste" placeholder="digite aqui" />
            </div>
        </div>
    );
}


  