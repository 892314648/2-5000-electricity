let express = require("express")();
let mysql = require("mysql");
const port = 8080;

// Node解决跨域问题
express.all("/*", function(req, res, next) {
    // 跨域处理
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header("Access-Control-Allow-Methods", "PUT,POST,GET,DELETE,OPTIONS");
    res.header("X-Powered-By", ' 3.2.1');
    res.header("Content-Type", "application/json;charset=utf-8");
    next(); // 执行下一个路由
})

// 规划mysql链接
let sql = mysql.createConnection({
	host:"localhost",
	user:"root",
	password:"123456",
	database:"project"
})

// 尝试链接
sql.connect();
// 登录接口login
express.get("/login",(request,response)=>{
	let text = request.query.text;
	let password = request.query.password;

	sql.query(`SELECT * FROM login WHERE text="${text}" AND password="${password}"`,(error,data)=>{
		if(error){
			console.log(error);
			response.send("error")
		}
		else{
			if(!data.length){
				response.end("error")
			}
			else{
				response.end("success")
			}
		}
	})

})

//注册
express.get("/regist", (request, response) => {

    let text = request.query.text;
    let password = request.query.password;
console.log(text)
console.log(password)
    sql.query(`INSERT INTO login (text,password) VALUES ("${text}","${password}")`, (error) => {

        if (error) {

            response.send("error")
        }

        else {

            response.end("success")
        }

    })

})






// 监听在哪一个8080端口上
express.listen(port)
console.log("server is running at " + port)