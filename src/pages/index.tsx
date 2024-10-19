import IconTab, { VAlignOptions } from "@/components/IconTab";

export default function Root() {
    return (
        <div>
            <IconTab route="/" iconVAlingn={VAlignOptions.BOTTOM} name="root" icon="bi bi-person-fill"/>
        </div>
    );
}

  