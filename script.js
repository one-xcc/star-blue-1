// async function updateBodyBackground() {
//     fetch('https://api.bing.com/images/search?q=daily+image', { mode: 'no-cors' })
//         .then(response => response.json())
//         .then(data => {
//             const imageUrl = `https://www.bing.com${data.images[0].url}`;
//             document.getElementById("app").style.backgroundImage = "url(" + imageUrl + ")";
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// }
//
// updateBodyBackground();
// setInterval(updateBodyBackground, 86400000);

function disableCopy() {
    document.addEventListener('contextmenu', event => event.preventDefault());
    document.addEventListener('copy', (e) => {
        e.preventDefault();
        e.stopPropagation();
    });
    document.oncut = function(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    document.onpaste = function(e) {
        e.preventDefault();
        e.stopPropagation();
    }
    document.onkeydown = function(e) {
        if (e.keyCode === 123) {
            e.preventDefault();
            return false;
        }
    };
    document.body.style.userSelect = "none";
    document.body.style.msUserSelect = "none";
    document.body.style.mozUserSelect = "none";
    document.body.style.khtmlUserSelect = "none";
}

disableCopy();