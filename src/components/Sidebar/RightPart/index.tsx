import { useState } from "react";

import Search from "./Search";
import { RoomCompType } from "../../../types/room.d";
import Part from "./Part";

const dummyRooms: RoomCompType[] = [
  {
    id: "a1",
    avatar:
      "https://www.missafir.com/wp-content/uploads/2022/12/oda-dekorasyonu-fikirleri-main-min.jpg",
    text: "Room 123123123123123123123asd12312dasdsa",
  },
  {
    id: "a2",
    avatar:
      "https://www.missafir.com/wp-content/uploads/2022/12/oda-dekorasyonu-fikirleri-main-min.jpg",
    text: "Room 123123123123123123123",
  },
  {
    id: "a3",
    avatar:
      "https://www.missafir.com/wp-content/uploads/2022/12/oda-dekorasyonu-fikirleri-main-min.jpg",
    text: "Room 123123123123123123123",
  },
  {
    id: "a4",
    avatar:
      "https://www.missafir.com/wp-content/uploads/2022/12/oda-dekorasyonu-fikirleri-main-min.jpg",
    text: "Room 123123123123123123123",
  },
  {
    id: "a5",
    avatar:
      "https://www.missafir.com/wp-content/uploads/2022/12/oda-dekorasyonu-fikirleri-main-min.jpg",
    text: "Room 123123123123123123123",
  },
  {
    id: "a6",
    avatar:
      "https://www.missafir.com/wp-content/uploads/2022/12/oda-dekorasyonu-fikirleri-main-min.jpg",
    text: "Room 123123123123123123123",
  },
  {
    id: "a7",
    avatar:
      "https://www.missafir.com/wp-content/uploads/2022/12/oda-dekorasyonu-fikirleri-main-min.jpg",
    text: "Room 123123123123123123123",
  },
  {
    id: "a8",
    avatar:
      "https://www.missafir.com/wp-content/uploads/2022/12/oda-dekorasyonu-fikirleri-main-min.jpg",
    text: "Room 123123123123123123123",
  },
  {
    id: "a9",
    avatar:
      "https://www.missafir.com/wp-content/uploads/2022/12/oda-dekorasyonu-fikirleri-main-min.jpg",
    text: "Room 123123123123123123123",
  },
];

const Index = () => {
  const [searchKey, setSearchKey] = useState<string>("");
  const [current, setCurrent] = useState<string>(dummyRooms?.[0]?.id);
  return (
    <div className="w-full flex flex-col pr-7 py-6">
      <h1 className="text-xs font-normal mt-10 mb-5">NFT Odaları</h1>
      <Search value={searchKey} setValue={setSearchKey} />
      <div className="flex flex-col gap-y-4 overflow-auto max-w-[70vh]">
        {dummyRooms?.map((a: RoomCompType) => (
          <Part
            key={a?.id}
            setCurrent={setCurrent}
            current={current}
            id={a?.id}
            avatar={a?.avatar}
            text={a?.text}
          />
        ))}
      </div>
    </div>
  );
};

export default Index;
