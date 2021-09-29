import BottomNav from "./BottomNav/BottomNav";
import { GlobalStorage } from "./GlobalContext/GlobalContext";
import Header from "./Header/Header";
import Input from "./Input/Input";

function App() {
  return (
    <>
      <GlobalStorage>
        <Header />
        <Input />
        <BottomNav />
      </GlobalStorage>
    </>
  );
}

export default App;
