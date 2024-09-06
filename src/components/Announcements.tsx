const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-lg">
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-skyLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">New Courses Available</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              2 days ago
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetu adipiscing eit. Voluptatuium,
            expedita.
          </p>
        </div>
        <div className="bg-purpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Spring Fling</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              6 days ago
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetu adipiscing eit. Voluptatuium,
            expedita.
          </p>
        </div>
        <div className="bg-yellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Field Trip</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md p-1">
              9 days ago
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-1">
            Lorem ipsum dolor sit amet consectetu adipiscing eit. Voluptatuium,
            expedita.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
