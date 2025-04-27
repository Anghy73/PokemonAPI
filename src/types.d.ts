/* eslint-disable @typescript-eslint/no-explicit-any */
export interface PokemonV2API {
  ability:                     string;
  berry:                       string;
  "berry-firmness":            string;
  "berry-flavor":              string;
  characteristic:              string;
  "contest-effect":            string;
  "contest-type":              string;
  "egg-group":                 string;
  "encounter-condition":       string;
  "encounter-condition-value": string;
  "encounter-method":          string;
  "evolution-chain":           string;
  "evolution-trigger":         string;
  gender:                      string;
  generation:                  string;
  "growth-rate":               string;
  item:                        string;
  "item-attribute":            string;
  "item-category":             string;
  "item-fling-effect":         string;
  "item-pocket":               string;
  language:                    string;
  location:                    string;
  "location-area":             string;
  machine:                     string;
  move:                        string;
  "move-ailment":              string;
  "move-battle-style":         string;
  "move-category":             string;
  "move-damage-class":         string;
  "move-learn-method":         string;
  "move-target":               string;
  nature:                      string;
  "pal-park-area":             string;
  "pokeathlon-stat":           string;
  pokedex:                     string;
  pokemon:                     string;
  "pokemon-color":             string;
  "pokemon-form":              string;
  "pokemon-habitat":           string;
  "pokemon-shape":             string;
  "pokemon-species":           string;
  region:                      string;
  stat:                        string;
  "super-contest-effect":      string;
  type:                        string;
  version:                     string;
  "version-group":             string;
}

export interface Pokemons {
  count:    number;
  next:     string;
  previous: null;
  results:  PokemonsResults[];
}

export interface PokemonsResults {
  name?: string | undefined;
  url:  string;
}


// PokemonDetails
export interface PokemonDetails {
  abilities:                Ability[];
  base_experience:          number;
  cries:                    Cries;
  forms:                    Species[];
  game_indices:             GameIndex[];
  height:                   number;
  held_items:               any[];
  id:                       number;
  is_default:               boolean;
  location_area_encounters: string;
  moves:                    Move[];
  name:                     string;
  order:                    number;
  past_abilities:           PastAbility[];
  past_types:               any[];
  species:                  Species;
  sprites:                  Sprites;
  stats:                    Stat[];
  types:                    Type[];
  weight:                   number;
}

export interface Ability {
  ability:   Species | null;
  is_hidden: boolean;
  slot:      number;
}

export interface Species {
  name: string;
  url:  string;
}

export interface Cries {
  latest: string;
  legacy: string;
}

export interface GameIndex {
  game_index: number;
  version:    Species;
}

export interface Move {
  move:                  Species;
  version_group_details: VersionGroupDetail[];
}

export interface VersionGroupDetail {
  level_learned_at:  number;
  move_learn_method: Species;
  order:             number | null;
  version_group:     Species;
}

export interface PastAbility {
  abilities:  Ability[];
  generation: Species;
}

export interface GenerationV {
  "black-white": Sprites;
}

export interface GenerationIv {
  "diamond-pearl":        Sprites;
  "heartgold-soulsilver": Sprites;
  platinum:               Sprites;
}

export interface Versions {
  "generation-i":    GenerationI;
  "generation-ii":   GenerationIi;
  "generation-iii":  GenerationIii;
  "generation-iv":   GenerationIv;
  "generation-v":    GenerationV;
  "generation-vi":   { [key: string]: Home };
  "generation-vii":  GenerationVii;
  "generation-viii": GenerationViii;
}

export interface Other {
  dream_world:        DreamWorld;
  home:               Home;
  "official-artwork": OfficialArtwork;
  showdown:           Sprites;
}

export interface Sprites {
  back_default:       string;
  back_female:        null;
  back_shiny:         string;
  back_shiny_female:  null;
  front_default:      string;
  front_female:       null;
  front_shiny:        string;
  front_shiny_female: null;
  other?:             Other;
  versions?:          Versions;
  animated?:          Sprites;
}

export interface GenerationI {
  "red-blue": RedBlue;
  yellow:     RedBlue;
}

export interface RedBlue {
  back_default:      string;
  back_gray:         string;
  back_transparent:  string;
  front_default:     string;
  front_gray:        string;
  front_transparent: string;
}

export interface GenerationIi {
  crystal: Crystal;
  gold:    Gold;
  silver:  Gold;
}

export interface Crystal {
  back_default:            string;
  back_shiny:              string;
  back_shiny_transparent:  string;
  back_transparent:        string;
  front_default:           string;
  front_shiny:             string;
  front_shiny_transparent: string;
  front_transparent:       string;
}

export interface Gold {
  back_default:       string;
  back_shiny:         string;
  front_default:      string;
  front_shiny:        string;
  front_transparent?: string;
}

export interface GenerationIii {
  emerald:             OfficialArtwork;
  "firered-leafgreen": Gold;
  "ruby-sapphire":     Gold;
}

export interface OfficialArtwork {
  front_default: string;
  front_shiny:   string;
}

