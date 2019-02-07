import Section from '../components/Section'
import Text from '../components/Text'
import Reference from '../components/Reference'
import { getConfig, generateClassName } from '../helpers/tailwind-utilities'

export default () => (
  <main>
    <h1>To Organize</h1>

    <Section
      title="Margins"
      cssPropertyName="margin"
      twSettings={getConfig('margin')}
      twCssPropertyPrefix="m"

      ExampleContainer={props => (
        <div
          className="sg-flex sg-flex-wrap sg-justify-between sg--mx-2"
          {...props}
        />
      )}

      Example={({ twCssPropertyPrefix, twSettingName, twSettingValue, cssPropertyName, ...props }) => (
        <div className={`sg-p-2`}>
          <div className={`sg-overflow-hidden`}>
            <div className={`sg-bg-grey-dark sg-inline-block`}>
              <div className={`${generateClassName(twCssPropertyPrefix, twSettingName)} sg-bg-grey-darkest sg-w-6 sg-h-6`} />
            </div>
          </div>
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
