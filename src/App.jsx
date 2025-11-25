import "./App.css";
function App(){
  return ( <div className="container">
        <div className="card">
            <div className="logo">🐦</div>

            <h2>Sign in to Twitter</h2>

            <button class="btn google">Sign in with Google</button>
            <button class="btn apple">Sign in with Apple</button>

            <p class="or">or</p>

            <input type="text" placeholder="Phone, email or username" className="input" />

            <button className="btn next">Next</button>

            <button className="btn forgot">Forgot Password</button>

            <p className="signup">Don't have an account? <a href="#">Sign up</a></p>
        </div>
    </div>)
}
export default App;