# Cron jobs

One of the most important tools that we can use to automate certain tasks on the server on cron jobs.

"Cron" refers to a "time-based scheduler in Unix-like operating systems." Examples include Linux, Mac OS, etc.

Each task that we have is called a Cron Job.

But how does the system or server know what task to run? It turns out that there is a cron "daemon" that runs
on the system. What exactly is a daemon? A daemon is simply a program running in the background that basically
launches the Cron Job at a specific time.

# Why do we want to use Cron Jobs?

There are certain time-based tasks that we want to run.
These are tasks that need to happen at a specific time. For example, you may want to send an email
to inform the user that their membership for a magazine subscription is expiring. You might want to send a reminder
for filling out timecards every two weeks at Akira or you might want to check the inbox for incoming mail at a certain interval of time.

Notice that in all of these tasks, we want to perform a certain action at a specific time.

- We want to send an email at a **date** when the magazine subscription is expiring.
- We want to send an email *every two weeks** when it is time to fill out timecards.
- We want to check the inbox *every day* for new emails that come in.

# Node.js

You shouldn't try writing a Cron Job from scratch. Instead, you want to use a package.

Start by hunting for a good package to use for cron jobs.

Here's a good one to get you started called "node-cron": https://github.com/kelektiv/node-cron.

**Note that packages are not guaranteed to work well and you should use another one if this doesn't work for you.**

Make sure that you pull it into the project and follow the steps to set it up and test it to make sure that you pulled it in properly. Refer to the packages guide if you get stuck.

Next, carry out with development for the function that you want to build with the package. 
