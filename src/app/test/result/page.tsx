"use client";

import "./styles.css"

import { useUser } from "@/contexts/UserContext";
import IconTab, { VAlignOptions } from "@/components/IconTab";
import Header from "@/components/Header";
import { useTestContext } from "@/contexts/TestContext";
import TextButton from "@/components/TextButton";
import LoadingScreen from "@/components/Loading";

export default function Result() {
    const { user, loading } = useUser();
    const { testResults } = useTestContext();

    if (loading) {
        return <LoadingScreen/>;
    }

    // Função para calcular a pontuação total e determinar o resultado
    const getScoreResult = () => {
        if (!testResults) return null;

        // Calcula a pontuação total
        const totalScore = Object.values(testResults).reduce((sum, value) => {
            return sum + value;
        }, 0);

        // Determina o resultado com base na pontuação
        if (totalScore >= 18 && totalScore <= 35) {
            return {
                score: totalScore,
                description: "Liderança frágil e pouco trabalhada",
                explanation: [
                    "Ao observarmos o perfil de liderança, percebemos que a comunicação ainda se encontra em um estágio inicial de desenvolvimento. Existe uma dificuldade clara em transmitir as mensagens de forma eficaz, o que acaba gerando ruídos e mal-entendidos dentro da equipe. Esse aspecto compromete o alinhamento necessário para o bom andamento das atividades.",

                    "No que diz respeito à visão estratégica, o foco está muito voltado para o curto prazo. Isso limita a capacidade de antecipar desafios e enxergar oportunidades mais amplas. Um líder com visão estratégica mais desenvolvida consegue guiar sua equipe em direção aos objetivos de longo prazo, o que, no momento, ainda precisa ser aprimorado.",
                    
                    "A tomada de decisão também enfrenta dificuldades. Muitas vezes, as decisões são tomadas com hesitação e falta de embasamento, o que gera incertezas e acaba enfraquecendo a confiança da equipe no processo. A agilidade e segurança nas escolhas são essenciais para que o time siga com confiança.",
                    
                    "Em termos de gestão de tempo, notamos que há uma dificuldade considerável em administrar as tarefas de maneira eficaz. Isso resulta em acúmulo de atividades e o não cumprimento de prazos, o que pode prejudicar a entrega de resultados. A priorização de demandas é um ponto crítico que precisa ser trabalhado.",
                    
                    "Quanto à inteligência emocional, existe uma limitação perceptível na habilidade de gerenciar as próprias emoções e, mais ainda, de compreender e responder às emoções da equipe. Isso dificulta a resolução de conflitos e o manejo de crises.",
                    
                    "Por fim, o aspecto de inovação e criatividade demonstra pouca flexibilidade. Há uma tendência de aderir a métodos tradicionais, o que acaba bloqueando novas ideias e soluções criativas, tão necessárias para ambientes de constante mudança e competitividade."
                ]
            };
        } else if (totalScore >= 36 && totalScore <= 53) {
            return {
                score: totalScore,
                description: "Liderança em desenvolvimento",
                explanation: [
                    "Ao analisar o perfil, percebemos uma clara trajetória de crescimento na liderança. A comunicação tem avançado, com o líder demonstrando maior clareza e objetividade nas interações. Embora ainda existam pontos a melhorar, como a escuta ativa e a adaptação da mensagem conforme o público, a evolução é notável.",

                    "Quando falamos de visão estratégica, o líder começa a enxergar além das demandas imediatas, conseguindo identificar alguns objetivos de longo prazo. Entretanto, é necessário continuar desenvolvendo a habilidade de conectar a equipe com essa visão, garantindo que todos estejam alinhados em torno dos mesmos propósitos futuros.",

                    "A tomada de decisão também está em processo de aprimoramento. Notamos que há um esforço em buscar informações mais completas antes de agir, além de ouvir diferentes perspectivas. No entanto, ainda há espaço para fortalecer a confiança nas próprias escolhas, o que traria mais segurança à equipe.",

                    "Quanto à gestão de tempo, é possível notar progressos, com uma melhor organização e tentativa de equilibrar tarefas e prazos. Ainda assim, em momentos de maior demanda, a priorização de atividades pode se tornar um desafio, o que requer maior foco para evitar sobrecarga e atrasos.",

                    "Em relação à inteligência emocional, o líder já demonstra uma maior consciência sobre a importância do controle emocional e da empatia. A capacidade de reconhecer suas próprias emoções e entender o impacto delas nos outros está evoluindo, embora seja importante continuar praticando essas habilidades para fortalecer a liderança.",

                    "Finalmente, no que tange à inovação e criatividade, observamos um interesse crescente por novas abordagens. O líder está cada vez mais aberto a ideias fora do convencional e já começa a incentivar a equipe a explorar soluções criativas. Embora ainda existam hesitações em implementar algumas inovações, o progresso nesse campo é evidente."
                ]
            };
        } else if (totalScore >= 54 && totalScore <= 72) {
            return {
                score: totalScore,
                description: "Líder de alta performance",
                explanation: [
                    "O perfil avaliado reflete uma liderança madura e consolidada. A comunicação é um dos pontos mais fortes, com clareza e objetividade em todas as interações. O líder sabe adaptar suas mensagens conforme o público e garante que todos estejam bem informados, promovendo um ambiente de transparência e confiança. A escuta ativa também é um diferencial, fortalecendo o relacionamento com a equipe.",

                    "A visão estratégica é claramente desenvolvida. O líder tem uma capacidade impressionante de enxergar o cenário a longo prazo, antevendo tanto desafios quanto oportunidades. Essa habilidade de pensar estrategicamente não apenas direciona a equipe, mas também inspira, oferecendo um norte claro para onde todos devem seguir.",

                    "Quanto à tomada de decisão, o líder se destaca por sua assertividade e confiança. As decisões são embasadas em dados e no conhecimento da equipe, o que proporciona um ambiente de segurança e eficiência. A capacidade de tomar decisões rápidas e embasadas é um dos pilares de uma equipe de alto desempenho, e isso está bem presente.",

                    "No campo da gestão de tempo, o líder tem mostrado uma maestria em organizar as prioridades, delegar tarefas de forma eficaz e manter os prazos mesmo em situações de pressão. Essa habilidade é fundamental para manter o time produtivo e focado, sem comprometer a qualidade do trabalho.",

                    "A inteligência emocional também é um dos grandes destaques. O líder demonstra uma habilidade refinada de gerir suas próprias emoções e lidar com as emoções da equipe, mantendo a calma em situações desafiadoras e resolvendo conflitos de maneira empática e eficaz.",

                    "Por último, mas não menos importante, o espírito de inovação e criatividade é uma característica marcante. O líder está sempre incentivando a equipe a buscar novas ideias e explorar soluções criativas, promovendo um ambiente de inovação constante. Esse perfil proativo e aberto ao novo é essencial para que a equipe se mantenha competitiva e capaz de enfrentar os desafios do mercado."
                ]
            };
        } else {
            return {
                score: totalScore,
                description: "Pontuação fora do intervalo esperado",
                explanation: ["Houve um problema com a pontuação calculada. Por favor, revise suas respostas ou entre em contato para verificar os resultados."]
            };
        }
    };

    const scoreResult = getScoreResult();

    return (
        <div>
            <Header>
                <IconTab route="/help" iconVAlingn={VAlignOptions.MIDDLE} name="Ajuda" icon="bi bi-question" />
                <IconTab
                    route="/user"
                    iconVAlingn={VAlignOptions.BOTTOM}
                    name={user ? user.username : "Entrar"}
                    icon="bi bi-person-fill"
                />
            </Header>
            <div className="h-[100%] w-[100%] flex flex-col items-center justify-center gap-8 my-8 ">
                <h1 className="text-[4rem] cinzel-bold">RESULTADO</h1>
                {scoreResult ? (
                    <div className="result-container mt-[1rem] mb-[2rem] flex flex-col justify-center items-center w-[70%] p-[50px] gap-5 shadow-md rounded-md">
                        <h2 className="text-[3rem] cinzel-bold leading-none">{scoreResult.description}</h2>
                        <p className="text-[1.2rem] cinzel-regular mb-[2rem] leading-none">Sua pontuação: <strong className="cinzel-bold">{scoreResult.score}</strong></p>
                        {scoreResult.explanation.map(( msg, idx ) => <p key={idx} className="indent-10 text-justify text-[1.2rem] averia-serif-libre-regular leading-none text-center">{msg}</p>)}
                        
                    </div>
                ) : (
                    <p className="text-[1rem] mt-[1rem]">
                        Não foi possível calcular o resultado.
                    </p>
                )}
                <TextButton text="Baixar PDF" onClick={() => {console.log("PDF")}}/>
            </div>
        </div>
    );
}
