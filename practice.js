// -- Provide 50 or more questions here. Each question: {text, options:[], answer, explanation}
const PRACTICE_QUESTIONS = [
  // Replace with your actual big list of questions from assignments
  {
                        text: "Scarcity of food is a",
                        options: [
                            "chemical factor",
                            "demographic factor",
                            "push factor",
                            "pull factor"
                        ],
                        answer: 2,
                        explanation: "Scarcity of food pushes people to migrate, hence it’s a push factor. Chemical and demographic factors are not related to migration motives; pull factors attract, not repel."
                    },
                    {
                        text: "The Geographical discipline of Climatology is most closely related to:",
                        options: [
                            "Geology",
                            "Meteorology",
                            "Hydrology",
                            "Pedology"
                        ],
                        answer: 1,
                        explanation: "Climatology and meteorology both study atmosphere and weather patterns. Geology deals with rocks, Hydrology with water, and Pedology with soils."
                    },
                    {
                        text: "The Trinity explosion of 1945 is taken as the beginning of the",
                        options: [
                            "Holocene",
                            "Cenocene",
                            "Anthropocene",
                            "Eocene"
                        ],
                        answer: 2,
                        explanation: "Anthropocene marks human impact on Earth starting with nuclear explosions. Holocene began earlier; Cenocene and Eocene are ancient geological epochs."
                    },
                    {
                        text: "In the word root for conservation, con stands for",
                        options: [
                            "together",
                            "to keep",
                            "house",
                            "manage"
                        ],
                        answer: 0,
                        explanation: "‘Con’ means ‘together’ in Latin, showing unity in effort. ‘To keep’ is the meaning of ‘servare’; ‘house’ and ‘manage’ are unrelated."
                    },
                    {
                        text: "In the word root for conservation, servare stands for",
                        options: [
                            "together",
                            "to keep",
                            "house",
                            "manage"
                        ],
                        answer: 1,
                        explanation: "‘Servare’ means ‘to keep’ or ‘to save’ in Latin. ‘Together’ refers to ‘con’, while ‘house’ and ‘manage’ are unrelated meanings."
                    },
                    {
                        text: "Good climate is a",
                        options: [
                            "chemical factor",
                            "demographic factor",
                            "push factor",
                            "pull factor"
                        ],
                        answer: 3,
                        explanation: "Good climate attracts people, making it a pull factor. Push factors drive people away; chemical and demographic factors are unrelated."
                    },
                    {
                        text: "\"The rate of any biological process is limited by that factor in least amount relative to requirement, so there is a single limiting factor.\" This is the statement for",
                        options: [
                            "Liebig’s law of the minimum",
                            "Liebig’s law of the maximum",
                            "Shelford’s law of tolerance",
                            "Shelford’s law of intolerance"
                        ],
                        answer: 0,
                        explanation: "Liebig’s law of the minimum states that growth depends on the scarcest resource. Others describe tolerance ranges, not limiting single factors."
                    },
                    {
                        text: "The discipline of Demography is most closely related to:",
                        options: [
                            "Phytogeography",
                            "Zoogeography",
                            "Population Geography",
                            "Economic Geography"
                        ],
                        answer: 2,
                        explanation: "Demography studies human population patterns, linking directly to Population Geography. Phytogeography and Zoogeography concern plants and animals; Economic Geography focuses on resources."
                    },
                    {
                        text: "“Allowing some places and some creatures to exist without significant human interference” is the definition of:",
                        options: [
                            "conservation",
                            "preservation",
                            "environmentalism",
                            "ecology"
                        ],
                        answer: 1,
                        explanation: "Preservation means protecting nature from human use. Conservation involves sustainable use; environmentalism is an ideology; ecology is the study of interactions."
                    },
                    {
                        text: "The movement of lions across the Gir landscape is an example of",
                        options: [
                            "diffusion",
                            "secular dispersal",
                            "jump dispersal",
                            "drifting"
                        ],
                        answer: 0,
                        explanation: "Diffusion is gradual movement across adjacent areas. Secular dispersal happens over evolutionary timescales; jump dispersal involves large gaps; drifting is passive movement."
                    },
                    {
                        text: "Which of these is true about P waves?",
                        options: [
                            "They are longitudinal in nature",
                            "They are transverse in nature",
                            "They cannot move through gases",
                            "They cannot move through liquids"
                        ],
                        answer: 0,
                        explanation: "P waves are longitudinal and travel through solids, liquids, and gases; S waves are transverse, while the other statements limit P waves incorrectly."
                    },
                    {
                        text: "Inclusions are older than the host rock. This is known as:",
                        options: [
                            "Principle of superposition",
                            "Principle of original horizontality",
                            "Principle of lateral continuity",
                            "Principle of inclusions"
                        ],
                        answer: 3,
                        explanation: "The principle of inclusions states that included fragments are older than the surrounding rock; the others relate to sediment layering and continuity, not inclusion age."
                    },
                    {
                        text: "Mount Fuji is an example of:",
                        options: [
                            "Shield volcano",
                            "Stratovolcano",
                            "Caldera",
                            "Flood basalt province"
                        ],
                        answer: 1,
                        explanation: "Mount Fuji is a stratovolcano built from alternating lava and ash layers; shield volcanoes have gentle slopes, calderas are collapsed craters, and flood basalts are vast lava plains."
                    },
                    {
                        text: "Layers of rocks deposited from above (e.g. sediments and lava flows) are originally laid down horizontally. This is known as:",
                        options: [
                            "Principle of superposition",
                            "Principle of original horizontality",
                            "Principle of lateral continuity",
                            "Principle of inclusions"
                        ],
                        answer: 1,
                        explanation: "The principle of original horizontality states sediments settle in horizontal layers; superposition deals with sequence, lateral continuity with extent, and inclusions with fragments."
                    },
                    {
                        text: "Which of these is not a method of absolute dating?",
                        options: [
                            "Radioisotope dating",
                            "Thermoluminescence dating",
                            "Inclusion study",
                            "Fission track dating"
                        ],
                        answer: 2,
                        explanation: "Inclusion study is for relative dating; absolute methods include radioisotope, thermoluminescence, and fission track dating which measure actual ages."
                    },
                    {
                        text: "Which of these is true about S waves?",
                        options: [
                            "They are longitudinal in nature",
                            "They are transverse in nature",
                            "They cannot move through solids, liquids, and gases",
                            "They are the first to reach the surface of the Earth"
                        ],
                        answer: 1,
                        explanation: "S waves are transverse and move only through solids; P waves are longitudinal and arrive first, while the other statements are incorrect."
                    },
                    {
                        text: "Which of these is an example of a direct source of information about the Earth?",
                        options: [
                            "Earthquake",
                            "Volcanic eruption",
                            "Magnetic survey",
                            "Gravity anomaly"
                        ],
                        answer: 1,
                        explanation: "Volcanic eruptions bring up materials directly from Earth's interior; earthquakes, magnetic, and gravity surveys are indirect sources."
                    },
                    {
                        text: "Assemblage of fossils are unique to the time that they lived in, and so can be used to age rocks across a wide geographic distribution. This is known as:",
                        options: [
                            "Principle of fossil succession",
                            "Principle of original horizontality",
                            "Principle of superposition",
                            "Principle of cross-cutting relationships"
                        ],
                        answer: 0,
                        explanation: "The principle of fossil succession states fossils occur in a definite sequence through time; others describe layering, orientation, or cutting relations, not fossils."
                    },
                    {
                        text: "Within a depositional basin, strata are laterally continuous in all directions till the edge of the basin. This is known as:",
                        options: [
                            "Principle of superposition",
                            "Principle of original horizontality",
                            "Principle of lateral continuity",
                            "Principle of inclusions"
                        ],
                        answer: 2,
                        explanation: "The principle of lateral continuity says rock layers extend horizontally until they thin out; superposition and horizontality relate to vertical arrangement, inclusions to rock fragments."
                    },
                    {
                        text: "Krakatoa eruption resulted in the formation of:",
                        options: [
                            "Shield volcano",
                            "Stratovolcano",
                            "Caldera",
                            "Flood basalt province"
                        ],
                        answer: 2,
                        explanation: "Krakatoa’s massive eruption collapsed its magma chamber forming a caldera; shield and stratovolcanoes are mountain-like, flood basalts are wide lava regions."
                    },
                    {
                        text: "“Waxy” is an example of:",
                        options: [
                            "Cleavage",
                            "Structure",
                            "Lustre",
                            "Streak"
                        ],
                        answer: 2,
                        explanation: "‘Waxy’ describes a mineral’s lustre or surface shine; cleavage is about breaking planes, structure is arrangement, and streak is powdered color."
                    },
                    {
                        text: "“Ease of passage of light through the mineral” is known as:",
                        options: [
                            "Transparency",
                            "Fracture",
                            "Structure",
                            "Streak"
                        ],
                        answer: 0,
                        explanation: "Transparency measures how easily light passes through a mineral; fracture shows break pattern, structure is atomic arrangement, and streak is color of its powder."
                    },
                    {
                        text: "“Unassorted coarse and fine debris left by melting glaciers, often with angular to sub-angular rock fragments” is the definition of:",
                        options: [
                            "Glacial till",
                            "Outwash deposit",
                            "Esker",
                            "Drumlin"
                        ],
                        answer: 0,
                        explanation: "Glacial till is unsorted debris left by glaciers; outwash is sorted by meltwater, eskers are ridges of meltwater deposits, and drumlins are streamlined hills."
                    },
                    {
                        text: "“Green or black-coloured inosilicates forming 10% of the Earth’s crust” is a description of:",
                        options: [
                            "Amphiboles",
                            "Quartz",
                            "Feldspar",
                            "Pyroxene"
                        ],
                        answer: 3,
                        explanation: "Pyroxenes are dark green or black inosilicates forming 10% of crust; amphiboles are more complex silicates, quartz is colorless, and feldspar is pink or white."
                    },
                    {
                        text: "“The ridge edge where two cirques meet” is the definition of:",
                        options: [
                            "Glacier",
                            "Arete",
                            "Horn",
                            "Hanging valley"
                        ],
                        answer: 1,
                        explanation: "Arete is a sharp ridge between two cirques; horn is a peak where several cirques meet, glacier is moving ice, and hanging valley is elevated above main valley."
                    },
                    {
                        text: "Mechanical action of ocean waves is an example of:",
                        options: [
                            "Chemical weathering",
                            "Physical weathering",
                            "Biological weathering",
                            "None of the above"
                        ],
                        answer: 1,
                        explanation: "Ocean wave action breaks rocks physically without chemical change; chemical and biological weathering involve reactions or living organisms."
                    },
                    {
                        text: "Sudden cooling of magma results in:",
                        options: [
                            "Smooth-grained sedimentary rocks",
                            "Coarse-grained sedimentary rocks",
                            "Smooth-grained igneous rocks",
                            "Coarse-grained igneous rocks"
                        ],
                        answer: 2,
                        explanation: "Rapid cooling forms smooth (fine-grained) igneous rocks; slow cooling forms coarse grains, and sedimentary rocks form by deposition, not cooling."
                    },
                    {
                        text: "Gypsum is an example of:",
                        options: [
                            "Siliciclastic rock",
                            "Carbonate rock",
                            "Evaporite rock",
                            "Phosphatic rock"
                        ],
                        answer: 2,
                        explanation: "Gypsum forms from evaporation of saline water, classifying it as an evaporite; siliciclastic and carbonate rocks are sedimentary, and phosphatic rocks contain phosphate minerals."
                    },
                    {
                        text: "Thermal stresses lead to:",
                        options: [
                            "Chemical weathering",
                            "Physical weathering",
                            "Biological weathering",
                            "None of the above"
                        ],
                        answer: 1,
                        explanation: "Thermal expansion and contraction cause physical weathering by cracking; chemical weathering alters minerals, biological involves living agents."
                    },
                    {
                        text: "Which of these are correctly arranged as per Moh’s scale from softest to hardest?",
                        options: [
                            "Talc, apatite, fluorite, diamond",
                            "Talc, calcite, feldspar, diamond",
                            "Talc, fluorite, apatite, diamond",
                            "Diamond, feldspar, calcite, talc"
                        ],
                        answer: 1,
                        explanation: "The correct Moh’s hardness order is Talc (1), Calcite (3), Feldspar (6), Diamond (10); others have incorrect sequences of minerals."
                    },
                    {
                        text: "Which of these is the densest layer?",
                        options: [
                            "Troposphere",
                            "Stratosphere",
                            "Mesosphere",
                            "Thermosphere"
                        ],
                        answer: 0,
                        explanation: "The troposphere is the lowest and densest layer due to high air pressure; upper layers are thinner with decreasing air density."
                    },
                    {
                        text: "The government came up with a regulation that incandescent bulbs be replaced by LED bulbs, so that electricity consumption and release of carbon dioxide from power plants is reduced. In the context of climate change, such an action would be called:",
                        options: [
                            "Adaptation",
                            "Mitigation",
                            "Deceleration",
                            "Maladaptation"
                        ],
                        answer: 1,
                        explanation: "Mitigation means reducing the causes of climate change by lowering emissions; adaptation deals with coping, not prevention, while others are irrelevant."
                    },
                    {
                        text: "Which of these is not a climatic forcing for Earth?",
                        options: [
                            "Changes in plate tectonics",
                            "Changes in Earth's orbit",
                            "Changes in Sun's orbit",
                            "Changes in Sun's strength"
                        ],
                        answer: 2,
                        explanation: "The Sun’s orbit doesn’t change Earth’s climate; tectonics, Earth’s orbit, and solar strength directly influence climate forcing."
                    },
                    {
                        text: "Which of these contains the most water vapour and aerosols?",
                        options: [
                            "Troposphere",
                            "Stratosphere",
                            "Mesosphere",
                            "Thermosphere"
                        ],
                        answer: 0,
                        explanation: "The troposphere holds almost all atmospheric water vapour and aerosols; upper layers are too cold and thin for moisture."
                    },
                    {
                        text: "Which of these is true about Coriolis force on the Earth?",
                        options: [
                            "It is maximum at poles and zero at Equator.",
                            "It is zero at poles and maximum at Equator.",
                            "In the Northern hemisphere, it deflects winds towards left.",
                            "In the Southern hemisphere, it deflects winds towards right."
                        ],
                        answer: 0,
                        explanation: "Coriolis force increases with latitude—maximum at poles and zero at the equator; other options reverse or confuse direction effects."
                    },
                    {
                        text: "From the surface of the Earth to upwards, which of these is the correct sequence of atmospheric layers?",
                        options: [
                            "Troposphere, Stratosphere, Mesosphere, Thermosphere, Exosphere",
                            "Troposphere, Mesosphere, Stratosphere, Thermosphere, Exosphere",
                            "Troposphere, Thermosphere, Mesosphere, Stratosphere, Exosphere",
                            "Troposphere, Exosphere, Thermosphere, Mesosphere, Stratosphere"
                        ],
                        answer: 0,
                        explanation: "The correct order upward is Troposphere → Stratosphere → Mesosphere → Thermosphere → Exosphere; others mix the sequence."
                    },
                    {
                        text: "“The ability of a system to adjust to climate change (including climate variability and extremes) to moderate potential damages, to take advantage of opportunities, or to cope with the consequences” is a definition for:",
                        options: [
                            "Adaptive response",
                            "Adaptive capacity",
                            "Mitigative response",
                            "Mitigative capacity"
                        ],
                        answer: 1,
                        explanation: "Adaptive capacity is the system’s ability to cope with or adjust to climate impacts; mitigation focuses on emission reduction, not adjustment."
                    },
                    {
                        text: "Flights of jet planes typically occur in:",
                        options: [
                            "Troposphere",
                            "Stratosphere",
                            "Mesosphere",
                            "Thermosphere"
                        ],
                        answer: 1,
                        explanation: "Jet planes fly in the lower stratosphere to avoid turbulence and clouds; the troposphere is unstable, and higher layers are beyond aircraft limits."
                    },
                    {
                        text: "Noctilucent clouds are present in which layer?",
                        options: [
                            "Troposphere",
                            "Stratosphere",
                            "Mesosphere",
                            "Thermosphere"
                        ],
                        answer: 2,
                        explanation: "Noctilucent clouds form in the cold mesosphere at high altitudes; lower layers have normal clouds, and the thermosphere is too hot."
                    },
                    {
                        text: "Ionosphere is part of which layer?",
                        options: [
                            "Troposphere",
                            "Stratosphere",
                            "Mesosphere",
                            "Thermosphere"
                        ],
                        answer: 3,
                        explanation: "The ionosphere lies within the thermosphere where solar radiation ionizes gases; it’s not part of the lower layers."
                    },
                    {
                        text: "Continental slope has a gradient of:",
                        options: [
                            "0-1 degree",
                            "1-2 degree",
                            "2-5 degree",
                            "5-10 degree"
                        ],
                        answer: 2,
                        explanation: "Continental slopes have a gradient of 2-5°; lower values correspond to shelves, higher values are too steep for typical slopes."
                    },
                    {
                        text: "“Low islands consisting of coral reefs surrounding a central depression” is a description of:",
                        options: [
                            "Oceanic deep / trench",
                            "Mid-oceanic ridge",
                            "Seamount",
                            "Atoll"
                        ],
                        answer: 3,
                        explanation: "Atolls are ring-shaped coral islands around a lagoon; trenches, ridges, and seamounts are underwater features, not coral islands."
                    },
                    {
                        text: "“Deep valleys, often cutting across continental shelves and slopes” is a description of:",
                        options: [
                            "Oceanic deep / trench",
                            "Mid-oceanic ridge",
                            "Guyot",
                            "Submarine canyon"
                        ],
                        answer: 3,
                        explanation: "Submarine canyons are deep valleys across shelves/slopes; trenches are deeper, ridges are elevated, and guyots are flat-topped seamounts."
                    },
                    {
                        text: "Equal density curves are called:",
                        options: [
                            "Isopycnal curves",
                            "Isohaline curves",
                            "Isotherm curves",
                            "Isobuoyant curves"
                        ],
                        answer: 0,
                        explanation: "Isopycnal curves connect points of equal density; isohaline is for salinity, isotherm for temperature, isobuoyant is incorrect."
                    },
                    {
                        text: "Equal salinity curves are called:",
                        options: [
                            "Isopycnal curves",
                            "Isohaline curves",
                            "Isotherm curves",
                            "Isobuoyant curves"
                        ],
                        answer: 1,
                        explanation: "Isohaline curves represent equal salinity; isopycnal is for density, isotherm for temperature, isobuoyant is not standard terminology."
                    },
                    {
                        text: "Which of these is a major feature of the ocean floor?",
                        options: [
                            "Oceanic deep / trench",
                            "Mid-oceanic ridge",
                            "Seamount",
                            "Atoll"
                        ],
                        answer: 0,
                        explanation: "Oceanic trenches are major deep features of the ocean floor; ridges are also major but only one correct answer is asked; seamounts and atolls are minor."
                    },
                    {
                        text: "Equal temperature curves are called:",
                        options: [
                            "Isopycnal curves",
                            "Isohaline curves",
                            "Isotherm curves",
                            "Isobuoyant curves"
                        ],
                        answer: 2,
                        explanation: "Isotherms connect points of equal temperature; isopycnal is density, isohaline is salinity, isobuoyant is incorrect."
                    },
                    {
                        text: "Which of these is not a primary force initiating and governing movement of ocean currents?",
                        options: [
                            "Phase separation",
                            "Gravity",
                            "Coriolis force",
                            "Arrangement of coasts"
                        ],
                        answer: 3,
                        explanation: "Arrangement of coasts does not initiate ocean currents; phase separation, gravity, and Coriolis force drive primary movements."
                    },
                    {
                        text: "“Relatively steep-sided, narrow, deep basins” is a description of:",
                        options: [
                            "Oceanic deep / trench",
                            "Mid-oceanic ridge",
                            "Seamount",
                            "Atoll"
                        ],
                        answer: 0,
                        explanation: "Oceanic trenches are steep, narrow, and deep; ridges are elevated, seamounts are submerged mountains, atolls are coral islands."
                    },
                    {
                        text: "Which of these is a minor feature of the ocean floor?",
                        options: [
                            "Continental shelf",
                            "Continental slope",
                            "Guyot",
                            "Abyssal plain"
                        ],
                        answer: 2,
                        explanation: "Guyots are minor, isolated underwater features; shelves, slopes, and abyssal plains are major ocean floor structures."
                    },
                    {
                        text: "In Koeppen classification, which is cold arid temperature?",
                        options: [
                            "h",
                            "k",
                            "a",
                            "b"
                        ],
                        answer: 1,
                        explanation: "‘k’ represents cold arid climates; 'h' is hot arid, 'a' is hot summer, and 'b' is warm summer."
                    },
                    {
                        text: "Which of these are broad groups of the peninsular plateau of India?",
                        options: [
                            "The Deccan plateau",
                            "The Central Highlands",
                            "The North-Eastern plateau",
                            "All of these"
                        ],
                        answer: 3,
                        explanation: "All three—Deccan, Central Highlands, and North-Eastern plateau—are broad groups of the peninsular plateau; none is excluded."
                    },
                    {
                        text: "In Koeppen classification, which is steppe precipitation?",
                        options: [
                            "W",
                            "S",
                            "f",
                            "s"
                        ],
                        answer: 1,
                        explanation: "'S' denotes steppe (semi-arid) precipitation; W is desert, f is fully humid, s is summer dry."
                    },
                    {
                        text: "In Koeppen classification, which is warm summer temperature?",
                        options: [
                            "h",
                            "k",
                            "a",
                            "b"
                        ],
                        answer: 3,
                        explanation: "'b' represents warm summer; a is hot summer, h is hot arid, k is cold arid."
                    },
                    {
                        text: "In Koeppen classification, which is hot summer temperature?",
                        options: [
                            "h",
                            "k",
                            "a",
                            "b"
                        ],
                        answer: 2,
                        explanation: "'a' denotes hot summer; b is warm summer, h is hot arid, k is cold arid."
                    },
                    {
                        text: "In Koeppen classification, which is cool summer temperature?",
                        options: [
                            "c",
                            "d",
                            "f",
                            "T"
                        ],
                        answer: 0,
                        explanation: "'c' represents cool summer; d is cold snow, f is fully humid, T is tundra."
                    },
                    {
                        text: "In Koeppen classification, which is summer dry precipitation?",
                        options: [
                            "W",
                            "S",
                            "f",
                            "s"
                        ],
                        answer: 3,
                        explanation: "'s' indicates summer dry; W is desert, S is steppe, f is fully humid."
                    },
                    {
                        text: "In Koeppen classification, which is monsoonal precipitation?",
                        options: [
                            "W",
                            "S",
                            "m",
                            "s"
                        ],
                        answer: 2,
                        explanation: "'m' represents monsoonal precipitation; W is desert, S is steppe, s is summer dry."
                    },
                    {
                        text: "In Koeppen classification, which is polar tundra temperature?",
                        options: [
                            "c",
                            "d",
                            "f",
                            "T"
                        ],
                        answer: 3,
                        explanation: "'T' denotes polar tundra; c is cool summer, d is cold snow, f is fully humid."
                    },
                    {
                        text: "In Koeppen classification, which is polar climate?",
                        options: [
                            "A",
                            "E",
                            "C",
                            "B"
                        ],
                        answer: 1,
                        explanation: "'E' represents polar climates; A is tropical, C is temperate, B is arid."
                    },
                    {
                        text: "\"The diversity that exists among different geographies\" is:",
                        options: [
                            "Alpha (α) biodiversity",
                            "Beta (β) biodiversity",
                            "Gamma (γ) biodiversity",
                            "Delta (δ) biodiversity"
                        ],
                        answer: 2,
                        explanation: "Gamma (γ) biodiversity refers to diversity across different ecosystems or regions; alpha is within a single ecosystem, beta measures turnover between ecosystems."
                    },
                    {
                        text: "Thermal stresses lead to:",
                        options: [
                            "Chemical weathering",
                            "Physical weathering",
                            "Biological weathering",
                            "None of the above"
                        ],
                        answer: 1,
                        explanation: "Thermal stresses cause physical weathering due to expansion and contraction; chemical and biological weathering are caused by chemical reactions and organisms respectively."
                    },
                    {
                        text: "Vertical arrangement of soil horizons is called:",
                        options: [
                            "Soil texture",
                            "Soil structure",
                            "Soil profile",
                            "Soil science"
                        ],
                        answer: 2,
                        explanation: "Soil profile describes the vertical layers (horizons) in soil; texture is particle size, structure is arrangement, science is the study."
                    },
                    {
                        text: "A climax caused by wildfires is an example of:",
                        options: [
                            "Climatic climax",
                            "Edaphic climax",
                            "Disclimax",
                            "Catastrophic climax"
                        ],
                        answer: 3,
                        explanation: "Catastrophic climax occurs due to sudden events like wildfires; climatic is climate-driven, edaphic is soil-driven, disclimax is human-caused suppression."
                    },
                    {
                        text: "Khadar is a type of:",
                        options: [
                            "Black cotton soil",
                            "Alluvial soil",
                            "Saline soil",
                            "Red and yellow soil"
                        ],
                        answer: 1,
                        explanation: "Khadar refers to newer, fertile alluvial soil deposited by rivers; black cotton, saline, and red/yellow soils are different types."
                    },
                    {
                        text: "The term \"laterite soil\" is derived from Latin \"later,\" which means:",
                        options: [
                            "Red",
                            "Brick",
                            "Fertile",
                            "Infertile"
                        ],
                        answer: 1,
                        explanation: "Laterite comes from 'later' meaning brick, due to its hard, brick-like consistency when dried; color or fertility is secondary."
                    },
                    {
                        text: "Which of these has the highest organic matter content?",
                        options: [
                            "Peaty soil",
                            "Alluvial soil",
                            "Saline soil",
                            "Red and yellow soil"
                        ],
                        answer: 0,
                        explanation: "Peaty soil is rich in organic matter from decayed plant material; others have much lower organic content."
                    },
                    {
                        text: "\"Groups of actually or potentially interbreeding natural populations, which are reproductively isolated from other such groups\" is a definition of:",
                        options: [
                            "Cells",
                            "Species",
                            "Ecosystems",
                            "Biomes"
                        ],
                        answer: 1,
                        explanation: "This is the biological definition of species; cells are structural units, ecosystems are communities, biomes are larger ecological regions."
                    },
                    {
                        text: "Which of these is not a characteristic of pioneer species?",
                        options: [
                            "Ability to grow on bare rocks",
                            "Ability to tolerate extreme temperatures",
                            "Large size",
                            "Short life span"
                        ],
                        answer: 2,
                        explanation: "Pioneer species are small, fast-growing, and tolerant; large size is not a characteristic."
                    },
                    {
                        text: "Which of these depicts correctly the lithosere primary succession?",
                        options: [
                            "Rock → Crustose lichen → Foliose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax",
                            "Rock → Foliose lichen → Crustose lichen → Moss → Herbaceous stage → Shrub → Woodland → Climax",
                            "Moss → Crustose lichen → Foliose lichen → Rock → Herbaceous stage → Shrub → Woodland → Climax",
                            "Rock → Crustose lichen → Foliose lichen → Shrub → Herbaceous stage → Moss → Woodland → Climax"
                        ],
                        answer: 0,
                        explanation: "Lithosere succession starts on bare rock with crustose lichen → foliose lichen → moss → herbaceous → shrub → woodland → climax; other sequences are incorrect."
                    },
                    {
                        text: "Soil formation is an example of:",
                        options: [
                            "Provisioning service",
                            "Regulating service",
                            "Supporting service",
                            "Cultural service"
                        ],
                        answer: 2,
                        explanation: "Soil formation supports ecosystem processes, classifying it as a supporting service; provisioning provides products, regulating maintains balance, cultural provides spiritual or recreational benefits."
                    },
                    {
                        text: "The acronym HIPPO does not include:",
                        options: [
                            "Habitat loss",
                            "Habitat enhancement",
                            "Invasive species",
                            "Human over-population"
                        ],
                        answer: 1,
                        explanation: "HIPPO stands for Habitat loss, Invasive species, Pollution, Population growth, Overexploitation; 'Habitat enhancement' is not included."
                    },
                    {
                        text: "The elephant has a home range of several square kilometres, regulates the ecosystem by its habit of destructive feeding, and people can relate to this animal which is important for conservation. Given this background, the elephant can be called as:",
                        options: [
                            "Umbrella species",
                            "Keystone species",
                            "Flagship species",
                            "All of the above"
                        ],
                        answer: 3,
                        explanation: "Elephants fit all three categories: umbrella (large range), keystone (ecological impact), and flagship (public appeal); hence 'All of the above' is correct."
                    },
                    {
                        text: "Religious benefits are an example of:",
                        options: [
                            "Provisioning service",
                            "Regulating service",
                            "Supporting service",
                            "Cultural service"
                        ],
                        answer: 3,
                        explanation: "Cultural services include spiritual, recreational, and religious benefits; provisioning gives tangible products, regulating maintains ecosystem balance, supporting underpins other services."
                    },
                    {
                        text: "Which of these is a deterministic factor?",
                        options: [
                            "Environmental variation",
                            "Forest fire",
                            "Death rate",
                            "Diseases"
                        ],
                        answer: 2,
                        explanation: "Death rate is deterministic as it can be precisely measured and predicted; environmental variation, fire, and diseases are stochastic or random factors."
                    },
                    {
                        text: "Biological control of pest populations is an example of:",
                        options: [
                            "Provisioning service",
                            "Regulating service",
                            "Supporting service",
                            "Cultural service"
                        ],
                        answer: 1,
                        explanation: "Regulating services maintain ecosystem balance by controlling pests; provisioning provides products, supporting maintains ecosystem processes, cultural gives spiritual or recreational benefits."
                    },
                    {
                        text: "According to Leopold, which of these is not a tool of habitat management?",
                        options: [
                            "Fire",
                            "Gun",
                            "Cattle",
                            "Sickle"
                        ],
                        answer: 3,
                        explanation: "Leopold listed fire, gun, and cattle as habitat management tools; a sickle is not used in ecological management."
                    },
                    {
                        text: "People come to Sessa orchid sanctuary in Arunachal Pradesh to witness orchids, which in this context would be classified as:",
                        options: [
                            "Umbrella species",
                            "Keystone species",
                            "Flagship species",
                            "Extinct species"
                        ],
                        answer: 2,
                        explanation: "Orchids are flagship species attracting public attention for conservation; umbrella covers habitat, keystone impacts ecosystem, extinct no longer exists."
                    },
                    {
                        text: "Captive breeding is an example of:",
                        options: [
                            "In-situ conservation",
                            "Ex-situ conservation",
                            "In-situ preservation",
                            "Ex-situ preservation"
                        ],
                        answer: 1,
                        explanation: "Captive breeding occurs outside natural habitats, making it ex-situ conservation; in-situ occurs within natural habitats."
                    },
                    {
                        text: "The \"subset of physical and biotic environmental factors that permit an animal (or plant) to survive and reproduce\" is the definition of:",
                        options: [
                            "Habitat",
                            "Ecosystem",
                            "Biome",
                            "Biosphere"
                        ],
                        answer: 0,
                        explanation: "Habitat is the environment supporting survival and reproduction; ecosystem includes interactions, biome is a large ecological zone, biosphere is the global sum of ecosystems."
                    },
                    {
                        text: "Which of these is a pillar of sustainability?",
                        options: [
                            "social sustainability",
                            "industrial sustainability",
                            "agricultural sustainability",
                            "trans-boundary sustainability"
                        ],
                        answer: 0,
                        explanation: "Social sustainability ensures the well-being of people and communities; industrial and agricultural are sectors, trans-boundary is not a recognized sustainability pillar."
                    },
                    {
                        text: "Which of these is commonly observed in primitive societies?",
                        options: [
                            "environmental determinism",
                            "possibilism",
                            "neodeterminism",
                            "stop and go determinism"
                        ],
                        answer: 0,
                        explanation: "Environmental determinism is common in primitive societies as nature strongly dictates human activity; possibilism and neodeterminism occur in advanced societies."
                    },
                    {
                        text: "Which of these is a preventive check according to Malthus?",
                        options: [
                            "foresight",
                            "vice",
                            "misery",
                            "flood"
                        ],
                        answer: 0,
                        explanation: "Foresight is a preventive check to control population growth; vice and misery are positive checks, floods are natural disasters."
                    },
                    {
                        text: "Which of these is a positive check according to Malthus?",
                        options: [
                            "late marriage",
                            "war",
                            "celibacy",
                            "moral restraint"
                        ],
                        answer: 1,
                        explanation: "War is a positive check that increases mortality; late marriage and moral restraint are preventive checks, celibacy reduces birth rates."
                    },
                    {
                        text: "Which of these is commonly observed during humanising of nature?",
                        options: [
                            "environmental determinism",
                            "possibilism",
                            "neodeterminism",
                            "stop and go determinism"
                        ],
                        answer: 1,
                        explanation: "Possibilism is observed as humans adapt and modify nature; environmental determinism emphasizes nature's control."
                    },
                    {
                        text: "The logistic growth equation curve is:",
                        options: [
                            "I-shaped",
                            "J-shaped",
                            "S-shaped",
                            "U-shaped"
                        ],
                        answer: 2,
                        explanation: "S-shaped (sigmoid) curve represents logistic growth with a carrying capacity; I is linear, J is exponential without limits."
                    },
                    {
                        text: "Which of these is not a pillar of sustainability?",
                        options: [
                            "environmental sustainability",
                            "economic sustainability",
                            "trans-boundary sustainability",
                            "social sustainability"
                        ],
                        answer: 2,
                        explanation: "Trans-boundary sustainability is not recognized as a sustainability pillar; environmental, economic, and social are standard pillars."
                    },
                    {
                        text: "The book \"An Essay on the Principle of Population\" was written by:",
                        options: [
                            "Darwin",
                            "Malthus",
                            "Spencer",
                            "Owens"
                        ],
                        answer: 1,
                        explanation: "Thomas Malthus wrote this book discussing population growth and resource limits; Darwin focused on evolution."
                    },
                    {
                        text: "According to Malthusian model:",
                        options: [
                            "Population grows in geometric progression, food supply increases in arithmetic progression",
                            "Population grows in geometric progression, food supply increases in geometric progression",
                            "Population grows in arithmetic progression, food supply increases in arithmetic progression",
                            "Population grows in arithmetic progression, food supply increases in geometric progression"
                        ],
                        answer: 0,
                        explanation: "Malthus proposed population grows exponentially (geometric) while food grows linearly (arithmetic), causing potential scarcity."
                    },
                    {
                        text: "The demographic transition sees a society move from:",
                        options: [
                            "high birth rate, low death rate to low birth rate, high death rate",
                            "low birth rate, high death rate to low birth rate, low death rate",
                            "high birth rate, high death rate to low birth rate, low death rate",
                            "high birth rate, high death rate to low birth rate, high death rate"
                        ],
                        answer: 2,
                        explanation: "Demographic transition involves moving from high birth and death rates to low birth and death rates as a society develops."
                    },
                    {
                        text: "Which of these is the largest source of sulphur oxides in the atmosphere?",
                        options: [
                            "Electricity generation",
                            "Mobile sources",
                            "Industrial processes",
                            "Residential fuel"
                        ],
                        answer: 0,
                        explanation: "Electricity generation, especially from coal-fired power plants, emits the most sulphur oxides; mobile sources, industrial processes, and residential fuels contribute less."
                    },
                    {
                        text: "“Those resources that are currently being used after surveying, quantification, and qualification” is a definition of:",
                        options: [
                            "Potential resources",
                            "Actual resources",
                            "Reserve resources",
                            "Stock resources"
                        ],
                        answer: 1,
                        explanation: "Actual resources are those being currently used and quantified; potential are unused, reserve are economically extractable, stock are known but unutilized."
                    },
                    {
                        text: "Rain gardens are primarily meant to:",
                        options: [
                            "Reduce water usage",
                            "Increase recharge to groundwater",
                            "Protect existing water sources",
                            "Increase water flow to streams"
                        ],
                        answer: 1,
                        explanation: "Rain gardens help recharge groundwater by collecting runoff; they do not primarily reduce usage, protect sources, or increase stream flow."
                    },
                    {
                        text: "Oil that has not been drilled can be categorised under:",
                        options: [
                            "Potential resources",
                            "Actual resources",
                            "Reserve resources",
                            "Stock resources"
                        ],
                        answer: 0,
                        explanation: "Undrilled oil is a potential resource; actual is being used, reserve is economically extractable, stock is known but unused."
                    },
                    {
                        text: "Timber from forests that is being harvested can be categorised under:",
                        options: [
                            "Potential resources",
                            "Actual resources",
                            "Reserve resources",
                            "Stock resources"
                        ],
                        answer: 1,
                        explanation: "Harvested timber is an actual resource; potential is unused, reserve is economically extractable, stock is known but unutilized."
                    },
                    {
                        text: "Which of these is the largest source of ammonia (NH3) in the atmosphere?",
                        options: [
                            "Animal manure",
                            "Mineral fertiliser",
                            "Crops and their decomposition",
                            "Human waste"
                        ],
                        answer: 0,
                        explanation: "Animal manure releases the most ammonia due to microbial breakdown; other sources contribute less."
                    },
                    {
                        text: "“Those resources that have been surveyed but we lack the technology to use them” is a definition of:",
                        options: [
                            "Potential resources",
                            "Actual resources",
                            "Reserve resources",
                            "Stock resources"
                        ],
                        answer: 3,
                        explanation: "Stock resources are known but currently unusable due to technological limitations; potential are unidentified or unquantified, reserve is economically extractable, actual is in use."
                    },
                    {
                        text: "Hydrogen for nuclear fusion comes under the category of:",
                        options: [
                            "Potential resources",
                            "Actual resources",
                            "Reserve resources",
                            "Stock resources"
                        ],
                        answer: 3,
                        explanation: "Hydrogen for fusion is a stock resource: known but not yet usable on a large scale; potential are unidentified, reserve is economically extractable, actual is in use."
                    },
                    {
                        text: "“Those resources that may be used in the future” is a definition of:",
                        options: [
                            "Potential resources",
                            "Actual resources",
                            "Reserve resources",
                            "Stock resources"
                        ],
                        answer: 0,
                        explanation: "Potential resources are not currently used but may be utilized in the future; actual are in use, reserve is economically extractable, stock is known but unusable."
                    },
                    {
                        text: "“The part of actual resources that can be developed profitably in the future” is a definition of:",
                        options: [
                            "Potential resources",
                            "Actual resources",
                            "Reserve resources",
                            "Stock resources"
                        ],
                        answer: 2,
                        explanation: "Reserve resources are the economically extractable portion of actual resources; potential are unused, actual are currently in use, stock is known but unusable."
                    },
                    {
                        text: "Oxford can best be categorised as:",
                        options: [
                            "Mining town",
                            "Garrison town",
                            "Educational town",
                            "Religious town"
                        ],
                        answer: 2,
                        explanation: "Oxford is famous for its universities and educational institutions, making it an educational town; it is not primarily mining, garrison, or religious."
                    },
                    {
                        text: "New Delhi can best be categorised as:",
                        options: [
                            "Administrative town",
                            "Industrial town",
                            "Transport town",
                            "Commercial town"
                        ],
                        answer: 0,
                        explanation: "New Delhi is the capital of India and primarily an administrative hub; it is not mainly industrial, transport, or commercial."
                    },
                    {
                        text: "Visakhapatnam can best be categorised as:",
                        options: [
                            "Administrative town",
                            "Industrial town",
                            "Transport town",
                            "Commercial town"
                        ],
                        answer: 2,
                        explanation: "Visakhapatnam is a major port city and transport hub; it is not primarily administrative, industrial, or commercial."
                    },
                    {
                        text: "Varanasi can best be categorised as:",
                        options: [
                            "Mining town",
                            "Garrison town",
                            "Educational town",
                            "Religious town"
                        ],
                        answer: 3,
                        explanation: "Varanasi is a major pilgrimage and religious centre; it is not primarily mining, garrison, or educational."
                    },
                    {
                        text: "Which of these is a factor governing the barrier effect of roads?",
                        options: [
                            "Traffic intensity",
                            "Speed of vehicles",
                            "Driver sensitivity",
                            "All of these"
                        ],
                        answer: 3,
                        explanation: "All factors—traffic intensity, vehicle speed, and driver sensitivity—affect the barrier effect of roads; each alone is insufficient."
                    },
                    {
                        text: "“The ability to produce a good using fewer inputs than another producer” is:",
                        options: [
                            "Comparative advantage",
                            "Absolute advantage",
                            "Production advantage",
                            "Resource advantage"
                        ],
                        answer: 1,
                        explanation: "Absolute advantage refers to producing more efficiently with fewer inputs; comparative advantage is relative efficiency between two goods."
                    },
                    {
                        text: "Which of these is / are example(s) of mitigation measures to mitigate impacts of linear infrastructure on wildlife?",
                        options: [
                            "Bridge underpasses",
                            "Box culverts",
                            "Pipe culverts",
                            "All of these"
                        ],
                        answer: 3,
                        explanation: "All listed options help wildlife cross roads safely; using any alone does not fully mitigate impact."
                    },
                    {
                        text: "Bhilai can best be categorised as:",
                        options: [
                            "Administrative town",
                            "Industrial town",
                            "Transport town",
                            "Commercial town"
                        ],
                        answer: 1,
                        explanation: "Bhilai is known for its steel plant and industrial activities; it is not primarily administrative, transport, or commercial."
                    },
                    {
                        text: "Singrauli can best be categorised as:",
                        options: [
                            "Mining town",
                            "Garrison town",
                            "Educational town",
                            "Religious town"
                        ],
                        answer: 0,
                        explanation: "Singrauli is known for coal mining and energy production, making it a mining town; it is not garrison, educational, or religious."
                    },
                    {
                        text: "“The price of a good that prevails in the world market for that good” is the definition of:",
                        options: [
                            "Export price",
                            "Import price",
                            "World price",
                            "Domestic price"
                        ],
                        answer: 2,
                        explanation: "World price is the global market price of a good; export and import prices may differ due to tariffs, and domestic price is local."
                    },
                    {
                        text: "“The conditions determined by physical, social, economic, and environmental factors or processes which increase the susceptibility of an individual, a community, assets, or systems to the impacts of hazards.” is a definition for:",
                        options: [
                            "Hazard",
                            "Exposure",
                            "Vulnerability",
                            "Disaster"
                        ],
                        answer: 2,
                        explanation: "Vulnerability describes susceptibility to harm due to various factors; hazard is the potential threat, exposure is presence in hazard zones, disaster is the outcome."
                    },
                    {
                        text: "“The combination of all the strengths, attributes and resources available within an organisation, community or society to manage and reduce disaster risks and strengthen resilience.” is a definition for:",
                        options: [
                            "Contingency",
                            "Disaster management",
                            "Vulnerability",
                            "Capacity"
                        ],
                        answer: 3,
                        explanation: "Capacity refers to the available resources and strengths to manage risks; disaster management is the process, contingency is planning, vulnerability is susceptibility."
                    },
                    {
                        text: "The value derived from the knowledge of use of resources by others in the current generation is called:",
                        options: [
                            "Altruistic value",
                            "Bequest value",
                            "Existence value",
                            "Option value"
                        ],
                        answer: 0,
                        explanation: "Altruistic value measures benefits from current use by others; bequest is for future generations, existence is intrinsic, option is potential future use."
                    },
                    {
                        text: "IMU stands for:",
                        options: [
                            "Imperial metering unit",
                            "Inertial metering unit",
                            "Imperial measurement unit",
                            "Inertial measurement unit"
                        ],
                        answer: 3,
                        explanation: "IMU is Inertial Measurement Unit, used in navigation; others are incorrect expansions of the acronym."
                    },
                    {
                        text: "The frequency of flyovers is an indicator of:",
                        options: [
                            "Spatial resolution",
                            "Temporal resolution",
                            "Spectral resolution",
                            "Radiometric resolution"
                        ],
                        answer: 1,
                        explanation: "Temporal resolution refers to how often data is collected (flyovers); spatial is detail per area, spectral is wavelength bands, radiometric is intensity sensitivity."
                    },
                    {
                        text: "“The situation of people, infrastructure, housing, production capacities, and other tangible human assets located in hazard-prone areas.” is a definition for:",
                        options: [
                            "Hazard",
                            "Exposure",
                            "Vulnerability",
                            "Disaster"
                        ],
                        answer: 1,
                        explanation: "Exposure is the presence of people and assets in hazard zones; hazard is the threat, vulnerability is susceptibility, disaster is the realized impact."
                    },
                    {
                        text: "“A process, phenomenon, or human activity that may cause loss of life, injury or other health impacts, property damage, social and economic disruption or environmental degradation.” is a definition for:",
                        options: [
                            "Hazard",
                            "Exposure",
                            "Vulnerability",
                            "Disaster"
                        ],
                        answer: 0,
                        explanation: "Hazard is a potential threat causing damage; exposure is being in its path, vulnerability is susceptibility, disaster is the actual event."
                    },
                    {
                        text: "Which of these uses imputed willingness to pay?",
                        options: [
                            "Market price method",
                            "Replacement cost method",
                            "Travel cost method",
                            "Contingent valuation method"
                        ],
                        answer: 1,
                        explanation: "Replacement cost method estimates value based on costs to replace; market price uses actual prices, travel cost uses visits, contingent valuation uses surveys."
                    },
                    {
                        text: "The time of flight for LiDAR is 0.00001 sec. Find the distance of the object from the instrument:",
                        options: [
                            "500 m",
                            "1000 m",
                            "1500 m",
                            "2000 m"
                        ],
                        answer: 2,
                        explanation: "Distance = (speed of light × time)/2 = (3×10^8 × 0.00001)/2 = 1500 m; other options are incorrect calculations."
                    },
                    {
                        text: "“A serious disruption of the functioning of a community or a society at any scale due to hazardous events interacting with conditions of exposure, vulnerability, and capacity, leading to one or more of the following: human, material, economic, and environmental losses and impacts.” is a definition for:",
                        options: [
                            "Hazard",
                            "Exposure",
                            "Vulnerability",
                            "Disaster"
                        ],
                        answer: 3,
                        explanation: "Disaster is the realized impact of hazards on vulnerable and exposed populations; hazard is the threat, exposure is presence, vulnerability is susceptibility."
                    },                  

];



