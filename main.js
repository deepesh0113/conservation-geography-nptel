const years = [
    {
        name: "2022",
        assignments: [
            {
                name: "Distinct Questions (2024-25)",
                questions: [
                    {
                        text: "The main source of magma is",
                        options: ["Crust", "Mantle", "Outer core", "Inner core"],
                        answer: 1,
                        explanation: "Magma originates mainly from the partial melting of rocks in the mantle."
                    },
                    {
                        text: "Deccan traps are an example of",
                        options: ["Shield volcano", "Stratovolcano", "Caldera", "Flood basalt province"],
                        answer: 3,
                        explanation: "Deccan Traps are large igneous provinces formed by extensive flood basalt eruptions."
                    },
                    {
                        text: "Moho discontinuity occurs between",
                        options: ["Crust and mantle", "Mantle and outer core", "Outer core and inner core", "Oceanic crust and continental crust"],
                        answer: 0,
                        explanation: "The Mohorovičić discontinuity (Moho) separates the Earth's crust from the mantle."
                    },
                    {
                        text: "“Light cream to salmon pink coloured tectosilicate minerals forming half of the Earth’s crust” is a description of",
                        options: ["amphiboles", "feldspar", "mica", "olivine"],
                        answer: 1,
                        explanation: "Feldspars are the most abundant minerals in the Earth’s crust and often appear pinkish or cream-colored."
                    },
                    {
                        text: "Which of these is correct?",
                        options: [
                            "Intrusive rocks: formed outside crust, often coarse grained",
                            "Intrusive rocks: formed inside crust, often fine grained",
                            "Extrusive rocks: formed outside crust, often fine grained",
                            "Extrusive rocks: formed inside crust, often coarse grained"
                        ],
                        answer: 2,
                        explanation: "Extrusive igneous rocks form from lava cooling quickly on the surface, producing fine-grained textures."
                    },
                    {
                        text: "Cryofracturing is an example of",
                        options: ["chemical weathering", "physical weathering", "biological weathering", "none of the above"],
                        answer: 1,
                        explanation: "Cryofracturing involves physical breaking of rocks due to freezing and thawing of water."
                    },
                    {
                        text: "Mudrock is an example of",
                        options: ["siliciclastic rock", "carbonate rock", "evaporite rock", "phosphatic rock"],
                        answer: 0,
                        explanation: "Mudrocks are fine-grained siliciclastic sedimentary rocks derived from silicate minerals."
                    },
                    {
                        text: "“Sheet silicate minerals with pearly, vitreous lustre” is a description of",
                        options: ["pyroxene", "feldspar", "mica", "quartz"],
                        answer: 2,
                        explanation: "Mica minerals have a sheet-like structure and exhibit pearly to vitreous luster."
                    },
                    {
                        text: "Hydrolysis is an example of",
                        options: ["chemical weathering", "physical weathering", "biological weathering", "none of the above"],
                        answer: 0,
                        explanation: "Hydrolysis is a chemical weathering process involving reactions between minerals and water."
                    },
                    {
                        text: "Most meteors burn in which layer?",
                        options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
                        answer: 2,
                        explanation: "Meteors burn up due to friction in the mesosphere."
                    },
                    {
                        text: "Which of these air masses is generally warm and moist?",
                        options: ["cP", "cT", "mP", "mT"],
                        answer: 3,
                        explanation: "Maritime Tropical (mT) air masses are warm and moist as they form over tropical oceans."
                    },
                    {
                        text: "Aurora borealis occurs in which layer?",
                        options: ["Troposphere", "Stratosphere", "Mesosphere", "Thermosphere"],
                        answer: 3,
                        explanation: "Auroras occur in the thermosphere due to interaction of charged particles with Earth’s magnetic field."
                    },
                    {
                        text: "Which of these air masses is generally hot and dry?",
                        options: ["cP", "cT", "mP", "mT"],
                        answer: 1,
                        explanation: "Continental Tropical (cT) air masses form over hot, dry land regions."
                    },
                    {
                        text: "Continental shelf has a gradient of",
                        options: ["0–1 degree", "1–2 degree", "2–5 degree", "5–10 degree"],
                        answer: 0,
                        explanation: "Continental shelves are gently sloping areas extending from the coastline with gradients of about 0–1°."
                    },
                    {
                        text: "Continental slope has a gradient of",
                        options: ["0–1 degree", "1–2 degree", "2–5 degree", "5–10 degree"],
                        answer: 2,
                        explanation: "The continental slope descends steeply from the shelf with gradients typically between 2–5°."
                    },
                    {
                        text: "A flat-topped seamount is called",
                        options: ["trench", "plateau", "guyot", "ridge"],
                        answer: 2,
                        explanation: "Guyots are flat-topped seamounts eroded by wave action before submergence."
                    },
                    {
                        text: "In Koeppen classification, which is polar frost temperature?",
                        options: ["c", "d", "F", "T"],
                        answer: 2,
                        explanation: "‘F’ in Koeppen classification stands for polar frost climates."
                    },
                    {
                        text: "Which of these are factors determining the climate of India?",
                        options: ["the latitudinal extent", "the Himalayas forming a climatic divide", "distribution of land and water", "all of these"],
                        answer: 3,
                        explanation: "All these factors significantly influence India’s diverse climatic conditions."
                    },
                    {
                        text: "Winter rains are common in",
                        options: ["Western coastal region of India", "Eastern coastal region of India", "Interiors of peninsular India", "Northern plains of India"],
                        answer: 1,
                        explanation: "The eastern coastal region (especially Tamil Nadu) receives winter rains from northeast monsoon winds."
                    },
                    {
                        text: "Which of these are geological regions of India?",
                        options: ["The mountains", "The peninsular block", "The Indo-Ganga-Brahmaputra plain", "all of these"],
                        answer: 3,
                        explanation: "India is divided into three major geological regions: mountains, plains, and the peninsular block."
                    },
                    {
                        text: "In Koeppen classification, which is extremely continental temperature?",
                        options: ["c", "d", "F", "T"],
                        answer: 1,
                        explanation: "‘d’ in Koeppen classification indicates extremely continental temperature regimes."
                    },
                    {
                        text: "Bangar is a type of",
                        options: ["black cotton soil", "alluvial soil", "saline soil", "red and yellow soil"],
                        answer: 1,
                        explanation: "Bangar refers to the older alluvial soil found above the flood plains."
                    },
                    {
                        text: "Self-ploughing character is seen in",
                        options: ["black cotton soil", "alluvial soil", "saline soil", "red and yellow soil"],
                        answer: 0,
                        explanation: "Black cotton soil swells and contracts on wetting and drying, leading to self-ploughing."
                    },
                    {
                        text: "“The cost of impacts caused by emission of carbon dioxide” is known as",
                        options: ["cost of carbon", "economic cost of carbon", "social cost of carbon", "cultural cost of carbon"],
                        answer: 2,
                        explanation: "The social cost of carbon estimates the economic damages per ton of CO₂ emissions."
                    },
                    {
                        text: "Nutrient cycling is an example of",
                        options: ["provisioning service", "regulating service", "supporting service", "cultural service"],
                        answer: 2,
                        explanation: "Supporting services include processes like nutrient cycling that sustain ecosystems."
                    },
                    {
                        text: "Which of these is a stochastic factor?",
                        options: ["birth rate", "death rate", "population structure", "environmental fluctuation"],
                        answer: 3,
                        explanation: "Stochastic factors like environmental fluctuations are random events affecting populations."
                    },
                    {
                        text: "Supply of medicines is an example of",
                        options: ["provisioning service", "regulating service", "supporting service", "cultural service"],
                        answer: 0,
                        explanation: "Provisioning services provide material goods such as food, water, and medicines."
                    },
                    {
                        text: "Which of these is not a use value?",
                        options: ["direct value", "indirect value", "option value", "existence value"],
                        answer: 3,
                        explanation: "Existence value is a non-use value representing the satisfaction from knowing a resource exists."
                    },
                    {
                        text: "Which of these is not a non-use value?",
                        options: ["direct value", "existence value", "altruistic value", "bequest value"],
                        answer: 0,
                        explanation: "Direct value arises from actual use of environmental goods, not a non-use value."
                    },
                    {
                        text: "The value of leaving use and non-use values for offspring’s or future generations is called",
                        options: ["altruistic value", "bequest value", "existence value", "option value"],
                        answer: 1,
                        explanation: "Bequest value is the value placed on preserving resources for future generations."
                    }
                ]

            },
        ]
    },
    {
        name: "2023",
        assignments: [
            {
                name: "Distinct Questions (2024–25)",
                questions: [
                    {
                        text: "Which of these are created by the interaction of body waves with surface rocks?",
                        options: ["P waves", "S waves", "Body waves", "Surface waves"],
                        answer: 3,
                        explanation: "Surface waves are generated when body waves interact with the Earth's surface layers, causing strong ground motion."
                    },
                    {
                        text: "Which of these is correct?",
                        options: [
                            "Intrusive rocks: formed outside crust, often coarse grained",
                            "Intrusive rocks: formed inside crust, often fine grained",
                            "Extrusive rocks: formed outside crust, often fine grained",
                            "Extrusive rocks: formed inside crust, often coarse grained"
                        ],
                        answer: 2,
                        explanation: "Extrusive igneous rocks form when magma cools quickly on the surface, producing fine-grained textures."
                    },
                    {
                        text: "“Sheet silicate minerals with pearly, vitreous lustre” is a description of",
                        options: ["pyroxene", "feldspar", "mica", "quartz"],
                        answer: 2,
                        explanation: "Mica minerals are sheet silicates known for their pearly to vitreous luster."
                    },
                    {
                        text: "“Stratified and assorted deposits comprised of fine matter with rounded edges” is the definition of",
                        options: ["glacial till", "outwash deposit", "esker", "drumlin"],
                        answer: 1,
                        explanation: "Outwash deposits are formed by glacial meltwater, sorting sediments into stratified layers of rounded particles."
                    },
                    {
                        text: "Carbon sequestration in geological sites is an option for",
                        options: ["mitigation", "adaptation", "both of these", "none of these"],
                        answer: 0,
                        explanation: "Geological carbon sequestration is a mitigation strategy to reduce atmospheric CO₂ concentrations."
                    },
                    {
                        text: "Which of these create the best suited conditions for atmosphere on a planet?",
                        options: ["high gravity, high temperature", "low gravity, high temperature", "low gravity, low temperature", "high gravity, low temperature"],
                        answer: 3,
                        explanation: "High gravity helps retain gases, and low temperature reduces their escape, favoring atmospheric stability."
                    },
                    {
                        text: "Which of these are geological regions of India?",
                        options: ["The mountains", "The peninsular block", "The Indo-Ganga-Brahmaputra plain", "all of these"],
                        answer: 3,
                        explanation: "India’s geology is divided into three major regions: mountains, plains, and the peninsular block."
                    },
                    {
                        text: "In Koeppen classification, which is desert precipitation?",
                        options: ["W", "S", "f", "s"],
                        answer: 0,
                        explanation: "‘W’ denotes desert (arid) precipitation in the Köppen climate classification."
                    },
                    {
                        text: "There is more biodiversity in areas with",
                        options: ["less competition, less predation", "less competition, more predation", "more competition, more predation", "more competition, less predation"],
                        answer: 2,
                        explanation: "Moderate levels of competition and predation promote species diversity through ecological balance."
                    },
                    {
                        text: "Supply of medicines is an example of",
                        options: ["provisioning service", "regulating service", "supporting service", "cultural service"],
                        answer: 0,
                        explanation: "Provisioning services provide tangible goods such as food, water, and medicines from ecosystems."
                    },
                    {
                        text: "Which of these is a stochastic factor?",
                        options: ["birth rate", "death rate", "population structure", "environmental fluctuation"],
                        answer: 3,
                        explanation: "Environmental fluctuations are stochastic (random) factors that can unpredictably influence population dynamics."
                    },
                    {
                        text: "“The cost of impacts caused by emission of carbon dioxide” is known as",
                        options: ["cost of carbon", "economic cost of carbon", "social cost of carbon", "cultural cost of carbon"],
                        answer: 2,
                        explanation: "The social cost of carbon measures economic damages associated with emitting one ton of CO₂."
                    },
                    {
                        text: "Which of these is / are example(s) of mitigation measures to mitigate impacts of linear infrastructure on wildlife?",
                        options: ["bridge underpasses", "box culverts", "pipe culverts", "all of these"],
                        answer: 3,
                        explanation: "All these structures serve as wildlife crossings to reduce fragmentation caused by linear infrastructure."
                    },
                    {
                        text: "Mhow can best be categorised as",
                        options: ["mining town", "garrison town", "educational town", "religious town"],
                        answer: 1,
                        explanation: "Mhow is primarily a garrison town, established as a military cantonment during British rule."
                    },
                    {
                        text: "Which of these is / are example(s) of mitigation measures to mitigate impacts of linear infrastructure on wildlife?",
                        options: ["land bridges", "canopy bridges", "glider poles", "all of these"],
                        answer: 3,
                        explanation: "All these structures facilitate wildlife movement over or around linear infrastructure, reducing mortality."
                    }
                ]

            },
        ]
    },
    {
        name: "2024",
        assignments: [
            {
                name: "Assignment 1",
                questions: [
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
                    }
                ]
            },

            {
                name: "Assignment 2",
                questions: [
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
                    }
                ]
            },
            {
                name: "Assignment 3",
                questions: [
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
                    }
                ]
            },
            {
                name: "Assignment 4",
                questions: [
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
                    }
                ]
            },
            {
                name: "Assignment 5",
                questions: [
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
                    }
                ]
            },
            {
                name: "Assignment 6",
                questions: [
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
                    }
                ]
            },
            {
                name: "Assignment 7",
                questions: [
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
                    }
                ]
            },
            {
                name: "Assignment 8",
                questions: [
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
                    }
                ]
            },
            {
                name: "Assignment 9",
                questions: [
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
                    }
                ]
            },

            {
                name: "Assignment 10",
                questions: [
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
                    }
                ]
            },
            {
                name: "Assignment 11",
                questions: [
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
                    }
                ]
            },
            {
                name: "Assignment 12",
                questions: [
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
                    }
                ]
            },
        ]
    },
    {
        name: "2025",
        assignments: [
            {
                name: "Assignment 0",
                questions: [
                    {
                        text: "The movement of individuals away from their place of birth or hatching or seed production into a new habitat or area to survive and reproduce is called",
                        options: [
                            "Dispersal",
                            "Translocation",
                            "Migration",
                            "Drifting"
                        ],
                        answer: 0,
                        explanation: "Dispersal means spreading of organisms to new areas for survival and reproduction. Translocation is artificial movement by humans. Migration is regular, seasonal movement. Drifting is passive movement by air or water."
                    },
                    {
                        text: "The movement of lions across the Gir landscape is an example of",
                        options: [
                            "Secular dispersal",
                            "Jump dispersal",
                            "Drifting",
                            "Diffusion"
                        ],
                        answer: 3,
                        explanation: "Diffusion is the gradual expansion of a species' range over contiguous areas. Secular dispersal is very slow, evolutionary timescale. Jump dispersal is across large, non-contiguous gaps (e.g., islands). Drifting is not active movement."
                    },
                    {
                        text: "The Geographical discipline of Climatology is most closely related to:",
                        options: [
                            "Meteorology",
                            "Geology",
                            "Hydrology",
                            "Pedology"

                        ],
                        answer: 0,
                        explanation: "Climatology is long-term study of weather patterns; meteorology focuses on short-term atmospheric processes. Geology is study of Earth's crust. Hydrology is study of water. Pedology is study of soils."
                    },
                    {
                        text: "The systematic approach to Geography was developed by:",
                        options: [
                            "Karl Ritter",
                            "Alexander von Humboldt",
                            "Rene Descartes",
                            "Eratosthenes"

                        ],
                        answer: 1,
                        explanation: "Humboldt focused on systematic geography—relationships between environment and distribution of phenomena. Karl Ritter developed regional geography. Rene Descartes was a philosopher. Eratosthenes coined the term geography, but not the systematic approach."
                    },
                    {
                        text: "Which of these is true?",
                        options: [
                            "Wildlife conservation is the same as wildlife preservation",
                            "Wildlife conservation is the same as wildlife ecology",
                            "Wildlife conservation is the same as environmentalism",
                            "None of these"
                        ],
                        answer: 3,
                        explanation: "Conservation ≠ Preservation ≠ Environmentalism: Conservation = sustainable use. Preservation = protection without use. Environmentalism = social movement for environmental protection."
                    },
                    {
                        text: "In the word root for 'conservation,' servare means:",
                        options: [
                            "Together",
                            "House",
                            "To keep",
                            "Manage"
                        ],
                        answer: 2,
                        explanation: "Servare (Latin) means to keep or preserve. Together means con. House is eco. Manage is administer."
                    },
                    {
                        text: "“Allowing some places and some creatures to exist without significant human interference” is the definition of:",
                        options: [
                            "Conservation",
                            "Environmentalism",
                            "Preservation",
                            "Ecology"
                        ],
                        answer: 2,
                        explanation: "Preservation = protection of nature from human use or change. Conservation is sustainable use. Environmentalism is activism. Ecology is the scientific study of interactions."
                    },
                    {
                        text: "I tried growing vegetables under my teak plantation, but the vegetable plants died out. I should be concerned about",
                        options: [
                            "Allelopathy",
                            "Autophagy",
                            "Allelophagy",
                            "Autopathy"

                        ],
                        answer: 0,
                        explanation: "Allelopathy is chemical inhibition of one plant by another via toxins. Autophagy is self-digestion. Allelophagy is not a valid term. Autopathy is self-disease."
                    },
                    {
                        text: "The regular, seasonal movement of animals, often along fixed routes is called",
                        options: [
                            "Translocation",
                            "Dispersal",
                            "Migration",
                            "Drifting"

                        ],
                        answer: 2,
                        explanation: "Migration = periodic movement for feeding, breeding, or climate adaptation. Translocation is human relocation. Dispersal is one-way expansion. Drifting is passive movement."
                    },
                    {
                        text: "In the word root for conservation, con stands for",
                        options: [
                            "Together",
                            "To keep",
                            "House",
                            "Manage"
                        ],
                        answer: 0,
                        explanation: "Con (Latin prefix) = together, combined, jointly. To keep is servare. House is eco. Manage is not relevant."
                    }
                ]
            },
            {
                name: "Assignment 1",
                questions: [
                    {
                        text: "“Science of relationships between organisms and their environments” is the definition of:",
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
                        text: "The Trinity explosion of 1945 is taken as the beginning of the",
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
                        text: "Sustainable harvest of resources falls under the category of:",
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
                        text: "The quantum of human impacts can be written as",
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
                        text: "The discipline of Demography is most closely related to:",
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
                        text: "The rate of any biological process is limited by that factor in least amount relative to requirement, so there is a single limiting factor. This is the statement for",
                        options: [
                            "Liebig’s law of the minimum",
                            "Liebig’s law of the maximum",
                            "Shelford’s Law of Tolerance",
                            "Shelford’s Law of Intolerance"
                        ],
                        answer: 0,
                        explanation: "Liebig’s Law of the Minimum: growth depends on the scarcest resource. Law of the Maximum is not a concept; Shelford’s Law of Tolerance talks about tolerance range, not minimum."
                    },
                    {
                        text: "The geographical distribution of a species will be controlled by that environmental factor for which the organism has the narrowest range of tolerance. This is the statement for",
                        options: [
                            "Liebig’s Law of Minimum",
                            "Liebig’s law of the maximum",
                            "Shelford’s Law of Tolerance",
                            "Shelford’s Law of Intolerance"
                        ],
                        answer: 2,
                        explanation: "Shelford’s Law of Tolerance emphasizes environmental limits for species survival. Liebig’s Law deals with limiting nutrients, not range. Law of Maximum is invalid. Law of Intolerance is not a defined ecological law."
                    },
                    {
                        text: "The regional approach to Geography was developed by:",
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
                        text: "In an undisturbed sedimentary strata, bottom layers are older than layers above them. This is known as",
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
                        text: "Within a depositional basin, strata are laterally continuous in all directions till the edge of the basin. This is known as",
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
                        text: "Assemblage of fossils are unique to the time that they lived in, and so can be used to age rocks across a wide geographic distribution. This is known as",
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
                        text: "The points where three or more cirques meet is the definition of",
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
                        text: "Smooth oval-shaped ridge-like features comprised of glacial till, gravel and sand arranged parallel to the direction of ice movement” is the definition of",
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
                        text: "White or colourless hard mineral virtually insoluble in water” is a description of",
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
                        text: "Green or or black coloured inosilicate minerals forming prism or needle-like crystals is a description of",
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
                        text: "Deep, long and wide troughs or basins with very steep concave to vertically dropping high walls as its head and sides is the definition of",
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
                        text: "“Magnesium iron silicate; a primary component of the Earth’s upper mantle” is a description of",
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
                            "mP",
                            "cP",
                            "cT",
                            "mT"
                        ],
                        answer: 0,
                        explanation: "Maritime Polar (mP) forms over cold ocean waters; hence cool and moist. cP is cold and dry (continental origin). cT is hot and dry (formed over deserts). mT is warm and moist (tropical oceans)."
                    },
                    {
                        text: "Which of these air masses is generally cold and dry?",
                        options: [
                            "cP",
                            "mP",
                            "mT",
                            "cT"
                        ],
                        answer: 0,
                        explanation: "Continental Polar (cP) originates over cold landmasses; cold and dry in nature. cT is warm and dry. mP is cool and moist. mT is warm and moist."
                    },
                    {
                        text: "The ISS orbits in which layer?",
                        options: [
                            "Troposphere",
                            "Stratosphere",
                            "Thermosphere",
                            "Mesosphere"

                        ],
                        answer: 2,
                        explanation: "The International Space Station orbits around 400 km altitude within the thermosphere. Troposphere is where weather occurs, too low for ISS. Stratosphere includes ozone layer, still below ISS orbit. Mesosphere lies below thermosphere, too low for satellites."
                    },
                    {
                        text: "The government came up with a regulation that incandescent bulbs be replaced by LED bulbs, so that electricity consumption and release of carbon dioxide from power plants is reduced. In the context of climate change, such an action would be calledRegulation to replace incandescent bulbs with LEDs is an example of",
                        options: [
                            "Adaptation",
                            "Mitigation",
                            "Deceleration",
                            "Maladaptation"
                        ],
                        answer: 1,
                        explanation: "Mitigation aims to reduce greenhouse gas emissions to slow climate change. Adaptation means adjusting to climate impacts, not reducing causes. Deceleration is not a climate term. Maladaptation refers to poor or counterproductive adaptation."
                    },
                    {
                        text: "Surplus seed and sperm banking is an adaptation option to facilitate",
                        options: [
                            "Resilience to climate changes",
                            "Resistance",
                            "Response",
                            "None of these"

                        ],
                        answer: 0,
                        explanation: "Resilience to climate changes – helps species recover from population loss and adapt to environmental stress. Resistance means avoiding change, not recovering from it. Response is general; doesn’t imply long-term recovery. None of these is incorrect as resilience fits precisely."
                    },
                    {
                        text: "The classical period for taking climate averages is",
                        options: [
                            "30 years",
                            "20 years",
                            "40 years",
                            "10 years"
                        ],
                        answer: 0,
                        explanation: "30 years – as per World Meteorological Organization (WMO) standard for climate normals. 10 and 20 years are too short, 40 years is longer than standard."
                    },
                    {
                        text: "Noctilucent clouds are present in which layer?",
                        options: [
                            "Troposphere",
                            "Mesosphere",
                            "Stratosphere",
                            "Thermosphere"
                        ],
                        answer: 1,
                        explanation: "Mesosphere – highest known clouds, form from ice crystals in the mesosphere. Troposphere hosts regular weather clouds. Stratosphere contains ozone but no noctilucent clouds. Thermosphere is too hot and thin for cloud formation."
                    },
                    {
                        text: "Because of climate change, Mudumalai Tiger Reserve is suffering from frequent droughts. The management has built several artificial water holes for animals, and fills them up regularly with tankers. In the context of climate change, such an action would be called",
                        options: [
                            "Mitigation",
                            "Deceleration",
                            "Adaptation",
                            "Maladaptation"

                        ],
                        answer: 2,
                        explanation: "Adaptation – adjusting to the impacts of climate change to maintain ecosystem function. Mitigation deals with emission reduction, not local coping. Deceleration is not a valid climate term. Maladaptation would worsen vulnerability, not reduce it."
                    },
                    {
                        text: "Which layer is home to the ozone layer?",
                        options: [
                            "Stratosphere",
                            "Troposphere",
                            "Mesosphere",
                            "Thermosphere"

                        ],
                        answer: 0,
                        explanation: "Stratosphere contains the ozone layer that absorbs harmful UV radiation. Troposphere has weather but little ozone. Mesosphere is above ozone layer, little ozone present. Thermosphere contains ionized gases, not ozone."
                    },
                    {
                        text: "Most weather phenomena occur in",
                        options: [
                            "Troposphere",
                            "Stratosphere",
                            "Mesosphere",
                            "Thermosphere"

                        ],
                        answer: 0,
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
                            "Isopycnal curves",
                            "Isotherm",
                            "Isobuoyant"

                        ],
                        answer: 1,
                        explanation: "Isopycnal curves – “pycnal” means density; these lines connect points of equal density in the ocean. Isohaline is equal salinity. Isotherm is equal temperature. Isobuoyant is not a standard oceanographic term."
                    },
                    {
                        text: "Which of these is a minor feature of the ocean floor?",
                        options: [
                            "Continental shelf",
                            "Guyot",
                            "Continental slope",
                            "Abyssal plain"

                        ],
                        answer: 1,
                        explanation: "Guyot – flat-topped seamounts; smaller features compared to major oceanic structures. Continental shelf, slope, and abyssal plain are major features."
                    },
                    {
                        text: "“Mountains with pointed summits rising from the sea floor, but not reaching the surface of the ocean” is a description of",
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
                            "Abyssal plain",
                            "Guyot"

                        ],
                        answer: 2,
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
                        text: "“Deep valleys, often cutting across continental shelves and slopes” is a description of",
                        options: [
                            "Oceanic trench",
                            "Submarine canyon",
                            "Mid-oceanic ridge",
                            "Guyot",

                        ],
                        answer: 1,
                        explanation: "Submarine canyon – steep-sided underwater valleys carved by turbidity currents. Oceanic trench is found in deep ocean basins. Mid-oceanic ridge is an underwater mountain system. Guyot is a flat-topped volcanic mountain."
                    },
                    {
                        text: "Continental slope has a gradient of",
                        options: [
                            "0–1°",
                            "1–2°",
                            "2–5 degrees",
                            "5–10°"

                        ],
                        answer: 2,
                        explanation: "2–5 degrees is the typical gradient for continental slope. 0–1° and 1–2° are too gentle, 5–10° is steeper than typical."
                    },
                    {
                        text: "Which of these is not a prominent tidal pattern?",
                        options: [
                            "Diurnal",
                            "Mixed diurnal",
                            "Mixed semidiurnal",
                            "Semidiurnal"

                        ],
                        answer: 1,
                        explanation: "Mixed diurnal is not a recognized tidal type. Diurnal is one high and one low tide per day. Mixed semidiurnal is two highs and two lows of unequal height. Semidiurnal is two nearly equal highs and lows daily."
                    },
                    {
                        text: "“Relatively steep-sided, narrow, deep basins” is a description of",
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
                        text: "In the sea, a layer where the temperature decreases rapidly from the mixed upper layer to the cold deeper layer is called",
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
                            "h",
                            "k",
                            "a",
                            "b"
                        ],
                        answer: 1,
                        explanation: "‘k’ denotes cold arid (mean annual temperature below 18°C). ‘h’ indicates hot arid (above 18°C). ‘a’ is hot summer type in humid climates. ‘b’ is warm summer, not arid."
                    },
                    {
                        text: "In Köppen classification, which is winter dry precipitation?",
                        options: [
                            "S",
                            "w",
                            "f",
                            "s"
                        ],
                        answer: 1,
                        explanation: "‘w’ represents dry winter climate (most rainfall in summer). ‘S’ stands for steppe/semi-arid. ‘f’ is fully humid, no dry season. ‘s’ is dry summer."
                    },
                    {
                        text: "In Köppen classification, which is cool summer temperature?",
                        options: [
                            "d",
                            "F",
                            "c",
                            "T"
                        ],
                        answer: 2,
                        explanation: "‘c’ means cool summer, warmest month <22°C but at least 4 months >10°C. ‘d’ is very cold winter (continental/subarctic). ‘F’ is no dry season. ‘T’ is tundra climate, extremely cold."
                    },
                    {
                        text: "Correct sequence of seasons in India",
                        options: [
                            "Hot weather season → South-West monsoon season → Retreating monsoon season → Cold weather season",
                            "Hot weather season → Retreating monsoon season → South-West monsoon season → Cold weather season",
                            "Hot weather season → Cold weather season → South-West monsoon season → Retreating monsoon season",
                            "Hot weather season → South-West monsoon season → Cold weather season → Retreating monsoon season"
                        ],
                        answer: 0,
                        explanation: "Matches India’s actual seasonal pattern (March–May → June–Sept → Oct–Nov → Dec–Feb). Other options mix up or reverse the monsoon order."
                    },
                    {
                        text: "In Köppen classification, which is monsoonal precipitation?",
                        options: [
                            "W",
                            "m",
                            "S",
                            "s"
                        ],
                        answer: 1,
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
                            "Large size",
                            "Ability to grow on bare rocks",
                            "Tolerance to extreme conditions",
                            "Short life span"

                        ],
                        answer: 0,
                        explanation: "Pioneer species (like lichens, mosses) are small, hardy, and fast-growing organisms that first colonize barren areas. Large size is not a characteristic."
                    },
                    {
                        text: "“groups of actually or potentially interbreeding natural populations, which are reproductively isolated from other such groups” is a definition of",
                        options: [
                            "Species",
                            "Cells",
                            "Ecosystems",
                            "Biomes"

                        ],
                        answer: 0,
                        explanation: "This is the Biological Species Concept by Ernst Mayr. Cells are the basic unit of life, not population-level concept. Ecosystems include abiotic + biotic components. Biomes are large ecological regions."
                    },
                    {
                        text: "Mechanical action of ocean waves is an example of",
                        options: [
                            "Chemical weathering",
                            "Physical weathering",
                            "Biological weathering",
                            "None of the above",

                        ],
                        answer: 1,
                        explanation: "Physical weathering breaks rocks by mechanical force (abrasion, impact) without chemical change. Chemical weathering alters mineral composition. Biological weathering is caused by living organisms."
                    },
                    {
                        text: "The climax near Tindni village is being controlled by disturbance by cattle. This is an example of",
                        options: [
                            "Climatic climax",
                            "Edaphic climax",
                            "Disclimax",
                            "Catastrophic climax"

                        ],
                        answer: 2,
                        explanation: "Disclimax occurs when human or animal interference (like grazing) prevents the natural climax community. Climatic climax is determined by regional climate, not interference. Edaphic climax is determined by soil conditions. Catastrophic climax is due to disasters."
                    },
                    {
                        text: "Carbonation is an example of",
                        options: [
                            "Physical weathering",
                            "Biological weathering",
                            "Chemical weathering",
                            "None"

                        ],
                        answer: 2,
                        explanation: "Carbonation involves CO₂ + water forming carbonic acid, which dissolves rocks like limestone (CaCO₃)."
                    },
                    {
                        text: "In soil profile, ‘C’ refers to",
                        options: [
                            "Organic surface layer",
                            "Substratum layer",
                            "Topsoil",
                            "Subsoil"

                        ],
                        answer: 1,
                        explanation: "The C-horizon is the partially weathered parent material, below A (topsoil) and B (subsoil)."
                    },
                    {
                        text: "A climax caused by wildfires is an example of",
                        options: [
                            "Climatic climax",
                            "Catastrophic climax",
                            "Edaphic climax",
                            "Disclimax",

                        ],
                        answer: 1,
                        explanation: "Catastrophic climax results when sudden large-scale disturbances like fire or storm reset succession."
                    },
                    {
                        text: "Regur is a term for",
                        options: [
                            "Black cotton soil",
                            "Alluvial soil",
                            "Saline soil",
                            "Red and yellow soil"

                        ],
                        answer: 0,
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
                        text: "The fig tree bears fruits in times when animals do not have much access to food. In this context, it would be a good example of",
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
                        text: "The “subset of physical and biotic environmental factors that permit an animal (or plant) to survive and reproduce” is the definition of",
                        options: [
                            "Ecosystem",
                            "Habitat",
                            "Biome",
                            "Biosphere"

                        ],
                        answer: 1,
                        explanation: "A habitat provides all conditions and resources necessary for an organism’s survival and reproduction. Ecosystem includes interactions between biotic and abiotic components. Biome is a large ecological region. Biosphere is the global sum of all ecosystems."
                    },
                    {
                        text: "Which of these correctly represents the process of habitat fragmentation and loss?",
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
                            "Regulating service",
                            "Cultural service"

                        ],
                        answer: 2,
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
                        text: "The tiger has a home range of several square kilometres, regulates the ecosystem through controlling herbivore populations and trophic cascades, and people come to tiger reserves to watch tigers. Thus, the tiger can be called as",
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
                        text: "People come to Sessa orchid sanctuary in Arunachal Pradesh to witness orchids, which in this context would be classified as",
                        options: [
                            "Umbrella species",
                            "Flagship species",
                            "Keystone species",
                            "Extinct species"

                        ],
                        answer: 1,
                        explanation: "Flagship species are charismatic organisms that attract public attention and conservation funding. Umbrella species indirectly protect others by wide habitat needs. Keystone species are ecologically crucial, not necessarily attractive. Extinct species no longer exist."
                    },
                    {
                        text: "Captive breeding is an example of",
                        options: [
                            "In-situ conservation",
                            "In-situ preservation",
                            "Ex-situ conservation",
                            "Ex-situ preservation"
                        ],
                        answer: 2,
                        explanation: "Ex-situ means “outside the natural habitat” — like zoos, botanical gardens, gene banks. In-situ is protecting species in their natural habitats. Preservation implies non-interference, not active conservation."
                    },
                    {
                        text: "We prefer those areas for the creation of a conservation reserve where the level of threat is",
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
                            "Population grows in geometric progression, food supply increases in arithmetic progression",
                            "Population grows in geometric progression, food supply increases in geometric progression",
                            "Population grows in arithmetic progression, food supply increases in arithmetic progression",
                            "Population grows in arithmetic progression, food supply increases in geometric progression"

                        ],
                        answer: 0,
                        explanation: "Malthus proposed that population grows exponentially, while food supply grows linearly, leading to scarcity. Both geometric is unrealistic; food production is limited by land/resources. Both arithmetic ignores exponential population potential. Population arithmetic, food geometric is opposite of Malthus’ theory."
                    },
                    {
                        text: "Which of these is commonly observed during humanising of nature?",
                        options: [
                            "Possibilism",
                            "Environmental determinism",
                            "Neodeterminism",
                            "Stop and go determinism"

                        ],
                        answer: 0,
                        explanation: "Possibilism suggests humans modify and adapt the environment using technology and culture. Environmental determinism is nature controls humans. Neodeterminism is a balance. Stop and go determinism is a modern variant."
                    },
                    {
                        text: "Which of these is a pillar of sustainability",
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
                        text: "Which of these is commonly observed in primitive societies?",
                        options: [
                            "Possibilism",
                            "Environmental determinism",
                            "Neodeterminism",
                            "Stop and go determinism"

                        ],
                        answer: 1,
                        explanation: "Primitive societies were strongly controlled by nature, climate, and physical surroundings (environmental determinism)."
                    },
                    {
                        text: "The demographic transition sees a society move from",
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
                        text: "The logistic growth equation curve is",
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
                        text: "Which of these is a preventive check according to Malthus?",
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
                        text: "Which of these is not a pillar of sustainability?",
                        options: [
                            "Environmental sustainability",
                            "Economic sustainability",
                            "Trans-boundary sustainability",
                            "Social sustainability"

                        ],
                        answer: 2,
                        explanation: "The recognized three pillars are social, economic, and environmental. Trans-boundary is not a pillar."
                    },
                    {
                        text: "The book \"An Essay on the Principle of Population\" was written by",
                        options: [
                            "Darwin",
                            "Spencer",
                            "Thomas Malthus",
                            "Owens"

                        ],
                        answer: 2,
                        explanation: "Published in 1798, the book warned about unchecked population growth leading to famine and poverty. Darwin developed theory of evolution. Spencer coined “survival of the fittest”. Owens was a social reformer."
                    },
                    {
                        text: "Which of these is a positive check according to Malthus?",
                        options: [
                            "Late marriage",
                            "War",
                            "Celibacy",
                            "Moral restraint"

                        ],
                        answer: 1,
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
                            "Stock resources",
                            "Potential resources",
                            "Actual resources",
                            "Reserve resources"

                        ],
                        answer: 0,
                        explanation: "Stock resources are those exist in nature but cannot be used currently due to technology or economics. Potential resources can be developed in future, but stock is not yet usable. Actual resources are currently in use. Reserve resources are portion of actual resources available for future use."
                    },
                    {
                        text: "Which of these is the largest source of ammonia (NH3) in the atmosphere?",
                        options: [
                            "Mineral fertiliser",
                            "Crops and decomposition",
                            "Animal manure",
                            "Human waste"

                        ],
                        answer: 2,
                        explanation: "Livestock waste releases ammonia directly into the air, making it the major natural source. Mineral fertiliser is a secondary contribution. Crops and decomposition are smaller sources. Human waste is a minor contributor."
                    },
                    {
                        text: "“The part of actual resources that can be developed profitably in the future” is a definition of”",
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
                        text: "Timber from forests that is being harvested can be categorised under",
                        options: [
                            "Potential resources",
                            "Actual resources",
                            "Reserve resources",
                            "Stock resources"

                        ],
                        answer: 1,
                        explanation: "Resources currently in use are classified as actual. Potential resources are not yet used. Reserve resources are actual resources set aside for future. Stock resources exist but cannot be used now."
                    },
                    {
                        text: "Rain gardens are primarily meant to",
                        options: [
                            "Increase recharge to groundwater",
                            "Reduce water usage",
                            "Protect existing water sources",
                            "Increase flow to streams"

                        ],
                        answer: 0,
                        explanation: "Rain gardens capture runoff, allowing water to percolate into aquifers. Reduce water usage is an indirect effect. Protect existing water sources is not the primary function. Increase flow to streams is the opposite."
                    },
                    {
                        text: "Oil that has not been drilled can be categorised under",
                        options: [
                            "Potential resources",
                            "Actual resources",
                            "Reserve resources",
                            "Stock resources",

                        ],
                        answer: 0,
                        explanation: "Potential resources are known to exist but not yet exploited. Actual resources are currently in use. Reserve resources are set aside for future exploitation. Stock resources cannot be used now."
                    },
                    {
                        text: "Which of these is the largest source of nitrogen oxides in the atmosphere?",
                        options: [
                            "Electricity generation",
                            "Mobile sources",
                            "Industrial processes",
                            "Waste disposal"
                        ],
                        answer: 1,
                        explanation: "The largest source of nitrogen oxides (NOx) in the atmosphere is mobile sources, primarily from vehicles with internal combustion engines. These emit the majority of NOx pollutants. Electricity generation and industrial processes are also significant sources, but to a lesser extent. Waste disposal contributes a relatively small amount to NOx emissions."
                    },
                    {
                        text: "“Those resources that are currently being used after surveying, quantification and qualification” is a definition of",
                        options: [
                            "Potential resources",
                            "Reserve resources",
                            "Actual resources",
                            "Stock resources"

                        ],
                        answer: 2,
                        explanation: "These are resources under active utilization. Potential resources are not yet used. Reserve resources are set aside for future. Stock resources exist but are not usable yet."
                    },
                    {
                        text: "“Those resources that may be used in the future” is a definition of",
                        options: [
                            "Actual resources",
                            "Reserve resources",
                            "Potential resources",
                            "Stock resources"

                        ],
                        answer: 2,
                        explanation: "Potential resources can be exploited in the future once technology or economics allow. Actual resources are already in use. Reserve resources are a subset of actual resources for future use. Stock resources cannot be used with current technology."
                    },
                    {
                        text: "Low concentration ores come in the category of",
                        options: [
                            "Potential resources",
                            "Reserve resources",
                            "Actual resources",
                            "Stock resources"

                        ],
                        answer: 1,
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
                            "Administrative town",
                            "Industrial town",
                            "Transport town",
                            "Commercial town"
                        ],
                        answer: 0,
                        explanation: "New Delhi is primarily the capital city, hosting central government offices. Industrial, transport, and commercial activities exist, but administration dominates."
                    },
                    {
                        text: "Which of these is a factor governing barrier effect of roads?",
                        options: [
                            "Traffic intensity",
                            "Speed of vehicles",
                            "Driver sensitivity",
                            "All of these"
                        ],
                        answer: 3,
                        explanation: "Barrier effect depends on how busy the road is, speed of vehicles, and human response to animals. Choosing any single factor ignores the combined effect."
                    },
                    {
                        text: "Which of these is a factor governing barrier effect of roads?",
                        options: [
                            "presence and location of animal crossingse",
                            " movement pattern of species",
                            " species specific preference of road use",
                            "All of these"
                        ],
                        answer: 3,
                        explanation: "Wildlife road use is influenced by crossings, movement behaviour, and species-specific habits. Single factors alone are insufficient."
                    },
                    {
                        text: "Varanasi can best be categorised as",
                        options: [
                            "Religious town",
                            "Mining town",
                            "Garrison town",
                            "Educational town"

                        ],
                        answer: 0,
                        explanation: "Varanasi is famous for temples and pilgrimage. Mining and garrison roles are not significant. Educational is secondary; religious tourism dominates."
                    },
                    {
                        text: "“The ability to produce a good using fewer inputs than another producer”is ",
                        options: [
                            "Comparative advantage",
                            "Absolute advantage",
                            "Production advantage",
                            "Resource advantage"

                        ],
                        answer: 1,
                        explanation: "Absolute advantage = higher productivity with same resources. Comparative advantage is based on lower opportunity cost, not absolute efficiency. Production/resource advantage are not standard economic terms."
                    },
                    {
                        text: "The price of a good that prevails in the world market for that good” is the definition of",
                        options: [
                            "Export price",
                            "World price",
                            "Import price",
                            "Domestic price"

                        ],
                        answer: 1,
                        explanation: "World price reflects global market equilibrium. Export price is when selling abroad, may differ from world price. Import price is price paid when buying abroad. Domestic price is internal market price."
                    },
                    {
                        text: "Visakhapatnam can best be categorised as",
                        options: [
                            "Administrative town",
                            "Industrial town",
                            "Transport town",
                            "Commercial town"

                        ],
                        answer: 2,
                        explanation: "Visakhapatnam is a major port city, facilitating trade and movement of goods. Administrative, industrial, and commercial roles exist but transport dominates."
                    },
                    {
                        text: "Which of these is / are example(s) of mitigation measures to mitigate impacts of linear infrastructure on wildlife?",
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
                            "Industrial town",
                            "Administrative town",
                            "Transport town",
                            "Commercial town",

                        ],
                        answer: 0,
                        explanation: "Bhilai is known for steel plants and heavy industries. Administrative, transport, and commercial roles are secondary."
                    },
                    {
                        text: "“The ability to produce a good at a lower opportunity cost than another producer” is a definition of",
                        options: [
                            "Real advantage",
                            "Comparative advantage",
                            "Monetary advantage",
                            "Opportunity advantage"

                        ],
                        answer: 1,
                        explanation: "Comparative advantage = lower sacrifice of other goods for production, forms basis of trade. Real/Monetary/Opportunity advantage are not standard economic definitions."
                    }
                ]
            },
            {
                name: "Assignment 12",
                questions: [
                    {
                        text: "The time of flight for LiDAR is 0.00001 sec. Find the distance of the object from the instrument.",
                        options: [
                            "500 m",
                            "1000 m",
                            "1500 m",
                            "2000 m"

                        ],
                        answer: 2,
                        explanation: "Distance = (Speed of light × Time) ÷ 2 = (3 × 10⁸ × 0.00001) ÷ 2 = 1500 m. Other options are calculation mismatches."
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
                        text: "“The situation of people, infrastructure, housing, production capacities and other tangible human assets located in hazard-prone areas.” is a definition for",
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
                        text: "“A process, phenomenon or human activity that may cause loss of life, injury or other health impacts, property damage, social and economic disruption or environmental degradation.” is a definition for",
                        options: [
                            "Exposure",
                            "Vulnerability",
                            "Hazard",
                            "Disaster"

                        ],
                        answer: 2,
                        explanation: "Hazards are potentially damaging events. Exposure is presence in hazard-prone area. Vulnerability is susceptibility to harm. Disaster is realized damage from hazard."
                    },
                    {
                        text: "“A serious disruption of the functioning of a community or a society at any scale due to hazardous events interacting with conditions of exposure, vulnerability and capacity, leading to one or more of the following: human, material, economic and environmental losses and impacts.” is a definition for",
                        options: [
                            "Hazard",
                            "Disaster",
                            "Exposure",
                            "Vulnerability",

                        ],
                        answer: 1,
                        explanation: "The Disaster occurs when hazard interacts with exposure and vulnerability, causing losses. Hazard is only the threat. Exposure is objects or people at risk. Vulnerability is degree of susceptibility."
                    },
                    {
                        text: "“The combination of all the strengths, attributes and resources available within an organisation, community or society to manage and reduce disaster risks and strengthen resilience.” is a definition for",
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
                            "Green light",
                            "Far infrared",
                            "Near infrared",
                            "Orange"

                        ],
                        answer: 0,
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
                        text: "Which of these is not a consumptive value?",
                        options: [
                            "Timber",
                            "Education",
                            "Firewood",
                            "Non-timber forest products"

                        ],
                        answer: 1,
                        explanation: "Consumptive values are goods extracted or used directly, like timber, firewood, NTFPs. Education is not a consumptive value."
                    },
                    {
                        text: "The frequency of flyovers is an indicator of",
                        options: [
                            "Temporal resolution",
                            "Spatial resolution",
                            "Spectral resolution",
                            "Radiometric resolution"

                        ],
                        answer: 0,
                        explanation: "Temporal resolution = how often a satellite revisits a location. Spatial resolution is pixel size on ground. Spectral is wavelength sensitivity. Radiometric is ability to detect slight differences in energy."
                    }
                ]
            },
            // Add assignments for "Second Year" (if any)
        ]
    }
    // More years can be added, following this structure
];

