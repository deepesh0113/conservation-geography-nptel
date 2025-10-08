// Assignment data structure
const assignments = [
    {
        name: "Assignment 1",
        questions: [
            {
                text: "Science of relationships between organisms and their environments",
                options: [
                    "Conservation",
                    "Preservation",
                    "Environmentalism",
                    "Ecology"
                ],
                answer: 3,
                explanation: "Ecology studies interactions between organisms and their environment. Conservation focuses on resource protection, not relationships. Preservation means keeping nature untouched, not studying it. Environmentalism is a social movement, not a scientific discipline."
            },
            {
                text: "The Trinity explosion of 1945 marks the beginning of",
                options: [
                    "Holocene",
                    "Cenocene",
                    "Anthropocene",
                    "Eocene"
                ],
                answer: 2,
                explanation: "Anthropocene is the age of significant human impact on Earth's systems. Holocene began ~11,700 years ago after the Ice Age. Cenocene is not a recognized geological epoch. Eocene occurred around 56 million years ago, long before humans."
            },
            {
                text: "Sustainable harvest of resources falls under",
                options: [
                    "Conservation",
                    "Preservation",
                    "Environmentalism",
                    "None of the above"
                ],
                answer: 0,
                explanation: "Conservation ensures resource use without depleting them. Preservation prohibits use of natural resources entirely. Environmentalism is advocacy for environmental protection, not resource use. 'None of the above' is incorrect since conservation fits best."
            },
            {
                text: "Quantum of human impacts can be written as",
                options: [
                    "I = P + A + T",
                    "I = P × A + T",
                    "I = P × A × T",
                    "I = P + A × T"
                ],
                answer: 2,
                explanation: "Impact = Population × Affluence × Technology (I = P × A × T). Other options ignore the multiplicative relationship or mix addition and multiplication wrongly."
            },
            {
                text: "Discipline of Demography is most closely related to",
                options: [
                    "Phytogeography",
                    "Zoogeography",
                    "Population Geography",
                    "Economic Geography"
                ],
                answer: 2,
                explanation: "Population Geography and Demography both study population size, structure, and distribution. Phytogeography deals with plant distribution. Zoogeography deals with animal distribution. Economic Geography focuses on production and resources, not population."
            },
            {
                text: "Rate of any biological process is limited by the factor in least amount…",
                options: [
                    "Liebig’s Law of the Minimum",
                    "Law of the Maximum",
                    "Shelford’s Law of Tolerance",
                    "Shelford’s Law of Intolerance"
                ],
                answer: 0,
                explanation: "Liebig’s Law of the Minimum: growth depends on the scarcest resource. Law of the Maximum is not a concept; Shelford’s Law of Tolerance talks about tolerance range, not minimum."
            },
            {
                text: "Distribution of a species controlled by factor with narrowest range of tolerance",
                options: [
                    "Liebig’s Law of Minimum",
                    "Law of Maximum",
                    "Shelford’s Law of Tolerance",
                    "Law of Intolerance"
                ],
                answer: 2,
                explanation: "Shelford’s Law of Tolerance emphasizes environmental limits for species survival. Liebig’s Law deals with limiting nutrients, not range. Law of Maximum is invalid. Law of Intolerance is not a defined ecological law."
            },
            {
                text: "Regional approach to Geography developed by",
                options: [
                    "Alexander von Humboldt",
                    "Karl Ritter",
                    "Rene Descartes",
                    "Eratosthenes"
                ],
                answer: 1,
                explanation: "Karl Ritter pioneered regional geography based on spatial interrelations. Humboldt emphasized physical geography and natural laws. Descartes was a philosopher, not a geographer. Eratosthenes coined 'Geography' but not the regional approach."
            },
            {
                text: "Good climate is a",
                options: [
                    "Chemical factor",
                    "Demographic factor",
                    "Push factor",
                    "Pull factor"
                ],
                answer: 3,
                explanation: "Good climate attracts people to migrate to favorable regions (pull factor). Chemical factor relates to soil/water chemistry, not migration. Demographic factor deals with population data, not migration cause. Push factor forces people to leave, opposite effect."
            },
            {
                text: "Scarcity of food is a",
                options: [
                    "Chemical factor",
                    "Demographic factor",
                    "Push factor",
                    "Pull factor"
                ],
                answer: 2,
                explanation: "Scarcity of food compels people to migrate away from scarcity areas (push factor). Chemical factor is unrelated to migration. Demographic factor describes population traits, not reasons for movement. Pull factor attracts migration, not repels it."
            }
        ]
    },
    {
        name: "Assignment 2",
        questions: [
            {
                text: "In undisturbed sedimentary strata, bottom layers are older than the layers above them.",
                options: [
                    "Principle of Superposition",
                    "Original horizontality",
                    "Lateral continuity",
                    "Inclusions",
                ],
                answer: 0,
                explanation: "Principle of Superposition – in a sequence of undisturbed layers, older rocks lie below younger. Original horizontality: deposition in horizontal layers. Lateral continuity: horizontal extent of layers. Inclusions: fragments within rock."
            },
            {
                text: "Mount Vesuvius is an example of",
                options: [
                    "Shield volcano",
                    "Composite volcano",
                    "Caldera",
                    "Flood basalt province",
                ],
                answer: 1,
                explanation: "Composite volcano – alternating layers of lava and ash; highly explosive. Shield: gentle slope, non-explosive. Caldera: depression after eruption. Flood basalt: widespread lava, not cones."
            },
            {
                text: "Krakatoa eruption resulted in the formation of",
                options: [
                    "Shield volcano",
                    "Stratovolcano",
                    "Caldera",
                    "Flood basalt province",
                ],
                answer: 2,
                explanation: "Caldera – Krakatoa collapsed into depression after massive eruption. Shield: broad slopes. Stratovolcano: Krakatoa's form before eruption. Flood basalt: unrelated."
            },
            {
                text: "Which of these is not a method of absolute dating?",
                options: [
                    "Radioisotope dating",
                    "Thermoluminescence dating",
                    "Inclusion study",
                    "Fission track dating",
                ],
                answer: 2,
                explanation: "Inclusion study determines relative age, not absolute. Radioisotope, thermoluminescence, fission track are absolute dating methods."
            },
            {
                text: "Which of these is true about S waves?",
                options: [
                    "Longitudinal",
                    "They are transverse in nature",
                    "Cannot move through solids, liquids and gases",
                    "First to reach surface",
                ],
                answer: 1,
                explanation: "S waves are transverse; P waves are longitudinal and arrive first. S waves move only through solids."
            },
            {
                text: "Hawaiian volcanoes are an example of",
                options: [
                    "Shield volcano",
                    "Stratovolcano",
                    "Caldera",
                    "Flood basalt province",
                ],
                answer: 0,
                explanation: "Shield volcanoes: broad, gently sloping, basaltic lava. Others don't fit Hawaiian volcanoes."
            },
            {
                text: "Within a depositional basin, strata are laterally continuous till the edge.",
                options: [
                    "Superposition",
                    "Original horizontality",
                    "Principle of Lateral Continuity",
                    "Inclusions",
                ],
                answer: 2,
                explanation: "Principle of Lateral Continuity: sedimentary layers extend horizontally until they thin or hit barrier. Others: different stratigraphic concepts."
            },
            {
                text: "Which of these is a gas giant?",
                options: [
                    "Mercury",
                    "Venus",
                    "Mars",
                    "Saturn",
                ],
                answer: 3,
                explanation: "Saturn: gas giant. Mercury, Venus, Mars: rocky planets."
            },
            {
                text: "Assemblage of fossils unique to their time helps age rocks across regions.",
                options: [
                    "Principle of Fossil Succession",
                    "Original horizontality",
                    "Superposition",
                    "Cross-cutting relationships",
                ],
                answer: 0,
                explanation: "Fossil Succession: fossils in chronological order. Others: sedimentary or structural relationships."
            },
            {
                text: "Which of these is an example of a direct source of information about the Earth?",
                options: [
                    "Earthquake",
                    "Volcanic eruption",
                    "Magnetic survey",
                    "Gravity anomaly",
                ],
                answer: 1,
                explanation: "Volcanic eruption provides direct samples from Earth's interior. Others: indirect methods."
            }
        ]
    },
    {
        name: "Assignment 3",
        questions: [
            {
                text: "The points where three or more cirques meet",
                options: [
                    "Cirque",
                    "Arete",
                    "Horn",
                    "Hanging valley",
                ],
                answer: 2,
                explanation: "Horn – sharp, pyramid-shaped peak formed where several cirques meet. Cirque: bowl-shaped depression. Arete: sharp ridge between two cirques. Hanging valley: smaller valley at higher level."
            },
            {
                text: "Which of these is an example of endogenic process?",
                options: [
                    "Weathering",
                    "Mass movement",
                    "Erosion",
                    "Folding",
                ],
                answer: 3,
                explanation: "Folding – internal Earth forces. Others: surface/external processes."
            },
            {
                text: "Sandstone is an example of",
                options: [
                    "Siliciclastic rock",
                    "Carbonate rock",
                    "Evaporite rock",
                    "Phosphatic rock",
                ],
                answer: 0,
                explanation: "Siliciclastic: silicate minerals cemented together. Carbonate: from calcium carbonate. Evaporite: by evaporation. Phosphatic: phosphate minerals."
            },
            {
                text: "Smooth oval-shaped ridge-like features... parallel to direction of ice movement",
                options: [
                    "Glacial till",
                    "Outwash deposit",
                    "Esker",
                    "Drumlin",
                ],
                answer: 3,
                explanation: "Drumlin: elongated, streamlined glacial landform made of till. Others: different glacial or sedimentary features."
            },
            {
                text: "Which of these is an example of exogenic process?",
                options: [
                    "Volcanism",
                    "Earthquake",
                    "Plate tectonics",
                    "Deposition",
                ],
                answer: 3,
                explanation: "Deposition: external agent deposits sediments. Others are endogenic (internal) processes."
            },
            {
                text: "White or colourless hard mineral virtually insoluble in water",
                options: [
                    "Amphiboles",
                    "Quartz",
                    "Feldspar",
                    "Pyroxene",
                ],
                answer: 1,
                explanation: "Quartz: hard (Mohs 7), water-insoluble. Others are less hard/different composition."
            },
            {
                text: "Dolomite is an example of",
                options: [
                    "Siliciclastic",
                    "Carbonate rock",
                    "Evaporite",
                    "Phosphatic",
                ],
                answer: 1,
                explanation: "Dolomite: carbonate composed of CaMg(CO₃)₂. Others: different rock types."
            },
            {
                text: "Green or black coloured inosilicate minerals forming prism or needle-like crystals",
                options: [
                    "Amphiboles",
                    "Feldspar",
                    "Mica",
                    "Pyroxene",
                ],
                answer: 0,
                explanation: "Amphiboles: dark green/black, prismatic inosilicates. Others: different color/habit."
            },
            {
                text: "Deep, long and wide troughs or basins... steep concave walls",
                options: [
                    "Cirque",
                    "Arete",
                    "Horn",
                    "Hanging valley",
                ],
                answer: 0,
                explanation: "Cirque: amphitheater-like hollow formed by glacial erosion. Others: different glacial features."
            },
            {
                text: "Magnesium iron silicate; primary component of Earth’s upper mantle",
                options: [
                    "Amphiboles",
                    "Feldspar",
                    "Quartz",
                    "Olivine",
                ],
                answer: 3,
                explanation: "Olivine: dominant upper mantle mineral, rich in Mg and Fe. Others are crust minerals or absent in mantle."
            }
        ]
    },
    {
        name: "Assignment 4",
        questions: [
            {
                text: "Which of these air masses is generally cool and moist?",
                options: [
                    "cP",
                    "cT",
                    "mT",
                    "mP"
                ],
                answer: 3,
                explanation: "Maritime Polar (mP) forms over cold ocean waters; hence cool and moist. cP is cold and dry (continental origin). cT is hot and dry (formed over deserts). mT is warm and moist (tropical oceans)."
            },
            {
                text: "Which of these air masses is generally cold and dry?",
                options: [
                    "cT",
                    "mP",
                    "mT",
                    "cP"
                ],
                answer: 3,
                explanation: "Continental Polar (cP) originates over cold landmasses; cold and dry in nature. cT is warm and dry. mP is cool and moist. mT is warm and moist."
            },
            {
                text: "The ISS orbits in which layer?",
                options: [
                    "Troposphere",
                    "Stratosphere",
                    "Mesosphere",
                    "Thermosphere"
                ],
                answer: 3,
                explanation: "The International Space Station orbits around 400 km altitude within the thermosphere. Troposphere is where weather occurs, too low for ISS. Stratosphere includes ozone layer, still below ISS orbit. Mesosphere lies below thermosphere, too low for satellites."
            },
            {
                text: "Regulation to replace incandescent bulbs with LEDs is an example of",
                options: [
                    "Adaptation",
                    "Deceleration",
                    "Maladaptation",
                    "Mitigation"
                ],
                answer: 3,
                explanation: "Mitigation aims to reduce greenhouse gas emissions to slow climate change. Adaptation means adjusting to climate impacts, not reducing causes. Deceleration is not a climate term. Maladaptation refers to poor or counterproductive adaptation."
            },
            {
                text: "Surplus seed and sperm banking facilitates",
                options: [
                    "Resistance",
                    "Response",
                    "None of these",
                    "Resilience to climate changes"
                ],
                answer: 3,
                explanation: "Resilience to climate changes – helps species recover from population loss and adapt to environmental stress. Resistance means avoiding change, not recovering from it. Response is general; doesn’t imply long-term recovery. None of these is incorrect as resilience fits precisely."
            },
            {
                text: "The classical period for taking climate averages is",
                options: [
                    "10 years",
                    "20 years",
                    "40 years",
                    "30 years"
                ],
                answer: 3,
                explanation: "30 years – as per World Meteorological Organization (WMO) standard for climate normals. 10 and 20 years are too short, 40 years is longer than standard."
            },
            {
                text: "Noctilucent clouds are present in which layer?",
                options: [
                    "Troposphere",
                    "Stratosphere",
                    "Thermosphere",
                    "Mesosphere"
                ],
                answer: 3,
                explanation: "Mesosphere – highest known clouds, form from ice crystals in the mesosphere. Troposphere hosts regular weather clouds. Stratosphere contains ozone but no noctilucent clouds. Thermosphere is too hot and thin for cloud formation."
            },
            {
                text: "Artificial water holes built in Mudumalai Tiger Reserve to counter droughts are an example of",
                options: [
                    "Mitigation",
                    "Deceleration",
                    "Maladaptation",
                    "Adaptation"
                ],
                answer: 3,
                explanation: "Adaptation – adjusting to the impacts of climate change to maintain ecosystem function. Mitigation deals with emission reduction, not local coping. Deceleration is not a valid climate term. Maladaptation would worsen vulnerability, not reduce it."
            },
            {
                text: "Which layer is home to the ozone layer?",
                options: [
                    "Troposphere",
                    "Mesosphere",
                    "Thermosphere",
                    "Stratosphere"
                ],
                answer: 3,
                explanation: "Stratosphere contains the ozone layer that absorbs harmful UV radiation. Troposphere has weather but little ozone. Mesosphere is above ozone layer, little ozone present. Thermosphere contains ionized gases, not ozone."
            },
            {
                text: "Most weather phenomena occur in",
                options: [
                    "Stratosphere",
                    "Mesosphere",
                    "Thermosphere",
                    "Troposphere"
                ],
                answer: 3,
                explanation: "Troposphere is the lowest layer where clouds, rainfall, and storms develop. Stratosphere is a stable layer above weather zone. Mesosphere is too cold and thin for weather. Thermosphere has no weather due to extremely low density."
            }
        ]
    },
    {
        name: "Assignment 5",
        questions: [
            {
                text: "Equal density curves are called",
                options: [
                    "Isohaline",
                    "Isotherm",
                    "Isobuoyant",
                    "Isopycnal curves"
                ],
                answer: 3,
                explanation: "Isopycnal curves – “pycnal” means density; these lines connect points of equal density in the ocean. Isohaline is equal salinity. Isotherm is equal temperature. Isobuoyant is not a standard oceanographic term."
            },
            {
                text: "Which of these is a minor feature of the ocean floor?",
                options: [
                    "Continental shelf",
                    "Continental slope",
                    "Abyssal plain",
                    "Guyot"
                ],
                answer: 3,
                explanation: "Guyot – flat-topped seamounts; smaller features compared to major oceanic structures. Continental shelf, slope, and abyssal plain are major features."
            },
            {
                text: "Mountains with pointed summits rising from the sea floor, but not reaching the surface",
                options: [
                    "Oceanic deep/trench",
                    "Mid-oceanic ridge",
                    "Atoll",
                    "Seamount"
                ],
                answer: 3,
                explanation: "Seamount – submarine volcanic mountains that don’t reach the ocean surface. Oceanic deep/trench are long, narrow depressions. Mid-oceanic ridge is a continuous underwater mountain chain. Atoll is a ring-shaped coral island on seamount tops."
            },
            {
                text: "Which of these is the largest habitat on Earth?",
                options: [
                    "Continental shelf",
                    "Continental slope",
                    "Guyot",
                    "Abyssal plain"
                ],
                answer: 3,
                explanation: "Abyssal plain covers more than 50% of Earth’s surface; the world’s largest ecosystem. Continental shelf is a shallow margin, not largest. Continental slope is a narrow zone. Guyot is an individual undersea feature."
            },
            {
                text: "Which of these are the largest mountain ranges on Earth?",
                options: [
                    "Oceanic trench",
                    "Seamount",
                    "Atoll",
                    "Mid-oceanic ridge"
                ],
                answer: 3,
                explanation: "Mid-oceanic ridge is a continuous undersea chain (~65,000 km long), the Earth’s longest mountain system. Oceanic trench is a deep narrow depression, not a ridge. Seamount is an isolated peak. Atoll is a coral formation."
            },
            {
                text: "Deep valleys, often cutting across continental shelves and slopes",
                options: [
                    "Oceanic trench",
                    "Mid-oceanic ridge",
                    "Guyot",
                    "Submarine canyon"
                ],
                answer: 3,
                explanation: "Submarine canyon – steep-sided underwater valleys carved by turbidity currents. Oceanic trench is found in deep ocean basins. Mid-oceanic ridge is an underwater mountain system. Guyot is a flat-topped volcanic mountain."
            },
            {
                text: "Continental slope has a gradient of",
                options: [
                    "0–1°",
                    "1–2°",
                    "5–10°",
                    "2–5 degrees"
                ],
                answer: 3,
                explanation: "2–5 degrees is the typical gradient for continental slope. 0–1° and 1–2° are too gentle, 5–10° is steeper than typical."
            },
            {
                text: "Which of these is not a prominent tidal pattern?",
                options: [
                    "Diurnal",
                    "Mixed semidiurnal",
                    "Semidiurnal",
                    "Mixed diurnal"
                ],
                answer: 3,
                explanation: "Mixed diurnal is not a recognized tidal type. Diurnal is one high and one low tide per day. Mixed semidiurnal is two highs and two lows of unequal height. Semidiurnal is two nearly equal highs and lows daily."
            },
            {
                text: "Relatively steep-sided, narrow, deep basins",
                options: [
                    "Mid-oceanic ridge",
                    "Seamount",
                    "Atoll",
                    "Oceanic deep / trench"
                ],
                answer: 3,
                explanation: "Oceanic deep / trench are long, narrow depressions formed by subduction at convergent plate boundaries. Mid-oceanic ridge is an elevated ridge. Seamount is an isolated volcanic mountain. Atoll is a coral ring around a lagoon."
            },
            {
                text: "In the sea, a layer where temperature decreases rapidly with depth is called",
                options: [
                    "Isopycnal",
                    "Thermophil",
                    "Thermohaline",
                    "Thermocline"
                ],
                answer: 3,
                explanation: "Thermocline is the transition zone between warm surface water and cold deep water. Isopycnal is equal density, not temperature gradient. Thermophil are heat-loving organisms. Thermohaline relates to temperature & salinity together."
            }
        ]
    },
    {
        name: "Assignment 6",
        questions: [
            {
                text: "In Köppen classification, which is hot summer temperature?",
                options: [
                    "a",
                    "h",
                    "k",
                    "b"
                ],
                answer: 0,
                explanation: "‘a’ denotes hot summer where the warmest month temperature exceeds 22°C. ‘h’ refers to hot arid (used with deserts). ‘k’ refers to cold arid (used for cold deserts). ‘b’ means warm summer (below 22°C)."
            },
            {
                text: "In Köppen classification, which is desert precipitation?",
                options: [
                    "W",
                    "S",
                    "f",
                    "s"
                ],
                answer: 0,
                explanation: "‘W’ represents desert (arid) climate. ‘S’ means steppe (semi-arid). ‘f’ means no dry season (fully humid). ‘s’ means dry summer."
            },
            {
                text: "India’s location is",
                options: [
                    "Tropical in South, Sub-tropical in North",
                    "Equatorial in South, Sub-tropical in North",
                    "Tropical in South, Equatorial in North",
                    "Sub-tropical in South, Equatorial in North"
                ],
                answer: 0,
                explanation: "Tropical in South, Sub-tropical in North – Tropic of Cancer passes through central India (23.5°N). Other options are incorrect or inverted."
            },
            {
                text: "In Köppen classification, which is cold arid temperature?",
                options: [
                    "k",
                    "h",
                    "a",
                    "b"
                ],
                answer: 0,
                explanation: "‘k’ denotes cold arid (mean annual temperature below 18°C). ‘h’ indicates hot arid (above 18°C). ‘a’ is hot summer type in humid climates. ‘b’ is warm summer, not arid."
            },
            {
                text: "In Köppen classification, which is winter dry precipitation?",
                options: [
                    "w",
                    "S",
                    "f",
                    "s"
                ],
                answer: 0,
                explanation: "‘w’ represents dry winter climate (most rainfall in summer). ‘S’ stands for steppe/semi-arid. ‘f’ is fully humid, no dry season. ‘s’ is dry summer."
            },
            {
                text: "In Köppen classification, which is cool summer temperature?",
                options: [
                    "c",
                    "d",
                    "F",
                    "T"
                ],
                answer: 0,
                explanation: "‘c’ means cool summer, warmest month <22°C but at least 4 months >10°C. ‘d’ is very cold winter (continental/subarctic). ‘F’ is no dry season. ‘T’ is tundra climate, extremely cold."
            },
            {
                text: "Correct sequence of seasons in India",
                options: [
                    "Hot weather season → South-West monsoon → Retreating monsoon → Cold weather season",
                    "South-West monsoon → Hot weather season → Cold weather season → Retreating monsoon",
                    "Retreating monsoon → Hot weather season → South-West monsoon → Cold weather season",
                    "Cold weather season → Hot weather season → South-West monsoon → Retreating monsoon"
                ],
                answer: 0,
                explanation: "Matches India’s actual seasonal pattern (March–May → June–Sept → Oct–Nov → Dec–Feb). Other options mix up or reverse the monsoon order."
            },
            {
                text: "In Köppen classification, which is monsoonal precipitation?",
                options: [
                    "m",
                    "W",
                    "S",
                    "s"
                ],
                answer: 0,
                explanation: "‘m’ denotes monsoonal rainfall, with short dry season and heavy summer rains. ‘W’ is desert. ‘S’ is steppe. ‘s’ is dry summer, Mediterranean type."
            },
            {
                text: "Physiography is the outcome of",
                options: [
                    "Structure",
                    "Process",
                    "Stage",
                    "All of these"
                ],
                answer: 3,
                explanation: "It results from structure (lithology), processes (exogenic & endogenic), and stage of development (cycle of erosion). Each one contributes, but not individually sufficient."
            },
            {
                text: "In Köppen classification, which is equatorial climate?",
                options: [
                    "A",
                    "B",
                    "C",
                    "D"
                ],
                answer: 0,
                explanation: "‘A’ represents tropical (equatorial) climates with all months >18°C and heavy rainfall. ‘B’ is arid. ‘C’ is temperate. ‘D’ is cold/continental."
            }
        ]
    },
    {
        name: "Assignment 7",
        questions: [
            {
                text: "Soil formation is dependent upon",
                options: [
                    "Vegetation",
                    "Time",
                    "Climate",
                    "All of the above"
                ],
                answer: 3,
                explanation: "Soil formation (pedogenesis) depends on five major factors — parent material, topography, time, climate, and organisms/vegetation. Each individual factor alone cannot form soil — all interact together."
            },
            {
                text: "Which of these is not a characteristic of pioneer species",
                options: [
                    "Ability to grow on bare rocks",
                    "Tolerance to extreme conditions",
                    "Short life span",
                    "Large size"
                ],
                answer: 3,
                explanation: "Pioneer species (like lichens, mosses) are small, hardy, and fast-growing organisms that first colonize barren areas. Large size is not a characteristic."
            },
            {
                text: "“Groups of actually or potentially interbreeding natural populations, which are reproductively isolated from other such groups” refers to",
                options: [
                    "Cells",
                    "Ecosystems",
                    "Biomes",
                    "Species"
                ],
                answer: 3,
                explanation: "This is the Biological Species Concept by Ernst Mayr. Cells are the basic unit of life, not population-level concept. Ecosystems include abiotic + biotic components. Biomes are large ecological regions."
            },
            {
                text: "Mechanical action of ocean waves is an example of",
                options: [
                    "Chemical weathering",
                    "Biological weathering",
                    "None",
                    "Physical weathering"
                ],
                answer: 3,
                explanation: "It breaks rocks by mechanical force (abrasion, impact) without chemical change. Chemical weathering alters mineral composition. Biological weathering is caused by living organisms."
            },
            {
                text: "The climax near Tindni village is being controlled by disturbance by cattle.",
                options: [
                    "Climatic climax",
                    "Edaphic climax",
                    "Catastrophic climax",
                    "Disclimax"
                ],
                answer: 3,
                explanation: "Disclimax occurs when human or animal interference (like grazing) prevents the natural climax community. Climatic climax is determined by regional climate, not interference. Edaphic climax is determined by soil conditions. Catastrophic climax is due to disasters."
            },
            {
                text: "Carbonation is an example of",
                options: [
                    "Physical weathering",
                    "Biological weathering",
                    "None",
                    "Chemical weathering"
                ],
                answer: 3,
                explanation: "Carbonation involves CO₂ + water forming carbonic acid, which dissolves rocks like limestone (CaCO₃)."
            },
            {
                text: "In soil profile, ‘C’ refers to",
                options: [
                    "Organic surface layer",
                    "Topsoil",
                    "Subsoil",
                    "Substratum layer"
                ],
                answer: 3,
                explanation: "The C-horizon is the partially weathered parent material, below A (topsoil) and B (subsoil)."
            },
            {
                text: "A climax caused by wildfires is an example of",
                options: [
                    "Climatic climax",
                    "Edaphic climax",
                    "Disclimax",
                    "Catastrophic climax"
                ],
                answer: 3,
                explanation: "Catastrophic climax results when sudden large-scale disturbances like fire or storm reset succession."
            },
            {
                text: "Regur is a term for",
                options: [
                    "Alluvial soil",
                    "Saline soil",
                    "Red and yellow soil",
                    "Black cotton soil"
                ],
                answer: 3,
                explanation: "Regur soils are clayey, rich in iron and lime, formed from basalt in the Deccan Plateau — ideal for cotton."
            },
            {
                text: "“The diversity that exists among different geographies” is",
                options: [
                    "Alpha (α) biodiversity",
                    "Beta (β) biodiversity",
                    "Delta (δ) biodiversity",
                    "Gamma (γ) biodiversity"
                ],
                answer: 3,
                explanation: "Gamma diversity refers to overall diversity across regions or landscapes. Alpha is within a particular ecosystem. Beta is difference in species between ecosystems. Delta is not a standard term in ecology."
            }
        ]
    },
    {
        name: "Assignment 8",
        questions: [
            {
                text: "The fig tree bears fruits in times when animals do not have much access to food.",
                options: [
                    "Least concern species",
                    "Flagship species",
                    "Extinct species",
                    "Keystone species"
                ],
                answer: 3,
                explanation: "Keystone species have a disproportionately large effect on their ecosystem — fig trees sustain animals during food-scarce periods. Least concern is a conservation status, not ecological role. Flagship species are chosen for awareness, not ecosystem impact. Extinct species no longer exist."
            },
            {
                text: "“Subset of physical and biotic environmental factors that permit an animal (or plant) to survive and reproduce”",
                options: [
                    "Ecosystem",
                    "Biome",
                    "Biosphere",
                    "Habitat"
                ],
                answer: 3,
                explanation: "A habitat provides all conditions and resources necessary for an organism’s survival and reproduction. Ecosystem includes interactions between biotic and abiotic components. Biome is a large ecological region. Biosphere is the global sum of all ecosystems."
            },
            {
                text: "Process of habitat fragmentation and loss",
                options: [
                    "Original forest → Dissection → Perforation → Fragmentation → Attrition",
                    "Original forest → Perforation → Dissection → Fragmentation → Attrition",
                    "Original forest → Fragmentation → Dissection → Perforation → Attrition",
                    "Original forest → Attrition → Fragmentation → Dissection → Perforation"
                ],
                answer: 0,
                explanation: "This sequence shows gradual breaking up of large habitats into smaller, isolated patches. The real process begins with small cuts (dissection), then holes (perforation), then breakup (fragmentation), and finally disappearance (attrition)."
            },
            {
                text: "Soil formation is an example of",
                options: [
                    "Provisioning service",
                    "Regulating service",
                    "Cultural service",
                    "Supporting service"
                ],
                answer: 3,
                explanation: "Supporting ecosystem services enable other services — e.g., soil formation supports plant growth. Provisioning gives tangible goods. Regulating controls climate, disease, etc. Cultural is non-material benefits."
            },
            {
                text: "Biological control of pest populations is an example of",
                options: [
                    "Provisioning service",
                    "Supporting service",
                    "Cultural service",
                    "Regulating service"
                ],
                answer: 3,
                explanation: "Regulating services maintain ecosystem balance, such as pest control, flood regulation, and pollination. Provisioning provides direct products. Supporting underpins all other services. Cultural relates to heritage or tourism."
            },
            {
                text: "The acronym HIPPO does not include",
                options: [
                    "Habitat loss",
                    "Invasive species",
                    "Pollination",
                    "Pollution"
                ],
                answer: 2,
                explanation: "HIPPO = Habitat loss, Invasive species, Pollution, Population, Overexploitation — key biodiversity threats. Pollination is an ecological service, not a threat."
            },
            {
                text: "The tiger has a large home range and regulates herbivores; people also visit reserves to see it.",
                options: [
                    "Keystone species",
                    "Umbrella species",
                    "Flagship species",
                    "All of the above"
                ],
                answer: 3,
                explanation: "Tiger is a Keystone species (regulates prey), an Umbrella species (protecting it safeguards others), and a Flagship species (symbol for conservation awareness)."
            },
            {
                text: "People visit Sessa Orchid Sanctuary to see orchids.",
                options: [
                    "Umbrella species",
                    "Keystone species",
                    "Extinct species",
                    "Flagship species"
                ],
                answer: 3,
                explanation: "Flagship species are charismatic organisms that attract public attention and conservation funding. Umbrella species indirectly protect others by wide habitat needs. Keystone species are ecologically crucial, not necessarily attractive. Extinct species no longer exist."
            },
            {
                text: "Captive breeding is an example of",
                options: [
                    "In-situ conservation",
                    "Preservation",
                    "Ex-situ conservation",
                    "None of these"
                ],
                answer: 2,
                explanation: "Ex-situ means “outside the natural habitat” — like zoos, botanical gardens, gene banks. In-situ is protecting species in their natural habitats. Preservation implies non-interference, not active conservation."
            },
            {
                text: "We prefer areas for conservation reserves where threat level is",
                options: [
                    "Very high",
                    "Very low",
                    "Medium",
                    "Non-existent"
                ],
                answer: 2,
                explanation: "Medium-threat areas have viable ecosystems that can still be restored or maintained. Very high may already be degraded. Very low or non-existent need less urgent intervention."
            }
        ]
    },
    {
        name: "Assignment 9",
        questions: [
            {
                text: "According to Malthusian model",
                options: [
                    "Both geometric",
                    "Both arithmetic",
                    "Population arithmetic, food geometric",
                    "Population grows in geometric progression, food supply increases in arithmetic progression"
                ],
                answer: 3,
                explanation: "Malthus proposed that population grows exponentially, while food supply grows linearly, leading to scarcity. Both geometric is unrealistic; food production is limited by land/resources. Both arithmetic ignores exponential population potential. Population arithmetic, food geometric is opposite of Malthus’ theory."
            },
            {
                text: "Commonly observed during humanising of nature",
                options: [
                    "Environmental determinism",
                    "Neodeterminism",
                    "Stop and go determinism",
                    "Possibilism"
                ],
                answer: 3,
                explanation: "Possibilism suggests humans modify and adapt the environment using technology and culture. Environmental determinism is nature controls humans. Neodeterminism is a balance. Stop and go determinism is a modern variant."
            },
            {
                text: "A pillar of sustainability",
                options: [
                    "Industrial sustainability",
                    "Agricultural sustainability",
                    "Trans-boundary sustainability",
                    "Social sustainability"
                ],
                answer: 3,
                explanation: "Sustainability stands on three pillars — social, economic, and environmental. Industrial and agricultural are sectoral, not pillars. Trans-boundary relates to boundaries, not the framework."
            },
            {
                text: "Commonly observed in primitive societies",
                options: [
                    "Possibilism",
                    "Neodeterminism",
                    "Stop and go determinism",
                    "Environmental determinism"
                ],
                answer: 3,
                explanation: "Primitive societies were strongly controlled by nature, climate, and physical surroundings (environmental determinism)."
            },
            {
                text: "Demographic transition sees society move from",
                options: [
                    "High birth rate, low death rate → low birth rate, high death rate",
                    "Low birth rate, high death rate → high birth rate, low death rate",
                    "High birth rate, high death rate → low birth rate, low death rate",
                    "Low birth rate, low death rate → high birth rate, high death rate"
                ],
                answer: 2,
                explanation: "This model explains population growth through stages of development — from primitive to industrial societies."
            },
            {
                text: "Logistic growth equation curve is",
                options: [
                    "I-shaped",
                    "J-shaped",
                    "U-shaped",
                    "S-shaped"
                ],
                answer: 3,
                explanation: "Logistic growth (Verhulst model) shows population initially growing fast, then slowing as it nears carrying capacity (S-shaped curve)."
            },
            {
                text: "Preventive check according to Malthus",
                options: [
                    "Vice",
                    "Misery",
                    "Flood",
                    "Foresight"
                ],
                answer: 3,
                explanation: "Preventive checks are voluntary measures (like delayed marriage, family planning) to limit population before crisis. Vice and misery are positive checks (increase death rate). Flood is a natural calamity, not preventive."
            },
            {
                text: "Not a pillar of sustainability",
                options: [
                    "Environmental sustainability",
                    "Economic sustainability",
                    "Social sustainability",
                    "Trans-boundary sustainability"
                ],
                answer: 3,
                explanation: "The recognized three pillars are social, economic, and environmental. Trans-boundary is not a pillar."
            },
            {
                text: "“An Essay on the Principle of Population” was written by",
                options: [
                    "Darwin",
                    "Spencer",
                    "Owens",
                    "Thomas Malthus"
                ],
                answer: 3,
                explanation: "Published in 1798, the book warned about unchecked population growth leading to famine and poverty. Darwin developed theory of evolution. Spencer coined “survival of the fittest”. Owens was a social reformer."
            },
            {
                text: "Positive check according to Malthus",
                options: [
                    "Late marriage",
                    "Celibacy",
                    "Moral restraint",
                    "War"
                ],
                answer: 3,
                explanation: "Positive checks are factors increasing death rate — war, famine, epidemics. Late marriage, celibacy, moral restraint are preventive checks reducing birth rate."
            }
        ]
    },
    {
        name: "Assignment 10",
        questions: [
            {
                text: "Hydrogen for nuclear fusion comes under the category of",
                options: [
                    "Potential resources",
                    "Actual resources",
                    "Reserve resources",
                    "Stock resources"
                ],
                answer: 3,
                explanation: "Stock resources are those exist in nature but cannot be used currently due to technology or economics. Potential resources can be developed in future, but stock is not yet usable. Actual resources are currently in use. Reserve resources are portion of actual resources available for future use."
            },
            {
                text: "Largest source of ammonia (NH₃) in the atmosphere",
                options: [
                    "Mineral fertiliser",
                    "Crops and decomposition",
                    "Human waste",
                    "Animal manure"
                ],
                answer: 3,
                explanation: "Livestock waste releases ammonia directly into the air, making it the major natural source. Mineral fertiliser is a secondary contribution. Crops and decomposition are smaller sources. Human waste is a minor contributor."
            },
            {
                text: "“Part of actual resources that can be developed profitably in the future”",
                options: [
                    "Potential resources",
                    "Actual resources",
                    "Stock resources",
                    "Reserve resources"
                ],
                answer: 3,
                explanation: "Reserves are economically exploitable portions of actual resources. Potential resources are not yet surveyed or quantified. Actual resources are currently used. Stock resources are not usable with current technology."
            },
            {
                text: "Timber from forests being harvested",
                options: [
                    "Potential resources",
                    "Reserve resources",
                    "Stock resources",
                    "Actual resources"
                ],
                answer: 3,
                explanation: "Resources currently in use are classified as actual. Potential resources are not yet used. Reserve resources are actual resources set aside for future. Stock resources exist but cannot be used now."
            },
            {
                text: "Rain gardens are primarily meant to",
                options: [
                    "Reduce water usage",
                    "Protect existing water sources",
                    "Increase flow to streams",
                    "Increase recharge to groundwater"
                ],
                answer: 3,
                explanation: "Rain gardens capture runoff, allowing water to percolate into aquifers. Reduce water usage is an indirect effect. Protect existing water sources is not the primary function. Increase flow to streams is the opposite."
            },
            {
                text: "Oil that has not been drilled",
                options: [
                    "Actual resources",
                    "Reserve resources",
                    "Stock resources",
                    "Potential resources"
                ],
                answer: 3,
                explanation: "Potential resources are known to exist but not yet exploited. Actual resources are currently in use. Reserve resources are set aside for future exploitation. Stock resources cannot be used now."
            },
            {
                text: "Largest source of nitrogen oxides in the atmosphere",
                options: [
                    "Electricity generation",
                    "Industrial processes",
                    "Waste disposal",
                    "Mobile sources"
                ],
                answer: 3,
                explanation: "Vehicles emit the majority of NOx pollutants via combustion engines. Electricity generation and industrial processes are secondary sources. Waste disposal is a minor contributor."
            },
            {
                text: "“Resources currently being used after surveying, quantification, and qualification”",
                options: [
                    "Potential resources",
                    "Reserve resources",
                    "Stock resources",
                    "Actual resources"
                ],
                answer: 3,
                explanation: "These are resources under active utilization. Potential resources are not yet used. Reserve resources are set aside for future. Stock resources exist but are not usable yet."
            },
            {
                text: "“Resources that may be used in the future”",
                options: [
                    "Actual resources",
                    "Reserve resources",
                    "Stock resources",
                    "Potential resources"
                ],
                answer: 3,
                explanation: "Potential resources can be exploited in the future once technology or economics allow. Actual resources are already in use. Reserve resources are a subset of actual resources for future use. Stock resources cannot be used with current technology."
            },
            {
                text: "Low concentration ores come in the category of",
                options: [
                    "Potential resources",
                    "Actual resources",
                    "Stock resources",
                    "Reserve resources"
                ],
                answer: 3,
                explanation: "Low-grade ores are currently uneconomical, but part of reserves as they may be exploited when extraction becomes profitable. Potential resources refers to unsurveyed or undiscovered. Actual resources are being exploited now. Stock resources exist but cannot be used at all currently."
            }
        ]
    },
    {
        name: "Assignment 11",
        questions: [
            {
                text: "New Delhi can best be categorised as",
                options: [
                    "Industrial town",
                    "Transport town",
                    "Commercial town",
                    "Administrative town"
                ],
                answer: 3,
                explanation: "New Delhi is primarily the capital city, hosting central government offices. Industrial, transport, and commercial activities exist, but administration dominates."
            },
            {
                text: "Factor governing barrier effect of roads",
                options: [
                    "Traffic intensity",
                    "Speed",
                    "Driver sensitivity",
                    "All of these"
                ],
                answer: 3,
                explanation: "Barrier effect depends on how busy the road is, speed of vehicles, and human response to animals. Choosing any single factor ignores the combined effect."
            },
            {
                text: "Factor governing barrier effect of roads (wildlife)",
                options: [
                    "Animal crossings",
                    "Movement patterns",
                    "Species preference",
                    "All of these"
                ],
                answer: 3,
                explanation: "Wildlife road use is influenced by crossings, movement behaviour, and species-specific habits. Single factors alone are insufficient."
            },
            {
                text: "Varanasi can best be categorised as",
                options: [
                    "Mining town",
                    "Garrison town",
                    "Educational town",
                    "Religious town"
                ],
                answer: 3,
                explanation: "Varanasi is famous for temples and pilgrimage. Mining and garrison roles are not significant. Educational is secondary; religious tourism dominates."
            },
            {
                text: "“The ability to produce a good using fewer inputs than another producer”",
                options: [
                    "Comparative advantage",
                    "Production advantage",
                    "Resource advantage",
                    "Absolute advantage"
                ],
                answer: 3,
                explanation: "Absolute advantage = higher productivity with same resources. Comparative advantage is based on lower opportunity cost, not absolute efficiency. Production/resource advantage are not standard economic terms."
            },
            {
                text: "“The price of a good that prevails in the world market”",
                options: [
                    "Export price",
                    "Import price",
                    "Domestic price",
                    "World price"
                ],
                answer: 3,
                explanation: "World price reflects global market equilibrium. Export price is when selling abroad, may differ from world price. Import price is price paid when buying abroad. Domestic price is internal market price."
            },
            {
                text: "Visakhapatnam can best be categorised as",
                options: [
                    "Administrative town",
                    "Industrial town",
                    "Commercial town",
                    "Transport town"
                ],
                answer: 3,
                explanation: "Visakhapatnam is a major port city, facilitating trade and movement of goods. Administrative, industrial, and commercial roles exist but transport dominates."
            },
            {
                text: "Examples of mitigation measures for linear infrastructure on wildlife",
                options: [
                    "Land bridges",
                    "Canopy bridges",
                    "Glider poles",
                    "All of these"
                ],
                answer: 3,
                explanation: "These structures help animals safely cross roads or railways, reducing mortality. Choosing any one alone is insufficient for all species."
            },
            {
                text: "Bhilai can best be categorised as",
                options: [
                    "Administrative town",
                    "Transport town",
                    "Commercial town",
                    "Industrial town"
                ],
                answer: 3,
                explanation: "Bhilai is known for steel plants and heavy industries. Administrative, transport, and commercial roles are secondary."
            },
            {
                text: "“The ability to produce a good at a lower opportunity cost than another producer”",
                options: [
                    "Real advantage",
                    "Monetary advantage",
                    "Opportunity advantage",
                    "Comparative advantage"
                ],
                answer: 3,
                explanation: "Comparative advantage = lower sacrifice of other goods for production, forms basis of trade. Real/Monetary/Opportunity advantage are not standard economic definitions."
            }
        ]
    },
    {
        name: "Assignment 12",
        questions: [
            {
                text: "Time of flight for LiDAR is 0.00001 sec. Distance from the instrument",
                options: [
                    "500 m",
                    "1000 m",
                    "2000 m",
                    "1500 m"
                ],
                answer: 3,
                explanation: "Distance = (Speed of light × Time) ÷ 2 = (3 × 10⁸ × 0.00001) ÷ 2 = 1500 m. Other options are calculation mismatches."
            },
            {
                text: "Method using imputed willingness to pay",
                options: [
                    "Market price",
                    "Replacement cost",
                    "Travel cost",
                    "Contingent valuation method"
                ],
                answer: 3,
                explanation: "Contingent valuation method estimates the value people assign to non-market goods by asking their willingness to pay. Market price is actual transaction price. Replacement cost is cost to replace a resource. Travel cost estimates value using expenditure to reach site."
            },
            {
                text: "“Situation of people, infrastructure… in hazard-prone areas”",
                options: [
                    "Hazard",
                    "Vulnerability",
                    "Disaster",
                    "Exposure"
                ],
                answer: 3,
                explanation: "Exposure measures what and who are present in hazard zones. Hazard is the threat itself. Vulnerability is susceptibility to damage. Disaster is outcome when hazard interacts with vulnerability."
            },
            {
                text: "“Process, phenomenon or human activity that may cause loss…”",
                options: [
                    "Exposure",
                    "Vulnerability",
                    "Disaster",
                    "Hazard"
                ],
                answer: 3,
                explanation: "Hazards are potentially damaging events. Exposure is presence in hazard-prone area. Vulnerability is susceptibility to harm. Disaster is realized damage from hazard."
            },
            {
                text: "“Serious disruption of the functioning of a community…”",
                options: [
                    "Hazard",
                    "Exposure",
                    "Vulnerability",
                    "Disaster"
                ],
                answer: 3,
                explanation: "Disaster occurs when hazard interacts with exposure and vulnerability, causing losses. Hazard is only the threat. Exposure is objects or people at risk. Vulnerability is degree of susceptibility."
            },
            {
                text: "“Strengths, attributes and resources to manage disaster risks”",
                options: [
                    "Contingency",
                    "Disaster management",
                    "Vulnerability",
                    "Capacity"
                ],
                answer: 3,
                explanation: "Capacity is the ability of community/organization to cope, adapt and recover. Contingency is plan for unexpected events. Disaster management is process of planning and response. Vulnerability is susceptibility to harm."
            },
            {
                text: "Bathymetric LiDAR uses",
                options: [
                    "Far infrared",
                    "Near infrared",
                    "Orange",
                    "Green light"
                ],
                answer: 3,
                explanation: "Green wavelength penetrates water for mapping underwater topography. Far infrared, near infrared, orange are absorbed by water, unsuitable for bathymetry."
            },
            {
                text: "IMU stands for",
                options: [
                    "Imperial metering unit",
                    "Imperial measurement unit",
                    "Inertial metering unit",
                    "Inertial Measurement Unit"
                ],
                answer: 3,
                explanation: "IMU is Inertial Measurement Unit, measures acceleration and rotation, critical for navigation and LiDAR positioning. Other options are incorrect terminology."
            },
            {
                text: "Not a consumptive value",
                options: [
                    "Timber",
                    "Firewood",
                    "Non-timber forest products",
                    "Education"
                ],
                answer: 3,
                explanation: "Consumptive values are goods extracted or used directly, like timber, firewood, NTFPs. Education is not a consumptive value."
            },
            {
                text: "Frequency of flyovers indicates",
                options: [
                    "Spatial resolution",
                    "Spectral resolution",
                    "Radiometric resolution",
                    "Temporal resolution"
                ],
                answer: 3,
                explanation: "Temporal resolution = how often a satellite revisits a location. Spatial resolution is pixel size on ground. Spectral is wavelength sensitivity. Radiometric is ability to detect slight differences in energy."
            }
        ]
    },
];

