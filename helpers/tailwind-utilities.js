const config = require('../tailwind.user.js')

export const getConfig = key => config[key]

export const generateClassName = (
  twCssPropertyPrefix,
  twSettingName,
  options = {
    screen: '',
    side: '',
    variant: '',
  },
) => {
  const parts = []

  if (options.screen) {
    parts.push(options.screen)
    parts.push(config.options.separator)
  }

  if (options.variant) {
    parts.push(options.variant)
    parts.push(config.options.separator)
  }

  if (config.options.prefix) {
    parts.push(config.options.prefix)
  }

  parts.push(twCssPropertyPrefix)

  if (options.side) {
    parts.push(side)
  }

  if (twSettingName !== 'default') {
    parts.push(`-${twSettingName}`)
  }

  return parts.join('')
}
