import { Given } from 'cucumber';

Given(
    /^I open the (url|site) "([^"]*)?"$/,
    openWebsite
);
