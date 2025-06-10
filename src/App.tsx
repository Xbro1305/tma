import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Widgets/Header/Header";
import { Contest } from "./Pages/Contest/Contest";
import { Footer } from "./Widgets/Footer/Footer";
import { Vote } from "./Pages/Vote/Vote";
import { LuckyHand } from "./Pages/Lucky/Luck";
import { MyTeam } from "./Pages/Team/Team";
import { Quests } from "./Pages/Quests/Quests";

export const Router = () => {
  return (
    <Routes>
      <Route path="/contest" element={<Contest />} />
      <Route path="/vote" element={<Vote />} />
      <Route path="/my_team" element={<MyTeam />} />
      <Route path="/luckyHand" element={<LuckyHand />} />
      <Route path="/quests" element={<Quests />} />
    </Routes>
  );
};

export const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Router />
      <Footer />
    </BrowserRouter>
  );
};
