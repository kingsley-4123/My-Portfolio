import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'

function SkillsGraph() {
  // Simple bar chart comparing backend vs frontend skills
  const data = [
    { name: 'Backend', score: 90 },
    { name: 'Frontend', score: 65 },
    { name: 'DevOps', score: 60 },
  ];


  return (
    <section className="py-12">
      <div className="container px-6 mx-auto text-white">
        <h2 className="text-2xl font-semibold">Skill Comparison</h2>
        <p className="text-gray-300 mt-2">This visual shows stronger backend experience compared to frontend design — I deliver robust systems and solid frontends when needed.</p>
        <div className="mt-6 h-56 bg-[#071428] rounded-xl p-4">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
              <XAxis dataKey="name" stroke="#94a3b8" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="score" fill="#06b6d4" radius={[6,6,0,0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  )
}

export default SkillsGraph;