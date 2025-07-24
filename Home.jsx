import { useEffect, useState } from "react";
import { db } from "../firebase";
import AppCard from "../components/AppCard";
import AuthGoogleButton from "../components/AuthGoogleButton";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { CATEGORIES } from "../constants";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import TextField from "@mui/material/TextField";
import InstallPWAButton from "../components/InstallPWAButton";
import { collection, getDocs, query, orderBy } from "firebase/firestore";

export default function Home({ user }) {
  const [apps, setApps] = useState([]);
  const [tab, setTab] = useState(0);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchApps();
    // eslint-disable-next-line
  }, []);

  async function fetchApps() {
    const q = query(collection(db, "apps"), orderBy("created_at", "desc"));
    const snap = await getDocs(q);
    setApps(snap.docs.map(doc => ({ id: doc.id, ...doc.data() })));
  }

  const filtered =
    apps.filter(
      (a) =>
        (tab === 0 || a.category === CATEGORIES[tab - 1]) &&
        (a.name.toLowerCase().includes(search.toLowerCase()) ||
          a.description?.toLowerCase().includes(search.toLowerCase()))
    );

  return (
    <Box>
      <InstallPWAButton />
      <Box sx={{ p: 3 }}>
        <Typography variant="h4" sx={{ mb: 2, fontWeight: 700, color: "#236" }}>
          Discover Apps & Games
        </Typography>
        <Tabs
          value={tab}
          onChange={(_e, val) => setTab(val)}
          variant="scrollable"
          scrollButtons="auto"
          sx={{ mb: 2 }}
        >
          <Tab label="All" />
          {CATEGORIES.map((cat) => (
            <Tab key={cat} label={cat} />
          ))}
        </Tabs>
        <TextField
          value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search apps/games..."
          size="small"
          sx={{ mb: 2, width: 320, maxWidth: "100%" }}
        />
        {!user && (
          <Box sx={{ maxWidth: 360, mb: 2 }}>
            <AuthGoogleButton />
          </Box>
        )}
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 2, justifyContent: "flex-start" }}>
          {filtered.length === 0 && (
            <Typography variant="body1" sx={{ color: "#888", mt: 3 }}>
              No apps found.
            </Typography>
          )}
          {filtered.map((app) => (
            <AppCard app={app} key={app.id} />
          ))}
        </Box>
      </Box>
    </Box>
  );
}