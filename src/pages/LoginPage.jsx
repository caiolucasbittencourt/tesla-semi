export default function LoginPage() {
  return (
    <div className="bg-black text-white w-full flex-grow flex items-center justify-center py-32 px-4 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-left text-3xl font-bold tracking-tight">
            Sign In
          </h2>
        </div>
        <form className="mt-8 space-y-6" action="#" method="POST">
          <div className="relative">
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="peer relative block w-full appearance-none rounded-md border border-gray-700 bg-black px-3 py-4 text-white placeholder-gray-500 focus:z-10 focus:border-gray-500 focus:outline-none sm:text-sm"
              placeholder=" "
            />
            <label
              htmlFor="email-address"
              className="absolute left-3 top-4 z-10 origin-[0] -translate-y-9 scale-75 transform text-sm text-gray-400 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-9 peer-focus:scale-75"
            >
              Email address
            </label>
          </div>

          <div>
            <button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-gray-400  py-3 px-4 text-base font-medium text-white hover:bg-white hover:text-black cursor-pointer"
            >
              Next
            </button>
          </div>
        </form>

        <div className="flex flex-col items-center justify-center space-y-4 pt-4">
          <a href="#" className="font-medium text-gray-300 hover:text-white">
            Forgot your password?
          </a>
          <a href="#" className="font-medium text-gray-300 hover:text-white">
            Create Account
          </a>
        </div>
      </div>
    </div>
  );
}
