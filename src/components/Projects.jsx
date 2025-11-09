import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="py-12">
      <div className="container px-6 mx-auto text-white">
        <h2 className="text-3xl font-semibold">Featured Project — WeSigned</h2>
        <p className="text-gray-300 mt-2">A student attendance web app with online & offline modes, GPS + device fingerprinting to reduce impersonation, and QR codes for offline check-ins.</p>


        <div className="mt-6 grid md:grid-cols-2 gap-6">
          <div>
            {/* Replace src with your screenshot when you have one */}
            <div className="h-56 bg-linear-to-br from-slate-800 to-slate-700 rounded-xl flex items-center justify-center text-gray-300">
              <img
                src="/project_shot.png"
                alt="Project ScreenShot."
                className="w-full h-56 aspect-video object-cover rounded-xl" />
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <ProjectCard
              title="WeSigned"
              description="Full-stack attendance app with online/offline support and anti-impersonation features."
              tech={["React", "Node.js", "Express", "MongoDB", "Vite", "Tailwind"]}
              demo="https://we-signed-frontend-wu9w.vercel.app/"
              repo="https://github.com/kingsley-4123/WeSigned-Frontend"
            />
            <div className="text-gray-300 text-sm">Role: Full-stack developer • Timeline: 4 months • Highlights: offline QR flow, location verification, device fingerprinting, session management.</div>
          </div>
        </div>


        <div className="mt-8">
          <h3 className="text-xl font-semibold">Other experiments</h3>
          <div className="mt-4 grid sm:grid-cols-2 gap-4">
            <div className="bg-[#04132e] rounded-xl p-4 text-gray-300">React Timer App — small utility used inside WeSigned for countdowns.</div>
            <div className="bg-[#04132e] rounded-xl p-4 text-gray-300">Network Retry Demo — Axios retry and token refresh pattern example.</div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Projects;