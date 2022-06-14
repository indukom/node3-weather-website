eval "$(ssh-agent -s)"
ssh-add -K ~/.ssh/id_rsa


Heroku setup:

>heroku keys:add        
Found an SSH public key at /Users/indu.admin/.ssh/id_rsa.pub
Would you like to upload it to Heroku? Yes
Uploading /Users/indu.admin/.ssh/id_rsa.pub SSH key... done