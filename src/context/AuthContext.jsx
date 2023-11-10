import { onAuthStateChanged } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../api/firebase";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
	const [user, setUser] = useState({})

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, (user) => {
			setUser(user || null)
		})

		return () => {
			unsubscribe()
		}
	},[])

	return (
		<AuthContext.Provider value={{user, setUser}}>
			{children}
		</AuthContext.Provider>
	);
}

export default AuthContext
