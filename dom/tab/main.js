'use strict';

const tabLabels = document.querySelectorAll('.tab__label li a');
const tabContents = document.querySelectorAll('.tab__content');

tabLabels.forEach(clickedLabel => {
    clickedLabel.addEventListener('click', e => {
        e.preventDefault();

        tabLabels.forEach(label => {
            label.classList.remove('active');
        });
        
        clickedLabel.classList.add('active');

        tabContents.forEach(content => {
            content.classList.remove('active');
        });

        const targetContent = document.getElementById(clickedLabel.dataset.id);
        if (targetContent) {
            targetContent.classList.add('active');
        } else {
            console.error(`Element with ID '${clickedLabel.dataset.id}' not found.`);
        }
    });
});
