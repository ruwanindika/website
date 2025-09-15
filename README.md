# Sinhala for kids website

[sinhalaforkids.com](https://sinhalaforkids.com)

![homepage](images/webpage.png)

# Docker commandsopen -a Docker

```
open -a Docker #for Mac

docker login registry.gitlab.com # login is email address

docker build -t registry.gitlab.com/personal1741534/website/node-custom .
docker build -t registry.gitlab.com/personal1741534/website/playwrite:v1.48.1-noble .
docker build -t registry.gitlab.com/personal1741534/website/playwrite-node:20-bookworm .
docker run -it registry.gitlab.com/personal1741534/alpine:latest /bin/ash
docker run -it registry.gitlab.com/personal1741534/website/playwrite:v1.48.1-noble bash
docker push registry.gitlab.com/personal1741534/website/node-custom
docker push registry.gitlab.com/personal1741534/website/playwrite-node:20-bookworm
```
