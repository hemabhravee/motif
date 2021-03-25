<h1 align="center">Motif UI Library</h1>

<div align="center">

A UI component library for [Resuminator](https://resuminator.in) and its peer projects. 
Motif is based on [Material-UI](https://material-ui.com/) to build consistent, performant, and beautiful UIs quickly. 
It provides useful wrappers around the MUI components allowing even more customization.

![GitHub](https://img.shields.io/github/license/resuminator/motif?style=flat-square) 
![GitHub package.json version](https://img.shields.io/github/package-json/v/resuminator/motif?style=flat-square)
![Twitter Follow](https://img.shields.io/twitter/follow/resuminator?style=social)

</div>

## Installation
Motif is currently NOT available as an NPM package but you may install it for any Resuminator product in the following way

With npm 
```shell
npm install -S git+ssh://git@github.com:resuminator/motif.git
```

With yarn
```shell
yarn add git+ssh://git@github.com:resuminator/motif.git
```

## Usage
Once you have installed the library, you can causally import the components and use them in the following way

```js
import { CustomButton } from "@resuminator/motif";

const App = () => <CustomButton/>
```

## Setting up development environment
Motif library is build using Typescript React and uses ES Lint rules to envoke consistency across the library. We use Prettier to sanitize our code. The configurations for both are given in the repository itself.

Start by forking the repository and then clone your private repository directly on your system.

```shell
$ git clone https://github.com/<your-username>/motif.git
```

Set the `upstream` for fetching changes later

```shell
$ git remote add upstream https://github.com/resuminator/motif.git
```

Finally fetch all the remotes by executing

```shell
$ git fetch --all
```

Once the repository is correctly initialized install all the dependencies and run the [Storybook](https://storybook.js.org/) to see all the components in the library.

```shell
npm install
```

```shell
npm run storybook
```
