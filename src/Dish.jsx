import { useRef, useContext } from "react";
// import { DishData as Dishes} from "./data";
import { CustomDish } from "./CustomDish";
import { dataContext } from "./App";

export const Dish = () => {
    const Dishes = useContext(dataContext);
    // console.log("dishesdata",Dishes.data);
    // const DishData=Dishes.data.DishData;
    const left = useRef(null);
    const right = useRef(null);
    const DishesContainer = useRef(null);
    // console.log("right", right);
    // console.log("left", left);
    // console.log("bannerContainer", bannerContainer);
    // bannerList.forEach(item=>{
    //     console.log(item);
    // })
    const rightScroll = () => {
        DishesContainer.current.scrollLeft += 200;
    }
    const leftScroll = () => {
        DishesContainer.current.scrollLeft -= 200;
    }

    return (
        <div className="Dish">
            <div className="head">
                <span className="header">What's on your mind?</span>
                <div className="head-btns">
                    <button ref={left} onClick={leftScroll}><span className="material-symbols-outlined">west</span></button>

                    <button ref={right} onClick={rightScroll}><span className="material-symbols-outlined">east</span></button>
                </div>
            </div>



            <div ref={DishesContainer} className="Dishes">
                {/* {console.log("dishdata", Dishes.data[0])} */}
                {
                    Dishes.data.DishData &&
                    Dishes.data.DishData.map((item, index) => {
                        return (<CustomDish src={item.image} path={item.path} key={index} />);
                    })
                }
            </div>

        </div>
    );
}