function Star(uname, age) {
    this.uname = uname;
    this.age = age;
}

Star.prototype.sing = function () {
    console.log("唱歌")
}
//实例成员
var star = new Star("刘德华", 55);
star.sing();
console.log(star);
//静态成员
Star.sex = "男";
console.log(Star.sex)

