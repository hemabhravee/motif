<h1 align="center">🔮 Motif UI Library</h1>

<div align="center">

A UI component library for [Resuminator](https://resuminator.in) and its peer projects.
Motif is based on [Material-UI](https://material-ui.com/) to build consistent, performant, and beautiful UIs quickly. 
It provides useful wrappers around the MUI components allowing even more customization.

![GitHub](https://img.shields.io/github/license/resuminator/motif?style=flat-square) 
![GitHub package.json version](https://img.shields.io/github/package-json/v/resuminator/motif?style=flat-square)
![Twitter Follow](https://img.shields.io/twitter/follow/resuminator?style=social)

</div>

## 🧩 Installation
Motif is currently NOT available as an NPM package but you may install it for any Resuminator product in the following way

With npm 
```shell
npm install -S git+ssh://git@github.com:resuminator/motif.git
```

With yarn
```shell
yarn add git+ssh://git@github.com:resuminator/motif.git
```

## 👨🏻‍💻 Usage
Once you have installed the library, you can causally import the components and use them in the following way

```js
import { CustomButton } from "@resuminator/motif";

const App = () => <CustomButton />
```

## ⚙ Setting up development environment
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

## 🚘 Roadmap
The library shall be follwoing the design guide and the wireframes and mockups from our Figma project - [Resuminator Redesign](https://bit.ly/resuminator-figma). The roadmap will be updated accordingly with the required components. For reference we're following the [Browk UI Kit](https://www.figma.com/community/file/817436609226882468) on Figma Community.

If you wish to contribute or create a component, feel free to open an issue indicating clearly which component you wish to work on.

### ⚛ Atoms - the smallest units
'Atoms' are the smallest units which shall later make up the 'molecules' which in-turn make up 'elements' for the application. We'll be customizing some of the components from the MUI kit and export the rest of them as is. Follow the progress below.

<details>
<summary> Theming </summary>
   <li> [X] Typography
   <li> [X] UI Kit
   <li> [ ] Color Scheme
</details>
<details>
<summary> Buttons</summary>  
   <li> [ ] Secondary (Light & Dark)
   <li> [ ] Primary (Light & Dark)
   <li> [ ] With Loader
   <li> [ ] Outlined
   <li> [ ] Flat
</details>
<details>
<summary> Chip/Badges </summary>
   <li> [ ] Contained
   <li> [ ] Outlined
   <li> [ ] Tags
   <li> [ ] Pro Badge
</details>
<details>
<summary> Checkbox </summary>
   <li> [ ] Default
   <li> [ ] With Label
</details>
<details>
<summary> Inputs </summary>
   <li> [ ] Default
   <li> [ ] With Hover
   <li> [ ] With Color 
   <li> [ ] With Icon (Left/Right/Both)
   <li> [ ] With Search
</details>
<details>
<summary> Dialogs </summary>
   <li> [ ] Default
   <li> [ ] Alert
   <li> [ ] Notice
   <li> [ ] With Action
   <li> [ ] With Form
</details>
<details>
<summary> Tabs  </summary>
   <li> [ ] Default
   <li> [ ] With line highlight
   <li> [ ] With color highlight
</details>
<details>
<summary> Tooltip </summary>
   <li> [ ] With Hover
   <li> [ ] With Direction
   <li> [ ] With Action
</details>
<details>
<summary> Toggle </summary>
   <li> [ ] With Icon
   <li> [ ] With Label
</details>
<details>
<summary> Cards </summary>
   <li> [ ] Rounded Card (4px, 8px, 16px)  
   <li> [ ] Flat Cards
   <li> [ ] With Hover
</details>
<details>
<summary> Shadows </summary>
   <li> [ ] Default
   <li> [ ] Colored
   <li> [ ] Hover
   <li> [ ] Active
</details>
<details>
<summary> Logo Types </summary>
   <li> [ ] Emblem
   <li> [ ] Emblem with Text
   <li> [ ] Only Text
</details>

## 🤗 Community and Support
We're a budding community of developers and designers. 
Resuminator believes in building in public and thrives through a community who are willing to support and contribute to Resuminator and its products. 

* Join the [#design](https://discord.gg/4aCE49hzak) channel on [Resuminator's Discord Server](https://discord.gg/m8knsUfU5R) where we discuss upcoming designs and collaborate to add more sass to our product represents. 

* Reach us out on our email ([hello@resuminator.in](mailto:hello@resuminator.in)) for any suggestions and support.

* Join our [GitHub Discussions](https://github.com/resuminator/resuminator/discussions) Community for feedback and support on Resuminator or its products.
