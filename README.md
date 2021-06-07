# create-react-app / docker / nginx
The app FE is created using React with `create-react-app` running off nginx in a Docker image/container.
Built with automatic triggers on PR's from the _feature_ branch to the _main_ branch.
CI and testing done With TravisCI, and deployed onto Heroku
URL: https://jo3yy-docker-react-nginx.herokuapp.com/
Note: May be slow to start up as the services is paused due to services running off its respected free tier (give it time to warmup/resume)

Thanks, Joey
