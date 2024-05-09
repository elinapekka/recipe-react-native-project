# Application for recipe inspiration and shopping list for groceries
This app was created using React Native for the Mobile Programming -course (Spring 2024). With this application, I wanted to create an easy way to get inspiration for meals, as well as have a handy way to keep track of the needed groceries. 

## Key features 
+ Find recipes through different categories and areas 
+ Save recipes to get back to them later 
+ Save shopping list items directly from the recipe or separately from the shopping list screen
+ Ability to edit and delete the current shopping list items
+ The ability to set price for each of the shopping list items -> helps with budgeting

## How to use the app: 

1. Clone this repository using the terminal of your choosing (f.ex. Powershell, Git Bash...)
   ```sh
   git clone https://github.com/elinapekka/recipe-react-native-project
   ```

2. Navigate to the file in terminal and install all the packages 
   ```sh
   cd recipe-react-native-project && npm install
   ```

3. Start the application 
   ```sh
   npx expo start
   ```

4. Scan the QR code (that is given by the console) with your phone. If it didn't give you a QR code, try another terminal (f.ex. PowerShell should work). NOTE: you need to have the _Expo Go_ app downloaded on your phone. If you are using Android, you can scan the QR code using the Expo Go app. If you are using iOS, you can scan the QR code with the Camera app. 


## Technologies used

### react-navigation
This project utilizes react-navigation to navigate through the different screens. Both Tab and Stack navigators are used in this project. 

### Expo SQLite
Expo SQLite was used to create local databases for the shopping list and saved recipes. The reason why this was chosen is because it creates a _local_ database, which means that everyone who uses the app can save their own info without it being leaked outside. 

### RNEUI (themed)
The RNEUI component library was used throughout the application to provide clean way to display information and for its useful components. The 'themed' was used to change the basic components to follow certain style (like changing colors or widths). By modifying the components this way, they don't need to be changed manually multiple times throughout the application. This helps to make the app look more cohesive. 

### TheMealDB API
[TheMealDB](https://www.themealdb.com/api.php) is a free recipe API provider, which was heavily utilized throughout the application. 