let shuffledQuestions = []; // Holds 50 questions for the attempt
let userResponses = []; // -1 (not visited), null (not answered), index (chosen)
let userStatus = []; // "not-visited", "not-answered", "answered", "review"
let currentIdx = 0;
let practiceTimer = null, secondsLeft = 3600;

// --- Shuffle function
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// --- INITIALIZE PRACTICE MODE ---
function startPractice() {
  const arr = PRACTICE_QUESTIONS.slice();
  shuffleArray(arr);

  shuffledQuestions = arr.slice(0, 50).map(q => {
    const optIdx = q.options.map((_, idx) => idx);
    shuffleArray(optIdx);
    const newOpts = optIdx.map(idx => q.options[idx]);
    return {
      text: q.text,
      options: newOpts,
      answer: optIdx.indexOf(q.answer),
      explanation: q.explanation
    };
  });

  userResponses = Array(50).fill(null);
  userStatus = Array(50).fill("not-visited");
  currentIdx = 0;
  secondsLeft = 3600;
  renderPractice();
  startTimer();
}

function startTimer() {
  updateTimer();
  if (practiceTimer) clearInterval(practiceTimer);
  practiceTimer = setInterval(() => {
    secondsLeft--;
    updateTimer();
    if (secondsLeft <= 0) {
      clearInterval(practiceTimer);
      submitPractice();
    }
  }, 1000);
}

