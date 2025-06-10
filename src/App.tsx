import DarkModeToggle from "./components/DarkModeToggle";
import SkipList from "./components/SkipList";

function App() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <header className="text-center p-4 text-2xl font-bold relative">
        <p>Choose Your Skip Size </p>
        <DarkModeToggle />
      </header>
      <p className="text-center">
        Select the skip size that best suits your needs
      </p>
      <SkipList />
    </div>
  );
}

export default App;
