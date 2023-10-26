# Training app
Full stack project to keep up with training. This project was simply a playground to learn to use Node.js, React and PostgreSQL togehter. There are many other features that could be still added to the app, including testing and better configuration on running the app.

## Technologies
React, Node.js, PostgreSQL, CSS and Docker.

## Run locally
- Clone the repository to your machine and open it on your console
- `cd frontend` and `npm install`
- On other console run `docker-compose up` at the root (make sure you have docker installed, this will init the database and serve as a database to the app)
- On other console `cd backend` and `npm install`
- After that you need to make .env file on backend folder with following data:
  DATABASE_URL=postgres://postgres:mysecretpassword@localhost:5432/postgres
  PORT=3001
  SECRET=whateveryouwanttoputhere
- After that you can start both server and client
- Just run `npm start` in ./backend and ./frontend, and make sure to have docker container running (it will be if you ran docker-compose up earlier)

There will be 2 teams and 2 users populated when you start the app, admin/admin and test/test (username/password). You can use admin for altering team/user data on database, and test user to see how the app works. You can also just make some other users as well.

## Some images from the app
<img width="915" alt="Screenshot 2023-10-26 154018" src="https://github.com/Spirilo/training-app/assets/101670946/ff618bdc-24ed-42fe-b562-367289fe0bf6">
<img width="915" alt="Screenshot 2023-10-26 154051" src="https://github.com/Spirilo/training-app/assets/101670946/bdbb0221-3f48-4ea0-a47a-8048c7314885">
<img width="915" alt="Screenshot 2023-10-26 154145" src="https://github.com/Spirilo/training-app/assets/101670946/100e5d84-f00e-4e25-8cac-fc888488e849">
