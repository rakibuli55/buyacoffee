import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

function Top({ title }) {
  return (
    <div className="flex justify-between items-center pb-6 border-b">
      <h3 className="text-textColor font-semibold text-3xl">{title}</h3>
      <DropdownMenu>
        <DropdownMenuTrigger className="border-none outline-none">
          <div className="flex items-center border rounded-full gap-1 w-fit p-1">
            <div className="w-10 h-10 rounded-full overflow-hidden ">
              <img
                className="w-full h-full object-cover"
                src="https://i.ibb.co.com/sq2jwtC/ae4134169130626f5a6ff03cd06719fb.png"
                alt=""
              />
            </div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
            >
              <path
                d="M3.5 8.16663H24.5"
                stroke="#1F2022"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M3.5 14H24.5"
                stroke="#1F2022"
                strokeWidth="2"
                strokeLinecap="round"
              />
              <path
                d="M3.5 19.8334H24.5"
                stroke="#1F2022"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>Billing</DropdownMenuItem>
          <DropdownMenuItem>Team</DropdownMenuItem>
          <DropdownMenuItem>Subscription</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default Top;
