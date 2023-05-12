# Simple user friendly UI for CRUD operations api's
this project is part of the docker-compose sample app project

## Technologies
- Reactjs 
- Axious

# Port
- runs on: 3000

# Instructions
- to start the app run:
```bash
  npm run start
```

- Go to: http://localhost:3000/


## Dockerfile
```bash
  # build the image
  docker build -t my-react-app .
```
```bash
  #run the container
  docker run -p 3000:3000 my-react-app

```