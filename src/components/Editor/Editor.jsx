import React from 'react';
import styles from "./Editor.module.css";

export default function Editor({ text, setText }) {
	const handleTab = (e) => {
		if(e.code === 'Tab') {
			e.preventDefault();
			const target = e.target;
			let v = target.value;
			let start = target.selectionStart;
			let end = target.selectionEnd;
			target.value = v.substring(0, start) + '\t' + v.substring(end);
			target.selectionStart = target.selectionEnd = start + 1;
			e.target.focus()
		}
	}
	const handleTextChange = (e) => {
		setText(e.target.value);
	}
	return (
		<div className={styles.container}>
			<div className={styles.numbers}>
				{
					text.split('\n').map((value, index) => {
						return <span key={ index + 1 } className={styles.number}>{ index + 1 }</span>
					})
				}
			</div>
			<textarea className={styles.text} value={text} onKeyDown={handleTab} onChange={handleTextChange} />
		</div>
	);
}