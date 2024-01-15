CREATE DATABASE myWebsite;

-- run this after entering a database (you want to create table inside a DB)
CREATE TABLE postList(
    post_id SERIAL PRIMARY KEY, -- PRIMARY KEY: make each rows/record unique, SERIAL increase PRIMARY KEY to ensure uniqueness of each record
    DESCRIPTION VARCHAR(255) -- max chracter of 255
);