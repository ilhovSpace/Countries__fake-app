const request = async (requestValue) => {
  try {
    const result = await fetch(
      `https://restcountries.eu/rest/v2/${requestValue}`
    );

    return result.json();
  } catch (error) {
    return error;
  }
};

export default request;
