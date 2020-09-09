# Challenge

## Automate Web Scraping to Excel using Heroku

This code should allow you to scrape a page automatically, process it and email it to yourself using sendgrid based on a user defined schedule. This snippet of code will allow you to deploy your python script to Heroku and run a custom scheduler. This is meant for free accounts that do not have a credit card on file. Otherwise you would need to download add-ons but to do so you need a credit card on file. This code allows you to run a scheduler without a credit card on file. 


## Deployment to Heroku Instructions (Heroku Git)
1) Sign up for a free heroku account if you havent already done so
2) Create app ie. myapp #name of app
3) Type heroku login --> This will take you to a web based login page
4) cd to your directory on your local drive
5) Type 'git init'
6) Type 'heroku git:remote -a myapp'
7) Type 'git add .'
8) Type ' git commit -am "version 1"'
9) Type 'git push heroku master'
10) Now you need to allocate a dyno to do the work. Type 'heroku ps:scale worker=1'
11) If you want to check the logs to make sure its working type 'heroku logs --tail'

