//定义类
class Star {
    constructor(username) {
        this.username = username;
    }
    sing(){
        console.log("唱歌");
    }
}

//创建对象
let star = new Star("刘德华");
console.log(star.username);
console.log(star.sing());