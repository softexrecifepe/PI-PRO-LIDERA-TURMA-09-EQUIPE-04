"use client";

import { useUser } from "@/contexts/UserContext";
import { useRouter } from "next/navigation";
import IconTab, { VAlignOptions } from "@/components/IconTab";
import Header from "@/components/Header";
import LoadingScreen from "@/components/Loading";
import "./styles.css";

export default function Root() {
    const router = useRouter();
    const { user, loading } = useUser();

    if (loading) {
        return <LoadingScreen/>;
    }

    function handleClick() {
        router.push("/test")
    }

    return (
        <div className="front-page">
            <Header>
                <IconTab route="/help" iconVAlingn={VAlignOptions.MIDDLE} name="Ajuda" icon="bi bi-question"/>
                <IconTab route="/user" iconVAlingn={VAlignOptions.BOTTOM} name={user ? user.username : "Entrar"} icon="bi bi-person-fill"/>
            </Header>

            <div className="front-text gap-8 shadow-md rounded-md"> 
                <h1 className="title text-7xl cinzel-bold text-primary-c1 ">Teste de Liderança</h1>
                <p className="description averia-serif-libre-regular text-primary-c1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.</p>
            </div>
            
            <button className="cinzel-bold text-[2.5rem] test-butn bg-primary-c3 hover:bg-primary-c1 active:bg-primary-c2" onClick={handleClick}><h3>Faça o Teste</h3></button>

        </div>
    );
}

  