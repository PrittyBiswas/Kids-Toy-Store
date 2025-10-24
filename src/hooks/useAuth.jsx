import React, { createContext, useContext, useEffect, useState } from "react";
import { auth, googleProvider } from "../firebase/config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  updateProfile as fbUpdateProfile,
  sendPasswordResetEmail,
} from "firebase/auth";

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (u) => {
      setUser(u);
      setLoading(false);
    });
    return () => unsub();
  }, []);

  const register = (email, password, displayName, photoURL) =>
    createUserWithEmailAndPassword(auth, email, password).then(({ user }) =>
      fbUpdateProfile(user, { displayName, photoURL }).then(() => user)
    );

  const login = (email, password) => signInWithEmailAndPassword(auth, email, password);
  const googleLogin = () => signInWithPopup(auth, googleProvider);
  const logout = () => signOut(auth);
  const updateProfileData = (data) => fbUpdateProfile(auth.currentUser, data);
  const resetPassword = (email) => sendPasswordResetEmail(auth, email);

  return (
    <AuthContext.Provider
      value={{ user, loading, register, login, logout, googleLogin, updateProfileData, resetPassword }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
