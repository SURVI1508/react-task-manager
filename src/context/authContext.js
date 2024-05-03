import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const auth = getAuth();

  const navigate = useNavigate();
  const handleSignOut = () => {
    signOut(auth)
      .then((res) => {
        navigate("/auth/sign-in");
      })
      .catch((error) => {
        console.error("Sign-out error", error);
      });
  };
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (!user) {
        navigate("/auth/sign-in");
        return;
      }
      setUser(user);
    });
    return () => {};
  }, []);
  return (
    <AuthContext.Provider value={{ user, handleSignOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
