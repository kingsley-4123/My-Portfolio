function ProjectCard({title, description, tech, demo, repo}) {
  return (
    <div className="bg-[#04132e] rounded-xl p-5 text-white shadow-lg">
      <div className="flex justify-between items-start">
      <div>
        <h3 className="text-xl font-semibold">{title}</h3>
        <p className="text-gray-300 mt-2">{description}</p>
        <div className="mt-3 text-sm text-gray-400">{tech.join(' • ')}</div>
      </div>
      <div className="flex flex-col gap-2">
        {demo && <a href={demo} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 bg-cyan-400 rounded-md font-semibold text-[#0f172a]">Live</a>}
        {repo && <a href={repo} target="_blank" rel="noreferrer" className="text-sm px-3 py-1 border border-gray-600 rounded-md text-gray-300">Code</a>}
      </div>
      </div>
    </div>
  )
}

export default ProjectCard;