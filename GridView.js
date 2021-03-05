class GridView{
    constructor(data){
        this.data = data; //массив данных
        this.header = this.data['header']; //Имя таблицы
        this.cssClass = this.data['cssClass']; //Класс заголовка
        this.attribute = this.data['attribute']; //главная линия
        this.info = this.data['data']; //Информация для ячеек
    }

    drawHeading(){ //Рисуем заголовок
        console.log(this.header);
        console.log(this.cssClass['header'][0]);
        console.log(this.attribute);
        console.log(this.info);
        let header = document.createElement('h1'); //создаем заголовок
        header.textContent = this.header; //текст заголовка
        for (let i = 0; i < this.cssClass['header'].length; i++){ //цикл для добавления классов к заголовку
            header.classList.add(this.cssClass['header'][i]);
        }
        document.querySelector('body').append(header); //добавляем заголовок в body
    }

    render(){ //рисуем таблицу
        const table = document.createElement('table'); //создаем таблицу
        for (let i = 0; i < this.cssClass['table'].length; i++){//цикл для добавления класса к таблице
            table.classList.add(this.cssClass['table'][i]);
        }
        console.log(table);

        //создаем главную линию
        let trLine = document.createElement('tr');//линия таблицы
        for (let key in this.attribute){
            let td = document.createElement('th'); //создаем ячейку
            console.log(this.attribute[key]['label']);
            if (this.attribute[key]['label']){ //если есть label
                td.textContent = this.attribute[key]['label'];
            } else {
                td.textContent = key; // если нет = ключ
            }
            trLine.append(td);
        }
        table.append(trLine);
        document.querySelector('body').append(table);

        //рисуем остальные ячейки
        for (let i = 0; i < this.info.length; i++){
            let dataArray = this.info[i];//необходим для перепора одного ключа обьекта
            console.log(dataArray);
            let tr = document.createElement('tr');
            for (let key in dataArray){ //цикл для перебора ключей и их значений
                let td = document.createElement('td');//создаем ячейки
                let value = dataArray[key];
                td.innerHTML = value;
                
                if (dataArray[key].trim() != ''){ //делаем проверку, нет ли пустых значений
                    tr.append(td);
                }
                
            }
            table.append(tr);
        }
        
    }
}