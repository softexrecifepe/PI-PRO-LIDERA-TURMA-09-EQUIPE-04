import { FormEvent } from "react";

export function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    formData.forEach((value, key) => {
        console.log(key, value);
    });
}