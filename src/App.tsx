import GridTile from "./components/GridTile";
import ContentModal from "./components/ContentModal";
import "./index.css";
import Logo from "/logo.svg";
import props from "./contents/content";
import { rootContext, useRootContext } from "./contexts/contexts";

function App() {
	const rootCtx = useRootContext();

	const display = !rootCtx.root ? "" : "none";

	function onTileClick(target: string) {
		rootCtx.setRoot(target);
	}

	return (
		<>
			<rootContext.Provider value={rootCtx}>
				<div id="container">
					<div id="grid-container" style={{ display: display }}>
						<div id="npkk">
							<img src={Logo} alt="npkk_logo" />
						</div>
						{props.map((prop) => {
							return (
								<div
									key={prop.id}
									id={prop.id}
									onClick={() => onTileClick(prop.id)}
									onKeyUp={() => onTileClick(prop.id)}
								>
									<GridTile title={prop.title} />
								</div>
							);
						})}
					</div>
					<ContentModal />
				</div>
			</rootContext.Provider>
		</>
	);
}

export default App;
