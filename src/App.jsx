import {useState} from "react";
import Editor from "./components/Editor/Editor";
import styles from './App.module.css';
import Viewer from "./components/Viewer/Viewer";
import Header from "./components/Header/Header";

function App() {
	const [text, setText] = useState('');
	return (
		<>
			<Header text={text} setText={setText} />
			<div className={styles.app}>
				<Editor text={text} setText={setText} />
				<Viewer text={text} />
			</div>
		</>
	);
}

export default App;
