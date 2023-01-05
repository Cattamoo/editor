import React, {useRef} from 'react';
import styles from './Header.module.css';

export default function Header({ text, setText }) {
	const fileRef = useRef();
	const handleUpload = ({ target }) => {
		const file = target.files[0];
		if(file) {
			const fileReader = new FileReader();
			fileReader.onload = () => {
				setText(fileReader.result);
			}
			fileReader.readAsText(file);
		}
	}
	const handleUploadClick = () => {
		fileRef.current.click();
	}
	const handleSave = () => {
		const a = document.createElement('a');
		const file = new Blob([text], {
			type: 'text/plain'
		})
		const fileName = `NewMarkdown_${new Date().getTime()}`;
		a.href = URL.createObjectURL(file);
		a.download = `${fileName}.md`;
		a.click();
	}
	return (
		<header className={styles.header}>
			<span className={styles.logo}>Markdown Editor📝</span>
			<div>
				<input className="hidden" ref={fileRef} type="file" onChange={handleUpload} accept=".md" />
				<button className={styles.btn} onClick={handleUploadClick}>Upload</button>
				<button className={styles.btn} onClick={handleSave}>Save</button>
			</div>
		</header>
	);
}