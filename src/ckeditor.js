/**
 * @license Copyright (c) 2003-2019, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */

// The editor creator to use.
import ClassicEditorBase from '@ckeditor/ckeditor5-editor-classic/src/classiceditor';

import Essentials from '@ckeditor/ckeditor5-essentials/src/essentials';
import UploadAdapter from '@ckeditor/ckeditor5-adapter-ckfinder/src/uploadadapter';
import Autoformat from '@ckeditor/ckeditor5-autoformat/src/autoformat';
import Bold from '@ckeditor/ckeditor5-basic-styles/src/bold';
import Italic from '@ckeditor/ckeditor5-basic-styles/src/italic';
import Underline from '@ckeditor/ckeditor5-basic-styles/src/underline';
import Strikethrough from '@ckeditor/ckeditor5-basic-styles/src/strikethrough';
import Code from '@ckeditor/ckeditor5-basic-styles/src/code';
import BlockQuote from '@ckeditor/ckeditor5-block-quote/src/blockquote';
import CKFinder from '@ckeditor/ckeditor5-ckfinder/src/ckfinder';
import EasyImage from '@ckeditor/ckeditor5-easy-image/src/easyimage';
import Heading from '@ckeditor/ckeditor5-heading/src/heading';
import Image from '@ckeditor/ckeditor5-image/src/image';
import ImageCaption from '@ckeditor/ckeditor5-image/src/imagecaption';
import ImageStyle from '@ckeditor/ckeditor5-image/src/imagestyle';
import ImageToolbar from '@ckeditor/ckeditor5-image/src/imagetoolbar';
import ImageUpload from '@ckeditor/ckeditor5-image/src/imageupload';
import ImageResize from '@ckeditor/ckeditor5-image/src/imageresize';
import Indent from '@ckeditor/ckeditor5-indent/src/indent';
import Link from '@ckeditor/ckeditor5-link/src/link';
import List from '@ckeditor/ckeditor5-list/src/list';
import MediaEmbed from '@ckeditor/ckeditor5-media-embed/src/mediaembed';
import Paragraph from '@ckeditor/ckeditor5-paragraph/src/paragraph';
import PasteFromOffice from '@ckeditor/ckeditor5-paste-from-office/src/pastefromoffice';
import Table from '@ckeditor/ckeditor5-table/src/table';
import TableToolbar from '@ckeditor/ckeditor5-table/src/tabletoolbar';

import TodoList from '@ckeditor/ckeditor5-list/src/todolist';
import Alignment from '@ckeditor/ckeditor5-alignment/src/alignment';
import Font from '@ckeditor/ckeditor5-font/src/font';
import Highlight from '@ckeditor/ckeditor5-highlight/src/highlight';
import HorizontalLine from '@ckeditor/ckeditor5-horizontal-line/src/horizontalline';

