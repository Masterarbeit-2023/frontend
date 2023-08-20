import { LoginOutlined } from "@ant-design/icons";
import { Button } from "antd";

const Header = () => {


    return (
        <div className="shadow-2xl bg-sky-500 border-b border-sky-500 p-3 w-full flex fixed z-20">
            <a className="mx-auto text-white h-10 text-2xl align-baseline" href="/">
                The Retreat
            </a>
            <Button type="primary" className="bg-blue-500 flex items-center"><LoginOutlined /></Button>
        </div>
    );
}

export default Header;