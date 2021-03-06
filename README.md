# Create a scalable React-Native project structure

## This repo contains a perfect src folder format for your react-native projects.

Are you a new or an existing react native developer and you have always found issues organizing your project in an easier-to-understand structure? I have got your back, Here I have created a src folder to use in your next react native projects. This is  based on the top-rated libraries used to create a scalable R/RN project. Use this src folder to create future-proof project.

If you need help on how to use this folder hit me up and I will be happy to help you get going.

>   [Website](https://ghkatende.com)

>   [Github](https://github.com/kigh143)

>   [LinkedIn](https://www.linkedin.com/in/hakim-katende-710375148)


##  Libraries.

>   [Typescript](https://www.typescriptlang.org/) 

>   [Redux toolkit](https://redux-toolkit.js.org/)

>   [Axios](https://www.npmjs.com/package/axios)

>   [Async-storage](https://github.com/react-native-async-storage/async-storage)

>   [Redux-persist](https://www.npmjs.com/package/redux-persist)

>  [ React-redux](https://www.npmjs.com/package/react-redux)


##  The folder structure

### Assets

`assets/fonts` Store all your project fonts in this folder. you can get free fonts from google fonts.

`assets/images` Store all the image files and use the index.ts file to export all the images into an object.

`assets/theme`  Store all the theme-related files, constants, colors, etc.

`assets/langs` Store all the langs-related files here to make your app internationalized and ready.

### Components

`/common` This stores all the components that are common to all the project features screens.

`/features` This represents a feature folder that stores all the components only related to auth features

### Features

Try a break your project into features so that the code is more decoupled which improves maintenance.

`/feature1` Add all your features-related files into one folder eg auth [login.ts, register.ts, verify.ts, etc]

### HOCs

HOC stands for Higher-Order Component and it's a design pattern that helps developers write DRY code in a react and react native. use this folder to store all your HOC component files.

### Hooks

`/hooks` Store and hook logic in the folder.

### Navigation

This folder holds the app routes in your project, I would advise you to use [react-navigation](https://reactnavigation.org/) v5 or greater to implement navigation in your project.

### Redux

`/slices` is where you keep all your feature-related slices, every feature must have only one slice file that is responsible for managing its global state.

`hook.ts` it redefines the `useSelector` and `useDispatch` imported from react-redux and it assigns new aliases of `useAppSelector` and `useAppDispatch`.

`store.ts` this defines the structure of the redux store.

### Services

This uses  the Axios library to help in making HTTP requests to the server. 

`auth`  All the auth feature endpoints will be defined here, every feature will have one file in the services folder.

`axios_instance.ts` Creates and export and instance of Axios with intercepts

### Utils

This folder holds all helper functions. Ideally you can also use it to make units test for some of the business logic in your application.

##  How to use.

> Create a new react native project using : `npx react-native init AwesomeTSProject --template react-native-template-typescript`

> Clone the repository : `git clone https://github.com/kigh143/src.git`

> Copy the the src into the react native project. 

> Run this command to install the dependences : `yarn add react-redux redux-persist axios @reduxjs/toolkit @react-navigation/native@^5.x react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view @react-native-async-storage/async-storage`
