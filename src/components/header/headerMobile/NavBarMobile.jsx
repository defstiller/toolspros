import React, {useState, useRef} from "react";

import Close from "../../../assets/svgsReactReady/close/Close";
import Lines from "../../../assets/svgsReactReady/lines/Lines";
import NavBar from "../navBar/NavBar";

import styles from "./navBarMobile.module.css";

function NavBarMobile() {
	const [modalOpen, setModalOpen] = useState(false);
	const closeBtn = useRef();
	function handleModalClick(event) {
		if(event.currentTarget === closeBtn.current) {
			setModalOpen(false);
		} else {
			setModalOpen(true);
		}
	}
	return(
		<header className={styles.header}>
			{modalOpen 
				? 
				<>
					<button onClick={event => handleModalClick(event)} ref={closeBtn}>
						<Close/>
					</button>
					<NavBar styles={styles}/>
				</>
				:
				<button onClick={event => handleModalClick(event)}>
					<Lines />
				</button>
			}
		</header>
	);
}

export default NavBarMobile;