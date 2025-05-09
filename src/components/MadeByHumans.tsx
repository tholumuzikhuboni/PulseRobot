
import React from "react";

const MadeByHumans = () => {
  return (
    <section id="made-by-humans" className="w-full bg-white py-0">
      <div className="section-container opacity-0 animate-on-scroll pb-2">
        <div className="w-full rounded-2xl sm:rounded-3xl overflow-hidden relative mt-6 sm:mt-8">
          <div 
            className="bg-no-repeat bg-cover bg-center p-4 sm:p-5 min-h-[200px] sm:min-h-[250px] md:min-h-[350px] flex flex-col justify-between" 
            style={{
              backgroundImage: "url('/background-section3.png')"
            }}
          >
            <div className="flex items-center text-white">
              <img 
                src="/logo.svg" 
                alt="Pulse Robot Logo" 
                className="h-5 sm:h-6 w-auto mr-3 invert" 
              />
            </div>
            
            <div className="overflow-hidden max-h-[60px] sm:max-h-[80px] mt-6 sm:mt-10 md:mt-40">
              <h2 
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-playfair text-white italic font-thin text-center mb-0 transform translate-y-0" 
                style={{
                  marginBottom: "-30px",
                  padding: "0px 0px 100px"
                }}
              >
                Made By Muzi
              </h2>
            </div>
            
            {/* Removing the white box at the bottom */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MadeByHumans;
