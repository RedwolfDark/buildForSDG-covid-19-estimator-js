/* eslint-disable max-len */
const challengeOneFunction = (reportedCases, timeToElapse) => {
  const challengeOneData = {};
  let powerCasesIncrease = 0;

  challengeOneData.impactCurrentlyInfected = reportedCases * 10;

  challengeOneData.severeImpactCurrentlyInfected = reportedCases * 50;

  powerCasesIncrease = parseInt(timeToElapse / 3, 10);

  challengeOneData.impactInfectionsByRequestedTime = challengeOneData.impactCurrentlyInfected * 2 ** powerCasesIncrease;
  challengeOneData.severeImpactInfectionsByRequestedTime = challengeOneData.severeImpactCurrentlyInfected * 2 ** powerCasesIncrease;

  return challengeOneData;
};

export default challengeOneFunction;
