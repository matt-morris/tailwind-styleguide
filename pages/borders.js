import Section from '../components/Section'
import Reference from '../components/Reference'
import Block from '../components/Block'
import { getConfig } from '../helpers/tailwind-utilities'

const BackgroundColorBlock = props => (
  <Block
    className="sg-px-2 sg-w-full lg:sg-w-1/3"
    {...props}
  />
)


export default () => (
  <main>
    <h1>Borders</h1>

    <Section
      title="Border Colors"
      cssPropertyName="border-color"
      twSettings={getConfig('borderColors')}
      twCssPropertyPrefix="border"

      ExampleContainer={props => (
        <div
          className="sg-flex sg-flex-wrap sg--mx-2"
          {...props}
        />
      )}

      Example={({ twCssPropertyPrefix, twSettingName, twSettingValue, cssPropertyName, ...props }) => (
        <div className={`sg-p-2 sg-w-full sm:sg-w-1/2 md:sg-w-1/3 xl:sg-w-1/4`}>
          <div
            className={`border-4 ${twCssPropertyPrefix}-${twSettingName} sg-p-8 sg-h-32`}
          />
          <Reference
            cssPropertyName={cssPropertyName}
            twCssPropertyPrefix={twCssPropertyPrefix}
            twSettingName={twSettingName}
            twSettingValue={twSettingValue}
          />
        </div>
      )}
    />

    <Section
      title="Border Widths"
      cssPropertyName="border-width"
      twSettings={getConfig('borderWidths')}
      twCssPropertyPrefix="border"

      ExampleContainer={props => (
        <div
          className="sg-flex sg-flex-wrap sg--mx-2"
          {...props}
        />
      )}

      Example={BackgroundColorBlock}
    />

    <Section
      title="Border Radius"
      cssPropertyName="border-radius"
      twSettings={getConfig('borderRadius')}
      twCssPropertyPrefix="rounded"

      ExampleContainer={props => (
        <div
          className="sg-flex sg-flex-wrap sg--mx-2"
          {...props}
        />
      )}

      Example={({ twCssPropertyPrefix, twSettingName, twSettingValue, cssPropertyName, ...props }) => (
        <div className={`sg-p-2 sg-w-full sm:sg-w-1/2 md:sg-w-1/3 xl:sg-w-1/4`}>
          <div
            className={`border ${twCssPropertyPrefix}-${twSettingName} sg-p-8 sg-h-32 sg-mb-3`}
          />
          <Reference
            cssPropertyName={cssPropertyName}
            twCssPropertyPrefix={twCssPropertyPrefix}
            twSettingName={twSettingName}
            twSettingValue={twSettingValue}
          />
        </div>
      )}
    />
  </main>
);
