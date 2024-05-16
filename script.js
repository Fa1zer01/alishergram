let likeNumber = document.getElementById("number");
let post = document.getElementById("post1");
let postsBox = document.getElementById("postsBox");
let text = document.getElementById("text");
let com = document.getElementById("com");
let coms = document.getElementById("coms");
let c = 10;
let images = [
    "img1.jpg",
    "img3.jpg",
    "img2.jpg",
]
let texts = [
    "Всем Доброго утра из Сантроупээ, пожалуйста влепите лайк если любите маму",
    "Всем привет, это фото из моего личного офиса в Лос-Сантосе, считаю это заслуживает лайка, подписки и комментария, не забывайте, сегодня вечером розыгрыш моего кактуса, жду вас на стриме :)",
    "Всем привет, провели прямой эфир с розыгрышем, выиграла случайным образом моя мама, так что кактус к сожалению остается у меня, всем хорошего дня, и не забывайте - поставил лайк, прокоментировал и подписался = крутой",
]
for (let i = 1; i < 100; i++) {
    newpost = post.cloneNode(true);
    imgpost = newpost.getElementsByClassName("img")[0];
    text.innerHTML = texts[i % 3];
    imgpost.setAttribute("src", images[i % 3]);
    postsBox.appendChild(newpost);
}
function like() {
    c++;
    likeNumber.innerHTML = c;
}
function addcom() {
    let input = com.value
    let addme = document.createElement("p")
    addme.innerHTML = "alish.gfa:" + input
    coms.appendChild(addme)
}