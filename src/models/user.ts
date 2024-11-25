import Gender from "./gender"

interface User {
    name: string
    username: string
    birth?: Date
    phone?: string
    email: string
    gender?: Gender
    password?: string
    readonly createdAt: Date
}

export default User;