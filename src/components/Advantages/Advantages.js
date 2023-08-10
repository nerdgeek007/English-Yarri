import check from '../../assets/logo/check.png';
import cross from '../../assets/logo/cross.png';
import trend from '../../assets/logo/trendup.png';
function Advantages() {
  return (
    <div className="bg-[#EEECF8] m-4 rounded-sm px-4 py-6 lg:p-2 lg:my-16 lg:mx-24 lg:pb-0 lg:rounded-2xl">
      <div className="lg:grid lg:grid-cols-advantages">
        <div className="lg:px-4 lg:pt-4">
          <p className="text-PrimaryPurple text-lg font-bold pb-2">
            Why choose EnglishYaari?
          </p>
          <div className="grid gap-y-4 lg:grid-cols-2 lg:gap-x-2 lg:gap-y-0">
            <div className="flex justify-items-center items-center justify-start gap-4">
              <div className="w-10 h-10 lg:w-8 lg:h-8 bg-PrimaryPurple  rounded-full justify-center flex items-center text-xl font-bold ">
                <img src={check} alt="" />
              </div>
              <div className="text-PrimaryPurple font-bold">
                Practice with certified English speakers
              </div>
            </div>
            <div className="flex justify-items-center items-center justify-start gap-4 lg:order-3">
              <div className="w-10 h-10 lg:w-8 lg:h-8 bg-PrimaryPurple  rounded-full justify-center flex items-center text-xl font-bold ">
                <img src={check} alt="" />
              </div>
              <div className="text-PrimaryPurple font-bold">
                Empower your English speaking skills
              </div>
            </div>
            <div className="flex justify-items-center items-center justify-start gap-4 lg:order-2">
              <div className="w-10 h-10 bg-[#EA4335]  rounded-full justify-center flex items-center text-xl font-bold lg:w-8 lg:h-8 ">
                <img src={cross} alt="" />
              </div>
              <div className="text-PrimaryPurple font-bold">
                No fear of being judged
              </div>
            </div>
            <div className="flex justify-items-center items-center justify-start gap-4 lg:order-4">
              <div className="w-10 h-10 bg-[#EA4335] rounded-full justify-center flex items-center text-xl font-bold lg:w-8 lg:h-8 ">
                <img src={cross} alt="" />
              </div>
              <div className="text-PrimaryPurple font-bold">
                No one will make your fun
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="w-10 h-10 bg-PrimaryPurple  rounded-full justify-center flex items-center mx-auto -mb-4 relative z-10 lg:-top-8">
            <img src={trend} alt="trendUp" className="w-8 h-4" />
          </div>
          <div className="bg-white mx-3  px-2 py-3 max-w-full rounded-sm relative z-1 lg:p-1 lg:-mt-12">
            <div
              div
              className="bg-gray-200 w-12 h-8 mx-auto -mt-7 rounded-b-full "
            ></div>
            <p className="text-black font-bold text-xl m-auto pt-4 w-[70%] text-center">
              Try for 25 minutes 1-on-1 classes
            </p>
            <button className="flex bg-PrimaryPurple px-16 py-2 rounded-3xl mt-4 mb-4 text-white font-bold text-lg m-auto">
              Get Started
              <span class="material-symbols-outlined ml-2">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Advantages;
