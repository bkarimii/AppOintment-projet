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
	up(pgm) {
		pgm.createTable("uk_stations", {
			station_id: { notNull: true, primaryKey: true, type: "int8" },
			station_name: { notNull: true, type: "text" },
			sixteen_character_name: { notNull: true, type: "text" },
			longitude: { notNull: true, type: "float8" },
			latitude: { notNull: true, type: "float8" },
			crs_code: { notNull: true, type: "char(3)" },
		});
		const filePath = path.resolve(__dirname, "stations_data.csv");
		pgm.sql(`COPY uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code)
		         FROM '${filePath}' DELIMITER ',' CSV HEADER;`);
	},

	down(pgm) {
		pgm.dropTable("uk_stations");
	},
	shorthands: undefined,
};

module.exports = migration;
