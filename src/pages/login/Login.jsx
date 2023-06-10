import "./login.scss"

const Login = () => {
  return (
    <div className="login">
        <div className="card">
            <div className="left">
                <h1>Hello World</h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo excepturi sequi itaque atque incidunt omnis voluptas in perferendis, quaerat minima doloremque magnam dolor vero non ratione debitis mollitia rem. Totam?
                    </p>
                    <span>Don't have an Account?</span>
                    <button>Register</button>
            </div>
            <div className="right">
                <h1>Login</h1>
                <form>
                    <input type="text" placeholder="Username" />
                    <input type="password" placeholder="Password" />
                </form>
                <button>Login</button>
            </div>
        </div>
    </div>
  )
}

export default Login