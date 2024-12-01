export enum Region {
  Africa = 'Africa',
  America = 'America',
  Asia = 'Asia',
  Europe = 'Europe',
  Oceania = 'Oceania'
}

export interface SmallCountry {
  name: string;
  cca3: string;
  borders: string[];
}
export interface Country {
    name:         Name;
    cca3:         string;
    status:       Status;
    idd:          Idd;
    capital:      string[];
    altSpellings: string[];
    region:       string;
    subregion:    Subregion;
    languages:    Languages;
    translations: { [key: string]: Translation };
    latlng:       number[];
    landlocked:   boolean;
    borders?:     string[];
    area:         number;
    demonyms:     Demonyms;
    flag:         string;
    maps:         Maps;
    population:   number;
    gini?:        { [key: string]: number };
    fifa?:        string;
    car:          Car;
    timezones:    string[];
    continents:   string[];
    flags:        Flags;
    coatOfArms:   CoatOfArms;
    startOfWeek:  StartOfWeek;
    capitalInfo:  CapitalInfo;
    postalCode?:  PostalCode;
}

export interface CapitalInfo {
    latlng: number[];
}

export interface Car {
    signs: string[];
    side:  Side;
}

export enum Side {
    Left = "left",
    Right = "right",
}

export interface CoatOfArms {
    png?: string;
    svg?: string;
}


export interface Currency {
    name:   string;
    symbol: Symbol;
}

export enum Symbol {
    Empty = "€",
    Kr = "kr",
    Symbol = "£",
}

export interface Demonyms {
    eng:  Eng;
    fra?: Eng;
}

export interface Eng {
    f: string;
    m: string;
}

export interface Flags {
    png:  string;
    svg:  string;
    alt?: string;
}

export interface Idd {
    root:     string;
    suffixes: string[];
}

export interface Languages {
    nno?: string;
    nob?: string;
    smi?: string;
    eng?: string;
    fra?: string;
    nfr?: string;
    swe?: string;
    nor?: string;
    nrf?: string;
    dan?: string;
    fao?: string;
    isl?: string;
    lav?: string;
    glv?: string;
    est?: string;
    lit?: string;
    fin?: string;
    gle?: string;
}

export interface Maps {
    googleMaps:     string;
    openStreetMaps: string;
}

export interface Name {
    common:     string;
    official:   string;
    nativeName: { [key: string]: Translation };
}

export interface Translation {
    official: string;
    common:   string;
}

export interface PostalCode {
    format: string;
    regex:  string;
}

export enum StartOfWeek {
    Monday = "monday",
}

export enum Status {
    OfficiallyAssigned = "officially-assigned",
}

export enum Subregion {
    NorthernEurope = "Northern Europe",
}
