DROP DATABASE IF EXISTS puppypals_db;

CREATE DATABASE puppypals_db;

USE puppypals_db;

CREATE TABLE Dogs (
        ID int auto_increment,
        Dog_Name varchar(50) NOT NULL,
        Age int NOT NULL,
        Sex varchar(1) NOT NULL,
        Size varchar(10) NOT NULL,
        Personality varchar(500),
        PRIMARY KEY (ID)     
);

-- CREATE TABLE User (
--         ID int auto_increment,
--         User_FName varchar(50) NOT NULL,
--         User_LName varchar(50) NOT NULL,
--         Zip int NOT NULL,
--         Phone varchar(20) NOT NULL,
--         Email varchar(50) NOT NULL,
--         Comments varchar(500),
--         PRIMARY KEY (ID)     
-- );

SELECT * FROM Dogs;
-- SELECT * FROM User;


INSERT into Dogs (Dog_Name,Age,Sex,Size,Personality)
VALUES 
("Buddy",3,"M","M","I'm a little shy at first but then get really playful once I get to know you."),
("Lucy",4,"F","M","I'm very outgoing and social and love everyone.  Let's go play together!"),
("Rufus",2,"M","S","I'm a little timid, but would love to make friends."),
("Tara",8,"F","S","I can be bossy, but don't take it personally."),
("Fred",5,"M","L","I just like everyone. Especially girls!"),
("Dave",6,"M","L","I'm older but still very active. Let's go chase a ball!"),
("Kona",3,"F","M","I love chasing things. Let me chase you!"),
("Ruby",1,"F","S","I'm still learning my manners. Thanks for your patience."),
("Cash",2,"M","L","I love anything I can go fetch!"),
("Ace",4,"M","M","I will try to herd you and everyone else!"),
("Chibi",2,"F","S","I'm tiny but have lots of energy!"),
("Cowboy",5,"M","S","I'm a typical terrier.  Non-stop energy!"),
("Molly",7,"F","M","I love to swim. Maybe we can find a lake nearby."),
("Coach",3,"F","S","I'm small but can probably outrun you. Want to try?"),
("Brody",4,"M","L","I'm shy, but would love to make new friends."),
("Melody",8,"F","M","I need a lot of exercise. Please help me burn some calories!"),
("Coby",6,"M","M","I love to play but also enjoy relaxing in the sun."),
("Tim",1,"M","S","I'm a kid just looking for another kid to hang with."),
("Romeo",6,"M","L","My joints are a little stiff, but still enjoy going for strolls."),
("Meatball",4,"M","M","My Mom says I need to make more friends. Won't you be my friend?");

INSERT into User (User_FName,User_LName,Zip,Phone,Email,Comments)
VALUES 
("Waylon","Dalton","94112","111-222-3333","wdalton@email.com","I'm a student and have lots of free time."),
("Justine", "Henderson", "94112","222-333-4444","jhenderson@email.com","I'm a nanny and look after a 3 year old pup."),
("Marcus","Cruz","94112","333-444-5555","mcruz@email.com","I'm new in town, and would love to meet other dog parents."),
("Abdullah","Lang","94112","444-555-6666","alang@email.com","I work from home and like to take my dog for a walk during the day"),
("Joanna","Wong","94112","555-666-7777","jwong@demail.com",""),
("Eddie","Randolph","94112","666-777-8888","erandolph@email.com",""),
("Kimberly","Chang","94112","777-888-9999","kchang@email.com",""),
("Colin","Knox","94577","888-999-1111","cknox@email.com",""),
("Suji", "Valia","94577","999-111-2222","svalia@email.com",""),
("Stephanie","Valdez","94577","888-777-6666","svaldez@email.com",""),
("Alyssa","Foster","94577","777-666-5555","afoster@email.com",""),
("Tamara","Lee","94577","666-555-4444","tlee@email.com",""),
("Brian","Freshwater","94577","555-444-3333","bfreshwater@emai.com",""),
("Chantal","Ross","94112","444-333-2222","cross@email.com",""),
("Miguel","Ramirez","94112","333-222-1111","mr@email.com",""),
("Jana","Olsen","94112","222-111-9999","jolsen@email.com",""),
("Kyle","Valentine","94577","111-555-7777","kvalentine@email.com",""),
("Scott","Lee","94577","222-888-9999","slee@email.com",""),
("Meredith","Chua","94577","444-000-7777","mchua@email.com",""),
("Will","Ruvinski","94112","555-333-9999","wr@email.com","");

