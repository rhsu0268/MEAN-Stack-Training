# Tools

You will need to set up some software to get up to speed with web application development with MEAN Stack.

## git/github

The first software you want to install is git. Git is a software that allows us to do version control. It's super important in project management and collaboration.

Use the following link for installation: <https://git-scm.com/book/en/v2/Getting-Started-Installing-Git>

Make sure that you use the installer that matches the OS you are using.

Github is the web portal in which all your repositories are stored.


## Node.js

You will want to install node.js which will allow you to run a local server on your computer:

Use the following link for installation:
<https://nodejs.org/en/>

## MongoDB

This will be the database that we will be using. The installation is a bit lengthy. Follow the following steps carefully and don't move on if you run into problems:

### Mac

There are two ways to install. We will take the approach of doing it with homebrew, the depedency manager
of OSX.

Go to the root of your directory and execute the following:

```bash
$ ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

Next, execute the following:

```bash
$ brew install mongodb
```

Let's do a quick sanity check to make sure that MongoDB is actually installed. Execute the following:

```bash
$ which mongod                                                                     
```

This will give you a path indicating that mongo is indeed installed.

Now, we are not yet finished. MongoDB needs a data folder so let's create it. In your terminal execute the following:

```bash
$ sudo mkdir -p /data/db
```

Next, change the permissions of that data directory to being readable and writable:

```bash
$ sudo chmod 777 /data/db
```

Now, let's excute the following to start up our mongo server or mongodaemon:

```bash
$ mongod
```

You will see lots of output. And something like: "waiting for connections on port 27017..."

To shut down the server, hit ctrl + C 2 times.

### Windows

Follow the link to install the latest version of mongoDB:

<https://docs.mongodb.org/manual/tutorial/install-mongodb-on-windows/>

Make sure that you install the appropriate version for 32 bit or 64 bit machines.

Go to the Computer Setting and then the C: Drive.

Go into the Program files and look for the MongoDB folder.

Go into the server folder.

Look for the bin folder.

Open up Command Prompt.

Navigate to the directory that we are in.

```bash
$ cd "\Program Files\MongoDB\Server\3.0\bin"
```

Create the data directory.

```bash
$ mkdir \data\db
```

Now, you should have the folder.

Now, run the database with the following:

```bash
$ mongod
```

Now that you have installed all the neccessary components to make the project work, we can go ahead and set up the project.

## Project Setup

First, go to a directory on the computer that you want to put the project in and execute the following:

```bash
$ git clone <link>
```
Now, the project won't run now since we don't have all the node_modules required. Go inside the project root and execute the following:

```bash
$ npm install
```
npm grabs all of the dependencies listed in package.json and adds it to the project.

Now, start the MongoDB server with this command:

```bash
$ mongod
```

Finally, to start the project, execute the following:

```bash
$ npm start
```

This starts the project and uses port 3000 as a default. Go into the browser and visit http://localhost:3000. You should see the root page of the project!

Congratualations! You made it to the end. To terminate the server, hit Ctrl + C. Note that you should also terminate mongoDB as well. The command is given earlier in the walkthrough.

## Updating Repository

There are three commands you want to be familiar with when you want to make updates to your repo on github. First, add the files to staging:

```bash
$ git add --all
```
Next, give your commit a message

```bash
$ git commit -m "More changes"
```

Finally, push your commit to github:

```bash
$ git push origin master
```

## Updating Repository

Whenever changes are made, you want to pull down the latest version of the project from github:

Finally, to start the project, execute the following:

```bash
$ git pull origin master
```
