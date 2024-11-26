"use client";

import { useUser } from "@/contexts/UserContext";
import IconTab, { VAlignOptions } from "@/components/IconTab";
import Header from "@/components/Header"
import LoadingScreen from "@/components/Loading";
import InfoBox from "@/components/InfoBox";


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
                        <InfoBox 
                            label="O que é o PRO Lidera Skill?" 
                            value="O PRO Lidera Skill é uma ferramenta online projetada para avaliar e desenvolver suas habilidades de liderança. Através de um teste interativo, você pode identificar seus pontos fortes e áreas para crescimento, com base em metodologias modernas de desenvolvimento profissional." 
                        />
                        <InfoBox 
                            label="Como funciona o teste de liderança?" 
                            value="O teste consiste em uma série de perguntas que analisam diferentes aspectos da liderança, como comunicação, gestão de equipes e tomada de decisão. Após concluir o teste, você receberá um relatório detalhado com seus resultados e recomendações personalizadas para aprimorar suas habilidades." 
                        />
                        <InfoBox 
                            label="Quem pode usar o PRO Lidera Skill?" 
                            value="O PRO Lidera Skill é ideal para profissionais de todas as áreas que desejam desenvolver suas competências de liderança, sejam eles líderes experientes ou pessoas que estão começando a assumir posições de gestão. Empresas também podem utilizá-lo para mapear talentos e treinar suas equipes." 
                        />
                        <InfoBox 
                            label="O teste é gratuito?" 
                            value="O PRO Lidera Skill é 100% gratuito." 
                        />
                        <InfoBox 
                            label="Os resultados do teste são confiáveis?" 
                            value="Sim! O teste foi desenvolvido com base em teorias consolidadas de liderança e é validado por especialistas na área. Ele oferece insights úteis e práticos para o seu desenvolvimento pessoal e profissional." 
                        />
                        <InfoBox  
                            label=" Quanto tempo leva para fazer o teste?" 
                            value="O teste pode ser concluído em aproximadamente 10 a 15 minutos. O objetivo é oferecer uma experiência prática e eficiente para que você obtenha seus resultados rapidamente." 
                        />
                        <InfoBox 
                            label="Como posso acessar meus resultados?" 
                            value="Após concluir o teste, você poderá visualizar seus resultados diretamente no site. Caso esteja usando uma conta, seus resultados serão salvos, permitindo que você os consulte a qualquer momento ou compartilhe com outras pessoas." 
                        />
                    </div>
                </div>
            </div>
        </div>
    );

}


  


  