import LoadImg from './icecream.png';
export const Loader=()=>{
    return(
        <div className="Loader">
            <div className="loading-circle">
            <div class="loader-circle"></div>
                <img src={LoadImg} alt="loading"/>
            </div>
            <span className="Loader-msg">Looking for great food near you ...</span>
        </div>
    )
}