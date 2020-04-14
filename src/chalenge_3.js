/* eslint-disable max-len */
const challengeOneFunction = (severeImpactInfectionsByRequestedTime, impactInfectionsByRequestedTime, regionAvgDailyIncomeInUSD, regionAvgDailyIncomePopulation) => {
  const challengeThreeData = {};

  challengeThreeData.impactCasesForVentilatorsByRequestedTime = parseInt(0.05 * impactInfectionsByRequestedTime, 10);
  challengeThreeData.severeImpactCasesForVentilatorsByRequestedTime = parseInt(0.05 * severeImpactInfectionsByRequestedTime, 10);
  challengeThreeData.impactCasesForICUByRequestedTime = parseInt(0.02 * impactInfectionsByRequestedTime, 10);
  challengeThreeData.severeImpactCasesForICUByRequestedTime = parseInt(0.02 * severeImpactInfectionsByRequestedTime, 10);

  challengeThreeData.impactDollarsInFlight = impactInfectionsByRequestedTime * regionAvgDailyIncomeInUSD * regionAvgDailyIncomePopulation;
  challengeThreeData.severeImpactDollarsInFlight = severeImpactInfectionsByRequestedTime * regionAvgDailyIncomeInUSD * regionAvgDailyIncomePopulation;

  return challengeThreeData;
};

export default challengeOneFunction;
