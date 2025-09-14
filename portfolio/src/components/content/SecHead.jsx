

function SecHead({ title }) {
  return (
    <div className="sec-head mx-[5%] mt-16 mb-16 font-jetbrains text-lg text-[#ffbe66] uppercase font-bold" id={title}>
      <h2 className="">{title}</h2>
      <hr className="w-[80] mt-1 text-white opacity-50" />
    </div>
  );
}

export default SecHead;