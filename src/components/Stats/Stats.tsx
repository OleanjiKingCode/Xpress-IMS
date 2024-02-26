export const Stats = () => {
  return (
    <div className="w-full flex flex-row gap-5 items-center justify-between py-2 flex-wrap md:flex-nowrap">
      <div className="rounded-2xl py-7 px-5 w-[500px] h-[140px] flex flex-col items-center gap-4 bg-slate-100">
        <span className="text-2xl font-semibold text-green-300 ">200,145</span>
        <span className="text-sm font-bold">Total Number Of Assets</span>
      </div>
      <div className="rounded-2xl  py-7 px-5 w-[500px] h-[140px] flex flex-col items-center gap-4 bg-slate-100">
        <span className="text-2xl font-semibold text-green-300 ">
          NGN 4,500,145
        </span>
        <span className="text-sm font-bold text-center">
          Total Cost Of Assets
        </span>
      </div>
      <div className="rounded-2xl  py-7 px-5 w-[500px] h-[140px] flex flex-col items-center gap-4 bg-slate-100">
        <span className="text-2xl font-semibold text-green-300 ">40,145</span>
        <span className="text-sm font-bold text-center">
          Total Number Of Assets <br />
          (IN-USE)
        </span>
      </div>
      <div className="rounded-2xl py-7 px-5 w-[500px] h-[140px] flex flex-col items-center gap-4 bg-slate-100">
        <span className="text-2xl font-semibold text-red-500 ">6,145</span>
        <span className="text-sm font-bold text-center">
          Total Number Of Assets <br />
          (REPAIR)
        </span>
      </div>
    </div>
  );
};
