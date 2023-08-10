import phone from '../../assets/logo/Phone.png';
import email from '../../assets/logo/email.png';
import whatsapp from '../../assets/logo/whatsapp.png';
function Faqs() {
  return (
    <div className="bg-white m-3 p-4 rounded-sm lg:m-0 lg:px-24 lg:py-6">
      <p className="text-PrimaryPurple text-lg font-bold text-center p-2">
        Frequently Asked Question
      </p>
      <div className="lg:grid lg:grid-cols-process lg:items-center lg:justify-items-center lg:gap-2">
        <div className="order-1">
          <div className=" border-b-2 border-gray-200 py-4">
            <div className="flex  items-center justify-between justify-items-center">
              <p className="text-black text-lg font-bold ">
                Q1.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, non?
              </p>
              <button className="text-blue-400 text-xl lg:ml-2">&#43;</button>
            </div>
          </div>
          <div className=" border-b-2 border-gray-200 py-4">
            <div className="flex justify-between items-center justify-items-center">
              <p className="text-black text-lg font-bold">
                Q2.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, non?
              </p>
              <button className="text-blue-400 text-xl lg:ml-2">&#43;</button>
            </div>
          </div>
          <div className=" border-b-2 border-gray-200 py-4">
            <div className="flex justify-between items-center justify-items-center">
              <p className="text-black text-lg font-bold">
                Q3.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, non?
              </p>
              <button className="text-blue-400 text-xl lg:ml-2">&#43;</button>
            </div>
          </div>
          <div className=" border-b-2 border-gray-200 py-4">
            <div className="flex justify-between items-center justify-items-center">
              <p className="text-black text-lg font-bold">
                Q4.Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Assumenda, non?
              </p>
              <button className="text-blue-400 text-xl lg:ml-2">&times;</button>
            </div>
            <p className="text-SecondaryFontColor text-base font-bold">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsam
              vitae asperiores corrupti sapiente, esse officiis culpa quibusdam
              mollitia nihil? Officiis mollitia placeat veniam et laudantium.
              Repudiandae quidem labore laborum iste!
            </p>
          </div>
        </div>
        <div>
          <div className="px-2 py-4">
            <div className="flex items-center gap-4 py-2">
              <div className="w-8 h-8 bg-[#EEECF8] rounded-full justify-center flex items-center text-xl font-bold ">
                <img src={phone} alt="" />
              </div>
              <div>
                <p className="text-base text-black font-bold">+91 1234567890</p>
                <p className="text-base text-SecondaryFontColor font-bold">
                  Support Number
                </p>
              </div>
            </div>
            <div className="flex items-center gap-4 py-3">
              <div className="w-8 h-8 bg-[#EEECF8] rounded-full justify-center flex items-center text-xl font-bold ">
                <img src={email} alt="" />
              </div>
              <div>
                <p className="text-base text-black font-bold">
                  contactus@englishyaari.com
                </p>
                <p className="text-base text-SecondaryFontColor font-bold">
                  Support Email
                </p>
              </div>
            </div>

            <button className="bg-[#3DB64D] flex items-center gap-2 text-white font-bold tracking-wide px-6 py-2 rounded-3xl mt-2">
              <img src={whatsapp} alt="" />
              WhatsApp us
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Faqs;
