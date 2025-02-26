import Top from "../../../components/dashboard/Top";
import BuyCoffee from "@/components/dashboard/MyPage/BuyCoffee/BuyCoffee";
import Intro from "@/components/dashboard/MyPage/Intro";
import CreatePost from "@/components/dashboard/MyPage/CreatePost/CreatePost";
import Title from "@/components/dashboard/MyPage/Title";
import PostCard from "@/components/dashboard/MyPage/Posts/PostCard";
import ProfileSection from "@/components/dashboard/MyPage/ProfileSection";

function MyPage() {
  return (
    <div className="">
      {/* Home Paget Top */}
      <div className="">
        <Top title={"Profile"}></Top>
      </div>
      <ProfileSection isMe={true} isCreator={false}></ProfileSection>
      <div className=" mt-40 lg:mt-32 grid grid-cols-1  lg:grid-cols-3 gap-4">
      <div className="col-span-2 gap-4 grid-cols-1 grid lg:grid-cols-2 h-fit">
          {/* column */}
          <Intro></Intro>
        {/* column */}
        <BuyCoffee></BuyCoffee>
      </div>
        {/* column */} 
        <div className="col-span-1">
        <CreatePost></CreatePost>
        </div>
      </div>

      <div className="lg:p-6 p-4 mt-6 rounded-xl  bg-white border">
        <Title title={"Posts:"}></Title>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 h-[800px] lg:h-[300px] overflow-y-scroll scrollbar-hide">
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
          <PostCard></PostCard>
        </div>
      </div>
    </div>
  );
}

export default MyPage;
