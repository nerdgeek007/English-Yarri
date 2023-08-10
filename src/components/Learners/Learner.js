import logo1 from '../../assets/logo/Logo1.png';
import logo2 from '../../assets/logo/Logo2.png';
import logo3 from '../../assets/logo/Logo3.png';
import logo4 from '../../assets/logo/Logo4.png';
import logo5 from '../../assets/logo/Logo5.png';

function Learners() {
  return (
    <div className="bg-gray-200 p-4 ">
      <div className="text-SecondaryFontColor font-bold text-xl text-center  tracking-wide lg:py-6">
        Our learners are from
      </div>
      <div className="bg-white flex gap-2 p-4 rounded-lg m-2 justify-center items-center flex-1 md:justify-between shadow-md">
        <div className="w-40">
          <img src={logo1} alt="logo" className="" />
        </div>
        <div className="w-36">
          <img src={logo2} alt="logo" />
        </div>
        <div className="w-40">
          <img src={logo3} alt="logo" />
        </div>
        <div className="w-40">
          <img src={logo4} alt="logo" />
        </div>
        <div className="w-40">
          <img src={logo5} alt="logo" />
        </div>
      </div>
    </div>
  );
}
export default Learners;
