import SharePopup from "@/components/dashboard/HomePage/SharePopup";
import Top from "../../../components/dashboard/Top";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function HompePage() {
  return (
    <div>
      {/* Home Paget Top */}
      <div className="">
        <Top title={'Homepage'}></Top>
      </div>
      <div className="p-6 rounded-xl mt-6 border ">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-4">
            <div className="w-10 h-10 rounded-full ">
              <img
                className="w-full h-full rounded-full"
                src="https://i.ibb.co.com/sq2jwtC/ae4134169130626f5a6ff03cd06719fb.png"
                alt=""
              />
            </div>
            <div className="flex flex-col ">
              <h4 className="text-lg font-semibold text-textColor">
                Welcome back, <span className="text-textDark">Hawkins</span>
              </h4>
              <p className="text-textColor">giftacoffee.com/Hawkins</p>
            </div>
          </div>
          {/* shared button */}
          <SharePopup></SharePopup>
        </div>

        <div className="flex gap-6 pt-8">
          <div className="border flex-1 w-full p-6 flex flex-col gap-2 rounded-xl ">
            <div className="flex justify-between">
              <h3 className="text-2xl text-textColor font-semibold"> Registered supporters</h3>
              <div>
                <Select className="rounded-full">
                  <SelectTrigger  className="w-[180px] px-4 py-6 rounded-full text-textDark font-semibold ">
                    <SelectValue placeholder="All time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <h3 className="text-4xl font-bold text-textDark">$0</h3>
          </div>
          <div className="border flex-1 w-full p-6 flex flex-col gap-2 rounded-xl ">
            <div className="flex justify-between">
              <h3 className="text-2xl text-textColor font-semibold">Other supporters</h3>
              <div>
                <Select className="rounded-full">
                  <SelectTrigger  className="w-[180px] px-4 py-6 rounded-full text-textDark font-semibold ">
                    <SelectValue placeholder="All time" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                    <SelectItem value="system">System</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <h3 className="text-4xl font-bold text-textDark">$0</h3>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default HompePage;
