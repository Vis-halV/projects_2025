import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowDown } from "@fortawesome/free-solid-svg-icons";

function Hero() {
  return (
    <div className="px-[5%] flex flex-col uppercase">

      <div className="w-[70%] text-white bg-[#0c0c0c] mt-20 mb-12">
        <p className="text-[#ffbe66] font-[DepartureMono] text-4xl leading-[43.2px]">
          I design with an artistic mindset blending psychology, & deep
          understanding of people &hearts;
        </p>
      </div>


      <div className="font-[JetBrains_Mono] text-white text-base leading-6">
        <p className="w-2/3 text-lg float-left opacity-75">
          Calm soul ☮, playing hard 🏀, Chasing dreams ✨
        </p>
        <p className="w-2/3 text-lg float-left opacity-75">
          Based in Chennai, India.
        </p>
        <h3 className="w-1/3 float-right text-end text-white font-extrabold tracking-widest">
          Featured work{" "}
          <FontAwesomeIcon icon={faArrowDown} className="scale-75 text-white" />
        </h3>
      </div>
    </div>
  );
}

export default Hero;
