// USD CAD 23
// 23 USD is worth 28 CAD. You can spend these in the following countries:

// GET https://api.fixer.io/latest?base=USD

const axios = require('axios');

const getExchangeRate = async (from, to) => {
    try {
        const response = await axios.get(`https://api.fixer.io/latest?base=${from}`);
        return response.data.rates[to]; 
    } catch (e) {
        throw new Error(`Unable to get excahnge rate for ${from} and ${to}`);
    }
};

const getCountries = async (currencyCode) => {
    try {
        const response = await axios.get(`https://restcountries.eu/rest/v2/currency/${currencyCode}`);
        return response.data.map((country) => country.name);
    } catch (e) {
        throw new Error(`Unable to get countries that use ${currencyCode}`);
    }
}

// getExchangeRate('USD', 'CNY').then((res) => console.log(res));
// getCountries('CAD').then((res) => console.log(res));

const convertCurrency = (from, to, amount) => {
    let countries;
    return getCountries(to).then((tmpCountries) => {
        countries = tmpCountries;
        return getExchangeRate(from, to);
    }).then((rate) => {
        const exchangedAmount = amount * rate;
        return `${amount} ${from} is worth ${exchangedAmount} ${to}. ${to} can be used in the following countries:\n  - ${countries.join('\n  - ')}`;
    });
}

// convertCurrency('CAD', 'USD', 100).then((status) => {
//     console.log(status);
// });


const convertCurrencyAlt = async (from, to, amount) => {
    let countries = await getCountries(to);
    let rate = await getExchangeRate(from, to);
    const exchangedAmount = amount * rate;
    return `${amount} ${from} is worth ${exchangedAmount} ${to}. ${to} can be used in the following countries:\n  - ${countries.join('\n  - ')}`;    
};

convertCurrencyAlt('USD', 'CNY', 100).then((status) => {
    console.log(status);
}).catch((e) => {
    console.log(e);
});

