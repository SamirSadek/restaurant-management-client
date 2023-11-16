import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Signup = () => {
  const navigate = useNavigate()
  const {createUser, updateUserProfile} = useContext(AuthContext)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    createUser(data.email , data.password)
    .then(result =>{
      const loggedUser = result.user
      console.log(loggedUser)
      updateUserProfile(data.name , data.photoURL)
      .then(()=>{
        console.log('profile info updated')
        reset()
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "SignUp Successful",
          showConfirmButton: false,
          timer: 1500
        });
        navigate('/')
      })
      .catch(error => console.error(error))
    })
    
  };
  return (
    <div>
      <Helmet>
        <title>Welcome || Sign Up</title>
        <link rel="canonical" href="https://www.tacobell.com/" />
      </Helmet>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Signup now!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  {...register("name", { required: true })}
                  name="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-500">*Name field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  placeholder="Photo URL"
                  {...register("PhotoURL", { required: true })}
                  name="PhotoURL"
                  className="input input-bordered"
                />
                {errors.PhotoURL && (
                  <span className="text-red-500">*PhotoURL field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  placeholder="email"
                  name="email"
                  {...register("email", { required: true })}
                  className="input input-bordered"
                />
                {errors.email && (
                  <span className="text-red-500">*Email field is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  placeholder="password"
                  name="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern:/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]/
                  })}
                  className="input input-bordered"
                />
                {errors.password?.type === 'required' && (
                  <span className="text-red-500">
                    *password field is required 
                  </span>
                )}
                {errors.password?.type === 'minLength' && (
                  <span className="text-red-500">
                    *password field is required with min 6 char 
                  </span>
                )}
                {errors.password?.type === 'maxLength' && (
                  <span className="text-red-500">
                    *password field is required with max 20 char
                  </span>
                )}
                {errors.password?.type === 'pattern' && (
                  <span className="text-red-500">
                    * At least one uppercase letter, one lowercase letter, one number and one special character
                  </span>
                )}
              </div>
              <div className="form-control mt-6">
                <button className="btn btn-primary">Signup</button>
              </div>
            </form>
            <p className='text-center mb-5'><small>Already Have an Account ? <Link className='text-orange-500' to='/login'>Login</Link></small></p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
