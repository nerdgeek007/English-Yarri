import calender from '../../assets/logo/calenderCheck.png';
import mobile1 from '../../assets/img/mob1.png';
import mobile2 from '../../assets/img/Mobile2.png';
import mobile3 from '../../assets/img/Mobile3.png';
import mobile4 from '../../assets/img/mobile4.png';
import board from '../../assets/logo/chalkBoard.png';
import light from '../../assets/logo/Bulb.png';
import note from '../../assets/logo/note.png';
import check from '../../assets/logo/starCheck.png';
function Process() {
  return (
    <div>
      <div className="py-8 px-4 lg:hidden">
        <p className="text-black text-xl font-bold ">How EnglishYaari works?</p>
        <button className="flex bg-PrimaryPurple px-7 py-2 rounded-3xl mt-4 text-white font-bold text-lg">
          Book 1st class
          <span class="material-symbols-outlined ml-2">arrow_forward</span>
        </button>
      </div>
      <div className="lg:hidden">
        <div className="grid grid-cols-2 justify-items-center items-center bg-white mx-3 rounded-sm max-w-full h-full pt-4">
          <div className="w-12 h-12 bg-[#FFEAEA]  rounded-full justify-center flex items-center text-xl font-bold">
            1
          </div>
          <div class="grid gap-y-3">
            <div className="w-12 h-12 bg-[#FFEAEA]  rounded-full justify-center flex items-center text-xl font-bold ">
              <img src={calender} alt="" />
            </div>
            <div>
              <p className="text-black text-lg font-bold">
                Choose date and time
              </p>
              <p className="text-SecondaryFontColor text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
                modi.
              </p>
            </div>
            <div>
              <img
                src={mobile1}
                alt=""
                className="bg-[#FFEAEA] p-2 rounded-tl-lg rounded-tr-lg w-2/3 h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="grid grid-cols-2 justify-items-center items-center bg-white m-3 rounded-sm max-w-full h-full pt-4 pl-3">
          <div class="grid gap-y-3">
            <div className="w-12 h-12 bg-[#E9F8D8]  rounded-full justify-center flex items-center text-xl font-bold ">
              <img src={board} alt="" />
            </div>
            <div>
              <p className="text-black text-lg font-bold">Choose a tutor</p>
              <p className="text-SecondaryFontColor text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
                modi.
              </p>
            </div>
            <div>
              <img
                src={mobile2}
                alt=""
                className="bg-[#E9F8D8] p-2 rounded-tl-lg rounded-tr-lg w-2/3 h-full"
              />
            </div>
          </div>
          <div className="w-12 h-12 bg-[#E9F8D8]  rounded-full justify-center flex items-center text-xl font-bold">
            2
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="grid grid-cols-2 justify-items-center items-center bg-white m-3 rounded-sm max-w-full h-full pt-4">
          <div className="w-12 h-12 bg-[#F8E5F9]  rounded-full justify-center flex items-center text-xl font-bold">
            3
          </div>
          <div class="grid gap-y-3">
            <div className="w-12 h-12 bg-[#F8E5F9]  rounded-full justify-center flex items-center text-xl font-bold ">
              <img src={light} alt="" />
            </div>
            <div>
              <p className="text-black text-lg font-bold">
                Get into live classes
              </p>
              <p className="text-SecondaryFontColor text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
                modi.
              </p>
            </div>
            <div>
              <img
                src={mobile3}
                alt=""
                className="bg-[#F8E5F9] p-2 rounded-tl-lg rounded-tr-lg w-2/3 h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="lg:hidden">
        <div className="grid grid-cols-2 justify-items-center items-center bg-white m-3 rounded-sm max-w-full h-full pt-4 pl-3">
          <div class="grid gap-y-3">
            <div className="w-12 h-12 bg-[#D8EFE7]  rounded-full justify-center flex items-center text-xl font-bold ">
              <img src={note} alt="" />
            </div>
            <div>
              <p className="text-black text-lg font-bold">Session reports</p>
              <p className="text-SecondaryFontColor text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
                modi.
              </p>
            </div>
            <div>
              <img
                src={mobile4}
                alt=""
                className="bg-[#D8EFE7] p-2 rounded-tl-lg rounded-tr-lg w-2/3 h-full"
              />
            </div>
          </div>
          <div className="w-12 h-12 bg-[#D8EFE7]  rounded-full justify-center flex items-center text-xl font-bold">
            4
          </div>
        </div>
      </div>

      <div className=" lg:grid grid-cols-process items-center pl-4 hidden mt-10">
        <div className="py-8 px-4 ">
          <p className="text-black text-xl font-bold ">
            How EnglishYaari works?
          </p>
          <button className="flex bg-PrimaryPurple px-7 py-2 rounded-3xl mt-4 text-white font-bold text-lg">
            Book 1st class
            <span class="material-symbols-outlined ml-2">arrow_forward</span>
          </button>
        </div>
        <div className="flex justify-center items-center">
          <div class="grid gap-y-3  bg-white items-center px-4 pt-4 rounded-md mr-2 shadow-md">
            <div className="w-12 h-12 bg-[#FFEAEA]  rounded-full justify-center flex items-center text-xl font-bold ">
              <img src={calender} alt="" />
            </div>
            <div>
              <p className="text-black text-lg font-bold">
                Choose date and time
              </p>
              <p className="text-SecondaryFontColor text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
                modi.
              </p>
            </div>
            <div className="">
              <img
                src={mobile1}
                alt=""
                className="bg-[#FFEAEA] p-2 rounded-tl-lg rounded-tr-lg w-full h-full "
              />
            </div>
          </div>
          <div class="grid gap-y-3 bg-white items-center px-4 pt-4 rounded-md mr-2 shadow-md">
            <div className="w-12 h-12 bg-[#E9F8D8]  rounded-full justify-center flex items-center text-xl font-bold ">
              <img src={board} alt="" />
            </div>
            <div>
              <p className="text-black text-lg font-bold">Choose a tutor</p>
              <p className="text-SecondaryFontColor text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
                modi.
              </p>
            </div>
            <div>
              <img
                src={mobile2}
                alt=""
                className="bg-[#E9F8D8] p-2 rounded-tl-lg rounded-tr-lg w-full h-full "
              />
            </div>
          </div>
          <div class="grid gap-y-3 bg-white items-center px-4 pt-4 rounded-md mr-2 shadow-md">
            <div className="w-12 h-12 bg-[#F8E5F9]  rounded-full justify-center flex items-center text-xl font-bold ">
              <img src={light} alt="" />
            </div>
            <div>
              <p className="text-black text-lg font-bold">
                Get into live classes
              </p>
              <p className="text-SecondaryFontColor text-base">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sequi,
                modi.
              </p>
            </div>
            <div>
              <img
                src={mobile3}
                alt=""
                className="bg-[#F8E5F9] p-2 rounded-tl-lg rounded-tr-lg w-full h-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-full bg-white mx-3 my-12 rounded-sm px-3 py-6 shadow-md">
        <div className="flex justify-center">
          <img
            src={check}
            alt=""
            className="bg-[rgb(21,193,142)] rounded-full p-2"
          />
        </div>
        <p className="text-black text-lg font-bold text-center py-2">
          100% Satisfaction Guarantee
        </p>
        <p className="text-SecondaryFontColor text-base text-center">
          If you are nto satisficed with trial sessions, we will give you a free
          replacement with another tutor or give you full refund.
        </p>
      </div>
    </div>
  );
}
export default Process;
