import Sidebar from "./components/Sidebar";
import ChatPart from "./components/ChatPart";

function App() {
  return (
    <main className="bg-level-2 h-screen w-full flex gap-x-10 text-white py-6 pl-8 pr-10">
      <Sidebar />
      <ChatPart />
    </main>
  );
}

export default App;
