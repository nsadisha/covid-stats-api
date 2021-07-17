# covid-stats-api
[![](https://badges.aleen42.com/src/node.svg)]()
[![](https://img.shields.io/badge/Licence-MIT-orange)]()
[![Heroku](https://heroku-badge.herokuapp.com/?app=heroku-badge)]()

## About
This is a simple api made with `ExpressJs` which provides you accurate corona stats.

## Documentation

### Get covid stats for your country

#### Request
```
GET https://stats19.herokuapp.com
```
#### Responce
```json
{
    "Country":"United States of America",
    "CountryCode":"",
    "Province":"",
    "City":"",
    "CityCode":"",
    "Lat":"0",
    "Lon":"0",
    "Confirmed":34054952,
    "Deaths":608815,
    "Recovered":0,
    "Active":33444265,
    "Date":"2021-07-16T00:00:00Z"
}
```
### Get stats for a specific country

#### Request
```
GET https://stats19.herokuapp.com/country/in
```
#### Responce
```json
{
    "Country":"India",
    "CountryCode":"",
    "Province":"",
    "City":"",
    "CityCode":"",
    "Lat":"0",
    "Lon":"0",
    "Confirmed":31064908,
    "Deaths":413091,
    "Recovered":30227792,
    "Active":430422,
    "Date":"2021-07-16T00:00:00Z"
}
```
### Get summary

#### Request
```
GET https://stats19.herokuapp.com/summary
```
#### Responce
```json
{
  "Global": {
    "NewConfirmed": 100282,
    "TotalConfirmed": 1162857,
    "NewDeaths": 5658,
    "TotalDeaths": 63263,
    "NewRecovered": 15405,
    "TotalRecovered": 230845
  },
  "Countries": []
}
```
### Get a list of countries

#### Request
```
GET https://stats19.herokuapp.com/countries
```
#### Responce
All available countries will be listed.
```json
[
    {"Country":"Nauru","Slug":"nauru","ISO2":"NR"},
    {"Country":"Algeria","Slug":"algeria","ISO2":"DZ"},
    {"Country":"Ghana","Slug":"ghana","ISO2":"GH"},
    {"Country":"Finland","Slug":"finland","ISO2":"FI"},
    {"Country":"France","Slug":"france","ISO2":"FR"},
    {"Country":"Russian Federation","Slug":"russia","ISO2":"RU"},
    {"Country":"Macao, SAR China","Slug":"macao-sar-china","ISO2":"MO"}
]
```
### Get daily stats in a specific country

#### Request #1
```
GET https://stats19.herokuapp.com/days/us
```
#### Responce #1
```json
[
    {"Country":"United States of America","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Confirmed":7,"Deaths":0,"Recovered":0,"Active":24,"Date":"2020-03-01T00:00:00Z"},
    {"Country":"United States of America","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Confirmed":23,"Deaths":5,"Recovered":0,"Active":42,"Date":"2020-03-02T00:00:00Z"},
    {"Country":"United States of America","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Confirmed":19,"Deaths":1,"Recovered":0,"Active":60,"Date":"2020-03-03T00:00:00Z"},
    {"Country":"United States of America","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Confirmed":33,"Deaths":4,"Recovered":0,"Active":89,"Date":"2020-03-04T00:00:00Z"},
    {"Country":"United States of America","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Confirmed":77,"Deaths":1,"Recovered":0,"Active":165,"Date":"2020-03-05T00:00:00Z"},
    {"Country":"United States of America","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Confirmed":53,"Deaths":2,"Recovered":0,"Active":216,"Date":"2020-03-06T00:00:00Z"},
    {"Country":"United States of America","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Confirmed":166,"Deaths":3,"Recovered":0,"Active":379,"Date":"2020-03-07T00:00:00Z"},
    {"Country":"United States of America","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Confirmed":116,"Deaths":4,"Recovered":0,"Active":491,"Date":"2020-03-08T00:00:00Z"},
    {"Country":"United States of America","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Confirmed":75,"Deaths":1,"Recovered":0,"Active":565,"Date":"2020-03-09T00:00:00Z"},
    {"Country":"United States of America","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Confirmed":188,"Deaths":6,"Recovered":1,"Active":746,"Date":"2020-03-10T00:00:00Z"}
]
```
#### Request #2
```
GET https://stats19.herokuapp.com/days/us?cumulative=true
```
#### Responce #2
```json
[
    {"Country":"United States of America","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Confirmed":55,"Deaths":6,"Recovered":7,"Active":42,"Date":"2020-03-02T00:00:00Z"},
    {"Country":"United States of America","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Confirmed":74,"Deaths":7,"Recovered":7,"Active":60,"Date":"2020-03-03T00:00:00Z"},
    {"Country":"United States of America","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Confirmed":107,"Deaths":11,"Recovered":7,"Active":89,"Date":"2020-03-04T00:00:00Z"},
    {"Country":"United States of America","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Confirmed":184,"Deaths":12,"Recovered":7,"Active":165,"Date":"2020-03-05T00:00:00Z"},
    {"Country":"United States of America","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Confirmed":237,"Deaths":14,"Recovered":7,"Active":216,"Date":"2020-03-06T00:00:00Z"},
    {"Country":"United States of America","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Confirmed":403,"Deaths":17,"Recovered":7,"Active":379,"Date":"2020-03-07T00:00:00Z"},
    {"Country":"United States of America","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Confirmed":519,"Deaths":21,"Recovered":7,"Active":491,"Date":"2020-03-08T00:00:00Z"},
    {"Country":"United States of America","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Confirmed":594,"Deaths":22,"Recovered":7,"Active":565,"Date":"2020-03-09T00:00:00Z"},
    {"Country":"United States of America","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Confirmed":782,"Deaths":28,"Recovered":8,"Active":746,"Date":"2020-03-10T00:00:00Z"},
    {"Country":"United States of America","CountryCode":"","Province":"","City":"","CityCode":"","Lat":"0","Lon":"0","Confirmed":1147,"Deaths":33,"Recovered":8,"Active":1106,"Date":"2020-03-11T00:00:00Z"}
]
```


# Set up

### Requirements
- [Node](https://nodejs.org/en/)

### Local development
After the above requirements have been met:

<b>1. Clone this repository and `cd` into it</b>

```bash
git clone https://github.com/nsadisha/covid-stats-api.git
cd covid-stats-api
```
<br>

<b>2. Install dependencies</b>

```bash
npm install
```
<br>

<b>3. Run the server </b>

```bash
npm start
```

## Contributing
This project is open source and welcomes contributions.
<br>
[Visit the project on GitHub](https://github.com/nsadisha/ip-info)

## License
[MIT](http://www.opensource.org/licenses/mit-license.html)

## Disclaimer
No warranty expressed or implied. Software is as is.
