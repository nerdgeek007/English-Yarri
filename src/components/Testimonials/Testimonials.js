import testimonial1 from '../../assets/img/testimonial1.png';
import testimonial2 from '../../assets/img/testimonial2.png';
import testimonial3 from '../../assets/img/testimonial3.png';
import testimonial4 from '../../assets/img/testimonial4.png';
import testimonial5 from '../../assets/img/testimonial5.png';
import testimonial6 from '../../assets/img/testimonial6.png';
import testimonial7 from '../../assets/img/testimonial7.png';
import testimonial8 from '../../assets/img/testimonial8.png';
function Testimonials() {
  return (
    <div>
      <div className="text-center">
        <p className="text-black text-lg font-bold py-2">
          What our student speaks about us?
        </p>
        <p className="text-SecondaryFontColor text-base m-auto w-[80%] pb-4">
          Choose the tutor that has the personality, professional experience, or
          focus area you need!
        </p>
      </div>
      <div
        className="flex  flex-1 gap-2 flex-wrap overflow-hidden w-full justify-evenly 
      "
      >
        <div>
          <img
            src={testimonial1}
            alt=""
            className="w-32 h-20 lg:w-48 lg:h-32"
          />
        </div>
        <div>
          <img
            src={testimonial2}
            alt=""
            className="w-32 h-20 lg:w-48 lg:h-32"
          />
        </div>
        <div>
          <img
            src={testimonial3}
            alt=""
            className="w-32 h-20 lg:w-48 lg:h-32"
          />
        </div>
        <div>
          <img
            src={testimonial4}
            alt=""
            className="w-32 h-20 lg:w-48 lg:h-32"
          />
        </div>
        <div>
          <img
            src={testimonial5}
            alt=""
            className="w-32 h-20 lg:w-48 lg:h-32"
          />
        </div>
        <div>
          <img
            src={testimonial6}
            alt=""
            className="w-32 h-20 lg:w-48 lg:h-32"
          />
        </div>
        <div className="hidden lg:block">
          <img
            src={testimonial7}
            alt=""
            className="w-32 h-20 lg:w-48 lg:h-32"
          />
        </div>
        <div className="hidden lg:block">
          <img
            src={testimonial8}
            alt=""
            className="w-32 h-20 lg:w-48 lg:h-32 "
          />
        </div>
      </div>
      <button className="flex bg-PrimaryPurple px-12 py-2 rounded-3xl mt-2 mb-4 text-white font-bold text-lg m-auto lg:mt-0">
        <span className="lg:hidden">Get Started</span>
        <span className="hidden lg:block">Book a trial class</span>
        <span class="material-symbols-outlined ml-2">arrow_forward</span>
      </button>
    </div>
  );
}
export default Testimonials;
