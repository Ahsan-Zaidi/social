import { Link } from "react-router-dom"
import "./register.scss"

const Register = () => {
  return (
    <div className="register">
      <div className="card">
        <div className="left">
            <h1>Sano Social.</h1>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo excepturi sequi itaque atque incidunt omnis voluptas in perferendis, quaerat minima doloremque magnam dolor vero non ratione debitis mollitia rem. Totam?
                </p>
                <span>Already have an account?</span>
                <Link to="/login">
                  <button>Login</button>
                </Link>
        </div>
        <div className="right">
            <h1>Register</h1>
            <form>
                <input type="text" placeholder="Username" />
                <input type="email" placeholder="Email" />
                <input type="password" placeholder="Password" />
                <input type="text" placeholder="Name" />
            </form>
            <button>Register</button>
        </div>
      </div>
    </div>
  )
}

export default Register