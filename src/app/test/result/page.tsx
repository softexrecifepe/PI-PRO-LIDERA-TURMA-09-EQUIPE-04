"use client";

import { useUser } from "@/contexts/UserContext";
import IconTab, { VAlignOptions } from "@/components/IconTab";
import Header from "@/components/Header";
import { useTestContext } from "@/contexts/TestContext";
import TextButton from "@/components/TextButton";

export default function Result() {
    const { user, loading } = useUser();
    const { testResults } = useTestContext();

    if (loading) {
        return <p>Carregando...</p>;
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
                description: "Liderança frágil e pouco trabalhada.",
                explanation: "Sua pontuação indica que é necessário desenvolver habilidades de liderança. Este é um momento de aprendizado, onde é importante buscar autoconhecimento, investir em capacitação e trabalhar sua autoconfiança. A liderança é um processo contínuo de evolução, e pequenos passos podem gerar grandes resultados a longo prazo."
            };
        } else if (totalScore >= 36 && totalScore <= 53) {
            return {
                score: totalScore,
                description: "Liderança em desenvolvimento.",
                explanation: "Você está no caminho certo para se tornar um líder mais eficaz. Sua pontuação mostra que já possui algumas competências essenciais, mas ainda há espaço para crescimento. Continue buscando oportunidades de aprendizado, feedbacks construtivos e práticas que fortaleçam sua capacidade de liderar com impacto."
            };
        } else if (totalScore >= 54 && totalScore <= 72) {
            return {
                score: totalScore,
                description: "Líder de alta performance.",
                explanation: "Parabéns! Sua pontuação reflete um alto nível de competência em liderança. Você demonstra habilidades sólidas para influenciar, motivar e conduzir equipes em direção aos objetivos. Continue aprimorando suas práticas e compartilhando sua experiência com outros, consolidando ainda mais sua liderança de alta performance."
            };
        } else {
            return {
                score: totalScore,
                description: "Pontuação fora do intervalo esperado.",
                explanation: "Houve um problema com a pontuação calculada. Por favor, revise suas respostas ou entre em contato para verificar os resultados."
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
            <div style={{ backgroundColor: "#fff", width: "100%", padding: "2rem", textAlign: "center" }}>
                <h5>RESULTADO</h5>
                {scoreResult ? (
                    <div style={{ marginTop: "1rem",  marginBottom: "2rem", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
                        <h1>{scoreResult.description}</h1>
                        <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>Sua pontuação: <strong>{scoreResult.score}</strong></p>
                        <p style={{width: "70%", textWrap:"wrap", marginBottom: "1rem"}}>{scoreResult.explanation}</p>
                        
                    </div>
                ) : (
                    <p style={{ fontSize: "1rem", marginTop: "1rem" }}>
                        Não foi possível calcular o resultado.
                    </p>
                )}
                <TextButton text="Baixar PDF" onClick={() => {console.log("PDF")}}/>
            </div>
        </div>
    );
}
