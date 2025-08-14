export const SignUp = () => {
  return (
    <div className="bg-blue-500 py-6">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex flex-col items-center justify-between gap-2 md:flex-row">
          <div className="mb-3 text-center md:mb-0 md:text-left">
            <span className="font-bold uppercase tracking-widest text-gray-100">
              Register your interest
            </span>
            <p className="text-blue-200">
              Join our mailing list to keep up to date with the latest upcoming
              developments...
            </p>
          </div>

          <form className="flex w-full gap-2 md:max-w-md">
            <input
              placeholder="Email"
              className="w-full flex-1 rounded border border-white bg-blue-400 px-3 py-2 text-white placeholder-blue-100 outline-none ring-blue-300 transition duration-100 focus:ring"
            />

            <button className="inline-block rounded bg-white px-8 py-2 text-center text-sm font-semibold text-blue-500 outline-none ring-blue-300 transition duration-100 hover:bg-gray-100 focus-visible:ring active:text-blue-600 md:text-base">
              Send
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
