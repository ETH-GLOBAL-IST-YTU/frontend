import { MessageBoxType } from "../../types/message.d";
import { MessageBox } from "./MessageBox";
import { RoomDetail } from "./RoomDetail";

export const Chat = () => {
  const dummyMessages: MessageBoxType[] = [
    {
      id: "a1",
      name: "John Doe",
      time: "12.10.2024",
      pic: "",
      message: "Hello i want to play a game on your NFT",
      type: "sender",
    },
    {
      id: "a2",
      name: "Kutay Sarı",
      time: "12.10.2024",
      pic: "",
      message: "Of course",
      type: "receiver",
    },
    {
      id: "a3",
      name: "John Doe",
      time: "12.10.2024",
      pic: "",
      message: "Hello i want to play a game on your NFT",
      type: "sender",
    },
    {
      id: "a4",
      name: "Kutay Sarı",
      time: "12.10.2024",
      pic: "",
      message: "Of course",
      type: "receiver",
    },
  ];
  return (
    <div className="wrapper-border rounded-[32px] w-full h-full max-h-[100vh] overflow-hidden p-[30px] flex gap-x-10 justify-between">
      <div className="w-full">
        <h1 className="font-normal text-[24px]">NFT 1</h1>
        <div className="flex flex-col gap-y-10 mt-9 overflow-auto max-h-[70vh]">
          {dummyMessages?.map((message) => (
            <MessageBox message={message} key={message?.id} />
          ))}
        </div>
      </div>
      <RoomDetail />
    </div>
  );
};
