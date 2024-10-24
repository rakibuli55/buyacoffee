import Top from "@/components/dashboard/Top";
import warningBlackImg from "../../../assets/images/warning-black.png";
import ButtonPrimary from "@/components/buttons/ButtonPrimary";
import MembershipBox from "@/components/dashboard/Membership/MembershipBox";
import BuyCoffee from "@/components/dashboard/MyPage/BuyCoffee";

function Membership() {
  return (
    <div>
      <div>
        <Top title="Membership" />
      </div>
      <div>
        <div className="flex items-start gap-6">
          {/* membership box  */}
          <div className="w-[70%]">
            {/* stripe setup warning  */}
            <div className="flex items-center justify-between bg-[#EFFFE5] p-6 rounded-[12px] border border-primaryColor mt-8">
              <p className="flex items-center gap-2">
                <img src={warningBlackImg} alt="warningBlackImg" />
                Your memberships are currently unpublished. Connect your payout
                method now.
              </p>
              <div>
                <ButtonPrimary type="small" text="Set Up" />
              </div>
            </div>
            <MembershipBox />
          </div>
          <div className="mt-8 w-[30%]">
            <BuyCoffee />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Membership;
