import { useContext, useRef } from "react";
// import { BannersData as BannerList} from "./data";
import { CustomBanner } from "./CustomBanner";
import { dataContext } from "./App";
// import banner from '../../swiggy/src/img/'
// import './'

export const Banner = () => {
    const BannersData=useContext(dataContext);
    const left = useRef(null);
    const right = useRef(null);
    const bannerContainer = useRef(null);
    // console.log("right", right);
    // console.log("left", left);
    // console.log("bannerContainer", bannerContainer);
    // bannerList.forEach(item=>{
    //     console.log(item);
    // })
    const rightScroll = () => {
        bannerContainer.current.scrollLeft += 400;
    }
    const leftScroll = () => {
        bannerContainer.current.scrollLeft -= 400;
    }

    return (
        <div className="Banner">
            <div className="head">
                <span className="header">Best offers for you</span>
                <div className="head-btns">
                    <button ref={left} onClick={leftScroll}><span className="material-symbols-outlined">west</span></button>

                    <button ref={right} onClick={rightScroll}><span className="material-symbols-outlined">east</span></button>
                </div>
            </div>



            <div ref={bannerContainer} className="banners">
                {
                    BannersData.data.BannersData &&
                    BannersData.data.BannersData.map((item, index) => {
                        // console.log(item);
                        return (<CustomBanner src={item.banner} path={item.path} key={index} />);
                    })
                }
            </div>

        </div>
    );
}