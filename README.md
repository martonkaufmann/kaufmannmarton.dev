# kaufmannmarton.dev

[![CodeFactor](https://www.codefactor.io/repository/github/martonkaufmann/kaufmannmarton.dev/badge?style=for-the-badge)](https://www.codefactor.io/repository/github/martonkaufmann/kaufmannmarton.dev)
[![CircleCI](https://circleci.com/gh/martonkaufmann/kaufmannmarton.dev/tree/master.svg?style=svg)](https://circleci.com/gh/martonkaufmann/kaufmannmarton.dev/tree/master)

## React-Static - Basic Template

To use this template, run `react-static create` and use the `basic` template.

## Example commands

### Build docker image using specific file
```
Get-Content Dockerfile | docker image build --no-cache -t kaufmannmarton.dev . -f-
```
```
Get-Content Dockerfile | docker image build --build-arg CHOKIDAR_USEPOLLING_ARG=${CHOKIDAR_USEPOLLING_ARG} --build-arg JSON_BOX_ID_ARG=${JSON_BOX_ID_ARG} --build-arg SIMPLE_FORM_ID_ARG=${SIMPLE_FORM_ID_ARG} --build-arg HOST_ARG=${HOST_ARG} --no-cache -t kaufmannmarton.dev . -f-
```

### Start the docker container
```
docker container run --rm -e JSON_BOX_ID=$JSON_BOX_ID -e SIMPLE_FORM_ID=$SIMPLE_FORM_ID -e HOST=http://localhost:3000 -p 3000:3000 -v /kaufmannmarton.dev/node_modules -v $LOCAL_PATH:/kaufmannmarton.dev kaufmannmarton.dev
```
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
