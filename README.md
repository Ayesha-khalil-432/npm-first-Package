# font-testingg
## Overview
The font-testingg npm package is a simple React component that displays a given text with different fonts and their names.

## Installation
To install the font-testingg npm package, use the following npm command:

```jsx
npm install font-testingg 
```

# Usage
Import the Model component into your React application:

```jsx
import React from "react";
import Model from "font-testingg";
```
Use the Model component in your JSX, passing the text prop to it:

```jsx
const App = () => {
    return (
        <div>
            <Model text="Your text here" />
        </div>
    );
};

export default App;
```

The Model component will render the provided text with different fonts and their names.

##  Fonts
The Model component currently supports the following fonts:

`Arial
Georgia
Courier New
Verdana
Times New Roman`

# Example
Here's an example of using the Model component:

```jsx
import React from "react";
import Model from "font-model-component";

const App = () => {
    return (
        <div>
            <Model text="Hello, world!" />
        </div>
    );
};

export default App;
```
This will render the text `"Hello, world!"` with different fonts and their names in the Model component.

## Contributing
Contributions are welcome! If you have any suggestions or improvements, feel free to open an issue or create a pull request.

## License
This project is licensed under the Apache License 2.0 - see the LICENSE file for details.