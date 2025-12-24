# GraphMind: Personal Knowledge Graph Tool

## Visualize the connections in your knowledge.

This project is a full-stack web application designed to visually explore relationships between several ideas simultaneously. The graph visual environment is a D3.js interactive force-directed simulation. Data is modelled using a relational adjacency list connected through foreign-keys in PostgreSQL. The API protocol deployed is GraphQL primarily as a personal learning exercise. The backend framework of choice is Springboot and implements JWT security.

- Create, read, update, and delete nodes and relationships with ease.
- Explore and manipulate nodes and relationships in a dynamic, visually engaging graph.
- Examine graph nodes in a centralized table view for relational management.
- Secure login, registration, and JWT-based session management.
- Flexible queries and mutations for frontend and external integrations.

## How to install this example project on Docker

The fastest way to get up and running is by using Docker. No local dependencies required.

```bash
git clone https://github.com/{yourUsername}/GraphMind.git
cd GraphMind
docker compose up --build

```

## How to tweak this project for your own use cases

Since this project was predominantly a learning exercise, feel free to clone and rename this project to use for your own purposes. Be as creativeas you wish!

## Find a bug?

If you found an issue or would like to submit an improvement to this project, please submit an issue using the issues tabs above. If you would like to submit a PR with a fix, reference the issue you created!

## License

This project is licensed under the MIT License.

---

_Happy mapping!_
