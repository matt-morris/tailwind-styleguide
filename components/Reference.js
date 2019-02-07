import { generateClassName } from '../helpers/tailwind-utilities'

export default ({
  className: parentClassNames,
  cssPropertyName,
  headingLevel = 2,
  twCssPropertyPrefix,
  twSettingName,
  twSettingValue,
  ...props
}) => {
  const Header = `h${headingLevel}`
  const twSettingStringValue = typeof twSettingValue === "object"
    ? twSettingValue.join(', ')
    : twSettingValue

  const twClassName = generateClassName(twCssPropertyPrefix, twSettingName)

  return (
    <div
      className={`${parentClassNames || ''} sg-py-2 sg-border-t sg-border-grey-lighter`}
      {...props}
    >
      <Header
        className="sg-text-grey-darker sg-font-medium sg-text-base"
      >
        {`.${twClassName}`}
      </Header>
      <p className="sg-text-grey-dark sg-text-xs">
        <code>{`${cssPropertyName}: ${twSettingStringValue};`}</code>
      </p>
    </div>
  )
}
