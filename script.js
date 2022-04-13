var database = [
	{
		username: "furkan",
		password: "webmaster",
		friends: ["abdullah", "yeşim"]
	},
	{
		username: "abdullah",
		password: "123",
		friends: ["furkan", "yeşim"]
	},
	{
		username: "yeşim",
		password: "777",
		friends: ["abdullah", "furkan"]
	}
];
var newsFeed = [
	{
		username: "abdullah",
		tweet: "Bilet fiyatları uçtu uçtu!!!"
	},
	{
		username: "yeşim",
		tweet: "şarjım bitti :("
	}
	,
	{
		username: "furkan",
		tweet: "Javascript bir harika"
	}
];

var userNamePrompt = prompt("Kullanıcı adınızı giriniz!");
var passwordPrompt = prompt("Şifrenizi giriniz!");

function isUserValid(user,pass) {
    for (var i = 0; i < database.length; i++) {
        if (user === database[i].username && pass === database[i].password) {
            return true;
        }
    }
    console.log("Kullanıcı adı veya şifre hatalı");
    return false;
}

function TweetsList(user, pass) {
    if (isUserValid(user, pass)) {
     for (var i = 0; i < newsFeed.length; i++) { 
         if (newsFeed[i].username == user) { continue } 
         else {
			console.log(`${newsFeed[i].username} : ${newsFeed[i].tweet}`); 
        } 
    } 
    } 
}
 TweetsList(userNamePrompt, passwordPrompt);



