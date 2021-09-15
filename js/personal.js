const hiringBox = document.querySelector('.hiringBox');
const biker = document.querySelectorAll('.biker');
const availability = document.querySelectorAll('availability');

const personalUnavailable = () => {
    for (let i of biker){
        let available = true;
        i.addEventListener('click', (evt) => {
            i.classList.toggle('available');
            i.classList.toggle('unavailable');
            if (available) {
                i.lastElementChild.textContent = `Unavailable`
                available = false;    
            }else {
                i.lastElementChild.textContent = `Available`;
                available = true;
            }
        })
    }
}

export { personalUnavailable };