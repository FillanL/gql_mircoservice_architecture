# gql_mircoservice_architecture
BDD 
no databases attached, 
data will be rest to a static array each time server is stated


to run locally without docker:
cd/api_gateway
then npm run dev
--------
or 
--------
cd/user_service
then npm run dev


------------
    Docker
------------
in main directory:
docker-compose up --build

#gql playground
- if running on docker, env will be set to prod
- will not be able to interact with playgroud, remove prod env or use postman like GUI