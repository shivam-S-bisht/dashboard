import { RouteType } from "./config";
import DashboardOutlinedIcon from '@mui/icons-material/DashboardOutlined';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';
import FormatListBulletedOutlinedIcon from '@mui/icons-material/FormatListBulletedOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import Home from "../pages/home";
import Organization from "../pages/organization";
import Assets from "../pages/assets";
import Trade from "../pages/trade";
import History from "../pages/history";
import Wallet from "../pages/wallet";

const appRoutes: RouteType[] = [
	{
		path: "/home",
		element: <Home />,
		state: "home",
		sidebarProps: {
			displayText: "Home",
			icon: <FileDownloadOutlinedIcon />
		}
	},
	{
		path: "/organization",
		element: <Organization />,
		state: "organization",
		sidebarProps: {
			displayText: "Organization",
			icon: <FileDownloadOutlinedIcon />
		}
	},
	{
		path: "/assets",
		element: <Assets />,
		state: "assets",
		sidebarProps: {
			displayText: "Assets",
			icon: <DashboardOutlinedIcon />
		}
	},
	{
		path: "/trade",
		element: <Trade />,
		state: "trade",
		sidebarProps: {
			displayText: "Trade",
			icon: <AppsOutlinedIcon />
		}
	},
	{
		path: "/history",
		element: <History />,
		state: "history",
		sidebarProps: {
			displayText: "History",
			icon: <ArticleOutlinedIcon />
		}
	},
	{
		path: "/wallet",
		element: <Wallet />,
		state: "wallet",
		sidebarProps: {
			displayText: "Wallet",
			icon: <FormatListBulletedOutlinedIcon />
		}
	}
];

export default appRoutes;