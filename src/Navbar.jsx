export const Navbar = () => {
    return (
        <div className="GrandNav">
            <div className="Navbar">
                <div className="part1">
                    <div className="logo"></div>

                    <div className="location">
                        <span className="tiny underline">Tathawade</span>
                    </div>
                </div>

                <div className="part2">
                    <a href="#">
                        <span className="material-symbols-outlined">
                            search
                        </span>
                        <span className="nav-menu-text">Search</span>
                    </a>



                    <a href="#">
                        <span className="material-symbols-outlined">
                            percent
                        </span>
                        <span className="nav-menu-text">Offers</span>
                    </a>



                    <a href="#">
                        <span className="material-symbols-outlined">
                            support
                        </span>
                        <span className="nav-menu-text">Help</span>
                    </a>

                    <a href="#">
                        <span className="material-symbols-outlined">
                            person
                        </span>
                        <span className="nav-menu-text">Sign In</span>
                    </a>

                    <a href="#">
                        <span className="material-symbols-outlined">
                            box
                        </span>
                        <span className="nav-menu-text">Cart</span>
                    </a>
                </div>
            </div>
        </div>
    );
}