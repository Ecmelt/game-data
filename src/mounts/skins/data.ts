export interface GameDataMountSkin {
  /** The mount skin id */
  id: number

  /** The mount skin name */
  name: string

  /** The unlock items for the mount skin */
  unlock_items: Array<number>
}

// prettier-ignore
const GAME_DATA_MOUNT_SKINS: Array<GameDataMountSkin> = [
  // -- GENERATE-START --
  { id: 1, name: 'Raptor', unlock_items: [] },
  { id: 2, name: 'Skimmer', unlock_items: [] },
  { id: 3, name: 'Springer', unlock_items: [] },
  { id: 4, name: 'Griffon', unlock_items: [] },
  { id: 6, name: 'Jackal', unlock_items: [] },
  { id: 12, name: 'Starscale', unlock_items: [88200] },
  { id: 13, name: 'Spooky Raptor', unlock_items: [85484] },
  { id: 14, name: 'Spooky Jackal', unlock_items: [85483] },
  { id: 15, name: 'Spooky Springer', unlock_items: [85472] },
  { id: 16, name: 'Spooky Griffon', unlock_items: [85423] },
  { id: 17, name: 'Resplendent Avialan', unlock_items: [85491] },
  { id: 19, name: 'Spooky Skimmer', unlock_items: [85444] },
  { id: 20, name: 'Windy Spot', unlock_items: [85580] },
  { id: 21, name: 'Coastal Spiketail', unlock_items: [85580] },
  { id: 22, name: 'Polished Stone', unlock_items: [85580] },
  { id: 23, name: 'Fire Pinion', unlock_items: [85580] },
  { id: 24, name: 'Storm Ridge', unlock_items: [85580] },
  { id: 25, name: 'Spotted Sylph', unlock_items: [85580] },
  { id: 26, name: 'Oceanic Ray', unlock_items: [85580] },
  { id: 27, name: 'Starbound', unlock_items: [85580] },
  { id: 28, name: 'Banded Mystic', unlock_items: [85580] },
  { id: 29, name: 'Savannah Monitor', unlock_items: [85580] },
  { id: 30, name: 'Pyroclast', unlock_items: [85580] },
  { id: 31, name: 'Arctic Jerboa', unlock_items: [85580] },
  { id: 32, name: 'Canyon Spiketail', unlock_items: [85580] },
  { id: 33, name: 'Twin Sands', unlock_items: [85580] },
  { id: 34, name: 'Highlands Harrier', unlock_items: [85580] },
  { id: 35, name: 'Striped Tri-horn', unlock_items: [85580] },
  { id: 36, name: 'Bright Ringfin', unlock_items: [85580] },
  { id: 37, name: 'Oasis Skate', unlock_items: [85580] },
  { id: 38, name: 'Elonian Jackalope', unlock_items: [85580] },
  { id: 39, name: 'Crowned Ancient', unlock_items: [85580] },
  { id: 40, name: 'Clouded Corvus', unlock_items: [85580] },
  { id: 41, name: 'Primal Hare', unlock_items: [85580] },
  { id: 42, name: 'Tawny Hare', unlock_items: [85580] },
  { id: 43, name: 'Desert Lop', unlock_items: [85580] },
  { id: 44, name: 'River Moth Wing', unlock_items: [85580] },
  { id: 45, name: 'Spined Longtail', unlock_items: [85580] },
  { id: 46, name: 'Reforged Warhound', unlock_items: [85538] },
  { id: 47, name: 'Dajkah Lantern', unlock_items: [85580] },
  { id: 48, name: 'Flamelander', unlock_items: [85580] },
  { id: 49, name: 'Stardust', unlock_items: [85580] },
  { id: 50, name: 'Badlands Stalker', unlock_items: [85580] },
  { id: 52, name: 'Cozy Wintersday Skimmer', unlock_items: [85564] },
  { id: 53, name: 'Cozy Wintersday Griffon', unlock_items: [85541] },
  { id: 56, name: 'Cozy Wintersday Jackal', unlock_items: [85600] },
  { id: 57, name: 'Umbral Demon', unlock_items: [86690] },
  { id: 58, name: 'Cozy Wintersday Raptor', unlock_items: [85524] },
  { id: 60, name: 'Cozy Wintersday Springer', unlock_items: [85567] },
  { id: 61, name: 'Summit Wildhorn', unlock_items: [86766] },
  { id: 62, name: 'Grand Lion', unlock_items: [86899] },
  { id: 66, name: 'Branded Springer', unlock_items: [87246] },
  { id: 68, name: 'Branded Jackal', unlock_items: [87041] },
  { id: 70, name: 'Branded Skimmer', unlock_items: [87296] },
  { id: 75, name: 'Branded Griffon', unlock_items: [87273] },
  { id: 76, name: 'Branded Raptor', unlock_items: [87088] },
  { id: 77, name: 'Istani Bald', unlock_items: [87368] },
  { id: 78, name: 'Issnur Long Hair', unlock_items: [87368] },
  { id: 79, name: 'Sargol Thunderer', unlock_items: [87368] },
  { id: 80, name: 'Sky Bandit', unlock_items: [87368] },
  { id: 81, name: 'Striped Jarin', unlock_items: [87368] },
  { id: 82, name: 'Primeval', unlock_items: [87368] },
  { id: 83, name: 'Oceanic Broadtail', unlock_items: [87368] },
  { id: 84, name: 'Primus Beta', unlock_items: [87368] },
  { id: 85, name: 'Stardrift', unlock_items: [87368] },
  { id: 86, name: 'Lahtenda Bog Hunter', unlock_items: [87368] },
  { id: 87, name: 'Primeval', unlock_items: [87368] },
  { id: 88, name: 'Dzalana Ice Scale', unlock_items: [87368] },
  { id: 89, name: 'Iceflow', unlock_items: [87368] },
  { id: 90, name: 'Ceylon Cut', unlock_items: [87368] },
  { id: 91, name: 'Exalted Sky Sentry', unlock_items: [87368] },
  { id: 92, name: 'Exo-Suit Springer', unlock_items: [87483] },
  { id: 93, name: 'Exo-Suit Jackal', unlock_items: [87481] },
  { id: 94, name: 'Exo-Suit Raptor', unlock_items: [87482] },
  { id: 95, name: 'Exo-Suit Griffon', unlock_items: [87480] },
  { id: 96, name: 'Exo-Suit Skimmer', unlock_items: [87488] },
  { id: 97, name: 'Shrine Guardian', unlock_items: [87539] },
  { id: 98, name: 'Awakened Springer', unlock_items: [87570] },
  { id: 99, name: 'Awakened Raptor', unlock_items: [87567] },
  { id: 100, name: 'Awakened Griffon', unlock_items: [87566] },
  { id: 101, name: 'Awakened Skimmer', unlock_items: [87573] },
  { id: 102, name: 'Awakened Jackal', unlock_items: [87572] },
  { id: 103, name: 'Roller Beetle', unlock_items: [] },
  { id: 104, name: 'Tremor Armadillo', unlock_items: [88111] },
  { id: 105, name: 'Funerary Scarab', unlock_items: [88200] },
  { id: 106, name: 'Kourna Jackrabbit', unlock_items: [88200] },
  { id: 107, name: 'Mirror Masked', unlock_items: [88200] },
  { id: 108, name: 'Primeval', unlock_items: [88200] },
  { id: 109, name: 'Storm Chaser', unlock_items: [88200] },
  { id: 110, name: 'Tufted Night Eye', unlock_items: [88200] },
  { id: 111, name: 'Ntouka Snakescale', unlock_items: [88200] },
  { id: 112, name: 'Arid Hammerhead', unlock_items: [88200] },
  { id: 113, name: 'Iceberg', unlock_items: [88200] },
  { id: 114, name: 'Colossal Ladybird', unlock_items: [88200] },
  { id: 115, name: 'Northern Feather Wing', unlock_items: [88200] },
  { id: 116, name: 'Trailblazer', unlock_items: [88200] },
  { id: 117, name: 'Dune Mastiff', unlock_items: [88200] },
  { id: 118, name: 'Painted Mesa', unlock_items: [88200] },
  { id: 126, name: 'Dreadnought', unlock_items: [88775] },
  { id: 129, name: 'Nightfang', unlock_items: [89003] },
  { id: 130, name: 'Mad Realm Skimmer', unlock_items: [89069] },
  { id: 131, name: 'Mad Realm Jackal', unlock_items: [89022] },
  { id: 132, name: 'Mad Realm Griffon', unlock_items: [89001] },
  { id: 133, name: 'Mad Realm Raptor', unlock_items: [89068] },
  { id: 134, name: 'Mad Realm Springer', unlock_items: [89004] },
  { id: 136, name: 'Auric Salamander', unlock_items: [89325] },
  { id: 137, name: 'Banded Wave Fin', unlock_items: [89325] },
  { id: 138, name: 'Luminous Prowler', unlock_items: [89325] },
  { id: 139, name: 'Krytan Lop', unlock_items: [89325] },
  { id: 140, name: 'Timberland Badged', unlock_items: [89325] },
  { id: 141, name: 'Snow Stalker', unlock_items: [89325] },
  { id: 142, name: 'Southsun Torpedo', unlock_items: [89325] },
  { id: 143, name: 'Exalted Ley Hunter', unlock_items: [89325] },
  { id: 144, name: 'Jagged Kournan', unlock_items: [89325] },
  { id: 145, name: 'Alloyed Construct', unlock_items: [89325] },
  { id: 146, name: 'Sand Souled', unlock_items: [89325] },
  { id: 147, name: 'Striped Bahdzan', unlock_items: [89325] },
  { id: 148, name: 'Starfall', unlock_items: [89325] },
  { id: 149, name: 'Liminal Moorhound', unlock_items: [89325] },
  { id: 150, name: 'Shiverpeaks Pileated', unlock_items: [89325] },
  { id: 152, name: 'Sun Temple Gecko', unlock_items: [89425] },
  { id: 153, name: 'Shiverpeaks Jackal', unlock_items: [89668] },
  { id: 154, name: 'Shiverpeaks Skimmer', unlock_items: [89494] },
  { id: 155, name: 'Shiverpeaks Griffon', unlock_items: [89844] },
  { id: 157, name: 'Shiverpeaks Springer', unlock_items: [89680] },
  { id: 158, name: 'Shiverpeaks Raptor', unlock_items: [89861] },
  { id: 161, name: 'Warclaw', unlock_items: [] },
  { id: 162, name: 'Assault Warclaw', unlock_items: [90029] },
  { id: 163, name: 'Outrider Warclaw', unlock_items: [90040] },
  { id: 164, name: 'Branded Warclaw', unlock_items: [90063] },
  { id: 165, name: 'Vanguard Warclaw', unlock_items: [90065] },
  { id: 166, name: 'Embermane Warclaw', unlock_items: [90076] },
  { id: 168, name: 'Magnificent Hummingbird', unlock_items: [87578] },
  { id: 169, name: 'Alloyed Irontail', unlock_items: [90165] },
  { id: 170, name: 'Starshell', unlock_items: [90165] },
  { id: 171, name: 'Sand Souled', unlock_items: [90165] },
  { id: 172, name: 'Ntouka Snakeshell', unlock_items: [90165] },
  { id: 173, name: 'Exalted Gate Guardian', unlock_items: [90165] },
  { id: 174, name: 'Spotted Orchid', unlock_items: [90165] },
  { id: 175, name: 'Primordial Raptor', unlock_items: [90165] },
  { id: 176, name: 'Alloyed Quicksilver', unlock_items: [90165] },
  { id: 177, name: 'Kournan Bright-Tail', unlock_items: [90165] },
  { id: 178, name: 'Brisban Brushtail', unlock_items: [90165] },
  { id: 179, name: 'Masked Runner', unlock_items: [90165] },
  { id: 180, name: 'Primeval', unlock_items: [90165] },
  { id: 181, name: 'Arctic Icewing', unlock_items: [90165] },
  { id: 182, name: 'Savannah Stripetail', unlock_items: [90165] },
  { id: 183, name: 'Vabbian Lightpaw', unlock_items: [90165] },
  { id: 186, name: 'Skyscale', unlock_items: [] },
  { id: 191, name: 'Shimmerwing', unlock_items: [91227] },
  { id: 193, name: 'Axejaw Skyscale', unlock_items: [91354] },
  { id: 194, name: 'Caldera Skyscale', unlock_items: [91363] },
  { id: 195, name: 'Branded Skyscale', unlock_items: [91369] },
  { id: 196, name: 'Bioluminescent Skyscale', unlock_items: [91342] },
  { id: 198, name: 'Flare-Marked Skyscale', unlock_items: [91314] },
  { id: 200, name: 'Gallant Lightbearer', unlock_items: [91562] },
  { id: 202, name: 'Broad-Horn Bull', unlock_items: [91795] },
  { id: 203, name: 'Fulgurite Ridgeback', unlock_items: [91795] },
  { id: 204, name: 'Savage Gladiator', unlock_items: [91795] },
  { id: 205, name: 'Lithosol', unlock_items: [91795] },
  { id: 206, name: 'Glademire', unlock_items: [91795] },
  { id: 207, name: 'Starclaw', unlock_items: [91795] },
  { id: 208, name: 'Maguuma Jackrabbit', unlock_items: [91795] },
  { id: 209, name: 'Arctic Razor', unlock_items: [91795] },
  { id: 210, name: 'Crowned Skyfisher', unlock_items: [91795] },
  { id: 211, name: 'Incarnate Flame', unlock_items: [91795] },
  { id: 213, name: 'Sun Stalker', unlock_items: [91795] },
  { id: 215, name: 'Cascade Heeler', unlock_items: [91795] },
  { id: 216, name: 'Deep Desert Scarab', unlock_items: [91795] },
  { id: 217, name: 'Luminous Ray', unlock_items: [91795] },
  { id: 218, name: 'Vital Geode', unlock_items: [91795] },
  { id: 220, name: 'Primal Spirit', unlock_items: [91982] },
  { id: 222, name: 'Mad King Skimmer', unlock_items: [92153] },
  { id: 223, name: 'Mad King Griffon Skin', unlock_items: [92156] },
  { id: 224, name: 'Mad King Jackal', unlock_items: [92185] },
  { id: 225, name: 'Mad King Springer', unlock_items: [92160] },
  { id: 226, name: 'Mad King Raptor', unlock_items: [92189] },
  { id: 231, name: 'Infernal Horror', unlock_items: [92396] },
  { id: 234, name: 'Branded Roller Beetle', unlock_items: [92551] },
  { id: 235, name: 'Cozy Wintersday Skyscale', unlock_items: [92551] },
  { id: 236, name: 'Iceforged Reaver', unlock_items: [92551] },
  { id: 237, name: 'Primeval', unlock_items: [92551] },
  { id: 238, name: 'Stripe-Winged Skyscale', unlock_items: [92551] },
  { id: 239, name: 'Nautiloid', unlock_items: [92551] },
  { id: 240, name: 'Crested Plainsrunner', unlock_items: [92551] },
  { id: 241, name: 'Stormclaw', unlock_items: [92551] },
  { id: 242, name: 'Speckled Shortfang', unlock_items: [92551] },
  { id: 243, name: 'Caledon Short-Tail', unlock_items: [92551] },
  { id: 244, name: 'Luminous Hunter', unlock_items: [92551] },
  { id: 245, name: 'Exalted Ley Vaulter', unlock_items: [92551] },
  { id: 246, name: 'Point-Tipped Corvus', unlock_items: [92551] },
  { id: 247, name: 'Lucent Sands', unlock_items: [92551] },
  { id: 248, name: 'Lithosol', unlock_items: [92551] },
  { id: 250, name: 'Sacred Pegasus', unlock_items: [92726] },
  { id: 251, name: 'Guildrider Warclaw', unlock_items: [92870] },
  { id: 252, name: 'War-Torn Marauder', unlock_items: [92903] },
  { id: 264, name: 'Super Outlaw Raptor', unlock_items: [93324] },
  { id: 265, name: 'Moth-Marked Skyscale', unlock_items: [93333] },
  { id: 266, name: 'Archaius Sprinter', unlock_items: [93333] },
  { id: 267, name: 'Lithosol', unlock_items: [93333] },
  { id: 268, name: 'Volcanic Ray', unlock_items: [93333] },
  { id: 269, name: 'Exalted Mists Champion', unlock_items: [93333] },
  { id: 270, name: 'Darkmist Moorhound', unlock_items: [93333] },
  { id: 271, name: 'Gendarran Hawkeye', unlock_items: [93333] },
  { id: 272, name: 'Sleek Dunerunner', unlock_items: [93333] },
  { id: 273, name: 'Bioluminescent Raptor', unlock_items: [93333] },
  { id: 275, name: 'Venomous Greathorn', unlock_items: [93333] },
  { id: 276, name: 'Vital Geode', unlock_items: [93333] },
  { id: 277, name: 'Luminous Roller', unlock_items: [93333] },
  { id: 278, name: 'Awakened Roller Beetle', unlock_items: [93333] },
  { id: 279, name: 'Vigilant Saberclaw', unlock_items: [93333] },
  { id: 280, name: 'Frostsoul Skyscale', unlock_items: [93333] },
  { id: 287, name: 'Mordrem Alpha', unlock_items: [93666] },
  { id: 292, name: 'Dark Monarch', unlock_items: [93703] },
  { id: 293, name: 'Synergetics Gyrocycle', unlock_items: [93718] },
  { id: 294, name: 'Wild Trihorn', unlock_items: [93916] },
  { id: 298, name: 'Aurene\'s Prismatic Raptor', unlock_items: [93997] },
  { id: 299, name: 'Spotted Springtail', unlock_items: [93997] },
  { id: 300, name: 'Primeval Skimmer', unlock_items: [93997] },
  { id: 301, name: 'Bighorn Charger', unlock_items: [93997] },
  { id: 302, name: 'Kintsugi Jackal', unlock_items: [93997] },
  { id: 303, name: 'Exo-Suit Roller Beetle', unlock_items: [93997] },
  { id: 304, name: 'Mad Realm Warclaw', unlock_items: [93997] },
  { id: 305, name: 'Bearded Dragon', unlock_items: [93997] },
  { id: 306, name: 'Shattered Nightscale', unlock_items: [93997] },
  { id: 307, name: 'Exalted Sky Emperor', unlock_items: [93997] },
  { id: 308, name: 'Marshland Salamander', unlock_items: [93997] },
  { id: 309, name: 'Luminous Jackal', unlock_items: [93997] },
  { id: 310, name: 'Vital Geode', unlock_items: [93997] },
  { id: 311, name: 'Shell Surfer', unlock_items: [93981] },
  { id: 312, name: 'Elonian Waverider', unlock_items: [93997] },
  { id: 313, name: 'Darkmist Shrike', unlock_items: [93997] },
  { id: 316, name: 'Sand Lion', unlock_items: [94150] },
  { id: 329, name: 'Roadrunner', unlock_items: [94196] },
  { id: 330, name: 'Plush Griffon', unlock_items: [94432] },
  { id: 331, name: 'Woodland Sprite', unlock_items: [94453] },
  { id: 332, name: 'Noble Aurochs', unlock_items: [94699] },
  { id: 336, name: 'Lunar Maned Skyscale', unlock_items: [94703] },
  { id: 343, name: 'Desert Shiba', unlock_items: [94887] },
  { id: 344, name: 'Veiled Chameleon', unlock_items: [94887] },
  { id: 345, name: 'Open Ocean Glaucus', unlock_items: [94887] },
  { id: 346, name: 'Crested Southernland', unlock_items: [94887] },
  { id: 347, name: 'Phosphor Coast Osprey', unlock_items: [94887] },
  { id: 348, name: 'Flame-Brushed Roller Beetle', unlock_items: [94887] },
  { id: 349, name: 'Stargaze', unlock_items: [94887] },
  { id: 350, name: 'Darkmist Prowler', unlock_items: [94887] },
  { id: 351, name: 'Sinister Feline', unlock_items: [94887] },
  { id: 352, name: 'Exalted Sea Sentry', unlock_items: [94887] },
  { id: 353, name: 'Aurene\'s Prismatic Skyscale', unlock_items: [94887] },
  { id: 354, name: 'Tundra Grimalkin', unlock_items: [94887] },
  { id: 355, name: 'Tidal Lightpaw', unlock_items: [94887] },
  { id: 356, name: 'Luminous Raider', unlock_items: [94887] },
  { id: 357, name: 'Gilded Shortfang', unlock_items: [94887] },
  { id: 358, name: 'Mossback', unlock_items: [95024] },
  { id: 359, name: 'Royal Anubis Jackal', unlock_items: [95032] },
  { id: 360, name: 'Canthan Raptor', unlock_items: [95162] },
  { id: 361, name: 'Sunrise Macaw', unlock_items: [95268] },
  { id: 362, name: 'Exalted Way Seeker', unlock_items: [95268] },
  { id: 363, name: 'Renegade Warclaw', unlock_items: [95268] },
  { id: 364, name: 'Striped Grimalkin', unlock_items: [95268] },
  { id: 365, name: 'Great Lavashell', unlock_items: [95268] },
  { id: 366, name: 'Stormscale', unlock_items: [95268] },
  { id: 367, name: 'Dark Matter Raptor', unlock_items: [95268] },
  { id: 368, name: 'Alluring Devilfish', unlock_items: [95268] },
  { id: 369, name: 'Darkmist Terror', unlock_items: [95268] },
  { id: 370, name: 'Aurene\'s Prismatic Griffon', unlock_items: [95268] },
  { id: 371, name: 'Exo-Suit Warclaw', unlock_items: [95268] },
  { id: 372, name: 'Taiga Lupine', unlock_items: [95268] },
  { id: 373, name: 'Lucent Long Ear', unlock_items: [95268] },
  { id: 374, name: 'Kintsugi Raptor', unlock_items: [95268] },
  { id: 375, name: 'Dappled Reef Glaucus', unlock_items: [95268] },
  { id: 380, name: 'Hound of Balthazar', unlock_items: [95364] },
  { id: 391, name: 'Synergetics Hoverbike', unlock_items: [95487] },
  { id: 396, name: 'Synergetics Cyberscale', unlock_items: [95493] },
  { id: 397, name: 'Siege Turtle', unlock_items: [] },
  { id: 403, name: 'Plush Raptor', unlock_items: [95509] },
  { id: 406, name: 'White Tiger', unlock_items: [95574] },
  { id: 415, name: 'Magmaback Snapper', unlock_items: [97904] },
  { id: 416, name: 'Southern Terrapin', unlock_items: [97908] },
  { id: 417, name: 'Painted River Turtle', unlock_items: [97902] },
  { id: 418, name: 'Luminous Bastion', unlock_items: [97905] },
  { id: 419, name: 'Deepwater Barbshell', unlock_items: [97899] },
  { id: 422, name: 'Canthan Cuckoo', unlock_items: [97962] },
  { id: 423, name: 'Stormy Cuckoo', unlock_items: [97913] },
  { id: 426, name: 'Tiger-Breasted Cuckoo', unlock_items: [97984] },
  { id: 429, name: 'Ring-Tailed Vulpine', unlock_items: [98061] },
  { id: 430, name: 'Lucent Vulpine', unlock_items: [97992] },
  { id: 431, name: 'Canthan Vulpine', unlock_items: [98012] },
  { id: 432, name: 'Qinkaishi Tigris', unlock_items: [98075] },
  { id: 433, name: 'Canthan Tigris', unlock_items: [98071] },
  { id: 434, name: 'Blazing Tigris', unlock_items: [98076] },
  { id: 437, name: 'Canthan Nian', unlock_items: [98140] },
  { id: 440, name: 'Glacial Nian', unlock_items: [98147] },
  { id: 441, name: 'Kinya Nian', unlock_items: [98141] },
  { id: 443, name: 'Heavenly Thunder Noble', unlock_items: [98198] },
  { id: 444, name: 'Hundred Petals Noble', unlock_items: [98192] },
  { id: 445, name: 'Canthan Noble', unlock_items: [98194] },
  { id: 446, name: 'Glacial Canthan', unlock_items: [98288] },
  { id: 447, name: 'Heavenly Thunder Tigris', unlock_items: [98288] },
  { id: 448, name: 'Tiger Soul Nian', unlock_items: [98288] },
  { id: 449, name: 'Dark Hunter Nian', unlock_items: [98288] },
  { id: 450, name: 'Grand Barbel Canthan', unlock_items: [98288] },
  { id: 452, name: 'Oceanic Noble', unlock_items: [98288] },
  { id: 453, name: 'Star Blessed Canthan', unlock_items: [98288] },
  { id: 454, name: 'Cloud Stalking Tigris', unlock_items: [98288] },
  { id: 455, name: 'Mystic Elder Vulpine', unlock_items: [98288] },
  { id: 456, name: 'Elegant Pool Canthan', unlock_items: [98288] },
  { id: 457, name: 'Whistling Tranquility Cuckoo', unlock_items: [98288] },
  { id: 458, name: 'Aurora Blessed Noble', unlock_items: [98288] },
  { id: 459, name: 'Blazing Cuckoo', unlock_items: [98288] },
  { id: 460, name: 'Wandering Breeze Noble', unlock_items: [98288] },
  { id: 461, name: 'Mischievous Woods Vulpine', unlock_items: [98288] },
  { id: 462, name: 'Jade Tech Raptor', unlock_items: [98323] },
  { id: 467, name: 'Kirin', unlock_items: [98878] },
  { id: 471, name: 'Crested Dragon', unlock_items: [98971] },
  { id: 472, name: 'Auspicious Pixiu Skyscale', unlock_items: [99020] },
  { id: 473, name: 'Molten Phoenix', unlock_items: [99103] },
  { id: 475, name: 'Skyborne Sprinter Tigris', unlock_items: [99156] },
  { id: 476, name: 'Oceanic Vulpine', unlock_items: [99156] },
  { id: 477, name: 'Battle Horn Nian', unlock_items: [99156] },
  { id: 478, name: 'Divine Predator Nian', unlock_items: [99156] },
  { id: 481, name: 'Pleasant Country Cuckoo', unlock_items: [99156] },
  { id: 483, name: 'Hooded Cobra Noble', unlock_items: [99156] },
  { id: 484, name: 'Unyielding Haechi Warclaw', unlock_items: [99125] },
  { id: 485, name: 'Star Blessed Tigris', unlock_items: [99156] },
  { id: 487, name: 'Blazing Nian', unlock_items: [99156] },
  { id: 488, name: 'Darkmist Vulpine', unlock_items: [99156] },
  { id: 491, name: 'Aurene\'s Prismatic Noble', unlock_items: [99156] },
  { id: 492, name: 'Hidden Paths Vulpine', unlock_items: [99156] },
  { id: 495, name: 'Glacial Turtle', unlock_items: [99156] },
  { id: 496, name: 'Windswept Mystic Canthan Raptor', unlock_items: [99156] },
  { id: 497, name: 'Aurora Blessed Canthan Raptor', unlock_items: [99156] },
  { id: 498, name: 'Marshland Sage Canthan Raptor', unlock_items: [99156] },
  { id: 499, name: 'Plush Cuckoo', unlock_items: [99192] },
  { id: 504, name: 'Plush Siege Turtle', unlock_items: [99266] },
  { id: 505, name: 'Imperial Crane', unlock_items: [99306] },
  { id: 512, name: 'Fluffy Samoyed Jackal', unlock_items: [99558] },
  { id: 513, name: 'Aeolian Spikes Noble', unlock_items: [99566] },
  { id: 514, name: 'Feinting Smoke Canthan', unlock_items: [99566] },
  { id: 515, name: 'Blazing Canthan', unlock_items: [99566] },
  { id: 516, name: 'Howling Wolf Jackal', unlock_items: [99566] },
  { id: 517, name: 'Heavenly Thunder Vulpine', unlock_items: [99566] },
  { id: 518, name: 'Aurora Blessed Turtle', unlock_items: [99566] },
  { id: 519, name: 'Swirling Mists Tigris', unlock_items: [99566] },
  { id: 520, name: 'Enchanted Lancer Noble', unlock_items: [99566] },
  { id: 521, name: 'Jungle Heart Tigris', unlock_items: [99566] },
  { id: 522, name: 'Forest Guardian Tigris', unlock_items: [99566] },
  { id: 523, name: 'Luminous Warlord Nian', unlock_items: [99566] },
  { id: 524, name: 'Shoal Slayer Nian', unlock_items: [99566] },
  { id: 525, name: 'Star Blessed Cuckoo', unlock_items: [99566] },
  { id: 526, name: 'Fisher Lord Cuckoo', unlock_items: [99566] },
  { id: 527, name: 'Glacial Noble', unlock_items: [99566] },
  { id: 528, name: 'Super Sophisticated Siege Turtle', unlock_items: [99568] },
  { id: 537, name: 'Armored Tiger', unlock_items: [99753] },
  { id: 547, name: 'Astral Ward Feathered Raptor', unlock_items: [99855] },
  { id: 548, name: 'Jade Tech Siege Turtle', unlock_items: [99874] },
  { id: 549, name: 'Striped Pool Canthan Raptor', unlock_items: [99901] },
  { id: 550, name: 'Island Sprinter Feathered Raptor', unlock_items: [99905] },
  { id: 551, name: 'Pyroclast Canthan Raptor', unlock_items: [99901] },
  { id: 552, name: 'Lake Lord Cuckoo', unlock_items: [99901] },
  { id: 554, name: 'Glacial Vulpine', unlock_items: [99901] },
  { id: 555, name: 'Scaled Hellcat', unlock_items: [99901] },
  { id: 556, name: 'Prehistoric Siege Turtle', unlock_items: [99901] },
  { id: 557, name: 'Star Blessed Noble', unlock_items: [99901] },
  { id: 558, name: 'Hooded Viper Noble', unlock_items: [99901] },
  { id: 560, name: 'Heavenly Thunder Nian', unlock_items: [99901] },
  { id: 562, name: 'Darkmist Cuckoo', unlock_items: [99901] },
  { id: 564, name: 'Marbled Slider Siege Turtle', unlock_items: [99901] },
  { id: 566, name: 'Charged Feathered Raptor', unlock_items: [99937] },
  { id: 567, name: 'Aurora Blessed Vulpine', unlock_items: [99901] },
  { id: 568, name: 'Scaled Hellwing', unlock_items: [99901] },
  { id: 569, name: 'Sky Runner Feathered Raptor', unlock_items: [99930] },
  { id: 570, name: 'Lucent Tigris', unlock_items: [99901] },
  { id: 572, name: 'Raging Breeze Noble', unlock_items: [99901] },
  { id: 580, name: 'Kryptis Skyscale', unlock_items: [100245] },
  { id: 585, name: 'Enchanted Owl Griffon', unlock_items: [100663] },
  { id: 589, name: 'Skywatch Manticore', unlock_items: [101061] },
  { id: 591, name: 'Astral Ward Manticore', unlock_items: [101066] },
  { id: 595, name: 'Luminous Manticore', unlock_items: [101039] },
  { id: 599, name: 'Moonshadow Bat Griffon', unlock_items: [101083] },
  { id: 605, name: 'Striped Cuckoo', unlock_items: [101147] },
  { id: 606, name: 'Blazing Manticore', unlock_items: [101147] },
  { id: 607, name: 'Blazing Feathered Raptor', unlock_items: [101147] },
  { id: 609, name: 'Primal Maguuma Feathered Manticore', unlock_items: [101147] },
  { id: 610, name: 'Primal Maguuma Feathered Raptor', unlock_items: [101147] },
  { id: 611, name: 'Southsun Feathered Raptor', unlock_items: [101147] },
  { id: 612, name: 'Armored Wolf', unlock_items: [101147] },
  { id: 614, name: 'Glacial Cuckoo', unlock_items: [101147] },
  { id: 615, name: 'Glacial Wolf', unlock_items: [101147] },
  { id: 616, name: 'Spinetail Nian', unlock_items: [101147] },
  { id: 617, name: 'Darkmist Tigris', unlock_items: [101147] },
  { id: 618, name: 'Aurora Blessed Tigris', unlock_items: [101147] },
  { id: 619, name: 'Brushtail Nian', unlock_items: [101147] },
  { id: 620, name: 'Mountain Hopper Manticore', unlock_items: [101147] },
  { id: 621, name: 'Star Blessed Turtle', unlock_items: [101147] },
  { id: 622, name: 'Plush Vulpine Jackal', unlock_items: [101315] },
  { id: 624, name: 'Plush Skyscale', unlock_items: [101368] },
  { id: 626, name: 'Regal Moth Skyscale', unlock_items: [101393] },
  { id: 628, name: 'Synergetics Cyberhound', unlock_items: [101434] },
  { id: 633, name: 'Spotted Predator Skimmer', unlock_items: [101604] },
  { id: 634, name: 'Winged Axolotl Skyscale', unlock_items: [101604] },
  { id: 636, name: 'Aurora Blessed Skimmer', unlock_items: [101604] },
  { id: 637, name: 'Glacial Tigris', unlock_items: [101604] },
  { id: 638, name: 'Charged Manticore', unlock_items: [101604] },
  { id: 639, name: 'Venomous Feathered Raptor', unlock_items: [101604] },
  { id: 640, name: 'Plated Conqueror Warclaw', unlock_items: [101604] },
  { id: 641, name: 'Swift Stinger Roller Beetle', unlock_items: [101604] },
  { id: 642, name: 'Lucent Cuckoo', unlock_items: [101604] },
  { id: 643, name: 'Deep Sea Jackal', unlock_items: [101604] },
  { id: 644, name: 'Starlit Sky Feathered Raptor', unlock_items: [101604] },
  { id: 645, name: 'Hard Lamina Siege Turtle', unlock_items: [101604] },
  { id: 646, name: 'Star Blessed Vulpine', unlock_items: [101604] },
  { id: 647, name: 'Scaled Saurian Manticore', unlock_items: [101604] },
  { id: 648, name: 'Aurene\'s Prismatic Springer', unlock_items: [101604] },
  { id: 651, name: 'Enchanted Skimmer', unlock_items: [101828] },
  { id: 653, name: 'Wolf Griffon', unlock_items: [101940] },
  { id: 654, name: 'Striated Caprine Warclaw', unlock_items: [102001] },
  { id: 656, name: 'Highland Caprine Warclaw', unlock_items: [102054] },
  { id: 657, name: 'Charged Caprine Warclaw', unlock_items: [102005] },
  { id: 670, name: 'Phialslinger Manticore Skyscale', unlock_items: [102180] },
  { id: 673, name: 'Scaled Netherwing', unlock_items: [103482] },
  { id: 674, name: 'Glacial Caprine Warclaw', unlock_items: [103482] },
  { id: 676, name: 'Dense Haar Caprine Warclaw', unlock_items: [103482] },
  { id: 679, name: 'Aurene\'s Prismatic Warclaw', unlock_items: [103482] },
  { id: 680, name: 'Aurora Blessed Feathered Raptor', unlock_items: [103482] },
  { id: 681, name: 'Spotted Plower Caprine Warclaw', unlock_items: [103482] },
  { id: 683, name: 'Kintsugi Skimmer', unlock_items: [103482] },
  { id: 684, name: 'Charged Siege Turtle', unlock_items: [103482] },
  { id: 687, name: 'Woodborn Scout Cuckoo', unlock_items: [103482] },
  { id: 688, name: 'Star Blessed Manticore', unlock_items: [103482] },
  { id: 689, name: 'Lepidote Brute Manticore', unlock_items: [103482] },
  { id: 691, name: 'Nightkissed Cuckoo', unlock_items: [103482] },
  { id: 693, name: 'Blazing Vulpine', unlock_items: [103482] },
  { id: 695, name: 'Land Speckled Vulpine', unlock_items: [103482] },
  { id: 696, name: 'Vital Geode Griffon', unlock_items: [103482] },
  { id: 698, name: 'Janthir Wilds Warclaw', unlock_items: [102512] },
  { id: 699, name: 'Panda Warclaw', unlock_items: [103609] },
  // -- GENERATE-END --
]

export default GAME_DATA_MOUNT_SKINS
