import React from 'react';
import styles from './Viewer.module.css';
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";

export default function Viewer({ text }) {
	return (
		<div className={styles.viewer}>
			<ReactMarkdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
				{ text && text.replaceAll('\\n', '\n') }
			</ReactMarkdown>
		</div>
	);
}