let selectedMovie = JSON.parse(sessionStorage.getItem('selectedMovie'));

if(selectedMovie) {
    let movieImage = document.getElementById('movie-image');
    let movieName = document.getElementById('movie-name');
    let movieTime = document.getElementById('movie-time');
    let movieDuration = document.getElementById('movie-duration');
    let movieRoom = document.getElementById('movie-room');

    movieImage.src = selectedMovie.img;
    movieName.textContent = selectedMovie.title;
    movieTime.textContent = selectedMovie.time;
    movieDuration.textContent = selectedMovie.duration;
    movieRoom.textContent = selectedMovie.rooms;
}

function selectSeat(seat, seatId) {
    if (seat.classList.contains('available')) {
        if (seat.classList.contains('selected')) {
            seat.classList.remove('selected');
            seat.style.backgroundColor = '';
            sessionStorage.removeItem(seatId);
        } else {
            seat.classList.add('selected');
            seat.style.backgroundColor = 'orange';
            sessionStorage.setItem(seatId, 'selected');
        }
        updateDetails();
    } else {
        console.log('Este assento não está disponível.');
    }
}

function updateDetails() {
    let selectedSeats = [];
    for(let i = 0; i < sessionStorage.length; i++) {
        let key = sessionStorage.key(i);
        if(sessionStorage.getItem(key) === 'selected') {
            selectedSeats.push(key);
        }
    }
    let totalPrice = selectedSeats.length * 30;

    sessionStorage.setItem('ticketsPrice', totalPrice);

    if(totalPrice === 0) {
        document.getElementsByClassName('seats-price')[0].innerHTML = '';
    }else
        document.getElementsByClassName('seats-price')[0].innerHTML = 'Total: R$' + totalPrice + ',00';
}

function confirmSelection() {
    let selectedSeats = [];
    for (let i = 0; i < sessionStorage.length; i++) {
        let key = sessionStorage.key(i);
        if(sessionStorage.getItem(key) === 'selected') {
            selectedSeats.push(key);
        }
    }
    sessionStorage.setItem('selectedSeats', JSON.stringify(selectedSeats));
    window.location.href = "foodsdrinks.html";
}

