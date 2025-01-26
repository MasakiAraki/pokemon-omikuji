export const FORTUNE_LEVELS = ["大吉", "吉", "中吉", "末吉", "凶"] as const;

export const MAX_POKEMON_ID = 151;

export const TYPE_TRANSLATIONS = {
  normal: "ノーマル",
  fire: "ほのお",
  water: "みず",
  electric: "でんき",
  grass: "くさ",
  ice: "こおり",
  fighting: "かくとう",
  poison: "どく",
  ground: "じめん",
  flying: "ひこう",
  psychic: "エスパー",
  bug: "むし",
  rock: "いわ",
  ghost: "ゴースト",
  dragon: "ドラゴン",
  dark: "あく",
  steel: "はがね",
  fairy: "フェアリー",
} as const;

export const LUCKY_PARAMS = {
  hp: "健康運（体力）",
  attack: "仕事運（目標達成）",
  defense: "対人運（コミュニケーション力）",
  "special-attack": "ひらめき（創造性）",
  "special-defense": "ストレス耐性（精神力）",
  speed: "決断（行動力）",
} as const;