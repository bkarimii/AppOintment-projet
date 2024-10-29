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
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1524, 'Abbey Wood', 'ABBEY WOOD.', 51.49077059, 0.12032557, 'ABW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1525, 'Aber', 'ABER', 51.57496069, -3.229838935, 'ABE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1526, 'Abercynon', 'ABERCYNON', 51.644706, -3.327000754, 'ACY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1527, 'Aberdare', 'ABERDARE', 51.71505747, -3.443099147, 'ABA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1528, 'Aberdeen', 'ABERDEEN.', 57.14304825, -2.097480496, 'ABD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1529, 'Aberdour', 'ABERDOUR', 56.05458044, -3.300556443, 'AUR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1530, 'Aberdovey', 'ABERDOVEY', 52.54397223, -4.057080835, 'AVY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1531, 'Abererch', 'ABERERCH', 52.89860046, -4.374195955, 'ABH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1532, 'Abergavenny', 'AGV', 51.81669124, -3.009664242, 'AGV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1533, 'Abergele & Pensarn', '-', 53.2935, -3.58261, 'AGL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1534, 'Aberystwyth', 'ABERYSTWYTH', 52.41401, -4.08174, 'AYW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1535, 'Accrington', 'ACCRINGTON', 53.7532, -2.37001, 'ACR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1536, 'Achanalt', 'ACHANALT', 57.60981331, -4.914216676, 'AAT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1537, 'Achnasheen', 'ACHNASHEEN', 57.57910082, -5.072367544, 'ACN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1538, 'Achnashellach', 'ACHNASHELLACH', 57.4820548, -5.33306294, 'ACH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1539, 'Acklington', 'ACKLINGTON', 55.3071, -1.65184, 'ACK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1540, 'Acle', 'ACLE', 52.63470623, 1.543930278, 'ACL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1541, 'Acocks Green', 'ACOCKS GREEN.', 52.44933057, -1.818984792, 'ACG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1542, 'Acton Bridge (Cheshire)', 'ACTON BRIDGE', 53.26598504, -2.60266626, 'ACB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1543, 'Acton Central', 'ACTON CENTRAL', 51.5087756, -0.26361654, 'ACC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1544, 'Acton Main Line', 'ACTON MAIN LINE', 51.51692832, -0.267630485, 'AML')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1545, 'Adderley Park', 'ADDERLEY PARK.', 52.48309476, -1.85593993, 'ADD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1546, 'Addiewell', 'ADDIEWELL', 55.84340123, -3.606517263, 'ADW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1547, 'Addlestone', 'ADDLESTONE', 51.37304695, -0.484448913, 'ASN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1548, 'Adisham', 'ADISHAM', 51.24120466, 1.19910096, 'ADM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1549, 'Adlington (Cheshire)', 'ADLINGTON CHES', 53.31957, -2.13356, 'ADC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1550, 'Adlington (Lancashire)', 'ADLINGTON LANCS', 53.6129455, -2.603061143, 'ADL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1551, 'Adwick', 'ADWICK', 53.57302304, -1.181475098, 'AWK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1552, 'Aigburth', 'AIGBURTH', 53.3645833, -2.927160737, 'AIG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1553, 'Ainsdale', 'AINSDALE', 53.60183287, -3.042669326, 'ANS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1554, 'Aintree', 'AINTREE', 53.47400907, -2.956664741, 'AIN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1555, 'Airbles', 'AIRBLES', 55.78282474, -3.994178739, 'AIR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1556, 'Airdrie', 'AIRDRIE', 55.86397274, -3.982897473, 'ADR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1557, 'Albany Park', 'ALBANY PARK', 51.43580211, 0.126411748, 'AYP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1558, 'Albrighton', 'ALBRIGHTON', 52.63795639, -2.268906298, 'ALB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1559, 'Alderley Edge', 'ALDERLEY EDGE', 53.30379521, -2.236800428, 'ALD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1560, 'Aldermaston', 'ALDERMASTON', 51.40201112, -1.138770296, 'AMT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1561, 'Aldershot', 'ALDERSHOT.', 51.24641674, -0.759860484, 'AHT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1562, 'Aldrington', 'ALDRINGTON', 50.83636472, -0.181209698, 'AGT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1563, 'Alexandra Palace', 'ALEXANDRAPALACE', 51.59829, -0.12014, 'AAP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1564, 'Alexandra Parade', 'ALEXANDRA PARADE', 55.86366362, -4.211419355, 'AXP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1565, 'Alexandria', 'ALEXANDRIA', 55.98507321, -4.577469118, 'ALX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1566, 'Alfreton', 'ALFRETON.', 53.10045706, -1.369688632, 'ALF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1567, 'Allens West', 'ALLENS WEST', 54.52411689, -1.36342611, 'ALW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1568, 'Alloa', 'ALLOA', 56.11778079, -3.79004938, 'ALO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1569, 'Alness', 'ALNESS', 57.69437787, -4.249725543, 'ASS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1570, 'Alnmouth', 'ALNMOUTH', 55.39241161, -1.636879701, 'ALM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1571, 'Alresford (Essex)', 'ALRESFORD ESSEX', 51.85400474, 0.996704746, 'ALR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1572, 'Alsager', 'ALSAGER', 53.09275298, -2.298612158, 'ASG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1573, 'Althorne (Essex)', 'ALTHORNE ESSEX', 51.64787695, 0.752499154, 'ALN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1574, 'Althorpe', 'ALTHORPE HUMBER', 53.58528974, -0.732586396, 'ALP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1575, 'Altnabreac', 'ALTNABREAC', 58.38832585, -3.705268158, 'ABC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1576, 'Alton', 'ALTON.', 51.15196497, -0.966920228, 'AON')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1577, 'Altrincham', 'ALTRINCHAM.', 53.3874545, -2.347281454, 'ALT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1578, 'Alvechurch', 'ALVECHURCH', 52.34608475, -1.967659996, 'ALV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1579, 'Ambergate', 'AMBERGATE', 53.06054078, -1.48069344, 'AMB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1580, 'Amberley', 'AMBERLEY', 50.896668, -0.541989047, 'AMY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1581, 'Amersham', 'AMERSHAM (UND)', 51.67420691, -0.607590127, 'AMR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1582, 'Ammanford', 'AMMANFORD', 51.79597767, -3.996765792, 'AMF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1583, 'Ancaster', 'ANCASTER', 52.98793249, -0.535615122, 'ANC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1584, 'Anderston', 'ANDERSTON', 55.85986476, -4.271929947, 'AND')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1585, 'Andover', 'ANDOVER.', 51.21154584, -1.49223998, 'ADV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1586, 'Anerley', 'ANERLEY', 51.41305442, -0.065914328, 'ANZ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1587, 'Angmering', 'ANGMERING', 50.8165699, -0.4893894, 'ANG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1588, 'Annan', 'ANNAN', 54.98383786, -3.262584309, 'ANN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1589, 'Anniesland', 'ANNIESLAND', 55.88949536, -4.321640769, 'ANL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1590, 'Ansdell & Fairhaven', '-', 53.74157235, -2.993056487, 'AFV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1591, 'Apperley Bridge', 'APERLYB', 53.84138, -1.703065, 'APY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1592, 'Appleby', 'APPLEBY', 54.58035366, -2.486692409, 'APP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1593, 'Appledore (Kent)', 'APPLEDORE KENT', 51.0332352, 0.816355536, 'APD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1594, 'Appleford', 'APPLEFORD', 51.63964272, -1.242139074, 'APF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1595, 'Appley Bridge', 'APPLEY BRIDGE', 53.578696, -2.719239, 'APB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1596, 'Apsley', 'APSLEY', 51.73252418, -0.462924369, 'APS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1597, 'Arbroath', 'ARBROATH', 56.55956606, -2.5889364, 'ARB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1598, 'Ardgay', 'ARDGAY', 57.88101054, -4.362578076, 'ARD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1599, 'Ardlui', 'ARDLUI', 56.3019481, -4.721642823, 'AUI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1600, 'Ardrossan Harbour', 'ARDROSSAN HBR', 55.63986185, -4.821105156, 'ADS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1601, 'Ardrossan South Beach', 'ARDROSSAN S BCH', 55.6414058, -4.801205601, 'ASB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1602, 'Ardrossan Town', 'ARDROSSAN TOWN', 55.63969607, -4.812669742, 'ADN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1603, 'Ardwick', 'ARDWICK', 53.4713637, -2.21388356, 'ADK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1604, 'Argyle Street', 'ARGYLE STREET', 55.85730754, -4.250671495, 'AGS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1605, 'Arisaig', 'ARISAIG', 56.9125214, -5.839071397, 'ARG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1606, 'Arlesey', 'ARLESEY', 52.02604, -0.26632, 'ARL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1607, 'Armadale (West Lothian)', 'ARMADALE', 55.88639, -3.685049, 'ARM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1608, 'Armathwaite', 'ARMATHWAITE', 54.8091136, -2.771682007, 'AWT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1609, 'Arnside', 'ARNSIDE', 54.20210888, -2.827766101, 'ARN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1610, 'Arram', 'ARRAM', 53.88458217, -0.42685721, 'ARR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1611, 'Arrochar & Tarbet', '-', 56.2039585, -4.722756857, 'ART')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1612, 'Arundel', 'ARUNDEL', 50.84820145, -0.546171346, 'ARU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1613, 'Ascot (Berks)', 'ASCOT (BERKS)', 51.40624634, -0.675830536, 'ACT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1614, 'Ascott-under-Wychwood', 'ASCOTT-U-WYCH', 51.86734048, -1.564058135, 'AUW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1615, 'Ash', 'ASH', 51.24959566, -0.712804737, 'ASH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1616, 'Ash Vale', 'ASH VALE', 51.27224595, -0.72164797, 'AHV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1617, 'Ashburys', 'ASHBURYS', 53.47139715, -2.194298663, 'ABY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1618, 'Ashchurch for Tewkesbury', 'ASHCHURCH', 51.99916912, -2.109057444, 'ASC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1619, 'Ashfield', 'ASHFIELD', 55.88890808, -4.249206392, 'ASF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1620, 'Ashford (Surrey)', 'ASHFORD (MIDDX)', 51.43651024, -0.468062256, 'AFS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1621, 'Ashford International', 'ASHFORD (KENT)', 51.14370672, 0.876213658, 'AFK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1622, 'Ashington', 'ASHINGTON', 55.18308937, -1.573077995, 'ASL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1623, 'Ashley', 'ASHLEY', 53.35601141, -2.341015897, 'ASY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1624, 'Ashley Down', 'Ashley Down', 51.4786762, -2.5771154, 'ASD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1625, 'Ashtead', 'ASHTEAD', 51.31788158, -0.308147338, 'AHD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1626, 'Ashton-under-Lyne', 'ASHTON U LYNE', 53.49128474, -2.093404009, 'AHN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1627, 'Ashurst (Kent)', 'ASHURST KENT', 51.12865582, 0.152661963, 'AHS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1628, 'Ashurst New Forest', 'ASHURST N FOREST', 50.88984033, -1.526640531, 'ANF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1629, 'Ashwell & Morden', 'ASHWELLMORDEN', 52.03078, -0.10978, 'AWM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1630, 'Askam', 'ASKAM', 54.18904409, -3.204522253, 'ASK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1631, 'Aslockton', 'ASLOCKTON', 52.95139426, -0.898543361, 'ALK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1632, 'Aspatria', 'ASPATRIA', 54.75932254, -3.331737575, 'ASP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1633, 'Aspley Guise', 'ASPLEY GUISE', 52.02124786, -0.632327027, 'APG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1634, 'Aston', 'ASTON.', 52.50513897, -1.871779432, 'AST')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1635, 'Atherstone', 'ATHERSTONE WARKS', 52.5789821, -1.552812353, 'ATH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1636, 'Atherton', 'ATHERTON MANCHR', 53.52901633, -2.478177715, 'ATN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1637, 'Attadale', 'ATTADALE', 57.39476556, -5.456481075, 'ATT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1638, 'Attenborough', 'ATTENBOROUGH', 52.9063664, -1.231269105, 'ATB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1639, 'Attleborough', 'ATTLEBOROUGH', 52.51426479, 1.022679778, 'ATL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1640, 'Auchinleck', 'AUCHINLECK', 55.47026554, -4.295346631, 'AUK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1641, 'Audley End', 'AUDLEY END', 52.00445153, 0.2071621, 'AUD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1642, 'Aughton Park', 'AUGHTON PARK', 53.55448798, -2.895078195, 'AUG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1643, 'Aviemore', 'AVIEMORE', 57.18905401, -3.828333974, 'AVM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1644, 'Avoncliff', 'AVONCLIFF', 51.33964614, -2.281339394, 'AVF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1645, 'Avonmouth', 'AVONMOUTH', 51.50012646, -2.698421372, 'AVN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1646, 'Axminster', 'AXMINSTER', 50.7785826, -3.00522804, 'AXM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1647, 'Aylesbury', 'AYLESBURY', 51.81389614, -0.815094966, 'AYS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1648, 'Aylesbury Vale Parkway', 'Aylebury V Pkwy', 51.83124586, -0.859832134, 'AVP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1649, 'Aylesford', 'AYLESFORD', 51.30131524, 0.466175982, 'AYL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1650, 'Aylesham', 'AYLESHAM', 51.227257, 1.209464797, 'AYH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1651, 'Ayr', 'AYR', 55.45820439, -4.626820483, 'AYR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1652, 'Bache', 'BACHE', 53.20933376, -2.892360673, 'BAC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1653, 'Baglan', 'BAGLAN', 51.61456, -3.80971, 'BAJ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1654, 'Bagshot', 'BAGSHOT', 51.36436905, -0.688659892, 'BAG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1655, 'Baildon', 'BAILDON', 53.84969683, -1.753714588, 'BLD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1656, 'Baillieston', 'BAILLIESTON', 55.84470543, -4.114497793, 'BIO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1657, 'Balcombe', 'BALCOMBE', 51.05551334, -0.136932431, 'BAB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1658, 'Baldock', 'BALDOCK', 51.99288, -0.18756, 'BDK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1659, 'Balham', 'BALHAM.', 51.44322754, -0.152421221, 'BAL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1660, 'Balloch', 'BALLOCH CENTRAL', 56.00291529, -4.583469732, 'BHC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1661, 'Balmossie', 'Balmossie', 56.4747536, -2.8402961, 'BSI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1662, 'Bamber Bridge', 'BAMBER BRIDGE', 53.72678683, -2.660769189, 'BMB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1663, 'Bamford', 'BAMFORD', 53.33901464, -1.689082177, 'BAM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1664, 'Banavie', 'BANAVIE', 56.84328828, -5.095416228, 'BNV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1665, 'Banbury', 'BANBURY.', 52.06031282, -1.328130455, 'BAN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1666, 'Bangor (Gwynedd)', 'BANGOR (GWYNEDD)', 53.22229978, -4.135891358, 'BNG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1667, 'Bank Hall', 'BANK HALL', 53.43780206, -2.987464984, 'BAH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1668, 'Banstead', 'BANSTEAD', 51.32934844, -0.213158063, 'BAD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1669, 'Barassie', 'BARASSIE', 55.5610457, -4.651129008, 'BSS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1670, 'Bardon Mill', 'BARDON MILL', 54.97449387, -2.346497864, 'BLL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1671, 'Bare Lane', 'BARE LANE', 54.07533066, -2.835940378, 'BAR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1672, 'Bargeddie', 'BARGEDDIE', 55.8517241, -4.071741852, 'BGI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1673, 'Bargoed', 'BARGOED', 51.69230767, -3.229689376, 'BGD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1674, 'Barking', 'BARKING', 51.54004123, 0.080793383, 'BKG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1675, 'Barking Riverside', 'BARKRIV', 51.519108, 0.114764, 'BGV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1676, 'Barlaston', 'BARLASTON', 52.94288578, -2.168112728, 'BRT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1677, 'Barming', 'BARMING', 51.2848921, 0.478963755, 'BMG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1678, 'Barmouth', 'BARMOUTH', 52.72233, -4.05647, 'BRM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1679, 'Barnehurst', 'BARNEHURST', 51.46484925, 0.160876915, 'BNH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1680, 'Barnes', 'BARNES', 51.46706806, -0.240724454, 'BNS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1681, 'Barnes Bridge', 'BARNES BRIDGE', 51.47173404, -0.252064268, 'BNI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1682, 'Barnetby', 'BARNETBY', 53.57424146, -0.409705665, 'BTB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1683, 'Barnham', 'BARNHAM', 50.83089289, -0.639679689, 'BAA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1684, 'Barnhill', 'BARNHILL', 55.87782761, -4.223416311, 'BNL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1685, 'Barnsley', 'BARNSLEY.', 53.55462662, -1.477078446, 'BNY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1686, 'Barnstaple', 'BARNSTAPLE', 51.07396111, -4.063153416, 'BNP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1687, 'Barnt Green', 'BARNT GREEN', 52.36109392, -1.992466617, 'BTG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1688, 'Barrhead', 'BARRHEAD', 55.80373712, -4.397280292, 'BRR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1689, 'Barrhill', 'BARRHILL', 55.0969965, -4.781779564, 'BRL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1690, 'Barrow Haven', 'BARROW HAVEN', 53.6971445, -0.391442806, 'BAV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1691, 'Barrow-in-Furness', 'BARROW IN FURNSS', 54.1190048, -3.226129301, 'BIF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1692, 'Barrow-upon-Soar', 'BARROW UPON SOAR', 52.75028353, -1.149568919, 'BWS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1693, 'Barry', 'BARRY', 51.39678181, -3.284997567, 'BRY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1694, 'Barry Docks', 'BARRY DOCKS', 51.40244097, -3.260715837, 'BYD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1695, 'Barry Island', 'BARRY ISLAND', 51.39241248, -3.273376317, 'BYI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1696, 'Barry Links', 'BARRY LINKS', 56.49313971, -2.745435354, 'BYL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1697, 'Barton-on-Humber', 'BARTON ON HUMBER', 53.68883974, -0.443251195, 'BAU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1698, 'Basildon', 'BASILDON.', 51.56811146, 0.456795696, 'BSO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1699, 'Basingstoke', 'BASINGSTOKE.', 51.26835654, -1.087259112, 'BSK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1700, 'Bat & Ball', '-', 51.28975825, 0.194239522, 'BBL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1701, 'Bath Spa', 'BATH SPA.', 51.37768276, -2.357034178, 'BTH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1702, 'Bathgate', 'BATHGATE', 55.89911208, -3.640968553, 'BHG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1703, 'Batley', 'BATLEY', 53.70914805, -1.622728738, 'BTL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1704, 'Battersby', 'BATTERSBY', 54.45768979, -1.092979104, 'BTT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1705, 'Battersea Park', 'BATTERSEA PARK', 51.47733308, -0.148162967, 'BAK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1706, 'Battle', 'BATTLE', 50.91291092, 0.494707026, 'BAT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1707, 'Battlesbridge', 'BATTLESBRIDGE', 51.62486557, 0.56580343, 'BLB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1708, 'Bayford', 'BAYFORD', 51.75772, -0.0956, 'BAY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1709, 'Beaconsfield', 'BEACONSFIELD', 51.61129066, -0.643817675, 'BCF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1710, 'Bearley', 'BEARLEY', 52.24442123, -1.750263853, 'BER')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1711, 'Bearsden', 'BEARSDEN', 55.91714482, -4.332896496, 'BRN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1712, 'Bearsted', 'BEARSTED', 51.27581786, 0.577588734, 'BSD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1713, 'Beasdale', 'BEASDALE', 56.8995283, -5.763793188, 'BSL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1714, 'Beaulieu Park', 'BEAULIEU PARK', 51.75713, 0.519782, 'BPA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1715, 'Beaulieu Road', 'BEAULIEU ROAD', 50.85503752, -1.504758891, 'BEU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1716, 'Beauly', 'BEAULY', 57.47820537, -4.469945682, 'BEL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1717, 'Bebington', 'BEBINGTON', 53.35767221, -3.003642726, 'BEB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1718, 'Beccles', 'BECCLES.', 52.45854162, 1.569508099, 'BCC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1719, 'Beckenham Hill', 'BECKENHAM HILL', 51.42481875, -0.016509356, 'BEC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1720, 'Beckenham Junction', 'BECKENHAM JN', 51.41150888, -0.027152, 'BKJ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1721, 'Bedford', 'BEDFORD', 52.1362, -0.47944, 'BDM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1722, 'Bedford St Johns', 'BEDFORD ST JOHNS', 52.12949203, -0.467502781, 'BSJ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1723, 'Bedhampton', 'BEDHAMPTON', 50.85394444, -0.995823664, 'BDH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1724, 'Bedlington', 'BEDLINGTON', 55.14062956, -1.569243825, 'BEJ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1725, 'Bedminster', 'BEDMINSTER', 51.44008674, -2.594156901, 'BMT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1726, 'Bedworth', 'BEDWORTH', 52.47931356, -1.467391189, 'BEH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1727, 'Bedwyn', 'BEDWYN', 51.37963498, -1.598795279, 'BDW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1728, 'Beeston', 'BEESTON', 52.92077475, -1.207661803, 'BEE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1729, 'Bekesbourne', 'BEKESBOURNE', 51.26136142, 1.136717912, 'BKS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1730, 'Belle Vue', 'BELLE VUE', 53.46216055, -2.180399301, 'BLV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1731, 'Bellgrove', 'BELLGROVE', 55.85711966, -4.225428982, 'BLG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1732, 'Bellingham', 'BELLINGHAM LDN', 51.43387812, -0.020433206, 'BGM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1733, 'Bellshill', 'BELLSHILL', 55.81655045, -4.025178029, 'BLH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1734, 'Belmont', 'BELMONT', 51.34413926, -0.199487206, 'BLM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1735, 'Belper', 'BELPER', 53.02459133, -1.482616227, 'BLP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1736, 'Beltring', 'BELTRING', 51.20470355, 0.403498536, 'BEG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1737, 'Belvedere', 'BELVEDERE', 51.49199068, 0.152076006, 'BVD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1738, 'Bempton', 'BEMPTON', 54.12829569, -0.180427625, 'BEM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1739, 'Ben Rhydding', 'BEN RHYDDING', 53.92617737, -1.79742789, 'BEY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1740, 'Benfleet', 'BENFLEET.', 51.54394909, 0.561723002, 'BEF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1741, 'Bentham', 'BENTHAM', 54.11579786, -2.510912928, 'BEN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1742, 'Bentley (Hampshire)', 'BENTLEY (HANTS)', 51.18122986, -0.868130903, 'BTY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1743, 'Bentley (South Yorkshire)', 'BENTLEY S YORKS', 53.54369067, -1.15155621, 'BYK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1744, 'Bere Alston', 'BERE ALSTON', 50.4855868, -4.200398271, 'BAS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1745, 'Bere Ferrers', 'BERE FERRERS', 50.45085678, -4.181881299, 'BFE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1746, 'Berkhamsted', 'BERKHAMSTED', 51.76313738, -0.562005134, 'BKM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1747, 'Berkswell', 'BERKSWELL.', 52.39589581, -1.642844919, 'BKW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1748, 'Bermuda Park', 'BERMPRK', 52.504479, -1.473879, 'BEP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1749, 'Berney Arms', 'BERNEY ARMS', 52.58980986, 1.630392836, 'BYA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1750, 'Berry Brow', 'BERRY BROW', 53.62105489, -1.79343383, 'BBW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1751, 'Berrylands', 'BERRYLANDS', 51.39904691, -0.28071427, 'BRS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1752, 'Berwick (Sussex)', 'BERWICK (SUSSEX)', 50.84037214, 0.166026428, 'BRK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1753, 'Berwick-upon-Tweed', 'BERWICK ON TWEED', 55.77482692, -2.011127048, 'BWK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1754, 'Bescar Lane', 'BESCAR LANE', 53.62355392, -2.914683023, 'BES')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1755, 'Bescot Stadium', 'BESCOT STADIUM.', 52.56274493, -1.99110442, 'BSC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1756, 'Betchworth', 'BETCHWORTH', 51.24818664, -0.266974147, 'BTO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1757, 'Bethnal Green', 'BETHNAL GREEN', 51.52446476, -0.059754817, 'BET')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1758, 'Betws-y-Coed', 'BETWS Y COED', 53.092088, -3.800879188, 'BYC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1759, 'Beverley', 'BEVERLEY', 53.84230315, -0.42388287, 'BEV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1760, 'Bexhill', 'BEXHILL', 50.84103549, 0.477034087, 'BEX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1761, 'Bexley', 'BEXLEY', 51.44080011, 0.148229166, 'BXY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1762, 'Bexleyheath', 'BEXLEYHEATH', 51.46355285, 0.133460723, 'BXH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1763, 'Bicester North', 'BICESTER NORTH', 51.90349153, -1.150376878, 'BCS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1764, 'Bicester Village', 'BICESTER VILLAGE', 51.89263668, -1.149428202, 'BIT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1765, 'Bickley', 'BICKLEY', 51.40039232, 0.044255507, 'BKL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1766, 'Bidston', 'BIDSTON', 53.40914752, -3.078570263, 'BID')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1767, 'Biggleswade', 'BIGGLESWADE', 52.08469, -0.26118, 'BIW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1768, 'Bilbrook', 'BILBROOK', 52.6237314, -2.186091807, 'BBK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1769, 'Billericay', 'BILLERICAY.', 51.62889045, 0.418635763, 'BIC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1770, 'Billingham', 'BILLINGHAM CLEVE', 54.60632344, -1.278542318, 'BIL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1771, 'Billingshurst', 'BILLINGSHURST', 51.01519557, -0.450295608, 'BIG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1772, 'Bingham', 'BINGHAM', 52.95457509, -0.952051798, 'BIN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1773, 'Bingley', 'BINGLEY', 53.84840967, -1.836944749, 'BIY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1774, 'Birchgrove', 'BIRCHGROVE', 51.52174013, -3.203468175, 'BCG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1775, 'Birchington-on-Sea', 'BIRCHINGTON', 51.37749929, 1.301424075, 'BCH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1776, 'Birchwood', 'BIRCHWOOD', 53.41196101, -2.528015343, 'BWD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1777, 'Birkbeck', 'BIRKBECK', 51.40390126, -0.056235874, 'BIK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1778, 'Birkdale', 'BIRKDALE', 53.63353433, -3.014715579, 'BDL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1779, 'Birkenhead Central', 'BIRKENHEAD CTL', 53.38900094, -3.019416498, 'BKC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1780, 'Birkenhead Hamilton Square', 'BIRKENHEAD H SQ', 53.39471293, -3.013687789, 'BKQ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1781, 'Birkenhead North', 'BIRKENHEAD NORTH', 53.40484222, -3.057401666, 'BKN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1782, 'Birkenhead Park', 'BIRKENHEAD PARK', 53.3978198, -3.039179402, 'BKP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1783, 'Birmingham International', 'BIRMINGHAM INTL', 52.45081461, -1.725863394, 'BHI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1784, 'Birmingham Moor Street', 'BIRMINGHAM M ST', 52.479088, -1.89246908, 'BMO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1785, 'Birmingham New Street', 'BIRMINGHAM N ST', 52.47819419, -1.898360826, 'BHM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1786, 'Birmingham Snow Hill', 'BIRMINGHAM SN HL', 52.48358956, -1.899820964, 'BSW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1787, 'Bishop Auckland', 'BISHOP AUCKLAND', 54.65747215, -1.677565289, 'BIA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1788, 'Bishopbriggs', 'BISHOPBRIGGS', 55.90386474, -4.224906239, 'BBG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1789, 'Bishops Stortford', 'BISHOPS STRTFORD', 51.86669627, 0.164908628, 'BIS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1790, 'Bishopstone (Sussex)', 'BISHOPSTONE SSEX', 50.78013589, 0.082763046, 'BIP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1791, 'Bishopton (Renfrewshire)', 'BISHOPTON SCLYDE', 55.9021483, -4.50156706, 'BPT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1792, 'Bitterne', 'BITTERNE', 50.91844496, -1.376987648, 'BTE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1793, 'Blackburn', 'BLACKBURN', 53.74652637, -2.479127511, 'BBN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1794, 'Blackheath', 'BLACKHEATH', 51.46576408, 0.008302376, 'BKH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1795, 'Blackhorse Road', 'BLACKHORSE ROAD', 51.58620755, -0.041245833, 'BHO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1796, 'Blackpool North', 'BLACKPOOL NORTH', 53.82192857, -3.049280829, 'BPN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1797, 'Blackpool Pleasure Beach', 'BLACKPOOL P BCH', 53.78824428, -3.053813568, 'BPB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1798, 'Blackpool South', 'BLACKPOOL SOUTH', 53.7986229, -3.049063314, 'BPS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1799, 'Blackridge', 'BLACKRIDGE', 55.883679, -3.750483, 'BKR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1800, 'Blackrod', 'BLACKROD', 53.59153702, -2.569533036, 'BLK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1801, 'Blackwater', 'BLACKWATER', 51.33181014, -0.777022615, 'BAW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1802, 'Blaenau Ffestiniog', 'BLAENAU FFEST.', 52.99456764, -3.938602387, 'BFF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1803, 'Blair Atholl', 'BLAIR ATHOLL', 56.7655294, -3.850217553, 'BLA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1804, 'Blairhill', 'BLAIRHILL', 55.86658923, -4.042166208, 'BAI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1805, 'Blake Street', 'BLAKE STREET.', 52.604897, -1.844908831, 'BKT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1806, 'Blakedown', 'BLAKEDOWN', 52.40618415, -2.17635507, 'BKD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1807, 'Blantyre', 'BLANTYRE', 55.79755181, -4.086413678, 'BLT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1808, 'Blaydon', 'BLAYDON', 54.96578715, -1.712587399, 'BLO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1809, 'Bleasby', 'BLEASBY', 53.04169182, -0.942482306, 'BSB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1810, 'Bletchley', 'BLETCHLEY', 51.99534498, -0.736316135, 'BLY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1811, 'Bloxwich', 'BLOXWICH.', 52.61821329, -2.011476946, 'BLX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1812, 'Bloxwich North', 'BLOXWICH NORTH', 52.62567399, -2.019161042, 'BWN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1813, 'Blundellsands & Crosby', 'BLUNDELLSANDS', 53.48769659, -3.03986789, 'BLN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1814, 'Blyth Bebside', 'BLYTH BEBSIDE', 55.12728738, -1.558587759, 'BLI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1815, 'Blythe Bridge', 'BLYTHE BRIDGE', 52.96816538, -2.066959695, 'BYB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1816, 'Bodmin Parkway', 'BODMIN PARKWAY', 50.44585588, -4.662971107, 'BOD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1817, 'Bodorgan', 'BODORGAN', 53.20431918, -4.418022835, 'BOR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1818, 'Bognor Regis', 'BOGNOR REGIS.', 50.78655324, -0.676179036, 'BOG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1819, 'Bogston', 'BOGSTON', 55.93703054, -4.711389983, 'BGS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1820, 'Bolton', 'BOLTON.', 53.57415749, -2.42582971, 'BON')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1821, 'Bolton-upon-Dearne', 'BOLTON ON DEARNE', 53.51901464, -1.312227491, 'BTD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1822, 'Bond Street (Elizabeth line)', 'BONDSTREET', 51.51435128, -0.148873329, 'BDS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1823, 'Bookham', 'BOOKHAM', 51.28873731, -0.384010514, 'BKA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1824, 'Bootle (Cumbria)', 'BOOTLE (CUMBRIA)', 54.29035629, -3.394902231, 'BOC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1825, 'Bootle New Strand', 'BOOTLE N STRAND', 53.45301817, -2.995347712, 'BNW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1826, 'Bootle Oriel Road', 'BOOTLE ORIEL RD', 53.44762574, -2.995221639, 'BOT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1827, 'Bordesley', 'BORDESLEY.', 52.47188154, -1.877764833, 'BBS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1828, 'Borough Green & Wrotham', '-', 51.29321653, 0.306260165, 'BRG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1829, 'Borth', 'BORTH', 52.49098, -4.0504, 'BRH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1830, 'Bosham', 'BOSHAM', 50.8427348, -0.847436637, 'BOH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1831, 'Boston', 'BOSTON.', 52.97811818, -0.031002264, 'BSN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1832, 'Botley', 'BOTLEY', 50.91680133, -1.258806196, 'BOE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1833, 'Bottesford', 'BOTTESFORD', 52.94500577, -0.796014823, 'BTF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1834, 'Bourne End', 'BOURNE END', 51.57711651, -0.710471017, 'BNE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1835, 'Bournemouth', 'BOURNEMOUTH.', 50.72752854, -1.863941342, 'BMH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1836, 'Bournville', 'BOURNVILLE.', 52.4269705, -1.926421682, 'BRV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1837, 'Bow Brickhill', 'BOW BRICKHILL', 52.00431141, -0.696072267, 'BWB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1838, 'Bow Street', 'BOW', 52.4392199, -4.0319599, 'BOW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1839, 'Bowes Park', 'BOWESPARK', 51.60728, -0.11977, 'BOP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1840, 'Bowling', 'BOWLING', 55.93106773, -4.493824427, 'BWG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1841, 'Box Hill & Westhumble', 'Box Hill', 51.25400939, -0.328478447, 'BXW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1842, 'Bracknell', 'BRACKNELL', 51.41309494, -0.751703019, 'BCE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1843, 'Bradford Forster Square', 'BRADFORD F SQ', 53.79693456, -1.752961084, 'BDQ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1844, 'Bradford Interchange', 'BRADFORD INTERCH', 53.79108522, -1.749595186, 'BDI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1845, 'Bradford-on-Avon', 'BRADFORD ON AVON', 51.34490956, -2.252339918, 'BOA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1846, 'Brading', 'BRADING', 50.67835504, -1.138722649, 'BDN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1847, 'Braintree', 'BRAINTREE.', 51.87540511, 0.556698654, 'BTR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1848, 'Braintree Freeport', 'BRAINTREE FRPORT', 51.86901047, 0.567449428, 'BTP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1849, 'Bramhall', 'BRAMHALL', 53.35998386, -2.162236693, 'BML')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1850, 'Bramley (Hampshire)', 'BRAMLEY (HANTS)', 51.33007866, -1.060987012, 'BMY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1851, 'Bramley (West Yorkshire)', 'BRAMLEY W YORKS', 53.80599077, -1.63810801, 'BLE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1852, 'Brampton (Cumbria)', 'BRAMPTON CUMBRIA', 54.93263673, -2.703813718, 'BMP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1853, 'Brampton (Suffolk)', 'BRAMPTON SUFFOLK', 52.39545244, 1.543824133, 'BRP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1854, 'Branchton', 'BRANCHTON', 55.94058491, -4.803539699, 'BCN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1855, 'Brandon', 'BRANDON', 52.45402845, 0.62473398, 'BND')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1856, 'Branksome', 'BRANKSOME', 50.72757992, -1.919197826, 'BSM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1857, 'Braystones', 'BRAYSTONES CUMBR', 54.43954367, -3.543374836, 'BYS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1858, 'Bredbury', 'BREDBURY', 53.42296542, -2.109807325, 'BDY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1859, 'Breich', 'BREICH', 55.82730421, -3.668117841, 'BRC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1860, 'Brent Cross West', 'BRENTX', 51.5687, -0.2269, 'BCZ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1861, 'Brentford', 'BRENTFORD', 51.48785748, -0.309064381, 'BFD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1862, 'Brentwood', 'BRENTWOOD.', 51.61364578, 0.30015354, 'BRE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1863, 'Bricket Wood', 'BRICKET WOOD', 51.70542949, -0.359116315, 'BWO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1864, 'Bridge of Allan', 'BRIDGE OF ALLAN', 56.15661923, -3.957226282, 'BEA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1865, 'Bridge of Orchy', 'BRIDGE OF ORCHY', 56.51584582, -4.762977191, 'BRO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1866, 'Bridgend', 'BRIDGEND.', 51.5075, -3.57621, 'BGN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1867, 'Bridgeton', 'BRIDGETON', 55.84892913, -4.22607907, 'BDG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1868, 'Bridgwater', 'BRIDGWATER.', 51.12807318, -2.99028809, 'BWT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1869, 'Bridlington', 'BRIDLINGTON', 54.08414656, -0.198719149, 'BDT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1870, 'Brierfield', 'BRIERFIELD', 53.82454874, -2.236946834, 'BRF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1871, 'Brigg', 'BRIGG', 53.54916351, -0.48611936, 'BGG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1872, 'Brighouse', 'BRIGHOUSE', 53.69821366, -1.779439708, 'BGH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1873, 'Brighton', 'BRIGHTON', 50.82895322, -0.141225193, 'BTN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1874, 'Brimsdown', 'BRIMSDOWN', 51.65528087, -0.03103974, 'BMD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1875, 'Brinnington', 'BRINNINGTON', 53.43103407, -2.130899716, 'BNT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1876, 'Bristol Parkway', 'BRISTOL PARKWAY', 51.51383574, -2.542659527, 'BPW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1877, 'Bristol Temple Meads', 'BRISTOL TEMPLE M', 51.44914299, -2.581322795, 'BRI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1878, 'Brithdir', 'BRITHDIR', 51.71030148, -3.2287299, 'BHD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1879, 'Briton Ferry', 'BRITON FERRY', 51.63789409, -3.819278922, 'BNF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1880, 'Brixton', 'BRIXTON.', 51.46330207, -0.114179004, 'BRX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1881, 'Broad Green', 'BROAD GREEN', 53.40618138, -2.893466308, 'BGE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1882, 'Broadbottom', 'BROADBOTTOM', 53.44099228, -2.016514951, 'BDB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1883, 'Broadstairs', 'BROADSTAIRS', 51.36068061, 1.433579788, 'BSR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1884, 'Brockenhurst', 'BROCKENHURST', 50.81682895, -1.573542545, 'BCU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1885, 'Brockholes', 'BROCKHOLES', 53.59716619, -1.770295861, 'BHS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1886, 'Brockley', 'BROCKLEY.', 51.46474652, -0.037813935, 'BCY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1887, 'Bromborough', 'BROMBOROUGH', 53.32184733, -2.987788553, 'BOM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1888, 'Bromborough Rake', 'BROMBOROUGH RAKE', 53.32992372, -2.989476735, 'BMR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1889, 'Bromley Cross (Lancs)', 'BROMLEY CROSS', 53.61376394, -2.409600356, 'BMC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1890, 'Bromley North', 'BROMLEY NORTH', 51.40895308, 0.017315524, 'BMN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1891, 'Bromley South', 'BROMLEY SOUTH', 51.40007, 0.017419, 'BMS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1892, 'Bromsgrove', 'BROMSGROVE', 52.32270414, -2.048374392, 'BMV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1893, 'Brondesbury', 'BRONDESBURY.', 51.54563287, -0.203081283, 'BSY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1894, 'Brondesbury Park', 'BRONDESBURY PARK', 51.54035069, -0.210499827, 'BSP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1895, 'Brookmans Park', 'BROOKMANSPK', 51.72106, -0.20455, 'BPK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1896, 'Brookwood', 'BROOKWOOD', 51.30375762, -0.635744681, 'BKO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1897, 'Broome', 'BME', 52.42278098, -2.885217916, 'BME')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1898, 'Broomfleet', 'BROOMFLEET', 53.74015046, -0.673345968, 'BMF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1899, 'Brora', 'BRORA', 58.01293309, -3.852295093, 'BRA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1900, 'Brough', 'BROUGH', 53.72724433, -0.579439167, 'BUH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1901, 'Broughty Ferry', 'BROUGHTY FERRY', 56.4671506, -2.873149715, 'BYF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1902, 'Broxbourne', 'BROXBOURNE', 51.74691233, -0.011077941, 'BXB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1903, 'Bruce Grove', 'BRUCE GROVE', 51.59297616, -0.0698303, 'BCV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1904, 'Brundall', 'BRUNDALL.', 52.61980542, 1.439275107, 'BDA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1905, 'Brundall Gardens', 'BRUNDALL GARDENS', 52.62309579, 1.418842092, 'BGA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1906, 'Brunstane', 'BRUNSTANE', 55.94250459, -3.100977841, 'BSU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1907, 'Brunswick', 'BRUNSWICK', 53.38217523, -2.975653248, 'BRW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1908, 'Bruton', 'BRUTON', 51.11162818, -2.447079134, 'BRU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1909, 'Bryn', 'BRYN', 53.49945144, -2.648183788, 'BYN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1910, 'Buckenham', 'BUCKENHAM NORFLK', 52.59776177, 1.47033814, 'BUC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1911, 'Buckley', 'BUCKLEY', 53.16271, -3.05527, 'BCK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1912, 'Bucknell', 'BUK', 52.3575573, -2.948524727, 'BUK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1913, 'Buckshaw Parkway', 'Buckshaw Parkway', 53.672825, -2.66447, 'BSV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1914, 'Bugle', 'BUGLE', 50.39994328, -4.791841896, 'BGL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1915, 'Builth Road', 'BHR', 52.16932565, -3.427045119, 'BHR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1916, 'Bulwell', 'BULWELL', 52.99971765, -1.196233543, 'BLW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1917, 'Bures', 'BURES', 51.97099242, 0.769005125, 'BUE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1918, 'Burgess Hill', 'BURGESS HILL', 50.95361465, -0.127769062, 'BUG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1919, 'Burley Park', 'BURLEY PARK', 53.81217572, -1.577912469, 'BUY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1920, 'Burley-in-Wharfedale', 'BURLEY IN WDALE', 53.90838882, -1.753521668, 'BUW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1921, 'Burnage', 'BURNAGE', 53.42192326, -2.215140157, 'BNA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1922, 'Burneside (Cumbria)', 'BURNESIDE CUMBR', 54.35530768, -2.76621552, 'BUD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1923, 'Burnham (Buckinghamshire)', 'BURNHAM BUCKS', 51.52350246, -0.646369826, 'BNM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1924, 'Burnham-on-Crouch', 'BURNHAM ON C', 51.63366373, 0.814045173, 'BUU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1925, 'Burnley Barracks', 'BURNLEY BARRACKS', 53.79124886, -2.258010878, 'BUB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1926, 'Burnley Central', 'BURNLEY CENTRAL', 53.79352327, -2.244969486, 'BNC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1927, 'Burnley Manchester Road', 'BURNLEY MANCR RD', 53.78497641, -2.248865862, 'BYM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1928, 'Burnside (South Lanarkshire)', 'BURNSIDE SCLYDE', 55.81707035, -4.203986164, 'BUI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1929, 'Burntisland', 'BURNTISLAND', 56.05706911, -3.233192254, 'BTS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1930, 'Burscough Bridge', 'BURSCOUGH BRIDGE', 53.60521267, -2.841741809, 'BCB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1931, 'Burscough Junction', 'BURSCOUGH JN', 53.59803326, -2.840087989, 'BCJ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1932, 'Bursledon', 'BURSLEDON', 50.88438037, -1.305281384, 'BUO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1933, 'Burton Joyce', 'BURTON JOYCE', 52.98409116, -1.040713371, 'BUJ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1934, 'Burton-on-Trent', 'BURTON ON TRENT.', 52.80583306, -1.642462026, 'BUT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1935, 'Bury St Edmunds', 'BURY ST EDMUNDS', 52.25377846, 0.713310161, 'BSE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1936, 'Busby', 'BUSBY', 55.78033154, -4.262194654, 'BUS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1937, 'Bush Hill Park', 'BUSH HILL PARK', 51.64152662, -0.069214254, 'BHK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1938, 'Bushey', 'BUSHEY', 51.64575127, -0.385323643, 'BSH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1939, 'Butlers Lane', 'BUTLERS LANE.', 52.59248151, -1.838014434, 'BUL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1940, 'Buxted', 'BUXTED', 50.99001094, 0.131447718, 'BXD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1941, 'Buxton', 'BUXTON.', 53.26074338, -1.912870681, 'BUX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1942, 'Byfleet & New Haw', 'BNH', 51.34979727, -0.481381942, 'BFN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1943, 'Bynea', 'BYNEA', 51.67215, -4.09907, 'BYE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1944, 'Cadoxton', 'CADOXTON', 51.41227913, -3.248907469, 'CAD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1945, 'Caergwrle', 'CAERGWRLE', 53.10855, -3.0336, 'CGW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1946, 'Caerphilly', 'CAERPHILLY.', 51.57157215, -3.218492147, 'CPH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1947, 'Caersws', 'CAERSWS', 52.51613735, -3.43250893, 'CWS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1948, 'Caldercruix', 'CALDERCRUIX', 55.88791, -3.889788, 'CAC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1949, 'Caldicot', 'CDT', 51.58648, -2.75858, 'CDT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1950, 'Caledonian Road & Barnsbury', 'CALEDONIAN ROAD', 51.54335441, -0.115197312, 'CIR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1951, 'Calstock', 'CALSTOCK', 50.49757193, -4.208711079, 'CSK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1952, 'Cam & Dursley', '-', 51.71761608, -2.359096838, 'CDU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1953, 'Camberley', 'CAMBERLEY.', 51.33645865, -0.744669753, 'CAM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1954, 'Camborne', 'CAMBORNE', 50.21042369, -5.297472083, 'CBN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1955, 'Cambridge', 'CAMBRIDGE.', 52.1945746, 0.137554552, 'CBG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1956, 'Cambridge Heath', 'CAMBRIDGE HEATH', 51.53197765, -0.057272558, 'CBH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1957, 'Cambridge North', 'CAMBNTH', 52.223, 0.1577, 'CMB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1958, 'Cambridge South', 'CAMBRIDGE SOUTH', 52.17394, 0.133536, 'CMS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1959, 'Cambuslang', 'CAMBUSLANG', 55.81959915, -4.172999527, 'CBL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1960, 'Camden Road', 'CAMDEN ROAD', 51.54194816, -0.139772041, 'CMD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1961, 'Camelon', 'CAMELON', 56.00608001, -3.817600468, 'CMO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1962, 'Cameron Bridge', 'CAMERON BRIDGE', 56.19021, -3.04535, 'CBX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1963, 'Canada Water', 'Canada Water', 51.498231, -0.050791, 'ZCW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1964, 'Canary Wharf (Elizabeth line)', 'CANWHRF', 51.5061, 0.01578, 'CWX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1965, 'Canley', 'CANLEY.', 52.39925568, -1.547576591, 'CNL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1966, 'Cannock', 'CANNOCK', 52.6861758, -2.022146266, 'CAO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1967, 'Canonbury', 'CANONBURY', 51.5483736, -0.091912065, 'CNN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1968, 'Canterbury East', 'CANTERBURY EAST', 51.27427221, 1.075977014, 'CBE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1969, 'Canterbury West', 'CANTERBURY WEST', 51.28427401, 1.075311762, 'CBW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1970, 'Cantley', 'CANTLEY', 52.57877082, 1.513426069, 'CNY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1971, 'Capenhurst', 'CAPENHURST', 53.26018901, -2.942291644, 'CPU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1972, 'Carbis Bay', 'CARBIS BAY', 50.19715063, -5.464037988, 'CBB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1973, 'Cardenden', 'CARDENDEN', 56.14124635, -3.261636609, 'CDD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1974, 'Cardiff Bay', 'CARDIFF BAY', 51.46710937, -3.16642678, 'CDB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1975, 'Cardiff Central', 'CARDIFF CENTRAL', 51.47602662, -3.179311548, 'CDF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1976, 'Cardiff Queen Street', 'CARDIFF QUEEN ST', 51.48196277, -3.170204472, 'CDQ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1977, 'Cardonald', 'CARDONALD', 55.85255382, -4.340687563, 'CDO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1978, 'Cardross', 'CARDROSS', 55.96036817, -4.653060397, 'CDR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1979, 'Carfin', 'CARFIN', 55.80733107, -3.95625467, 'CRF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1980, 'Cark & Cartmel', '-', 54.17756612, -2.972830022, 'CAK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1981, 'Carlisle', 'CARLISLE.', 54.89064626, -2.933810228, 'CAR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1982, 'Carlton', 'CARLTON', 52.96497797, -1.079253189, 'CTO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1983, 'Carluke', 'CARLUKE', 55.73125448, -3.848923307, 'CLU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1984, 'Carmarthen', 'CARMARTHEN', 51.85335799, -4.30598577, 'CMN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1985, 'Carmyle', 'CARMYLE', 55.83433026, -4.15817078, 'CML')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1986, 'Carnforth', 'CARNFORTH', 54.12969095, -2.771228496, 'CNF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1987, 'Carnoustie', 'CARNOUSTIE', 56.50055432, -2.706592848, 'CAN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1988, 'Carntyne', 'CARNTYNE', 55.85503598, -4.178652587, 'CAY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1989, 'Carpenders Park', 'CARPENDERS PARK', 51.62835063, -0.385941606, 'CPK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1990, 'Carrbridge', 'CARRBRIDGE', 57.27953805, -3.828007433, 'CAG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1991, 'Carshalton', 'CARSHALTON.', 51.3684549, -0.166366115, 'CSH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1992, 'Carshalton Beeches', 'CARSHALTON BEECH', 51.35741124, -0.169794788, 'CSB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1993, 'Carstairs', 'CARSTAIRS', 55.69103438, -3.668466894, 'CRS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1994, 'Cartsdyke', 'CARTSDYKE', 55.94220229, -4.731580258, 'CDY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1995, 'Castle Bar Park', 'CASTLE BAR PARK', 51.52297874, -0.331404502, 'CBP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1996, 'Castle Cary', 'CASTLE CARY', 51.09980387, -2.522802166, 'CLC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1997, 'Castleford', 'CASTLEFORD.', 53.72409345, -1.354656247, 'CFD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1998, 'Castleton (Manchester)', 'CASTLETON MANCHR', 53.5918608, -2.178231774, 'CAS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (1999, 'Castleton Moor', 'CASTLETON MOOR', 54.46728813, -0.946647941, 'CSM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2000, 'Caterham', 'CATERHAM', 51.28213943, -0.078302765, 'CAT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2001, 'Catford', 'CATFORD', 51.44440912, -0.026309768, 'CTF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2002, 'Catford Bridge', 'CATFORD BRIDGE', 51.44474435, -0.024856205, 'CFB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2003, 'Cathays', 'CATHAYS', 51.48890064, -3.178693049, 'CYS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2004, 'Cathcart', 'CATHCART', 55.81766156, -4.260529674, 'CCT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2005, 'Cattal', 'CATTAL', 53.99749566, -1.319772686, 'CTL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2006, 'Causeland', 'CAUSELAND', 50.40568197, -4.466485305, 'CAU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2007, 'Cefn-y-Bedd', 'CEFN Y BEDD', 53.09881997, -3.031063286, 'CYB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2008, 'Chadwell Heath', 'CHADWELL HEATH', 51.56804427, 0.128970358, 'CTH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2009, 'Chafford Hundred Lakeside', 'CHAFFORD HUNDRED', 51.48564536, 0.287236652, 'CFH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2010, 'Chalfont & Latimer', '-', 51.66810927, -0.560519102, 'CFO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2011, 'Chalkwell', 'CHALKWELL', 51.53872272, 0.670605258, 'CHW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2012, 'Chandlers Ford', 'CHANDLERS FORD', 50.98299772, -1.384401049, 'CFR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2013, 'Chapel-en-le-Frith', 'CHAPEL EN LE FRH', 53.31224546, -1.918769577, 'CEF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2014, 'Chapelton (Devon)', 'CHAPELTON DEVON', 51.01582131, -4.02437053, 'CPN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2015, 'Chapeltown (South Yorkshire)', 'CHAPELTOWN YORKS', 53.46235417, -1.466268507, 'CLN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2016, 'Chappel & Wakes Colne', '-', 51.92592031, 0.758518905, 'CWC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2017, 'Charing (Kent)', 'CHARING (KENT)', 51.20810222, 0.790345573, 'CHG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2018, 'Charing Cross (Glasgow)', 'CHARING X GLASGW', 55.86466734, -4.269812977, 'CHC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2019, 'Charlbury', 'CHARLBURY', 51.8724362, -1.489697044, 'CBY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2020, 'Charlton', 'CHARLTON', 51.48686666, 0.03098034, 'CTN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2021, 'Chartham', 'CHARTHAM', 51.25726956, 1.01806042, 'CRT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2022, 'Chassen Road', 'CHASSEN ROAD', 53.44617874, -2.368237145, 'CSR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2023, 'Chatelherault', 'CHTLRT', 55.76520989, -4.004661095, 'CTE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2024, 'Chatham', 'CHATHAM', 51.38037808, 0.521158168, 'CTM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2025, 'Chathill', 'CHATHILL', 55.53672988, -1.706378108, 'CHT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2026, 'Cheadle Hulme', 'CHEADLE HULME', 53.37594578, -2.188302225, 'CHU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2027, 'Cheam', 'CHEAM', 51.35547926, -0.214166523, 'CHE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2028, 'Cheddington', 'CHEDDINGTON', 51.85792469, -0.662146256, 'CED')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2029, 'Chelford (Cheshire)', 'CHELFORD CHES', 53.27086569, -2.279608703, 'CEL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2030, 'Chelmsford', 'CHELMSFORD ESSEX', 51.73638236, 0.468580339, 'CHM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2031, 'Chelsfield', 'CHELSFIELD', 51.3562555, 0.109079893, 'CLD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2032, 'Cheltenham Spa', 'CHELTENHAM SPA', 51.897399, -2.099625825, 'CNM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2033, 'Chepstow', 'CPW', 51.64017494, -2.671914115, 'CPW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2034, 'Cherry Tree', 'CHERRY TREE', 53.7328804, -2.518385495, 'CYT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2035, 'Chertsey', 'CHERTSEY', 51.38716506, -0.509665587, 'CHY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2036, 'Cheshunt', 'CHESHUNT', 51.70287691, -0.023951585, 'CHN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2037, 'Chessington North', 'CHESSINGTON N', 51.36426238, -0.300405044, 'CSN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2038, 'Chessington South', 'CHESSINGTON S', 51.35655091, -0.308159205, 'CSS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2039, 'Chester', 'CHESTER.', 53.19683958, -2.880125588, 'CTR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2040, 'Chester Road', 'CHESTER ROAD.', 52.53565641, -1.832473808, 'CRD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2041, 'Chester-le-Street', 'CHESTER LE ST', 54.85459856, -1.578018751, 'CLS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2042, 'Chesterfield', 'CHESTERFIELD.', 53.23824054, -1.420109085, 'CHD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2043, 'Chestfield & Swalecliffe', '-', 51.36032694, 1.067706206, 'CSW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2044, 'Chetnole', 'CHETNOLE', 50.86648406, -2.574046181, 'CNO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2045, 'Chichester', 'CHICHESTER', 50.83204016, -0.781752603, 'CCH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2046, 'Chilham', 'CHILHAM', 51.24461449, 0.97591547, 'CIL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2047, 'Chilworth', 'CHILWORTH', 51.21521009, -0.524818359, 'CHL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2048, 'Chingford', 'CHINGFORD', 51.63309432, 0.009906086, 'CHI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2049, 'Chinley', 'CHINLEY', 53.34030561, -1.944399045, 'CLY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2050, 'Chippenham', 'CHIPPENHAM', 51.46248638, -2.115402682, 'CPM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2051, 'Chipstead', 'CHIPSTEAD', 51.30932005, -0.169427771, 'CHP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2052, 'Chirk', 'CHIRK', 52.93310252, -3.065655601, 'CRK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2053, 'Chislehurst', 'CHISLEHURST', 51.40555763, 0.057426909, 'CIT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2054, 'Chiswick', 'CHISWICK', 51.48114063, -0.267834947, 'CHK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2055, 'Cholsey', 'CHOLSEY', 51.57020166, -1.158018612, 'CHO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2056, 'Chorley', 'CHORLEY', 53.65255337, -2.626775381, 'CRL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2057, 'Chorleywood', 'CHORLEYWOOD UND', 51.65424895, -0.518311668, 'CLW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2058, 'Christchurch', 'CHRISTCHURCH.', 50.73820038, -1.784549578, 'CHR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2059, 'Christs Hospital', 'CHRISTS HOSPITAL', 51.0506779, -0.363547086, 'CHH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2060, 'Church & Oswaldtwistle', '-', 53.75035199, -2.390909816, 'CTW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2061, 'Church Fenton', 'CHURCH FENTON', 53.82633993, -1.227441339, 'CHF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2062, 'Church Stretton', 'CHURCH STRETTON', 52.53743385, -2.803701777, 'CTT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2063, 'Cilmeri', 'CIM', 52.15053253, -3.456554526, 'CIM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2064, 'City Thameslink', 'CITYTHAMESLINK', 51.51394, -0.10358, 'CTK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2065, 'Clacton-on-Sea', 'CLACTON.', 51.79401273, 1.154105287, 'CLT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2066, 'Clandon', 'CLANDON', 51.26400351, -0.502759414, 'CLA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2067, 'Clapham (North Yorkshire)', 'CLAPHAM YORKS', 54.10539906, -2.409841839, 'CPY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2068, 'Clapham High Street', 'CLAPHAM HIGH ST', 51.46548416, -0.132517714, 'CLP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2069, 'Clapham Junction', 'CLAPHAM JUNCTION', 51.46419065, -0.170247351, 'CLJ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2070, 'Clapton', 'CLAPTON', 51.56164972, -0.057017955, 'CPT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2071, 'Clarbeston Road', 'CLARBESTON ROAD', 51.85182, -4.88213, 'CLR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2072, 'Clarkston', 'CLARKSTON', 55.78934082, -4.27563799, 'CKS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2073, 'Claverdon', 'CLAVERDON', 52.27710206, -1.696566679, 'CLV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2074, 'Claygate', 'CLAYGATE', 51.36121463, -0.348236165, 'CLG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2075, 'Cleethorpes', 'CLEETHORPES', 53.56192407, -0.029217393, 'CLE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2076, 'Cleland', 'CLELAND', 55.80463945, -3.910243709, 'CEA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2077, 'Clifton (Manchester)', 'CLIFTON MANCHR', 53.52223401, -2.314143209, 'CLI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2078, 'Clifton Down', 'CLIFTON DOWN', 51.46454417, -2.611749153, 'CFN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2079, 'Clitheroe', 'CLITHEROE.', 53.87347985, -2.394338568, 'CLH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2080, 'Clock House', 'CLOCK HOUSE', 51.40858783, -0.040650863, 'CLK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2081, 'Clunderwen', 'CLUNDERWEN', 51.84054563, -4.731878812, 'CUW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2082, 'Clydebank', 'CLYDEBANK', 55.90067284, -4.404218143, 'CYK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2083, 'Coatbridge Central', 'COATBRIDGE CTL', 55.86315609, -4.032397297, 'CBC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2084, 'Coatbridge Sunnyside', 'COATBRIDGE SSIDE', 55.86690882, -4.028277989, 'CBS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2085, 'Coatdyke', 'COATDYKE', 55.86433402, -4.004970414, 'COA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2086, 'Cobham & Stoke d''Abernon', '-', 51.31810024, -0.389336167, 'CSD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2087, 'Codsall', 'CODSALL', 52.62730174, -2.201767313, 'CSL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2088, 'Cogan', 'COGAN', 51.4459927, -3.189100075, 'CGN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2089, 'Colchester', 'COLCHESTER.', 51.90061619, 0.89347015, 'COL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2090, 'Colchester Town', 'COLCHESTER TOWN', 51.8865294, 0.904148555, 'CET')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2091, 'Coleshill Parkway', 'Coleshill Parkwy', 52.5165359, -1.708183055, 'CEH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2092, 'Collingham', 'COLLINGHAM', 53.14411144, -0.750383181, 'CLM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2093, 'Collington', 'COLLINGTON', 50.8392821, 0.457878337, 'CLL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2094, 'Colne', 'COLNE', 53.85484616, -2.1811716, 'CNE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2095, 'Colwall', 'COLWALL', 52.07987584, -2.356962163, 'CWL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2096, 'Colwyn Bay', 'COLWYN BAY', 53.29637709, -3.725430748, 'CWB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2097, 'Combe (Oxon)', 'COMBE (OXON)', 51.83234296, -1.392901935, 'CME')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2098, 'Commondale', 'COMMONDALE', 54.48182216, -0.974983944, 'COM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2099, 'Congleton', 'CONGLETON', 53.15787409, -2.192581008, 'CNG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2100, 'Conisbrough', 'CONISBROUGH', 53.48932729, -1.234332884, 'CNS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2101, 'Connel Ferry', 'CONNEL FERRY', 56.45233144, -5.385427005, 'CON')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2102, 'Conon Bridge', 'cononbr', 57.5617, -4.4404, 'CBD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2103, 'Cononley', 'CONONLEY', 53.91726977, -2.011236378, 'CEY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2104, 'Conway Park', 'CONWAY PARK', 53.39337776, -3.022679178, 'CNP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2105, 'Conwy', 'CONWY', 53.28011971, -3.830541495, 'CNW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2106, 'Cooden Beach', 'COODEN BEACH', 50.83336546, 0.426874784, 'COB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2107, 'Cookham', 'COOKHAM', 51.5574608, -0.722076986, 'COO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2108, 'Cooksbridge', 'COOKSBRIDGE', 50.90375256, -0.009198424, 'CBR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2109, 'Coombe Junction Halt', 'COOMBE CORNWALL', 50.44547073, -4.48193626, 'COE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2110, 'Copplestone', 'COPPLESTONE', 50.81445919, -3.751601158, 'COP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2111, 'Corbridge', 'CORBRIDGE', 54.96630507, -2.018556061, 'CRB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2112, 'Corby', 'Corby', 52.488051, -0.689243, 'COR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2113, 'Corkerhill', 'CORKERHILL', 55.83748586, -4.334287526, 'CKH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2114, 'Corkickle', 'CORKICKLE', 54.54167907, -3.582164579, 'CKL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2115, 'Corpach', 'CORPACH', 56.84280695, -5.121947882, 'CPA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2116, 'Corrour', 'CORROUR', 56.76019896, -4.690597107, 'CRR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2117, 'Coryton', 'CORYTON', 51.52036973, -3.231538797, 'COY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2118, 'Coseley', 'COSELEY.', 52.5450936, -2.085779159, 'CSY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2119, 'Cosford', 'COSFORD', 52.644968, -2.306194661, 'COS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2120, 'Cosham', 'COSHAM', 50.84208432, -1.06754988, 'CSA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2121, 'Cottingham', 'COTTINGHAM', 53.78166481, -0.406425104, 'CGM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2122, 'Cottingley', 'COTTINGLEY', 53.76783456, -1.587702959, 'COT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2123, 'Coulsdon South', 'COULSDON SOUTH', 51.31583718, -0.137884398, 'CDS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2124, 'Coulsdon Town', 'Coulston Town', 51.322434, -0.13432, 'CDN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2125, 'Coventry', 'COVENTRY.', 52.40082838, -1.513460517, 'COV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2126, 'Coventry Arena', 'COVAREN', 52.448457, -1.496628, 'CAA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2127, 'Cowden (Kent)', 'COWDEN (KENT)', 51.15563114, 0.110041555, 'CWN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2128, 'Cowdenbeath', 'COWDENBEATH', 56.11208188, -3.343182977, 'COW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2129, 'Cradley Heath', 'CRADLEY HEATH.', 52.46966253, -2.090490391, 'CRA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2130, 'Craigendoran', 'CRAIGENDORAN', 55.9947777, -4.711231697, 'CGD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2131, 'Cramlington', 'CRAMLINGTON', 55.0877699, -1.598597623, 'CRM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2132, 'Cranbrook (Devon)', 'CBRK', 50.749689, -3.4222744, 'CBK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2133, 'Craven Arms', 'CRAVEN ARMS', 52.44237, -2.8374, 'CRV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2134, 'Crawley', 'CRAWLEY.', 51.1122072, -0.186672649, 'CRW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2135, 'Crayford', 'CRAYFORD', 51.4483295, 0.178807049, 'CRY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2136, 'Crediton', 'CREDITON', 50.78342809, -3.646879885, 'CDI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2137, 'Cressing (Essex)', 'CRESSING ESSEX', 51.85234942, 0.577973167, 'CES')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2138, 'Cressington', 'CRESSINGTON', 53.35876717, -2.912008275, 'CSG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2139, 'Creswell', 'CRESWELL', 53.26403988, -1.215873919, 'CWD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2140, 'Crewe', 'CREWE', 53.08964325, -2.432977174, 'CRE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2141, 'Crewkerne', 'CREWKERNE', 50.87203517, -2.778487421, 'CKN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2142, 'Crews Hill', 'CREWSHILL', 51.68449, -0.10688, 'CWH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2143, 'Crianlarich', 'CRIANLARICH', 56.39046001, -4.618415436, 'CNR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2144, 'Criccieth', 'CRICCIETH', 52.91842819, -4.237528403, 'CCC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2145, 'Cricklewood', 'CRICKLEWOOD', 51.55872, -0.21223, 'CRI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2146, 'Croftfoot', 'CROFTFOOT', 55.81824958, -4.22831733, 'CFF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2147, 'Crofton Park', 'CROFTON PARK', 51.45519193, -0.036496434, 'CFT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2148, 'Cromer', 'CROMER.', 52.9301088, 1.292833615, 'CMR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2149, 'Cromford', 'CROMFORD', 53.11294781, -1.548786122, 'CMF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2150, 'Crookston', 'CROOKSTON', 55.84218387, -4.365941786, 'CKT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2151, 'Cross Gates', 'CROSS GATES', 53.80491752, -1.450295749, 'CRG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2152, 'Crossflatts', 'CROSSFLATTS', 53.85847792, -1.844887769, 'CFL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2153, 'Crosshill', 'CROSSHILL', 55.83326984, -4.256804153, 'COI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2154, 'Crosskeys', 'CKY', 51.62156, -3.12628, 'CKY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2155, 'Crossmyloof', 'CROSSMYLOOF', 55.83393038, -4.284311038, 'CMY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2156, 'Croston', 'CROSTON', 53.66756883, -2.77774904, 'CSO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2157, 'Crouch Hill', 'CROUCH HILL', 51.57125968, -0.116929292, 'CRH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2158, 'Crowborough', 'CROWBOROUGH', 51.04638117, 0.188023149, 'COH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2159, 'Crowhurst', 'CROWHURST', 50.88857369, 0.501354995, 'CWU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2160, 'Crowle', 'CROWLE', 53.58975345, -0.81736252, 'CWE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2161, 'Crowthorne', 'CROWTHORNE', 51.36672944, -0.819274953, 'CRN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2162, 'Croy', 'CROY.', 55.95566505, -4.035961758, 'CRO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2163, 'Crystal Palace', 'CRYSTAL PALACE', 51.4181108, -0.072604516, 'CYP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2164, 'Cuddington', 'CUDDINGTON', 53.23993338, -2.59930339, 'CUD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2165, 'Cuffley', 'CUFFLEY', 51.70872, -0.10978, 'CUF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2166, 'Culham', 'CULHAM', 51.65379512, -1.236511134, 'CUM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2167, 'Culrain', 'CULRAIN', 57.91949459, -4.404282053, 'CUA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2168, 'Cumbernauld', 'CUMBERNAULD.', 55.94201304, -3.980318658, 'CUB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2169, 'Cupar', 'CUPAR', 56.31697353, -3.008758431, 'CUP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2170, 'Curriehill', 'CURRIEHILL', 55.90055849, -3.318749653, 'CUH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2171, 'Custom House (Elizabeth line)', 'CUSTOMHOUSE', 51.509639, 0.025894, 'CUS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2172, 'Cuxton', 'CUXTON', 51.37392606, 0.46171433, 'CUX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2173, 'Cwmbach', 'CWMBACH', 51.70192641, -3.413738026, 'CMH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2174, 'Cwmbran', 'CWM', 51.65658282, -3.01622181, 'CWM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2175, 'Cynghordy', 'CYNGHORDY', 52.05150756, -3.748233148, 'CYN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2176, 'Dagenham Dock', 'DAGENHAM DOCK', 51.52629342, 0.145043194, 'DDK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2177, 'Daisy Hill', 'DAISY HILL', 53.53946635, -2.515868885, 'DSY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2178, 'Dalgety Bay', 'DALGETY BAY', 56.0420829, -3.367718989, 'DAG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2179, 'Dalmally', 'DALMALLY', 56.40117417, -4.983544174, 'DAL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2180, 'Dalmarnock', 'DALMARNOCK', 55.84207011, -4.217700309, 'DAK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2181, 'Dalmeny', 'DALMENY', 55.98630536, -3.381618779, 'DAM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2182, 'Dalmuir', 'DALMUIR', 55.91191657, -4.426678018, 'DMR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2183, 'Dalreoch', 'DALREOCH', 55.94740397, -4.5778481, 'DLR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2184, 'Dalry', 'DALRY', 55.70621143, -4.711070842, 'DLY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2185, 'Dalston (Cumbria)', 'DALSTON CUMBRIA', 54.84617418, -2.988848877, 'DLS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2186, 'Dalston Junction', 'DALS', 51.544513, -0.076215, 'DLJ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2187, 'Dalston Kingsland', 'DALSTON KINGSLND', 51.54828963, -0.075761116, 'DLK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2188, 'Dalton (Cumbria)', 'DALTON CUMBRIA', 54.15424234, -3.179010182, 'DLT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2189, 'Dalwhinnie', 'DALWHINNIE', 56.93515882, -4.246197968, 'DLW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2190, 'Danby', 'DANBY', 54.46643039, -0.910719291, 'DNY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2191, 'Danescourt', 'DANES COURT', 51.50050789, -3.233928033, 'DCT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2192, 'Danzey', 'DANZEY', 52.3243769, -1.821241229, 'DZY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2193, 'Darlington', 'DARLINGTON.', 54.52045136, -1.547328479, 'DAR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2194, 'Darnall', 'DARNALL', 53.38111164, -1.410652924, 'DAN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2195, 'Darsham', 'DARSHAM', 52.27301314, 1.523482074, 'DSM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2196, 'Dartford', 'DARTFORD', 51.44737254, 0.219261557, 'DFD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2197, 'Darton', 'DARTON', 53.58838039, -1.531651865, 'DRT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2198, 'Darwen', 'DARWEN', 53.69804478, -2.464945018, 'DWN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2199, 'Datchet', 'DATCHET', 51.48308149, -0.579416012, 'DAT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2200, 'Davenport', 'DAVENPORT', 53.39082838, -2.152579926, 'DVN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2201, 'Dawlish', 'DAWLISH', 50.58080594, -3.464647817, 'DWL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2202, 'Dawlish Warren', 'DAWLISH WARREN', 50.59905091, -3.444018179, 'DWW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2203, 'Deal', 'DEAL', 51.22304659, 1.398864195, 'DEA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2204, 'Dean (Wilts)', 'DEAN (WILTS)', 51.0422304, -1.634809477, 'DEN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2205, 'Deansgate', 'DEANSGATE G-MEX', 53.47409585, -2.251066103, 'DGT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2206, 'Deganwy', 'DEGANWY', 53.29476587, -3.833403597, 'DGY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2207, 'Deighton', 'DEIGHTON', 53.66885819, -1.75219726, 'DHN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2208, 'Delamere', 'DELAMERE', 53.2287892, -2.666559449, 'DLM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2209, 'Denby Dale', 'DENBY DALE', 53.57264355, -1.663208663, 'DBD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2210, 'Denham', 'DENHAM', 51.5788354, -0.497428347, 'DNM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2211, 'Denham Golf Club', 'DENHAM GOLF CLUB', 51.58059592, -0.517778734, 'DGC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2212, 'Denmark Hill', 'DENMARK HILL', 51.46820589, -0.08935568, 'DMK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2213, 'Dent', 'DENT', 54.28241606, -2.363597216, 'DNT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2214, 'Denton', 'DENTON', 53.45692242, -2.130226303, 'DTN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2215, 'Deptford', 'DEPTFORD', 51.4788514, -0.026263166, 'DEP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2216, 'Derby', 'DERBY.', 52.91618036, -1.463073262, 'DBY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2217, 'Derby Road (Ipswich)', 'DERBY RD IPSWICH', 52.05057196, 1.182659486, 'DBR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2218, 'Devonport', 'DEVONPORT DEVON', 50.3781945, -4.171511893, 'DPT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2219, 'Dewsbury', 'DEWSBURY.', 53.69210344, -1.633482066, 'DEW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2220, 'Didcot Parkway', 'DIDCOT PARKWAY', 51.61095504, -1.242891296, 'DID')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2221, 'Digby & Sowton', '-', 50.71370499, -3.473885692, 'DIG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2222, 'Dilton Marsh', 'DILTON MARSH', 51.24799152, -2.207421924, 'DMH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2223, 'Dinas (Rhondda)', 'DINAS MID GLAM', 51.61783077, -3.437557147, 'DMG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2224, 'Dinas Powys', 'DINAS POWYS', 51.4316643, -3.218362695, 'DNS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2225, 'Dingle Road', 'DINGLE ROAD', 51.44005367, -3.180614958, 'DGL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2226, 'Dingwall', 'DINGWALL', 57.59405759, -4.42206913, 'DIN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2227, 'Dinsdale', 'DINSDALE', 54.51473198, -1.467067384, 'DND')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2228, 'Dinting', 'DINTING', 53.44934927, -1.970306404, 'DTG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2229, 'Disley', 'DISLEY', 53.35819889, -2.042476966, 'DSL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2230, 'Diss', 'DISS.', 52.37367539, 1.123713427, 'DIS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2231, 'Dockyard (Devonport)', 'DOCKYARD DEVONPT', 50.38224968, -4.175917265, 'DOC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2232, 'Dodworth', 'DODWORTH', 53.54416241, -1.530932801, 'DOD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2233, 'Dolau', 'DOL', 52.29535707, -3.263627535, 'DOL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2234, 'Doleham', 'DOLEHAM', 50.9187472, 0.610702875, 'DLH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2235, 'Dolgarrog', 'DOLGARROG', 53.18636329, -3.822653706, 'DLG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2236, 'Dolwyddelan', 'DOLWYDDELAN', 53.05157, -3.88473, 'DWD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2237, 'Doncaster', 'DONCASTER.', 53.5214971, -1.140234479, 'DON')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2238, 'Dorchester South', 'DORCHESTER SOUTH', 50.70927877, -2.437250357, 'DCH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2239, 'Dorchester West', 'DORCHESTER WEST', 50.71094047, -2.442548773, 'DCW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2240, 'Dore & Totley', 'DORE', 53.32746933, -1.515445314, 'DOR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2241, 'Dorking (Deepdene)', 'DORKING DEEPDENE', 51.23880129, -0.324631668, 'DPD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2242, 'Dorking (Main)', 'DORKING', 51.240927, -0.32423924, 'DKG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2243, 'Dorking West', 'DORKING WEST', 51.23622304, -0.339967488, 'DKT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2244, 'Dormans', 'DORMANS', 51.15578598, -0.004302625, 'DMS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2245, 'Dorridge', 'DORRIDGE.', 52.37208286, -1.752908156, 'DDG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2246, 'Dove Holes', 'DOVE HOLES', 53.29981804, -1.890433778, 'DVH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2247, 'Dover Priory', 'DOVER PRIORY', 51.12570009, 1.305307618, 'DVP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2248, 'Dovercourt', 'DOVERCOURT', 51.93875208, 1.280629166, 'DVC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2249, 'Dovey Junction', 'DOVEY JUNCTION', 52.56437479, -3.923911977, 'DVY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2250, 'Downham Market', 'DOWNHAMMARKET', 52.60413, 0.365691, 'DOW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2251, 'Drayton Green', 'DRAYTON GREEN', 51.51602938, -0.329640681, 'DRG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2252, 'Drayton Park', 'DRAYTONPARK', 51.55309, -0.10571, 'DYP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2253, 'Drem', 'DREM', 56.00511747, -2.786046322, 'DRM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2254, 'Driffield', 'DRIFFIELD', 54.00154161, -0.434671072, 'DRF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2255, 'Drigg', 'DRIGG', 54.37696312, -3.443410921, 'DRI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2256, 'Droitwich Spa', 'DROITWICH SPA', 52.26821535, -2.158368535, 'DTW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2257, 'Dronfield', 'DRONFIELD', 53.30139118, -1.46877279, 'DRO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2258, 'Drumchapel', 'DRUMCHAPEL.', 55.90479898, -4.362874204, 'DMC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2259, 'Drumfrochar', 'DRUMFROCHAR', 55.9412369, -4.774756808, 'DFR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2260, 'Drumgelloch', 'DRUMGELLOCH', 55.86582675, -3.954080399, 'DRU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2261, 'Drumry', 'DRUMRY', 55.90457891, -4.385468258, 'DMY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2262, 'Duddeston', 'DUDDESTON.', 52.48837183, -1.871386376, 'DUD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2263, 'Dudley Port', 'DUDLEY PORT.', 52.52466179, -2.049480314, 'DDP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2264, 'Duffield', 'DUFFIELD', 52.98774917, -1.486035917, 'DFI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2265, 'Duirinish', 'DUIRINISH', 57.31938444, -5.692009059, 'DRN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2266, 'Duke Street', 'DUKE STREET', 55.85842168, -4.213039062, 'DST')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2267, 'Dullingham', 'DULLINGHAM', 52.20166503, 0.366671696, 'DUL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2268, 'Dumbarton Central', 'DUMBARTON CTL', 55.94664381, -4.566905428, 'DBC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2269, 'Dumbarton East', 'DUMBARTON EAST', 55.94223566, -4.554121225, 'DBE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2270, 'Dumbreck', 'DUMBRECK', 55.84501703, -4.300936223, 'DUM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2271, 'Dumfries', 'DUMFRIES', 55.07255321, -3.604300326, 'DMF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2272, 'Dumpton Park', 'DUMPTON PARK', 51.34570515, 1.425837546, 'DMP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2273, 'Dunbar', 'DUNBAR', 55.99828768, -2.513352988, 'DUN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2274, 'Dunblane', 'DUNBLANE', 56.18587463, -3.965483792, 'DBL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2275, 'Duncraig', 'DUNCRAIG', 57.33708399, -5.63692547, 'DCG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2276, 'Dundee', 'DUNDEE.', 56.45647618, -2.971204807, 'DEE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2277, 'Dunfermline City', 'DUNFERMLINE TOWN', 56.06817924, -3.452529288, 'DFE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2278, 'Dunfermline Queen Margaret', 'DUNFERMLINE QM', 56.08056397, -3.421467431, 'DFL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2279, 'Dunkeld & Birnam', 'DUNKELD', 56.5570421, -3.578399065, 'DKD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2280, 'Dunlop', 'DUNLOP', 55.71187096, -4.532374915, 'DNL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2281, 'Dunrobin Castle', 'DUNROBIN CASTLE', 57.98559779, -3.949447893, 'DNO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2282, 'Dunston', 'DUNSTON', 54.95005031, -1.641034364, 'DOT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2283, 'Dunton Green', 'DUNTON GREEN', 51.29648798, 0.170948548, 'DNG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2284, 'Durham', 'DURHAM.', 54.77939227, -1.581756017, 'DHM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2285, 'Durrington-on-Sea', 'DURRINGTON', 50.81752228, -0.411461916, 'DUR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2286, 'Dyce', 'DYCE', 57.20564178, -2.192327933, 'DYC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2287, 'Dyffryn Ardudwy', 'DYFFRYN ARDUDWY', 52.78886514, -4.104657014, 'DYF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2288, 'Eaglescliffe', 'EAGLESCLIFFE', 54.52943483, -1.349435972, 'EAG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2289, 'Ealing Broadway', 'EALING BROADWAY', 51.51484651, -0.301752259, 'EAL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2290, 'Earlestown', 'EARLESTOWN', 53.45114797, -2.637660072, 'ERL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2291, 'Earley', 'EARLEY', 51.44109521, -0.917992325, 'EAR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2292, 'Earlsfield', 'EARLSFIELD', 51.44199132, -0.188445946, 'EAD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2293, 'Earlswood (Surrey)', 'EARLSWOOD SURREY', 51.22732507, -0.170821639, 'ELD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2294, 'Earlswood (West Midlands)', 'EARLSWOOD W MID', 52.36659566, -1.861165822, 'EWD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2295, 'East Croydon', 'EAST CROYDON', 51.37500564, -0.092276539, 'ECR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2296, 'East Didsbury', 'EAST DIDSBURY', 53.40932638, -2.221996602, 'EDY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2297, 'East Dulwich', 'EAST DULWICH', 51.46132011, -0.080717696, 'EDW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2298, 'East Farleigh', 'EAST FARLEIGH', 51.25523373, 0.484734574, 'EFL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2299, 'East Garforth', 'EAST GARFORTH', 53.7921293, -1.370310799, 'EGF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2300, 'East Grinstead', 'EAST GRINSTEAD', 51.12626697, -0.017895018, 'EGR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2301, 'East Kilbride', 'EAST KILBRIDE', 55.76599496, -4.180218692, 'EKL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2302, 'East Linton', 'ELINTN', 55.986444, -2.661243, 'ELT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2303, 'East Malling', 'EAST MALLING', 51.28580685, 0.439284828, 'EML')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2304, 'East Midlands Parkway', 'E Midlands Pkway', 52.864306, -1.264687, 'EMD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2305, 'East Tilbury', 'EAST TILBURY', 51.48483408, 0.412932858, 'ETL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2306, 'East Worthing', 'EAST WORTHING', 50.82163957, -0.354885361, 'EWR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2307, 'Eastbourne', 'EASTBOURNE.', 50.76936955, 0.281258504, 'EBN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2308, 'Eastbrook', 'EASTBROOK', 51.43763559, -3.206148195, 'EBK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2309, 'Easterhouse', 'EASTERHOUSE', 55.85974135, -4.107164856, 'EST')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2310, 'Eastham Rake', 'EASTHAM RAKE', 53.30759993, -2.981171169, 'ERA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2311, 'Eastleigh', 'EASTLEIGH.', 50.96924196, -1.350088939, 'ESL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2312, 'Eastrington', 'EASTRINGTON', 53.75517708, -0.787632643, 'EGN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2313, 'Ebbsfleet International', 'EBSFDOM', 51.442898, 0.321002, 'EBD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2314, 'Ebbw Vale Parkway', 'EBV', 51.75677, -3.19682, 'EBV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2315, 'Ebbw Vale Town', 'EBWVTN', 51.77006, -3.20182, 'EBB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2316, 'Eccles (Manchester)', 'ECCLES (MANCHR)', 53.48537002, -2.334517274, 'ECC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2317, 'Eccles Road', 'ECCLES ROAD', 52.47090467, 0.969929467, 'ECS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2318, 'Eccleston Park', 'ECCLESTON PARK', 53.43079708, -2.780042527, 'ECL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2319, 'Edale', 'EDALE', 53.3648068, -1.816330371, 'EDL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2320, 'Eden Park', 'EDEN PARK', 51.39081565, -0.026605004, 'EDN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2321, 'Edenbridge (Kent)', 'EDENBRIDGE', 51.20843113, 0.060654046, 'EBR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2322, 'Edenbridge Town', 'EDENBRIDGE TOWN', 51.20007799, 0.067180931, 'EBT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2323, 'Edge Hill', 'EDGE HILL', 53.40262667, -2.946488903, 'EDG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2324, 'Edinburgh', 'EDINBURGH.', 55.95238716, -3.188221921, 'EDB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2325, 'Edinburgh Gateway', 'EDINGWY', 55.941, -3.32, 'EGY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2326, 'Edinburgh Park', 'EDINBURGH PARK', 55.92754466, -3.307661937, 'EDP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2327, 'Edmonton Green', 'EDMONTON GREEN', 51.62493635, -0.06110551, 'EDR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2328, 'Effingham Junction', 'EFFINGHAM JN', 51.29149416, -0.419956236, 'EFF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2329, 'Eggesford', 'EGGESFORD', 50.88773166, -3.874777657, 'EGG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2330, 'Egham', 'EGHAM', 51.42964981, -0.54650574, 'EGH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2331, 'Egton', 'EGTON', 54.43767437, -0.761919873, 'EGT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2332, 'Elephant & Castle', 'EPH', 51.49409, -0.09951, 'EPH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2333, 'Elgin', 'ELGIN', 57.6428985, -3.311246353, 'ELG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2334, 'Ellesmere Port', 'ELLESMERE PORT', 53.28220693, -2.896427988, 'ELP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2335, 'Elmers End', 'ELMERS END', 51.39830239, -0.049428828, 'ELE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2336, 'Elmstead Woods', 'ELMSTEAD WOODS', 51.41711905, 0.044282703, 'ESD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2337, 'Elmswell', 'ELMSWELL.', 52.23805444, 0.912598515, 'ESW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2338, 'Elsecar', 'ELSECAR', 53.49867791, -1.427415692, 'ELR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2339, 'Elsenham (Essex)', 'ELSENHAM ESSEX', 51.92055206, 0.228072408, 'ESM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2340, 'Elstree & Borehamwood', 'ElstreeBorhamwd', 51.65289, -0.2798, 'ELS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2341, 'Eltham', 'ELTHAM', 51.45564856, 0.052337616, 'ELW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2342, 'Elton & Orston', '-', 52.95188523, -0.855364249, 'ELO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2343, 'Ely', 'ELY .', 52.39124961, 0.266833823, 'ELY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2344, 'Emerson Park', 'EMERSON PARK', 51.56895264, 0.220647741, 'EMP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2345, 'Emsworth', 'EMSWORTH', 50.85138028, -0.93878361, 'EMS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2346, 'Energlyn & Churchill Park', 'ENERGLYN', 51.58376, -3.22973, 'ECP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2347, 'Enfield Chase', 'ENFIELDCHASE', 51.65276, -0.09071, 'ENC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2348, 'Enfield Lock', 'ENFIELD LOCK', 51.67088281, -0.02833834, 'ENL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2349, 'Enfield Town', 'ENFIELD TOWN', 51.65182349, -0.077450555, 'ENF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2350, 'Entwistle', 'ENTWISTLE', 53.65599298, -2.414548972, 'ENT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2351, 'Epsom (Surrey)', 'EPSOM', 51.3343926, -0.268778341, 'EPS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2352, 'Epsom Downs', 'EPSOM DOWNS', 51.323687, -0.238954739, 'EPD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2353, 'Erdington', 'ERDINGTON.', 52.52847373, -1.839281877, 'ERD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2354, 'Eridge', 'ERIDGE', 51.08895742, 0.201442672, 'ERI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2355, 'Erith', 'ERITH', 51.48168188, 0.174635475, 'ERH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2356, 'Esher', 'ESHER', 51.37989226, -0.353326233, 'ESH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2357, 'Eskbank', 'ESKBANK', 55.883801, -3.0314367, 'EKB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2358, 'Essex Road', 'ESSEXROAD', 51.54071, -0.09627, 'EXR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2359, 'Etchingham', 'ETCHINGHAM', 51.0105441, 0.442373902, 'ETC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2360, 'Euxton Balshaw Lane', 'EUXTON BAL LANE', 53.67007956, -2.6750181, 'EBA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2361, 'Evesham', 'EVESHAM', 52.09840414, -1.947313868, 'EVE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2362, 'Ewell East', 'EWELL EAST', 51.34529966, -0.241529469, 'EWE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2363, 'Ewell West', 'EWELL WEST', 51.35004515, -0.256986854, 'EWW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2364, 'Exeter Central', 'EXETER CENTRAL', 50.72652351, -3.532947602, 'EXC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2365, 'Exeter St David''s', 'EXETER ST DAVIDS', 50.72915216, -3.543660789, 'EXD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2366, 'Exeter St Thomas', 'EXETER ST THOMAS', 50.71655803, -3.539818783, 'EXT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2367, 'Exhibition Centre (Glasgow)', 'EXHIB CTR GLASGW', 55.86153645, -4.283582169, 'EXG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2368, 'Exmouth', 'EXMOUTH', 50.6216214, -3.41499267, 'EXM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2369, 'Exton', 'EXTON', 50.66829151, -3.444117811, 'EXN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2370, 'Eynsford', 'EYNSFORD', 51.36271986, 0.204405917, 'EYN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2371, 'Fairbourne', 'FAIRBOURNE', 52.69606153, -4.049426098, 'FRB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2372, 'Fairfield', 'FAIRFIELD', 53.47146764, -2.144582995, 'FRF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2373, 'Fairlie', 'FAIRLIE', 55.75192633, -4.853261694, 'FRL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2374, 'Fairwater', 'FAIRWATER', 51.49390844, -3.233850662, 'FRW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2375, 'Falconwood', 'FALCONWOOD', 51.45914359, 0.078550785, 'FCN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2376, 'Falkirk Grahamston', 'FALKIRK GHSTON', 56.0026016, -3.785040515, 'FKG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2377, 'Falkirk High', 'FALKIRK HIGH', 55.99180314, -3.792238796, 'FKK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2378, 'Falls of Cruachan', 'FALLS OF CRUACHN', 56.39386845, -5.112457321, 'FOC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2379, 'Falmer', 'FALMER', 50.86212415, -0.087383616, 'FMR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2380, 'Falmouth Docks', 'FALMOUTH DOCKS', 50.15069317, -5.056082925, 'FAL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2381, 'Falmouth Town', 'FALMOUTH TOWN', 50.14836368, -5.065272382, 'FMT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2382, 'Fareham', 'FAREHAM.', 50.85302175, -1.192037892, 'FRM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2383, 'Farnborough (Main)', 'FARNBOROUGH MAIN', 51.29660513, -0.755725906, 'FNB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2384, 'Farnborough North', 'FARNBOROUGH NTH', 51.30204484, -0.743026722, 'FNN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2385, 'Farncombe', 'FARNCOMBE', 51.19715045, -0.604545436, 'FNC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2386, 'Farnham', 'FARNHAM', 51.21190211, -0.792428907, 'FNH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2387, 'Farningham Road', 'FARNINGHAM ROAD', 51.40139519, 0.235524653, 'FNR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2388, 'Farnworth', 'FARNWORTH', 53.55001733, -2.387853772, 'FNW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2389, 'Farringdon', 'FARRINGDON UND', 51.52053, -0.10504, 'ZFD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2390, 'Fauldhouse', 'FAULDHOUSE', 55.82246535, -3.719312799, 'FLD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2391, 'Faversham', 'FAVERSHAM', 51.31171034, 0.891062265, 'FAV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2392, 'Faygate', 'FAYGATE', 51.09588376, -0.26302061, 'FGT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2393, 'Fazakerley', 'FAZAKERLEY', 53.46878354, -2.93545612, 'FAZ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2394, 'Fearn', 'FEARN', 57.77809525, -3.993733544, 'FRN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2395, 'Featherstone', 'FEATHERSTONE', 53.67872705, -1.359437598, 'FEA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2396, 'Felixstowe', 'FELIXSTOWE.', 51.96708668, 1.35045546, 'FLX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2397, 'Feltham', 'FELTHAM.', 51.4479016, -0.409827793, 'FEL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2398, 'Feniton', 'FENITON', 50.78644387, -3.285357243, 'FNT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2399, 'Fenny Stratford', 'FENNY STRATFORD', 51.99989996, -0.717672768, 'FEN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2400, 'Fernhill', 'FERNHILL', 51.68649362, -3.395897173, 'FER')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2401, 'Ferriby', 'FERRIBY', 53.71716886, -0.507824927, 'FRY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2402, 'Ferryside', 'FERRYSIDE', 51.76837024, -4.369485229, 'FYS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2403, 'Ffairfach', 'FFAIRFACH', 51.87247957, -3.992889832, 'FFA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2404, 'Filey', 'FILEY', 54.20986844, -0.293850452, 'FIL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2405, 'Filton Abbey Wood', 'FILTON ABBEYWOOD', 51.50493962, -2.562437257, 'FIT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2406, 'Finchley Road & Frognal', '-', 51.55027164, -0.183137529, 'FNY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2407, 'Finsbury Park', 'FINSBURYPARK', 51.56478, -0.10565, 'FPK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2408, 'Finstock', 'FINSTOCK', 51.85279021, -1.469345759, 'FIN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2409, 'Fishbourne (Sussex)', 'FISHBOURNE SSEX', 50.83903838, -0.815088781, 'FSB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2410, 'Fishersgate', 'FISHERSGATE', 50.83422898, -0.219411, 'FSG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2411, 'Fishguard & Goodwick', '-', 52.004112, -4.9948377, 'FGW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2412, 'Fishguard Harbour', 'FISHGUARD HBR', 52.01156, -4.98567, 'FGH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2413, 'Fiskerton', 'FISKERTON', 53.06029715, -0.912182054, 'FSK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2414, 'Fitzwilliam', 'FITZWILLIAM', 53.63251073, -1.373597322, 'FZW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2415, 'Five Ways', 'FIVE WAYS.', 52.47110355, -1.912951496, 'FWY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2416, 'Fleet', 'FLEET', 51.29063459, -0.830808013, 'FLE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2417, 'Flimby', 'FLIMBY', 54.68968694, -3.521048022, 'FLM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2418, 'Flint', 'FLINT', 53.24974, -3.13369, 'FLN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2419, 'Flitwick', 'FLITWICK', 52.00365, -0.49526, 'FLT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2420, 'Flixton', 'FLIXTON', 53.4439722, -2.383876093, 'FLI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2421, 'Flowery Field', 'FLOWERY FIELD', 53.46164017, -2.080837509, 'FLF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2422, 'Folkestone Central', 'FOLKESTONE CTL', 51.08288631, 1.169492303, 'FKC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2423, 'Folkestone West', 'FOLKESTONE WEST', 51.08458538, 1.153912918, 'FKW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2424, 'Ford', 'FORD', 50.82956237, -0.578615542, 'FOD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2425, 'Forest Gate', 'FOREST GATE', 51.54943718, 0.024361739, 'FOG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2426, 'Forest Hill', 'FOREST HILL', 51.43892535, -0.053310141, 'FOH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2427, 'Formby', 'FORMBY', 53.55349222, -3.070916313, 'FBY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2428, 'Forres', 'FORRES', 57.61115529, -3.62414618, 'FOR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2429, 'Forsinard', 'FORSINARD', 58.35688312, -3.89689083, 'FRS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2430, 'Fort Matilda', 'FORT MATILDA', 55.95902085, -4.795258693, 'FTM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2431, 'Fort William', 'FORT WILLIAM', 56.82042348, -5.106134421, 'FTW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2432, 'Four Oaks', 'FOUR OAKS.', 52.57979147, -1.828040569, 'FOK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2433, 'Foxfield', 'FOXFIELD', 54.25876643, -3.216071991, 'FOX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2434, 'Foxton', 'FOXTON', 52.11913, 0.056536, 'FXN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2435, 'Frant', 'FRANT', 51.10402068, 0.2945567, 'FRT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2436, 'Fratton', 'FRATTON', 50.79632515, -1.073980501, 'FTN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2437, 'Freshfield', 'FRESHFIELD', 53.56606861, -3.071838001, 'FRE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2438, 'Freshford', 'FRESHFORD', 51.34202505, -2.301023075, 'FFD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2439, 'Frimley', 'FRIMLEY', 51.31186216, -0.746991209, 'FML')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2440, 'Frinton-on-Sea', 'FRINTON', 51.83769342, 1.243187057, 'FRI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2441, 'Frizinghall', 'FRIZINGHALL', 53.81952623, -1.768625862, 'FZH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2442, 'Frodsham', 'FRODSHAM', 53.29587868, -2.723117879, 'FRD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2443, 'Frome', 'FROME.', 51.22726268, -2.310012271, 'FRO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2444, 'Fulwell', 'FULWELL', 51.43393799, -0.349469931, 'FLW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2445, 'Furness Vale', 'FURNESS VALE', 53.3487676, -1.98883855, 'FNV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2446, 'Furze Platt', 'FURZE PLATT', 51.53301767, -0.728471069, 'FZP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2447, 'Gainsborough Central', 'GAINSBOROUGH CTL', 53.3996081, -0.769697538, 'GNB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2448, 'Gainsborough Lea Road', 'GAINSBOROUGH L R', 53.38611247, -0.768583076, 'GBL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2449, 'Galashiels', 'Galasls', 55.617786, -2.8063991, 'GAL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2450, 'Garelochhead', 'GARELOCHHEAD', 56.07984842, -4.825707052, 'GCH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2451, 'Garforth', 'GARFORTH', 53.79622636, -1.382091266, 'GRF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2452, 'Gargrave', 'GARGRAVE', 53.97842348, -2.105163634, 'GGV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2453, 'Garrowhill', 'GARROWHILL', 55.85522344, -4.12944961, 'GAR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2454, 'Garscadden', 'GARSCADDEN', 55.88768109, -4.365000058, 'GRS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2455, 'Garsdale', 'GARSDALE', 54.32134985, -2.325888923, 'GSD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2456, 'Garston (Hertfordshire)', 'GARSTON (HERTS)', 51.68672373, -0.381667092, 'GSN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2457, 'Garswood', 'GARSWOOD.', 53.48853256, -2.672132133, 'GSW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2458, 'Gartcosh', 'Gartcosh', 55.88564646, -4.079481648, 'GRH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2459, 'Garth (Bridgend County)', 'GARTH (MID-GLAM)', 51.59673, -3.6429, 'GMG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2460, 'Garth (Powys)', 'GTH', 52.13324795, -3.529923047, 'GTH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2461, 'Garve', 'GARVE', 57.61302353, -4.688400522, 'GVE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2462, 'Gathurst', 'GATHURST', 53.55941698, -2.694390961, 'GST')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2463, 'Gatley', 'GATLEY', 53.39332787, -2.230635305, 'GTY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2464, 'Gatwick Airport', 'GATWICK AIRPORT', 51.15648532, -0.161040264, 'GTW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2465, 'Georgemas Junction', 'GEORGEMAS JN', 58.51361058, -3.452134326, 'GGJ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2466, 'Gerrards Cross', 'GERRARDS CROSS', 51.58902157, -0.555268471, 'GER')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2467, 'Gidea Park', 'GIDEA PARK', 51.5819097, 0.205978561, 'GDP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2468, 'Giffnock', 'GIFFNOCK', 55.80401725, -4.293569377, 'GFN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2469, 'Giggleswick', 'GIGGLESWICK', 54.06167264, -2.303990955, 'GIG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2470, 'Gilberdyke', 'GILBERDYKE', 53.74797918, -0.732244137, 'GBD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2471, 'Gilfach Fargoed', 'GILFACH FARGOED', 51.68424748, -3.226577833, 'GFF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2472, 'Gillingham (Dorset)', 'GILLINGHAM DSET', 51.03402105, -2.272639221, 'GIL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2473, 'Gillingham (Kent)', 'GILLINGHAM KENT', 51.38672166, 0.550513828, 'GLM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2474, 'Gilshochill', 'GILSHOCHILL', 55.89728307, -4.282003342, 'GSC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2475, 'Gipsy Hill', 'GIPSY HILL', 51.42445509, -0.083830832, 'GIP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2476, 'Girvan', 'GIRVAN', 55.2463088, -4.848380748, 'GIR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2477, 'Glaisdale', 'GLAISDALE', 54.43943633, -0.793939477, 'GLS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2478, 'Glan Conwy', 'GLAN CONWY', 53.26866, -3.79752, 'GCW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2479, 'Glasgow Central', 'GLASGOW CENTRAL', 55.85974143, -4.257636004, 'GLC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2480, 'Glasgow Queen Street', 'GLASGOW QUEEN ST', 55.86232293, -4.250657943, 'GLQ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2481, 'Glasshoughton', 'GLASSHOUGHTON', 53.70919278, -1.34185485, 'GLH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2482, 'Glazebrook', 'GLAZEBROOK', 53.42842041, -2.460492629, 'GLZ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2483, 'Gleneagles', 'GLENEAGLES', 56.27483656, -3.731158525, 'GLE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2484, 'Glenfinnan', 'GLENFINNAN', 56.87238389, -5.449620214, 'GLF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2485, 'Glengarnock', 'GLENGARNOCK', 55.73887969, -4.674491627, 'GLG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2486, 'Glenrothes with Thornton', 'GLENROTHES', 56.16234823, -3.143006549, 'GLT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2487, 'Glossop', 'GLOSSOP', 53.44448819, -1.949080993, 'GLO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2488, 'Gloucester', 'GLOUCESTER.', 51.86541548, -2.238656564, 'GCR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2489, 'Glynde', 'GLYNDE', 50.85916668, 0.07008355, 'GLY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2490, 'Gobowen', 'GOBOWEN', 52.89353933, -3.035995531, 'GOB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2491, 'Godalming', 'GODALMING', 51.18658296, -0.618859352, 'GOD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2492, 'Godley', 'GODLEY', 53.45172242, -2.054767562, 'GDL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2493, 'Godstone', 'GODSTONE', 51.21815351, -0.050080252, 'GDN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2494, 'Goldthorpe', 'GOLDTHORPE', 53.53340407, -1.313503115, 'GOE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2495, 'Golf Street', 'GOLF STREET', 56.49778468, -2.719536374, 'GOF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2496, 'Golspie', 'GOLSPIE', 57.97145203, -3.986876414, 'GOL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2497, 'Gomshall', 'GOMSHALL', 51.21947014, -0.442056348, 'GOM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2498, 'Goodmayes', 'GOODMAYES', 51.56619787, 0.111712732, 'GMY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2499, 'Goole', 'GOOLE', 53.70492908, -0.874218535, 'GOO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2500, 'Goostrey', 'GOOSTREY', 53.22257407, -2.326474795, 'GTR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2501, 'Gordon Hill', 'GORDONHILL', 51.66352, -0.09431, 'GDH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2502, 'Gorebridge', 'GGOREGRB', 55.839779, -3.0474629, 'GBG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2503, 'Goring & Streatley', '-', 51.52149065, -1.13304466, 'GOR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2504, 'Goring-by-Sea', 'GORING BY SEA', 50.8177157, -0.433076924, 'GBS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2505, 'Gorton', 'GORTON', 53.46874156, -2.167170456, 'GTO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2506, 'Gospel Oak', 'GOSPEL OAK', 51.55534127, -0.15076617, 'GPO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2507, 'Gourock', 'GOUROCK', 55.96229993, -4.816648842, 'GRK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2508, 'Gowerton', 'GOWERTON', 51.6487243, -4.035967269, 'GWN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2509, 'Goxhill', 'GOXHILL', 53.67671563, -0.337125453, 'GOX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2510, 'Grange Park', 'GRANGEPARK', 51.64262, -0.09735, 'GPK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2511, 'Grange-over-Sands', 'GRANGE OVR SANDS', 54.1952789, -2.902736771, 'GOS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2512, 'Grangetown (Cardiff)', 'GRANGETOWN GLAM', 51.46703478, -3.189071128, 'GTN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2513, 'Grantham', 'GRANTHAM', 52.90649078, -0.642452874, 'GRA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2514, 'Grateley', 'GRATELEY', 51.17005721, -1.620784549, 'GRT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2515, 'Gravelly Hill', 'GRAVELLY HILL', 52.51500582, -1.852593623, 'GVH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2516, 'Gravesend', 'GRAVESEND', 51.44134993, 0.366646481, 'GRV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2517, 'Grays', 'GRAYS.', 51.47625058, 0.321834603, 'GRY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2518, 'Great Ayton', 'GREAT AYTON', 54.48931943, -1.116362099, 'GTA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2519, 'Great Bentley', 'GREAT BENTLEY', 51.85177166, 1.065164898, 'GRB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2520, 'Great Chesterford', 'GREAT CHESTERFRD', 52.05982142, 0.193523039, 'GRC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2521, 'Great Coates', 'GREAT COATES', 53.57577255, -0.130229747, 'GCT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2522, 'Great Malvern', 'GREAT MALVERN', 52.10920685, -2.318281662, 'GMV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2523, 'Great Missenden', 'GREAT MISSENDEN', 51.70352072, -0.709137756, 'GMN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2524, 'Great Yarmouth', 'GREAT YARMOUTH', 52.61218298, 1.720906278, 'GYM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2525, 'Green Lane', 'GREEN LANE', 53.38327334, -3.01642303, 'GNL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2526, 'Green Road', 'GREEN ROAD', 54.24453345, -3.245579599, 'GNR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2527, 'Greenbank', 'GREENBANK', 53.2515743, -2.533067977, 'GBK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2528, 'Greenfaulds', 'GREENOCK CENTRAL', 55.9349, -3.9937, 'GRL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2529, 'Greenfield', 'GREENFIELD', 53.53913992, -2.014440599, 'GNF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2530, 'Greenford', 'GREENFORD.', 51.54231895, -0.344541518, 'GFD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2531, 'Greenhithe for Bluewater', 'GREENHITHE', 51.45076146, 0.278856807, 'GNH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2532, 'Greenock Central', 'GREENOCK CENTRAL', 55.94532922, -4.75262409, 'GKC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2533, 'Greenock West', 'GREENOCK WEST', 55.94732563, -4.76782372, 'GKW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2534, 'Greenwich', 'GREENWICH', 51.47783848, -0.014209644, 'GNW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2535, 'Gretna Green', 'GRETNA GREEN', 55.00190839, -3.064593507, 'GEA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2536, 'Grimsby Docks', 'GRIMSBY DOCKS', 53.57433986, -0.075615006, 'GMD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2537, 'Grimsby Town', 'GRIMSBY TOWN', 53.56412028, -0.086951656, 'GMB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2538, 'Grindleford', 'GRINDLEFORD', 53.30558428, -1.626295445, 'GRN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2539, 'Grosmont', 'GROSMONT', 54.43612153, -0.724962522, 'GMT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2540, 'Grove Park', 'GROVE PARK', 51.43044575, 0.022578266, 'GRP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2541, 'Guide Bridge', 'GUIDE BRIDGE', 53.47464705, -2.113707335, 'GUI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2542, 'Guildford', 'GUILDFORD', 51.23696786, -0.580420682, 'GLD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2543, 'Guiseley', 'GUISELEY', 53.87594659, -1.715077862, 'GSY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2544, 'Gunnersbury', 'GUNNERSBURY', 51.49186912, -0.275783447, 'GUN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2545, 'Gunnislake', 'GUNNISLAKE', 50.51606725, -4.219449323, 'GSL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2546, 'Gunton', 'GUNTON', 52.86613631, 1.348766988, 'GNT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2547, 'Gwersyllt', 'GWERSYLLT', 53.07241, -3.01781, 'GWE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2548, 'Gypsy Lane', 'GYPSY LANE', 54.53289438, -1.179386125, 'GYP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2549, 'Habrough', 'HABROUGH', 53.60553503, -0.267975846, 'HAB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2550, 'Hackbridge', 'HACKBRIDGE', 51.37787262, -0.153904728, 'HCB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2551, 'Hackney Central', 'HACKNEY CENTRAL', 51.54688327, -0.055916424, 'HKC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2552, 'Hackney Downs', 'HACKNEY DOWNS', 51.54875215, -0.060163889, 'HAC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2553, 'Hackney Wick', 'HACKNEY WICK', 51.54368184, -0.025766173, 'HKW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2554, 'Haddenham & Thame Parkway', '-', 51.77085986, -0.942139967, 'HDM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2555, 'Haddiscoe', 'HADDISCOE', 52.52889004, 1.622411116, 'HAD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2556, 'Hadfield', 'HADFIELD', 53.46076361, -1.965328098, 'HDF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2557, 'Hadley Wood', 'HADLEYWOOD', 51.66841, -0.17653, 'HDW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2558, 'Hag Fold', 'HAG FOLD', 53.53386541, -2.494828846, 'HGF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2559, 'Haggerston', 'HAGGERS', 51.539121, -0.076443, 'HGG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2560, 'Hagley', 'HAGLEY', 52.42240686, -2.147009123, 'HAG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2561, 'Hairmyres', 'HAIRMYRES', 55.76195707, -4.220003661, 'HMY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2562, 'Hale (Manchester)', 'HALE', 53.37873505, -2.347360839, 'HAL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2563, 'Halesworth', 'HALESWORTH.', 52.34669719, 1.505698126, 'HAS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2564, 'Halewood', 'HALEWOOD', 53.36533326, -2.824983416, 'HED')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2565, 'Halifax', 'HALIFAX.', 53.72043967, -1.854488705, 'HFX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2566, 'Hall Green', 'HALL GREEN.', 52.43678179, -1.845499724, 'HLG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2567, 'Hall Road', 'HALL ROAD', 53.49838894, -3.050682508, 'HLR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2568, 'Hall-i''-th''-Wood', 'HALL I TH WOOD', 53.59756945, -2.413976805, 'HID')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2569, 'Halling', 'HALLING', 51.35247674, 0.44493691, 'HAI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2570, 'Haltwhistle', 'HALTWHISTLE', 54.96784942, -2.463561774, 'HWH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2571, 'Ham Street', 'HAM STREET', 51.0683774, 0.854521617, 'HMT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2572, 'Hamble', 'HAMBLE', 50.8713636, -1.329166492, 'HME')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2573, 'Hamilton Central', 'HAMILTON CENTRAL', 55.77318497, -4.038872459, 'HNC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2574, 'Hamilton West', 'HAMILTON WEST', 55.77895186, -4.054163603, 'HNW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2575, 'Hammerton', 'HAMMERTON', 53.99611366, -1.283031759, 'HMM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2576, 'Hampden Park (Sussex)', 'HAMPDEN PK SSEX', 50.79639828, 0.27936748, 'HMD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2577, 'Hampstead Heath', 'HAMPSTEAD HEATH', 51.55583725, -0.165171928, 'HDH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2578, 'Hampton (London)', 'HAMPTON (LONDON)', 51.41590963, -0.372108616, 'HMP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2579, 'Hampton Court', 'HAMPTONCOURT', 51.40255764, -0.342750055, 'HMC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2580, 'Hampton Wick', 'HAMPTON WICK', 51.41452673, -0.31249094, 'HMW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2581, 'Hampton-in-Arden', 'HAMPTON IN ARDEN', 52.42904908, -1.699936619, 'HIA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2582, 'Hamstead (Birmingham)', 'HAMSTEAD BIRMNGM', 52.53107873, -1.928901297, 'HSD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2583, 'Hamworthy', 'HAMWORTHY', 50.72517822, -2.019367161, 'HAM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2584, 'Hanborough', 'HANBOROUGH', 51.82516517, -1.373525679, 'HND')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2585, 'Handforth', 'HANDFORTH', 53.34642025, -2.213257748, 'HTH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2586, 'Hanwell', 'HANWELL', 51.51193192, -0.338725823, 'HAN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2587, 'Hapton', 'HAPTON', 53.78176047, -2.316685364, 'HPN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2588, 'Harlech', 'HARLECH', 52.86165, -4.10956, 'HRL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2589, 'Harlesden', 'HARLESDEN', 51.53657288, -0.258232852, 'HDN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2590, 'Harling Road', 'HARLING ROAD', 52.45371021, 0.909152671, 'HRD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2591, 'Harlington (Bedfordshire)', 'HARLINGTONBEDS', 51.96207, -0.49568, 'HLN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2592, 'Harlow Mill', 'HARLOW MILL', 51.79036827, 0.132320656, 'HWM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2593, 'Harlow Town', 'HARLOW TOWN', 51.78107298, 0.095143791, 'HWN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2594, 'Harold Wood', 'HAROLD WOOD', 51.59324565, 0.234249821, 'HRO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2595, 'Harpenden', 'HARPENDEN', 51.81488, -0.35198, 'HPD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2596, 'Harrietsham', 'HARRIETSHAM', 51.24482814, 0.672410147, 'HRM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2597, 'Harringay', 'HARRINGAY', 51.57737, -0.10513, 'HGY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2598, 'Harringay Green Lanes', 'HARRINGAY GRN LA', 51.57724794, -0.097919168, 'HRY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2599, 'Harrington', 'HARRINGTON', 54.61334851, -3.565741262, 'HRR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2600, 'Harrogate', 'HARROGATE.', 53.99319216, -1.537615121, 'HGT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2601, 'Harrow & Wealdstone', '-', 51.59162038, -0.334073019, 'HRW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2602, 'Harrow-on-the-Hill', 'HARROW-HILL UND', 51.57906714, -0.335989886, 'HOH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2603, 'Hartford (Cheshire)', 'HARTFORD', 53.24177232, -2.553625248, 'HTF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2604, 'Hartlebury', 'HARTLEBURY', 52.33445625, -2.220685153, 'HBY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2605, 'Hartlepool', 'HARTLEPOOL.', 54.68676301, -1.207310059, 'HPL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2606, 'Hartwood', 'HARTWOOD', 55.81147256, -3.839319533, 'HTW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2607, 'Harwich International', 'HARWICH INTL', 51.9473035, 1.25514186, 'HPQ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2608, 'Harwich Town', 'HARWICH TOWN', 51.94415922, 1.286700168, 'HWC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2609, 'Haslemere', 'HASLEMERE', 51.08884213, -0.719371718, 'HSL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2610, 'Hassocks', 'HASSOCKS', 50.92461282, -0.145952423, 'HSK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2611, 'Hastings', 'HASTINGS.', 50.85759003, 0.576461455, 'HGS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2612, 'Hatch End', 'HATCH END', 51.61010296, -0.369517707, 'HTE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2613, 'Hatfield (Herts)', 'HATFIELD(HERTS)', 51.76388, -0.21559, 'HAT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2614, 'Hatfield & Stainforth', '-', 53.58892124, -1.024047613, 'HFS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2615, 'Hatfield Peverel', 'HATFIELD PEVEREL', 51.779875, 0.592135742, 'HAP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2616, 'Hathersage', 'HATHERSAGE', 53.32578602, -1.651192584, 'HSG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2617, 'Hattersley', 'HATTERSLEY', 53.44530123, -2.040305376, 'HTY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2618, 'Hatton', 'HATTON', 52.29528991, -1.672981218, 'HTN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2619, 'Havant', 'HAVANT.', 50.85441478, -0.981606362, 'HAV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2620, 'Havenhouse', 'HAVENHOUSE', 53.11449084, 0.273177619, 'HVN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2621, 'Haverfordwest', 'HAVERFORDWEST', 51.80272, -4.96034, 'HVF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2622, 'Hawarden', 'HAWARDEN', 53.18537204, -3.032090605, 'HWD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2623, 'Hawarden Bridge', 'HAWARDEN BRIDGE', 53.20994, -3.01862, 'HWB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2624, 'Hawkhead', 'HAWKHEAD.', 55.8421756, -4.398847672, 'HKH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2625, 'Haydon Bridge', 'HAYDON BRIDGE', 54.97486058, -2.247904442, 'HDB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2626, 'Haydons Road', 'HAYDONSROAD', 51.42545, -0.18881, 'HYR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2627, 'Hayes (Kent)', 'HAYES (KENT)', 51.37580244, 0.010109755, 'HYS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2628, 'Hayes & Harlington', '-', 51.50310042, -0.420673064, 'HAY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2629, 'Hayle', 'HAYLE', 50.18623531, -5.419529634, 'HYL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2630, 'Haymarket', 'HAYMARKET', 55.945802, -3.218444586, 'HYM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2631, 'Haywards Heath', 'HAYWARDS HEATH', 51.00525294, -0.105306765, 'HHE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2632, 'Hazel Grove', 'HAZEL GROVE', 53.37756004, -2.122016963, 'HAZ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2633, 'Headbolt Lane', 'HEADBOLT LANE', 53.49284, -2.87978, 'HBL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2634, 'Headcorn', 'HEADCORN', 51.16571639, 0.627491294, 'HCN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2635, 'Headingley', 'HEADINGLEY', 53.81816231, -1.593649517, 'HDY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2636, 'Headstone Lane', 'HEADSTONE LANE', 51.60273149, -0.356785451, 'HDL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2637, 'Heald Green', 'HEALD GREEN', 53.36974577, -2.237421508, 'HDG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2638, 'Healing', 'HEALING', 53.5818177, -0.160630049, 'HLI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2639, 'Heath High Level', 'HEATH HIGH LEVEL', 51.51656604, -3.181713068, 'HHL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2640, 'Heath Low Level', 'HEATH LOW LEVEL', 51.51566416, -3.181977972, 'HLL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2641, 'Heathrow Terminal 4 (Rail Station Only)', 'HEATHROW EXP 4', 51.45827125, -0.445453964, 'HAF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2642, 'Heathrow Terminal 5 (Rail Station Only)', 'HEATHROW EXP 5', 51.47005659, -0.49058073, 'HWV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2643, 'Heathrow Terminals 2 & 3 (Rail Station Only)', 'HEATHROW EXP 123', 51.47273, -0.45072, 'HXX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2644, 'Heaton Chapel', 'HEATON CHAPEL', 53.42557835, -2.17904046, 'HTC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2645, 'Hebden Bridge', 'HEBDEN BRIDGE', 53.73759649, -2.00906594, 'HBD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2646, 'Heckington', 'HECKINGTON', 52.97733733, -0.293936548, 'HEC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2647, 'Hedge End', 'HEDGE END', 50.93231017, -1.294506472, 'HDE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2648, 'Hednesford', 'HEDNESFORD', 52.70973133, -2.002323872, 'HNF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2649, 'Heighington', 'HEIGHINGTON', 54.59696718, -1.582079768, 'HEI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2650, 'Helensburgh Central', 'HELENSBURGH CTL', 56.00419011, -4.732746326, 'HLC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2651, 'Helensburgh Upper', 'HELENSBURGH UPP', 56.01234544, -4.729792381, 'HLU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2652, 'Hellifield', 'HELLIFIELD', 54.01087074, -2.227841167, 'HLD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2653, 'Helmsdale', 'HELMSDALE', 58.11773408, -3.65904757, 'HMS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2654, 'Helsby', 'HELSBY', 53.27517482, -2.770757816, 'HSB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2655, 'Hemel Hempstead', 'HEMEL HEMPSTEAD.', 51.74233574, -0.490764101, 'HML')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2656, 'Hendon', 'HENDON', 51.58008, -0.23867, 'HEN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2657, 'Hengoed', 'HENGOED', 51.64740601, -3.224137826, 'HNG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2658, 'Henley-in-Arden', 'HENLEY IN ARDEN', 52.29105066, -1.784442316, 'HNL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2659, 'Henley-on-Thames', 'HENLEY ON THAMES', 51.53417793, -0.900215287, 'HOT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2660, 'Hensall', 'HENSALL', 53.69855978, -1.114515549, 'HEL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2661, 'Hereford', 'HFD', 52.06116993, -2.708217764, 'HFD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2662, 'Herne Bay', 'HERNE BAY', 51.36459088, 1.117735579, 'HNB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2663, 'Herne Hill', 'HERNE HILL', 51.45320752, -0.101640876, 'HNH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2664, 'Hersham', 'HERSHAM', 51.37698201, -0.389799091, 'HER')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2665, 'Hertford East', 'HERTFORD EAST', 51.79903842, -0.07293406, 'HFE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2666, 'Hertford North', 'HERTFORDNORTH', 51.79886, -0.09178, 'HFN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2667, 'Hessle', 'HESSLE', 53.71759184, -0.442189469, 'HES')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2668, 'Heswall', 'HESWALL', 53.32947, -3.07342, 'HSW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2669, 'Hever', 'HEVER', 51.18140581, 0.0950779, 'HEV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2670, 'Heworth', 'HEWORTH', 54.95156601, -1.555768445, 'HEW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2671, 'Hexham', 'HEXHAM', 54.97417725, -2.095266842, 'HEX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2672, 'Heyford', 'HEYFORD', 51.91919985, -1.299267568, 'HYD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2673, 'Heysham Port', 'HEYSHAM PORT', 54.03315438, -2.91311509, 'HHB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2674, 'High Brooms', 'HIGH BROOMS', 51.14939826, 0.277345661, 'HIB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2675, 'High Street (Glasgow)', 'HIGH ST GLASGOW', 55.8595495, -4.240110183, 'HST')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2676, 'High Wycombe', 'HIGH WYCOMBE', 51.62958615, -0.74540803, 'HWY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2677, 'Higham', 'HIGHAM (KENT)', 51.42656006, 0.466283903, 'HGM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2678, 'Highams Park', 'HIGHAMS PARK', 51.60889017, 0.000170835, 'HIP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2679, 'Highbridge & Burnham', 'HIGHBRIDGE', 51.21815016, -2.972173138, 'HIG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2680, 'Highbury & Islington', '-', 51.54673995, -0.102076601, 'HHY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2681, 'Hightown', 'HIGHTOWN', 53.52512005, -3.057076334, 'HTO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2682, 'Hildenborough', 'HILDENBOROUGH', 51.21448142, 0.227602385, 'HLB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2683, 'Hillfoot', 'HILLFOOT', 55.9200798, -4.320268221, 'HLF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2684, 'Hillington East', 'HILLINGTON EAST', 55.85471276, -4.354719114, 'HLE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2685, 'Hillington West', 'HILLINGTON WEST', 55.85600676, -4.371575959, 'HLW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2686, 'Hillside', 'HILLSIDE', 53.62212307, -3.024723262, 'HIL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2687, 'Hilsea', 'HILSEA', 50.82812716, -1.058584319, 'HLS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2688, 'Hinchley Wood', 'HINCHLEY WOOD', 51.37499946, -0.340526968, 'HYW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2689, 'Hinckley (Leics)', 'HINCKLEY (LEICS)', 52.53501671, -1.371919253, 'HNK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2690, 'Hindley', 'HINDLEY', 53.54225044, -2.575496114, 'HIN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2691, 'Hinton Admiral', 'HINTON ADMIRAL', 50.75262651, -1.714128129, 'HNA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2692, 'Hitchin', 'HITCHIN', 51.95329, -0.26348, 'HIT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2693, 'Hither Green', 'HITHER GREEN', 51.45243221, -0.000918992, 'HGR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2694, 'Hockley', 'HOCKLEY', 51.60356168, 0.65901386, 'HOC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2695, 'Hollingbourne', 'HOLLINGBOURNE', 51.26517489, 0.627857882, 'HBN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2696, 'Holmes Chapel', 'HOLMES CHAPEL', 53.19895238, -2.351145128, 'HCH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2697, 'Holmwood', 'HOLMWOOD SURREY', 51.18099754, -0.321090928, 'HLM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2698, 'Holton Heath', 'HOLTON HEATH', 50.71139466, -2.07785667, 'HOL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2699, 'Holyhead', 'HOLYHEAD.', 53.30770479, -4.631012675, 'HHD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2700, 'Holytown', 'HOLYTOWN', 55.81289048, -3.973914426, 'HLY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2701, 'Homerton', 'HOMERTON', 51.54659534, -0.038620906, 'HMN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2702, 'Honeybourne', 'HONEYBOURNE', 52.10142923, -1.834981487, 'HYB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2703, 'Honiton', 'HONITON', 50.79657202, -3.186745856, 'HON')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2704, 'Honley', 'HONLEY', 53.60824208, -1.780966774, 'HOY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2705, 'Honor Oak Park', 'HONOR OAK PARK', 51.45048824, -0.045621844, 'HPA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2706, 'Hook', 'HOOK', 51.27999802, -0.961641845, 'HOK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2707, 'Hooton', 'HOOTON', 53.29721539, -2.977016928, 'HOO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2708, 'Hope (Derbyshire)', 'HOPE DERBYSHIRE', 53.3459425, -1.728537541, 'HOP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2709, 'Hope (Flintshire)', 'HOPE (CLWYD)', 53.117378, -3.03688641, 'HPE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2710, 'Hopton Heath', 'HPT', 52.3913806, -2.91192311, 'HPT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2711, 'Horden', 'HORDEN', 54.7608, -1.3035, 'HRE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2712, 'Horley', 'HORLEY', 51.16877025, -0.161052239, 'HOR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2713, 'Hornbeam Park', 'HORNBEAM PARK', 53.97988387, -1.526829388, 'HBP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2714, 'Hornsey', 'HORNSEY', 51.58647, -0.11197, 'HRN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2715, 'Horsforth', 'HORSFORTH', 53.84758338, -1.63060526, 'HRS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2716, 'Horsham', 'HORSHAM.', 51.06605718, -0.319258917, 'HRH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2717, 'Horsley', 'HORSLEY', 51.2793455, -0.435400001, 'HSY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2718, 'Horton-in-Ribblesdale', 'HORTON IN RBDALE', 54.14939839, -2.302030471, 'HIR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2719, 'Horwich Parkway', 'HORWICH PARKWAY', 53.57812052, -2.539674261, 'HWI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2720, 'Hoscar', 'HOSCAR', 53.59738358, -2.803809539, 'HSC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2721, 'Hough Green', 'HOUGH GREEN', 53.37240964, -2.775067325, 'HGN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2722, 'Hounslow', 'HOUNSLOW', 51.46252802, -0.361826888, 'HOU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2723, 'Hove', 'HOVE.', 50.8352109, -0.170687991, 'HOV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2724, 'Hoveton & Wroxham', '-', 52.71559814, 1.408008889, 'HXM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2725, 'How Wood (Hertfordshire)', 'HOW WOOD', 51.71774404, -0.344671247, 'HWW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2726, 'Howden', 'HOWDEN', 53.76455009, -0.860699734, 'HOW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2727, 'Howwood (Renfrewshire)', 'HOWWOOD SCLYDE', 55.8105493, -4.563043704, 'HOZ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2728, 'Hoxton', 'HOXTON', 51.531932, -0.076746, 'HOX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2729, 'Hoylake', 'HOYLAKE', 53.39022996, -3.178843698, 'HYK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2730, 'Hubberts Bridge', 'HUBBERTS BRIDGE', 52.97564369, -0.110071823, 'HBB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2731, 'Hucknall', 'HUCKNALL', 53.03830732, -1.195814321, 'HKN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2732, 'Huddersfield', 'HUDDERSFIELD.', 53.64842819, -1.785145834, 'HUD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2733, 'Hull', 'HULL.', 53.744177, -0.346155, 'HUL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2734, 'Humphrey Park', 'HUMPHREY PARK', 53.45224781, -2.32754077, 'HUP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2735, 'Huncoat', 'HUNCOAT', 53.77215217, -2.345896854, 'HCT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2736, 'Hungerford', 'HUNGERFORD', 51.41490602, -1.512293535, 'HGD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2737, 'Hunmanby', 'HUNMANBY', 54.17429747, -0.314773782, 'HUB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2738, 'Huntingdon', 'HUNTINGDON', 52.32866, -0.19206, 'HUN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2739, 'Huntly', 'HUNTLY', 57.444314, -2.776356684, 'HNT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2740, 'Hunts Cross', 'HUNTS CROSS', 53.36062783, -2.854946075, 'HNX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2741, 'Hurst Green', 'HURST GREEN', 51.24442735, 0.003945749, 'HUR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2742, 'Hutton Cranswick', 'HUTTON CRANSWICK', 53.95568032, -0.433326239, 'HUT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2743, 'Huyton', 'HUYTON', 53.40969455, -2.842991769, 'HUY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2744, 'Hyde Central', 'HYDE CENTRAL', 53.45174912, -2.085788017, 'HYC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2745, 'Hyde North', 'HYDE NORTH', 53.46433332, -2.085813385, 'HYT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2746, 'Hykeham', 'HYKEHAM', 53.19536728, -0.598164171, 'HKM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2747, 'Hyndland', 'HYNDLAND', 55.87974019, -4.31466261, 'HYN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2748, 'Hythe (Essex)', 'HYTHE ESSEX', 51.88565263, 0.927535333, 'HYH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2749, 'IBM', 'IBM HALT', 55.92943602, -4.827232334, 'IBM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2750, 'Ifield', 'IFIELD', 51.11561646, -0.214772632, 'IFI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2751, 'Ilford', 'ILFORD', 51.55914073, 0.068680603, 'IFD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2752, 'Ilkeston', 'ILKES', 52.9794, -1.2949, 'ILN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2753, 'Ilkley', 'ILKLEY', 53.92495813, -1.822103587, 'ILK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2754, 'Imperial Wharf', 'Imperial Wharf', 51.474251, -0.181411, 'IMW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2755, 'Ince (Manchester)', 'INCE MANCHR', 53.53918986, -2.61257527, 'INC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2756, 'Ince & Elton (Cheshire)', '-', 53.27676, -2.816228123, 'INE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2757, 'Ingatestone', 'INGATESTONE', 51.66705103, 0.384252139, 'INT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2758, 'Insch', 'INSCH', 57.3374863, -2.617112197, 'INS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2759, 'Invergordon', 'INVERGORDON', 57.68848692, -4.175538138, 'IGD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2760, 'Invergowrie', 'INVERGOWRIE', 56.45646374, -3.057400408, 'ING')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2761, 'Inverkeithing', 'INVERKEITHING', 56.03466521, -3.396186138, 'INK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2762, 'Inverkip', 'INVERKIP', 55.90609286, -4.87257992, 'INP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2763, 'Inverness', 'INVERNESS.', 57.48010225, -4.223186338, 'INV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2764, 'Inverness Airport', 'IVRNAIR', 57.533197, -4.055693, 'IVA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2765, 'Invershin', 'INVERSHIN', 57.92488509, -4.399575827, 'INH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2766, 'Inverurie', 'INVERURIE', 57.28626199, -2.373553146, 'INR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2767, 'Ipswich', 'IPSWICH.', 52.05060957, 1.144440623, 'IPS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2768, 'Irlam', 'IRLAM', 53.43481373, -2.433467061, 'IRL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2769, 'Irvine', 'IRVINE', 55.6108626, -4.675136283, 'IRV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2770, 'Isleworth', 'ISLEWORTH', 51.47476682, -0.336908528, 'ISL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2771, 'Islip', 'ISLIP', 51.82576003, -1.238178071, 'ISP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2772, 'Iver', 'IVER', 51.50850799, -0.506717928, 'IVR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2773, 'Ivybridge', 'IVYBRIDGE', 50.39357854, -3.904458214, 'IVY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2774, 'James Cook University Hospital', 'JamesCookHospl', 54.5515, -1.2076, 'JCH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2775, 'Jewellery Quarter', 'JEWELLERY QUARTR', 52.48944377, -1.913209845, 'JEQ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2776, 'Johnston (Pembs)', 'JOHNSTON (DYFED)', 51.75676, -4.99636, 'JOH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2777, 'Johnstone (Renfrewshire)', 'JOHNSTONE SCLYDE', 55.83469425, -4.503621119, 'JHN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2778, 'Jordanhill', 'JORDANHILL', 55.8822227, -4.326003522, 'JOR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2779, 'Kearsley (Manchester)', 'KEARSLEY MANCHR', 53.54466284, -2.375731616, 'KSL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2780, 'Kearsney (Kent)', 'KEARSNEY (KENT)', 51.14937599, 1.272074581, 'KSN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2781, 'Keighley', 'KEIGHLEY', 53.86788507, -1.901120783, 'KEI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2782, 'Keith', 'KEITH', 57.55089374, -2.954076816, 'KEH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2783, 'Kelvedon', 'KELVEDON', 51.84071438, 0.702401142, 'KEL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2784, 'Kelvindale', 'Kelvindale', 55.89358274, -4.309808848, 'KVD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2785, 'Kemble', 'KEMBLE', 51.67627148, -2.023096483, 'KEM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2786, 'Kempston Hardwick', 'KEMPSTON HARDWK', 52.09223124, -0.503916852, 'KMH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2787, 'Kempton Park', 'KEMPTON PK RCRSE', 51.4209856, -0.409741053, 'KMP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2788, 'Kemsing', 'KEMSING', 51.29718469, 0.247441908, 'KMS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2789, 'Kemsley', 'KEMSLEY', 51.3624387, 0.735371031, 'KML')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2790, 'Kendal', 'KENDAL', 54.33210561, -2.73964031, 'KEN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2791, 'Kenilworth', 'Kenilworth', 52.3422, -1.5724, 'KNW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2792, 'Kenley', 'KENLEY', 51.32460105, -0.101215735, 'KLY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2793, 'Kennett', 'KENNETT', 52.27728025, 0.490476315, 'KNE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2794, 'Kennishead', 'KENNISHEAD', 55.81304263, -4.325066123, 'KNS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2795, 'Kensal Green', 'KENSAL GREEN', 51.53066179, -0.223855863, 'KNL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2796, 'Kensal Rise', 'KENSAL RISE', 51.53421304, -0.22083383, 'KNR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2797, 'Kensington Olympia', 'KENSNGTN OLYMPIA', 51.4971677, -0.209310428, 'KPA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2798, 'Kent House', 'KENT HOUSE', 51.4127206, -0.0457951, 'KTH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2799, 'Kentish Town', 'KENTISH TOWN', 51.55003637, -0.139442076, 'KTN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2800, 'Kentish Town West', 'KENTISH TOWN W', 51.54655569, -0.146795576, 'KTW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2801, 'Kenton', 'KENTON', 51.58149602, -0.317137327, 'KNT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2802, 'Kents Bank', 'KENTS BANK', 54.1729079, -2.925229232, 'KBK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2803, 'Kettering', 'KETTERING.', 52.39356783, -0.731555547, 'KET')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2804, 'Kew Bridge', 'KEW BRIDGE', 51.48936263, -0.28884221, 'KWB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2805, 'Kew Gardens', 'KEW GARDENS', 51.4776155, -0.284961648, 'KWG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2806, 'Keyham', 'KEYHAM', 50.38974606, -4.179074345, 'KEY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2807, 'Keynsham', 'KEYNSHAM', 51.41716993, -2.494633256, 'KYN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2808, 'Kidbrooke', 'KIDBROOKE', 51.46272143, 0.028324303, 'KDB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2809, 'Kidderminster', 'KIDDERMINSTER', 52.38449634, -2.239447445, 'KID')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2810, 'Kidsgrove', 'KIDSGROVE', 53.08658326, -2.244818788, 'KDG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2811, 'Kidwelly', 'KIDWELLY', 51.73434386, -4.317011245, 'KWL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2812, 'Kilburn High Road', 'KILBURN HIGH RD', 51.53736721, -0.191870923, 'KBN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2813, 'Kildale', 'KILDALE', 54.47727129, -1.067852562, 'KLD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2814, 'Kildonan', 'KILDONAN', 58.17132307, -3.869995441, 'KIL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2815, 'Kilgetty', 'KILGETTY', 51.73210916, -4.715192738, 'KGT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2816, 'Kilmarnock', 'KILMARNOCK', 55.61210574, -4.498670613, 'KMK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2817, 'Kilmaurs', 'KILMAURS', 55.63719684, -4.53047696, 'KLM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2818, 'Kilpatrick', 'KILPATRICK', 55.92468944, -4.453393762, 'KPT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2819, 'Kilwinning', 'KILWINNING', 55.65594103, -4.710010141, 'KWN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2820, 'Kinbrace', 'KINBRACE', 58.25830535, -3.941050618, 'KBC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2821, 'Kingham', 'KINGHAM', 51.90225045, -1.6287933, 'KGM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2822, 'Kinghorn', 'KINGHORN', 56.06932621, -3.17414684, 'KGH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2823, 'Kings Langley', 'KINGS LANGLEY', 51.70635749, -0.438410982, 'KGL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2824, 'Kings Lynn', 'KINGSLYNN', 52.75381, 0.403525, 'KLN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2825, 'Kings Norton', 'KINGS NORTON.', 52.4134894, -1.933795298, 'KNN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2826, 'Kings Nympton', 'KINGS NYMPTON', 50.93597779, -3.905610885, 'KGN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2827, 'Kings Park', 'KINGS PARK', 55.81988233, -4.247248478, 'KGP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2828, 'Kings Sutton', 'KINGS SUTTON', 52.02135474, -1.280927148, 'KGS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2829, 'Kingsknowe', 'KINGSKNOWE', 55.91926752, -3.265617893, 'KGE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2830, 'Kingston', 'KINGSTON', 51.41275341, -0.301166881, 'KNG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2831, 'Kingswood', 'KINGSWOOD', 51.29486144, -0.211456639, 'KND')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2832, 'Kingussie', 'KINGUSSIE', 57.07776559, -4.052184734, 'KIN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2833, 'Kintbury', 'KINTBURY', 51.40251723, -1.445993627, 'KIT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2834, 'Kintore', 'Kintore', 57.243511, -2.35025, 'KTR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2835, 'Kirby Cross', 'KIRBY CROSS', 51.84140899, 1.215008216, 'KBX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2836, 'Kirk Sandall', 'KIRK SANDALL', 53.56343733, -1.074913037, 'KKS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2837, 'Kirkby (Merseyside)', 'KIRKBY MERSEYSDE', 53.48620351, -2.902833396, 'KIR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2838, 'Kirkby Stephen', 'KIRKBY STEPHEN', 54.45512998, -2.368596626, 'KSW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2839, 'Kirkby-in-Ashfield', 'KIRKBY IN ASHFLD', 53.10012396, -1.253060759, 'KKB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2840, 'Kirkby-in-Furness', 'KIRKBY IN FURN', 54.23234259, -3.188906344, 'KBF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2841, 'Kirkcaldy', 'KIRKCALDY', 56.11204798, -3.1670206, 'KDY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2842, 'Kirkconnel', 'KIRKCONNEL', 55.38830158, -3.998490325, 'KRK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2843, 'Kirkdale', 'KIRKDALE', 53.4405479, -2.981506598, 'KKD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2844, 'Kirkham & Wesham', '-', 53.78738537, -2.881813597, 'KKM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2845, 'Kirkhill', 'KIRKHILL', 55.81410272, -4.168702723, 'KKH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2846, 'Kirknewton', 'KIRKNEWTON', 55.8886839, -3.432513177, 'KKN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2847, 'Kirkstall Forge', 'KRKSLFR', 53.82402819, -1.618512273, 'KLF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2848, 'Kirkwood', 'KIRKWOOD', 55.85418229, -4.048385591, 'KWD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2849, 'Kirton Lindsey', 'KIRTON LINDSEY', 53.48485675, -0.593911552, 'KTL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2850, 'Kiveton Bridge', 'KIVETON BRIDGE', 53.34098096, -1.267182571, 'KIV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2851, 'Kiveton Park', 'KIVETON PARK', 53.33678062, -1.239500771, 'KVP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2852, 'Knaresborough', 'KNARESBOROUGH', 54.00877012, -1.470501209, 'KNA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2853, 'Knebworth', 'KNEBWORTH', 51.86686, -0.18728, 'KBW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2854, 'Knighton', 'KNI', 52.34508013, -3.042211012, 'KNI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2855, 'Knockholt', 'KNOCKHOLT', 51.34578876, 0.130857676, 'KCK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2856, 'Knottingley', 'KNOTTINGLEY', 53.70655284, -1.259179166, 'KNO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2857, 'Knucklas', 'KNU', 52.36097, -3.09893, 'KNU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2858, 'Knutsford', 'KNUTSFORD', 53.30198471, -2.37209752, 'KNF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2859, 'Kyle of Lochalsh', 'KYLE OF LOCHALSH', 57.27974817, -5.713815801, 'KYL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2860, 'Ladybank', 'LADYBANK', 56.27377597, -3.122265019, 'LDY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2861, 'Ladywell', 'LADYWELL', 51.45624704, -0.019033585, 'LAD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2862, 'Laindon', 'LAINDON', 51.56776691, 0.42364369, 'LAI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2863, 'Lairg', 'LAIRG', 58.00159502, -4.400985065, 'LRG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2864, 'Lake', 'LAKE', 50.64646818, -1.166349574, 'LKE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2865, 'Lakenheath', 'LAKENHEATH', 52.4475127, 0.533892607, 'LAK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2866, 'Lamphey', 'LAMPHEY', 51.66719665, -4.87329867, 'LAM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2867, 'Lanark', 'LANARK', 55.67307101, -3.772865657, 'LNK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2868, 'Lancaster', 'LANCASTER.', 54.04855789, -2.807909914, 'LAN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2869, 'Lancing', 'LANCING', 50.82707775, -0.323099956, 'LAC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2870, 'Landywood', 'LANDYWOOD', 52.65713862, -2.020653193, 'LAW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2871, 'Langbank', 'LANGBANK', 55.92450786, -4.58526005, 'LGB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2872, 'Langho', 'LANGHO', 53.80498135, -2.447905464, 'LHO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2873, 'Langley (Berks)', 'LANGLEY BERKS', 51.50806754, -0.541749056, 'LNY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2874, 'Langley Green', 'LANGLEY GREEN.', 52.4938807, -2.004963724, 'LGG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2875, 'Langley Mill', 'LANGLEY MILL', 53.01808321, -1.331236345, 'LGM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2876, 'Langside', 'LANGSIDE', 55.82112633, -4.277334114, 'LGS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2877, 'Langwathby', 'LANGWATHBY', 54.69435932, -2.663688074, 'LGW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2878, 'Langwith-Whaley Thorns', 'LANGWITH W THORN', 53.23253667, -1.209707864, 'LAG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2879, 'Lapford', 'LAPFORD', 50.85743381, -3.811468159, 'LAP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2880, 'Lapworth', 'LAPWORTH', 52.34127509, -1.725484472, 'LPW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2881, 'Larbert', 'LARBERT', 56.02269305, -3.830576234, 'LBT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2882, 'Largs', 'LARGS', 55.79272838, -4.867191898, 'LAR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2883, 'Larkhall', 'LARKHAL', 55.73858564, -3.975497722, 'LRH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2884, 'Laurencekirk', 'Laurencekirk', 56.828662, -2.478447, 'LAU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2885, 'Lawrence Hill', 'LAWRENCE HILL', 51.45821869, -2.564165806, 'LWH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2886, 'Layton (Lancs)', 'LAYTON (LANCS)', 53.8356395, -3.030232722, 'LAY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2887, 'Lazonby & Kirkoswald', 'LAZONBY', 54.7502215, -2.702200095, 'LZB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2888, 'Lea Bridge', 'LEABRIDGE', 51.567669, -0.035556, 'LEB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2889, 'Lea Green', 'LEA GREEN', 53.42710585, -2.72383801, 'LEG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2890, 'Lea Hall', 'LEA HALL.', 52.48065151, -1.786020071, 'LEH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2891, 'Leagrave', 'LEAGRAVE', 51.90517, -0.45851, 'LEA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2892, 'Lealholm', 'LEALHOLM', 54.46060115, -0.825714934, 'LHM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2893, 'Leamington Spa', 'LEAMINGTON SPA', 52.28450186, -1.536212243, 'LMS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2894, 'Leasowe', 'LEASOWE', 53.40805676, -3.099603994, 'LSW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2895, 'Leatherhead', 'LEATHERHEAD', 51.29875147, -0.333064888, 'LHD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2896, 'Ledbury', 'LEDBURY', 52.04494532, -2.424982138, 'LED')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2897, 'Lee (London)', 'LEE (LONDON)', 51.44949014, 0.013345094, 'LEE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2898, 'Leeds', 'LEEDS.', 53.79489697, -1.547435079, 'LDS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2899, 'Leicester', 'LEICESTER.', 52.63144566, -1.125278584, 'LEI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2900, 'Leigh (Kent)', 'LEIGH (KENT)', 51.19389559, 0.210506799, 'LIH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2901, 'Leigh-on-Sea', 'LEIGH ON SEA.', 51.54136681, 0.640428318, 'LES')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2902, 'Leighton Buzzard', 'LEIGHTON BUZZARD', 51.91631391, -0.677001817, 'LBZ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2903, 'Lelant', 'LELANT', 50.18411125, -5.436611903, 'LEL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2904, 'Lelant Saltings', 'LELANT SALTINGS', 50.1792896, -5.441449302, 'LTS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2905, 'Lenham', 'LENHAM', 51.234481, 0.70777074, 'LEN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2906, 'Lenzie', 'LENZIE.', 55.92130529, -4.1538798, 'LNZ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2907, 'Leominster', 'LEO', 52.2259, -2.73123, 'LEO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2908, 'Letchworth Garden City', 'LETCHWORTHGC', 51.97997, -0.22926, 'LET')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2909, 'Leuchars (for St. Andrews)', 'LEUCHARS', 56.37509038, -2.89371168, 'LEU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2910, 'Leven', 'LEVEN', 56.192299, -3.001989, 'LEV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2911, 'Levenshulme', 'LEVENSHULME', 53.44443357, -2.192670025, 'LVM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2912, 'Lewes', 'LEWES', 50.87062711, 0.011335211, 'LWS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2913, 'Lewisham', 'LEWISHAM', 51.46569471, -0.014017114, 'LEW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2914, 'Leyland', 'LEYLAND', 53.69886394, -2.687141641, 'LEY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2915, 'Leyton Midland Road', 'LEYTON MID RD', 51.56935467, -0.007048832, 'LEM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2916, 'Leytonstone High Road', 'LEYTONSTONE H RD', 51.5637873, 0.008290676, 'LER')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2917, 'Lichfield City', 'LICHFIELD CITY', 52.68038568, -1.825427009, 'LIC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2918, 'Lichfield Trent Valley', 'LICHFIELD T V', 52.68690855, -1.800236348, 'LTV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2919, 'Lidlington', 'LIDLINGTON', 52.04154787, -0.558918711, 'LID')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2920, 'Limehouse', 'LIMEHOUSE LTS', 51.51279443, -0.039352735, 'LHS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2921, 'Lincoln', 'LINCOLN.', 53.22610544, -0.539919855, 'LCN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2922, 'Lingfield', 'LINGFIELD', 51.17644755, -0.007158941, 'LFD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2923, 'Lingwood', 'LINGWOOD', 52.62223679, 1.489863333, 'LGD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2924, 'Linlithgow', 'LINLITHGOW', 55.97643947, -3.595841381, 'LIN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2925, 'Liphook', 'LIPHOOK', 51.07130974, -0.800231253, 'LIP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2926, 'Liskeard', 'LISKEARD', 50.44684832, -4.467498917, 'LSK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2927, 'Liss', 'LISS', 51.04356403, -0.892872687, 'LIS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2928, 'Lisvane & Thornhill', '-', 51.54457308, -3.185611182, 'LVT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2929, 'Little Kimble', 'LITTLE KIMBLE', 51.752274, -0.808458, 'LTK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2930, 'Little Sutton', 'LITTLE SUTTON', 53.28553102, -2.943299129, 'LTT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2931, 'Littleborough', 'LITTLEBOROUGH', 53.64301072, -2.094646493, 'LTL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2932, 'Littlehampton', 'LITTLEHAMPTON', 50.81010344, -0.545991819, 'LIT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2933, 'Littlehaven', 'LITTLEHAVEN', 51.0797438, -0.307969555, 'LVN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2934, 'Littleport', 'LITTLEPORT', 52.4624, 0.316567, 'LTP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2935, 'Liverpool Central', 'LIVERPOOL CTL', 53.40461053, -2.979159936, 'LVC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2936, 'Liverpool James Street', 'JAMES ST LIVERPL', 53.40477452, -2.991964872, 'LVJ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2937, 'Liverpool Lime Street', 'LIVERPOOL L ST', 53.40731898, -2.977732837, 'LIV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2938, 'Liverpool South Parkway', 'LPY', 53.35758121, -2.889294039, 'LPY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2939, 'Livingston North', 'LIVINGSTON NORTH', 55.90137746, -3.544339538, 'LSN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2940, 'Livingston South', 'LIVINGSTON SOUTH', 55.87168588, -3.501556828, 'LVG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2941, 'Llanaber', 'LLANABER', 52.74152431, -4.07718901, 'LLA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2942, 'Llanbedr', 'LLANBEDR', 52.8208656, -4.110210769, 'LBR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2943, 'Llanbister Road', 'LLT', 52.33643285, -3.213426306, 'LLT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2944, 'Llanbradach', 'LLANBRADACH', 51.60325188, -3.233057973, 'LNB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2945, 'Llandaf', 'LLANDAF', 51.5085276, -3.228913858, 'LLN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2946, 'Llandanwg', 'LLANDANWG', 52.83617691, -4.123870362, 'LDN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2947, 'Llandecwyn', 'LLANDECWYN', 52.92070224, -4.057045956, 'LLC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2948, 'Llandeilo', 'LLANDEILO', 51.8853498, -3.986919994, 'LLL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2949, 'Llandovery', 'LLANDOVERY', 51.99532071, -3.802853279, 'LLV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2950, 'Llandrindod', 'LLO', 52.2423651, -3.379148724, 'LLO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2951, 'Llandudno', 'LLANDUDNO.', 53.32093562, -3.827018135, 'LLD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2952, 'Llandudno Junction', 'LLANDUDNO JN', 53.2839619, -3.809118503, 'LLJ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2953, 'Llandybie', 'LLANDYBIE', 51.83087, -3.99172, 'LLI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2954, 'Llanelli', 'LLANELLI', 51.67386671, -4.161325167, 'LLE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2955, 'Llanfairfechan', 'LLANFAIRFECHAN', 53.25730522, -3.98320943, 'LLF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2956, 'Llanfairpwll', 'LLANFAIRPWLL', 53.22096236, -4.209228885, 'LPG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2957, 'Llangadog', 'LLANGADOG', 51.9402199, -3.893174289, 'LLG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2958, 'Llangammarch', 'LLM', 52.11430955, -3.554833328, 'LLM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2959, 'Llangennech', 'LLANGENNECH', 51.69113653, -4.078948655, 'LLH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2960, 'Llangynllo', 'LGO', 52.34963317, -3.161373191, 'LGO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2961, 'Llanharan', 'Llanharan', 51.53758926, -3.440795127, 'LLR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2962, 'Llanhilleth', 'LTH', 51.70012, -3.13455, 'LTH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2963, 'Llanishen', 'LLANISHEN', 51.53274008, -3.18198768, 'LLS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2964, 'Llanrwst', 'LLANRWST', 53.13904, -3.7946, 'LWR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2965, 'Llansamlet', 'LLANSAMLET', 51.66150151, -3.88471363, 'LAS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2966, 'Llantwit Major', 'LLANTWIT MAJOR', 51.40974773, -3.481635835, 'LWM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2967, 'Llanwrda', 'LLANWRDA', 51.96259418, -3.871700406, 'LNR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2968, 'Llanwrtyd', 'LNW', 52.10472191, -3.632182357, 'LNW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2969, 'Llwyngwril', 'LLWYNGWRIL', 52.66680067, -4.08769294, 'LLW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2970, 'Llwynypia', 'LLWYNYPIA', 51.63399985, -3.453529864, 'LLY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2971, 'Loch Awe', 'LOCH AWE', 56.40200122, -5.041969116, 'LHA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2972, 'Loch Eil Outward Bound', 'LOCH EIL OUT BND', 56.85524832, -5.191569775, 'LHE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2973, 'Lochailort', 'LOCHAILORT', 56.88094612, -5.663384877, 'LCL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2974, 'Locheilside', 'LOCHEILSIDE', 56.8553877, -5.290032463, 'LCS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2975, 'Lochgelly', 'LOCHGELLY', 56.13532052, -3.312935958, 'LCG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2976, 'Lochluichart', 'LOCHLUICHART', 57.62117076, -4.809599793, 'LCC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2977, 'Lochwinnoch', 'LOCHWINNOCH', 55.78714041, -4.616062634, 'LHW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2978, 'Lockerbie', 'LOCKERBIE', 55.12305093, -3.353538081, 'LOC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2979, 'Lockwood', 'LOCKWOOD', 53.63461276, -1.800642023, 'LCK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2980, 'London Blackfriars', 'LONDONBLKFRIARS', 51.51181, -0.10333, 'BFR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2981, 'London Bridge', 'LONDON BRIDGE', 51.50509647, -0.085060385, 'LBG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2982, 'London Cannon Street', 'LONDON CANNON ST', 51.51058265, -0.090609398, 'CST')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2983, 'London Charing Cross', 'LONDON CHARING X', 51.50768803, -0.124105728, 'CHX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2984, 'London Euston', 'LONDON EUSTON', 51.52837626, -0.134558479, 'EUS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2985, 'London Fenchurch Street', 'LONDON FENCH ST', 51.51157341, -0.078591579, 'FST')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2986, 'London Fields', 'LONDON FIELDS', 51.54115819, -0.057746822, 'LOF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2987, 'London Kings Cross', 'LONDON KINGS X', 51.53088842, -0.122921342, 'KGX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2988, 'London Liverpool Street', 'LONDON LIVRPL ST', 51.51802304, -0.081995697, 'LST')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2989, 'London Marylebone', 'LONDON MARYLEBNE', 51.52253342, -0.162651425, 'MYB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2990, 'London Paddington', 'LONDON PADDINGTN', 51.51645141, -0.176844743, 'PAD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2991, 'London Road (Brighton)', 'LONDON RD BRGHTN', 50.83665742, -0.136501977, 'LRB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2992, 'London Road (Guildford)', 'LONDON RD GUILFD', 51.24064745, -0.565064166, 'LRD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2993, 'London St Pancras (Eurostar)', 'St Pancras Intl', 51.53242, -0.12603, 'SPX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2994, 'London St Pancras International', 'St Pancras Dom', 51.53062434, -0.125527439, 'STP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2995, 'London Victoria', 'LONDON VICTORIA', 51.49526139, -0.144540593, 'VIC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2996, 'London Waterloo', 'LONDON WATERLOO', 51.503507, -0.113897, 'WAT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2997, 'London Waterloo East', 'LONDON WATRLOO E', 51.50408038, -0.108893287, 'WAE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2998, 'Long Buckby', 'LONG BUCKBY', 52.29472704, -1.08647082, 'LBK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (2999, 'Long Eaton', 'LONG EATON.', 52.88514513, -1.288104264, 'LGE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3000, 'Long Preston', 'LONG PRESTON', 54.01684584, -2.255589281, 'LPR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3001, 'Longbeck', 'LONGBECK', 54.58922624, -1.030941986, 'LGK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3002, 'Longbridge', 'LONGBRIDGE.', 52.39642483, -1.981291124, 'LOB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3003, 'Longcross', 'LONGCROSS', 51.38517473, -0.594565138, 'LNG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3004, 'Longfield', 'LONGFIELD', 51.39615545, 0.300379852, 'LGF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3005, 'Longniddry', 'LONGNIDDRY', 55.9764786, -2.888344638, 'LND')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3006, 'Longport', 'LONGPORT', 53.04169194, -2.216225493, 'LPT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3007, 'Longton', 'LONGTON', 52.989671, -2.137010067, 'LGN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3008, 'Looe', 'LOOE', 50.3592157, -4.456201102, 'LOO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3009, 'Lostock', 'LOSTOCK.', 53.57299748, -2.493775435, 'LOT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3010, 'Lostock Gralam', 'LOSTOCK GRALAM', 53.26767922, -2.465211107, 'LTG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3011, 'Lostock Hall', 'LOSTOCK HALL', 53.72385234, -2.687094284, 'LOH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3012, 'Lostwithiel', 'LOSTWITHIEL', 50.40749717, -4.665464131, 'LOS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3013, 'Loughborough', 'LOUGHBOROUGH.', 52.77897038, -1.195932923, 'LBO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3014, 'Loughborough Junction', 'LOUGHBOROUGHJN', 51.46671, -0.10252, 'LGJ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3015, 'Low Moor', 'LowMoor', 53.7500232, -1.7528767, 'LMR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3016, 'Lowdham', 'LOWDHAM', 53.00692902, -0.997582237, 'LOW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3017, 'Lower Sydenham', 'LOWER SYDENHAM', 51.42483262, -0.033338978, 'LSY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3018, 'Lowestoft', 'LOWESTOFT.', 52.47445691, 1.749727847, 'LWT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3019, 'Ludlow', 'LUD', 52.37118, -2.71622, 'LUD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3020, 'Luton', 'LUTON', 51.88231, -0.41404, 'LUT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3021, 'Luton Airport Parkway', 'LUTONAIRPORTPW', 51.87286, -0.3962, 'LTN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3022, 'Luxulyan', 'LUXULYAN', 50.39029491, -4.74751507, 'LUX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3023, 'Lydney', 'LYD', 51.7146265, -2.531163478, 'LYD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3024, 'Lye (West Midlands)', 'LYE WEST MIDLAND', 52.45993087, -2.115932275, 'LYE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3025, 'Lymington Pier', 'LYMINGTON PIER', 50.75828671, -1.529457537, 'LYP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3026, 'Lymington Town', 'LYMINGTON TOWN', 50.76089855, -1.537172813, 'LYT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3027, 'Lympstone Commando', 'LYMPSTONE COMM', 50.66222519, -3.440861256, 'LYC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3028, 'Lympstone Village', 'LYMPSTONE VLLAGE', 50.64867164, -3.431393476, 'LYM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3029, 'Lytham', 'LYTHAM', 53.7392924, -2.964043873, 'LTM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3030, 'Macclesfield', 'MACCLESFIELD', 53.25935609, -2.121380478, 'MAC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3031, 'Machynlleth', 'MACHYNLLETH.', 52.5951531, -3.854549885, 'MCN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3032, 'Maesteg', 'MAESTEG', 51.60993535, -3.654667781, 'MST')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3033, 'Maesteg (Ewenny Road)', 'MAESTEG EWENY RD', 51.60568, -3.64841, 'MEW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3034, 'Maghull', 'MAGHULL', 53.50648347, -2.930857798, 'MAG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3035, 'Maghull North', 'MAGHULLNORTH', 53.516, -2.922, 'MNS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3036, 'Maiden Newton', 'MAIDEN NEWTON', 50.77999537, -2.569440541, 'MDN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3037, 'Maidenhead', 'MAIDENHEAD.', 51.51866595, -0.722658698, 'MAI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3038, 'Maidstone Barracks', 'MAIDSTONE BKS', 51.27716608, 0.513966736, 'MDB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3039, 'Maidstone East', 'MAIDSTONE EAST', 51.27782671, 0.521301857, 'MDE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3040, 'Maidstone West', 'MAIDSTONE WEST', 51.2704626, 0.515780027, 'MDW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3041, 'Malden Manor', 'MALDEN MANOR', 51.38463927, -0.261133898, 'MAL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3042, 'Mallaig', 'MALLAIG', 57.00596656, -5.829589323, 'MLG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3043, 'Malton', 'MALTON', 54.13208477, -0.797222763, 'MLT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3044, 'Malvern Link', 'MALVERN LINK', 52.12538603, -2.319857656, 'MVL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3045, 'Manchester Airport', 'MANCHESTER AIRPT', 53.36505845, -2.272981546, 'MIA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3046, 'Manchester Oxford Road', 'MANCHESTER O RD', 53.47399664, -2.242522887, 'MCO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3047, 'Manchester Piccadilly', 'MANCHESTER PIC', 53.47671998, -2.228977818, 'MAN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3048, 'Manchester United Football Ground', 'MANCHESTER F C', 53.4622129, -2.290654777, 'MUF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3049, 'Manchester Victoria', 'MANCHESTER VIC', 53.48747956, -2.242599788, 'MCV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3050, 'Manea', 'MANEA', 52.49785289, 0.177697575, 'MNE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3051, 'Manningtree', 'MANNINGTREE', 51.94906612, 1.045251421, 'MNG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3052, 'Manor Park', 'MANOR PARK', 51.55235651, 0.04529243, 'MNP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3053, 'Manor Road', 'MANOR ROAD', 53.39479742, -3.171450295, 'MNR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3054, 'Manorbier', 'MANORBIER', 51.66016796, -4.791870151, 'MRB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3055, 'Manors', 'MANORS', 54.97276358, -1.604744532, 'MAS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3056, 'Mansfield', 'MANSFIELD.', 53.14255896, -1.197157497, 'MFT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3057, 'Mansfield Woodhouse', 'MANSFIELD WOODH', 53.16145454, -1.199796358, 'MSW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3058, 'March', 'MARCH', 52.55990987, 0.091199581, 'MCH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3059, 'Marden (Kent)', 'MARDEN KENT', 51.17516959, 0.493174606, 'MRN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3060, 'Margate', 'MARGATE', 51.38543564, 1.372020955, 'MAR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3061, 'Market Harborough', 'MARKET HARBORO.', 52.48040756, -0.908871723, 'MHR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3062, 'Market Rasen', 'MARKET RASEN', 53.38447725, -0.337094278, 'MKR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3063, 'Markinch', 'MARKINCH', 56.2010078, -3.130777483, 'MNC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3064, 'Marks Tey', 'MARKS TEY', 51.88095194, 0.783345532, 'MKT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3065, 'Marlow', 'MARLOW', 51.57099199, -0.766429862, 'MLW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3066, 'Marple', 'MARPLE', 53.40070996, -2.057258911, 'MPL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3067, 'Marsden (Yorks)', 'MARSDEN YORKS', 53.60320016, -1.930755584, 'MSN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3068, 'Marsh Barton', 'MSBTN', 50.7063522, -3.5207435, 'MBT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3069, 'Marske', 'MARSKE', 54.58742173, -1.0189143, 'MSK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3070, 'Marston Green', 'MARSTON GREEN.', 52.46719715, -1.755614357, 'MGN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3071, 'Martin Mill', 'MARTIN MILL', 51.17067872, 1.348232601, 'MTM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3072, 'Martins Heron', 'MARTINS HERON', 51.40759741, -0.724677798, 'MAO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3073, 'Marton', 'MARTON', 54.54380222, -1.197717189, 'MTO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3074, 'Maryhill', 'MARYHILL', 55.89714547, -4.301942516, 'MYH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3075, 'Maryland', 'MARYLAND', 51.54583974, 0.00605784, 'MYL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3076, 'Maryport', 'MARYPORT', 54.71158569, -3.494701885, 'MRY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3077, 'Matlock', 'MATLOCK.', 53.13815608, -1.558986118, 'MAT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3078, 'Matlock Bath', 'MATLOCK BATH', 53.12197042, -1.557657491, 'MTB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3079, 'Mauldeth Road', 'MAULDETH ROAD', 53.43361928, -2.20917839, 'MAU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3080, 'Maxwell Park', 'MAXWELL PARK', 55.83771381, -4.288685601, 'MAX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3081, 'Maybole', 'MAYBOLE', 55.35472644, -4.68528221, 'MAY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3082, 'Maze Hill', 'MAZE HILL', 51.48293643, 0.003295611, 'MZH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3083, 'Meadowhall', 'MEADOWHALL', 53.41690227, -1.41361886, 'MHS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3084, 'Meldreth', 'MELDRETH', 52.09073, 0.008953, 'MEL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3085, 'Melksham', 'MELKSHAM.', 51.37981906, -2.144507047, 'MKM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3086, 'Melton (Suffolk)', 'MELTON SUFFOLK', 52.10445728, 1.338257583, 'MES')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3087, 'Melton Mowbray', 'MELTON MOWBRAY', 52.7606833, -0.885577764, 'MMO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3088, 'Menheniot', 'MENHENIOT', 50.42622082, -4.40925881, 'MEN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3089, 'Menston', 'MENSTON', 53.89235171, -1.735508485, 'MNN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3090, 'Meols', 'MEOLS', 53.39945033, -3.154281087, 'MEO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3091, 'Meols Cop', 'MEOLS COP', 53.646167, -2.975382686, 'MEC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3092, 'Meopham', 'MEOPHAM', 51.3864239, 0.356954369, 'MEP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3093, 'Meridian Water', 'MERIDIANWATER', 51.6110012, -0.0493156, 'MRW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3094, 'Merryton', 'MRRYTON', 55.74869713, -3.978239595, 'MEY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3095, 'Merstham', 'MERSTHAM', 51.26415181, -0.150223451, 'MHM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3096, 'Merthyr Tydfil', 'MERTHYR TYDFIL', 51.74458569, -3.377291952, 'MER')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3097, 'Merthyr Vale', 'MERTHYR VALE', 51.68664396, -3.336588445, 'MEV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3098, 'Metheringham', 'METHERINGHAM', 53.13890433, -0.391447021, 'MGM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3099, 'MetroCentre', 'METROCENTRE', 54.9587475, -1.665631298, 'MCE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3100, 'Mexborough', 'MEXBOROUGH', 53.49101072, -1.288564361, 'MEX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3101, 'Micheldever', 'MICHELDEVER', 51.18239077, -1.260678431, 'MIC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3102, 'Micklefield', 'MICKLEFIELD', 53.78909282, -1.324363018, 'MIK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3103, 'Middlesbrough', 'MIDDLESBROUGH.', 54.57911045, -1.234712568, 'MBR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3104, 'Middlewood', 'MIDDLEWOOD', 53.35997512, -2.08334968, 'MDL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3105, 'Midgham', 'MIDGHAM', 51.39596936, -1.177708473, 'MDG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3106, 'Milford (Surrey)', 'MILFORD SURREY', 51.163315, -0.636946048, 'MLF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3107, 'Milford Haven', 'MILFORD HAVEN', 51.71497622, -5.041000361, 'MFH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3108, 'Mill Hill (Lancs)', 'MILL HILL LANCS', 53.73546799, -2.501741498, 'MLH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3109, 'Mill Hill Broadway', 'MILLHILLBWAY', 51.61288, -0.24954, 'MIL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3110, 'Millbrook (Bedfordshire)', 'MILLBROOK BEDS', 52.05384836, -0.532692607, 'MLB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3111, 'Millbrook (Hants)', 'MILLBROOK HANTS', 50.91148638, -1.433849643, 'MBK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3112, 'Milliken Park', 'MILLIKEN PARK', 55.82509709, -4.533342722, 'MIN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3113, 'Millom', 'MILLOM', 54.21083074, -3.271093719, 'MLM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3114, 'Mills Hill (Manchester)', 'MILLS HILL MANCR', 53.55052249, -2.17202063, 'MIH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3115, 'Milngavie', 'MILNGAVIE', 55.94084886, -4.315104558, 'MLN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3116, 'Milton Keynes Central', 'MILTON KEYNES C.', 52.03429998, -0.774142566, 'MKC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3117, 'Minffordd', 'MINFFORDD', 52.92587, -4.08412, 'MFF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3118, 'Minster', 'MINSTER', 51.32917959, 1.31723234, 'MSR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3119, 'Mirfield', 'MIRFIELD', 53.67159426, -1.691785436, 'MIR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3120, 'Mistley', 'MISTLEY', 51.94364535, 1.081412598, 'MIS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3121, 'Mitcham Eastfields', 'MITCHAM EASTFLDS', 51.40840457, -0.15396924, 'MTC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3122, 'Mitcham Junction', 'MITCHAM JUNCTION', 51.39294461, -0.157322869, 'MIJ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3123, 'Mobberley', 'MOBBERLEY', 53.32996527, -2.333300348, 'MOB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3124, 'Monifieth', 'MONIFIETH', 56.48010302, -2.818243249, 'MON')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3125, 'Monks Risborough', 'MONKS RISBOROUGH', 51.73576572, -0.829333579, 'MRS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3126, 'Montpelier', 'MONTPELIER', 51.46889519, -2.587332548, 'MTP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3127, 'Montrose', 'MONTROSE', 56.71278581, -2.472074707, 'MTS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3128, 'Moorfields', 'MOORFIELDS', 53.40857308, -2.989179871, 'MRF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3129, 'Moorgate', 'MOORGATE.', 51.519563, -0.09024, 'MOG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3130, 'Moorside', 'MOORSIDE', 53.51596879, -2.352855774, 'MSD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3131, 'Moorthorpe', 'MOORTHORPE', 53.59446929, -1.304958873, 'MRP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3132, 'Morar', 'MORAR', 56.96969552, -5.821910524, 'MRR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3133, 'Morchard Road', 'MORCHARD ROAD', 50.83189161, -3.776395869, 'MRD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3134, 'Morden South', 'MORDENSOUTH', 51.39631, -0.20031, 'MDS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3135, 'Morecambe', 'MORECAMBE', 54.07035269, -2.869964906, 'MCM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3136, 'Moreton (Dorset)', 'MORETON DORSET', 50.70110851, -2.312902315, 'MTN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3137, 'Moreton (Merseyside)', 'MORETON MERSEY', 53.40793134, -3.113140165, 'MRT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3138, 'Moreton-in-Marsh', 'MORETON IN MARSH', 51.99228415, -1.700388972, 'MIM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3139, 'Morfa Mawddach', 'MORFA MAWDDACH', 52.70714813, -4.032181673, 'MFA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3140, 'Morley', 'MORLEY', 53.74994099, -1.590971837, 'MLY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3141, 'Morpeth', 'MORPETH', 55.1625058, -1.682921137, 'MPT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3142, 'Mortimer', 'MORTIMER', 51.37207211, -1.03550347, 'MOR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3143, 'Mortlake', 'MORTLAKE', 51.46835266, -0.266591584, 'MTL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3144, 'Moses Gate', 'MOSES GATE', 53.55599573, -2.401192526, 'MSS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3145, 'Moss Side', 'MOSS SIDE', 53.76444408, -2.943532624, 'MOS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3146, 'Mossley (Manchester)', 'MOSSLEY MANCHR', 53.5146843, -2.042180876, 'MSL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3147, 'Mossley Hill', 'MOSSLEY HILL', 53.37905641, -2.915448411, 'MSH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3148, 'Mosspark', 'MOSSPARK', 55.84082364, -4.347809296, 'MPK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3149, 'Moston', 'MOSTON', 53.52265793, -2.171907727, 'MSO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3150, 'Motherwell', 'MOTHERWELL.', 55.79166603, -3.994311557, 'MTH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3151, 'Motspur Park', 'MOTSPUR PARK', 51.39510266, -0.239174525, 'MOT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3152, 'Mottingham', 'MOTTINGHAM', 51.4398558, 0.050334368, 'MTG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3153, 'Mottisfont & Dunbridge', 'DUNBRIDGE', 51.03379277, -1.546724812, 'DBG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3154, 'Mouldsworth', 'MOULDSWORTH', 53.23181982, -2.732225441, 'MLD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3155, 'Moulsecoomb', 'MOULSECOOMB', 50.84671673, -0.118840894, 'MCB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3156, 'Mount Florida', 'MOUNT FLORIDA', 55.82679274, -4.262017463, 'MFL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3157, 'Mount Vernon', 'MOUNT VERNON', 55.83982986, -4.136593827, 'MTV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3158, 'Mountain Ash', 'MOUNTAIN ASH', 51.68132902, -3.376355225, 'MTA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3159, 'Muir of Ord', 'MUIR OF ORD', 57.51791206, -4.460939805, 'MOO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3160, 'Muirend', 'MUIREND', 55.81040572, -4.273834935, 'MUI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3161, 'Musselburgh', 'MUSSELBURGH', 55.93358441, -3.073191904, 'MUB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3162, 'Mytholmroyd', 'MYTHOLMROYD', 53.72902055, -1.981432246, 'MYT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3163, 'Nafferton', 'NAFFERTON', 54.01169775, -0.386978527, 'NFN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3164, 'Nailsea & Backwell', '-', 51.41940681, -2.750646299, 'NLS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3165, 'Nairn', 'NAIRN', 57.58012963, -3.872998212, 'NRN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3166, 'Nantwich', 'NANTWICH', 53.06322887, -2.519249351, 'NAN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3167, 'Narberth', 'NARBERTH', 51.79937326, -4.727212166, 'NAR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3168, 'Narborough', 'NARBOROUGH', 52.57131212, -1.203351787, 'NBR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3169, 'Navigation Road', 'NAVIGATION ROAD', 53.39546529, -2.343587, 'NVR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3170, 'Neath', 'NEATH.', 51.66235974, -3.807245183, 'NTH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3171, 'Needham Market', 'NEEDHAM MARKET', 52.15260095, 1.05527234, 'NMT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3172, 'Neilston', 'NEILSTON', 55.78303028, -4.426950811, 'NEI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3173, 'Nelson', 'NELSON', 53.83501859, -2.213756609, 'NEL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3174, 'Neston', 'NESTON', 53.29166, -3.06379, 'NES')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3175, 'Netherfield', 'NETHERFIELD', 52.96147483, -1.07962538, 'NET')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3176, 'Nethertown', 'NETHERTOWN', 54.45695431, -3.566398862, 'NRT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3177, 'Netley', 'NETLEY', 50.8748526, -1.341766118, 'NTL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3178, 'New Barnet', 'NEWBARNET', 51.64857, -0.17299, 'NBA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3179, 'New Beckenham', 'NEW BECKENHAM', 51.41677126, -0.035267105, 'NBC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3180, 'New Brighton', 'NEW BRIGHTON', 53.43727598, -3.049174288, 'NBN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3181, 'New Clee', 'NEW CLEE', 53.57446029, -0.05914558, 'NCE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3182, 'New Cross', 'NEW CROSS', 51.47635659, -0.032995347, 'NWX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3183, 'New Cross Gate', 'NEW CROSS GATE', 51.47531127, -0.040384664, 'NXG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3184, 'New Cumnock', 'NEW CUMNOCK', 55.40272967, -4.184335551, 'NCK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3185, 'New Eltham', 'NEW ELTHAM', 51.43770471, 0.070382648, 'NEH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3186, 'New Holland', 'NEW HOLLAND', 53.70193475, -0.360203766, 'NHL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3187, 'New Hythe', 'NEW HYTHE', 51.3130007, 0.454934662, 'NHE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3188, 'New Lane', 'NEW LANE', 53.61132045, -2.867559911, 'NLN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3189, 'New Malden', 'NEW MALDEN', 51.40407643, -0.255939507, 'NEM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3190, 'New Mills Central', 'NEW MILLS CTL', 53.36485808, -2.00566548, 'NMC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3191, 'New Mills Newtown', 'NEW MILLS NEWTN', 53.35964437, -2.008519722, 'NMN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3192, 'New Milton', 'NEW MILTON', 50.75573929, -1.65781268, 'NWM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3193, 'New Pudsey', 'NEW PUDSEY', 53.80449407, -1.680789733, 'NPD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3194, 'New Southgate', 'NEWSOUTHGATE', 51.61412, -0.14303, 'NSG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3195, 'Newark Castle', 'NEWARK CASTLE', 53.08002714, -0.81315172, 'NCT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3196, 'Newark Northgate', 'NEWARK N GATE', 53.08191008, -0.800110846, 'NNG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3197, 'Newbridge', 'NBE', 51.66569, -3.14219, 'NBE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3198, 'Newbury', 'NEWBURY.', 51.39764427, -1.322862459, 'NBY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3199, 'Newbury Racecourse', 'NEWBURY RACECSE', 51.39845548, -1.307799999, 'NRC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3200, 'Newcastle', 'NEWCASTLE.', 54.96822056, -1.617285496, 'NCL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3201, 'Newcourt', 'NWCOURT', 50.7023, -3.472551, 'NCO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3202, 'Newcraighall', 'NEWCRAIGHALL', 55.93485014, -3.092756701, 'NEW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3203, 'Newhaven Harbour', 'NEWHAVEN HARBOUR', 50.78978441, 0.054998379, 'NVH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3204, 'Newhaven Town', 'NEWHAVEN TOWN', 50.79484885, 0.054950925, 'NVN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3205, 'Newington', 'NEWINGTON', 51.35334004, 0.668581912, 'NGT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3206, 'Newmarket', 'NEWMARKET.', 52.23795928, 0.406217482, 'NMK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3207, 'Newport (Essex)', 'NEWPORT ESSEX', 51.97987781, 0.215142617, 'NWE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3208, 'Newport (South Wales)', 'NWP', 51.58974436, -2.998648615, 'NWP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3209, 'Newquay', 'NEWQUAY', 50.41508811, -5.075708631, 'NQY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3210, 'Newsham', 'NEWSHAM', 55.10327921, -1.524313421, 'NWH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3211, 'Newstead', 'NEWSTEAD', 53.07171822, -1.22235722, 'NSD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3212, 'Newton (Lanark)', 'NEWTON LANARK', 55.81877088, -4.133044742, 'NTN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3213, 'Newton Abbot', 'NEWTON ABBOT', 50.52956986, -3.599193375, 'NTA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3214, 'Newton Aycliffe', 'NEWTON AYCLIFFE', 54.61370904, -1.589650446, 'NAY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3215, 'Newton for Hyde', 'NEWTON FOR HYDE', 53.45670495, -2.066972742, 'NWN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3216, 'Newton St Cyres', 'NEWTON ST CYRES', 50.77891926, -3.589414088, 'NTC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3217, 'Newton-le-Willows', 'NEWTON LE WILL', 53.45307176, -2.613594198, 'NLW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3218, 'Newton-on-Ayr', 'NEWTON ON AYR', 55.47404673, -4.625817279, 'NOA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3219, 'Newtongrange', 'NWTGRNG', 55.864925, -3.0685446, 'NEG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3220, 'Newtonmore', 'NEWTONMORE', 57.05912906, -4.119103389, 'NWR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3221, 'Newtown (Powys)', 'NEWTOWN POWYS', 52.51232684, -3.311399078, 'NWT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3222, 'Ninian Park', 'NINIAN PARK', 51.47644072, -3.201411567, 'NNP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3223, 'Nitshill', 'NITSHILL', 55.81191946, -4.359954594, 'NIT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3224, 'Norbiton', 'NORBITON', 51.41249564, -0.28409246, 'NBT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3225, 'Norbury', 'NORBURY', 51.41144749, -0.121922189, 'NRB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3226, 'Normans Bay', 'NORMANS BAY', 50.82609675, 0.389476518, 'NSB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3227, 'Normanton', 'NORMANTON', 53.69990584, -1.423491413, 'NOR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3228, 'North Berwick', 'NORTH BERWICK', 56.0570324, -2.730738187, 'NBW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3229, 'North Camp', 'NORTH CAMP', 51.27579399, -0.731198355, 'NCM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3230, 'North Dulwich', 'NORTH DULWICH', 51.45451316, -0.087912394, 'NDL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3231, 'North Fambridge', 'FAMBRIDGE', 51.64859041, 0.681672508, 'NFA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3232, 'North Llanrwst', 'NORTH LLANRWST', 53.14384493, -3.802744992, 'NLR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3233, 'North Queensferry', 'NORTH QUEENSFY', 56.01248816, -3.394583946, 'NQU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3234, 'North Road (Darlington)', 'NORTH ROAD', 54.53620358, -1.553954408, 'NRD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3235, 'North Sheen', 'NORTH SHEEN', 51.46540691, -0.286427277, 'NSH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3236, 'North Walsham', 'NORTH WALSHAM', 52.81691581, 1.384466116, 'NWA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3237, 'North Wembley', 'NORTH WEMBLEY', 51.56260225, -0.303984384, 'NWB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3238, 'Northallerton', 'NORTHALLERTON', 54.3330789, -1.441275691, 'NTR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3239, 'Northampton', 'NORTHAMPTON.', 52.23750925, -0.906652319, 'NMP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3240, 'Northfield', 'NORTHFIELD.', 52.40819871, -1.965850518, 'NFD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3241, 'Northfleet', 'NORTHFLEET', 51.44584818, 0.3243358, 'NFL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3242, 'Northolt Park', 'NORTHOLT PARK', 51.55763535, -0.359421311, 'NLT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3243, 'Northumberland Park (London)', 'NORTHUMBERLAND P', 51.60170041, -0.05357565, 'NUM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3244, 'Northumberland Park (Tyne & Wear)', 'NBRLNDPRK', 55.03308899, -1.519911289, 'NOP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3245, 'Northwich', 'NORTHWICH', 53.26146564, -2.496926038, 'NWI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3246, 'Norton Bridge', 'NORTON BRIDGE', 52.86671919, -2.190546498, 'NTB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3247, 'Norwich', 'NORWICH.', 52.62717818, 1.306828331, 'NRW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3248, 'Norwood Junction', 'NORWOOD JUNCTION', 51.39702022, -0.075216424, 'NWD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3249, 'Nottingham', 'NOTTINGHAM.', 52.94717947, -1.14688808, 'NOT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3250, 'Nuneaton', 'NUNEATON.', 52.52638876, -1.463873901, 'NUN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3251, 'Nunhead', 'NUNHEAD', 51.46697308, -0.052692347, 'NHD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3252, 'Nunthorpe', 'NUNTHORPE', 54.52788343, -1.169442639, 'NNT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3253, 'Nutbourne', 'NUTBOURNE', 50.8460569, -0.882951949, 'NUT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3254, 'Nutfield', 'NUTFIELD', 51.22686567, -0.133758333, 'NUF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3255, 'Oakengates', 'OAKENGATES', 52.69341403, -2.45019074, 'OKN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3256, 'Oakham', 'OAKHAM', 52.67223558, -0.73416278, 'OKM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3257, 'Oakleigh Park', 'OAKLEIGHPARK', 51.63769, -0.16621, 'OKL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3258, 'Oban', 'OBAN', 56.41246429, -5.473920404, 'OBN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3259, 'Ockendon', 'OCKENDON', 51.52199618, 0.290470928, 'OCK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3260, 'Ockley', 'OCKLEY', 51.15150662, -0.336003059, 'OLY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3261, 'Okehampton', 'OKE', 50.737521, -3.995299, 'OKE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3262, 'Old Hill', 'OLD HILL.', 52.47094242, -2.056191934, 'OHL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3263, 'Old Roan', 'OLD ROAN', 53.48690801, -2.951077083, 'ORN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3264, 'Old Street', 'OLD STREET.', 51.52583656, -0.088529581, 'OLD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3265, 'Oldfield Park', 'OLDFIELD PARK', 51.37920116, -2.3802945, 'OLF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3266, 'Olton', 'OLTON.', 52.43851888, -1.804318398, 'OLT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3267, 'Ore', 'ORE', 50.86694236, 0.591574525, 'ORE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3268, 'Ormskirk', 'ORMSKIRK', 53.56896888, -2.88179342, 'OMS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3269, 'Orpington', 'ORPINGTON', 51.37352201, 0.089038526, 'ORP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3270, 'Orrell', 'ORRELL.', 53.52993615, -2.70929685, 'ORR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3271, 'Orrell Park', 'ORRELL PARK', 53.46191022, -2.963321542, 'OPK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3272, 'Otford', 'OTFORD', 51.31315635, 0.196790978, 'OTF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3273, 'Oulton Broad North', 'OULTON BROAD N', 52.47777986, 1.715729717, 'OUN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3274, 'Oulton Broad South', 'OULTON BROAD S', 52.46974778, 1.707982367, 'OUS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3275, 'Outwood', 'OUTWOOD.', 53.71503172, -1.509941857, 'OUT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3276, 'Overpool', 'OVERPOOL', 53.28414758, -2.924818617, 'OVE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3277, 'Overton', 'OVERTON', 51.25405532, -1.260016842, 'OVR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3278, 'Oxenholme Lake District', 'OXENHOLME LAKE D', 54.30524797, -2.722253183, 'OXN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3279, 'Oxford', 'OXFORD.', 51.75350075, -1.270151173, 'OXF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3280, 'Oxford Parkway', 'OXFORD PARKWAY', 51.80355007, -1.274979798, 'OXP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3281, 'Oxshott', 'OXSHOTT', 51.33639577, -0.362408246, 'OXS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3282, 'Oxted', 'OXTED', 51.25790506, -0.004812996, 'OXT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3283, 'Paddock Wood', 'PADDOCK WOOD', 51.18226074, 0.389165396, 'PDW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3284, 'Padgate', 'PADGATE', 53.40580767, -2.556805552, 'PDG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3285, 'Paignton', 'PAIGNTON', 50.43470781, -3.564338773, 'PGN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3286, 'Paisley Canal', 'PAISLEY CANAL', 55.84006858, -4.423795846, 'PCN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3287, 'Paisley Gilmour Street', 'PAISLEY GIL ST', 55.84733502, -4.424503877, 'PYG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3288, 'Paisley St James', 'PAISLEY ST JAMES', 55.85210338, -4.442440916, 'PYJ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3289, 'Palmers Green', 'PALMERS GREEN', 51.61882, -0.11034, 'PAL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3290, 'Pangbourne', 'PANGBOURNE', 51.4853982, -1.090464668, 'PAN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3291, 'Pannal', 'PANNAL', 53.95833848, -1.533459179, 'PNL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3292, 'Pantyffynnon', 'PANTYFFYNNON', 51.77867, -3.9975, 'PTF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3293, 'Par', 'PAR', 50.35531723, -4.704719639, 'PAR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3294, 'Parbold', 'PARBOLD', 53.59095037, -2.770600227, 'PBL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3295, 'Park Street', 'PARK STREET', 51.72546034, -0.340277192, 'PKT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3296, 'Parkstone (Dorset)', 'PARKSTONE DORSET', 50.72310029, -1.948956257, 'PKS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3297, 'Parson Street', 'PARSON STREET', 51.43353995, -2.608313932, 'PSN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3298, 'Partick', 'PARTICK', 55.86987384, -4.30880039, 'PTK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3299, 'Parton', 'PARTON', 54.56990389, -3.582020124, 'PRN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3300, 'Patchway', 'PATCHWAY', 51.52592522, -2.562695774, 'PWY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3301, 'Patricroft', 'PATRICROFT', 53.48512529, -2.35697017, 'PAT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3302, 'Patterton', 'PATTERTON', 55.79038666, -4.334882502, 'PTT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3303, 'Peartree', 'PEARTREE', 52.89806425, -1.472677646, 'PEA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3304, 'Peckham Rye', 'PECKHAM RYE', 51.47003714, -0.069394247, 'PMR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3305, 'Pegswood', 'PEGSWOOD', 55.17767637, -1.644487291, 'PEG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3306, 'Pemberton', 'PEMBERTON', 53.53034636, -2.66932411, 'PEM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3307, 'Pembrey & Burry Port', '-', 51.68415, -4.24873, 'PBY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3308, 'Pembroke', 'PEMBROKE', 51.67314, -4.90651, 'PMB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3309, 'Pembroke Dock', 'PEMBROKE DOCK', 51.69391548, -4.93807661, 'PMD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3310, 'Pen-y-Bont (Mid Wales)', 'PNY', 52.27394924, -3.321940024, 'PNY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3311, 'Penally', 'PENALLY', 51.65892008, -4.722092618, 'PNA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3312, 'Penarth', 'PENARTH', 51.43588909, -3.174465022, 'PEN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3313, 'Pencoed', 'PENCOED', 51.52486, -3.50014, 'PCD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3314, 'Pengam', 'PENGAM', 51.67045291, -3.230109732, 'PGM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3315, 'Penge East', 'PENGE EAST', 51.41933448, -0.054142784, 'PNE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3316, 'Penge West', 'PENGE WEST', 51.41755688, -0.060834219, 'PNW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3317, 'Penhelig', 'PENHELIG', 52.54570208, -4.03503834, 'PHG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3318, 'Penistone', 'PENISTONE', 53.52552057, -1.622552219, 'PNS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3319, 'Penkridge', 'PENKRIDGE', 52.72351572, -2.119295161, 'PKG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3320, 'Penmaenmawr', 'PENMAENMAWR', 53.27048358, -3.923515874, 'PMW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3321, 'Penmere', 'PENMERE', 50.1497831, -5.083003855, 'PNM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3322, 'Penrhiwceiber', 'PENRHIWCEIBER', 51.66992031, -3.359957291, 'PER')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3323, 'Penrhyndeudraeth', 'PENRHYNDEUDRAETH', 52.92884346, -4.064573948, 'PRH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3324, 'Penrith (North Lakes)', 'PENRITH', 54.6618117, -2.758035421, 'PNR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3325, 'Penryn (Cornwall)', 'PENRYN CORNWALL', 50.17026855, -5.110935401, 'PYN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3326, 'Pensarn (Gwynedd)', 'PENSARN', 52.83072115, -4.112173075, 'PES')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3327, 'Penshurst', 'PENSHURST', 51.19733253, 0.173483045, 'PHR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3328, 'Pentre-Bach', 'PENTRE BACH', 51.72501373, -3.362333939, 'PTB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3329, 'Penychain', 'PENYCHAIN', 52.902882, -4.33872, 'PNC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3330, 'Penyffordd', 'PENYFFORDD', 53.14311037, -3.054849214, 'PNF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3331, 'Penzance', 'PENZANCE', 50.12168229, -5.532467153, 'PNZ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3332, 'Perranwell', 'PERRANWELL', 50.21648441, -5.111839596, 'PRW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3333, 'Perry Barr', 'PERRY BARR.', 52.51649543, -1.90195665, 'PRY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3334, 'Pershore', 'PERSHORE.', 52.13029348, -2.07154008, 'PSH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3335, 'Perth', 'PERTH.', 56.39268166, -3.4400422, 'PTH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3336, 'Peterborough', 'PETERBOROUGH', 52.57499236, -0.249830061, 'PBO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3337, 'Petersfield', 'PETERSFIELD', 51.00671834, -0.941143838, 'PTR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3338, 'Petts Wood', 'PETTS WOOD', 51.38861936, 0.074490155, 'PET')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3339, 'Pevensey & Westham', '-', 50.81579197, 0.324820485, 'PEV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3340, 'Pevensey Bay', 'PEVENSEY BAY', 50.81745345, 0.342920162, 'PEB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3341, 'Pewsey', 'PEWSEY', 51.34218734, -1.770675036, 'PEW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3342, 'Pilning', 'PILNING', 51.55662016, -2.627119757, 'PIL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3343, 'Pinhoe', 'PINHOE', 50.73756769, -3.47151678, 'PIN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3344, 'Pitlochry', 'PITLOCHRY', 56.70249117, -3.735573831, 'PIT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3345, 'Pitsea', 'PITSEA', 51.56036385, 0.506301215, 'PSE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3346, 'Pleasington', 'PLEASINGTON', 53.73096858, -2.544130993, 'PLS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3347, 'Plockton', 'PLOCKTON', 57.3335421, -5.666000294, 'PLK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3348, 'Pluckley', 'PLUCKLEY', 51.15647459, 0.747408729, 'PLC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3349, 'Plumley', 'PLUMLEY', 53.27468889, -2.419668513, 'PLM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3350, 'Plumpton', 'PLUMPTON', 50.9286601, -0.060178055, 'PMP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3351, 'Plumstead', 'PLUMSTEAD', 51.48979844, 0.084266668, 'PLU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3352, 'Plymouth', 'PLYMOUTH.', 50.37781736, -4.143363131, 'PLY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3353, 'Pokesdown', 'POKESDOWN', 50.73107393, -1.825106845, 'POK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3354, 'Polegate', 'POLEGATE', 50.82121828, 0.245732124, 'PLG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3355, 'Polesworth', 'POLESWORTH', 52.6259325, -1.609950777, 'PSW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3356, 'Pollokshaws East', 'POLLOKSHAWS EAST', 55.82470459, -4.287442409, 'PWE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3357, 'Pollokshaws West', 'POLLOKSHAWS WEST', 55.82381126, -4.30159977, 'PWW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3358, 'Pollokshields East', 'POLLOKSHIELDS E', 55.84105199, -4.268595988, 'PLE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3359, 'Pollokshields West', 'POLLOKSHIELDS W', 55.83768428, -4.27574678, 'PLW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3360, 'Polmont', 'POLMONT', 55.98472465, -3.714965487, 'PMT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3361, 'Polsloe Bridge', 'POLSLOE BRIDGE', 50.73106987, -3.501496022, 'POL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3362, 'Ponders End', 'PONDERS END', 51.64274862, -0.034473536, 'PON')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3363, 'Pont-y-Pant', 'PONT Y PANT', 53.06515277, -3.862740369, 'PYP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3364, 'Pontarddulais', 'PONTARDDULAIS', 51.71762164, -4.045576015, 'PTD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3365, 'Pontefract Baghill', 'PONTEFRACT BAGHL', 53.69189685, -1.303355158, 'PFR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3366, 'Pontefract Monkhill', 'PONTEFRACT MNKHL', 53.69908348, -1.302630611, 'PFM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3367, 'Pontefract Tanshelf', 'PONTEFRACT TAN', 53.6941436, -1.318917563, 'POT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3368, 'Pontlottyn', 'PONTLOTTYN', 51.74663206, -3.278966771, 'PLT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3369, 'Pontyclun', 'PONTYCLUN', 51.52388, -3.39193, 'PYC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3370, 'Pontypool & New Inn', '-', 51.69918, -3.00709, 'PPL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3371, 'Pontypridd', 'PONTYPRIDD', 51.59936625, -3.341388164, 'PPD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3372, 'Poole', 'POOLE.', 50.71941418, -1.983326736, 'POO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3373, 'Poppleton', 'POPPLETON', 53.97609158, -1.148589239, 'POP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3374, 'Port Glasgow', 'PORT GLASGOW', 55.93350378, -4.689814129, 'PTG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3375, 'Port Sunlight', 'PORT SUNLIGHT', 53.3492693, -2.99803707, 'PSL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3376, 'Port Talbot Parkway', 'PORT TALBOT PWY', 51.59171473, -3.781340109, 'PTA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3377, 'Portchester', 'PORTCHESTER', 50.84873765, -1.124238788, 'PTC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3378, 'Porth', 'PORTH', 51.61253349, -3.407203552, 'POR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3379, 'Porthmadog', 'PORTHMADOG', 52.93093493, -4.134459787, 'PTM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3380, 'Portlethen', 'PORTLETHEN', 57.06136367, -2.126616063, 'PLN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3381, 'Portslade', 'PORTSLADE.', 50.83567693, -0.205323859, 'PLD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3382, 'Portsmouth & Southsea', '-', 50.79848174, -1.090909302, 'PMS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3383, 'Portsmouth Arms', 'PORTSMOUTH ARMS', 50.95699912, -3.950613811, 'PMA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3384, 'Portsmouth Harbour', 'PORTSMOUTH HBR', 50.79694873, -1.10783895, 'PMH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3385, 'Portway Park & Ride', 'PTWYPR', 51.4901288, -2.6888666, 'PRI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3386, 'Possilpark & Parkhouse', 'POSSILPARK', 55.89022945, -4.25803113, 'PPK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3387, 'Potters Bar', 'POTTERS BAR', 51.69729, -0.19236, 'PBR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3388, 'Poulton-le-Fylde', 'POULTON LE FYLDE', 53.84814637, -2.990287393, 'PFY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3389, 'Poynton', 'POYNTON', 53.35040033, -2.134408257, 'PYT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3390, 'Prees', 'PREES', 52.89965046, -2.689744248, 'PRS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3391, 'Prescot', 'PRESCOT', 53.42356928, -2.799172819, 'PSC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3392, 'Prestatyn', 'PRESTATYN', 53.33537, -3.40512, 'PRT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3393, 'Prestbury', 'PRESTBURY', 53.29339747, -2.145481304, 'PRB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3394, 'Preston (Lancs)', 'PRESTON LANCS', 53.75687052, -2.708124657, 'PRE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3395, 'Preston Park', 'PRESTON PARK', 50.84593878, -0.155167744, 'PRP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3396, 'Prestonpans', 'PRESTONPANS', 55.95309226, -2.974772045, 'PST')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3397, 'Prestwick International Airport', 'PRESTWICK INTL', 55.50902996, -4.614160474, 'PRA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3398, 'Prestwick Town', 'PRESTWICK SCLYDE', 55.50169183, -4.615146801, 'PTW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3399, 'Priesthill & Darnley', '-', 55.81216496, -4.342890613, 'PTL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3400, 'Princes Risborough', 'PRINCES RISBORO', 51.71786322, -0.843881476, 'PRR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3401, 'Prittlewell', 'PRITTLEWELL', 51.55069115, 0.71068991, 'PRL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3402, 'Prudhoe', 'PRUDHOE', 54.96614154, -1.864859902, 'PRU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3403, 'Pulborough', 'PULBOROUGH', 50.95734852, -0.516553376, 'PUL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3404, 'Purfleet', 'PURFLEET', 51.48101615, 0.236781395, 'PFL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3405, 'Purley', 'PURLEY', 51.33739162, -0.113608701, 'PUR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3406, 'Purley Oaks', 'PURLEY OAKS', 51.34704533, -0.098851969, 'PUO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3407, 'Putney', 'PUTNEY', 51.46130596, -0.216473031, 'PUT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3408, 'Pwllheli', 'PWLLHELI', 52.88785158, -4.41671931, 'PWL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3409, 'Pye Corner', 'PYECORNER', 51.58125, -3.04106, 'PYE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3410, 'Pyle', 'PYLE', 51.525739, -3.698076385, 'PYL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3411, 'Quakers Yard', 'QUAKERS YARD', 51.6607231, -3.322813042, 'QYD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3412, 'Queenborough', 'QUEENBOROUGH', 51.41563685, 0.749680178, 'QBR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3413, 'Queens Park (Glasgow)', 'QUEENS PARK GLAS', 55.83568277, -4.26732499, 'QPK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3414, 'Queens Park (London)', 'QUEENS PARK(LDN)', 51.53397153, -0.204982501, 'QPW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3415, 'Queens Road (Peckham)', 'QUEENS RD PECKHM', 51.47406855, -0.057574233, 'QRP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3416, 'Queenstown Road (Battersea)', 'QUEENSTOWN ROAD', 51.47461422, -0.146833069, 'QRB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3417, 'Quintrell Downs', 'QUINTREL DOWNS', 50.40396942, -5.029806255, 'QUI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3418, 'Radcliffe (Nottinghamshire)', 'RADCLIFFE ON TRT', 52.94890755, -1.036580335, 'RDF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3419, 'Radlett', 'RADLETT.', 51.68519, -0.31724, 'RDT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3420, 'Radley', 'RADLEY', 51.68620873, -1.240479351, 'RAD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3421, 'Radyr', 'RADYR', 51.51650886, -3.248009062, 'RDR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3422, 'Rainford', 'RAINFORD', 53.51711894, -2.789469813, 'RNF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3423, 'Rainham (Essex)', 'RAINHAM ESSEX', 51.51735463, 0.190749022, 'RNM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3424, 'Rainham (Kent)', 'RAINHAM KENT', 51.36630481, 0.611346972, 'RAI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3425, 'Rainhill', 'RAINHILL', 53.4171322, -2.766400942, 'RNH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3426, 'Ramsgate', 'RAMSGATE', 51.34102927, 1.406056398, 'RAM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3427, 'Ramsgreave & Wilpshire', '-', 53.78005445, -2.478750546, 'RGW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3428, 'Rannoch', 'RANNOCH', 56.68602884, -4.576863849, 'RAN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3429, 'Rauceby', 'RAUCEBY', 52.98522476, -0.456602942, 'RAU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3430, 'Ravenglass for Eskdale', 'RAVENGLASS', 54.35561861, -3.408961525, 'RAV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3431, 'Ravensbourne', 'RAVENSBOURNE', 51.41386433, -0.006916653, 'RVB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3432, 'Ravensthorpe', 'RAVENSTHORPE', 53.6755404, -1.655576289, 'RVN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3433, 'Rawcliffe', 'RAWCLIFFE', 53.68905567, -0.960855694, 'RWC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3434, 'Rayleigh', 'RAYLEIGH.', 51.58945508, 0.600638611, 'RLG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3435, 'Raynes Park', 'RAYNES PARK', 51.40935291, -0.22999932, 'RAY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3436, 'Reading', 'READING', 51.45878189, -0.971854374, 'RDG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3437, 'Reading Green Park', 'REDGGPK', 51.4266639, -0.9996331, 'RGP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3438, 'Reading West', 'READING WEST', 51.45545321, -0.990294679, 'RDW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3439, 'Rectory Road', 'RECTORY ROAD', 51.55878002, -0.068393337, 'REC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3440, 'Redbridge', 'REDBRIDGE HANTS', 50.91993012, -1.470167863, 'RDB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3441, 'Redcar British Steel', 'REDCAR BR STEEL', 54.60989477, -1.112668323, 'RBS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3442, 'Redcar Central', 'REDCAR CENTRAL', 54.6162319, -1.070873487, 'RCC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3443, 'Redcar East', 'REDCAR EAST', 54.60925751, -1.052297613, 'RCE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3444, 'Reddish North', 'REDDISH NORTH', 53.44943056, -2.156253115, 'RDN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3445, 'Reddish South', 'REDDISH SOUTH', 53.43693407, -2.157863127, 'RDS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3446, 'Redditch', 'REDDITCH', 52.3063387, -1.945248706, 'RDC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3447, 'Redhill', 'REDHILL', 51.24019809, -0.165898311, 'RDH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3448, 'Redland', 'REDLAND', 51.46838591, -2.599131362, 'RDA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3449, 'Redruth', 'REDRUTH', 50.2332413, -5.225974546, 'RED')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3450, 'Reedham (London)', 'REEDHAM LONDON', 51.33216069, -0.12387235, 'RHM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3451, 'Reedham (Norfolk)', 'REEDHAM NORFOLK', 52.5645259, 1.559666375, 'REE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3452, 'Reigate', 'REIGATE', 51.24195549, -0.203824541, 'REI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3453, 'Renton', 'RENTON', 55.97042084, -4.586110938, 'RTN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3454, 'Reston', 'RESTON', 55.8506, -2.1972, 'RSN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3455, 'Retford', 'RETFORD', 53.31517556, -0.947878147, 'RET')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3456, 'Rhiwbina', 'RHIWBINA', 51.52118226, -3.213975661, 'RHI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3457, 'Rhoose Cardiff International Airport', 'RHOOSE FOR CIA', 51.38706545, -3.34939894, 'RIA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3458, 'Rhosneigr', 'RHOSNEIGR', 53.23485594, -4.506663917, 'RHO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3459, 'Rhyl', 'RHYL', 53.31844074, -3.489112507, 'RHL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3460, 'Rhymney', 'RHYMNEY.', 51.75883789, -3.289309476, 'RHY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3461, 'Ribblehead', 'RIBBLEHEAD', 54.20584998, -2.360854841, 'RHD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3462, 'Rice Lane', 'RICE LANE', 53.45778328, -2.962324455, 'RIL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3463, 'Richmond (London)', 'RICHMOND LONDON', 51.46310164, -0.301039568, 'RMD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3464, 'Rickmansworth', 'RICKMANSWRTH UND', 51.6402466, -0.473272956, 'RIC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3465, 'Riddlesdown', 'RIDDLESDOWN', 51.33266611, -0.099446924, 'RDD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3466, 'Ridgmont', 'RIDGMONT', 52.02641391, -0.594548449, 'RID')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3467, 'Riding Mill', 'RIDING MILL', 54.94904894, -1.970772673, 'RDM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3468, 'Risca & Pontymister', 'RCA', 51.60581, -3.09226, 'RCA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3469, 'Rishton', 'RISHTON', 53.76355579, -2.420158645, 'RIS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3470, 'Robertsbridge', 'ROBERTSBRIDGE', 50.98493079, 0.468786411, 'RBR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3471, 'Robroyston', 'Robroyston', 55.887438, -4.172747, 'RRN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3472, 'Roby', 'ROBY', 53.41005192, -2.855936847, 'ROB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3473, 'Rochdale', 'ROCHDALE', 53.61032152, -2.153521182, 'RCD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3474, 'Roche', 'ROCHE', 50.41826529, -4.830229067, 'ROC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3475, 'Rochester', 'ROCHESTER', 51.38554918, 0.510288532, 'RTR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3476, 'Rochford', 'ROCHFORD', 51.58173343, 0.702317091, 'RFD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3477, 'Rock Ferry', 'ROCK FERRY', 53.37289259, -3.010914905, 'RFY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3478, 'Rogart', 'ROGART', 57.98869553, -4.158188999, 'ROG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3479, 'Rogerstone', 'ROR', 51.59532, -3.06621, 'ROR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3480, 'Rolleston', 'ROLLESTON', 53.06574736, -0.898762153, 'ROL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3481, 'Roman Bridge', 'ROMAN BRIDGE', 53.044436, -3.921654634, 'RMB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3482, 'Romford', 'ROMFORD', 51.57483462, 0.183250919, 'RMF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3483, 'Romiley', 'ROMILEY', 53.4141736, -2.089172777, 'RML')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3484, 'Romsey', 'ROMSEY.', 50.99252174, -1.493151814, 'ROM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3485, 'Roose', 'ROOSE', 54.11516949, -3.194576777, 'ROO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3486, 'Rose Grove', 'ROSE GROVE', 53.78670009, -2.28226806, 'RSG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3487, 'Rose Hill Marple', 'ROSE HILL', 53.39611526, -2.075900869, 'RSH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3488, 'Rosyth', 'ROSYTH', 56.04550554, -3.427306152, 'ROS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3489, 'Rotherham Central', 'ROTHERHAM CTL', 53.43227009, -1.360440012, 'RMC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3490, 'Rotherhithe', 'RTHERHI', 51.500975, -0.053555, 'ROE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3491, 'Roughton Road', 'ROUGHTON ROAD', 52.91804369, 1.299803414, 'RNR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3492, 'Rowlands Castle', 'ROWLANDS CASTLE', 50.89216101, -0.957464705, 'RLN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3493, 'Rowley Regis', 'ROWLEY REGIS.', 52.47733479, -2.030875441, 'ROW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3494, 'Roy Bridge', 'ROY BRIDGE', 56.88834445, -4.837241562, 'RYB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3495, 'Roydon', 'ROYDON ESSEX', 51.77548937, 0.036262005, 'RYN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3496, 'Royston', 'ROYSTON', 52.05309, -0.02691, 'RYS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3497, 'Ruabon', 'RUABON', 52.96018774, -3.04250099, 'RUA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3498, 'Rufford', 'RUFFORD', 53.63502533, -2.806944757, 'RUF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3499, 'Rugby', 'RUGBY.', 52.37910798, -1.250477907, 'RUG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3500, 'Rugeley Town', 'RUGELEY TOWN', 52.75439398, -1.936835706, 'RGT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3501, 'Rugeley Trent Valley', 'RUGELEY TRNT VAL', 52.77003211, -1.92955021, 'RGL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3502, 'Runcorn', 'RUNCORN.', 53.33871197, -2.739251703, 'RUN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3503, 'Runcorn East', 'RUNCORN EAST', 53.3269412, -2.665085335, 'RUE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3504, 'Ruskington', 'RUSKINGTON', 53.04148456, -0.380756379, 'RKT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3505, 'Ruswarp', 'RUSWARP', 54.47019987, -0.627765603, 'RUS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3506, 'Rutherglen', 'RUTHERGLEN', 55.83058595, -4.212096258, 'RUT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3507, 'Ryde Esplanade', 'RYDE ESPLANADE', 50.73285421, -1.159772507, 'RYD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3508, 'Ryde Hoverport', 'Ryde Hoverport', 50.73253223, -1.158264473, 'XRD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3509, 'Ryde Pier Head', 'RYDE PIER HEAD', 50.73916991, -1.160127176, 'RYP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3510, 'Ryde St Johns Road', 'RYDE ST JOHNS RD', 50.72435057, -1.156566865, 'RYR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3511, 'Ryder Brow', 'RYDER BROW', 53.45713715, -2.173450235, 'RRB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3512, 'Rye (Sussex)', 'RYE SUSSEX', 50.95236602, 0.730706155, 'RYE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3513, 'Rye House', 'RYE HOUSE', 51.76941544, 0.005637565, 'RYH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3514, 'Salford Central', 'SALFORD CENTRAL', 53.48277848, -2.255532721, 'SFD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3515, 'Salford Crescent', 'SALFORD CRESCENT', 53.48659869, -2.275750605, 'SLD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3516, 'Salfords (Surrey)', 'SALFORDS SURREY', 51.20174387, -0.162487674, 'SAF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3517, 'Salhouse', 'SALHOUSE', 52.67560081, 1.391426504, 'SAH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3518, 'Salisbury', 'SALISBURY.', 51.07054404, -1.806389093, 'SAL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3519, 'Saltaire', 'SALTAIRE', 53.83889296, -1.791618606, 'SAE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3520, 'Saltash', 'SALTASH', 50.40734763, -4.20915696, 'STS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3521, 'Saltburn', 'SALTBURN.', 54.58345549, -0.974136266, 'SLB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3522, 'Saltcoats', 'SALTCOATS', 55.63387161, -4.784284143, 'SLT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3523, 'Saltmarshe', 'SALTMARSHE', 53.7223492, -0.810007666, 'SAM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3524, 'Salwick', 'SALWICK', 53.78171338, -2.819773179, 'SLW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3525, 'Sampford Courtenay', 'SAMCRT', 50.778968, -3.937485, 'SMC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3526, 'Sandal & Agbrigg', '-', 53.66313829, -1.481487026, 'SNA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3527, 'Sandbach', 'SANDBACH', 53.15018835, -2.3935123, 'SDB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3528, 'Sanderstead', 'SANDERSTEAD', 51.34828313, -0.093673971, 'SNR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3529, 'Sandhills', 'SANDHILLS', 53.42994809, -2.991497322, 'SDL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3530, 'Sandhurst (Berks)', 'SANDHURST BERKS', 51.34647568, -0.803914472, 'SND')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3531, 'Sandling', 'SANDLING', 51.0903696, 1.066064128, 'SDG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3532, 'Sandown', 'SANDOWN', 50.65685392, -1.162388386, 'SAN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3533, 'Sandplace', 'SANDPLACE', 50.38674429, -4.464517438, 'SDP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3534, 'Sandwell & Dudley', '-', 52.50862411, -2.01174306, 'SAD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3535, 'Sandwich', 'SANDWICH', 51.26990727, 1.342584118, 'SDW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3536, 'Sandy', 'SANDY', 52.12474, -0.28117, 'SDY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3537, 'Sankey for Penketh', 'SANKEY', 53.39247998, -2.650467264, 'SNK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3538, 'Sanquhar', 'SANQUHAR', 55.37016496, -3.924523151, 'SQH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3539, 'Sarn', 'SARN', 51.53872014, -3.589932796, 'SRR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3540, 'Saundersfoot', 'SAUNDERSFOOT', 51.72209314, -4.716619622, 'SDF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3541, 'Saunderton', 'SAUNDERTON', 51.67590446, -0.825468633, 'SDR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3542, 'Sawbridgeworth', 'SAWBRIDGEWORTH', 51.81435127, 0.160425068, 'SAW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3543, 'Saxilby', 'SAXILBY', 53.26722423, -0.664040791, 'SXY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3544, 'Saxmundham', 'SAXMUNDHAM.', 52.21491694, 1.490176361, 'SAX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3545, 'Scarborough', 'SCARBOROUGH', 54.27980423, -0.405706875, 'SCA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3546, 'Scotscalder', 'SCOTSCALDER', 58.48297756, -3.552066936, 'SCT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3547, 'Scotstounhill', 'SCOTSTOUNHILL', 55.8851271, -4.352883014, 'SCH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3548, 'Scunthorpe', 'SCUNTHORPE', 53.58619519, -0.650979553, 'SCU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3549, 'Sea Mills', 'SEA MILLS', 51.47953406, -2.650110484, 'SML')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3550, 'Seaford (Sussex)', 'SEAFORD SUSSEX', 50.77283582, 0.100140227, 'SEF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3551, 'Seaforth & Litherland', '-', 53.46611293, -3.005295121, 'SFL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3552, 'Seaham', 'SEAHAM', 54.83664804, -1.340923595, 'SEA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3553, 'Seamer', 'SEAMER', 54.24076317, -0.417034229, 'SEM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3554, 'Seascale', 'SEASCALE', 54.39564109, -3.484886294, 'SSC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3555, 'Seaton Carew', 'SEATON CAREW', 54.65831825, -1.200423075, 'SEC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3556, 'Seaton Delaval', 'SEATON DELAVAL', 55.0759071, -1.5367301, 'SEJ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3557, 'Seer Green & Jordans', 'SEER GREEN', 51.60966864, -0.607428365, 'SRG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3558, 'Selby', 'SELBY.', 53.78338472, -1.063555365, 'SBY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3559, 'Selhurst', 'SELHURST', 51.39169797, -0.087945474, 'SRS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3560, 'Sellafield', 'SELLAFIELD', 54.41659024, -3.51045609, 'SEL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3561, 'Selling', 'SELLING', 51.27735954, 0.94088939, 'SEG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3562, 'Selly Oak', 'SELLY OAK.', 52.44198975, -1.935812243, 'SLY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3563, 'Settle', 'SETTLE', 54.06692419, -2.280711727, 'SET')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3564, 'Seven Kings', 'SEVEN KINGS', 51.56404587, 0.096318272, 'SVK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3565, 'Seven Sisters', 'SEVEN SISTERS', 51.58251084, -0.074892916, 'SVS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3566, 'Sevenoaks', 'SEVENOAKS.', 51.27686256, 0.18168053, 'SEV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3567, 'Severn Beach', 'SEVERN BEACH', 51.55955383, -2.66427711, 'SVB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3568, 'Severn Tunnel Junction', 'STJ', 51.5847, -2.77876, 'STJ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3569, 'Shadwell', 'SHADWEL', 51.510931, -0.057454, 'SDE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3570, 'Shalford (Surrey)', 'SHALFORD', 51.21431997, -0.566799182, 'SFR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3571, 'Shanklin', 'SHANKLIN', 50.63390141, -1.179835636, 'SHN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3572, 'Shawfair', 'SHWFAIR', 55.915359, -3.0884433, 'SFI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3573, 'Shawford', 'SHAWFORD', 51.02181488, -1.328195204, 'SHW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3574, 'Shawlands', 'SHAWLANDS', 55.82919724, -4.29233699, 'SHL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3575, 'Sheerness-on-Sea', 'SHEERNESS ON SEA', 51.44106166, 0.758547575, 'SSS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3576, 'Sheffield', 'SHEFFIELD.', 53.37823538, -1.462104529, 'SHF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3577, 'Shelford (Cambs)', 'SHELFORD', 52.14884103, 0.139981977, 'SED')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3578, 'Shenfield', 'SHENFIELD.', 51.63088441, 0.329854866, 'SNF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3579, 'Shenstone', 'SHENSTONE', 52.63905886, -1.84478804, 'SEN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3580, 'Shepherd''s Bush', 'SHEPHERDS BUSH', 51.50528929, -0.217652296, 'SPB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3581, 'Shepherds Well', 'SHEPHERDS WELL', 51.18840091, 1.229922503, 'SPH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3582, 'Shepley', 'SHEPLEY', 53.58920057, -1.704017926, 'SPY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3583, 'Shepperton', 'SHEPPERTON', 51.39680664, -0.446776819, 'SHP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3584, 'Shepreth', 'SHEPRETH', 52.11417, 0.031332, 'STH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3585, 'Sherborne', 'SHERBORNE', 50.94400636, -2.513081696, 'SHE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3586, 'Sherburn-in-Elmet', 'SHERBURN IN ELMT', 53.79717016, -1.232684076, 'SIE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3587, 'Sheringham', 'SHERINGHAM.', 52.94088541, 1.211327178, 'SHM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3588, 'Shettleston', 'SHETTLESTON', 55.85352186, -4.160033636, 'SLS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3589, 'Shieldmuir', 'SHIELDMUIR', 55.77748196, -3.956991069, 'SDM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3590, 'Shifnal', 'SHIFNAL', 52.66608646, -2.371848866, 'SFN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3591, 'Shildon', 'SHILDON', 54.62680318, -1.637535646, 'SHD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3592, 'Shiplake', 'SHIPLAKE', 51.51121587, -0.882524379, 'SHI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3593, 'Shipley (Yorks)', 'SHIPLEY YORKS', 53.83274772, -1.773263392, 'SHY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3594, 'Shippea Hill', 'SHIPPEA HILL', 52.43023398, 0.413355863, 'SPP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3595, 'Shipton', 'SHIPTON', 51.86565386, -1.5926996, 'SIP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3596, 'Shirebrook', 'SHIREBROOK', 53.20426177, -1.202442721, 'SHB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3597, 'Shirehampton', 'SHIREHAMPTON', 51.48458989, -2.678266118, 'SHH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3598, 'Shireoaks', 'SHIREOAKS', 53.32484379, -1.168215662, 'SRO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3599, 'Shirley', 'SHIRLEY W MIDS.', 52.40343629, -1.845175263, 'SRL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3600, 'Shoeburyness', 'SHOEBURYNESS', 51.53097587, 0.795360793, 'SRY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3601, 'Sholing', 'SHOLING', 50.89674031, -1.364351502, 'SHO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3602, 'Shoreditch High Street', 'SHRDHST', 51.522922, -0.075684, 'SDC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3603, 'Shoreham (Kent)', 'SHOREHAM KENT', 51.3322173, 0.188901812, 'SEH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3604, 'Shoreham-by-Sea', 'SHOREHAM BY SEA', 50.83442192, -0.271709718, 'SSE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3605, 'Shortlands', 'SHORTLANDS', 51.40560506, 0.002789316, 'SRT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3606, 'Shotton', 'SHOTTON', 53.2132, -3.03789, 'SHT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3607, 'Shotts', 'SHOTTS', 55.81863947, -3.798315601, 'SHS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3608, 'Shrewsbury', 'SHREWSBURY', 52.71141159, -2.74894276, 'SHR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3609, 'Sidcup', 'SIDCUP', 51.4344201, 0.103326599, 'SID')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3610, 'Sileby', 'SILEBY', 52.73102158, -1.10966224, 'SIL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3611, 'Silecroft', 'SILECROFT', 54.22622466, -3.335366346, 'SIC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3612, 'Silkstone Common', 'SILKSTONE COMMON', 53.53493739, -1.563474153, 'SLK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3613, 'Silver Street', 'SILVER STREET', 51.61523438, -0.072641642, 'SLV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3614, 'Silverdale', 'SILVERDALE', 54.16991444, -2.803839018, 'SVR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3615, 'Singer', 'SINGER', 55.90765879, -4.405482609, 'SIN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3616, 'Sittingbourne', 'SITTINGBOURNE', 51.34197466, 0.734697529, 'SIT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3617, 'Skegness', 'SKEGNESS.', 53.1430765, 0.333903847, 'SKG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3618, 'Skewen', 'SKEWEN', 51.66138872, -3.846536024, 'SKE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3619, 'Skipton', 'SKIPTON', 53.95870219, -2.025878431, 'SKI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3620, 'Slade Green', 'SLADE GREEN', 51.46778867, 0.190504422, 'SGR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3621, 'Slaithwaite', 'SLAITHWAITE', 53.62384413, -1.881582946, 'SWT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3622, 'Slateford', 'SLATEFORD', 55.92668195, -3.243452507, 'SLA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3623, 'Sleaford', 'SLEAFORD', 52.99549349, -0.41034233, 'SLR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3624, 'Sleights', 'SLEIGHTS', 54.46106173, -0.662475769, 'SLH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3625, 'Slough', 'SLOUGH.', 51.51187689, -0.591504981, 'SLO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3626, 'Small Heath', 'SMALL HEATH.', 52.46376991, -1.859388416, 'SMA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3627, 'Smallbrook Junction', 'SMALLBROOK JN', 50.71120981, -1.155074725, 'SAB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3628, 'Smethwick Galton Bridge', 'SMETHWICK GAL BG', 52.50179056, -1.980495105, 'SGB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3629, 'Smethwick Rolfe Street', 'SMETHWICK RLF ST', 52.49639441, -1.97064313, 'SMR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3630, 'Smithy Bridge', 'SMITHY BRIDGE', 53.63301726, -2.113376557, 'SMB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3631, 'Snaith', 'SNAITH', 53.69312867, -1.028454207, 'SNI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3632, 'Snodland', 'SNODLAND', 51.33022897, 0.448246314, 'SDA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3633, 'Snowdown', 'SNOWDOWN', 51.21530252, 1.213717174, 'SWO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3634, 'Soham', 'SOHAM', 52.334139, 0.327694, 'SOJ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3635, 'Sole Street', 'SOLE STREET', 51.38314549, 0.378100359, 'SOR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3636, 'Solihull', 'SOLIHULL.', 52.414621, -1.7893935, 'SOL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3637, 'Somerleyton', 'SOMERLEYTON.', 52.51025111, 1.652277542, 'SYT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3638, 'South Acton', 'SOUTH ACTON', 51.49969978, -0.270156962, 'SAT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3639, 'South Bank', 'SOUTH BANK', 54.58383426, -1.176660612, 'SBK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3640, 'South Bermondsey', 'SOUTH BERMONDSEY', 51.48813928, -0.054671432, 'SBM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3641, 'South Croydon', 'SOUTH CROYDON', 51.36296514, -0.093452155, 'SCY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3642, 'South Elmsall', 'SOUTH ELMSALL', 53.59462052, -1.284860698, 'SES')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3643, 'South Greenford', 'SOUTH GREENFORD', 51.53321485, -0.336653369, 'SGN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3644, 'South Gyle', 'SOUTH GYLE', 55.93634763, -3.299473655, 'SGL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3645, 'South Hampstead', 'SOUTH HAMPSTEAD', 51.5414759, -0.178440469, 'SOH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3646, 'South Kenton', 'SOUTH KENTON', 51.57022061, -0.308462789, 'SOK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3647, 'South Merton', 'SOUTH MERTON', 51.40323, -0.20551, 'SMO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3648, 'South Milford', 'SOUTH MILFORD', 53.7823442, -1.250529513, 'SOM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3649, 'South Ruislip', 'SOUTH RUISLIP.', 51.55692656, -0.399247714, 'SRU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3650, 'South Tottenham', 'SOUTH TOTTENHAM', 51.5804188, -0.071805903, 'STO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3651, 'South Wigston', 'SOUTH WIGSTON', 52.58224354, -1.134080764, 'SWS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3652, 'South Woodham Ferrers', 'WOODHAM FERRERS.', 51.64966861, 0.6066729, 'SOF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3653, 'Southall', 'SOUTHALL', 51.50596158, -0.378613083, 'STL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3654, 'Southampton Airport Parkway', 'SOUTHAMPTON AIR', 50.95080673, -1.363101804, 'SOA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3655, 'Southampton Central', 'SOUTHAMPTON CTL.', 50.90743864, -1.413602474, 'SOU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3656, 'Southbourne', 'SOUTHBOURNE', 50.84826453, -0.90811384, 'SOB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3657, 'Southbury', 'SOUTHBURY', 51.64845328, -0.053018897, 'SBU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3658, 'Southease', 'SOUTHEASE', 50.83134913, 0.030650137, 'SEE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3659, 'Southend Airport', 'Southend Airport', 51.568691, 0.704052, 'SIA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3660, 'Southend Central', 'SOUTHEND CENTRAL', 51.53706804, 0.711740419, 'SOC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3661, 'Southend East', 'SOUTHEND EAST', 51.5389761, 0.731829109, 'SOE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3662, 'Southend Victoria', 'SOUTHEND VIC', 51.54151627, 0.711514592, 'SOV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3663, 'Southminster', 'SOUTHMINSTER', 51.66063093, 0.835210668, 'SMN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3664, 'Southport', 'SOUTHPORT.', 53.64652777, -3.00244063, 'SOP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3665, 'Southsea Hoverport', 'Southsea Hoverpt', 50.78483737, -1.100151022, 'SHV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3666, 'Southwick', 'SOUTHWICK', 50.83248265, -0.237073077, 'SWK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3667, 'Sowerby Bridge', 'SOWERBY BRIDGE', 53.70790822, -1.906950154, 'SOW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3668, 'Spalding', 'SPALDING', 52.78882937, -0.156873182, 'SPA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3669, 'Spean Bridge', 'SPEAN BRIDGE', 56.8899942, -4.921608593, 'SBR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3670, 'Spital', 'SPITAL', 53.33995485, -2.993914447, 'SPI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3671, 'Spondon', 'SPONDON', 52.91188874, -1.411093591, 'SPO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3672, 'Spooner Row', 'SPOONER ROW', 52.53501919, 1.086491641, 'SPN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3673, 'Spring Road', 'SPRING ROAD.', 52.44342372, -1.837384708, 'SRI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3674, 'Springburn', 'SPRINGBURN', 55.88169718, -4.228114663, 'SPR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3675, 'Springfield', 'SPRINGFIELD', 56.29495602, -3.052451731, 'SPF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3676, 'Squires Gate', 'SQUIRES GATE', 53.77677721, -3.04942893, 'SQU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3677, 'St Albans Abbey', 'ST ALBANS ABBEY', 51.74473607, -0.342569292, 'SAA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3678, 'St Albans City', 'ST ALBANS.', 51.75048, -0.32754, 'SAC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3679, 'St Andrews Road', 'ST ANDREWS ROAD', 51.51279724, -2.696698481, 'SAR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3680, 'St Annes-on-the-Sea', 'ST ANNES ON SEA', 53.75340279, -3.02912925, 'SAS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3681, 'St Austell', 'ST AUSTELL', 50.33950737, -4.789405571, 'SAU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3682, 'St Bees', 'ST BEES', 54.49258108, -3.591384658, 'SBS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3683, 'St Budeaux Ferry Road', 'ST BUDEAUX FY RD', 50.40138693, -4.186644684, 'SBF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3684, 'St Budeaux Victoria Road', 'ST BUDEAUX VA RD', 50.4021693, -4.188088002, 'SBV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3685, 'St Columb Road', 'ST COLUMB ROAD', 50.39905812, -4.940828131, 'SCR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3686, 'St Denys', 'ST DENYS', 50.92204734, -1.388193499, 'SDN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3687, 'St Erth', 'ST ERTH', 50.1704777, -5.444317521, 'SER')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3688, 'St Germans', 'ST GERMANS', 50.39426531, -4.30845147, 'SGM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3689, 'St Helens Central', 'ST HELENS CTL', 53.45313449, -2.730304246, 'SNH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3690, 'St Helens Junction', 'ST HELENS JN', 53.43354101, -2.699863587, 'SHJ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3691, 'St Helier (London)', 'ST HELIER', 51.39, -0.19912, 'SIH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3692, 'St Ives (Cornwall)', 'ST IVES CORNWALL', 50.20864501, -5.47678695, 'SIV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3693, 'St James Park (Exeter)', 'ST JAMES PK EXTR', 50.73068086, -3.523164103, 'SJP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3694, 'St James Street (Walthamstow)', 'ST JAMES ST WSTW', 51.58067098, -0.032823574, 'SJS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3695, 'St Johns (London)', 'ST JOHNS', 51.46899802, -0.023232814, 'SAJ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3696, 'St Keyne Wishing Well Halt', 'ST KEYNE', 50.42305549, -4.461615382, 'SKN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3697, 'St Leonards Warrior Square', 'ST LEONARDS W SQ', 50.8558633, 0.560522005, 'SLQ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3698, 'St Margarets (Herts)', 'ST MARGARETS HTS', 51.7878436, 0.001278525, 'SMT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3699, 'St Margarets (London)', 'ST MARGARETS LDN', 51.45510669, -0.320350685, 'SMG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3700, 'St Mary Cray', 'ST MARY CRAY', 51.39477941, 0.107257724, 'SMY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3701, 'St Michaels', 'ST MICHAELS', 53.37561787, -2.952804749, 'STM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3702, 'St Neots', 'ST NEOTS.', 52.23158, -0.24741, 'SNO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3703, 'Stafford', 'STAFFORD', 52.80390859, -2.122036782, 'STA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3704, 'Staines', 'STAINES', 51.43245842, -0.503156805, 'SNS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3705, 'Stallingborough', 'STALLINGBOROUGH', 53.58711418, -0.183667548, 'SLL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3706, 'Stalybridge', 'STALYBRIDGE', 53.48439291, -2.061892539, 'SYB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3707, 'Stamford (Lincs)', 'STAMFORD LINCS', 52.64740704, -0.480499424, 'SMD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3708, 'Stamford Hill', 'STAMFORD HILL', 51.57447359, -0.076675777, 'SMH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3709, 'Stanford-le-Hope', 'STANFORD LE HOPE', 51.51436714, 0.423041284, 'SFO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3710, 'Stanlow & Thornton', '-', 53.27829475, -2.841153819, 'SNT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3711, 'Stansted Airport', 'STANSTED AIRPORT', 51.8885966, 0.26081836, 'SSD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3712, 'Stansted Mountfitchet', 'STANSTD MFITCHET', 51.90131018, 0.19974645, 'SST')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3713, 'Staplehurst', 'STAPLEHURST', 51.17146994, 0.550445835, 'SPU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3714, 'Stapleton Road', 'STAPLETON ROAD', 51.46750636, -2.566223864, 'SRD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3715, 'Starbeck', 'STARBECK', 53.99901434, -1.501135911, 'SBE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3716, 'Starcross', 'STARCROSS', 50.62778455, -3.447726133, 'SCS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3717, 'Staveley (Cumbria)', 'STAVELEY', 54.37544124, -2.819395031, 'SVL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3718, 'Stechford', 'STECHFORD.', 52.48482961, -1.811034254, 'SCF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3719, 'Steeton & Silsden', '-', 53.90026989, -1.944114862, 'SON')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3720, 'Stepps', 'STEPPS', 55.889898, -4.14078439, 'SPS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3721, 'Stevenage', 'STEVENAGE.', 51.90169, -0.20711, 'SVG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3722, 'Stevenston', 'STEVENSTON', 55.63426825, -4.750782413, 'STV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3723, 'Stewartby', 'STEWARTBY', 52.06909177, -0.520681291, 'SWR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3724, 'Stewarton', 'STEWARTON', 55.68214404, -4.518043445, 'STT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3725, 'Stirling', 'STIRLING', 56.11979974, -3.935616947, 'STG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3726, 'Stockport', 'STOCKPORT.', 53.40555627, -2.163011702, 'SPT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3727, 'Stocksfield', 'STOCKSFIELD', 54.94704693, -1.916756206, 'SKS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3728, 'Stocksmoor', 'STOCKSMOOR', 53.59437058, -1.723472627, 'SSM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3729, 'Stockton', 'STOCKTON.', 54.57024897, -1.318932714, 'STK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3730, 'Stoke Mandeville', 'STOKE MANDEVILLE', 51.78780029, -0.784084548, 'SKM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3731, 'Stoke Newington', 'STOKE NEWINGTON', 51.5652387, -0.072881156, 'SKW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3732, 'Stoke-on-Trent', 'STOKE ON TRENT', 53.00799558, -2.180988926, 'SOT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3733, 'Stone (Staffs)', 'STONE (STAFFS)', 52.9083927, -2.155042811, 'SNE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3734, 'Stone Crossing', 'STONE CROSSING', 51.45133235, 0.263786194, 'SCG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3735, 'Stonebridge Park', 'STONEBRIDGE PARK', 51.54411681, -0.275828011, 'SBP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3736, 'Stonegate', 'STONEGATE', 51.01996612, 0.363883611, 'SOG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3737, 'Stonehaven', 'STONEHAVEN', 56.96681762, -2.225305286, 'STN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3738, 'Stonehouse', 'STONEHOUSE', 51.74588546, -2.279510293, 'SHU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3739, 'Stoneleigh', 'STONELEIGH', 51.3634013, -0.248665136, 'SNL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3740, 'Stourbridge Junction', 'STOURBRIDGE JN', 52.4475953, -2.133850619, 'SBJ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3741, 'Stourbridge Town', 'STOURBRIDGE TOWN', 52.45558734, -2.141821696, 'SBT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3742, 'Stow', 'STOW', 55.691624, -2.8654726, 'SOI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3743, 'Stowmarket', 'STOWMARKET.', 52.18972565, 1.000016541, 'SMK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3744, 'Stranraer', 'STRANRAER HBR', 54.90959858, -5.024729131, 'STR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3745, 'Stratford (London)', 'STRATFORD LONDON', 51.54137415, -0.003656845, 'SRA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3746, 'Stratford International', 'STFORDI', 51.545037, -0.008613, 'SFA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3747, 'Stratford-upon-Avon', 'STRATFORD U AVON', 52.19425764, -1.71629633, 'SAV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3748, 'Stratford-upon-Avon Parkway', 'STRATFORDPKWAY', 52.207771, -1.732885, 'STY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3749, 'Strathcarron', 'STRATHCARRON', 57.42276127, -5.428811191, 'STC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3750, 'Strawberry Hill', 'STRAWBERRY HILL', 51.43973402, -0.339620394, 'STW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3751, 'Streatham (Greater London)', 'STREATHAM.', 51.42581015, -0.131546583, 'STE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3752, 'Streatham Common', 'STREATHAM COMMON', 51.41868917, -0.136151833, 'SRC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3753, 'Streatham Hill', 'STREATHAM HILL', 51.4383461, -0.128157209, 'SRH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3754, 'Streethouse', 'STREETHOUSE', 53.67632991, -1.399894276, 'SHC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3755, 'Strines', 'STRINES', 53.37510107, -2.032573054, 'SRN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3756, 'Stromeferry', 'STROMEFERRY', 57.35235059, -5.549452918, 'STF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3757, 'Strood (Kent)', 'STROOD KENT', 51.39654864, 0.50019436, 'SOO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3758, 'Stroud (Gloucs)', 'STROUD (GLOS)', 51.74457443, -2.219392567, 'STD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3759, 'Sturry', 'STURRY', 51.30107408, 1.122265331, 'STU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3760, 'Styal', 'STYAL', 53.34834611, -2.240457225, 'SYA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3761, 'Sudbury (Suffolk)', 'SUDBURY SUFFOLK', 52.03628673, 0.735461571, 'SUY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3762, 'Sudbury & Harrow Road', 'SUDBURY + HRW RD', 51.5545018, -0.315970143, 'SUD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3763, 'Sudbury Hill Harrow', 'SUDBURY HILL', 51.55838698, -0.336167829, 'SDH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3764, 'Sugar Loaf', 'SUG', 52.08228042, -3.686969492, 'SUG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3765, 'Summerston', 'SUMMERSTON', 55.89905346, -4.291689497, 'SUM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3766, 'Sunbury', 'SUNBURY', 51.4183156, -0.41777264, 'SUU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3767, 'Sunderland', 'SUNDERLAND', 54.905507, -1.382377347, 'SUN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3768, 'Sundridge Park', 'SUNDRIDGE PARK', 51.4133967, 0.020387427, 'SUP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3769, 'Sunningdale', 'SUNNINGDALE', 51.39194259, -0.633036903, 'SNG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3770, 'Sunnymeads', 'SUNNYMEADS', 51.46990139, -0.559005825, 'SNY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3771, 'Surbiton', 'SURBITON', 51.39246129, -0.303959858, 'SUR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3772, 'Surrey Quays', 'SURREYQ', 51.492791, -0.048142, 'SQE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3773, 'Sutton (London)', 'SUTTON LONDON', 51.35953356, -0.191213151, 'SUO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3774, 'Sutton Coldfield', 'SUTTON COLDFIELD', 52.56495316, -1.824852952, 'SUT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3775, 'Sutton Common', 'SUTTON COMMON', 51.37557, -0.19682, 'SUC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3776, 'Sutton Parkway', 'SUTTON PARKWAY', 53.11420865, -1.245645184, 'SPK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3777, 'Swale', 'SWALE', 51.38923548, 0.747147474, 'SWL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3778, 'Swanley', 'SWANLEY', 51.39338728, 0.169237354, 'SAY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3779, 'Swanscombe', 'SWANSCOMBE', 51.44907248, 0.309545118, 'SWM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3780, 'Swansea', 'SWANSEA.', 51.62514381, -3.941576226, 'SWA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3781, 'Swanwick', 'SWANWICK', 50.87565884, -1.265855068, 'SNW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3782, 'Sway', 'SWAY', 50.78469022, -1.610008474, 'SWY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3783, 'Swaythling', 'SWAYTHLING', 50.94113949, -1.376413966, 'SWG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3784, 'Swinderby', 'SWINDERBY', 53.16958189, -0.70268215, 'SWD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3785, 'Swindon (Wilts)', 'SWINDON (WILTS).', 51.56547293, -1.785510103, 'SWI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3786, 'Swineshead', 'SWINESHEAD', 52.96983174, -0.187156156, 'SWE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3787, 'Swinton (Manchester)', 'SWINTON MANCHR', 53.51484469, -2.337463925, 'SNN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3788, 'Swinton (South Yorks)', 'SWINTON S YORKS', 53.48625823, -1.305824829, 'SWN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3789, 'Sydenham (London)', 'SYDENHAM LONDON', 51.42724989, -0.054238045, 'SYD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3790, 'Sydenham Hill', 'SYDENHAM HILL', 51.43271634, -0.080334335, 'SYH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3791, 'Syon Lane', 'SYON LANE', 51.48179326, -0.32513115, 'SYL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3792, 'Syston', 'SYSTON', 52.6946713, -1.082139486, 'SYS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3793, 'Tackley', 'TACKLEY', 51.88132548, -1.297226956, 'TAC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3794, 'Tadworth', 'TADWORTH', 51.29163611, -0.23596467, 'TAD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3795, 'Taffs Well', 'TAFFS WELL', 51.54079864, -3.262949451, 'TAF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3796, 'Tain', 'TAIN', 57.81427038, -4.052128422, 'TAI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3797, 'Tal-y-Cafn', 'TAL Y CAFN', 53.22837926, -3.818280351, 'TLC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3798, 'Talsarnau', 'TALSARNAU', 52.90432506, -4.068166336, 'TAL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3799, 'Talybont', 'TALYBONT', 52.77264337, -4.09660964, 'TLB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3800, 'Tame Bridge Parkway', 'TAME BRIDGE PWY', 52.55294368, -1.976209995, 'TAB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3801, 'Tamworth', 'TAMWORTH', 52.63712963, -1.687269406, 'TAM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3802, 'Taplow', 'TAPLOW', 51.5235594, -0.68136745, 'TAP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3803, 'Tattenham Corner', 'TATTENHAM CORNER', 51.30918237, -0.242609371, 'TAT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3804, 'Taunton', 'TAUNTON.', 51.02365625, -3.102132918, 'TAU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3805, 'Taynuilt', 'TAYNUILT', 56.43078559, -5.239592133, 'TAY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3806, 'Teddington', 'TEDDINGTON', 51.42452799, -0.332691888, 'TED')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3807, 'Teesside Airport', 'TEESSIDE AIRPORT', 54.51813568, -1.425312602, 'TEA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3808, 'Teignmouth', 'TEIGNMOUTH', 50.54804676, -3.494686366, 'TGM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3809, 'Telford Central', 'TELFORD.', 52.68112339, -2.440981963, 'TFC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3810, 'Templecombe', 'TEMPLECOMBE', 51.00113031, -2.417513122, 'TMC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3811, 'Tenby', 'TENBY', 51.6717, -4.70645, 'TEN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3812, 'Teynham', 'TEYNHAM', 51.33338995, 0.807440692, 'TEY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3813, 'Thames Ditton', 'THAMES DITTON', 51.38900668, -0.33901409, 'THD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3814, 'Thanet Parkway', 'THANETP', 51.3324511, 1.3579215, 'THP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3815, 'Thatcham', 'THATCHAM', 51.39383879, -1.243189177, 'THA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3816, 'Thatto Heath', 'THATTO HEATH', 53.43659332, -2.759374859, 'THH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3817, 'The Hawthorns', 'THE HAWTHORNS.', 52.50538276, -1.964007294, 'THW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3818, 'The Lakes (Warks)', 'THE LAKES', 52.35947415, -1.845769488, 'TLK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3819, 'Theale', 'THEALE', 51.43344686, -1.074967204, 'THE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3820, 'Theobalds Grove', 'THEOBALDS GROVE', 51.692457, -0.034823615, 'TEO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3821, 'Thetford', 'THETFORD.', 52.41914509, 0.745078426, 'TTF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3822, 'Thirsk', 'THIRSK', 54.22822386, -1.372589271, 'THI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3823, 'Thornaby', 'THORNABY.', 54.55945018, -1.300710445, 'TBY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3824, 'Thorne North', 'THORNE NORTH', 53.61607518, -0.972324106, 'TNN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3825, 'Thorne South', 'THORNE SOUTH', 53.60379593, -0.954637509, 'TNS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3826, 'Thornford', 'THORNFORD', 50.91195034, -2.57972607, 'THO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3827, 'Thornliebank', 'THORNLIEBANK', 55.81086816, -4.311688912, 'THB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3828, 'Thornton Abbey', 'THORNTON ABBEY', 53.65397075, -0.323493815, 'TNA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3829, 'Thornton Heath', 'THORNTON HEATH', 51.3992396, -0.101001212, 'TTH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3830, 'Thorntonhall', 'THORNTONHALL', 55.76867034, -4.251155831, 'THT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3831, 'Thorpe Bay', 'THORPE BAY', 51.53757376, 0.761743186, 'TPB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3832, 'Thorpe Culvert', 'THORPE CULVERT', 53.12279894, 0.199481891, 'TPC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3833, 'Thorpe-le-Soken', 'THORPE LE SOKEN', 51.84777684, 1.161641452, 'TLS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3834, 'Three Bridges', 'THREE BRIDGES', 51.11691722, -0.161183058, 'TBD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3835, 'Three Oaks', 'THREE OAKS', 50.90088723, 0.61337309, 'TOK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3836, 'Thurgarton', 'THURGARTON', 53.02922431, -0.962023239, 'THU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3837, 'Thurnscoe', 'THURNSCOE', 53.54506234, -1.308786923, 'THC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3838, 'Thurso', 'THURSO', 58.58998665, -3.527556041, 'THS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3839, 'Thurston', 'THURSTON', 52.25026767, 0.809509861, 'TRS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3840, 'Tilbury Town', 'TILBURY TOWN.', 51.46236079, 0.354041732, 'TIL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3841, 'Tile Hill', 'TILE HILL.', 52.39511859, -1.596851679, 'THL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3842, 'Tilehurst', 'TILEHURST', 51.47150508, -1.029822977, 'TLH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3843, 'Tipton', 'TIPTON.', 52.53045253, -2.065702345, 'TIP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3844, 'Tir-Phil', 'TIR PHIL', 51.7209057, -3.246390272, 'TIR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3845, 'Tisbury', 'TISBURY', 51.06083999, -2.079012098, 'TIS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3846, 'Tiverton Parkway', 'TIVERTON PARKWAY', 50.9175286, -3.359957026, 'TVP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3847, 'Todmorden', 'TODMORDEN', 53.71383521, -2.099654001, 'TOD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3848, 'Tolworth', 'TOLWORTH', 51.37681954, -0.279679278, 'TOL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3849, 'Ton Pentre', 'TON PENTRE', 51.64779844, -3.486204606, 'TPN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3850, 'Tonbridge', 'TONBRIDGE.', 51.19143689, 0.27077344, 'TON')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3851, 'Tondu', 'TONDU', 51.5474, -3.59519, 'TDU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3852, 'Tonfanau', 'TONFANAU', 52.61355963, -4.123713236, 'TNF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3853, 'Tonypandy', 'TONYPANDY', 51.61975969, -3.448885591, 'TNP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3854, 'Tooting', 'TOOTING.', 51.41989, -0.16099, 'TOO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3855, 'Topsham', 'TOPSHAM', 50.68604362, -3.463675278, 'TOP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3856, 'Torquay', 'TORQUAY', 50.46116534, -3.54366854, 'TQY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3857, 'Torre', 'TORRE', 50.4731714, -3.546441301, 'TRR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3858, 'Totnes', 'TOTNES.', 50.43584686, -3.688721847, 'TOT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3859, 'Tottenham Court Road (Elizabeth line)', 'TOTTENHAMCTRD', 51.51628337, -0.130588157, 'TCR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3860, 'Tottenham Hale', 'TOTTENHAM HALE', 51.58831639, -0.059922399, 'TOM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3861, 'Totton', 'TOTTON', 50.91800544, -1.482139753, 'TTN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3862, 'Town Green', 'TOWN GREEN', 53.54282147, -2.904490485, 'TWN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3863, 'Trafford Park', 'TRAFFORD PARK', 53.45496887, -2.311688825, 'TRA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3864, 'Trefforest', 'TREFFOREST', 51.59145801, -3.325130833, 'TRF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3865, 'Trefforest Estate', 'TREFFOREST EST', 51.5682872, -3.290260312, 'TRE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3866, 'Trehafod', 'TREHAFOD', 51.61014718, -3.380989064, 'TRH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3867, 'Treherbert', 'TREHERBERT', 51.67224166, -3.536321025, 'TRB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3868, 'Treorchy', 'TREORCHY', 51.65753073, -3.505751584, 'TRY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3869, 'Trimley', 'TRIMLEY', 51.9765436, 1.319555915, 'TRM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3870, 'Tring', 'TRING', 51.8007459, -0.622433028, 'TRI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3871, 'Troed-y-rhiw', 'TROED Y RHIW', 51.71242473, -3.346756999, 'TRD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3872, 'Troon', 'TROON', 55.54279764, -4.655290297, 'TRN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3873, 'Trowbridge', 'TROWBRIDGE', 51.31982565, -2.21434677, 'TRO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3874, 'Truro', 'TRURO.', 50.26382962, -5.064866947, 'TRU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3875, 'Tulloch', 'TULLOCH', 56.88425855, -4.701316764, 'TUL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3876, 'Tulse Hill', 'TULSE HILL', 51.43977376, -0.105075902, 'TUH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3877, 'Tunbridge Wells', 'TUNBRIDGE WELLS', 51.13022674, 0.262823237, 'TBW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3878, 'Turkey Street', 'TURKEY STREET', 51.67263699, -0.047208958, 'TUR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3879, 'Tutbury & Hatton', '-', 52.86437892, -1.682087757, 'TUT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3880, 'Tweedbank', 'TWDBANK', 55.604801, -2.7598488, 'TWB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3881, 'Twickenham', 'TWICKENHAM', 51.45037655, -0.329159686, 'TWI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3882, 'Twyford', 'TWYFORD', 51.47553018, -0.863294993, 'TWY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3883, 'Ty Croes', 'TY CROES', 53.22257541, -4.474753946, 'TYC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3884, 'Ty Glas', 'TY GLAS', 51.5215412, -3.19654418, 'TGS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3885, 'Tygwyn', 'TYGWYN', 52.89380186, -4.078666757, 'TYG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3886, 'Tyndrum Lower', 'TYNDRUM LOWER', 56.43332737, -4.714805349, 'TYL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3887, 'Tyseley', 'TYSELEY.', 52.4541245, -1.839111203, 'TYS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3888, 'Tywyn', 'TYWYN', 52.58549, -4.09338, 'TYW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3889, 'Uckfield', 'UCKFIELD', 50.96867258, 0.096456894, 'UCK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3890, 'Uddingston', 'UDDINGSTON', 55.82352079, -4.08668628, 'UDD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3891, 'Ulceby', 'ULCEBY', 53.61905841, -0.302046812, 'ULC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3892, 'Ulleskelf', 'ULLESKELF', 53.85362212, -1.213971008, 'ULL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3893, 'Ulverston', 'ULVERSTON', 54.19159088, -3.097920025, 'ULV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3894, 'Umberleigh', 'UMBERLEIGH', 50.99674639, -3.98292199, 'UMB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3895, 'University (Birmingham)', 'UNIVERSITY BIRM', 52.45125019, -1.936681677, 'UNI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3896, 'Uphall', 'UPHALL', 55.91903662, -3.502106809, 'UHA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3897, 'Upholland', 'UPHOLLAND', 53.52839306, -2.741404202, 'UPL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3898, 'Upminster', 'UPMINSTER.', 51.55936325, 0.251921601, 'UPM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3899, 'Upper Halliford', 'UPPER HALLIFORD', 51.41306951, -0.43089616, 'UPH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3900, 'Upper Holloway', 'UPPER HOLLOWAY', 51.56363035, -0.129075846, 'UHL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3901, 'Upper Tyndrum', 'UPPER TYNDRUM', 56.43464844, -4.703705412, 'UTY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3902, 'Upper Warlingham', 'UPPER WARLINGHAM', 51.30851045, -0.077947217, 'UWL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3903, 'Upton (Merseyside)', 'UPTON MERSEYSIDE', 53.38617781, -3.084755805, 'UPT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3904, 'Upwey', 'UPWEY', 50.64825691, -2.466146876, 'UPW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3905, 'Urmston', 'URMSTON', 53.44828978, -2.353800379, 'URM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3906, 'Uttoxeter', 'UTTOXETER', 52.89708125, -1.857261595, 'UTT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3907, 'Valley', 'VALLEY', 53.28130417, -4.563392247, 'VAL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3908, 'Vauxhall', 'VAUXHALL', 51.48619345, -0.122870783, 'VXH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3909, 'Virginia Water', 'VIRGINIA WATER', 51.40195798, -0.562220659, 'VIR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3910, 'Waddon', 'WADDON', 51.36739826, -0.117332121, 'WDO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3911, 'Wadhurst', 'WADHURST', 51.07346089, 0.313187922, 'WAD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3912, 'Wainfleet', 'WAINFLEET', 53.10514887, 0.234736319, 'WFL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3913, 'Wakefield Kirkgate', 'WAKEFIELD KIRKGT', 53.67898718, -1.488256596, 'WKK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3914, 'Wakefield Westgate', 'WAKEFIELD WESTGT', 53.68174679, -1.505407662, 'WKF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3915, 'Walkden', 'WALKDEN', 53.51978762, -2.396325573, 'WKD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3916, 'Wallasey Grove Road', 'WALLASEY GVE RD', 53.42801467, -3.069716325, 'WLG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3917, 'Wallasey Village', 'WALLASEY VILLAGE', 53.422896, -3.069136355, 'WLV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3918, 'Wallington', 'WALLINGTON', 51.3603868, -0.150830146, 'WLT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3919, 'Wallyford', 'WALLYFORD', 55.9402781, -3.014939754, 'WAF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3920, 'Walmer', 'WALMER', 51.20332393, 1.382891124, 'WAM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3921, 'Walsall', 'WALSALL.', 52.58441036, -1.984753459, 'WSL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3922, 'Walsden', 'WALSDEN', 53.69621394, -2.104458959, 'WDN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3923, 'Waltham Cross', 'WALTHAM CROSS', 51.68507019, -0.026550053, 'WLC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3924, 'Walthamstow Central', 'WALTHAMSTOW CTL', 51.58297119, -0.019877308, 'WHC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3925, 'Walthamstow Queen''s Road', 'WALTHAMSTOW Q RD', 51.58150919, -0.023838128, 'WMW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3926, 'Walton (Merseyside)', 'WALTON MERSEYSDE', 53.45622746, -2.965753228, 'WAO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3927, 'Walton-on-Thames', 'WALTON ON THAMES', 51.37293218, -0.414625196, 'WAL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3928, 'Walton-on-the-Naze', 'WALTON ON NAZE', 51.84620069, 1.267920697, 'WON')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3929, 'Wanborough', 'WANBOROUGH', 51.24452137, -0.667585828, 'WAN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3930, 'Wandsworth Common', 'WANDSWORTH CMMN', 51.4461876, -0.163383008, 'WSW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3931, 'Wandsworth Road', 'WANDSWORTH ROAD', 51.46988261, -0.137665635, 'WWR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3932, 'Wandsworth Town', 'WANDSWORTH TOWN', 51.46105105, -0.188123102, 'WNT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3933, 'Wanstead Park', 'WANSTEAD PARK', 51.55169826, 0.026221977, 'WNP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3934, 'Wapping', 'WAPPING', 51.503718, -0.05632, 'WPE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3935, 'Warblington', 'WARBLINGTON', 50.8534334, -0.967150888, 'WBL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3936, 'Ware (Herts)', 'WARE (HERTS).', 51.80796409, -0.028772714, 'WAR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3937, 'Wareham (Dorset)', 'WAREHAM DORSET', 50.69287417, -2.11525952, 'WRM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3938, 'Wargrave', 'WARGRAVE', 51.49815593, -0.876519321, 'WGV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3939, 'Warminster', 'WARMINSTER', 51.2067679, -2.176745956, 'WMN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3940, 'Warnham', 'WARNHAM', 51.09289508, -0.329453706, 'WNH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3941, 'Warrington Bank Quay', 'WARRINGTON BK QY', 53.38553871, -2.602849785, 'WBQ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3942, 'Warrington Central', 'WARRINGTON CTL', 53.39188323, -2.592413143, 'WAC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3943, 'Warrington West', 'WARRINGTONWEST', 53.393611, -2.638611, 'WAW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3944, 'Warwick', 'WARWICK.', 52.28655133, -1.581858014, 'WRW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3945, 'Warwick Parkway', 'WARWICK PARKWAY', 52.28611497, -1.612062229, 'WRP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3946, 'Water Orton', 'WATER ORTON', 52.51859467, -1.743097188, 'WTO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3947, 'Waterbeach', 'WATERBEACH', 52.26245, 0.197386, 'WBC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3948, 'Wateringbury', 'WATERINGBURY', 51.24973116, 0.422470344, 'WTR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3949, 'Waterloo (Merseyside)', 'WATERLOO MERSEY', 53.47496593, -3.025543946, 'WLO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3950, 'Watford High Street', 'WATFORD HIGH ST', 51.65265514, -0.391713689, 'WFH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3951, 'Watford Junction', 'WATFORD JUNCTION', 51.66352959, -0.396519634, 'WFJ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3952, 'Watford North', 'WATFORD NORTH', 51.67570486, -0.389928129, 'WFN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3953, 'Watlington', 'WATLINGTON', 52.67319, 0.383327, 'WTG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3954, 'Watton-at-Stone', 'WATTON AT STONE', 51.85636, -0.11972, 'WAS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3955, 'Waun-Gron Park', 'WAUN-GRON PARK', 51.48819741, -3.229663483, 'WNG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3956, 'Wavertree Technology Park', 'WAVERTREE TECHPK', 53.40595252, -2.923547158, 'WAV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3957, 'Wedgwood', 'WEDGWOOD', 52.95106237, -2.17082355, 'WED')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3958, 'Weeley', 'WEELEY', 51.85311063, 1.115494594, 'WEE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3959, 'Weeton', 'WEETON', 53.92319129, -1.581209427, 'WET')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3960, 'Welham Green', 'WELHAM GREEN', 51.73635, -0.21069, 'WMG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3961, 'Welling', 'WELLING', 51.46484348, 0.101846038, 'WLI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3962, 'Wellingborough', 'WELLINGBOROUGH', 52.30379284, -0.676643216, 'WEL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3963, 'Wellington (Shropshire)', 'WELLINGTON SALOP', 52.70132167, -2.517163693, 'WLN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3964, 'Welshpool', 'WELSHPOOL', 52.65751111, -3.139872828, 'WLP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3965, 'Welwyn Garden City', 'WELWYN GDN CITY', 51.80105, -0.20407, 'WGC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3966, 'Welwyn North', 'WELWYN NORTH.', 51.8235, -0.19209, 'WLW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3967, 'Wem', 'WEM', 52.85632741, -2.718760914, 'WEM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3968, 'Wembley Central', 'WEMBLEY CENTRAL', 51.55233108, -0.296418564, 'WMB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3969, 'Wembley Stadium', 'WEMBLEY STADIUM', 51.55469663, -0.285958395, 'WCX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3970, 'Wemyss Bay', 'WEMYSS BAY', 55.87613182, -4.889074359, 'WMS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3971, 'Wendover', 'WENDOVER', 51.76176123, -0.747369763, 'WND')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3972, 'Wennington', 'WENNINGTON', 54.12354041, -2.586901999, 'WNN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3973, 'West Allerton', 'WEST ALLERTON', 53.36914314, -2.906969437, 'WSA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3974, 'West Brompton', 'WEST BROMPTON', 51.48733277, -0.195435711, 'WBP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3975, 'West Byfleet', 'WEST BYFLEET', 51.33922612, -0.505478144, 'WBY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3976, 'West Calder', 'WEST CALDER', 55.85379587, -3.567006408, 'WCL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3977, 'West Croydon', 'WEST CROYDON', 51.37842847, -0.102581278, 'WCY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3978, 'West Drayton', 'WEST DRAYTON', 51.51006005, -0.472225232, 'WDT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3979, 'West Dulwich', 'WEST DULWICH', 51.44062348, -0.090938887, 'WDU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3980, 'West Ealing', 'WEST EALING', 51.51364043, -0.319783629, 'WEA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3981, 'West Ham', 'West Ham', 51.52857648, 0.005875472, 'WEH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3982, 'West Hampstead', 'WEST HAMPSTEAD', 51.54747334, -0.19118177, 'WHD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3983, 'West Hampstead Thameslink', 'WEST HAMPSTD TLK', 51.54862, -0.19243, 'WHP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3984, 'West Horndon', 'WEST HORNDON', 51.56795057, 0.340647197, 'WHR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3985, 'West Kilbride', 'WEST KILBRIDE', 55.69614641, -4.851740821, 'WKB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3986, 'West Kirby', 'WEST KIRBY', 53.37319127, -3.183769494, 'WKI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3987, 'West Malling', 'WEST MALLING', 51.29201798, 0.418657268, 'WMA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3988, 'West Norwood', 'WEST NORWOOD', 51.43180353, -0.103808815, 'WNW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3989, 'West Ruislip', 'WEST RUISLIP.', 51.56975622, -0.437757633, 'WRU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3990, 'West Runton', 'WEST RUNTON', 52.9355503, 1.245465306, 'WRN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3991, 'West St Leonards', 'WEST ST LEONARDS', 50.85314724, 0.539940339, 'WLD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3992, 'West Sutton', 'WEST SUTTON', 51.36616, -0.20466, 'WSU')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3993, 'West Wickham', 'WEST WICKHAM', 51.38130201, -0.014425183, 'WWI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3994, 'West Worthing', 'WEST WORTHING', 50.81834832, -0.392977891, 'WWO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3995, 'Westbury', 'WESTBURY', 51.26697915, -2.199193897, 'WSB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3996, 'Westcliff', 'WESTCLIFF', 51.53733703, 0.691479135, 'WCF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3997, 'Westcombe Park', 'WESTCOMBE PARK', 51.48448685, 0.017767227, 'WCB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3998, 'Westenhanger', 'WESTENHANGER', 51.09487937, 1.037707764, 'WHA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (3999, 'Wester Hailes', 'WESTERHAILES', 55.91431124, -3.284336393, 'WTA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4000, 'Westerfield', 'WESTERFIELD', 52.08087836, 1.166130957, 'WFI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4001, 'Westerton', 'WESTERTON', 55.90479398, -4.334874626, 'WES')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4002, 'Westgate-on-Sea', 'WESTGATE ON SEA', 51.38145254, 1.338378497, 'WGA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4003, 'Westhoughton', 'WESTHOUGHTON', 53.55597056, -2.52391934, 'WHG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4004, 'Weston Milton', 'WESTON MILTON', 51.34877468, -2.943343959, 'WNM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4005, 'Weston-super-Mare', 'WESTON SUPR MARE', 51.34431671, -2.971681531, 'WSM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4006, 'Wetheral', 'WETHERAL', 54.88383913, -2.831705373, 'WRL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4007, 'Weybridge', 'WEYBRIDGE', 51.361772, -0.457715753, 'WYB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4008, 'Weymouth', 'WEYMOUTH.', 50.61601612, -2.454887722, 'WEY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4009, 'Whaley Bridge', 'WHALEY BRIDGE', 53.33024999, -1.984639006, 'WBR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4010, 'Whalley (Lancs)', 'WHALLEY LANCS', 53.82425416, -2.412258277, 'WHE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4011, 'Whatstandwell', 'WHATSTANDWELL', 53.08311502, -1.504309244, 'WTS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4012, 'Whifflet', 'WHIFFLET', 55.85368534, -4.018641637, 'WFF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4013, 'Whimple', 'WHIMPLE', 50.76801832, -3.354340682, 'WHM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4014, 'Whinhill', 'WHINHILL', 55.93836064, -4.746684343, 'WNL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4015, 'Whiston', 'WHISTON', 53.41387942, -2.796433416, 'WHN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4016, 'Whitby', 'WHITBY', 54.48461942, -0.615396354, 'WTB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4017, 'Whitchurch (Cardiff)', 'WHITCHURCH GLAM', 51.52064748, -3.22217731, 'WHT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4018, 'Whitchurch (Hampshire)', 'WHITCHURCH HANTS', 51.23741109, -1.338181206, 'WCH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4019, 'Whitchurch (Shropshire)', 'WHITCHURCH SALOP', 52.96807676, -2.67147586, 'WTC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4020, 'White Hart Lane', 'WHITE HART LANE', 51.60504412, -0.070907037, 'WHL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4021, 'White Notley', 'WHITE NOTLEY', 51.8389241, 0.595875952, 'WNY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4022, 'White Rose', 'White Rose', 53.759293, -1.577713, 'WRO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4023, 'Whitechapel', 'Whitechapel', 51.519467, -0.059757122, 'ZLW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4024, 'Whitecraigs', 'WHITECRAIGS', 55.79031473, -4.310151868, 'WCR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4025, 'Whitehaven', 'WHITEHAVEN', 54.55303162, -3.586933718, 'WTH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4026, 'Whitland', 'WHITLAND', 51.81858, -4.61392, 'WTL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4027, 'Whitley Bridge', 'WHITLEY BRIDGE', 53.69914493, -1.158278466, 'WBD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4028, 'Whitlocks End', 'WHITLOCKS END', 52.3918469, -1.851534743, 'WTE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4029, 'Whitstable', 'WHITSTABLE', 51.35758066, 1.033302028, 'WHI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4030, 'Whittlesea', 'WHITTLESEA', 52.54995569, -0.118225461, 'WLE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4031, 'Whittlesford Parkway', 'WHITTLESFORD', 52.10360009, 0.165618606, 'WLF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4032, 'Whitton (London)', 'WHITTON LONDON', 51.44961063, -0.357683876, 'WTN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4033, 'Whitwell (Derbyshire)', 'WHITWELL', 53.28038058, -1.199376401, 'WWL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4034, 'Whyteleafe', 'WHYTELEAFE.', 51.30995682, -0.081143929, 'WHY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4035, 'Whyteleafe South', 'WHYTELEAFE SOUTH', 51.3035526, -0.076691014, 'WHS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4036, 'Wick', 'WICK', 58.44168704, -3.097981057, 'WCK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4037, 'Wickford', 'WICKFORD.', 51.61502928, 0.519193939, 'WIC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4038, 'Wickham Market', 'WICKHAM MARKET.', 52.15112006, 1.39868855, 'WCM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4039, 'Widdrington', 'WIDDRINGTON', 55.24139256, -1.616238916, 'WDD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4040, 'Widnes', 'WIDNES', 53.37851496, -2.733536824, 'WID')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4041, 'Widney Manor', 'WIDNEY MANOR.', 52.3959503, -1.774378811, 'WMR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4042, 'Wigan North Western', 'WIGAN NORTH WEST', 53.54345134, -2.633130699, 'WGN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4043, 'Wigan Wallgate', 'WIGAN WALLGATE', 53.54483534, -2.633181536, 'WGW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4044, 'Wigton', 'WIGTON', 54.82933971, -3.164351154, 'WGT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4045, 'Wildmill', 'WILDMILL', 51.52006, -3.5802, 'WMI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4046, 'Willesden Junction', 'WILLESDEN JN', 51.53203324, -0.243267062, 'WIJ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4047, 'Williamwood', 'WILLIAMWOOD', 55.79410512, -4.290114846, 'WLM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4048, 'Willington', 'WILLINGTON', 52.85366357, -1.563360192, 'WIL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4049, 'Wilmcote', 'WILMCOTE', 52.22248701, -1.755935181, 'WMC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4050, 'Wilmslow', 'WILMSLOW', 53.32686324, -2.226327912, 'WML')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4051, 'Wilnecote (Staffs)', 'WILNECOTE STAFFS', 52.61085797, -1.67949642, 'WNE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4052, 'Wimbledon', 'WIMBLEDON', 51.42158552, -0.206498827, 'WIM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4053, 'Wimbledon Chase', 'WIMBLEDON CHASE', 51.40956, -0.21403, 'WBO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4054, 'Winchelsea', 'WINCHELSEA', 50.93376133, 0.702271814, 'WSE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4055, 'Winchester', 'WINCHESTER.', 51.06720512, -1.319703002, 'WIN')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4056, 'Winchfield', 'WINCHFIELD', 51.28494989, -0.906981902, 'WNF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4057, 'Winchmore Hill', 'WINCHMORE HILL', 51.63395, -0.10089, 'WIH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4058, 'Windermere', 'WINDERMERE', 54.37960543, -2.903389364, 'WDM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4059, 'Windsor & Eton Central', '-', 51.48327262, -0.610374922, 'WNC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4060, 'Windsor & Eton Riverside', '-', 51.48565491, -0.606528915, 'WNR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4061, 'Winnersh', 'WINNERSH', 51.43027741, -0.87686164, 'WNS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4062, 'Winnersh Triangle', 'WINNERSH TRANGLE', 51.4367367, -0.89133506, 'WTI')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4063, 'Winsford', 'WINSFORD', 53.1905328, -2.494593885, 'WSF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4064, 'Wishaw', 'WISHAW', 55.77203337, -3.926425243, 'WSH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4065, 'Witham', 'WITHAM.', 51.80597989, 0.639143614, 'WTM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4066, 'Witley', 'WITLEY', 51.13315687, -0.645781144, 'WTY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4067, 'Witton (West Midlands)', 'WITTON W MIDS', 52.51225381, -1.883989025, 'WTT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4068, 'Wivelsfield', 'WIVELSFIELD', 50.96378293, -0.120837577, 'WVF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4069, 'Wivenhoe', 'WIVENHOE.', 51.85654276, 0.956146009, 'WIV')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4070, 'Woburn Sands', 'WOBURN SANDS', 52.01816252, -0.654077198, 'WOB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4071, 'Woking', 'WOKING', 51.31846927, -0.556954188, 'WOK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4072, 'Wokingham', 'WOKINGHAM', 51.41122172, -0.842545198, 'WKM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4073, 'Woldingham', 'WOLDINGHAM', 51.29015597, -0.051864564, 'WOH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4074, 'Wolverhampton', 'WOLVERHAMPTON.', 52.58785715, -2.119516893, 'WVH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4075, 'Wolverton', 'WOLVERTON', 52.06589044, -0.804264138, 'WOL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4076, 'Wombwell', 'WOMBWELL', 53.51759057, -1.416316768, 'WOM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4077, 'Wood End', 'WOOD END', 52.34436859, -1.844500907, 'WDE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4078, 'Wood Street', 'WOOD STREET', 51.58671419, -0.00195833, 'WST')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4079, 'Woodbridge', 'WOODBRIDGE.', 52.09046452, 1.317791422, 'WDB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4080, 'Woodgrange Park', 'WOODGRANGE PARK', 51.54876214, 0.04513119, 'WGR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4081, 'Woodhall', 'WOODHALL', 55.9311949, -4.655388489, 'WDL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4082, 'Woodhouse', 'WOODHOUSE', 53.36375861, -1.35755924, 'WDH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4083, 'Woodlesford', 'WOODLESFORD', 53.75680457, -1.442885379, 'WDS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4084, 'Woodley', 'WOODLEY', 53.42927163, -2.09326801, 'WLY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4085, 'Woodmansterne', 'WOODMANSTERNE', 51.3190192, -0.154259672, 'WME')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4086, 'Woodsmoor', 'WOODSMOOR', 53.3860782, -2.141286478, 'WSR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4087, 'Wool', 'WOOL', 50.68162341, -2.221475875, 'WOO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4088, 'Woolston', 'WOOLSTON', 50.89891313, -1.377063456, 'WLS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4089, 'Woolwich (Elizabeth line)', 'Woolwich', 51.491578, 0.071819, 'WWC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4090, 'Woolwich Arsenal', 'WOOLWICH ARSENAL', 51.48987374, 0.069864616, 'WWA')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4091, 'Woolwich Dockyard', 'WOOLWICH DOCKYRD', 51.49113057, 0.05465135, 'WWD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4092, 'Wootton Wawen', 'WOOTTON WAWEN', 52.26587738, -1.784564415, 'WWW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4093, 'Worcester Foregate Street', 'WORCESTER FGT ST', 52.19492976, -2.221749159, 'WOF')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4094, 'Worcester Park', 'WORCESTER PARK', 51.3812537, -0.245167023, 'WCP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4095, 'Worcester Shrub Hill', 'WORCESTER SHB HL', 52.19473652, -2.209415022, 'WOS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4096, 'Worcestershire Parkway', 'WORCSPARKWAY', 52.155817, -2.161471, 'WOP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4097, 'Workington', 'WORKINGTON.', 54.6450979, -3.55849952, 'WKG')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4098, 'Worksop', 'WORKSOP', 53.31166202, -1.122542594, 'WRK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4099, 'Worle', 'WORLE', 51.35803344, -2.909638886, 'WOR')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4100, 'Worplesdon', 'WORPLESDON', 51.2890166, -0.582573597, 'WPL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4101, 'Worstead', 'WORSTEAD', 52.77731601, 1.404230785, 'WRT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4102, 'Worthing', 'WORTHING.', 50.8184932, -0.376163686, 'WRH')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4103, 'Wrabness', 'WRABNESS', 51.93945868, 1.171915943, 'WRB')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4104, 'Wraysbury', 'WRAYSBURY', 51.45771219, -0.541915109, 'WRY')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4105, 'Wrenbury', 'WRENBURY', 53.0197184, -2.59624734, 'WRE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4106, 'Wressle', 'WRESSLE', 53.77277727, -0.92420758, 'WRS')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4107, 'Wrexham Central', 'WREXHAM CENTRAL', 53.04620654, -2.999062482, 'WXC')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4108, 'Wrexham General', 'WREXHAM GENERAL', 53.04988, -3.00146, 'WRX')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4109, 'Wye', 'WYE', 51.18501369, 0.929321854, 'WYE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4110, 'Wylam', 'WYLAM', 54.97497108, -1.814055621, 'WYM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4111, 'Wylde Green', 'WYLDE GREEN.', 52.54644367, -1.831842869, 'WYL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4112, 'Wymondham', 'WYMONDHAM', 52.56486065, 1.117662312, 'WMD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4113, 'Wythall', 'WYTHALL.', 52.38017701, -1.866265184, 'WYT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4114, 'Yalding', 'YALDING', 51.22647911, 0.412167502, 'YAL')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4115, 'Yardley Wood', 'YARDLEY WOOD', 52.42150955, -1.854376134, 'YRD')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4116, 'Yarm', 'YARM', 54.49377475, -1.353090201, 'YRM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4117, 'Yate', 'YATE', 51.54060333, -2.432524509, 'YAE')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4118, 'Yatton', 'YATTON', 51.39101195, -2.82779361, 'YAT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4119, 'Yeoford', 'YEOFORD', 50.7768865, -3.726083161, 'YEO')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4120, 'Yeovil Junction', 'YEOVIL JUNCTION', 50.92472896, -2.613179136, 'YVJ')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4121, 'Yeovil Pen Mill', 'YEOVIL PEN MILL', 50.94451153, -2.613439339, 'YVP')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4122, 'Yetminster', 'YETMINSTER', 50.89615639, -2.572988939, 'YET')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4123, 'Ynyswen', 'YNYSWEN', 51.66496961, -3.521614997, 'YNW')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4124, 'Yoker', 'YOKER', 55.89273102, -4.387412084, 'YOK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4125, 'York', 'YORK.', 53.95797924, -1.093176915, 'YRK')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4126, 'Yorton', 'YORTON', 52.80896814, -2.736464904, 'YRT')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4127, 'Ystrad Mynach', 'YSTRAD MYNACH', 51.64093139, -3.241305784, 'YSM')",
		);
		pgm.sql(
			"INSERT INTO uk_stations (station_id, station_name, sixteen_character_name, latitude, longitude, crs_code) VALUES (4128, 'Ystrad Rhondda', 'YSTRAD RHONDDA', 51.64363752, -3.466701338, 'YSR')",
		);
	},

	down(pgm) {
		pgm.dropTable("uk_stations");
	},
	shorthands: undefined,
};

module.exports = migration;