// Populate assignment dropdown
const assignmentSelect = document.getElementById('assignment');
assignments.forEach((a, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = a.name;
    assignmentSelect.appendChild(opt);
});

document.getElementById('load-assignment').onclick = () => {
    loadAssignment(parseInt(assignmentSelect.value));
};

function loadAssignment(idx) {
    const quizDiv = document.getElementById('quiz');
    const resultDiv = document.getElementById('result');
    quizDiv.innerHTML = '';
    resultDiv.innerHTML = '';
    const assignment = assignments[idx];
    assignment.questions.forEach((q, qi) => {
        const qDiv = document.createElement('div');
        qDiv.className = 'question';
        qDiv.innerHTML = `<div><b>Q${qi + 1}:</b> ${q.text}</div>`;
        const optsDiv = document.createElement('div');
        optsDiv.className = 'options';
        q.options.forEach((opt, oi) => {
            const id = `q${qi}_opt${oi}`;
            optsDiv.innerHTML += `
        <label>
          <input type="radio" name="q${qi}" value="${oi}" id="${id}">
          ${String.fromCharCode(97 + oi)}) ${opt}
        </label>
      `;
        });
        qDiv.appendChild(optsDiv);
        quizDiv.appendChild(qDiv);
    });
    quizDiv.innerHTML += `<button id="submit-quiz">Submit</button>`;
    document.getElementById('submit-quiz').onclick = () => submitQuiz(idx);
}

