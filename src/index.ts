import {
  BootstrappedData,
  ElementType,
  Entry,
  EntryEvent,
  EntryTransfers,
  GameSettings,
  League,
  Team,
} from './interfaces';

import axios from 'axios';

axios.defaults.baseURL = 'https://fantasy.premierleague.com/drf';

/**
 * All static game data:
 * A promise that if fulfilled returns an object
 * mapped to https://fantasy.premierleague.com/drf/bootstrap-static
 * @returns {Promise}
 */
export function getBootstrappedData(): Promise<BootstrappedData> {
  return getData('/bootstrap-static');
}

/**
 * Entry (Fpl manager team):
 * A promise that if fulfilled returns an object
 * mapped to https://fantasy.premierleague.com/drf/entry/${id}/history
 * @param entryId Entry id
 * @returns {Promise}
 */
export function getEntry(entryId: number): Promise<Entry> {
  return getData(`/entry/${entryId}/history`);
}

/**
 * Entry event:
 * Details of a particular event (or gameweek):
 * A promise that if fulfilled returns an object
 * mapped to https://fantasy.premierleague.com/drf/entry/${id}/event/${eventNumber}
 * @param entryId Entry id
 * @param eventNumber The event / gameweek number
 * @returns {Promise}
 */
export function getEntryEvent(entryId: number, eventNumber: number): Promise<EntryEvent> {
  return getData(`/entry/${entryId}/event/${eventNumber}`);
}

/**
 * Entry transfers:
 * A promise that if fulfilled returns an object
 * mapped to https://fantasy.premierleague.com/drf/entry/${id}/transfers
 * @param entryId Entry id
 * @returns {Promise}
 */
export function getEntryTransfers(entryId: number): Promise<EntryTransfers> {
  return getData(`/entry/${entryId}/transfers`);
}

/**
 * Teams (Premier Leaugue clubs):
 * A promise that if fulfilled returns an object
 * mapped to https://fantasy.premierleague.com/drf/teams
 * @returns {Promise}
 */
export function getTeams(): Promise<Team[]> {
  return getData('/teams');
}

/**
 * Elements (players):
 * A promise that if fulfilled returns an object
 * mapped to https://fantasy.premierleague.com/drf/elements
 * @returns {Promise}
 */
export function getElements(): Promise<Element[]> {
  return getData('/elements');
}

/**
 * Element types: A promise that if fulfilled returns an object
 * mapped to https://fantasy.premierleague.com/drf/elements-types
 * @returns {Promise}
 */
export function getElementTypes(): Promise<ElementType[]> {
  return getData('/element-types');
}

/**
 * Game settings:
 * A promise that if fulfilled returns an object
 * mapped to https://fantasy.premierleague.com/drf/game-settings
 * @returns {Promise}
 */
export function getGameSettings(): Promise<GameSettings> {
  return getData('game-settings');
}

/**
 * Event /gameweek details:
 * A promise that if fulfilled returns an object
 * mapped to https://fantasy.premierleague.com/drf/event/${eventNumber}/live
 * @returns {Promise}
 */
export function getEvent(eventNumber: number): Promise<Event> {
  return getData(`/event/${eventNumber}/live`);
}

/**
 * Classic league standings:
 * A promise that if fulfilled returns an object
 * mapped to https://fantasy.premierleague.com/drf/leagues-classic-standings/${id}
 * @param leagueId League id
 * @returns {Promise}
 */
export function getClassicLeagueStandings(leagueId: number): Promise<League> {
  return getData(`/leagues-classic-standings/${leagueId}`);
}

/**
 * Returns a promise that if fulfilled returns json object mapped to the given request
 * @param path The path of the rest web api request
 * @returns {Promise}
 * @private
 */
function getData(path: string) {
  return axios.get(path).then((response) => {
    return response.data;
  }).catch((error) => {
    return error;
  });
}
