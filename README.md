# docker-compose-Person
docker-compose sample app, the app allows you to preform CRUD operations on a person object through a user friendly UI

## technologies used
- Reactjs with axios for the front-end
- nodejs with Express for the back-end


## Instructions

### the app runs on ports 3000 & 5000 make sure their available before running
- to run using docker
```bash
# run docker-compose up to build frontend and backend images and start the app
docker-compose up

```

- to run without docker 
```bash
bash local_run.sh

```
go to: http://localhost:3000/

## Ports
### front-end:
- running on port: 3000
- url: http://localhost:3000/

### back-end:
- running on port: 5000
- url: http://localhost:5000/person_obj