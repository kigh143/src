
Creating a scalable reactjs & RN  project

The react js / react native source folder
The perfect folder format for your react / react native projects.

Are you new or and existing  to react native or react js developer and you have always found issues organizing your project in a more easy to understand way, Here is the i have created a src folder to use in your projects. its based on the top rated technologies in all the capacities of creating a scalable project. create future proof projects.

if you need help on how to use this folder hit me up and i will be help to help you get going.

Technologies used

Typescript
Redux toolkit
axios
async-storage
redux-persist
react-redux

The folder structure 

assets
/fonts/  =>  Store all your projects fonts in this folders and 
/images/ =>  Store all the files and use  the index files to export all the images into an object.
/theme/ =>   Store all the theme related stuff, constants, colors, etc
/langs/ store all the langs related file here to make you app internationalized ready.

components
/common/ => this store all the components that are common to all the project features
/features/ => this represents a feature folder that store sll the components only related to auth features 

Features
break your projects into features so that the code is more decoupled which improves maintenance.

/feature1/ add all your features related files into one folders eg auth [login.ts, register.ts, verify.ts, etc] 

HOCs

Hocs stands for higher order components and its a design pattern thats helps developer write DRY code.
basically in hia older add your Hocs 

hooks
Store and hooks logic in the folder.

navigation 
the hold all the page / screen routes in your project, i personally advice you to use react navigation v5 > to implement navigation in your project.

redux
/slices/ is where you keep all your features related slices, every features must have only one slice responsible for its state.
hook.ts / this file helps in making the state object more accessible ad your get content from the global state object, it redefines the useSelector and useDispatch imported from react-redux and it assign new aliases of useAppSelector and useAppDispatch. 
store.ts /  this defines the structure of the redux store. 

services

this user axios to help in making http requests
auth/ all the auth feature endpoints will be defined here 
axios_instance.ts / creates and export amd instance of axios with intercepts 


utils
this folder holders all helpers functions , ideally you can also use ot to make units test for some of  the business logic. 
