import { UnderDevelopment } from "../components"

function Profile({ setTilte }) {

  setTilte('Profile')

  return (
    <div className="flex flex-col">
      <h1 className="text-5xl text-center">Profile Page</h1>
      <UnderDevelopment />
    </div>
  )
}

export default Profile