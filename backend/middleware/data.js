const date_to = new Date();

const month = {
  0: "Jan",
  1: "Feb",
  2: "March",
  3: "April",
  4: "May",
  5: "June",
  6: "July",
  7: "Aug",
  8: "Sept",
  9: "Oct",
  10: "Nov",
  11: "Dec",
};
let mnth = date_to.getMonth();
let date = `${date_to.getDate()} ${month[mnth]} ${date_to.getFullYear()}`;

module.exports = { date };
