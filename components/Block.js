import Reference from './Reference'
import { generateClassName } from '../helpers/tailwind-utilities'

export default ({
  twCssPropertyPrefix,
  twSettingName,
  twSettingValue,
  cssPropertyName,
  className: parentClassNames,
  ...props
}) => {
  const twClassName = generateClassName(twCssPropertyPrefix, twSettingName)

  return (
    <div className={`${parentClassNames}`}>
      <div className={`${twClassName} sg-h-24`} />
      <Reference
        cssPropertyName={cssPropertyName}
        twCssPropertyPrefix={twCssPropertyPrefix}
        twSettingName={twSettingName}
        twSettingValue={twSettingValue}
      />
    </div>
  )
}
