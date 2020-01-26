class loginPage {

    get username() {
        return $('#username');
    }

    get password() {
        return $('#password');
    }

    get submit() {
        return $('#login > button');
    }

    get flash() {
        return $('#flash').getText();
    }

    get open() {
        return browser.url('/login');
    }
}

export default new loginPage();