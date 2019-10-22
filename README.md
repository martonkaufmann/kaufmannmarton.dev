# React-Static - Basic Template

To use this template, run `react-static create` and use the `basic` template.

# Example commands

### Build docker image using specific file
```
Get-Content Dockerfile | docker image build --no-cache -t kaufmannmarton.dev . -f-
```

### Start the docker container
```
docker container run --rm -p 3000:3000 -v /kaufmannmarton.dev/node_modules -v $LOCAL_PATH:/kaufmannmarton.dev kaufmannmarton.dev
```

### Access the docker image
```
docker run --rm -it -v $LOCAL_PATH:/kaufmannmarton.dev kaufmannmarton.dev /bin/sh
```

### Access running container
```
docker container exec -it $CONTAINER_ID /bin/sh
```

### Build css
```
./node_modules/.bin/postcss src/app.css > src/build.css
```
