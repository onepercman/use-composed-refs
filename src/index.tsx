import React from 'react'

type PossibleRef<T> = React.Ref<T> | undefined

function _updateRef<T>(ref: PossibleRef<T>, value: T) {
  if (typeof ref === 'function') {
    ref(value)
  } else if (ref !== null && ref !== undefined) {
    Object.assign(ref as React.MutableRefObject<T>, { ...ref, current: value })
  }
}

function composeRefs<T>(...refs: PossibleRef<T>[]) {
  return (node: T) => refs.forEach((ref) => _updateRef(ref, node))
}

function useComposedRefs<T>(...refs: PossibleRef<T>[]) {
  return React.useCallback(composeRefs(...refs), refs)
}

export { composeRefs, useComposedRefs }
