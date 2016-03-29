function checkUsersValid(goodUsers) {
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
    return submittedUsers.every(function(subUser) {
      return goodUsers.some(function(goodUser) {
        return subUser === goodUser;
      });
    });
  };
}

module.exports = checkUsersValid