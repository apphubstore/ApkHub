import { Route, Routes, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import AppDetails from "./pages/AppDetails";
import DeveloperPanel from "./pages/DeveloperPanel";
import AdminPanel from "./pages/AdminPanel";
import { useEffect, useState } from "react";
import { auth, db } from "./firebase";
import { APP_NAME } from "./constants";
import AppBarMain from "./components/AppBarMain";
import { onAuthStateChanged } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

function App() {
  const [user, setUser] = useState(null);
  const [isAdmin, setIsAdmin] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      setLoading(false);
      if (user) {
        // Optional: check 'admin' field on user doc in Firestore
        const ref = doc(db, "users", user.uid);
        const snap = await getDoc(ref);
        setIsAdmin(snap.exists() && snap.data().admin === true);
      } else {
        setIsAdmin(false);
      }
    });
    return () => unsub();
  }, []);

  if (loading) return <div style={{margin:48}}>Loading...</div>;

  return (
    <>
      <AppBarMain user={user} isAdmin={isAdmin} />
      <Routes>
        <Route path="/" element={<Home user={user} />} />
        <Route path="/app/:id" element={<AppDetails user={user} />} />
        <Route path="/developer" element={user ? <DeveloperPanel user={user} /> : <Navigate to="/" />} />
        <Route path="/admin" element={isAdmin ? <AdminPanel user={user} /> : <Navigate to="/" />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );
}

export default App;