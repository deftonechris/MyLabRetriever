CREATE DATABASE MyLabRetriever;

CREATE DATABASE MyLabRetriever;

CREATE TABLE lab_results (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    more_info TEXT
);

INSERT INTO lab_results (name, description, more_info) VALUES
    ('Test 1', 'This is a description of Test 1', 'https://example.com/test1'),
    ('Test 2', 'This is a description of Test 2', 'https://example.com/test2');