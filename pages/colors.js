import Section from '../components/Section'
import Block from '../components/Block'
import { getConfig } from '../helpers/tailwind-utilities'

const BackgroundColorBlock = props => (
  <Block
    className="sg-px-2 sg-w-full lg:sg-w-1/3 sg-mb-10"
    {...props}
  />
)

export default () => (
  <React.Fragment>
    <h1>Colors</h1>
    <Section
      title="Colors"
      cssPropertyName="background-color"
      twSettings={getConfig('colors')}
      twCssPropertyPrefix="bg"

      ExampleContainer={props => (
        <div
          className="sg-flex sg-flex-wrap sg--mx-2"
          {...props}
        />
      )}

      Example={BackgroundColorBlock}
    />
  </React.Fragment>
)