const colors = {
	columns: 9,
	documentColors: 18,
	colors: [
		{ color: 'hsl(0, 0%, 0%)', label: 'hsl(0, 0%, 0%)' }, { color: 'hsl(0, 0%, 12.5%)', label: 'hsl(0, 0%, 12.5%)' }, { color: 'hsl(0, 0%, 25%)', label: 'hsl(0, 0%, 25%)' }, { color: 'hsl(0, 0%, 37.5%)', label: 'hsl(0, 0%, 37.5%)' }, { color: 'hsl(0, 0%, 50%)', label: 'hsl(0, 0%, 50%)' }, { color: 'hsl(0, 0%, 62.5%)', label: 'hsl(0, 0%, 62.5%)' }, { color: 'hsl(0, 0%, 75%)', label: 'hsl(0, 0%, 75%)' }, { color: 'hsl(0, 0%, 87.5%)', label: 'hsl(0, 0%, 87.5%)' }, { color: 'hsl(0, 0%, 100%)', label: 'hsl(0, 0%, 100%)' },
		{ color: 'hsl(0, 100%, 10%)', label: 'hsl(0, 100%, 10%)' }, { color: 'hsl(0, 100%, 20%)', label: 'hsl(0, 100%, 20%)' }, { color: 'hsl(0, 100%, 30%)', label: 'hsl(0, 100%, 30%)' }, { color: 'hsl(0, 100%, 40%)', label: 'hsl(0, 100%, 40%)' }, { color: 'hsl(0, 100%, 50%)', label: 'hsl(0, 100%, 50%)' }, { color: 'hsl(0, 100%, 60%)', label: ' ' }, { color: 'hsl(0, 100%, 70%)', label: 'hsl(0, 100%, 70%)' }, { color: 'hsl(0, 100%, 80%)', label: 'hsl(0, 100%, 80%)' }, { color: 'hsl(0, 100%, 90%)', label: 'hsl(0, 100%, 90%)' },
		{ color: 'hsl(30, 100%, 10%)', label: 'hsl(30, 100%, 10%)' }, { color: 'hsl(30, 100%, 20%)', label: 'hsl(30, 100%, 20%)' }, { color: 'hsl(30, 100%, 30%)', label: 'hsl(30, 100%, 30%)' }, { color: 'hsl(30, 100%, 40%)', label: 'hsl(30, 100%, 40%)' }, { color: 'hsl(30, 100%, 50%)', label: 'hsl(30, 100%, 50%)' }, { color: 'hsl(30, 100%, 60%)', label: 'hsl(30, 100%, 60%)' }, { color: 'hsl(30, 100%, 70%)', label: 'hsl(30, 100%, 70%)' }, { color: 'hsl(30, 100%, 80%)', label: 'hsl(30, 100%, 80%)' }, { color: 'hsl(30, 100%, 90%)', label: 'hsl(30, 100%, 90%)' },
		{ color: 'hsl(60, 100%, 10%)', label: 'hsl(60, 100%, 10%)' }, { color: 'hsl(60, 100%, 20%)', label: 'hsl(60, 100%, 20%)' }, { color: 'hsl(60, 100%, 30%)', label: 'hsl(60, 100%, 30%)' }, { color: 'hsl(60, 100%, 40%)', label: 'hsl(60, 100%, 40%)' }, { color: 'hsl(60, 100%, 50%)', label: 'hsl(60, 100%, 50%)' }, { color: 'hsl(60, 100%, 60%)', label: 'hsl(60, 100%, 60%)' }, { color: 'hsl(60, 100%, 70%)', label: 'hsl(60, 100%, 70%)' }, { color: 'hsl(60, 100%, 80%)', label: 'hsl(60, 100%, 80%)' }, { color: 'hsl(60, 100%, 90%)', label: 'hsl(60, 100%, 90%)' },
		{ color: 'hsl(90, 100%, 10%)', label: 'hsl(90, 100%, 10%)' }, { color: 'hsl(90, 100%, 20%)', label: 'hsl(90, 100%, 20%)' }, { color: 'hsl(90, 100%, 30%)', label: 'hsl(90, 100%, 30%)' }, { color: 'hsl(90, 100%, 40%)', label: 'hsl(90, 100%, 40%)' }, { color: 'hsl(90, 100%, 50%)', label: 'hsl(90, 100%, 50%)' }, { color: 'hsl(90, 100%, 60%)', label: 'hsl(90, 100%, 60%)' }, { color: 'hsl(90, 100%, 70%)', label: 'hsl(90, 100%, 70%)' }, { color: 'hsl(90, 100%, 80%)', label: 'hsl(90, 100%, 80%)' }, { color: 'hsl(90, 100%, 90%)', label: 'hsl(90, 100%, 90%)' },
		{ color: 'hsl(120, 100%, 10%)', label: 'hsl(120, 100%, 10%)' }, { color: 'hsl(120, 100%, 20%)', label: 'hsl(120, 100%, 20%)' }, { color: 'hsl(120, 100%, 30%)', label: 'hsl(120, 100%, 30%)' }, { color: 'hsl(120, 100%, 40%)', label: 'hsl(120, 100%, 40%)' }, { color: 'hsl(120, 100%, 50%)', label: 'hsl(120, 100%, 50%)' }, { color: 'hsl(120, 100%, 60%)', label: 'hsl(120, 100%, 60%)' }, { color: 'hsl(120, 100%, 70%)', label: 'hsl(120, 100%, 70%)' }, { color: 'hsl(120, 100%, 80%)', label: 'hsl(120, 100%, 80%)' }, { color: 'hsl(120, 100%, 90%)', label: 'hsl(120, 100%, 90%)' },
		{ color: 'hsl(150, 100%, 10%)', label: 'hsl(150, 100%, 10%)' }, { color: 'hsl(150, 100%, 20%)', label: 'hsl(150, 100%, 20%)' }, { color: 'hsl(150, 100%, 30%)', label: 'hsl(150, 100%, 30%)' }, { color: 'hsl(150, 100%, 40%)', label: 'hsl(150, 100%, 40%)' }, { color: 'hsl(150, 100%, 50%)', label: 'hsl(150, 100%, 50%)' }, { color: 'hsl(150, 100%, 60%)', label: 'hsl(150, 100%, 60%)' }, { color: 'hsl(150, 100%, 70%)', label: 'hsl(150, 100%, 70%)' }, { color: 'hsl(150, 100%, 80%)', label: 'hsl(150, 100%, 80%)' }, { color: 'hsl(150, 100%, 90%)', label: 'hsl(150, 100%, 90%)' },
		{ color: 'hsl(180, 100%, 10%)', label: 'hsl(180, 100%, 10%)' }, { color: 'hsl(180, 100%, 20%)', label: 'hsl(180, 100%, 20%)' }, { color: 'hsl(180, 100%, 30%)', label: 'hsl(180, 100%, 30%)' }, { color: 'hsl(180, 100%, 40%)', label: 'hsl(180, 100%, 40%)' }, { color: 'hsl(180, 100%, 50%)', label: 'hsl(180, 100%, 50%)' }, { color: 'hsl(180, 100%, 60%)', label: 'hsl(180, 100%, 60%)' }, { color: 'hsl(180, 100%, 70%)', label: 'hsl(180, 100%, 70%)' }, { color: 'hsl(180, 100%, 80%)', label: 'hsl(180, 100%, 80%)' }, { color: 'hsl(180, 100%, 90%)', label: 'hsl(180, 100%, 90%)' },
		{ color: 'hsl(210, 100%, 10%)', label: 'hsl(210, 100%, 10%)' }, { color: 'hsl(210, 100%, 20%)', label: 'hsl(210, 100%, 20%)' }, { color: 'hsl(210, 100%, 30%)', label: 'hsl(210, 100%, 30%)' }, { color: 'hsl(210, 100%, 40%)', label: 'hsl(210, 100%, 40%)' }, { color: 'hsl(210, 100%, 50%)', label: 'hsl(210, 100%, 50%)' }, { color: 'hsl(210, 100%, 60%)', label: 'hsl(210, 100%, 60%)' }, { color: 'hsl(210, 100%, 70%)', label: 'hsl(210, 100%, 70%)' }, { color: 'hsl(210, 100%, 80%)', label: 'hsl(210, 100%, 80%)' }, { color: 'hsl(210, 100%, 90%)', label: 'hsl(210, 100%, 90%)' },
		{ color: 'hsl(240, 100%, 10%)', label: 'hsl(240, 100%, 10%)' }, { color: 'hsl(240, 100%, 20%)', label: 'hsl(240, 100%, 20%)' }, { color: 'hsl(240, 100%, 30%)', label: 'hsl(240, 100%, 30%)' }, { color: 'hsl(240, 100%, 40%)', label: 'hsl(240, 100%, 40%)' }, { color: 'hsl(240, 100%, 50%)', label: 'hsl(240, 100%, 50%)' }, { color: 'hsl(240, 100%, 60%)', label: 'hsl(240, 100%, 60%)' }, { color: 'hsl(240, 100%, 70%)', label: 'hsl(240, 100%, 70%)' }, { color: 'hsl(240, 100%, 80%)', label: 'hsl(240, 100%, 80%)' }, { color: 'hsl(240, 100%, 90%)', label: 'hsl(240, 100%, 90%)' },
		{ color: 'hsl(270, 100%, 10%)', label: 'hsl(270, 100%, 10%)' }, { color: 'hsl(270, 100%, 20%)', label: 'hsl(270, 100%, 20%)' }, { color: 'hsl(270, 100%, 30%)', label: 'hsl(270, 100%, 30%)' }, { color: 'hsl(270, 100%, 40%)', label: 'hsl(270, 100%, 40%)' }, { color: 'hsl(270, 100%, 50%)', label: 'hsl(270, 100%, 50%)' }, { color: 'hsl(270, 100%, 60%)', label: 'hsl(270, 100%, 60%)' }, { color: 'hsl(270, 100%, 70%)', label: 'hsl(270, 100%, 70%)' }, { color: 'hsl(270, 100%, 80%)', label: 'hsl(270, 100%, 80%)' }, { color: 'hsl(270, 100%, 90%)', label: 'hsl(270, 100%, 90%)' },
		{ color: 'hsl(300, 100%, 10%)', label: 'hsl(300, 100%, 10%)' }, { color: 'hsl(300, 100%, 20%)', label: 'hsl(300, 100%, 20%)' }, { color: 'hsl(300, 100%, 30%)', label: 'hsl(300, 100%, 30%)' }, { color: 'hsl(300, 100%, 40%)', label: 'hsl(300, 100%, 40%)' }, { color: 'hsl(300, 100%, 50%)', label: 'hsl(300, 100%, 50%)' }, { color: 'hsl(300, 100%, 60%)', label: 'hsl(300, 100%, 60%)' }, { color: 'hsl(300, 100%, 70%)', label: 'hsl(300, 100%, 70%)' }, { color: 'hsl(300, 100%, 80%)', label: 'hsl(300, 100%, 80%)' }, { color: 'hsl(300, 100%, 90%)', label: 'hsl(300, 100%, 90%)' },
		{ color: 'hsl(330, 100%, 10%)', label: 'hsl(330, 100%, 10%)' }, { color: 'hsl(330, 100%, 20%)', label: 'hsl(330, 100%, 20%)' }, { color: 'hsl(330, 100%, 30%)', label: 'hsl(330, 100%, 30%)' }, { color: 'hsl(330, 100%, 40%)', label: 'hsl(330, 100%, 40%)' }, { color: 'hsl(330, 100%, 50%)', label: 'hsl(330, 100%, 50%)' }, { color: 'hsl(330, 100%, 60%)', label: 'hsl(330, 100%, 60%)' }, { color: 'hsl(330, 100%, 70%)', label: 'hsl(330, 100%, 70%)' }, { color: 'hsl(330, 100%, 80%)', label: 'hsl(330, 100%, 80%)' }, { color: 'hsl(330, 100%, 90%)', label: 'hsl(330, 100%, 90%)' }
	]
};