export interface Home {
  front_default:      string;
  front_female:       null;
  front_shiny:        string;
  front_shiny_female: null;
}

export interface GenerationVii {
  icons:                  DreamWorld;
  "ultra-sun-ultra-moon": Home;
}

export interface DreamWorld {
  front_default: string;
  front_female:  null;
}

export interface GenerationViii {
  icons: DreamWorld;
}

export interface Stat {
  base_stat: number;
  effort:    number;
  stat:      Species;
}

export interface Type {
  slot: number;
  type: Species;
}


// types of typespokes

export interface PokemonDetailsType {
  damage_relations:      DamageRelations;
  game_indices:          GameIndex[];
  generation:            Generation;
  id:                    number;
  move_damage_class:     Generation;
  moves:                 Generation[];
  name:                  string;
  names:                 Name[];
  past_damage_relations: any[];
  pokemon:               Pokemon[];
  sprites:               Sprites;
}

export interface DamageRelations {
  double_damage_from: Generation[];
  double_damage_to:   any[];
  half_damage_from:   any[];
  half_damage_to:     Generation[];
  no_damage_from:     Generation[];
  no_damage_to:       Generation[];
}

export interface Generation {
  name: string;
  url:  string;
}

export interface GameIndex {
  game_index: number;
  generation: Generation;
}

export interface Name {
  language: Generation;
  name:     string;
}

export interface PokemonsResultsTypes {
  pokemon: Generation;
  slot:    number;
}

export interface Sprites {
  "generation-iii":  GenerationIii;
  "generation-iv":   GenerationIv;
  "generation-ix":   GenerationIx;
  "generation-v":    GenerationV;
  "generation-vi":   { [key: string]: Colosseum };
  "generation-vii":  GenerationVii;
  "generation-viii": GenerationViii;
}

export interface GenerationIii {
  colosseum:           Colosseum;
  emerald:             Colosseum;
  "firered-leafgreen": Colosseum;
  "ruby-saphire":      Colosseum;
  xd:                  Colosseum;
}

export interface Colosseum {
  name_icon: string;
}

export interface GenerationIv {
  "diamond-pearl":        Colosseum;
  "heartgold-soulsilver": Colosseum;
  platinum:               Colosseum;
}

export interface GenerationIx {
  "scarlet-violet": Colosseum;
}

export interface GenerationV {
  "black-2-white-2": Colosseum;
  "black-white":     Colosseum;
}

export interface GenerationVii {
  "lets-go-pikachu-lets-go-eevee": Colosseum;
  "sun-moon":                      Colosseum;
  "ultra-sun-ultra-moon":          Colosseum;
}

export interface GenerationViii {
  "brilliant-diamond-and-shining-pearl": Colosseum;
  "legends-arceus":                      Colosseum;
  "sword-shield":                        Colosseum;
}

// types gender

export interface PokemonDetails {
  id:                      number;
  name:                    string;
  pokemon_species_details: PokemonSpeciesDetail[];
  required_for_evolution:  RequiredForEvolution[];
}

export interface PokemonSpeciesDetail {
  pokemon_species: RequiredForEvolution;
  rate:            number;
}

// export interface RequiredForEvolution {
//   name: string;
//   url:  string;
// }

// export interface PokemonDetails {
//   count:    number;
//   next:     null;
//   previous: null;
//   results:  Result[];
// }

// export interface Result {
//   name: string;
//   url:  string;
// }

export interface PokemonSpecies {
  base_happiness:         number;
  capture_rate:           number;
  color:                  Color;
  egg_groups:             Color[];
  evolution_chain:        EvolutionChain;
  evolves_from_species:   Color;
  flavor_text_entries:    FlavorTextEntry[];
  form_descriptions:      any[];
  forms_switchable:       boolean;
  gender_rate:            number;
  genera:                 Genus[];
  generation:             Color;
  growth_rate:            Color;
  habitat:                Color;
  has_gender_differences: boolean;
  hatch_counter:          number;
  id:                     number;
  is_baby:                boolean;
  is_legendary:           boolean;
  is_mythical:            boolean;
  name:                   string;
  names:                  Name[];
  order:                  number;
  pal_park_encounters:    PalParkEncounter[];
  pokedex_numbers:        PokedexNumber[];
  shape:                  Color;
  varieties:              Variety[];
}

export interface Color {
  name: string;
  url:  string;
}

export interface EvolutionChain {
  url: string;
}

export interface FlavorTextEntry {
  flavor_text: string;
  language:    Color;
  version:     Color;
}

export interface Genus {
  genus:    string;
  language: Color;
}

export interface Name {
  language: Color;
  name:     string;
}

export interface PalParkEncounter {
  area:       Color;
  base_score: number;
  rate:       number;
}

export interface PokedexNumber {
  entry_number: number;
  pokedex:      Color;
}

export interface Variety {
  is_default: boolean;
  pokemon:    Color;
}

export interface PokemonsFav {
  pokemonURL: string
  name?: string | null
}