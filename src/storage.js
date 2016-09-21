const TODO_KEY = 'TODO_KEY';

export default {
    fetch(){
        return JSON.parse(window.localStorage.getItem(TODO_KEY) || '[]');
    },
    save(item){
        window.localStorage.setItem(TODO_KEY,JSON.stringify(item));
    }

}