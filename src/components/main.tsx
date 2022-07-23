import Header from "./header";
const Main = () => {
  return (
    <main id="home" className="bg-green-100">
      <div className="container mx-auto">
        <Header />
        <div className="block sm:flex items-center mt-8 sm:mt-24 overflow-hidden">
          <div>
            <p className="mx-4 text-6xl sm:text-8xl font-bold">Hi, I'm Ajay Gangwar!</p>
          </div>
          <div className="w-full mt-4 sm:mt-0">
            <img className="mx-auto transition duration-200 ease-in-out delay-75 hover:scale-105" width="600px" src="https://codecyan.com/omishah/assets/hero-image.png" />
          </div>
          <div className="text-center sm:text-right">
            <p className="text-xl sm:text-3xl pl-0 sm:pl-36 pt-8">
              I am a full-stack developer.
              I build mobile apps and websites.
            </p>
            <p className="text-xl sm:text-3xl pl-0 sm:pl-36 py-8">
              2+ YEARS OF EXPERIENCE
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main;