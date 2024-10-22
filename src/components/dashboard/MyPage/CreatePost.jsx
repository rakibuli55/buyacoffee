import { GoPlus } from "react-icons/go";
import Title from "./Title";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { MdOutlineCloudDownload } from "react-icons/md";

function CreatePost() {
  return (
    <div className=" rounded-xl flex-col flex gap-4 space-y-3">
      <div className="bg-white p-6 rounded-xl border space-y-3">
        <Title title={"Post an update:"}></Title>
        <div className="flex items-center gap-4 border-b pb-4">
          <div className="w-10 h-10 rounded-full overflow-hidden">
            <img
              className="w-full h-full object-cover"
              src="https://i.postimg.cc/rsGC84nx/Img.png"
              alt=""
            />
          </div>
          <Dialog>
            <DialogTrigger className="w-full">
              <div className="w-full">
                <h4 className="text-[#717171] text-left  px-4 py-3 rounded-full bg-gray-50 w-full font-medium">
                  What’s in your mind?
                </h4>
              </div>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle className="p-0 border-b pb-4">
                  <div className="relative">
                    <h3 className="text-2xl font-semibold text-textDark text-center ">
                      Create Post
                    </h3>
                  </div>
                </DialogTitle>
                <DialogDescription>
                  <div className="py-4">
                    <div className="flex gap-4 items-center">
                      <div className="w-10 h-10 rounded-full overflow-hidden">
                        <img
                          className="w-full h-full rounded-full object-cover"
                          src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt=""
                        />
                      </div>
                      <h3 className="text-sm font-medium text-textColor">
                        Mahmud Kawser
                      </h3>
                    </div>
                    <div className="pt-4">
                      <div>
                        <textarea
                          className="px-4 resize-none border focus:outline-none placeholder:text-textDark py-3 rounded-xl text-textColor w-full h-[200px]"
                          name=""
                          placeholder="Whats in you mind?"
                          id=""
                        ></textarea>
                      </div>
                    </div>

                    <div className="pt-4 w-full">
                      <input
                        className="hidden"
                        type="file"
                        accept="*/"
                        name="getFeatured"
                        id="getFeatured"
                      />
                      <label
                        className="border cursor-pointer p-4 flex  justify-center items-center rounded-md  bg-backgroundLight w-full h-[200px]"
                        htmlFor="getFeatured"
                      >
                        <div className="w-full flex flex-col justify-center gap-2 items-center">
                          <MdOutlineCloudDownload size={40} />
                          <h4 className="text-textDark font-medium">
                            Drop file here or click to upload
                          </h4>
                          <h4 className="font-medium text-textDark">Browse</h4>
                        </div>
                      </label>
                    </div>

                    <div className="flex justify-end pt-4">
                      <button className="text-sm px-6 py-3 rounded-full bg-primaryColor text-textDark font-semibold ">
                        Post
                      </button>
                    </div>
                  </div>
                </DialogDescription>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <Dialog>
          <DialogTrigger className="w-full">
            <div className="flex justify-between">
              <div className="bg-[#E9E9E9] px-4 cursor-pointer items-center gap-4 flex py-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M28.8334 16C28.8334 23.0876 23.0877 28.8333 16.0001 28.8333C8.91243 28.8333 3.16675 23.0876 3.16675 16C3.16675 8.91231 8.91243 3.16663 16.0001 3.16663C23.0877 3.16663 28.8334 8.91231 28.8334 16Z"
                    fill="#343535"
                    stroke="#343535"
                  />
                  <path
                    d="M19.2964 14.1262L19.2972 14.1266C20.3041 14.7064 20.6966 15.4037 20.6966 16C20.6966 16.5963 20.3041 17.2936 19.2972 17.8733L19.2964 17.8738L17.5897 18.8605L15.8838 19.8467C15.8838 19.8467 15.8837 19.8467 15.8837 19.8468C14.8767 20.4265 14.0756 20.4171 13.5582 20.1186C13.0409 19.8201 12.6333 19.1323 12.6333 17.9733V16V14.0267C12.6333 12.86 13.0415 12.1734 13.5574 11.8768C14.0742 11.5798 14.8753 11.5728 15.8834 12.1531C15.8835 12.1531 15.8837 12.1532 15.8838 12.1533L17.5897 13.1395L19.2964 14.1262Z"
                    fill="white"
                    stroke="white"
                  />
                </svg>
                <h4>Video</h4>
              </div>
              <div className="bg-[#E9E9E9] px-4 cursor-pointer items-center gap-4 flex py-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M9.84059 20.4526L3.64164 24.6104C3.33065 23.7397 3.16699 22.7318 3.16699 21.587V10.4137C3.16699 8.08643 3.85875 6.289 5.07388 5.07388C6.289 3.85875 8.08643 3.16699 10.4137 3.16699H21.587C23.9142 3.16699 25.7116 3.85875 26.9268 5.07388C28.1419 6.289 28.8337 8.08643 28.8337 10.4137V17.4451L27.4861 16.2877C26.2588 15.2335 24.3021 15.2334 23.0747 16.2876C23.0747 16.2876 23.0747 16.2876 23.0746 16.2876C23.0746 16.2876 23.0746 16.2877 23.0745 16.2877L17.528 21.0476L17.5279 21.0477C16.6752 21.7801 15.2721 21.7801 14.4195 21.0477L14.4195 21.0476L14.4115 21.041L13.9635 20.6721C12.8403 19.6961 11.0873 19.6114 9.84116 20.4522C9.84097 20.4523 9.84078 20.4524 9.84059 20.4526Z"
                    fill="#343535"
                    stroke="#343535"
                  />
                  <path
                    d="M14.1738 10.6665C14.1738 11.8668 13.2008 12.8398 12.0005 12.8398C10.8002 12.8398 9.82715 11.8668 9.82715 10.6665C9.82715 9.4662 10.8002 8.49316 12.0005 8.49316C13.2008 8.49316 14.1738 9.4662 14.1738 10.6665Z"
                    fill="white"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <path
                    d="M10.6768 21.6976L10.6768 21.6976L10.6792 21.6959C11.3826 21.2211 12.3884 21.2886 12.982 21.807L12.9929 21.8165L13.004 21.8257L13.45 22.1929C14.8651 23.4008 17.0924 23.3984 18.5043 22.1859C18.5044 22.1858 18.5046 22.1857 18.5047 22.1856L24.051 17.4259L24.0513 17.4256C24.7166 16.8542 25.8429 16.8542 26.5082 17.4256L26.5082 17.4257L28.3331 18.9931V21.5871C28.3331 23.8149 27.6729 25.473 26.5726 26.5733C25.4724 27.6735 23.8142 28.3337 21.5864 28.3337H10.4131C7.69312 28.3337 5.78833 27.3527 4.72078 25.6924L10.6768 21.6976Z"
                    fill="white"
                    stroke="#343535"
                    strokeWidth="2"
                  />
                </svg>
                <h4>Photos</h4>
              </div>
              <div className="bg-[#E9E9E9] px-4 cursor-pointer items-center gap-4 flex py-2 rounded-full">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M29.3334 20V12C29.3334 5.33329 26.6667 2.66663 20.0001 2.66663H12.0001C5.33341 2.66663 2.66675 5.33329 2.66675 12V20C2.66675 26.6666 5.33341 29.3333 12.0001 29.3333H20.0001C26.6667 29.3333 29.3334 26.6666 29.3334 20Z"
                    fill="#343535"
                    stroke="#343535"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12.8267 23.0667C14.3878 23.0667 15.6533 21.8011 15.6533 20.24C15.6533 18.6789 14.3878 17.4133 12.8267 17.4133C11.2655 17.4133 10 18.6789 10 20.24C10 21.8011 11.2655 23.0667 12.8267 23.0667Z"
                    fill="#343535"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M15.6533 20.2399V10.36"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M17.5067 9.02667L20.6266 10.0666C21.3866 10.32 22 11.1733 22 11.9733V12.7999C22 13.8799 21.16 14.4799 20.1466 14.1333L17.0267 13.0933C16.2667 12.84 15.6533 11.9867 15.6533 11.1867V10.36C15.6533 9.29334 16.48 8.68001 17.5067 9.02667Z"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <h4>Audio</h4>
              </div>
            </div>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle className="p-0 border-b pb-4">
                <div className="relative">
                  <h3 className="text-2xl font-semibold text-textDark text-center ">
                    Create Post
                  </h3>
                </div>
              </DialogTitle>
              <DialogDescription>
                <div className="py-4">
                  <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 rounded-full overflow-hidden">
                      <img
                        className="w-full h-full rounded-full object-cover"
                        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                        alt=""
                      />
                    </div>
                    <h3 className="text-sm font-medium text-textColor">
                      Mahmud Kawser
                    </h3>
                  </div>
                  <div className="pt-4">
                    <div>
                      <textarea
                        className="px-4 resize-none border focus:outline-none placeholder:text-textDark py-3 rounded-xl text-textColor w-full h-[200px]"
                        name=""
                        placeholder="Whats in you mind?"
                        id=""
                      ></textarea>
                    </div>
                  </div>

                  <div className="pt-4 w-full">
                    <input
                      className="hidden"
                      type="file"
                      accept="*/"
                      name="getFeatured"
                      id="getFeatured"
                    />
                    <label
                      className="border cursor-pointer p-4 flex  justify-center items-center rounded-md  bg-backgroundLight w-full h-[200px]"
                      htmlFor="getFeatured"
                    >
                      <div className="w-full flex flex-col justify-center gap-2 items-center">
                        <MdOutlineCloudDownload size={40} />
                        <h4 className="text-textDark font-medium">
                          Drop file here or click to upload
                        </h4>
                        <h4 className="font-medium text-textDark">Browse</h4>
                      </div>
                    </label>
                  </div>

                  <div className="flex justify-end pt-4">
                    <button className="text-sm px-6 py-3 rounded-full bg-primaryColor text-textDark font-semibold ">
                      Post
                    </button>
                  </div>
                </div>
              </DialogDescription>
            </DialogHeader>
          </DialogContent>
        </Dialog>
      </div>
      <div className="border rounded-xl p-4"></div>
    </div>
  );
}

export default CreatePost;
