CREATE TABLE
    bike
    (
        id BIGINT NOT NULL,
        contact BOOLEAN NOT NULL,
        email VARCHAR,
        model VARCHAR,
        name VARCHAR,
        phone VARCHAR,
        purchase_date DATE,
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
  VALUES (1, true, 'alex.ilie@accenture.com', 'Globo MTB 29 Full Suspension', 'Alin ILIE', '416-877-1724', '05-05-2022', '1100');
INSERT INTO bike (id, contact, email, model, name, phone, purchase_date, purchase_price)
  VALUES (2, false, 'alin.ungurean@bikes.com', 'Globo Carbon Fiber Race Series', 'Alin Ungurean', '905-767-1267', '05-05-2022', '1999');
INSERT INTO bike (id, contact, email, model, name, phone, purchase_date, purchase_price)
  VALUES (3, true, 'dimtar.staykov@bmo.com', 'Globo Time Trial Blade', 'Dimitar Staykov', '563-891-5555', '05-05-2022', '2100');

INSERT INTO hibernate_sequence (next_val) VALUES (4);