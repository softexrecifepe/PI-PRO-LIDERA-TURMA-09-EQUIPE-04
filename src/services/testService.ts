import { app } from "@/config/firebase"
import { getFirestore, collection, addDoc, query, where, getDocs, orderBy, limit } from "firebase/firestore";


const db = getFirestore(app);

export async function saveTestResult(uid: string, results: Record<string, number>) {
    try {
        const timestamp = new Date();
        await addDoc(collection(db, "testResults"), {
            userId: uid,
            results: results,
            submittedAt: timestamp,
        });
        console.log("Resultado do teste salvo com sucesso!");
    } catch (error) {
        console.error("Erro ao salvar resultado do teste:", error);
    }
}

export async function getAllTestsByUser(uid: string): Promise<any[]> {
    try {
        const testsQuery = query(
            collection(db, "testResults"),
            where("userId", "==", uid)
        );
        const querySnapshot = await getDocs(testsQuery);
        const tests = querySnapshot.docs.map(doc => ({
            id: doc.id,
            ...doc.data(),
        }));
        return tests;
    } catch (error) {
        console.error("Erro ao obter todos os testes do usuário:", error);
        return [];
    }
}



export async function getLatestTestByUser(uid: string): Promise<any | null> {
    try {
        const latestTestQuery = query(
            collection(db, "testResults"),
            where("userId", "==", uid),
            orderBy("submittedAt", "desc"),
            limit(1)
        );
        const querySnapshot = await getDocs(latestTestQuery);
    
        if (!querySnapshot.empty) {
            const latestTest = querySnapshot.docs[0];
            return {
                id: latestTest.id,
                ...latestTest.data(),
            };
        } else {
            console.log("Nenhum teste encontrado para o usuário.");
            return null;
        }
    } catch (error) {
        console.error("Erro ao obter o teste mais recente do usuário:", error);
        return null;
    }
}