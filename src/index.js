fetch('https://dog.ceo/api/breeds/image/random/4')
    .then(res => res.json())
    .then(data => {
        let dogImageContainer = document.getElementById('dog-image-container')
        data.message.forEach(dog => {
            let dogImage = document.createElement('img')
            dogImage.src = dog
            dogImageContainer.appendChild(dogImage)
    })
})

fetch('https://dog.ceo/api/breeds/list/all')
    .then(res => res.json())
    .then(data => {
        let breedList = document.getElementById('dog-breeds')
        let breeds = data.message
        Object.keys(breeds).forEach(breed => {
            let li = document.createElement('li')
            li.textContent = breed
            breedList.appendChild(li)
            li.addEventListener('click', () => {
                li.style.color = 'orange'
            })
        })
        let dropdown = document.querySelector('#breed-dropdown')
        dropdown.addEventListener('change', (event) => {
            let selection = event.target.value;
            breedList.innerHTML = '';
            Object.keys(breeds).forEach(breed => {
                if (breed.startsWith(selection)){
                    let li = document.createElement('li')
                    li.textContent = breed
                    breedList.appendChild(li)
                }
            })
        })
    })

