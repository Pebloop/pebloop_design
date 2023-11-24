# Pebloop system

My own design system for svelte, inspired by Material Design 2 and 3.

## Developing

Install dependencies with `npm install`.
Start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

### Run storybook

Run storybook to see and test the components:

```bash
npm run storybook
```

## Building

To build the library:

```bash
npm run package
```

To create a production version of the showcase app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.

> To deploy your app, you may need to install an [adapter](https://kit.svelte.dev/docs/adapters) for your target environment.

## Publishing

To publish your library to [npm](https://www.npmjs.com):

```bash
npm publish
```
