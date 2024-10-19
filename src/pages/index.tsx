

import IconTab, { VAlignOptions } from "@/components/IconTab";

export default function Root() {
    return (
        <div>
            <IconTab route="/" iconVAlingn={VAlignOptions.BOTTOM} name="root" icon="bi bi-person-fill"/>
            <IconTab route="/home" iconVAlingn={VAlignOptions.BOTTOM} name="home" icon="bi bi-person-fill"/>
            <IconTab route="/batata" iconVAlingn={VAlignOptions.BOTTOM} name="batata" icon="bi bi-person-fill"/>
        </div>
    );
}

  