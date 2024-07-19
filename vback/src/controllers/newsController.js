const axios = require('axios');

const getNews = async (req, res) => {
  try {
    const { phone, email, page = 1, perPage = 10 } = req.query;

    const response = await axios.get(`${process.env.API_URL}/api/showcase/get_news`, {
      headers: {
        'Authorization': `Bearer ${process.env.API_KEY}`
      },
      params: {
        'client[phone]': phone,
        'client[email]': email,
        page,
        perPage
      }
    });
    console.log('Response from API:', response.data);

    const newsList = response.data.list.map(newsItem => {
      ['local_ru', 'local_en'].forEach(locale => {
        if (newsItem[locale]) {
          newsItem[locale].short_text = newsItem[locale].short_text.replace(/__domain__/g, process.env.STATIC_DOMAIN);
          newsItem[locale].full_text = newsItem[locale].full_text.replace(/__domain__/g, process.env.STATIC_DOMAIN);
        }
      });
      return newsItem;
    });

    res.json({ ...response.data, list: newsList });
  } catch (error) {
    res.status(500).json({ message: 'Error fetching news', error: error.message });
  }
};

module.exports = {
  getNews,
};
