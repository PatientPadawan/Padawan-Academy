import Image from "next/image";

const TableSearch = () => {
  return (
    <div className="w-full md:w-auto flex items-center gap-2 text-xs rounded-full ring-[0.094rem] ring-gray-300 px-2">
      <Image
        src="/search.png"
        alt="magnifying glass search icon"
        width={14}
        height={14}
      />
      <input
        type="text"
        placeholder="Search..."
        className="w-[12.5rem] p-2 bg-transparent outline-none"
      />
    </div>
  );
};

export default TableSearch;
