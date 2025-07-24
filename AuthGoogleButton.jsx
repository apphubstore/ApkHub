import Button from "@mui/material/Button";
import GoogleIcon from "@mui/icons-material/Google";
import { auth, provider, db } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export default function AuthGoogleButton() {
  const handleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      // Create user doc if not exists
      const user = result.user;
      await setDoc(
        doc(db, "users", user.uid),
        {
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL,
          admin: false // Set manually in Firestore for admins
        },
        { merge: true }
      );
    } catch (error) {
      alert("Google login failed: " + error.message);
    }
  };
  return (
    <Button
      fullWidth
      variant="contained"
      startIcon={<GoogleIcon />}
      onClick={handleLogin}
      sx={{
        mt: 2,
        background: "linear-gradient(90deg,#5f2,#2af)",
        color: "#222",
        fontWeight: 600,
        textTransform: "none"
      }}
    >
      Sign in with Google
    </Button>
  );
}