import SvgRender from "../Common/SvgRender";

import Teams from "../../assets/svg/team.svg";
import UserSvg from "../../assets/svg/user.svg";

export const RoomDetail = () => {
  const dummyData = {
    room_pic: "",
    teams: [
      {
        id: "a1",
        name: "Ahmet Murshed El Ensari An Baba Aaa",
        pic: "",
      },
      {
        id: "a2",
        name: "Ahmet Murshed",
        pic: "",
      },
      {
        id: "a3",
        name: "Ahmet Murshed",
        pic: "",
      },
    ],
  };
  return (
    <div className="rounded-[32px] wrapper-border w-1/4 py-5 px-6 flex flex-col items-center overflow-hidden">
      <div className="w-16 h-16 rounded-full border-white border-[1px] flex justify-center items-center">
        <SvgRender svg={Teams} title="team" />
      </div>
      <div className="flex flex-col w-full gap-y-5 mt-8 max-h-[70vh] overflow-auto">
        {dummyData?.teams?.map((user) => (
          <div key={user?.id} className="flex gap-2 items-center">
            <div className="border-[1px] border-white min-w-[32px] h-8 flex items-center justify-center rounded-full">
              <SvgRender svg={UserSvg} title="user" />
            </div>
            <h4 className="text-[14px] font-normal overflow-hidden text-ellipsis whitespace-nowrap max-w-[150px]">
              {user?.name}
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
};
