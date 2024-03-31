import { ReactNode } from "react";
import { Route } from "react-router-dom";
import appRoutes from "./app-routes";
import { RouteType } from "./config";
import PageWrapper from "../components/layout/page-wrapper";

const generateRoute = (routes: RouteType[]): ReactNode => {
	return routes.map((route, index) => (
		route.index ? (
			<Route
				index
				path={route.path}
				element={<PageWrapper state={route.state}>
					{route.element}
				</PageWrapper>}
			/>
		) : (
			<Route
				path={route.path}
				element={<PageWrapper state={route.state}>
					{route.element}
				</PageWrapper>}
				key={index}
			>
			{route.child && (
				generateRoute(route.child)
			)}
		</Route>
		)
	));
};

export const routes: ReactNode = generateRoute(appRoutes);