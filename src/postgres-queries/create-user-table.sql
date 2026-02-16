-- Users table Create statement
CREATE TABLE users(
    id SERIAL PRIMARY KEY,
    username VARCHAR(200) NOT NULL, 
    password_hash VARCHAR(200) NOT NULL, 
    email VARCHAR(250) NOT NULL UNIQUE,
    "createdAT" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAT" TIMESTAMP NOT NULL DEFAULT NOW()
);



-- Enable plpgsql
CREATE EXTENSION IF NOT EXISTS plpgsql;


--create function for updating updatedAT


CREATE OR REPLACE FUNCTION "update_updatedAT"()

RETURNS TRIGGER AS '

BEGIN 
    NEW."updatedAT" = NOW();
    RETURN NEW;
END;

' LANGUAGE plpgsql;

-- creating trigger action

CREATE TRIGGER "update_users_updatedAT"
BEFORE UPDATE ON users
FOR EACH ROW 
EXECUTE FUNCTION "update_updatedAT"();