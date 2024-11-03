"use client";

import IconTab, { VAlignOptions } from "@/components/IconTab";
import Header from "@/components/Header"

export default function Root() {
    return (
        <Header>
            <IconTab route="/help" iconVAlingn={VAlignOptions.MIDDLE} name="Ajuda" icon="bi bi-question"/>
            <IconTab route="/user" iconVAlingn={VAlignOptions.BOTTOM} name="Entrar" icon="bi bi-person-fill"/>
        </Header>
    );
}

  