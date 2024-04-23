export const UrlMachine = {
    protocol: "http://",
    host: "localhost",
    action: "turnovers",
    getUrl(id) {
        return `${this.protocol}${this.host}?action=${this.action}&id=${id}`;
    }
};