export const getCssRootValue = prop => {
  const value = document.body.computedStyleMap().get(prop)
  console.log(value)
  if (!value || !value[0]) return null
  return value[0]
}
