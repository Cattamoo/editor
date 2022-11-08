import {useState} from "react";
import Editor from "./components/Editor/Editor";
import styles from './App.module.css';
import Viewer from "./components/Viewer/Viewer";

function App() {
	const [text, setText] = useState('');
	return (
		<div className={styles.app}>
			<Editor text={text} setText={setText} />
			<Viewer text={text} />
		</div>
	);
}

export default App;
