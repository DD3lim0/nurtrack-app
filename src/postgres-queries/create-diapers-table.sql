-- creation of poop_color ENUM
CREATE TYPE poop_color AS ENUM(
'red',
'green',
'yellow',
'brown',
'black',
'pale/white'
);


-- creation of consitency ENUM

CREATE TYPE consistency AS ENUM(
'solid',
'mushy',
'liquid'
);


--- Creation of diapers table


CREATE TABLE diapers(
id SERIAL PRIMARY KEY,
createdAT TIMESTAMP NOT NULL DEFAULT NOW(),
updatedAT TIMESTAMP NOT NULL DEFAULT NOW(),
color poop_color NOT NULL,
texture consistency NOT NULL,
childId Integer NOT NULL,
FOREIGN KEY (childId) REFERENCES children(id)
);



-- Enable plpgsql 
CREATE EXTENSION IF NOT EXISTS plpgsql;



--create function for updating updatedAT

CREATE or REPLACE FUNCTION "update_updatedAT"()
RETURNS TRIGGER AS '
BEGIN
	NEW."updatedAT" = NOW();
	RETURN NEW;
END;
' LANGUAGE plpgsql;

--trigger for updatedAT 
CREATE TRIGGER "updated_diapers_updateAT"
BEFORE UPDATE ON  diapers
FOR EACH ROW
EXECUTE FUNCTION "update_updatedAT"();

