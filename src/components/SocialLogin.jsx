import { FcGoogle } from "react-icons/fc";

const SocialLogin = () => {
  return (
    <div>
      <div className="divider w-2/3 mx-auto"></div>

      <div className="w-2/3 mx-auto">
        <button className="flex items-center border p-2 rounded justify-center ml-6">
          <FcGoogle className="mr-4 border rounded-full w-8 h-8" />
          Sign In With Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
