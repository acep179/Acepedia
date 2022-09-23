import { UnderDevelopment } from "../components"

function Dashboard({ setTitle }) {

  setTitle('Dashboard')

  return (
    <div className="flex flex-col">
      <h1 className="text-5xl text-center">Dashboard Page</h1>
      <UnderDevelopment />
    </div>
  )
}

export default Dashboard