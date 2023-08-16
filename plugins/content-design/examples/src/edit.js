import {InnerBlocks, InspectorControls} from '@wordpress/block-editor'
import { RadioControl, PanelBody } from '@wordpress/components';
import classNames from 'classnames'

export default (props) => {
  const {className, setAttributes} = props
  const setPlural = (plural) => {
    console.log(plural)
    setAttributes({plural})
  }
  const options = [
    { label: 'Plural', value: 'plural' },
    { label: 'Singular', value: 'singular' }
  ]

  return <div className={classNames(className,'row')}>
      {
        <InspectorControls>
          <PanelBody
            title={'Plural'}
            initialOpen={true}>
            {props.attributes.plural}
            <RadioControl
              label="Example(s)"
              selected={ props.attributes.plural }
              options={options}
              onChange={ setPlural }
            />
          </PanelBody>
        </InspectorControls>
      }
      <div className={'heading'}>
        <h3>Example{(props.attributes.plural === 'plural') ? 's' : ''}</h3>
      </div>
      <div className={'col'}>
        <InnerBlocks/>
      </div>
    </div>
};

// export default ExamplesEdit;
