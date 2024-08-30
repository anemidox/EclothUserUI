class ReturnPage {
    constructor() {
        this.template = `
            <h1>Hello, Return</h1>
        `;
    }
}

const Return = () => {
    const returnPageInstance = new ReturnPage();
    return `
        ${returnPageInstance.template}
    `
}

export default Return;
