# Simple(r) Lit boilerplate (Typescript)

I created this Lit boilerplate project for myself so I could have an easy-to-understand build starting off point for Lit with Typescript. It has less dependencies than the official example project (https://github.com/lit/lit-element-starter-ts/tree/lit-element-2.x) but also less creature comforts. The build still relies on node and the modules `tsc` for compiling, `tsc-watch` for watching code changes, and `rollup` bundling.

## Installation

Make sure you have node installed first.

```
npm install
```

## Build

```
npm run build
```

Or to have the files continuously watched and re-compiled/bundled:

```
npm run build:watch
```

## Output
If the build is successful, it will generate a `build/` directory which contains the static html and json bundle ready for use. It also generates a `compiled-ts/` directory which contains the intermediate compiled (but not bundled) javascript for debugging purposes.

## Viewing in browser

You also need to run your own static html server from the `build/` directory. I reccomend node's http-server.
```
cd build && http-server
```
