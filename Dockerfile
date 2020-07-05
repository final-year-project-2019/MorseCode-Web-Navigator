FROM python:3.7
MAINTAINER Adarsh Joseph "adarshjoseph97@gmail.com"
WORKDIR /app
COPY src /app

CMD ["python3","test.py"]