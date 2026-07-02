const { faker } = require('@faker-js/faker');

const validCountries = [
    'India', 'United States', 'United Kingdom',
    'United Arab Emirates', 'Saudi Arabia', 'Australia',
    'Canada', 'Germany', 'Singapore', 'Qatar'
];

const randomCountry     = validCountries[Math.floor(Math.random() * validCountries.length)];
const generatedEmail    = faker.internet.email();
const generatedPassword = 'Test@123';

exports.bssData = {

    signUp: {
        organizationName: faker.company.name(),
        contactName:      faker.person.fullName(),
        emailId:          generatedEmail,
        mobileCountry:    randomCountry,
        mobileNumber:     faker.string.numeric(10),
        country:          randomCountry,
        designation:      faker.person.jobTitle(),
        department:       faker.commerce.department(),
        password:         generatedPassword,
        confirmPassword:  generatedPassword,
    },

    signIn: {
        emailId:  generatedEmail,
        password: generatedPassword,
    }
}