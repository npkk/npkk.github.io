import { useContext } from "react";
import "./ContentModal.css";
import { rootContext } from "../contexts/contexts";
import props from "../contents/content";

export default function ContentModal() {
	const rootCtx = useContext(rootContext);
	const display = rootCtx.root ? "" : "none";

	function handleClose() {
		rootCtx.setRoot("");
	}

	return (
		<>
			<div id="contentmodal__modal" style={{ display: display }}>
				<div id="contentmodal__body">
					<div id="contentmodal__content">
						{props
							.filter((prop) => prop.id === rootCtx.root)
							.map((prop) => {
								return prop.content;
							})}
					</div>
					<button
						type="button"
						id="contentmodal__close"
						onClick={() => handleClose()}
					>
						Back
					</button>
				</div>
			</div>
		</>
	);
}
