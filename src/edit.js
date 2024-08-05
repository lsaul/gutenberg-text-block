/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */

import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, BlockControls, AlignmentToolbar, InspectorControls } from '@wordpress/block-editor';
import './editor.scss';
import { PanelBody, TextControl } from '@wordpress/components';


export default function Edit( {attributes, setAttributes} ) {
	 console.log( attributes );

	const {text, alignment} = attributes;

	const onChangeAlignment = ( newAlignment ) => {
		setAttributes({ alignment: newAlignment })
	}

	const onChangeText = (newText) => {
		setAttributes({ text: newText })
	};

	return (
		<>
			<InspectorControls>
				<PanelBody
					title={ __('Color Settings', 'text-box')}
					icon="admin-appearance"
					initialOpen
					>

				 <TextControl 
				 	label="Input Label"
				 	value={text}
					onChange={ onChangeText }
					help="What does this box do? It updates text, just type below"
				 />
				</PanelBody>
			</InspectorControls>
			<BlockControls>
				 <AlignmentToolbar 
				 	value={ alignment }
				 	onChange={ onChangeAlignment }
				 />
			</BlockControls>

			<RichText { ...useBlockProps({
				className: `text-box-align-${ alignment }`
			}) } 
			onChange={( value )=>setAttributes({ text: value })}
			value={ text }
			placeholder={__("Placeholder for richtext input", "text-box")}
			tagName="h3"
			style={{ textAlign: alignment }}
			/>

		</>
	);
}
