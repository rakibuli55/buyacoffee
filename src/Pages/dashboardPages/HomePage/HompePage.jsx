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
          <div className="flex cursor-pointer items-center bg-btnColor gap-4 px-8 py-3 rounded-full text-white">
            <h4>Share Page</h4>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="20"
              height="21"
              viewBox="0 0 20 21"
              fill="none"
            >
              <path
                d="M1.25 18.625C1.20234 18.625 1.15422 18.6196 1.10656 18.6086C0.969548 18.5761 0.847492 18.4984 0.760113 18.388C0.672733 18.2775 0.625133 18.1409 0.625 18C0.625 12.3207 1.34344 7.59724 10 7.38239V3.00005C10 2.87853 10.0355 2.75966 10.102 2.65797C10.1685 2.55628 10.2632 2.47619 10.3745 2.4275C10.4859 2.37881 10.609 2.36362 10.7288 2.3838C10.8486 2.40399 10.96 2.45866 11.0492 2.54114L19.1742 10.0411C19.3023 10.1588 19.375 10.3255 19.375 10.5C19.375 10.6746 19.3023 10.8413 19.1742 10.9591L11.0492 18.4591C10.9601 18.5419 10.8487 18.5968 10.7287 18.617C10.6088 18.6372 10.4855 18.6218 10.3742 18.5727C10.263 18.5239 10.1683 18.4438 10.1019 18.3421C10.0354 18.2404 10 18.1215 10 18V13.6324C4.06187 13.7746 2.96625 15.9652 1.80906 18.2796C1.75718 18.3834 1.67738 18.4708 1.57863 18.5318C1.47988 18.5928 1.36608 18.6251 1.25 18.625ZM10.625 12.375C10.9705 12.375 11.25 12.6546 11.25 13V16.5724L17.8284 10.5L11.25 4.4277V8.00005C11.25 8.34552 10.9705 8.62505 10.625 8.62505C3.72062 8.62505 2.23391 11.2954 1.94156 15.5605C3.23609 13.8216 5.4425 12.375 10.625 12.375Z"
                fill="white"
              />
            </svg>
          </div>
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
