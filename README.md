# PlantIt! 🌱

<br />

A web-app to help keep houseplants healthy!

**Tech stack:**

- Server: Java 21, Spring Boot 3.5, Spring Data JPA (Hibernate 6.6), PostgreSQL, Lombok, Maven.
- Client: React 18, Vite 8, React Router 6, HTML and CSS + React libraries react-big-calendar and react-modal, and date-fns.

Current features:

- a list of plants and their ideal living conditions.
- a calendar to view all plant care tasks and schedule new ones.
- a to-do list including your tasks of the day and past incomplete tasks.

<img width="1399" alt="houseplant app image" src="https://user-images.githubusercontent.com/101068957/180453893-2464767b-d2f3-4de3-be98-cee973bf949d.png">

## Install & set up

You only need to do these steps once.

1.  Make sure you have the following installed:

    - JDK 21. The server targets Java 21 and won't build with an older JDK.
    - PostgreSQL 12 or newer.
    - Node.js 20.19+ or 22.12+, which Vite 8 requires. Node Package Manager (npm) comes with it.
    - IntelliJ IDEA 2023.3 or newer, for Java 21 support. It comes with Maven, so you don't need to install Maven separately.

    You can check your versions in the terminal:

        java -version
        psql --version
        node -v
2.  Open the terminal and navigate to the folder where you want to install the app.
3.  Copy-paste the below in the terminal:

        git clone git@github.com:Vallalika/houseplantapp.git

    _The app folder is now created and should be visible._

### Database

1.  Make sure PostgreSQL is running, then create the app's database:

        createdb houseplants

    _The server creates the tables itself the first time it starts._

2.  Open server/src/main/resources/application.properties and check the database login details. `spring.datasource.username` is set to `user` with an empty password. If your PostgreSQL username or password is different, change `spring.datasource.username` and `spring.datasource.password` to match.

3.  Turn on the sample data. Open server/src/main/java/com/codeclan/houseplantapp/server/components/DataLoader.java and uncomment the `@Component` line above the class:

        @Component

    _The sample data is added the first time you run the server. You'll turn this line off again in the Run section._

### Server

1. In IntelliJ, go to File → Open and select the `server` folder (the one containing `pom.xml`), not the main app folder. Accept the "Trust project" prompt. If IntelliJ doesn't recognise it as a Maven project, right-click `pom.xml` and click "Add as Maven Project".
2. Wait for IntelliJ to download the dependencies and index the project. This needs an internet connection and can take a few minutes - follow the progress bar at the bottom of the window. If the code still shows red errors afterwards, click Reload in the Maven tool window.
3. Set the project's JDK: go to File → Project Structure → Project, set SDK to your JDK 21 (or use "Download JDK" there and pick version 21), and set Language level to 21.
4. Enable annotation processing, which the project needs for Lombok: go to Settings → Build, Execution, Deployment → Compiler → Annotation Processors and tick "Enable annotation processing". IntelliJ may also offer to do this in a popup the first time it builds the project.
5. _Optional:_ check the server is set up correctly by right-clicking `src/test/java` and clicking "Run 'All Tests'". The tests don't use the database, so you can run them before PostgreSQL is set up.

### Client

1.  In your terminal, navigate to the client folder and install all required packages:

        npm i

2.  Connect the client to your local server. In the client folder, create a file named `.env.development.local` containing the server's local address followed by `/api`:

        VITE_API_URL=http://localhost:8080/api

    _8080 is Spring Boot's default, and the server uses it because no other port is set in application.properties. If you set `server.port` there, update this line to match. This file is gitignored, so it stays on your machine._

## Run

1.  Make sure PostgreSQL is running.
2.  In IntelliJ, navigate to server/src/main/java/com.codeclan.houseplantapp.server, right-click ServerApplication.java, then click Run.
3.  Check the server is running properly by looking at the terminal in IntelliJ, usually at the bottom of the screen. After a few seconds - it should say something like _'Started ServerApplication in x seconds'._
4.  **First run only:** once the server has started, the sample data is in the database. Go back to DataLoader.java and comment out the `@Component` line again:

        //@Component

    _The sample data loader runs every time the server starts and doesn't check what's already there, so leaving it on adds another copy of the sample garden, plants and tasks on each restart._

5.  Go back to your terminal, navigate to the client folder and start the client:

         npm start

    _Your default browser will now open and show the homepage of the app. The page reloads when you make changes to the client code._

**Note:** If the browser doesn't open the page automatically, navigate to http://localhost:3000.
