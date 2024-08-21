
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import AuthContext from "../Context/AuthContext";
import NavLinks from "../component/NavLinks";


const Login = () => {
  const { signIn } = useAuth(AuthContext);

  const location = useLocation();
  console.log('location in the login page', location);

  const navigate = useNavigate();


  const handleLogin = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);
    const email = form.get('email');
    const password = form.get('password');
    // console.log(form.get('password'));
    console.log(email, password);
    signIn(email, password)
      .then(result => {
        console.log(result.user)

        // navigate after login
        navigate(location?.state ? location.state : '/')
      })
      .catch(error => {
        console.error(error);
      })
  }

  return (
    <div>
      <NavLinks></NavLinks>
      <div>
        <h2 className="text-3xl my-10 text-center">Login your account</h2>

        <form onSubmit={handleLogin} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Email</span>
            </label>
            <input type="email" name="email" placeholder="Enter your email address" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Password</span>
            </label>
            <input type="password" name="password" placeholder="Enter your password" className="input input-bordered" required />
            <label className="label">
              <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-primary">Login</button>
          </div>
        </form>
        <p className="text-center mt-4">Dont’t Have An Account ? <Link className="text-[#FF8C47] font-bold" to='/register'>Register</Link> </p>
      </div>
    </div>
  );
};

export default Login;