// --- Helper Shuffle Function ---
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// --- Populate year dropdown ---
const yearSelect = document.getElementById('year');
years.forEach((yearObj, i) => {
    const opt = document.createElement('option');
    opt.value = i;
    opt.textContent = yearObj.name;
    yearSelect.appendChild(opt);
});

yearSelect.onchange = () => {
    if (yearSelect.value === "") {
        document.getElementById('assignment-select').style.display = 'none';
        return;
    }
    const yearIdx = parseInt(yearSelect.value);
    const assignmentSelectDiv = document.getElementById('assignment-select');
    const assignmentSelect = document.getElementById('assignment');
    assignmentSelectDiv.style.display = 'block';
    assignmentSelect.innerHTML = '<option value="">-- Select Assignment --</option>';
    years[yearIdx].assignments.forEach((a, i) => {
        const opt = document.createElement('option');
        opt.value = i;
        opt.textContent = a.name;
        assignmentSelect.appendChild(opt);
    });
    document.getElementById('quiz').innerHTML = '';
    document.getElementById('result').innerHTML = '';
};

document.getElementById('load-assignment').onclick = () => {
    const yearIdx = parseInt(yearSelect.value);
    const assignVal = document.getElementById('assignment').value;
    if (assignVal === "") return;
    const assignIdx = parseInt(assignVal);
    loadAssignmentJumbled(yearIdx, assignIdx);
};

