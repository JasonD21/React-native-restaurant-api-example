import axios from "axios";

export default axios.create({
  baseURL: "https:/api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer KCQ0wwOX8fhX-HnbY5V1al3jiOcbBW3J1GzrcsVABzYckcETkICSKJRvnzZlp2gJmwQD1dNaW9KBFus5p5PHyS0b4gpSva0IigwSI3uJOXsxQJmcgw_0XrNseInfXnYx",
  },
});
