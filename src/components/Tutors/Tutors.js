import Abhijeet from '../../assets/img/Abhijeet.png';
import Abhijeet1 from '../../assets/img/Abhijeet1.png';
import Abhijeet3 from '../../assets/img/Abhijeet3.png';
import Abhijeet4 from '../../assets/img/Abhijeet4.png';

function Tutors() {
  return (
    <div className="bg-gray-200">
      <p className="text-black text-xl font-bold text-center lg:py-6">
        Tutors for every requirements
      </p>
      <div className="ml-3 flex justify-evenly flex-wrap items-center mt-2">
        <div>
          <img src={Abhijeet} alt="" className="lg:min-w-[300px]" />
        </div>
        <div>
          <img src={Abhijeet1} alt="" className="lg:min-w-[300px]" />
        </div>
        <div>
          <img src={Abhijeet3} alt="" className="lg:min-w-[300px]" />
        </div>
        <div>
          <img src={Abhijeet4} alt="" className="lg:min-w-[300px]" />
        </div>
      </div>
    </div>
  );
}
export default Tutors;
