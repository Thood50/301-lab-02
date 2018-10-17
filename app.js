'ust strict'

const hornArray = [];

function Horns(object) {
    this.url = object.image_url;
    this.title = object.title;
    this.discription = object.description;
    this.keyword = object.keyword;
    this.horns = object.horns;
    hornArray.push(this);
}

Horns.prototype.render = function () {
    $('main').append('<div> class="clone"></div>');
    let $hornContainer = $('div[class="clone"]');
    let $clonedHorn = $('#photo-template').html();
    $hornContainer.html($clonedHorn);
    $hornContainer.find('h2').text(this.title);
    $hornContainer.find('p').text(this.discription);
    $hornContainer.find('img').attr('src', this.url);
    $hornContainer.find('img').attr('alt', this.keyword);
    $hornContainer.find('img').attr('data-horn', this.horns);
    $hornContainer.attr('class', '');
}

function renderHorns() {
    hornArray.forEach( obj => {
        obj.render();
    })
}

let grabData = function() {
    $.getJSON('data.json', data => {
        data.forEach(object => {
            new Horns(object);
        })
    }).then( renderHorns );
}

grabData();