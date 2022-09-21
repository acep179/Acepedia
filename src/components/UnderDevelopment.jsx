import { Link } from "react-router-dom"

function UnderDevelopment() {
  return (
    <div className="text-3xl text-center mt-7">
      <p>Sory, this page is under development</p>
      <p>Pelase, visit the <Link className="text-slate-500 hover:text-slate-700" to="/products">Product page</Link></p>
    </div>
  )
}

export default UnderDevelopment