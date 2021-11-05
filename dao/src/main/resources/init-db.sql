INSERT INTO director (name, surname, birth_date)
VALUES ('John', 'Smith', '1960-07-25'),
       ('Steven', 'Spielberg', '1976-01-06'),
       ('Quentin', 'Tarantino', '1963-03-27');

INSERT INTO title(name, budget, box_office, premiere_date, runtime, director_id)
VALUES ('Bridge to Therabithia', 50, 100, '2005-03-16', '130', 1),
       ('Saving Private Ryan', 200, 700, '1998-07-24', '168', 2),
       ('Kill Bill Vol. 1', 100, 500, '2001-06-11', '144', 3),
       ('Kill Bill Vol. 2', 200, 700, '2003-01-24', '155', 3);

INSERT INTO user(login, password)
VALUES ('admin', 'admin'),
       ('test', 'test')