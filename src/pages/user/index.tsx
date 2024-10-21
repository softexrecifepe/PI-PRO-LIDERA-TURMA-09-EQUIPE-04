
import IconTab, { VAlignOptions } from "@/components/IconTab";
import Header from "@/components/Header"
import Question from "@/components/Question"

export default function Home() {
    return (
        <div>
            <Header>
                <IconTab route="/help" iconVAlingn={VAlignOptions.MIDDLE} name="Ajuda" icon="bi bi-question"/>
                <IconTab route="/user" iconVAlingn={VAlignOptions.BOTTOM} name="Entrar" icon="bi bi-person-fill"/>
            </Header>
            <Question name="batata" question="Batata?" options={['batata!', 'batata.', 'BATATA :3', 'cenoura >:D']} allowMultiple={false}/>
        </div>
    );
}


  