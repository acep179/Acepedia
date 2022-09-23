import { UnderDevelopment } from "../components"

function Inbox({ setTitle }) {

  setTitle('Inbox')

  return (
    <div className="flex flex-col">
      <h1 className="text-5xl text-center">Inbox Page</h1>
      <UnderDevelopment />
    </div>
  )
}

export default Inbox