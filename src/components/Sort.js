export default function Sort(props) {
    function alphabetSort(a, b) {
        return a.firstName + a.lastName < b.firstname + b.lastName
    }

    /*
        Сортировка по дню рождения 
        Как сравнить две даты относительно нынешней даты? 
        Нам интересен только день и месяц в дате рождения 
        Пусть curDate нынешняя дата
        Если a - curDate < 0, то a переносим на след.год 
        Если a - curDate >= 0, то день рождения ещё будет в этом году 

        разница date - date -> int 
        так что сравнивать нормально выйдет 
        однако, нужно будет заранее вытащить дату, в которую мы начали сортировку,
        а не вытаскивать на каждом сравнении 
        как это лучше будет сделать?
        const check1 = new Date("1970.09.28")
        const check2 = new Date()
        check1.setFullYear(check2.getFullYear() + 1)
        console.log(check1.toString())
    */

    return (
        <div>
            <input type="radio" id="alphabet" name="sort"/>
            <label for="alphabet">По алфавиту...</label>

            <input type="radio" id="birthday" name="sort"/>
            <label for="birthday">По дню рождения...</label>
        </div>
    )
}