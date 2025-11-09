function About() {
  return (
    <section id="about" className="py-12">
      <div className="container px-6 mx-auto text-white">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-semibold">About</h2>
              <p className="mt-4 text-gray-300">I'm Dollar Sid — a JavaScript-first developer. I build end-to-end web applications, with emphasis on backend reliability and real-world features like offline support, device fingerprinting, and geo-location-based flows.</p>
              <ul className="mt-4 text-gray-300 space-y-1">
                <li><strong>Primary:</strong> JavaScript, Node.js, Express, MongoDB</li>
                <li><strong>Frontend:</strong> React, Vite, Tailwind CSS</li>
                <li><strong>Tools:</strong> Git, Vercel, Docker (basic), Postman</li>
              </ul>
            </div>
            <div className="bg-[#0b1220] rounded-xl p-6">
              <h3 className="text-xl font-semibold text-white">Quick facts</h3>
              <div className="mt-4 text-gray-300 space-y-2">
                <p>• Open to remote roles & freelance work</p>
                <p>• Built a student attendance app (WeSigned) with offline support</p>
                <p>• Passionate about reliable backends and UX that just works</p>
              </div>
            </div>
        </div>
      </div>
    </section>
  )
}

export default About;