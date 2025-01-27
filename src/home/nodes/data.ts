export interface GameDataHomeNode {
  /** The home node id */
  id: string

  /** The home node name */
  name: string

  /** The unlock items for the home node */
  unlock_items: Array<number>

  /** Primary items gathered from the node. Some nodes drop various additional items. */
  gathered_items?: Array<number>
}

// prettier-ignore
const GAME_DATA_HOME_NODES: Array<GameDataHomeNode> = [
  // -- GENERATE-START --
  { id: 'advanced_cloth_rack', name: 'Advanced Cloth Rack', unlock_items: [81853], gathered_items: [19743, 19748,19745] },
  { id: 'advanced_leather_rack', name: 'Advanced Leather Rack', unlock_items: [81852], gathered_items: [19731, 19729,19732] },
  { id: 'airship_cargo', name: 'Personal Airship Cargo Voucher', unlock_items: [78468] },
  { id: 'ancient_wood_node', name: 'Ancient Wood Logging Node', unlock_items: [68091], gathered_items: [19725] },
  { id: 'aurilium_node', name: 'Aurillium Node', unlock_items: [73798], gathered_items: [75012] },
  { id: 'bandit_chest', name: 'Personal Bandit Chest', unlock_items: [68495] },
  { id: 'basic_cloth_rack', name: 'Basic Cloth Rack', unlock_items: [67842] },
  { id: 'basic_harvesting_nodes', name: 'Basic Harvesting Node Pack', unlock_items: [67290], gathered_items: [19718, 19739,19741] },
  { id: 'basic_leather_rack', name: 'Basic Leather Rack', unlock_items: [78019] },
  { id: 'basic_lumber_nodes', name: 'Basic Lumber Node Pack', unlock_items: [66769], gathered_items: [19723, 19726,19727] },
  { id: 'basic_ore_nodes', name: 'Basic Ore Node Pack', unlock_items: [44884], gathered_items: [19697, 19703,19698] },
  { id: 'bauble_gathering_system', name: 'Bauble Gathering System', unlock_items: [87324], gathered_items: [39752] },
  { id: 'black_lion_expedition_board', name: 'Season 3 Expedition Contract', unlock_items: [88979] },
  { id: 'black_lion_expedition_board_s4', name: 'Season 4 Expedition Contract', unlock_items: [91060] },
  { id: 'black_lion_hunters_board', name: 'Black Lion Hunters Contract', unlock_items: [81594] },
  { id: 'black_lion_industry_board', name: 'Black Lion Industry Contract', unlock_items: [92427] },
  { id: 'bloodstone_crystals', name: 'Bloodstone Crystal Node', unlock_items: [79217], gathered_items: [79280, 46731] },
  { id: 'bound_hatched_chili_pepper_node', name: 'Hatched Chili Pepper Home Instance Node', unlock_items: [92035, 92054], gathered_items: [92072] },
  { id: 'brandstone_node', name: 'Brandstone Node', unlock_items: [86297], gathered_items: [86069, 86269,86316] },
  { id: 'candy_corn_node', name: 'Gift of Candy Corn', unlock_items: [48804], gathered_items: [36041] },
  { id: 'commemorative_dragon_pinata', name: 'Commemorative Dragon Piñata', unlock_items: [93686], gathered_items: [43319] },
  { id: 'crystallized_supply_cache', name: 'Personal Crystallized Supply Cache Voucher', unlock_items: [78549] },
  { id: 'difluorite_crystal_cluster_node', name: 'Difluorite Crystal Cluster Node', unlock_items: [87132], gathered_items: [86977, 46735] },
  { id: 'dragon_crystal', name: 'Dragon Crystal Home Instance Node', unlock_items: [89786], gathered_items: [89537, 46733,89696] },
  { id: 'elder_wood_node', name: 'Elder Wood Logging Node', unlock_items: [68090], gathered_items: [19722] },
  { id: 'enchanted_treasure_chest', name: 'Enchanted Treasure Chest', unlock_items: [67234] },
  { id: 'eternal_ice_shard_node', name: 'Eternal Ice Shard Home Instance Node', unlock_items: [92361], gathered_items: [92272] },
  { id: 'exalted_chest', name: 'Personal Exalted Chest Voucher', unlock_items: [78582] },
  { id: 'flaxseed_node', name: 'Flaxseed Harvesting Node', unlock_items: [79063], gathered_items: [74090] },
  { id: 'garden_plot_01', name: 'Black Lion Garden Plot Deed', unlock_items: [86786] },
  { id: 'garden_plot_02', name: 'Black Lion Garden Plot Deed', unlock_items: [86786] },
  { id: 'garden_plot_03', name: 'Black Lion Garden Plot Deed', unlock_items: [86786] },
  { id: 'ghost_pepper_node', name: 'Ghost Pepper Harvesting Node', unlock_items: [68093], gathered_items: [12544] },
  { id: 'hard_wood_node', name: 'Hard Wood Logging Node', unlock_items: [79085], gathered_items: [19724] },
  { id: 'iron_ore_node', name: 'Iron Ore Mining Node', unlock_items: [79260], gathered_items: [19699] },
  { id: 'jade_fragment', name: 'Jade Fragment Node', unlock_items: [80450], gathered_items: [80332, 46731] },
  { id: 'king_sized_candy_corn', name: 'Greater Gift of Candy Corn', unlock_items: [79646], gathered_items: [36041] },
  { id: 'kournan_supply_cache', name: 'Supply Cache', unlock_items: [87889], gathered_items: [87645, 46735] },
  { id: 'krait_obelisk', name: 'Krait Obelisk Shard', unlock_items: [48875] },
  { id: 'lotus_node', name: 'Lotus Harvesting Node', unlock_items: [68096], gathered_items: [12510] },
  { id: 'mistborn_mote', name: 'Mistborn Mote Home Instance Node', unlock_items: [90773], gathered_items: [90783, 46735] },
  { id: 'mistonium_node', name: 'Mistonium Node', unlock_items: [88828], gathered_items: [88955, 46733] },
  { id: 'mithril_ore_node', name: 'Mithril Mining Node', unlock_items: [68098], gathered_items: [19700] },
  { id: 'omnomberry_node', name: 'Omnomberry Harvesting Node', unlock_items: [68089], gathered_items: [12128] },
  { id: 'orichalcum_ore_node', name: 'Orichalcum Mining Node', unlock_items: [68094], gathered_items: [19701] },
  { id: 'orrian_oyster_node', name: 'Orrian Oyster Node', unlock_items: [81696], gathered_items: [81706, 81837,46733] },
  { id: 'orrian_truffle_node', name: 'Orrian Truffle Harvesting Node', unlock_items: [68095], gathered_items: [12545] },
  { id: 'petrified_stump', name: 'Petrified Wood Node', unlock_items: [79898], gathered_items: [79469, 46735] },
  { id: 'platinum_ore_node', name: 'Platinum Mining Node', unlock_items: [68097], gathered_items: [19702] },
  { id: 'primordial_orchid', name: 'Fire Orchid Node', unlock_items: [81115], gathered_items: [81127, 46735] },
  { id: 'prismaticite_node', name: 'Prismaticite Node', unlock_items: [94286], gathered_items: [94163] },
  { id: 'quartz_node', name: 'Gift of Quartz', unlock_items: [43902], gathered_items: [43773] },
  { id: 'salvage_pile', name: 'Salvage Pile Node', unlock_items: [93503], gathered_items: [93498, 93455] },
  { id: 'snow_truffle_node', name: 'Snow Truffle Harvesting Node', unlock_items: [68092], gathered_items: [12144] },
  { id: 'sprocket_generator', name: 'Gift of Sprockets', unlock_items: [49825], gathered_items: [44941] },
  { id: 'winterberry_bush', name: 'Winterberry Bush Node', unlock_items: [79903], gathered_items: [79899] },
  { id: 'wintersday_tree', name: 'Gift of Magnanimity', unlock_items: [68367], gathered_items: [77604] },
  // -- GENERATE-END --
]

export default GAME_DATA_HOME_NODES
