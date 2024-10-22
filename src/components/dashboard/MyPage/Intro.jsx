import Title from "./Title"


function Intro() {
  return (
    <div className="p-6 rounded-xl flex flex-col justify-between bg-white border">
          <Title title={"Intro:"}></Title>
          <p className="text-textColor font-medium">
            Hey this is my page for anyone who appreciates my music videos. 😀 I
            am a guitarist who also offers vocals.
          </p>

          <div className="pt-6">
            <Title title={"Featured image"}></Title>

            <div className="rounded-xl border w-full h-[300px] overflow-hidden ">
              <img
                className="w-full h-full object-cover "
                src="https://images.unsplash.com/photo-1611689342806-0863700ce1e4?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
            </div>
            <div className="pt-4">
              <button className="w-full rounded-full bg-primaryColor text-textDark font-bold  py-4">
                Edit  Feathered
              </button>
            </div>
          </div>
        </div>
  )
}

export default Intro