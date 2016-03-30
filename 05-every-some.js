function checkUsersValid(goodUsers) {
  console.log(goodUsers);
  return function allUsersValid(submittedUsers) {
    // SOLUTION GOES HERE
    return submittedUsers.every(function(sbmUser) {
      return goodUsers.some(function(goodUser) {
        return sbmUser.id === goodUser.id;
      });
    });
  };
}

module.exports = checkUsersValid