class BoostEnvironment {
    constructor(name) {
        this.#name = name;
    }

    #name;

    get adminPanelUri() { return `https://adminpanel-${this.name}.boost.ai`; }

    get name() { return this.#name; }

    get uri() { return `https://${this.#name}.boost.ai`; }
}