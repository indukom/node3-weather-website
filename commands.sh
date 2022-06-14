eval "$(ssh-agent -s)"
ssh-add -K ~/.ssh/id_rsa


Heroku setup:

>heroku keys:add        
Found an SSH public key at /Users/indu.admin/.ssh/id_rsa.pub
Would you like to upload it to Heroku? Yes
Uploading /Users/indu.admin/.ssh/id_rsa.pub SSH key... done


>heroku create komma-weather-application

Creating ⬢ komma-weather-application... done
https://komma-weather-application.herokuapp.com/ | https://git.heroku.com/komma-weather-application.git

> In package.json

  "scripts": {
    "start" : "node src/app.js" 
  },

> Push all the code to heroku
indu.admin@Anils-MBP web-server % git push heroku main 


> Run local server
nodemon src/app.js -e js,hbs