
# run the docker container

```bash
# Build the app image by runnin:
docker build -t person-api-img .

# run container from the image

docker run -p 5000:5000 person-api-img

```

# API's endpoints to test the container:
    GET: http://localhost:5000/person_obj
    POST: http://localhost:5000/person_obj
    GET: http://localhost:5000/person_obj/{id}
    PUT: http://localhost:5000/person_obj/{id} 
    DELETE: http://localhost:5000/person_obj/{id}

# public URL 
    https://hub.docker.com/r/fatma8976/person-api-img




