# PlantIt! 🌱

<br />

A web-app to help keep houseplants healthy!

**Tech stack:** Java, Spring, PostgreSQL, React js, Html and CSS + React libraries react-big-calendar and react-modal.

Current features:
- a list of plants and their ideal living conditions.
- a calendar to view all plant care tasks and schedule new ones.
- a to-do list including your tasks of the day and past incomplete tasks.

![plantitapp](/Users/user/CodeClan_work/Projects/PlantApp/Pic.png)

## Install & Run (MAC OS)
1. Make sure you have PostrgeSQL, Node, Node Package Manager, JDK and IntelliJ all installed.
2. Open the command line and navigate to the folder where you want to install the app.
3. Copy-paste the below in the command line:

        git clone git@github.com:Vallalika/houseplantapp.git

    *The app folder is now created and should be visible.*
4. Open the server folder with IntelliJ and navigate to server/src/main/java/com.codeclan.houseplantapp.server
5. Right-click ServerApplication.java, then click Run.
6. Check the server is running properly by looking at the terminal in IntelliJ, usually at the bottom of the screen. After a few seconds - it should say something like *'Started ServerApplication in x seconds'.*
7. Now minimise IntelliJ, go back to your terminal, and navigate to the client folder. 
8. Install all required packages with the following command:

        npm i
         
9. Start the node server.

        npm start
        
   *Chrome will now open and show the homepage of the app.*
