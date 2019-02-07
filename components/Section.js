import Reference from './Reference'
import { generateClassName } from '../helpers/tailwind-utilities'

const DefaultContainer = props => (
  <div {...props} />
)

const DefaultExample = ({
  cssPropertyName,
  twCssPropertyPrefix,
  twSettingName,
  twSettingValue,
}) => {
  const twClassName = generateClassName(twCssPropertyPrefix, twSettingName)

  return (
    <div>
      <div className={`${twClassName} sg-py-3`}>
        {twSettingName}
      </div>
      <Reference
        cssPropertyName={cssPropertyName}
        twCssPropertyPrefix={twCssPropertyPrefix}
        twSettingName={twSettingName}
        twSettingValue={twSettingValue}
      />
    </div>
  )
}

export default ({
  className: parentClassName,
  title,
  description,
  twCssPropertyPrefix,
  twSettings,
  cssPropertyName,
  ExampleContainer = DefaultContainer,
  Example = DefaultExample,
  ...props
}) => {
  const sortedSettingKeys = Object.keys(twSettings).sort()
  sortedSettingKeys.splice(sortedSettingKeys.indexOf('default'), 1)


  return (
    <div
      className={`${parentClassName || ''}`}
      {...props}
    >
      <header className={`sg-mb-5`}>
        <h2 className={`sg-uppercase sg-text-base sg-font-bold sg-text-grey-dark`}>
          {title}
        </h2>
        {description && (
          <p className="sg-text-grey-darker sg-mt-1">{description}</p>
        )}
      </header>
      <ExampleContainer>
        {Object.keys(twSettings).map(twSettingName =>
          <Example
            cssPropertyName={cssPropertyName}
            key={twSettingName}
            twCssPropertyPrefix={twCssPropertyPrefix}
            twSettingName={twSettingName}
            twSettingValue={twSettings[twSettingName]}
          />
        )}
      </ExampleContainer>
    </div>
  )
}
