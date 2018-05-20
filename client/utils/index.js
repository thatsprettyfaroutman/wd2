import root from 'window-or-global'




export const getCssRootValue = prop => {
  if ( root.getComputedStyle ) return null
  let value = root.getComputedStyle(document.body).getPropertyValue(prop)
  if (typeof value === 'string') value = value.trim()
  return value
}
