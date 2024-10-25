# use-composed-refs

`use-composed-refs` is a lightweight utility library that helps manage multiple refs in reusable React components with TypeScript support. It simplifies handling multiple refs by providing an easy-to-use hook and utility function, enabling better ref management and flexibility in complex component structures.

## Installation

You can install `use-composed-refs` using npm or yarn:

```bash
npm install use-composed-refs
```

## Usage

To use the `use-composed-refs` library, simply import the provided useComposedRefs hook or composeRefs function. These utilities allow you to combine multiple refs into a single ref callback, making it easy to update multiple refs simultaneously in your component.

## Example

First, import useComposedRefs from the library:

```tsx
import { useComposedRefs } from 'use-composed-refs'
import React, { useRef } from 'react'

function MyComponent() {
  const innerRef = useRef<HTMLDivElement>(null)
  const externalRef = useRef<HTMLDivElement>(null)

  // Combine refs using useComposedRefs
  const composedRef = useComposedRefs(innerRef, externalRef)

  return <div ref={composedRef}>Hello World</div>
}
```

In this example, innerRef and externalRef both receive a reference to the <div> element, allowing you to use both refs without additional boilerplate.

## API Reference

- composeRefs(...refs): A utility function that accepts multiple refs and returns a single ref callback to update all of them.
- useComposedRefs(...refs): A custom hook that wraps composeRefs with React.useCallback for optimized ref handling.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please submit a pull request or open an issue.

## Contact

For further inquiries, please reach out to onepercman.

<a href="https://www.buymeacoffee.com/onepercman" target="_blank"><img src="https://cdn.buymeacoffee.com/buttons/default-orange.png" alt="Buy Me A Coffee" height="41" width="174" style="border-radius:6px"></a>
