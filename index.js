let username ='fazt'
let age =20
let hobbies = false
let points = [10,20,30]
let uset ={
    name:'ryan',
    lastname :'rya'
}
const PI = 3.1416

/* console.log(username)
console.log(age)
console.log(hobbies)
console.log(points)
console.log(uset)
console.log(PI)
 */


if(age>=18){
    console.log("Tu eres un adulto")
}
else if(age>=13)
console.log("Tu eres un adolecente")
else{
    console.log("Tu eres un niño")

}

const showUserInfo = (userName,UserAge) => `El usuario es ${userName} , y tiene ${UserAge} años`


/* function showUserInfo(userName,UserAge){
    return `El usuario es ${userName} , y tiene ${UserAge} años`

}
 */
console.log(showUserInfo("Juan",30))
console.log(showUserInfo("Maria",33))