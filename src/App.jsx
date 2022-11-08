import styles from './App.module.css';
import Editor from "./components/Editor/Editor";

function App() {
	return (
		<div className={styles.app}>
			<Editor />
		</div>
	);
}

export default App;
