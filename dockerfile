FROM python:3.10-alpine3.17

WORKDIR /api

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

CMD python3 manage.py runserver 0.0.0.0:80