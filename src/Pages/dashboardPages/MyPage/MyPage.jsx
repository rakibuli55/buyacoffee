import Top from "../../../components/dashboard/Top";
import BuyCoffee from "@/components/dashboard/MyPage/BuyCoffee";
import Intro from "@/components/dashboard/MyPage/Intro";
import CreatePost from "@/components/dashboard/MyPage/CreatePost";
import Title from "@/components/dashboard/MyPage/Title";
import PostCard from "@/components/dashboard/MyPage/PostCard";
import ProfileSection from "@/components/dashboard/MyPage/ProfileSection";

function MyPage() {
  return (
    <div className="">
      {/* Home Paget Top */}
      <div className="">
        <Top title={"Profile"}></Top>
      </div>
      <ProfileSection></ProfileSection>
      <div className=" mt-32 grid grid-cols-3 gap-4">
        {/* column */}
        <Intro></Intro>
        {/* column */}
        <BuyCoffee></BuyCoffee>
        {/* column */}
        <CreatePost></CreatePost>
      </div>


      <div className="p-6 mt-6 rounded-xl bg-white border">
        <Title title={'Posts:'}></Title>

        <div className="grid grid-cols-2 gap-6">
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
