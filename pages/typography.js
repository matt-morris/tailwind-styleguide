import Text from '../components/Text'
import Section from '../components/Section'
import { getConfig } from '../helpers/tailwind-utilities'

const AaFlex = props => <div className={`sg-flex sg-flex-wrap sg--mx-2`} {...props}></div>

const Aa = props => (
  <Text
    className={`font-xfinity sg-p-2 sg-w-1/2 md:sg-w-1/3 lg:sg-w-1/4`}
    text={`Aa`}
    {...props}
  />
)

const QuickBrownBoxExample = props => (
  <Text
    className={`sg-mb-5 font-xfinity`}
    text={`The quick brown fox jumps over the lazy dog.`}
    {...props}
  />
)

const LoremIpsum = props => (
  <Text
    className={`sg-mb-5 font-xfinity`}
    text={`
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin scelerisque tincidunt scelerisque.
      Curabitur quam magna, blandit luctus venenatis ac, tincidunt nec metus. Maecenas imperdiet nunc
      ac nunc ultrices, commodo accumsan mi dignissim. Aliquam hendrerit ligula vel elit consequat viverra.
      Vivamus a venenatis tortor.
    `}
    {...props}
  />
)

export default () => (
  <React.Fragment>

    <h1 className={`sg-mb-12`}>Typography</h1>

    <Section
      title="Fonts"
      className="sg-mb-16"
      Example={QuickBrownBoxExample}
      cssPropertyName="font-family"
      twCssPropertyPrefix="font"
      twSettings={getConfig('fonts')}
    />

    <Section
      title="Font Weight"
      className="sg-mb-16"
      cssPropertyName="font-weight"
      twCssPropertyPrefix="font"
      twSettings={getConfig('fontWeights')}
      Example={QuickBrownBoxExample}
    />

    <Section
      title="Text Sizes"
      className="sg-mb-16"
      Example={QuickBrownBoxExample}
      cssPropertyName="font-size"
      twCssPropertyPrefix="text"
      twSettings={getConfig('textSizes')}
    />

    <Section
      title="Text Colors"
      className="sg-mb-16"
      Example={Aa}
      ExampleContainer={AaFlex}
      cssPropertyName="color"
      twCssPropertyPrefix="text"
      twSettings={getConfig('textColors')}
    />

    <Section
      title="Tracking"
      className="sg-mb-16"
      Example={QuickBrownBoxExample}
      cssPropertyName="letter-spacing"
      twCssPropertyPrefix="tracking"
      twSettings={getConfig('tracking')}
    />

    <Section
      title="Leading"
      className="sg-mb-16"
      Example={LoremIpsum}
      cssPropertyName="line-height"
      twCssPropertyPrefix="leading"
      twSettings={getConfig('leading')}
    />
  </React.Fragment>
)
