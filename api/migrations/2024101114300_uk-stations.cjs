const fs = require("fs");
const path = require("path");
const { parse } = require("csv-parse/sync");
const format = require("pg-format");

/**
 * Template for
 * {@link https://salsita.github.io/node-pg-migrate/#/migrations?id=defining-migrations defining migrations}.
 *
 * @type {{
 *   down: (pgm: import("node-pg-migrate").MigrationBuilder) => void | Promise<void>;
 *   shorthands: Record<string, import("node-pg-migrate").ColumnDefinition>;
 *   up: (pgm: import("node-pg-migrate").MigrationBuilder) => void | Promise<void>;
 * }}
 */

const migration = {
	async up(pgm) {
		pgm.createTable("uk_stations", {
			station_id: { notNull: true, primaryKey: true, type: "bigserial" },
			station_name: { notNull: true, type: "text" },
			sixteen_character_name: { notNull: true, type: "text" },
			longitude: { notNull: true, type: "float8" },
			latitude: { notNull: true, type: "float8" },
			crs_code: { notNull: true, type: "char(3)" },
		});

		const filePath = path.join(__dirname, "../ukStations.csv");
		const fileContent = fs.readFileSync(filePath, "utf8");
		const records = parse(fileContent, {
			columns: true,
			skip_empty_lines: true,
		});

		// Prepare data for bulk insertion
		const values = records.map(
			({
				station_name,
				sixteen_character_name,
				latitude,
				longitude,
				crs_code,
			}) => [
				station_name,
				sixteen_character_name,
				latitude,
				longitude,
				crs_code,
			],
		);

		const query = format(
			`INSERT INTO uk_stations (station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES %L`,
			values,
		);
		pgm.sql(query);
	},

	down(pgm) {
		pgm.dropTable("uk_stations");
	},

	shorthands: undefined,
};

module.exports = migration;
