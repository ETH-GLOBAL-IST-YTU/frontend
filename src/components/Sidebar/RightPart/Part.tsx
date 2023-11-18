import { FC } from "react";

interface PartProps {
  avatar: string | undefined;
  text: string;
  current: string;
  id: string;
  setCurrent: React.Dispatch<React.SetStateAction<string>>;
}

const Part: FC<PartProps> = ({ avatar, text, id, current, setCurrent }) => {
  return (
    <div
      onClick={() => setCurrent(id)}
      className={`p-2  border-[1px] transition-all border-solid cursor-pointer ${
        current === id
          ? "border-secondary-1 bg-[#3570E0] bg-opacity-20"
          : "border-secondary-3 bg-level-2"
      } w-full flex gap-x-[14px] items-center rounded-2xl`}
    >
      <img className="w-8 h-8 rounded-lg" alt="avatar" src={avatar}></img>
      <span className="text-[14px] font-normal text-white overflow-hidden  whitespace-nowrap max-w-[160px] text-ellipsis">
        {text}
      </span>
    </div>
  );
};

export default Part;
