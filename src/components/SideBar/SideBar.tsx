import { Link } from "react-router-dom";
import { Menu } from "antd";

const SideBar = () => {
  return (
    <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      style={{ height: "100%", borderRight: 0 }}
    >
      <Menu.Item key="1">
        <Link to="/" className="nav-link">
          Dashboard
        </Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/order" className="nav-link">
          Test
        </Link>
      </Menu.Item>
    </Menu>
  );
};

export default SideBar;