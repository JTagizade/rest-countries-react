const RegionButton = (props) => {
  return (
    <button className="flex items-center justify-between bg-white p-4  cursor-pointer w-[250px] ">
      {props.region}
    </button>
  );
};

export default RegionButton;
