import trend from '../../assets/logo/trendup.png';
import classLogo from '../../assets/logo/class.png';
import smiley from '../../assets/logo/smiley.png';
import progress from '../../assets/logo/progress.png';
import wallet from '../../assets/logo/wallet.png';
function Reasons() {
  return (
    <div>
      <p className="text-black text-xl font-bold text-center pt-2 pb-3 lg:py-8">
        Start from the comfort of your home
      </p>
      <div>
        <div className="w-12 h-12 bg-PrimaryPurple  rounded-full justify-center flex items-center mx-auto -mb-4 relative z-10">
          <img src={trend} alt="trendUp" className="w-10 h-6" />
        </div>

        <div className="bg-white mx-3  px-2 py-3 max-w-full rounded-sm relative z-1 lg:mx-6 shadow-md">
          <div
            div
            className="bg-gray-200 w-16 h-10 mx-auto -mt-7 rounded-b-full"
          ></div>
          <div className="lg:grid lg:grid-cols-2 lg:gap-x-4">
            <div>
              <div className="grid grid-cols-content items-center pb-2 lg:p-3">
                <div className="w-16 h-16 bg-[#DCF3E5]  rounded-full justify-center flex items-center ml-2">
                  <img src={classLogo} alt="" className="" />
                </div>
                <div>
                  <p className="text-black text-lg font-bold">
                    Live 1-on-1 classes
                  </p>
                  <p className="text-SecondaryFontColor text-base ">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi, saepe?Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-content items-center pb-2 lg:p-3">
                <div className="w-16 h-16 bg-[#E2D8EF]  rounded-full justify-center flex items-center ml-2">
                  <img src={smiley} alt="" />
                </div>
                <div>
                  <p className="text-black text-lg font-bold">
                    Friendly & expert speaker
                  </p>
                  <p className="text-SecondaryFontColor text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi, saepe?Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="grid grid-cols-content items-center pb-2 lg:p-3">
                <div className="w-16 h-16 bg-[#E1ECF6]  rounded-full justify-center flex items-center ml-2">
                  <img src={progress} alt="" />
                </div>
                <div>
                  <p className="text-black text-lg font-bold">
                    Track your progress
                  </p>
                  <p className="text-SecondaryFontColor text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi, saepe?Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-content items-center pb-2 lg:p-3">
                <div className="w-16 h-16 bg-[#E9F8D8]  rounded-full justify-center flex items-center ml-2">
                  <img src={wallet} alt="" />
                </div>
                <div>
                  <p className="text-black text-lg font-bold">
                    Most affordable prices
                  </p>
                  <p className="text-SecondaryFontColor text-base">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Modi, saepe?Lorem ipsum dolor sit amet.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Reasons;
