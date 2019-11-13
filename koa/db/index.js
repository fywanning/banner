const mysql=require('mysql')

var connection=mysql.connection({
  host:'127.0.0.1',
  post:'3306',
  user:'root',
  password:'root',
  database:'1704e'
})

connection.connect((error)=>{
  if(error){
    console.log('连接失败')
  }
  else{
    console.log('连接成功')
  }
})