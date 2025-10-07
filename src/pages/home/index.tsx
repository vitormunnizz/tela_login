

function Home() {
  return (
    <div className="flex flex-col justify-center min-h-screen items-center">

      <div className="flex flex-col w-full max-w-md p-8 bg-white rounded-lg shadow-xl space-y-6">

        {/* Title */}
        <h1 className="text-3xl font-bold text-center text-gray-800">
          Login Screen
        </h1>

        {/* Email Input */}
        <input
          type="email"
          placeholder="Email"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Password Input */}
        <input
          type="password"
          placeholder="Password"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Remember Me and Forgot Password Section */}
        <div className="flex justify-between items-center text-sm">
          <div className="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              // Tailwind classes para o estilo do checkbox
              className="h-3 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
            />
            <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900 select-none">
              Remember me
            </label>
          </div>

          {/* Forgot Password Link */}
          <a href="#" className="text-blue-600 hover:text-blue-700 font-medium transition duration-300">
            Forgot password?
          </a>
        </div>

        {/* Login Button */}
        <button className="w-full p-3 text-white bg-blue-600 rounded-md font-bold hover:bg-blue-700 transition duration-300 cursor-pointer">
          Login
        </button>

        {/* Create Account Link */}
        <div className="text-center text-1xl mt-1">
          <a href="#" className="text-gray-600 hover:text-gray-800 font-medium">
            Create account
          </a>
        </div>
      </div>
    </div>
  )
}

export default Home