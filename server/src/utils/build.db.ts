import pool from './connect.db.js';

async function createTables() {
	try {
		console.log('Dropping tables...');
		await pool.query(`
		DROP TABLE IF EXISTS bird_sighting;
		DROP TABLE IF EXISTS location;
		DROP TABLE IF EXISTS diary;
		DROP TABLE IF EXISTS users;
		`);
		console.log('Finished dropping tables!');
		console.log('Building new tables...');
		await pool.query(`
		CREATE TABLE users (
			user_id SERIAL,
			user_email VARCHAR(100) NOT NULL,
			user_name VARCHAR(50),
			PRIMARY KEY (user_id)
		);
		CREATE TABLE diary (
			diary_id SERIAL,
			user_id INT,
			PRIMARY KEY (diary_id),
			FOREIGN KEY (user_id) REFERENCES users(user_id)
		);
		CREATE TABLE location (
			location_name VARCHAR(200),
			PRIMARY KEY (location_name)
		);
		CREATE TABLE bird_sighting (
			sight_id SERIAL,
			diary_id INT,
			location_name VARCHAR(200),
			bird_name VARCHAR(100) NOT NULL,
			sight_date DATE DEFAULT CURRENT_DATE,
			is_new BOOLEAN,
			description VARCHAR(500),
			PRIMARY KEY(sight_id),
			FOREIGN KEY (diary_id) REFERENCES diary(diary_id),
			FOREIGN KEY (location_name) REFERENCES location(location_name)
		);
		`);
		console.log('Finished building tables!');
	} catch (error) {
		console.log(error);
		throw new Error('An error occurred while building db tables.');
	}
}

async function createDummyData() {
	try {
		console.log('Adding dummy data...');
		await pool.query(`
		INSERT INTO users (user_email, user_name)
		VALUES ('wemmy@wemmy.test', 'Wemmy');
		INSERT INTO diary (user_id)
		VALUES (1);
		INSERT INTO location (location_name)
		VALUES
			('Ballena Bay, Alameda, CA'),
			('Crab Cove, Alameda, CA')
		;
		INSERT INTO bird_sighting
			(diary_id, location_name, bird_name, is_new, description)
		VALUES
			(1, 'Ballena Bay, Alameda, CA', 'Steller''s sea eagle', true, 'Huge raptor was fishing along the shoreline!'),
			(1, 'Crab Cove, Alameda, CA', 'Blue jay', false, 'Beautiful blue tail feathers.'),
			(1, 'Crab Cove, Alameda, CA', 'American coot', false, 'Saw a lot of these guys out fishing in the bay.'),
			(1, 'Ballena Bay, Alameda, CA', 'Green heron', true, 'Saw this bird with an unusual posture camped out by the yachts');
		`);
		console.log('Finished adding dummy data!');
	} catch (error) {
		console.log(error);
		throw new Error('An error occurred while adding dummy data.');
	}
}

async function buildDb() {
	try {
		await createTables();
		await createDummyData();
	} catch (error) {
		throw new Error('An error occurred while building the database');
	}
}

buildDb()
	.then(() => pool.end())
	.catch((error: Error) => {
		console.log(error);
	});
