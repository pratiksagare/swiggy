export const CustomDish=(props)=>{
    return(
        <a className="" href={props.path}>
            <div className="CustomDish">
                {/* {console.log(props.src,'prop')} */}
                <img className="dishBnr" src={props.src} alt="dishBnr" />
            </div>
        </a>
    );
}