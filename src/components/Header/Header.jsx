import React, {useRef, useState} from 'react';
import styles from './Header.module.css';

export default function Header({ text, setText }) {
	const fileRef = useRef();
	const [fileName, setFileName] = useState('New Markdown');
	const handleUpload = ({ target }) => {
		const file = target.files[0];
		if(file) {
			const fileReader = new FileReader();
			fileReader.onload = () => {
				setFileName(file.name.replace(/(\.\w+)/, ''));
				setText(fileReader.result);
			}
			fileReader.readAsText(file);
		}
	}
	const handleUploadClick = () => {
		fileRef.current?.click();
	}
	const handleSave = () => {
		const a = document.createElement('a');
		const file = new Blob([text], {
			type: 'text/plain'
		});
		a.href = URL.createObjectURL(file);
		a.download = `${fileName}.md`;
		a.click();
	}
	return (
		<header className={styles.header}>
			<span className={styles.logo}>Markdown Editor📝</span>
			<div>
				<input type="text" value={`${fileName}`} onChange={({ target }) => setFileName(target.value)} />
				<input ref={fileRef} type="hidden" onChange={handleUpload} accept=".md" />
				<button className={styles.btn} onClick={handleUploadClick}>Upload</button>
				<button className={styles.btn} onClick={handleSave}>Save</button>
			</div>
		</header>
	);
}