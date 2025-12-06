const DeckStatistics = () => {
  const statsData = [
    {
      title: "Total Cards",
      value: "40",
      color: "bg-[#92ADEB]",
      icon: <img src="/Total-Cards-Icon.svg" />,
    },
    {
      title: "Mastered",
      value: "11",
      color: "bg-[#47D9C9]",
      icon: <img src="/Mastered-Icon.svg" />,
    },
    {
      title: "In Progress",
      value: "21",
      color: "bg-[#F073A3]",
      icon: <img src="/In-Progress-Icon.svg" />,
    },
  ];

  return (
    <div className="w-full lg:w-[392px] shrink-0">
      <div className="p-6 md:p-10 w-full h-auto rounded-xl shadow-[4px_4px_0_0px_#000] bg-white border border-[#2E1401]">
        <h1 className="font-semibold text-xl md:text-2xl leading-[120%] mb-5 text-[#2E1401]">
          Study Statistics
        </h1>

        <div className="flex flex-col gap-6">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="group w-full h-[120px] flex justify-between rounded-2xl border border-[#2E1401] shadow-[3px_3px_0_0px_#000] overflow-hidden transition-transform hover:-translate-y-1"
            >
              <div className="p-5 flex flex-col justify-center">
                <h2 className="text-base font-medium leading-[120%] text-[#2E1401]">
                  {stat.title}
                </h2>
                <p className="text-[32px] md:text-[40px] font-bold text-[#2E1401]">
                  {stat.value}
                </p>
              </div>

              <div
                className={`h-full w-[100px] flex items-center justify-center border-l border-[#2E1401] ${stat.color}`}
              >
                {stat.icon}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DeckStatistics;