export default class ClassicEditor extends ClassicEditorBase { }

// Plugins to include in the build.
ClassicEditor.builtinPlugins = [
	Essentials,
	UploadAdapter,
	Autoformat,
	Bold,
	Italic,
	Underline,
	Strikethrough,
	Code,
	BlockQuote,
	CKFinder,
	EasyImage,
	Heading,
	Image,
	ImageCaption,
	ImageStyle,
	ImageToolbar,
	ImageUpload,
	ImageResize,
	Indent,
	Link,
	List,
	MediaEmbed,
	Paragraph,
	PasteFromOffice,
	Table,
	TableToolbar,
	TodoList,
	Alignment,
	Font,
	Highlight,
	HorizontalLine
];

// Editor configuration.
ClassicEditor.defaultConfig = {
	toolbar: {
		items: [
			'heading',
			'|',
			'bold',
			'italic',
			'underline',
			'strikethrough',
			'code',
			'|',
			'fontSize',
			'fontFamily',
			'fontColor',
			'fontBackgroundColor',
			'highlight',
			'|',
			'alignment:left',
			'alignment:right',
			'alignment:center',
			'alignment:justify',
			'|',
			'link',
			'bulletedList',
			'numberedList',
			'todoList',
			'horizontalLine',
			'|',
			'indent',
			'outdent',
			'|',
			'imageUpload',
			'blockQuote',
			'insertTable',
			'mediaEmbed',
			'undo',
			'redo'
		]
	},
	fontSize: {
		options: ['default', 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 32, 34, 36, 38, 40]
	},
	fontColor: colors,
	fontBackgroundColor: colors,
	fontFamily: {
		options: [
			'default',
			'Arial, Helvetica, sans-serif',
			'Roboto, Helvetica, Arial, sans-serif',
			'Helvetica, Roboto, Arial, sans-serif',
			'Courier New, Courier, monospace',
			'Georgia, serif',
			'Lucida Sans Unicode, Lucida Grande, sans-serif',
			'Tahoma, Geneva, sans-serif',
			'Times New Roman, Times, serif',
			'Trebuchet MS, Helvetica, sans-serif',
			'Verdana, Geneva, sans-serif',
			'Ubuntu, Arial, sans-serif',
			'Ubuntu Mono, Courier New, Courier, monospace'
		]
	},
	highlight: {
		options: [
			{ model: 'yellowMarker', class: 'marker-yellow', title: 'Yellow Marker', color: 'var(--ck-highlight-marker-yellow)', type: 'marker' },
			{ model: 'greenMarker', class: 'marker-green', title: 'Green marker', color: 'var(--ck-highlight-marker-green)', type: 'marker' },
			{ model: 'pinkMarker', class: 'marker-pink', title: 'Pink marker', color: 'var(--ck-highlight-marker-pink)', type: 'marker' },
			{ model: 'blueMarker', class: 'marker-blue', title: 'Blue marker', color: 'var(--ck-highlight-marker-blue)', type: 'marker' },
			{ model: 'redPen', class: 'pen-red', title: 'Red pen', color: 'var(--ck-highlight-pen-red)', type: 'pen' },
			{ model: 'greenPen', class: 'pen-green', title: 'Green pen', color: 'var(--ck-highlight-pen-green)', type: 'pen' }
		]
	},
	image: {
		toolbar: [
			'imageStyle:full',
			'imageStyle:side',
			'|',
			'imageTextAlternative'
		],
		resizeUnit: 'px'
	},
	table: {
		contentToolbar: [
			'tableColumn',
			'tableRow',
			'mergeTableCells'
		]
	},
	// This value must be kept in sync with the language defined in webpack.config.js.
	language: 'en'
};
