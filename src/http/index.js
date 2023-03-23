import axios from 'axios';

const baseUrl = 'https://tasty.p.rapidapi.com';
const rapidApiKey = '<INSERT RAPID API KEY>';
const rapidApiHost = 'tasty.p.rapidapi.com';
const requestHeaders = {
  'X-RapidAPI-Key': rapidApiKey,
  'X-RapidAPI-Host': rapidApiHost
};

export const getRecipesList = async (tags = null, size = '20') => {
  return await axios.get(`${baseUrl}/recipes/list`,{
    params: {
      from: '0',
      size,
      tags,
    },
    headers: requestHeaders
  });
}
