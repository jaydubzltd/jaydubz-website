import "./App.css";
import Hero from "./components/Hero";
import Socials from "./components/Socials";
import Links from "./components/Links";
import Navbar from "./components/Navbar";

export default function App() {
  return (
    <main className="container">
      <Navbar />

      <div className="content">
        <Hero />
        <Socials />
        <Links />
      </div>

    </main>
  );
}