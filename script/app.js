import { data } from '../script/emoji.js';

function createCard(emojiData) {
    const card = document.createElement("div");
    card.classList.add("carusel-card"); 
    card.innerHTML = `
        <div id="card">
            <div name="emoji_img" class="symbol" id="symbol">${emojiData.symbol}</div>
            <p id="title"><a href="#">${emojiData.title}</a></p>
            <p id="keywords">${emojiData.keywords}</p>
        </div>
    `;
    return card;
}


document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector(".carusel");
    const keywordInput = document.getElementById('site-search');

    
    data.forEach(emojiData => {
        const card = createCard(emojiData);
        container.appendChild(card);
    });

    function filterEmoji() {
        const keyword = keywordInput.value.toLowerCase();
        const emojiBlocks = container.querySelectorAll('.carusel-card');

        emojiBlocks.forEach(block => {
            const keywords = block.querySelector('#keywords').textContent.toLowerCase();
            const titles = block.querySelector('#title').textContent.toLowerCase();
            if (keywords.includes(keyword)) {
                block.style.display = 'flex';
            } else {
                block.style.display = 'none';
            }

            if (titles.includes(keyword)) {
                block.style.display = 'flex';
            } else {
                block.style.display = 'none';
            }

        });
    }

    keywordInput.addEventListener('input', filterEmoji);
});
