"use client";

import { useUser } from "@/contexts/UserContext";
import IconTab, { VAlignOptions } from "@/components/IconTab";
import Header from "@/components/Header"
import LoadingScreen from "@/components/Loading";
import InputField from "@/components/InputField"


import "./styles.css"

export default function UserScreen() {
    const { user, loading } = useUser();

    if (loading) {
        return <LoadingScreen/>;
    }


    return (
        <div className="min-h-[100vh] flex flex-col items-center">
            <Header>
                <IconTab route="/help" iconVAlingn={VAlignOptions.MIDDLE} name="Ajuda" icon="bi bi-question"/>
                <IconTab route="/user" iconVAlingn={VAlignOptions.BOTTOM} name={user ? user.username : "Entrar"} icon="bi bi-person-fill"/>
            </Header>
            <div className="h-[100%] w-[100%] flex flex-col items-center justify-center gap-8 my-8">
            
                <h1 className="text-[4rem] cinzel-bold">FAQ</h1>
                <div className="fields-container">
                    <div className="w-[100%] flex flex-col gap-5">
                        <InputField 
                            name="pergunta" 
                            label="Para que serve este teste?" 
                            value="Para medir a sua capacidade de liderança." 
                            disabled={true}
                        />
                        <InputField 
                            name="pergunta" 
                            label="Para que serve este teste?" 
                            value="Para medir a sua capacidade de liderança." 
                            disabled={true}
                        />
                        <InputField 
                            name="pergunta" 
                            label="Para que serve este teste?" 
                            value="Para medir a sua capacidade de liderança." 
                            disabled={true}
                        />
                        <InputField 
                            name="pergunta" 
                            label="Para que serve este teste?" 
                            value="Para medir a sua capacidade de liderança." 
                            disabled={true}
                        />
                    </div>
                </div>
            </div>
        </div>
    );

}


  


  