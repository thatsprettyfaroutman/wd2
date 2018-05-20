export const getCssRootValue = prop => {
  if (!getComputedStyle) return null
  let value = getComputedStyle(document.body).getPropertyValue(prop)
  if (typeof value === 'string') value = value.trim()
  return value
}
