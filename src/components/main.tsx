import Header from "./header";
const Main = () => {
  return (
    <main className="bg-green-100 ">
      <div className="container mx-auto">
        <Header />
        <div className="flex items-center mt-24 overflow-hidden">
          <div>
            <p className="text-8xl font-bold">Hi, I'm Ajay Gangwar!</p>
          </div>
          <div className="w-full">
            <img className="mx-auto transition duration-200 ease-in-out delay-75 hover:scale-105" width="600px" src="https://codecyan.com/omishah/assets/hero-image.png" />
          </div>
          <div className="text-right">
            <p className="text-2xl pl-36 py-8">
              I am a full-stack developer.
              I build mobile apps and websites.
            </p>
            <p className="text-2xl pl-36 py-8">
              2+ YEARS OF EXPERIENCE
            </p>
          </div>
        </div>
      </div>
    </main>
  )
}

export default Main;