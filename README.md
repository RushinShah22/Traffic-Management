# Traffic-Management
This is the backend Repo for real time traffic management

## Setup

To get a local copy of this project up and running, follow these simple steps.

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [Git](https://git-scm.com/)

### Installation

1. **Clone the repository:**
 ```sh
 git clone https://github.com/RushinShah22/https://github.com/RushinShah22/Traffic-Management.git
  ```


2. Navigate to the project directory:

```sh
cd Traffic-Management
```
3. Install dependencies:

```sh
npm install
```
Set up environment variables:
Create a .env file in the root directory and add your configuration values:

```env

DATABASE=<your_mongoDB_connection_string>
DATABASE_PASSWORD=<your_database_password>
PORT=<your_port>
```
Start the development server:

```sh
npm start
```
Open postman and use:

http://localhost:3000


## Future Features

1.) Handle async operations with mutex locks to avoid race condition.

2.) Implementing Dynamic Dijkstra for better Time Complexity.

3.) Better Error Handling.
