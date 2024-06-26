import { useApplicationContext } from "@/contexts/ApplicationContextProvider";
import { useLogin } from "@/services/apiAuth";
import MiniSpinner from "@/ui/MiniSpinner";
import { FormEvent, useState } from "react";
import { Logo } from ".";

const LoginModal = () => {
  // useEffect(() => {
  //   login({ email: "puru@codepract.com", password: "puru531" });
  // }, []);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { setShowLoginWindow } = useApplicationContext();
  const { login, isLoading } = useLogin();

  function handleUserLogin(e: FormEvent<HTMLFormElement>): void {
    e.preventDefault();
    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");
          setPassword("");
          setShowLoginWindow(false);
        },
      },
    );
  }

  return (
    <div
      id="login-popup"
      tabIndex={-1}
      className="fixed left-0 right-0 top-0 z-40 flex h-full items-center justify-center overflow-y-auto overflow-x-hidden bg-black/50"
    >
      <div className="relative h-full w-full max-w-md p-4 md:h-auto">
        <div className="theme relative rounded-lg shadow">
          <button
            onClick={() => setShowLoginWindow(false)}
            type="button"
            className="popup-close absolute right-2.5 top-3 ml-auto inline-flex items-center rounded-lg bg-transparent p-1.5 text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900"
          >
            <svg
              aria-hidden="true"
              className="h-5 w-5"
              fill="#c6c7c7"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              ></path>
            </svg>
            <span className="sr-only">Close popup</span>
          </button>
          <div className="pt-10">
            <Logo />
          </div>

          <div className="p-5">
            <h3 className="mb-0.5 text-2xl font-medium"></h3>
            <p className="mb-4 text-sm font-normal text-gray-800"></p>

            <div className="text-center">
              <p className="mb-3 text-2xl font-semibold leading-5">
                Admin Login
              </p>
              <p className="mt-2 text-sm leading-4 text-slate-900 dark:text-slate-400">
                Login only available for authorized persons!
              </p>
            </div>

            {/* <div className="mt-7 flex flex-col gap-2">

                    <button
                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><img
                            src="https://www.svgrepo.com/show/512317/github-142.svg" alt="GitHub"
                            className="h-[18px] w-[18px] " />
                        Continue with GitHub
                    </button>

                    <button
                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60">
                          <img
                            src="https://www.svgrepo.com/show/475656/google-color.svg" alt="Google"
                            className="h-[18px] w-[18px] " />Continue with
                        Google
                    </button>


                    <button
                        className="inline-flex h-10 w-full items-center justify-center gap-2 rounded border border-slate-300 bg-white p-2 text-sm font-medium text-black outline-none focus:ring-2 focus:ring-[#333] focus:ring-offset-1 disabled:cursor-not-allowed disabled:opacity-60"><img
                            src="https://www.svgrepo.com/show/448234/linkedin.svg" alt="Google"
                            className="h-[18px] w-[18px] " />Continue with
                        LinkedIn
                    </button>
                </div> */}

            {/* <div className="flex w-full items-center gap-2 py-6 text-sm text-slate-600">
                    <div className="h-px w-full bg-slate-200"></div>
                    OR
                    <div className="h-px w-full bg-slate-200"></div>
                </div> */}

            <form className="mt-6 w-full" onSubmit={(e) => handleUserLogin(e)}>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                name="email"
                type="email"
                autoComplete="email"
                required
                className="input-box"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="input-box"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              {/* <p className="mb-3 mt-2 text-sm text-gray-500">
                        <a href="/forgot-password" className="text-blue-800 hover:text-blue-600">Reset your password?</a>
                    </p> */}
              <button type="submit" className="btn-primary mt-6 w-full">
                {isLoading ? <MiniSpinner /> : "Continue"}
              </button>
            </form>

            {/* <div className="mt-6 text-center text-sm text-slate-600">
                    Don't have an account?
                    <a href="/signup" className="font-medium text-[#4285f4]">Sign up</a>
                </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
