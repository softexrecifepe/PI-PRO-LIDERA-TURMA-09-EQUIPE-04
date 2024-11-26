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
                <div className="w-[100%] indent-10 text-[1.25rem] flex flex-col gap-4 text-justify px-[5rem]">
                    <p className="description averia-serif-libre-regular text-primary-c1">PRO Lidera Skill é uma solução inovadora para avaliar e aprimorar suas habilidades de liderança. Com uma abordagem personalizada, o teste identifica suas principais competências e pontos de melhoria, fornecendo insights claros sobre como você pode se desenvolver como líder.</p>
                    <p className="description averia-serif-libre-regular text-primary-c1">Desenvolvido com base em metodologias modernas, o PRO Lidera Skill oferece uma experiência interativa e intuitiva. Ideal para profissionais que desejam crescer em suas carreiras ou organizações que buscam investir no potencial de suas equipes, a ferramenta transforma feedback em oportunidades reais de evolução.</p>
                    <p className="description averia-serif-libre-regular text-primary-c1">Descubra seu perfil de liderança e alcance novos patamares em sua jornada profissional. Com o PRO Lidera Skill, o caminho para o sucesso começa com o autoconhecimento.</p>
                </div>
            </div>
            
            <button className="cinzel-bold text-[2.5rem] test-butn bg-primary-c3 hover:bg-primary-c1 active:bg-primary-c2" onClick={handleClick}><h3>Faça o Teste</h3></button>

        </div>
    );
}

  