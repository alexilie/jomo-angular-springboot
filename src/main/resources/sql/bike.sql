CREATE TABLE
    bike
    (
        id BIGINT NOT NULL,
        contact BOOLEAN NOT NULL,
        email VARCHAR,
        model VARCHAR,
        name VARCHAR,
        phone VARCHAR,
        purchase_date DATETIME,
        purchase_price NUMERIC,
        serial_number VARCHAR,
        PRIMARY KEY (id)
    );

CREATE TABLE
    hibernate_sequence
    (
        next_val BIGINT
    );

INSERT INTO bike (id, contact, email, model, name, phone, purchase_date, purchase_price)
  VALUES (1, 1, 'alex.ilie@accenture.com', 'Globo MTB 29 Full Suspension', 'Alin ILIE', '416-877-1724', 4419619200000, '1100');
INSERT INTO bike (id, contact, email, model, name, phone, purchase_date, purchase_price)
  VALUES (2, 0, 'alin.ungurean@bikes.com', 'Globo Carbon Fiber Race Series', 'Alin Ungurean', '905-767-1267', 4419619200000, '1999');
INSERT INTO bike (id, contact, email, model, name, phone, purchase_date, purchase_price)
  VALUES (3, 1, 'dimtar.staykov@bmo.com', 'Globo Time Trial Blade', 'Dimitar Staykov', '563-891-5555', 4419619200000, '2100');

INSERT INTO hibernate_sequence (next_val) VALUES (4);