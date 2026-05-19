const Dashboard = () => {
  const announcements = [
    {
      id: 1,
      title: "New Course Available",
      message: "Check out our new TypeScript course!",
      time: "2 hours ago",
    },
    {
      id: 2,
      title: "Maintenance Notice",
      message: "Platform updates scheduled for tonight",
      time: "5 hours ago",
    },
  ];

  return (
    <div className=" bg-gray-100 min-h-screen ">
      <div className=" w-full lg:w-[60%] mx-auto px-4 py-6">
        {/* header */}
        <div className="header bg-white items-center py-4   shadow-sm flex rounded-xl justify-between px-6 ">
          <div className="">
            <h2 className="text-2xl font-bold"> Welcome back, Student! </h2>
            <p>Here's whats heppening to your courses today!</p>
          </div>

          <div className="flex gap-2 items-center">
            <p className="text-xl"> 🔔 </p>
            <div className="bg-gradient-to-tr from-pink-400 to-red-300 text-white text-xl rounded-full px-2">
              S
            </div>
          </div>
        </div>

        {/* stats cards */}
        <div className="stats grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-2 py-4">
          <div className="card flex bg-white items-center gap-3 px-4 py-4 rounded-lg shadow-sm">
            <div className="text-xl">📈</div>
            <div className="">
              <p className="text-gray-700 font-semibold">Average Grade</p>
              <h2 className="text-gray-800 font-bold text-2xl"> 88%</h2>
            </div>
          </div>
          <div className="card flex bg-white items-center gap-3 px-4 py-4 rounded-lg shadow-sm">
            <div className="text-xl">📚</div>
            <div className="">
              <p className="text-gray-700 font-semibold">Courses</p>
              <h2 className="text-gray-800 font-bold text-2xl"> 3</h2>
            </div>
          </div>
          <div className="card flex bg-white items-center gap-3 px-4 py-4 rounded-lg shadow-sm">
            <div className="text-xl">⏰</div>
            <div className="">
              <p className="text-gray-700 font-semibold">Study Hours</p>
              <h2 className="text-gray-800 font-bold text-2xl"> 45h</h2>
            </div>
          </div>
          <div className="card flex bg-white items-center gap-3 px-4 py-4 rounded-lg shadow-sm">
            <div className="text-xl">✍️</div>
            <div className="">
              <p className="text-gray-700 font-semibold">Assignments</p>
              <h2 className="text-gray-800 font-bold text-2xl"> 12</h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-2">
          <div className="bg-white rounded-2xl flex-1 shadow-sm py-4 space-y-4">
            <h2 className="text-2xl font-bold px-4 py-2">Course Progress</h2>
            <div className="bg-gray-100 rounded-xl px-4 mx-4 py-3 space-y-2">
              {/*  */}
              <div className="flex justify-between ">
                <h2 className="font-semibold text-xl">React Fundamentals</h2>
                <p>75%</p>
              </div>

              <div className="bg-gray-200 w-full h-2 rounded-full"></div>

              <div className="flex justify-between">
                <p>Nex: Components & Props</p>
                <p>Sarah Wilson</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl px-4 mx-4 py-3 space-y-2">
              {/*  */}
              <div className="flex justify-between ">
                <h2 className="font-semibold text-xl">React Fundamentals</h2>
                <p>75%</p>
              </div>

              <div className="bg-gray-200 w-full h-2 rounded-full"></div>

              <div className="flex justify-between">
                <p>Nex: Components & Props</p>
                <p>Sarah Wilson</p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-xl px-4 mx-4 py-3 space-y-2">
              {/*  */}
              <div className="flex justify-between ">
                <h2 className="font-semibold text-xl">React Fundamentals</h2>
                <p>75%</p>
              </div>

              <div className="bg-gray-200 w-full h-2 rounded-full"></div>

              <div className="flex justify-between">
                <p>Nex: Components & Props</p>
                <p>Sarah Wilson</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 space-y-4">
            <div className="px-4 py-3 bg-white rounded-2xl">
              <h2 className="text-2xl font-semibold pt-3 pb-4">
                Upcoming Assignments
              </h2>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <div className="">
                    <h3 className="text-xl font-semibold">Build a Todo App</h3>
                    <p className="text-gray-600 ">React Fundamentals</p>
                  </div>
                  <div className="">
                    <button className="bg-red-200 text-sm text-red-900 font-semibold rounded-full px-2">
                      Pending
                    </button>
                    <p className="text-sm">Due 2024-03-20</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="">
                    <h3 className="text-xl font-semibold">Build Api Docs</h3>
                    <p className="text-gray-600 ">React Fundamentals</p>
                  </div>
                  <div className="">
                    <button className="bg-green-200 text-sm text-green-900 font-semibold rounded-full px-2">
                      Completed
                    </button>
                    <p className="text-sm">Due 2024-03-20</p>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="">
                    <h3 className="text-xl font-semibold">
                      Build System Design
                    </h3>
                    <p className="text-gray-600 ">React Fundamentals</p>
                  </div>
                  <div className="">
                    <button className="bg-yellow-200 text-sm text-yellow-900 font-semibold rounded-full px-2">
                      In-Progress
                    </button>
                    <p className="text-sm">Due 2024-03-20</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm p-6 ">
              <h2 className="text-lg font-semibold text-gray-800 mb-4">
                Announcements
              </h2>
              <div className="space-y-4">
                {announcements.map((announcement) => (
                  <div
                    key={announcement.id}
                    className="border-l-4 border-blue-500 pl-4"
                  >
                    <h3 className="font-medium text-gray-800">
                      {announcement.title}
                    </h3>
                    <p className="text-sm text-gray-500 mt-1">
                      {announcement.message}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {announcement.time}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
