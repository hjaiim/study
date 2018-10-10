var http = require('http');
var queryString = require('querystring');

var postHtml = 
'<html><head><meta charset="utf-8"><title>Hjai</title></head>' + 
'<body>' + 
'<form method="post">' + 
'帅哥名字: <input name="name"><br>' +
'帅哥年龄: <input name="age"><br>' + 
'<input type="submit">' +
'</form>' +
'</body></html>';

http.createServer(function(req,res){
var body = "";
req.on('data',function(chunk){
body += chunk;
});

req.on('end',function(){
//解析参数
body = queryString.parse(body);
//设置响应头部信息以及编码
res.writeHead(200,{'Content-Type':'text/html;charset=utf8'});

if(body.name && body.age) {//输出提交的数据
	res.write('提交姓名:' + body.name);
	res.write('<br>');
	res.write('提交年龄:' + body.age);
}else{//输出表单
res.write(postHtml);
}
res.end();
});
}).listen(3000);
