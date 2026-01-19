DROP TABLE IF EXISTS users;
CREATE TABLE users
(
    user_id TEXT NOT NULL,
    password TEXT NOT NULL
);

DROP TABLE IF EXISTS leaderboard;
CREATE TABLE leaderboard
(
    user_id TEXT NOT NULL,
    score INTEGER NOT NULL
);