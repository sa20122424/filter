async function ok() {
    try {
        let response = await fetch('https://dummyjson.com/users');
        let data = await response.json();

        let body = document.querySelector('body');
        body.classList.add('box1');

       
        let filterInput = document.createElement('input');
        filterInput.classList.add('filtetInput');
        filterInput.placeholder = 'Filter by name'
        filterInput.classList = 'filterInput'
        body.appendChild(filterInput);

    
        let container = document.createElement('div');
        container.classList.add('container');
        body.appendChild(container);

        data.users.forEach(e => {
            let box = document.createElement("div");
            box.classList.add('box');

            let p = document.createElement("p");
            p.innerHTML = e.firstName;

            let p_id = document.createElement("p");
            p_id.innerHTML = `Age: ${e.age}`;

            let p_email = document.createElement("p");
            p_email.innerHTML = `Email: ${e.email}`;

            let p_phone = document.createElement("p");
            p_phone.innerHTML = `Phone: ${e.phone}`;

            let birthDate = document.createElement("p");
            birthDate.innerHTML = `Birth Date: ${e.birthDate}`;

            let img = document.createElement("img");
            img.src = e.image;

            box.append(img, p, p_email, p_id, p_phone, birthDate);
            container.appendChild(box);
        });

       
        filterInput.addEventListener('input', function () {
            let inputValue = filterInput.value.toLowerCase();
            let cards = container.querySelectorAll('.box');

            cards.forEach(card => {
                let name = card.querySelector('p').textContent.toLowerCase();
                if (name.includes(inputValue)) {
                    card.style.display = 'block';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    } catch (error) {
        console.error(error);
    }
}

ok();
