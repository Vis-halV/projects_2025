import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

function ProjDesc({ title, year, desc }) {
  return (
    <div className="mt-4 text-white uppercase px-[5%] text-lg font-[JetBrains_Mono]">
      <p className="mt-8">
        {title}, {year}{" "}
        <FontAwesomeIcon icon={faArrowRightLong} />
      </p>
      <p className="opacity-75 mt-4">{desc}</p>
    </div>
  );
}

export default ProjDesc;
