import React from "react";

function CreatorProfile({ creator }) {
  return (
    <div className="flex items-center gap-4 mt-12">
      <p className="text-paraDark">{creator.creatorNum}</p>
      <div className="flex items-center gap-3">
        <div className="min-w-20 h-20 border border-[rgba(113,113,113,0.12)] rounded-[48px] flex items-center justify-center overflow-hidden">
          <img src={creator.creatorImg} alt="creatorimg" />
        </div>
        <div className="max-w-[278px]">
          <h3 className="font-bold text-headingColor mb-2">{creator.name}</h3>
          <p className="text-headingColor">{creator.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CreatorProfile;
