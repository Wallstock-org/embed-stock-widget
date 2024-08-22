# Embed Stock Widget - WallStocks

A React application designed to provide a customizable stock widget that can be embedded into websites. This project uses Vite for build optimization, TypeScript for type safety, and Tailwind CSS for styling.

> Project is in development this is a prototype using mock data.
> TODO: Setup backend server on port 8080

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Development](#development)
- [Building](#building)
- [Contributing](#contributing)
- [License](#license)

## Features

- Customizable stock widget displaying real-time stock data.
- Built with React and TypeScript for robust and scalable code.
- Styled with Tailwind CSS for a modern and responsive design.
- Optimized build process with Vite for fast development and production builds.

## Installation

To get started with the Embed Stock Widget, clone the repository and install the dependencies:

```bash
git clone https://github.com/yourusername/embed-stock-widget.git
cd embed-stock-widget
npm install
```

## Usage

### Development

To start a local development server with hot module replacement, use:

```bash
npm run dev
```

This will open the application at `http://localhost:5173` (or a similar port) in your default browser.

### Production Build

To build the application for production, run:

```bash
npm run build
```

The production build will be output to the `dist` directory, with `bundle.js` and `bundle.css` files for easy deployment.

### Embedding the Widget

To embed the widget in a website, include the generated `bundle.js` and `bundle.css` files in your HTML and add a `div` with an ID provided by dashboard like `client1`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Embed Stock Widget</title>
    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/gh/Wallstock-org/embed-stock-widget/dist/bundle.css"
    />
  </head>
  <body>
    <div id="client1"></div>
    <script src="https://cdn.jsdelivr.net/gh/Wallstock-org/embed-stock-widget/dist/bundle.js"></script>
  </body>
</html>
```

## Development

### Running Tests

If you have tests set up, you can run them with:

```bash
npm test
```

### Linting

To lint your code, use:

```bash
bun run lint
```

## Building

The build command will create a production-ready version of the app in the `dist` directory:

```bash
bun run build
```

## Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature/your-feature`.
3. Commit your changes: `git commit -am 'Add new feature'`.
4. Push to the branch: `git push origin feature/your-feature`.
5. Open a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Contributors

[Priyanshu Verma](https://github.com/priyanshuverma-dev)
