import React from 'react';
import styles from './Viewer.module.css';

export default function Viewer({ text }) {
	return (
		<div className={styles.viewer} dangerouslySetInnerHTML={{ __html: text }} />
	);
}