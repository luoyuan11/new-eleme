var express = require('express');

var mysql = require('mysql');

var app = express();

// 为了不再前端写代理，我直接在后端里面设置 cors
app.use(function (req, res, next) {
	console.log('这个肯定会进来');

	// 处理跨域  这个是允许的请求的地址的源
  	res.set('Access-Control-Allow-Origin', '*');
  	// 如果是post的话，这个跨域的设置少了 允许的请求的自定义头信息
  	res.set("Access-Control-Allow-Headers", "content-type");
	next();
})

// 登录接口
app.post('/login', function (req, res) {

	var body = '';

	var client = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : 'react'
	})

	req.on('data', function(chunk) {
		body += chunk;
	})

	req.on('end', function() {
		body = JSON.parse(body);

		var phoneNum = body.phoneNum;
		var password = body.password;
		console.log(phoneNum, password);

		// 数据库一个链接
		client.connect();
		var sql = `select * from react where phoneNum='${phoneNum}' and password='${password}'`;
		client.query(sql, function(err, results, fields) {
			if (err) {
				console.log(err);
				res.send({ code: -1, msg: '登录失败' });
			} else {
				if (results.length > 0) {
					res.send({ code: 0, msg: '登录成功' });
					console.log(results);
				} else {
					res.send({ code: -2, msg: '用户名或密码错误' });
				}
			}
		})

		// client.end();
	})


})

app.post('/register', function (req, res) {
  var body = '';

	var client = mysql.createConnection({
		host     : 'localhost',
		user     : 'root',
		password : '',
		database : 'react'
	})

	req.on('data', function(chunk) {
		body += chunk;
	})

	req.on('end', function() {
		body = JSON.parse(body);

		var phoneNum = body.phoneNum;
		var password = body.password;
		console.log(phoneNum, password);
		console.log(typeof password);

		// 数据库一个链接
		client.connect();
    var sql = `select * from react where phoneNum=${phoneNum} `;

      client.query(sql, function(err, results, fields) {
        if (err) {
          console.log(err);
          res.send({ code: -1, msg: '注册失败' });
        } else {
          if (results.length>0) {
            res.send({ code: -2, msg: '用户名不存在或有误' });
            console.log(results);
          } else {
						var sqli =`insert into react (phoneNum, password) values ("${phoneNum}","${password}")`
						client.query(sqli, function(err, results, fields){
							if(err){
								console.log(err);
								res.send({code:-1,msg:'注册失败'})
							}else{
								res.send({ code: 0, msg: '注册成功' });
							}
						})
          }
        }
      })
	})
})

app.listen(4000);
