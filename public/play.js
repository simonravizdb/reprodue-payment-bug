import axios from 'axios';

const BASE_URL = 'https://en.wikipedia.org/wiki/List_of_HTTP_status_codes';

const makeRequest = async () => {
  try {
    const response =  axios.get(BASE_URL)
    .then((response) => {
      // console.log(response.data);
      console.log(response.status);
    //   console.log(response.statusText);
    //   console.log(response.headers);
    //   console.log(response.config);
    });

    return response
  } catch (errors) {
    console.error(errors);
  }
};
makeRequest()