function loadAssignmentJumbled(yearIdx, assignIdx) {
    const quizDiv = document.getElementById('quiz');
    const resultDiv = document.getElementById('result');
    quizDiv.innerHTML = '';
    resultDiv.innerHTML = '';
    // Deep copy assignment object to avoid modifying original
    const assignment = JSON.parse(JSON.stringify(years[yearIdx].assignments[assignIdx]));

    // Shuffle questions
    shuffleArray(assignment.questions);

    // Shuffle options in each question, track new correct answer index
    assignment.questions.forEach(q => {
        const optionIndices = q.options.map((_, idx) => idx);
        shuffleArray(optionIndices);
        const shuffledOptions = optionIndices.map(idx => q.options[idx]);
        const shuffledAnswer = optionIndices.indexOf(q.answer);
        q.options = shuffledOptions;
        q.answer = shuffledAnswer;
    });

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
    document.getElementById('submit-quiz').onclick = () => submitQuizJumbled(assignment);
}

function submitQuizJumbled(assignment) {
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
        let optionsHtml = '<ul style="list-style-type:none; padding-left:0;">';
        q.options.forEach((opt, idx) => {
            let optionLetter = String.fromCharCode(97 + idx);
            let style = '';
            if (idx === q.answer) {
                style = 'color: green; font-weight: 600;';
            }
            if (idx === selected && selected !== q.answer) {
                style = 'color: red; font-weight: 600;';
            }
            optionsHtml += `<li style="${style}">${optionLetter}) ${opt}</li>`;
        });
        optionsHtml += '</ul>';

        explanations += `
      <div>
        <b>Q${qi + 1}:</b> ${q.text}<br>
        <span class="${correct ? 'correct' : 'incorrect'}">
          ${correct ? 'Correct' : 'Incorrect'}
        </span><br>
        ${optionsHtml}
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
