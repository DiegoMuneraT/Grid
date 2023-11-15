FROM python:3.10-alpine3.17

WORKDIR /api

COPY requirements.txt .

RUN pip install -r requirements.txt

COPY . .

EXPOSE 8000

CMD ["python3", "manage.py", "runserver"]