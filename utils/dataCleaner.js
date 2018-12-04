function driverCleaner(names, teams, points) {
  let cleaned = names.reduce((acc, curr) => {
    let obj = {
      name: curr,
      team: teams[acc.length],
      points: points[acc.length]
    };

    acc.push(obj);
    return acc;
  }, []);

  return cleaned;
}

function teamCleaner(teams, stats) {
  teams = teams.reduce((acc, team, index) => {
    let myIndex = index * 2;
    let name;

    if (team.length == 8) {
      name = team[0];

      acc[name] = {
        drivers: [`${team[3]} ${team[4]}`, `${team[5]} ${team[6]}`],
        podiums: stats[myIndex],
        titles: stats[myIndex + 1]
      };
    } else {
      name = `${team[0]} ${team[1]}`;

      acc[name] = {
        drivers: [`${team[4]} ${team[5]}`, `${team[6]} ${team[7]}`],
        podiums: stats[myIndex],
        titles: stats[myIndex + 1]
      };
    }

    return acc;
  }, {});

  return teams;
}

module.exports.driverCleaner = driverCleaner;
module.exports.teamCleaner = teamCleaner;
