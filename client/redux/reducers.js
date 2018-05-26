import {
  SET_SPLASH_SHOWING,
} from './types'




export const splashShowing = (state = true, { type, payload }) => {
  switch( type ) {
    case SET_SPLASH_SHOWING:
      return payload

    default:
      return state
  }
}




// -----------------------------------------------------------------------------
// Helpers

const payloadExistsInState = (payload, state, matchProps = ['id']) =>
  !!state.find(x => matchProps.reduce((res, prop) => {
      if (!res) return res
      return x[prop] === payload[prop]
    }, true)
  )
