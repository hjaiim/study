var fs = require('fs');

var stdin = process.stdin;
var stdout = process.stdout;

fs.readdir(process.cwd(),function (err,files) {
	console.log('');

	if(!files.length){
		return console.log('  \033[31m No files to show!\033[39m\n');
	}

	console.log(' Select Which file or directory you want to see\n');
	
    console.log('文件数量:'+files.length);
	
	function file(i) {
		var filename = files[i];
        
        //获取文件信息
        fs.stat(__dirname+'/'+filename,function (err,stat) {
        	// console.log('stat--',stat);
        	if(stat.isDirectory()){
        		console.log('   '+i+'   \033[36m' + filename + '/\033[39m');
        	}else{
        		console.log('   '+i+'   \033[90m' + filename + '/\033[39m')
        	}

        	i++;

        	if (i == files.length) {
        		// console.log('');
        		// process.stdout.write('  \033[33mEnter your choice: \033[39m');
        		// //等待用户输入
        		// process.stdin.resume();
        		// //设置流编码为utf8,这样就能支持特殊字符了.
        		// process.stdin.setEncoding('utf8');
        		read();
        	} else {
        		file(i);
        	}
        })
	}

	function read() {
		console.log('');
		stdout.write('  \033[33mEnter your choice: \033[39m');
		stdin.resume();
		stdin.setEncoding('utf8');
		//开始监听data事件
		stdin.on('data',option);
	}

    //检查用户输入是都匹配files数组中的下标.
	function option(data) {
		var filename = files[Number(data)];
		if (!filename) {
			stdout.write('  \033[33mEnter your choice: \033[39m');
		} else {
		    //检查通过,再次将流暂停(回到默认状态,以便于之后做完fs操作后,程序能够顺利退出)
			stdin.pause();
            
            fs.readFile(__dirname + '/' + filename, 'utf8',function (err,data) {
            	console.log('');
            	console.log('\033[35m' + data.replace(/(.*)/g,'    $1') + '\033[39m');
            });
		}
	}

	file(0);
});