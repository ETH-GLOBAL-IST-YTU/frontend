import SvgRender from "../Common/SvgRender";

import CopySvg from "../../assets/svg/copy.svg";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import CopyButton from "../Common/CopyComp";
import { Chat } from "./Chat";

const Index = () => {
  const wallet_address = useSelector(
    (state: RootState) => state.account.wallet_address
  );

  const shortenedAddress = `${wallet_address?.substring(
    0,
    4
  )}...${wallet_address?.substring(wallet_address?.length - 4)}`;
  return (
    <div className="w-full h-[calc(100vh_-_96px)]">
      <div className="w-[150px]">
        <h3 className="text-xs font-normal text-white opacity-60">
          wallet address
        </h3>
        <CopyButton copyElement={wallet_address}>
          <div className="flex items-center gap-x-2.5">
            <SvgRender svg={CopySvg} title="copy" />
            <span className="text-white text-[18px] font-bold">
              {shortenedAddress}
            </span>
          </div>
        </CopyButton>
      </div>
      <Chat />
    </div>
  );
};

export default Index;
