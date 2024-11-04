"use client";
import { useRouter } from "next/navigation";


export default function User() {
    const router = useRouter();
    router.push("/user/login")
}