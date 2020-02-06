const expect = require('chai').expect;
/**
 * Check if the given element is (not) visible
 * @param  {String}   selector   Element selector
 * @param  {String}   falseCase Check for a visible or a hidden element
 */
isDisplayed = (selector, falseCase) => {
    /**
     * Visible state of the give element
     * @type {String}
     */
    const isDisplayed = $(selector).isDisplayed();

    if (falseCase) {
        expect(isDisplayed).to.not
            .equal(true, `Expected element "${selector}" not to be displayed`);
    } else {
        expect(isDisplayed).to
            .equal(true, `Expected element "${selector}" to be displayed`);
    }
};

module.exports = isDisplayed;
