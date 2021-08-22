const axios = require("axios");

const fetchWakatimeStats = async ({ username, api_domain, range }) => {
  try {
    const { data } = await axios.get(
      `https://${
        api_domain ? api_domain.replace(/\/$/gi, "") : "wakatime.com"
      }/api/v1/users/${username}/stats/${range || 'last_7_days'}?is_including_today=true&is_up_to_date=true&is_other_usage_visible=true`,
    );

    return data.data;
  } catch (err) {
    if (err.response.status < 200 || err.response.status > 299) {
      throw new Error(
        "Wakatime user not found, make sure you have a wakatime profile",
      );
    }
    throw err;
  }
};

module.exports = {
  fetchWakatimeStats,
};
