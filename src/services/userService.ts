import { app } from "@/config/firebase"
import User from "@/models/user";

import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, updateProfile, signOut} from "firebase/auth";
import { getFirestore, doc, Timestamp, setDoc, updateDoc, getDoc} from "firebase/firestore";


const auth = getAuth(app);
const db = getFirestore(app);
const provider = new GoogleAuthProvider();

provider.addScope("https://www.googleapis.com/auth/user.birthday.read");
provider.addScope("https://www.googleapis.com/auth/user.gender.read");

export async function registerUser(newUser: User) {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, newUser.email, newUser.password!);


    await updateProfile(userCredential.user, {
      displayName: newUser.username,
    });

    await setDoc(doc(db, "users", userCredential.user.uid), {
      name: newUser.name,
      username: newUser.username,
      birth: newUser.birth,
      phone: newUser.phone,
      email: newUser.email,
      gender: newUser.gender,
      createdAt: newUser.createdAt,
    });

    console.log("Usuário registrado com sucesso!");
  } catch (error) {
    console.error("Erro ao registrar usuário:", error);
  }
}

export async function updateUserData(uid: string, updatedData: Partial<User>) {
    try {
      const sanitizedData: any = { ...updatedData };

        if (sanitizedData.birth instanceof Date) {
          sanitizedData.birth = sanitizedData.birth.toISOString();
        }

        if (sanitizedData.password) {
          sanitizedData.password = undefined
        }

        await updateDoc(doc(db, "users", uid), sanitizedData);
        console.log("Dados do usuário atualizados!");
    } catch (error) {
        console.error("Erro ao atualizar dados do usuário:", error);
    }
}

export async function getUserData(uid: string): Promise<User | null> {
  try {
    const userDoc = await getDoc(doc(db, "users", uid));

    if (userDoc.exists()) {
      const data = userDoc.data();

      // Converter os dados para o tipo User
      const user: User = {
        name: data.name,
        username: data.username,
        birth: data.birth instanceof Timestamp ? data.birth.toDate() : new Date(data.birth),
        phone: data.phone,
        email: data.email,
        gender: data.gender,
        password: data.password, // Se aplicável
        createdAt: data.createdAt instanceof Timestamp ? data.createdAt.toDate() : new Date(data.createdAt),
      };

      return user;
    } else {
      console.log("Usuário não encontrado!");
      return null;
    }
  } catch (error) {
    console.error("Erro ao buscar dados do usuário:", error);
    return null;
  }
}


export async function loginWithEmailAndPassword(email: string, password: string): Promise<void> {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    console.log("Login bem-sucedido:", userCredential.user);
  } catch (error) {
    console.error("Erro ao fazer login:", error);
  }
}

export async function loginWithGoogle(): Promise<void> {
  try {
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;
    
    console.log("Login com Google bem-sucedido:", user);

    const userDocRef = doc(db, "users", user.uid);
    const userDoc = await getDoc(userDocRef);

    if (!userDoc.exists()) {
      const credential = GoogleAuthProvider.credentialFromResult(userCredential);
        const token = credential?.accessToken;

        const response = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const userInfo = await response.json();

      console.log("Usuário ainda não cadastrado no Firestore, cadastrando...");
      await setDoc(userDocRef, {
        username: user.displayName,
        name: userInfo.name,
        gender: userInfo.gender,
        birth: userInfo.birthday,
        phone: user.phoneNumber,
        email: user.email,
        createdAt: new Date(),
      });
    }
  } catch (error) {
    console.error("Erro ao fazer login com Google:", error);
  }
}

export async function registerWithGoogle(): Promise<void> {
  try {
    const userCredential = await signInWithPopup(auth, provider);
    const user = userCredential.user;

    const credential = GoogleAuthProvider.credentialFromResult(userCredential);
    const token = credential?.accessToken;

    const response = await fetch("https://www.googleapis.com/oauth2/v3/userinfo", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    const userInfo = await response.json();

    await setDoc(doc(db, "users", user.uid), {
      username: user.displayName,
      name: userInfo.name,
      gender: userInfo.gender,
      birth: userInfo.birthday,
      phone: user.phoneNumber,
      email: user.email,
      createdAt: new Date(),
    });

    console.log("Cadastro com Google bem-sucedido!");
  } catch (error) {
    console.error("Erro ao fazer cadastro com Google:", error);
  }
}


export async function logoutUser(): Promise<void> {
  const auth = getAuth();
  try {
    await signOut(auth);
    console.log("Logout realizado com sucesso!");
  } catch (error) {
    console.error("Erro ao realizar logout:", error);
  }
}