function submitQuiz(idx) {
    const assignment = assignments[idx];
    let score = 0;
    let resultHTML = `<div class="score">Your Score: `;
    let explanations = '';
    assignment.questions.forEach((q, qi) => {
        const radios = document.getElementsByName(`q${qi}`);
        let selected = -1;
        for (let r of radios) {
            if (r.checked) selected = parseInt(r.value);
        }
        const correct = selected === q.answer;
        if (correct) score++;
        explanations += `
      <div>
        <b>Q${qi + 1}:</b> ${q.text}<br>
        <span class="${correct ? 'correct' : 'incorrect'}">
          ${correct ? 'Correct' : 'Incorrect'}
        </span><br>
        <b>Your answer:</b> ${selected >= 0 ? String.fromCharCode(97 + selected) + ') ' + q.options[selected] : 'No answer'}<br>
        <b>Correct answer:</b> ${String.fromCharCode(97 + q.answer)}) ${q.options[q.answer]}<br>
        <div class="explanation">${q.explanation}</div>
      </div>
      <hr>
    `;
    });
    resultHTML += `${score} / ${assignment.questions.length}</div>`;
    resultHTML += explanations;
    document.getElementById('result').innerHTML = resultHTML;
    document.getElementById('submit-quiz').disabled = true;
}
