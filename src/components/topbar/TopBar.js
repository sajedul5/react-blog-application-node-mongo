import "./topbar.css";

export default function TopBar() {
    return (
        <div className="top">
            <div className="topLeft">
                <i class="topIcon fab fa-facebook"></i>
                <i class="topIcon fab fa-twitter-square"></i>
                <i class="topIcon fab fa-pinterest-square"></i>
                <i class="topIcon fab fa-instagram-square"></i>
            </div>
            <div className="topCenter">
                <ul className="topList">
                    <li className="topListItem">HOME</li>
                    <li className="topListItem">ABOUT</li>
                    <li className="topListItem">CONTACT</li>
                    <li className="topListItem">WRITE</li>
                    <li className="topListItem">LOGOUT</li>
                </ul>
            </div>
            <div className="topRight">
                <img className="topImg" src="https://res.cloudinary.com/demo/image/twitter/1330457336.jpg"  alt=""/>
                <i className="topSearchIcon fas fa-search"></i>
            </div>
        </div>
    )
}
