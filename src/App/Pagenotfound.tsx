import { Home, TriangleAlert } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Pagenotfound = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full min-h-screen bg-neutral-900 flex flex-col gap-6 md:gap-10 justify-center items-center p-4">

      <div className="bg-black text-white/75 border border-neutral-500 border-dashed 
                      w-full max-w-[600px] min-h-[400px] md:min-h-[500px] 
                      flex flex-col justify-center items-center p-6 text-center">
        
        <div className="border p-2 rounded-full bg-neutral-800">
          <TriangleAlert className="w-4 h-4" />
        </div>

        <p className="text-7xl md:text-9xl mt-6 instrument-serif-italic">
          4<span className="text-6xl md:text-8xl">0</span>4
        </p>

        <p className="mt-4 instrument-serif text-2xl md:text-3xl tracking-tight">
          ROUTE NOT FOUND
        </p>

        <p className="mt-6 instrument-serif text-lg md:text-xl max-w-xs md:max-w-none opacity-80">
          The page you are looking for doesn't exist in this stack.
        </p>

        <button 
          onClick={() => navigate('/')}
          className="flex items-center gap-2 mt-8 mb-6 instrument-serif py-2 px-4 rounded-[4px] 
                     bg-neutral-800 hover:bg-neutral-700 transition-colors cursor-pointer"
        >
          <Home className="w-4" />
          <span>Go Back Home</span>
        </button>

      </div>

      <div className="text-white flex flex-wrap justify-center gap-3 md:gap-5">
        <div className="bg-neutral-800 py-2 px-4 rounded-full instrument-serif-bold text-xs md:text-sm border border-neutral-700">
          <p>STATUS: 404</p>
        </div>
        <div className="bg-neutral-800 py-2 px-4 rounded-full instrument-serif-bold text-xs md:text-sm border border-neutral-700">
          <p>LOCATION: UNKNOWN</p>
        </div>
      </div>

    </div>
  );
};

export default Pagenotfound;