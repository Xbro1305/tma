import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Header } from "./Widgets/Header/Header";
import { Contest } from "./Pages/Contest/Contest";
import { Footer } from "./Widgets/Footer/Footer";
import { Vote } from "./Pages/Vote/Vote";
import { LuckyHand } from "./Pages/Lucky/Luck";
import { MyTeam } from "./Pages/Team/Team";
import { Quests } from "./Pages/Quests/Quests";
import { Top } from "./Pages/Top/Top";
import { Home } from "./Pages/Home/Home";
import { Shop } from "./Pages/Shop/Shop";
import { ProfileSizes } from "./Pages/Profile/ProfileSizes/ProfileSizes";

export const Router = () => {
  return (
    <Routes>
      <Route path={RouterPaths.contest} element={<Contest />} />
      <Route path={RouterPaths.vote} element={<Vote />} />
      <Route path={RouterPaths.myTeam} element={<MyTeam />} />
      <Route path={RouterPaths.luckyHand} element={<LuckyHand />} />
      <Route path={RouterPaths.quests} element={<Quests />} />
      <Route path={RouterPaths.top} element={<Top />} />
      <Route path={RouterPaths.home} element={<Home />} />
      <Route path={RouterPaths.shop} element={<Shop />} />
      <Route path={RouterPaths.profileSizes} element={<ProfileSizes />} />
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

export const RouterPaths = {
  contest: "/contest",
  vote: "/vote",
  home: "/",
  shop: "/shop",
  top: "/top",
  quests: "/quests",
  myTeam: "/my-team",
  luckyHand: "/lucky-hand",
  profileSizes: "/profile/sizes",
};
