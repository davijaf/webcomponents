class CardNews extends HTMLElement {
    constructor(){
        super();

        // base do component
        const shadow = this.attachShadow({mode: "open"});
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }

    build(){
        // enviar para a shadow
        const componentRoot = document.createElement("div");
        componentRoot.setAttribute("class", "card");

        const card_left = document.createElement("div");
        card_left.setAttribute("class", "card_left");
        componentRoot.appendChild(card_left);

        const autor = document.createElement("span");
        autor.textContent = "By "+ (this.getAttribute("autor") || "Anonymous");
        card_left.appendChild(autor);


        const linkTitle = document.createElement("a");
        linkTitle.setAttribute("href", "#");
        linkTitle.textContent = this.getAttribute("title");
        linkTitle.href = (this.getAttribute("link-url") || "#");
        card_left.appendChild(linkTitle);

        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");
        card_left.appendChild(newsContent);

        const card_right = document.createElement("div");
        card_right.setAttribute("class", "card_right");
        componentRoot.appendChild(card_right);

        const imageNews = document.createElement("img");
        imageNews.src = this.getAttribute("link-image") || "assets/anonymous.jpg";
        card_right.appendChild(imageNews);

        return componentRoot;
    }

    styles(){
        //estilizar o component
        const style = document.createElement("style");

        style.textContent = `
        *{
            box-sizing: border-box;
            font-family: 'Segoe UI', sans-serif;
        }

        .card{
            margin-left: auto;
            margin-right: auto;
            width: 720px;
            border: 1px solid gray;
            display: flex;
            flex-direction: row;
            box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        -webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
        -moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
            justify-content: space-between;
        }

        .card_left{
            padding: 10px;
            display: flex;
            flex-direction: column;
            align-items: flex-start;

        }

        .card_left > a {
            margin-top: 15px;
            font-size: 30px;
            color: black;
            text-decoration: none;
            font-weight: bold;

        }

        .card_left >  p {
            color: rgb(70,70,70);
            justify-content: flex-start;
        }

        .card_left >  span {
            font-weight: 400;
        }

        .card_right {
            width: 200px;

        }

        .card_right > img {
            width: 200px;
            height: 200px;
        }
        `
        return style;
    }
}

customElements.define('card-news', CardNews);