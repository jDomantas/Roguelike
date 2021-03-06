var levels = [
	[
		'       ________________       ',
		'      /                \\      ',
		'      |   Rogue-like   |      ',
		'      \\________________/      ',
		'                              ',
		'    LD36 game by jDomantas    ',
		'                              ',
		'##############################',
		'################.######,,,####',
		'####...######......###,,,,,###',
		'###..@..###.#...##...=,,>,,###',
		'####..........###..###,,,,,###',
		'########...############,,,####',
		'##############################',
		'                              ',
		'    Use arrow keys to move    ',
	],
	[
		'##############################',
		'#.....###################....#',
		'#{..@.+.+......>#.+.....=...{#',
		'#.....#.#########.#######....#',
		'#######.#....#{.#.=.....######',
		'###...#.#....#..#.#.....#....#',
		'#.=...=.+....#..#.#.....=....#',
		'#.#...#.#....##=#.#.....#....#',
		'#.#####.#....=..#.#.....#....#',
		'#..####.#########.##=####....#',
		'##=####.#...#####.#.....##=###',
		'#.....#.#...#####.#.....##...#',
		'#.....#.#...#.....#{....##...#',
		'#...{.#.##=##+###=########...#',
		'#.....#.......###........=...#',
		'##############################',
	],
	[
		'##############################',
		'##############...#############',
		'#######.....>#.@.""##"""...###',
		'#######.######...""""""....###',
		'#######+#######"""""""""...###',
		'#####.....######"#""""""######',
		'#####.....###""###""""""######',
		'#####..o..###""""""""""#######',
		'#####.....##."""""""""""######',
		'#####.....=.."""""""#""""#####',
		'#####.....#######""###""".####',
		'#####..B..######""####"...~~##',
		'#####.....#######""##~~..~~~~#',
		'#####.....##########~~~~~~~~~#',
		'######################~~~##~##',
		'##############################',
	],
	[
		'##############################',
		'#####...###...################',
		'#####.>.###.@.=..##..""#######',
		'#####...###...##..=....#######',
		'######=############....#######',
		'######.############....<4#####',
		'######.#########~~#....<1#####',
		'######.########"""#....#######',
		'######=########"B"#....<3#####',
		'#####.........""""#....<2#####',
		'#####.............#....#######',
		'#####.............=..."#######',
		'#####.............#."""#######',
		'#########^^^^^^###############',
		'#########111111###############',
		'##############################',
	],
	[
		'##############################',
		'#####...################...###',
		'#####.@.####.......#####.>.###',
		'#####...####.#####=#####...###',
		'######=#####=##.......###=####',
		'###.......#,,,#.......###.####',
		'###.......#,t,#.......###.####',
		'###.......#,,,#.......###S####',
		'###.......##=##...s...###.####',
		'###...s...##.##.......###.####',
		'###.......##.##.......###.####',
		'###.......##.#####=######=####',
		'######=#####.#####........####',
		'######.......#################',
		'##############################',
		'##############################',
	],
	[
		'##############################',
		'###"..G"##~~~~#########"...###',
		'##.....~~~~~~~~~~~~""""".@..##',
		'###G..~~~~~~~~~~~""""""....###',
		'###~~~~~~~~~~~~~""""""....####',
		'##~~~~~~~~~~"""""""""""."#####',
		'###~~~##~~....."".""""""######',
		'####~~#"""..s.......""""######',
		'########""S.........."########',
		'#...#####....s.."....#########',
		'#.>.#####s.......S.."#########',
		'#...#####...s......"""########',
		'##=#######..S..S...###########',
		'##.......=.......#############',
		'##############################',
		'##############################',
	],
	[
		'##############################',
		'##############################',
		'###########,,,################',
		'#####.=...=,/,=...############',
		'#####.#####,,,###.############',
		'#####.###########.############',
		'#####.###########.############',
		'#####.=....G....=.############',
		'#####.########################',
		'#...#.########################',
		'#.@.=.#...........G...G..#...#',
		'#...#.=....................>.#',
		'#######...........G...G..#...#',
		'##############################',
		'##############################',
		'##############################',
	],
	[
		'##############################',
		'####...#######...#############',
		'###G..*......=.>.=..########~#',
		'###....G...""#...#......#~~~~#',
		'###~~:~..."#######......~~~###',
		'#~#~~:~~~~~~~"#.~~.~:~~~~~~###',
		'#~~~~:~~~~~~~~"~~~~~~~~~~~####',
		'##~~..~..~~~~""~~~~~:~~~~~####',
		'##.~~*...~..""~"~~~~:~~~######',
		'##.G..G....."""~~~"~"""#######',
		'##..*....G..""""".."""####...#',
		'###.G...*..""""".""""""""=.@.#',
		'####....G."""""#""#####"##...#',
		'####...*.."""#################',
		'########.."###################',
		'##############################',
	],
	[
		'##############################',
		'##########"""#...#...#S..#####',
		'######.S.""."=.@.#.>.=..G#####',
		'#####....."".#"..#...#...#####',
		'#####.s..S.""#########...#####',
		'###".......###{....####+######',
		'###..""""######..G.##......###',
		'###""."~#######....=.......###',
		'####"""~~~~~########..G...~###',
		'####.""~~~.~#####""......~~~##',
		'#####"...~~~.###".".G....~~~"#',
		'########....""""""...G..~~~~.#',
		'#############"""."..G.~~~~~~"#',
		'################""....~~~~~"##',
		'########################~~"###',
		'##############################',
	],
	[
		'##############################',
		'#########............#########',
		'#########..........@.#########',
		'#########...c.c..c.c.#########',
		'#########.c..c.cc....#########',
		'#########...c.ccccc..#########',
		'#########.....cc.c...#########',
		'##############################',
		'                              ',
		'                              ',
		'           The end            ',
		'                              ',
		'                              ',
		'     Thanks for playing!      ',
		'                              ',
		'                              ',
	]
];

