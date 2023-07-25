class JTHeader extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <header>
                <a href=index.html>
                    <img src="#">
                </a>
                <nav>
                    <ul>
                        <li><a href="index.html">Home</li></a>
                        <li><a href="#">About</li></a>
                        <li><a href="#">Contact</li></a>
                    </ul>
                </nav>
            </header>
        `
    }
}

customElements.define('jt-header', JTHeader);