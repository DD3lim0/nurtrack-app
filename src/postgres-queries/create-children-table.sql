--create table query
CREATE TABLE children(
    id SERIAL PRIMARY KEY,
    fullname TEXT NOT NULL,
    birth_date DATE NOT NULL,
    "createdAT" TIMESTAMP NOT NULL DEFAULT NOW(),
    "updatedAT" TIMESTAMP NOT NULL DEFAULT NOW(),
    primary_caregiver_id INTEGER NOT NULL,
    secondary_caregiver_id INTEGER,
    FOREIGN KEY(primary_caregiver_id) REFERENCES users(id),
    FOREIGN KEY (secondary_caregiver_id) REFERENCES users(id)
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

CREATE TRIGGER "udpate_children_updatedAT"
BEFORE UPDATE ON children
FOR EACH ROW 
EXECUTE FUNCTION "update_updatedAT"();

