# Auto Top-up Settings Component

## Objective

The objective of this project is to build a React component that replicates the functionality and appearance of the auto top-up settings interface provided in the [reference](https://www.figma.com/file/gmPF9wCZsPTVIzLnCU39m6/Assignment-%231?type=design&node-id=0-1&mode=design&t=6ocwalrOMm02dq1G-0).

## Features

### 1. Component Structure

- Utilizes Material-UI's `Slider`, `Switch`, `Button`, and `Typography` components to construct the interface.
- Implements a responsive design that maintains the layout's integrity on different screen sizes.

### 2. State Management

- Utilizes React's `useState` to manage the state of the auto top-up toggle and the slider value.
- Defaults the auto top-up to an 'on' state, and the slider to the value corresponding to 1200 credits.

### 3. Slider and Credits Logic

- Connected the slider so that as it moves, it updates a display of the associated credits and price.

### 4. Auto Top-up Functionality

- Displays the auto top-up settings when the switch is toggled on, and hides them when off.
- Printed the selected credit amount to the console when the "Confirm auto-purchase" button is clicked.

### 5. Styling

- Styled the component using Material-UI's styling solution to closely match the provided design.

## Usage

To use this component in a React application, follow these steps:

1. Clone this repo to yoour local system:
   ```bash
   git clone https://github.com/thissudhir/Smartifiy-auto-top-up .
   ```
2. Open terminal and run command `npm install`.
3. After that run command `npm run dev`.
4. This will start a server at localhost:

## Screenshots

## Credits

This project was created by [Abhishek](https://github.com/thissudhir/).

## License

This project is licensed under the [MIT License](LICENSE).