function updateTimer() {
  const h = Math.floor(secondsLeft / 3600);
  const m = Math.floor((secondsLeft % 3600) / 60);
  const s = secondsLeft % 60;
  document.getElementById('timer').textContent = 
    `${h < 10 ? '0' : ''}${h}:${m < 10 ? '0' : ''}${m}:${s < 10 ? '0' : ''}${s}`;
}

// --- RENDER PRACTICE INTERFACE ---
function renderPractice() {
  renderQuestion(currentIdx);
  renderNav();
  renderGrid();
}
function renderQuestion(qi) {
  const q = shuffledQuestions[qi];
  let html = `<div style="font-weight:700;">Question ${qi + 1}:</div><div style="margin:12px 0 18px 0;">${q.text}</div><div class="options">`;
  q.options.forEach((opt, oi) => {
    html += `
    <label>
      <input type="radio" name="practice_option" value="${oi}" ${userResponses[qi] === oi ? "checked" : ""}>
      ${String.fromCharCode(97+oi)}) ${opt}
    </label>`;
  });
  html += "</div>";
  document.getElementById('question-block').innerHTML = html;

  // prevent scrolling for mobile on submit
  document.querySelectorAll("input[name='practice_option']").forEach(input => {
    input.onchange = () => {
      userResponses[qi] = parseInt(input.value);
      userStatus[qi] = "answered";
      renderNav(); renderGrid();
    };
  });
}
function renderNav() {
  let navHTML = `
    <button onclick="backQuestion()">&#60; BACK</button>
    <button onclick="nextQuestion()">NEXT &#62;</button>
    <button onclick="saveAndNext()">SAVE & NEXT</button>
    <button onclick="markForReview()">MARK FOR REVIEW</button>
    <button onclick="clearResponse()">CLEAR RESPONSE</button>
  `;
  document.getElementById('practice-nav').innerHTML = navHTML;
}
function renderGrid() {
  let gridHTML = "";
  for (let i = 0; i < shuffledQuestions.length; i++) {
    let status = userStatus[i];
    let btnClass = "grid-btn";
    if(currentIdx === i) btnClass += " active";
    if (status === "not-visited") btnClass += " not-visited";
    else if (status === "not-answered") btnClass += " not-answered";
    else if (status === "answered") btnClass += " answered";
    else if (status === "review") btnClass += " review";
    gridHTML += `<button class="${btnClass}" onclick="jumpToQuestion(${i})">${i+1}</button>`;
  }
  document.getElementById('question-grid').innerHTML = gridHTML;
}

