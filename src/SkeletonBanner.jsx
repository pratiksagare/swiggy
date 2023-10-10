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
            <div className="head"></div>



            <div className="banners">
                <SkeletonCustomBanner />
                <SkeletonCustomBanner />
                <SkeletonCustomBanner />
                <SkeletonCustomBanner />
            </div>
            {/* <CustomBanner skeleton={showSkeleton ? true : false} /> */}
            {/* <SkeletonCustomBanner/> */}
        </div>
    )
}