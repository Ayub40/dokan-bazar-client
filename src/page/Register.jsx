import { Link } from 'react-router-dom';
import useAuth from "../Hooks/useAuth";
import AuthContext from "../Context/AuthContext";
import NavLinks from '../component/NavLinks';

export function Register() {
  const { createUser } = useAuth(AuthContext)

  const handleRegister = e => {
    e.preventDefault();
    console.log(e.currentTarget);
    const form = new FormData(e.currentTarget);

    const name = form.get('name');
    const photo = form.get('photo');
    const email = form.get('email');
    const password = form.get('password');
    console.log(name, photo, email, password);
    // console.log(form.get('password'));

    // create user
    createUser(email, password)
      .then(result => {
        console.log(result.user)
      })
      .catch(error => {
        console.error(error)
      })

  }


  return (
    <div>
      <NavLinks></NavLinks>
      <div>
        <h2 className="text-3xl my-10 text-center">Register your account</h2>

        <form onSubmit={handleRegister} className="card-body md:w-3/4 lg:w-1/2 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Your Name</span>
            </label>
            <input type="text" name="name" placeholder="Enter your name" className="input input-bordered" required />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <input type="text" name="photo" placeholder="Enter your photo url" className="input input-bordered" required />
          </div>
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
            <button className="btn btn-primary">Register</button>
          </div>
        </form>
        <p className="text-center mt-4">Already have an account ? <Link className="text-[#FF8C47] font-bold" to='/login'>Login</Link> </p>
      </div>
    </div>
  );
}
