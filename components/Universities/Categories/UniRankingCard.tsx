import { AboutUni } from "@/types/CategoryTypes";
import UniCatCard from "./UniCatCard";

import React from "react";
import { CiGlobe } from "react-icons/ci";
import { GoLocation } from "react-icons/go";
import { IoSchoolOutline } from "react-icons/io5";
import { RiCoinLine, RiSchoolLine } from "react-icons/ri";
import { TbCurrencyTaka, TbExternalLink } from "react-icons/tb";
import { Ranking, Rankings } from "@/types/UniversityTypes";

function UniRankingCard({ rankings }: { rankings: Rankings }) {
  return (
    <div className="min-w-[48%]">
      <UniCatCard title="Rankings">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full overflow-hidden flex items-center justify-center object-cover">
                <img
                  className="h-[150%] w-[150%] transform object-cover"
                  src="./qs.png"
                  alt=""
                />
              </div>
              <h3 className="font-semibold">QS World Ranking</h3>
              <div></div>
            </div>
            <div className="flex gap-2">
              <div className="w-8">
                </div>
                {rankings.qs.map((rank, i) => {
                  return (
                    <div key={"rank"+i}>
                      <UniRankingCardBadge
                        badge={{ header: rank.position, desc: rank.ranking }}
                      />
                    </div>
                  );
                })}
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full overflow-hidden flex items-center justify-center object-cover">
                <img
                  className="transform object-cover"
                  src="./the.png"
                  alt=""
                />
              </div>
              <h3 className="font-semibold">THE University Rankings</h3>
              <div></div>
            </div>
            <div className="flex gap-2">
              <div className="w-8"></div>
              {rankings.the.map((rank, i) => {
                  return (
                    <div key={"rank"+i}>
                      <UniRankingCardBadge
                        badge={{ header: rank.position, desc: rank.ranking }}
                      />
                    </div>
                  );
                })}
      
            </div>
          </div>
        </div>
      </UniCatCard>
    </div>
  );
}

type Badge = {
  //   icon: string;
  header: string;
  desc: string;
};
function UniRankingCardBadge({
  badge,
  children,
}: {
  badge: Badge;
  children?: React.ReactNode;
}) {
  return (
    <div className="flex-col bg-ed-badge inline-block px-6 py-2 rounded-lg">
      <p className="text-md font-semibold text-black flex gap-2 justify-center">
        {/* <span>{children}</span> */}
        {badge.header}
      </p>
      <p className="text-xs text-black">{badge.desc}</p>
    </div>
  );
}

export default UniRankingCard;
