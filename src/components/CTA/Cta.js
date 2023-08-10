import check from '../../assets/logo/check.png';
import appleStore from '../../assets/logo/appleStore.png';
import googleStore from '../../assets/logo/Google Store.png';
import CtaPic from '../../assets/img/CTAPic.png';
function Cta() {
  return (
    <div className="bg-[#EEECF8] mx-3 mt-6 p-6 rounded-sm max-w-full pb-0 lg:grid lg:grid-cols-advantages lg:m-12 lg:rounded-2xl lg:px-8 ">
      <div className="lg:self-center">
        <div>
          <p className="text-black text-lg font-bold lg:text-4xl lg:p-2">
            Achive your Goals
          </p>
          <p className="text-SecondaryFontColor text-base font-bold">
            By Advancing Your English Speaking Today !
          </p>
        </div>
        <div className="grid grid-cols-2 gap-y-2 py-4 justify-center items-center">
          <div className="flex justify-items-center items-center justify-start gap-4">
            <div className="w-8 h-8 bg-PrimaryPurple  rounded-full justify-center flex items-center text-xl font-bold ">
              <img src={check} alt="" />
            </div>
            <div>
              <p className="text-black font-medium">Instant transactions</p>
            </div>
          </div>
          <div className="flex justify-items-center items-center justify-start gap-4">
            <div className="w-8 h-8 bg-PrimaryPurple  rounded-full justify-center flex items-center text-xl font-bold ">
              <img src={check} alt="" />
            </div>
            <div>
              <p className="text-black font-medium">Payments worldwide</p>
            </div>
          </div>
          <div className="flex justify-items-center items-center justify-start gap-4">
            <div className="w-8 h-8 bg-PrimaryPurple  rounded-full justify-center flex items-center text-xl font-bold ">
              <img src={check} alt="" />
            </div>
            <div>
              <p className="text-black font-medium">Saving accounts</p>
            </div>
          </div>
          <div className="flex justify-items-center items-center justify-start gap-4">
            <div className="w-8 h-8 bg-PrimaryPurple  rounded-full justify-center flex items-center text-xl font-bold ">
              <img src={check} alt="" />
            </div>
            <div>
              <p className="text-black font-medium">100% mobile banking</p>
            </div>
          </div>
        </div>
        <div className="flex justify-start gap-4 pb-8">
          <div>
            <a href="#">
              <img src={appleStore} alt="" className="w-36 h-12" />
            </a>
          </div>
          <div>
            <a href="#">
              <img src={googleStore} alt="" className="w-36 h-12" />
            </a>
          </div>
        </div>
      </div>
      <div className="max-w-full">
        <img src={CtaPic} alt="" className="m-auto w-full px-4 pt-4 h-full" />
      </div>
    </div>
  );
}
export default Cta;
