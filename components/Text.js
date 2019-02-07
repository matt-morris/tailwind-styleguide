import Reference from './Reference'

export default ({
  className: parentClassNames,
  cssPropertyName,
  twCssPropertyPrefix,
  twSettingName,
  twSettingValue,
  text = 'Aa',
  ...props
}) => {
  return (
    <div
      className={`${parentClassNames || ''}`}
      {...props}
    >
      <div className={`sg-py-2 sg-text-xl`}>
        <p
          className={`${twCssPropertyPrefix}-${twSettingName}`}
          children={text}
        />
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
