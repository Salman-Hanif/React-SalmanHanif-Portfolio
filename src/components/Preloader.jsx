import { useEffect, useState } from 'react';

const Preloader = () => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsVisible(false);
    }, 1000);

    return () => clearTimeout(timeout);
  }, []);

  if (!isVisible) return null;

  return (
    <div
      id="pre-loader"
      className="fixed w-screen h-screen bg-black top-0 left-0 z-[90] flex flex-col gap-7 justify-center items-center transition-opacity duration-500"
    >
      <div className="flex-col gap-4 w-full flex items-center justify-center relative">
        <div className="w-20 h-20 border-4 border-transparent text-green-600 text-4xl animate-spin flex items-center justify-center border-t-green-600 rounded-full">
          <div className="w-16 h-16 border-4 border-transparent text-white text-2xl animate-spin flex items-center justify-center border-t-white rounded-full">
          </div>
        </div>
      </div>
      <div>
        <h3 className="text-white text-4xl font-sacramento font-bold">Salman Hanif</h3>
      </div>
    </div>
  );
};

export default Preloader;
