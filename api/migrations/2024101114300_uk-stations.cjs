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
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1524, 'Manchester Piccadilly','MANCHESTER PIC',53.47671998,-2.228977818,'MAN')",
		);
	},

	down(pgm) {
		pgm.dropTable("uk_stations");
	},
	shorthands: undefined,
};

module.exports = migration;
