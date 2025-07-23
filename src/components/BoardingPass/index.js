import * as React from "react";

const BoardingPass = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div
      className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="relative max-w-[90vw] max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex md:flex-row flex-col bg-white rounded-xl shadow-2xl overflow-hidden font-mono w-[90vw] max-w-[800px]">
          {/* Main Boarding Pass */}
          <div className="flex-1 md:flex-2 p-3 md:p-5 relative">
            <div className="bg-black text-white h-[70px] flex items-center justify-center p-5 md:p-4 -m-3 md:-m-5 mb-4 md:mb-5 text-center">
              <h2 className="m-0 text-base md:text-lg font-bold tracking-wider">
                BOARDING PASS
              </h2>
            </div>

            <div className="flex flex-row items-center justify-between mb-6 md:mb-8 relative">
              <div className="text-center flex-1 mb-4 md:mb-0">
                <div className="text-2xl md:text-3xl font-bold text-black mb-1">GRU</div>
                <div className="text-xs md:text-sm text-gray-600 mb-2 font-bold">
                  SÃO PAULO
                </div>
                <div className="text-xs text-gray-700 mb-1">Sep 5, 2025</div>
                <div className="text-xs text-gray-700">10:30 AM</div>
              </div>

              <div className="flex-1 flex items-center justify-center relative mb-4 md:mb-0">
                <div className="text-xl md:text-2xl relative z-10">✈️</div>
                <div className="absolute top-1/2 left-[20%] right-[20%] h-0.5 bg-black border-t-2 border-dashed border-black transform -translate-y-1/2"></div>
              </div>

              <div className="text-center flex-1">
                <div className="text-2xl md:text-3xl font-bold text-black mb-1">LIM</div>
                <div className="text-xs md:text-sm text-gray-600 mb-2 font-bold">LIMA</div>
                <div className="text-xs text-gray-700 mb-1">Sep 5, 2025</div>
                <div className="text-xs text-gray-700">02:45 PM</div>
              </div>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-3 md:gap-4 mt-4 md:mt-5 pt-4 md:pt-5 border-t border-gray-200">
              <div className="flex flex-row md:flex-col items-center md:items-center justify-between md:justify-start min-w-0 md:min-w-[80px]">
                <span className="text-xs text-gray-600 mb-0 md:mb-1 uppercase">
                  Passenger
                </span>
                <span className="text-sm font-bold text-black">BEATRIZ</span>
              </div>
              <div className="flex flex-row md:flex-col items-center md:items-center justify-between md:justify-start min-w-0 md:min-w-[80px]">
                <span className="text-xs text-gray-600 mb-0 md:mb-1 uppercase">
                  Flight
                </span>
                <span className="text-sm font-bold text-black">PE 8080</span>
              </div>
              <div className="flex flex-row md:flex-col items-center md:items-center justify-between md:justify-start min-w-0 md:min-w-[80px]">
                <span className="text-xs text-gray-600 mb-0 md:mb-1 uppercase">
                  Terminal
                </span>
                <span className="text-sm font-bold text-black">3</span>
              </div>
              <div className="flex flex-row md:flex-col items-center md:items-center justify-between md:justify-start min-w-0 md:min-w-[80px]">
                <span className="text-xs text-gray-600 mb-0 md:mb-1 uppercase">
                  Gate
                </span>
                <span className="text-sm font-bold text-black">A 12</span>
              </div>
              <div className="flex flex-row md:flex-col items-center md:items-center justify-between md:justify-start min-w-0 md:min-w-[80px]">
                <span className="text-xs text-gray-600 mb-0 md:mb-1 uppercase">
                  Seat
                </span>
                <span className="text-sm font-bold text-black">15 A</span>
              </div>
            </div>
          </div>

          {/* Stub */}
          <div className="flex-1 border-l-2 border-dashed border-gray-500 p-3 md:p-5 flex flex-col bg-gray-100">
            <div className="bg-black text-white h-[70px] p-5 flex items-center md:justify-end justify-center -m-3 md:-m-5 mb-3 md:mb-4 text-right">
              <span className="text-xs font-bold">LATAM Airlines</span>
            </div>
            <div className="flex-1">
              <div className="flex justify-between mb-2">
                <span className="text-xs text-gray-600 uppercase">
                  Passenger
                </span>
                <span className="text-xs font-bold text-black">BEATRIZ TAVARES</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-xs text-gray-600 uppercase">Class</span>
                <span className="text-xs font-bold text-black">ECONOMY</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-xs text-gray-600 uppercase">Date</span>
                <span className="text-xs font-bold text-black">SEP 5</span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-xs text-gray-600 uppercase">
                  Boarding
                </span>
                <span className="text-xs font-bold text-black">
                  10:00 AM
                </span>
              </div>
              <div className="flex justify-between mb-2">
                <span className="text-xs text-gray-600 uppercase">Depart</span>
                <span className="text-xs font-bold text-black">
                  10:30 AM
                </span>
              </div>
            </div>
            <div className="mt-4 md:mt-5 text-center">
              <div className="flex justify-center items-end h-12 md:h-15 mb-1">
                {[...Array(40)].map((_, i) => (
                  <div
                    key={i}
                    className="bg-black mr-0.5"
                    style={{
                      height: `100%`,
                      width: `${Math.random() * 0.2 + 0.1}rem`,
                    }}
                  ></div>
                ))}
              </div>
              <div className="text-xs text-gray-700 font-mono tracking-wider">
                123456789012345
              </div>
            </div>
          </div>
        </div>

        <button
          className="absolute -top-4 -right-4 w-8 h-8 rounded-full bg-red-500 text-white border-none text-base cursor-pointer flex items-center justify-center shadow-lg hover:bg-red-600 hover:scale-110 transition-all duration-200"
          onClick={onClose}
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default BoardingPass;
