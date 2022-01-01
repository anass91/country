const inpuText = document.querySelector('.text');
const demo = document.querySelector('.demo');


    function getDataCountr(enterName){
        const request = new XMLHttpRequest();
        request.open('GET', `https://restcountries.com/v2/name/${enterName}`);
        request.send();

        request.addEventListener('load', function(){
            const [data] = JSON.parse(this.responseText);
            console.log(data);

            const html = `
            <article class="country">
                <img class="country__img" src="${data.flag}"/>
                <div class="country__data">
                    <h3 class="country__name">${data.name}</h3>
                    <h4 class="country__region">${data.region}</h4>
                    <p class="country__row"><ion-icon class='icon1' name="analytics-outline"></ion-icon>${(+data.population / 1000000).toFixed(1)}</p>
                    <p class="country__row"><ion-icon class="icon2" name="language-outline"></ion-icon>
                    ${data.languages[0].name}</p>
                    <p class="country__row"><ion-icon class="icon3" name="cash-outline"></ion-icon>${data.currencies[0].name}</p>
                </div>
            </article>
                `;
                demo.insertAdjacentHTML('afterend', html)
        });
    }
    document.querySelector('.btn').addEventListener('click', function(){
        getDataCountr(inpuText.value);
        inpuText.value = '';
    })
