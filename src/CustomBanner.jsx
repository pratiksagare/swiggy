export const CustomBanner = (props) => {
    return (
        <a className="" href={props.path}>
            <div className="CustomBanner">
                {/* {console.log(props.src, 'prop')} */}
                <img className="bnr" src={props.src} alt="banner" />
            </div>
        </a>
    );
}