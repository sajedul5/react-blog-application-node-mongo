import Sidebar from "../../components/sidebar/Sidebar";
import "./setting.css";

export default function Setting() {
    return (
        <div className="settings">
            <div className="settinsgWrapper">
                <div className="settingsTitle">
                    <span className="settingsUpdateTitle">Update Your Account</span>
                    <span className="settingsDeleteTitle">Delete Account</span>
                </div>
                <form className="settingsForm">
                    <label>Profile Picture</label>
                    <div className="settingsPP">
                        <img className="" src="https://res.cloudinary.com/demo/image/twitter/1330457336.jpg"  alt=""/>
                        <label htmlFor="fileInput">
                            <i className="settingsPPIcon far fa-user-circle"></i>
                        </label>
                        <input type="file" id="fileInput" style={{ display:"none" }} />
                    </div>
                    <label>Username</label>
                    <input type="text" placeholder="Shakil" />
                    <label>Email</label>
                    <input type="email" placeholder="shakil@gmail.com" />
                    <label>Password</label>
                    <input type="password"  />
                    <button className="settingsSubmit">Update</button>
                </form>
            </div>
            <Sidebar/>
        </div>
    )
}