window.backQuestion = function() {
  if (currentIdx > 0) {
    currentIdx--;
    userStatus[currentIdx] = userResponses[currentIdx] === null ? "not-answered" : "answered";
    renderPractice();
  }
};
window.nextQuestion = function() {
  if (currentIdx < shuffledQuestions.length - 1) {
    currentIdx++;
    userStatus[currentIdx] = userResponses[currentIdx] === null ? "not-answered" : "answered";
    renderPractice();
  }
};
window.saveAndNext = function() {
  userStatus[currentIdx] = userResponses[currentIdx] !== null ? "answered" : "not-answered";
  nextQuestion();
};
window.markForReview = function() {
  userStatus[currentIdx] = "review";
  nextQuestion();
};
window.clearResponse = function() {
  userResponses[currentIdx] = null;
  userStatus[currentIdx] = "not-answered";
  renderPractice();
};
window.jumpToQuestion = function(qi) {
  currentIdx = qi; 
  userStatus[currentIdx] = userResponses[currentIdx] === null ? "not-answered" : "answered";
  renderPractice();
};

// --- SUBMIT/PRACTICE SCORING ---
document.getElementById("submit-practice").onclick = function() {
  if (confirm("Submit practice test? You can't change answers after this!")) {
    clearInterval(practiceTimer);
    submitPractice();
  }
};
function submitPractice() {
  let score = 0;
  let html = `<div class="score">Practice Results for <strong>albert</strong>:</div>`;
  shuffledQuestions.forEach((q, qi) => {
    const correct = userResponses[qi] === q.answer;
    if (correct) score++;
    html += `<div>
      <b>Q${qi + 1}:</b> ${q.text}<br>
      <span class="${correct ? 'correct' : 'incorrect'}">${correct ? 'Correct' : 'Incorrect'}</span><br>
      <b>Your answer:</b> ${userResponses[qi] !== null ? String.fromCharCode(97 + userResponses[qi]) + ") " + q.options[userResponses[qi]] : 'No answer'}<br>
      <b>Correct answer:</b> ${String.fromCharCode(97 + q.answer)}) ${q.options[q.answer]}<br>
      <div class="explanation">${q.explanation}</div>
    </div><hr>`;
  });
  html = `<div class="score">Your Score: <strong>${score} / ${shuffledQuestions.length}</strong></div>` + html;
  document.getElementById('practice-result').innerHTML = html;
  document.getElementById('question-block').innerHTML = '';
  document.getElementById('practice-nav').innerHTML = '';
  document.getElementById('question-grid').innerHTML = '';
  document.getElementById('submit-practice').disabled = true;
}

// --- Start practice on page load ---
window.onload = startPractice;
