const dataGoods = [ //данные для таблицы
    {
        company:'Samsung',
        city: 'Chtkol',
        country:'South Corea',
        src : "",
    },
    {
        company:'Apple',
        city:'Wahsingtone DC',
        country: 'USA',
        src : "",
    },
    {
        company:'Xiaomi',
        city: 'Czun',
        country:'China',
        src : "",
    },
    {
        company:'Honor',
        city:'Gaundun',
        country:'China',
        src : "",
    },
];

let nameTable = 'Бренды телефонов';


const data = {
    header: nameTable,
    cssClass: { //добавить классы
        header : ["header","header_dop"],
        table : ["table","table_color"],
    },
    attribute : { //label - наименование
        'company':{ //'Колонка 1
            'label' : 'Компания', //label
        },
        'city':{ //Колонка 2
            'label' : 'Город',
        },
        'country':{
            'label':'Страна',
           /* 'value' :(data) =>{
                if (data['country'] === 'South Corea'){
                    return data['country'] + ' map';
                }
                return data['country'];
            }*/
        },
    },
    data : dataGoods,
};
let gridView = new GridView(
    data //передаем 
);
gridView.drawHeading(); //Заголовок
gridView.render(); //Таблица