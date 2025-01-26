import Random from "./Components/Random"
import Tag from "./Components/Tag"


const App = () => {
  return (

  
      <div className="flex  flex-col items-center w-full bg-[#FFF0DC]">

       
          <h1 className="bg-[#F0BB78] w-screen text-center m-2 p-2 text-3xl font-serif  italic border-orange-600 border-2 rounded-lg">Random GIFS</h1>
       
        <div className="w-1/2 items-center flex  h-lvh  gap-x-40 gap-y-3">
          <Random/>
          <Tag/>
        </div>
      </div>
   
    
  
  )
}

export default App