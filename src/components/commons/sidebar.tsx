import { Avatar, Drawer, List, Toolbar } from "@mui/material";
import colorConfigs from "../../configs/color";
import sizeConfigs from "../../configs/size";
import appRoutes from "../../routes/app-routes";
import SidebarItem from "./sidebar-item";

const Sidebar = () => {
  return (
	<Drawer
		variant="permanent"
		sx={{
			width: sizeConfigs.sidebar.width,
			flexShrink: 0,
			"& .MuiDrawer-paper": {
			width: sizeConfigs.sidebar.width,
			boxSizing: "border-box",
			borderRight: "0px",
			backgroundColor: colorConfigs.sidebar.bg,
			color: colorConfigs.sidebar.color
			}
		}}
		>
		<List disablePadding>
			<Toolbar sx={{ marginBottom: "20px" }}>
			</Toolbar>
			{appRoutes.map((route, index) => (
			route.sidebarProps ? (
				<SidebarItem item={route} />
			) : null
			))}
		</List>
	</Drawer>
);
};

export default Sidebar;