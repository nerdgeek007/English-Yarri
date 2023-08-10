import handshake from '../../assets/logo/handshake.png';
import voice from '../../assets/logo/voice.png';
import smiley from '../../assets/logo/smiley.png';
import sparkle from '../../assets/logo/sparkle.png';
function FocusArea() {
  return (
    <div>
      <p className="text-black text-xl font-bold text-center pt-2 md:pt-8 lg:py-8">
        Focus on the area to improve
      </p>
      <div className="grid grid-cols-2 p-6 pr-3 gap-x-4 gap-y-6 items-center justify-items-center lg:grid-cols-4 lg:bg-white  lg:w-[95%] lg:mx-auto lg:rounded-sm lg:py-8 lg:shadow-md">
        <div className="max-w-xs text-center">
          <img
            src={voice}
            alt=""
            className="bg-[#ECF8EF] p-4  rounded-full lg:block lg:m-auto lg:p-2"
          />
          <p className="text-black text-lg font-bold lg:p-2">Speak Naturally</p>
          <p className="text-SecondaryFontColor text-base">
            Get undivided attention from our friendly tutors who help you
            analyse.
          </p>
        </div>
        <div className="max-w-xs lg:text-center">
          <img
            src={smiley}
            alt=""
            className="bg-[#EBEEFC] p-4 rounded-full lg:block lg:m-auto lg:p-2"
          />
          <p className="text-black text-lg font-bold lg:p-2">
            Remove hesitation
          </p>
          <p className="text-SecondaryFontColor text-base">
            Get undivided attention from our friendly tutors who help you
            analyse.
          </p>
        </div>

        <div className="max-w-xs lg:text-center">
          <img
            src={sparkle}
            alt=""
            className="bg-[#F9F3E3]  p-4 rounded-full lg:block lg:m-auto lg:p-2"
          />
          <p className="text-black text-lg font-bold lg:p-2">Career success</p>
          <p className="text-SecondaryFontColor text-base">
            Get undivided attention from our friendly tutors who help you
            analyse.
          </p>
        </div>
        <div className="max-w-xs lg:text-center">
          <img
            src={handshake}
            alt=""
            className="bg-[#EEF9FD]  p-4  rounded-full lg:block lg:m-auto lg:p-2"
          />
          <p className="text-black text-lg font-bold lg:p-2">Expert Guidance</p>
          <p className="text-SecondaryFontColor text-base">
            Get undivided attention from our friendly tutors who help you
            analyse.
          </p>
        </div>
      </div>
    </div>
  );
}
export default FocusArea;
