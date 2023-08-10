import HeaderImg from '../../assets/img/mobileheader.png';

function Header() {
  return (
    <header className="tracking-wide max-w-full m-auto">
      <p className="bg-SecondaryPurple text-PrimaryPurple text-sm font-semibold text-center p-2 tracking-wide">
        Trusted by thousands of learners like you
        <span className="text-red-600 text-lg"> ♥</span>
      </p>
      <div className="h-auto w-full  bg-pattern bg-PrimaryPurple bg-blend-overlay bg-center bg-cover bg-fixed p-4 md:pl-8">
        <div className="flex justify-between pb-4 items-center">
          <div className=" text-white text-xl font-semibold tracking-wide">
            EnglishYaari
          </div>
          <div className="HAMBURGER-ICON space-y-2 lg:hidden">
            <span className="block h-0.5 w-8  bg-white"></span>
            <span className="block h-0.5 w-8  bg-white"></span>
            <span className="block h-0.5 w-8  bg-white"></span>
          </div>
          <nav className="hidden lg:block">
            <ul className="flex  text-[#B6AECF] justify-between items-center gap-6">
              <li className="font-medium text-white">
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Our tutors</a>
              </li>
              <li>
                <a href="#">Become a tutor</a>
              </li>
              <li>
                <a href="#">Plans and pricing</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
            </ul>
          </nav>
          <div className=" items-center gap-6 hidden lg:flex">
            <div className="text-white text-lg font-bold">
              <a href="#">Login</a>
            </div>
            <div>
              <button className="flex bg-white px-4 py-1 rounded-3xl my-4 text-PrimaryPurple font-bold text-lg">
                Get Started
                <span class="material-symbols-outlined ml-2">
                  arrow_forward
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="md:flex md:justify-evenly">
          <div className="order-last">
            <img src={HeaderImg} alt="Header" className="w-full" />
          </div>

          <div className="pt-6">
            <p className="text-white text-2xl font-medium">
              Unlock your potential with
              <span className="text-[#FFCA7A]"> certified English mentors</span>
            </p>
            <p className="text-lg text-white font-semibold tracking-wide">
              speak confidently, succeed strongly
            </p>
            <button className="flex bg-white px-7 py-2 rounded-3xl my-4 text-PrimaryPurple font-bold text-lg">
              Get Started
              <span class="material-symbols-outlined ml-2">arrow_forward</span>
            </button>
            <div className="flex text-white text-base justify-evenly w-80 -ml-3">
              <p>Pronunciation</p>
              <p>Vocabulary</p>
              <p>Accent</p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
