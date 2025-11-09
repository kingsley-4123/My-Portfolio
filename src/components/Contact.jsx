import { Mail } from 'lucide-react'
import { Github, Linkedin } from "lucide-react";

function Contact() {

  return (
    <section id="contact" className="py-12">
      <div className="container px-6 mx-auto text-white">
        <h2 className="text-2xl font-semibold">Contact</h2>
        <p className="text-gray-300 mt-2">Interested in working together? Send an email or connect on GitHub / LinkedIn.</p>
        <div className="mt-6 flex gap-3 items-center">
          <a href="kingsleyekene51@gmail.com" className="flex items-center px-3 py-3 bg-cyan-400 text-[#0f172a] rounded-lg font-medium"><Mail size={18}/> Email</a>
          <a href="https://github.com/kingsley-4123/WeSigned-Frontend" target="_blank" rel="noreferrer" className="flex items-center px-3 py-3 border border-gray-600 rounded-lg"><Github size={18}/> GitHub</a>
          <a href="#" target="_blank" rel="noreferrer" className="flex items-center px-3 py-3 border border-gray-600 rounded-lg"><Linkedin size={18}/> LinkedIn</a>
        </div>
      </div>
    </section>
  )
}

export default Contact;