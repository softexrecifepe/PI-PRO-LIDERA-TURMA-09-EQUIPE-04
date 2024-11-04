"use client";

import { useRouter } from "next/navigation";
import IconTab, { VAlignOptions } from "@/components/IconTab";
import Header from "@/components/Header";
import "./styles.css";

export default function Root() {
    const router = useRouter();

    function handleClick() {
        router.push("/test")
    }

    return (
        <div className="front-page">
            <Header>
                <IconTab route="/help" iconVAlingn={VAlignOptions.MIDDLE} name="Ajuda" icon="bi bi-question"/>
                <IconTab route="/user" iconVAlingn={VAlignOptions.BOTTOM} name="Entrar" icon="bi bi-person-fill"/>
            </Header>

            <div className="front-text"> 
                <h1 className="title">Teste de Liderança</h1>
                <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus. Nullam quis imperdiet augue. Vestibulum auctor ornare leo, non suscipit magna interdum eu. Curabitur pellentesque nibh nibh, at maximus ante fermentum sit amet. Pellentesque commodo lacus at sodales sodales. Quisque sagittis orci ut diam condimentum, vel euismod erat placerat. In iaculis arcu eros, eget tempus orci facilisis id.</p>
            </div>
            
            <button className="test-butn" onClick={handleClick}><h3>Faça o Teste</h3></button>

        </div>
    );
}

  