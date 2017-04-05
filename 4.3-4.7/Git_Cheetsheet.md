# Git Cheatsheet

The following is a cheatsheet of git commands that will help you get familiar with the software.

There are four sections in this document so be sure to look through it and look at which situation you are in:

1. Cloning the project repository
2. Committing changes
3. Pulling down changes
4. Common problems

## Cloning the project repository

Suppose you made a lot of changes to your project and things are broken to the extent that you can't go back to a working version.

You have two options:

- First, if you haven't committed these changes, you can delete these changes by running the following:

```bash
git reset --hard
```

- Second, if you have made commits and don't know how to get back, simply clone the repository down again:

First, we have our clone command:

```bash
git clone https://github.com/akira-tech/meansewp
```

**Always** clone the master branch and then switch to the other that you're working on.

Now, cd into the project repository:

```bash
cd meansewp
```

Bring in your node modules with the following:

```bash
npm install
```

Finally, switch to the branch you're working on:

```bash
git checkout dev-intern
```

Make sure you put the name of the branch at the end there.

## Committing changes

Suppose you made some changes to your code and now you want to push those changes to github.

To do this, follow these three steps:

1. Add your changes to staging:

```bash
git add --all
```

2. Give your commit a message:

```bash
git commit -m "Created users table"
```

3. Push your changes to github:

```bash
git push origin dev-intern
```

Note that you push from origin to the branch you are on so if you're on the dev-intern branch, you push to dev-intern.

## Pulling down changes

Now, suppose your partner made changes to the code and you want to update your repository with those changes. This is the command to pull those changes down.

```bash
git pull origin dev-intern
```

## Common problems

Let's go over some of the common problems you might encounter:

### You are told your branch is ahead by x commits

This isn't indicative of any problem but can be cleared up with the following command:

```bash
git fetch origin
```

### You are told you have a merge conflict

This usually means that your partner has made commits and you made changes to the same file that he has made. To resolve this, you have two options.

- First, you can try to stash those changes. (This route is confusing so I don't recommend it.)

- Second, follow the steps for cloning the project repository and clone down another copy of the project. Then, systematically import the changes that you have made. (Assuming you haven't made a lot, this process shouldn't be tedious.)
