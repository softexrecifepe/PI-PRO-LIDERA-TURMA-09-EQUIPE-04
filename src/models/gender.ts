
enum Gender {
    UNKNOWN = "UNKNOWN",
    MALE = "MALE",
    FEMALE = "FEMALE",
    NON_BINARY = "NON_BINARY",
    AGENDER = "AGENDER",
    FLUID = "FLUID",
    OTHER = "OTHER"
}

export const messages: Record<keyof typeof Gender, string> = {
    UNKNOWN:"Prefiro não responder",
    MALE: "Masculino (cis ou trans)",
    FEMALE: "Feminino (cis ou trans)",
    NON_BINARY: "Não binário",
    FLUID: "Gênero fluido",
    AGENDER: "Agênero",
    OTHER: "Outro"
}

export default Gender