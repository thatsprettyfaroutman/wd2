export const getCssRootValue = prop => {
  if (!window.getComputedStyle) return null
  let value = window.getComputedStyle(document.body).getPropertyValue(prop)
  if (typeof value === 'string') value = value.trim()
  return value
}
