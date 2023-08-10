import facebook from '../../assets/logo/facebook.png';
import linkdin from '../../assets/logo/Linkdin.png';
import instagram from '../../assets/logo/Instagram.png';
import appleStore from '../../assets/logo/appleStore.png';
import googleStore from '../../assets/logo/Google Store.png';
function Footer() {
  return (
    <div className="bg-PrimaryPurple p-4 text-white lg:px-32">
      <div className="lg:grid lg:grid-cols-2">
        <div>
          <p className="text-xl font-medium py-2 ">EnglishYaari</p>
          <p className="text-[#FFFFFF] pt-2 pb-6 lg:w-[30%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo,
            asperiores.
          </p>
          <div className="flex gap-4 items-center justify-items-center pb-4">
            <div className="w-10 h-10 bg-[#1877F2]  rounded-full justify-center flex items-center text-xl font-bold ">
              <a href="#">
                <img src={facebook} alt="" />
              </a>
            </div>
            <div className="bg-[#0A66C2] w-10 h-10 rounded-full justify-center flex items-center text-xl font-bold ">
              <a href="#">
                <img src={linkdin} alt="" />
              </a>
            </div>
            <div className="bg-gradient-to-r from-[#FA8F21] to-[#D82D7E] w-10 h-10 rounded-full justify-center flex items-center text-xl font-bold">
              <a href="#">
                <img src={instagram} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="lg:grid lg:grid-cols-2 lg:max-w-[90%]">
          <div>
            <h1 className="text-xl font-medium py-2">Pages</h1>
            <ul className="grid gap-y-2">
              <li className="font-medium">
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
          </div>
          <div>
            <h1 className="text-xl font-medium py-4">Download the app</h1>
            <div className="flex justify-start gap-4 pb-8 lg:flex-col">
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
        </div>
      </div>
      <div className="border-[#DBDBDB] border-[0.05rem] my-2"></div>
      <p className="text-[#CBD5E1] text-center py-4">
        &copy; Copyright 2023, All Rights Reserved by Englishyaari.com
      </p>
    </div>
  );
}
export default Footer;
