// import './style.scss';
// import { useState } from "react";
import { SkeletonCustomBanner } from "./SkeletonCustomBanner";

export const SkeletonBanner = () => {
    // const [showSkeleton, setShowSkeleton] = useState(true);
    // setTimeout(() => {
    //     setShowSkeleton(false);
    // }, 2000);
    return (
        <div className="skeletonBanner">
            {/* <CustomBanner skeleton={showSkeleton ? true : false} /> */}
            <SkeletonCustomBanner/>
        </div>
    )
}