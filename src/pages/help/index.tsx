
import IconTab, { VAlignOptions } from "@/components/IconTab";
import Header from "@/components/Header"
import TextButton from "@/components/TextButton"
import InputField from "@/components/InputField" 

export default function Home() {
    return (
        <div>
            <Header>
                <IconTab route="/help" iconVAlingn={VAlignOptions.MIDDLE} name="Ajuda" icon="bi bi-question"/>
                <IconTab route="/user" iconVAlingn={VAlignOptions.BOTTOM} name="Entrar" icon="bi bi-person-fill"/>
            </Header>
            <TextButton text="Batata" onClick={() => {console.log("AAAAAAAAAAA")}}/>
            <div style={{backgroundColor: '#fff', width: '100%'}}>
                <InputField label="Batata" name="batata" placeholder="digite aqui" />
            </div>
        </div>
    );
}


  