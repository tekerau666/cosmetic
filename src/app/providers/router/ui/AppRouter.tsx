import {Route, Routes} from "react-router-dom";
import {Suspense} from "react";
import {routeConfig} from "../../../../shared/config/routeConfig/routeConfig";


export const AppRouter = () => {
	return (
		<>
			<Suspense fallback={<div>Sucking...</div>}>
				<Routes>
					{Object.values(routeConfig).map(({element, path}) => (
						<Route
						key={path}
						element={(
							<div className="page-wrapper">
								{element}
							</div>
						)}
						path={path}
						/>
					))}
				</Routes>
			</Suspense>
		</>
	)
}