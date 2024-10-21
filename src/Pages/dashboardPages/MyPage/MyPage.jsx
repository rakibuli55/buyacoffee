import Top from "../HomePage/Top";

function MyPage() {
  return (
    <div className="">
      {/* Home Paget Top */}
      <div className="border-b  pb-6">
        <Top title={"Profile"}></Top>
      </div>
      <div className=" mt-6 ">
        {/* background Cover */}
        <div className="relative  flex justify-center px-4 bg-cover bg-[url('https://i.ibb.co.com/16YfRQv/img.jpg')] bg-center w-full h-[350px]">
          <div className="flex absolute  top-1/2 cursor-pointer right-5 -translatex-y-1/2 items-center gap-2 bg-white px-2 py-1 text-sm font-medium rounded-full  w-fit ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                opacity="0.8"
                d="M13.502 6.59536L13.5019 6.59721L13.1553 12.1037C13.1553 12.1038 13.1553 12.1038 13.1553 12.1039C13.1212 12.6438 12.9665 13.0177 12.7506 13.2485C12.5539 13.4587 12.1982 13.6667 11.4933 13.6667H4.50662C3.8013 13.6667 3.44367 13.4584 3.24615 13.2478C3.03024 13.0175 2.87617 12.6449 2.84492 12.1086L2.84493 12.1086L2.84464 12.1039L2.49797 6.59721L2.49786 6.59536C2.44206 5.73455 3.12834 5.00004 3.99995 5.00004C4.79025 5.00004 5.50051 4.54947 5.85437 3.86702L5.85839 3.85927L5.86227 3.85145L6.34022 2.88893C6.3933 2.78545 6.52313 2.63586 6.72744 2.50929C6.9332 2.38181 7.12452 2.33337 7.23995 2.33337H8.76662C8.87712 2.33337 9.06636 2.38075 9.27231 2.50868C9.47642 2.63546 9.6065 2.78526 9.65968 2.88891L10.1376 3.85145L10.1415 3.85927L10.1455 3.86702C10.4994 4.54947 11.2096 5.00004 11.9999 5.00004C12.8716 5.00004 13.5578 5.73455 13.502 6.59536Z"
                fill="#1F2022"
                stroke="#1F2022"
                strokeWidth="2"
              />
              <mask id="path-2-inside-1_9562_820" fill="white">
                <path d="M9 5.83337H7C6.72667 5.83337 6.5 5.60671 6.5 5.33337C6.5 5.06004 6.72667 4.83337 7 4.83337H9C9.27333 4.83337 9.5 5.06004 9.5 5.33337C9.5 5.60671 9.27333 5.83337 9 5.83337Z" />
              </mask>
              <path
                d="M9 5.83337H7C6.72667 5.83337 6.5 5.60671 6.5 5.33337C6.5 5.06004 6.72667 4.83337 7 4.83337H9C9.27333 4.83337 9.5 5.06004 9.5 5.33337C9.5 5.60671 9.27333 5.83337 9 5.83337Z"
                fill="white"
              />
              <path
                d="M9 3.83337H7V7.83337H9V3.83337ZM7 3.83337C7.83124 3.83337 8.5 4.50214 8.5 5.33337H4.5C4.5 6.71128 5.6221 7.83337 7 7.83337V3.83337ZM8.5 5.33337C8.5 6.16461 7.83124 6.83337 7 6.83337V2.83337C5.6221 2.83337 4.5 3.95547 4.5 5.33337H8.5ZM7 6.83337H9V2.83337H7V6.83337ZM9 6.83337C8.16876 6.83337 7.5 6.16461 7.5 5.33337H11.5C11.5 3.95547 10.3779 2.83337 9 2.83337V6.83337ZM7.5 5.33337C7.5 4.50214 8.16876 3.83337 9 3.83337V7.83337C10.3779 7.83337 11.5 6.71128 11.5 5.33337H7.5Z"
                fill="white"
                mask="url(#path-2-inside-1_9562_820)"
              />
              <path
                d="M7.99992 12.0866C9.2444 12.0866 10.2532 11.0778 10.2532 9.83329C10.2532 8.58881 9.2444 7.57996 7.99992 7.57996C6.75543 7.57996 5.74658 8.58881 5.74658 9.83329C5.74658 11.0778 6.75543 12.0866 7.99992 12.0866Z"
                fill="white"
              />
            </svg>
            <h4>Add cover photo</h4>
          </div>

          {/* profile section */}

          <div className="bg-white relative h-fit p-6 w-[96%]  flex justify-center items-center rounded-2xl  absolute -bottom-60">
            <div className="bg-[#FAFAFA] w-full pl-60 py-12 rounded-2xl  px-7">
              <div className="flex justify-between items-center">
                <div className="space-y-3">
                  <h3 className="text-textDark font-semibold text-lg">
                    Lee guitarist
                  </h3>
                  <h4 className="text-base font-medium text-textColor">
                    Artist
                  </h4>
                  <div className="flex items-center gap-2">
                    <h4 className="text-textColor text-sm  font-medium">
                      29.6K Followers
                    </h4>
                    <li className="text-sm text-textColor font-medium">
                      0 following
                    </li>
                  </div>
                </div>
                <div className="flex items-center gap-6">
                  <div className="bg-white border rounded-full p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="21"
                      viewBox="0 0 25 24"
                      fill="none"
                    >
                      <path
                        d="M2 21.75C1.94281 21.75 1.88506 21.7435 1.82787 21.7303C1.66346 21.6913 1.51699 21.598 1.41214 21.4655C1.30728 21.333 1.25016 21.169 1.25 21C1.25 14.1848 2.11212 8.51666 12.5 8.25885V3.00003C12.5 2.85422 12.5425 2.71157 12.6224 2.58954C12.7022 2.46752 12.8159 2.37141 12.9495 2.31297C13.0831 2.25454 13.2308 2.23632 13.3746 2.26054C13.5184 2.28476 13.652 2.35037 13.7591 2.44935L23.5091 11.4493C23.6628 11.5905 23.75 11.7906 23.75 12C23.75 12.2095 23.6628 12.4095 23.5091 12.5509L13.7591 21.5509C13.6521 21.6503 13.5184 21.7161 13.3745 21.7404C13.2305 21.7646 13.0826 21.7461 12.9491 21.6872C12.8155 21.6287 12.702 21.5325 12.6222 21.4105C12.5425 21.2884 12.5 21.1458 12.5 21V15.7588C5.37425 15.9295 4.0595 18.5582 2.67088 21.3355C2.60861 21.4601 2.51286 21.5649 2.39436 21.6381C2.27586 21.7113 2.1393 21.7501 2 21.75ZM13.25 14.25C13.6646 14.25 14 14.5855 14 15V19.2868L21.8941 12L14 4.71322V9.00003C14 9.4146 13.6646 9.75003 13.25 9.75003C4.96475 9.75003 3.18069 12.9544 2.82987 18.0726C4.38331 15.9859 7.031 14.25 13.25 14.25Z"
                        fill="#1F2022"
                      />
                    </svg>
                  </div>
                  <div>
                    <button className="px-12 py-3 bg-primaryColor rounded-full text-textDark font-bold text-sm">Edit Profile</button>
                  </div>
                </div>
              </div>
            </div>
            {/* profile image */}
            <div className="bg-white  absolute -top-12 left-8 w-[200px] h-[220px] p-2 rounded-2xl ">
              <div className=" w-full h-full bg-[#FAFAFA] ">
                  <img className="object-cover rounded-2xl w-full h-full " src="https://i.ibb.co.com/QXzN6dz/e8c29aa38af9e2661ffb508d79f12a7d.png" alt="" />
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
