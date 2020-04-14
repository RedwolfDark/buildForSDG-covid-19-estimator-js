/* eslint-disable max-len */
const challengeOneFunction = (severeImpactInfectionsByRequestedTime, impactInfectionsByRequestedTime, totalHospitalBeds) => {
  const challengeTwoData = {};

  challengeTwoData.impactSevereCasesByRequestedTime = parseInt(0.15 * impactInfectionsByRequestedTime, 10);
  challengeTwoData.severeImpactSevereCasesByRequestedTime = parseInt(0.15 * severeImpactInfectionsByRequestedTime, 10);

  challengeTwoData.impactHospitalBedsByRequestedTime = parseInt(totalHospitalBeds * 0.35, 10) - challengeTwoData.impactHospitalBedsByRequestedTime;
  challengeTwoData.severeImpactHospitalBedsByRequestedTime = parseInt(totalHospitalBeds * 0.35, 10) - challengeTwoData.severeImpactHospitalBedsByRequestedTime;

  return challengeTwoData;
};

export default challengeOneFunction;
