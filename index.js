document.querySelector("#appMountPoint > div > div > div > div > div > div > div.our-story-cards > div:nth-child(2) > div.default-ltr-cache-b2rltc.ejqbulh1 > div.default-ltr-cache-7cljuy.ejqbulh3 > div > img")
document.querySelector("#appMountPoint > div > div > div > div > div > div > div.our-story-cards > div:nth-child(2) > div.default-ltr-cache-b2rltc.ejqbulh1 > div.default-ltr-cache-7cljuy.ejqbulh3 > div > div > video > source")
document.querySelector("#appMountPoint > div > div > div > div > div > div > div.our-story-cards > div:nth-child(2) > div.default-ltr-cache-b2rltc.ejqbulh1 > div.default-ltr-cache-7cljuy.ejqbulh3 > div > div > div:nth-child(3)")
const netflixInfo = document.querySelector('.parent-list');
netflixInfo.addEventListener('click',function(e){
    console.log(e.target.tagName)
    if(e.target.tagName === 'LI'){
        const sublist = e.target.querySelector('.Sub-list')
        sublist.classList.toggle('hidden')
    }
    netflixInfo.forEach(function(question){
        question.addEventListener('click',function(){
            this.nextElementSibling.classList.toogle('show');
        });
    });

    
});
