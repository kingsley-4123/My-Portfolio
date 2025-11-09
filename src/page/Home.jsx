import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import SkillsGraph from "../components/SkillsGraph";
import Projects from "../components/Projects";
import Contact from "../components/Contact";

function HomePage() {
    
    return (
        <div className="min-h-screen text-white bg-linear-to-b from-[#071029] to-[#071428]">
            <Navbar />
            <main>
                <Hero />
                <About />
                <SkillsGraph />
                <Projects />
                <Contact />
            </main>
            <footer className="py-6 text-center text-gray-400">© {new Date().getFullYear()} Dollar Sid — Built with React + Vite</footer>
        </div>
    )
}

export default HomePage;