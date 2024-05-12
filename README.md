# Auto Top-up Settings Component

## Objective

The objective of this project is to build a React component that replicates the functionality and appearance of the auto top-up settings interface provided in the reference.

## Features

### 1. Component Structure

- Utilizes Material-UI's `Slider`, `Switch`, `Button`, and `Typography` components to construct the interface.
- Implements a responsive design that maintains the layout's integrity on different screen sizes.

### 2. State Management

- Utilizes React's `useState` to manage the state of the auto top-up toggle and the slider value.
- Defaults the auto top-up to an 'on' state, and the slider to the value corresponding to 1200 credits.

### 3. Slider and Credits Logic

- Connects the slider so that as it moves, it updates a display of the associated credits and price.
- Ensures that the slider snaps to the predefined credit values as shown in the reference.

### 4. Auto Top-up Functionality

- Displays the auto top-up settings when the switch is toggled on, and hides them when off.
- Prints the selected credit amount to the console when the "Confirm auto-purchase" button is clicked.

### 5. Styling

- Styles the component using Material-UI's styling solution to closely match the provided design.
- Pays attention to the color scheme, spacing, and typography to ensure the UI is as close to the provided design as possible.

## Usage

To use this component in a React application, follow these steps:

1. Install Material-UI if not already installed:
   ```bash
   npm install @mui/material @emotion/react @emotion/styled
   ```
2. Copy the `TopUp.tsx` file into your project's components directory.
3. Import the `TopUp` component into your desired React component.
4. Place the `TopUp` component in your JSX markup where you want to display the auto top-up settings interface.

```jsx
import React from "react";
import TopUp from "./components/TopUp";

function App() {
  return (
    <div className="App">
      <TopUp />
    </div>
  );
}

export default App;
```

## Screenshots

[Insert screenshots of the auto top-up settings interface here]

## Credits

This project was created by [Your Name]. Special thanks to [Material-UI](https://mui.com/) for providing the components used in this project.

## License

This project is licensed under the [MIT License](LICENSE).
