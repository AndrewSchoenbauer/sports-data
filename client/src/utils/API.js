export const nflOdds = (APIKey) => {
    return fetch('https://api.the-odds-api.com/v4/sports/americanfootball_nfl/odds?${APIKey}')
}