# Next.js OpenJira App

Para correr localmente, se necesita la base de datos

```
docker-compose up -d
```

- Mongo URL Local

```
Mongodb URL mongodb://localhost:27018/entriesdb
```

## Configurar las valriables de entorno

Renombrar el archivo **.env.template** a **.env**

## Llenar la base de datos con informacion de pruebas

llamar desde postman:

```
http://localhost:3000/api/seed
```
