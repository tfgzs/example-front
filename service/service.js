var fs=require('fs');

exports.get_index_data=function(){
	var content=fs.readFileSync('dist/mock/book.json','UTF-8')
	return content;
}