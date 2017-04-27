JS中的错误对象都是函数Error创建的

JS中有四种常见的错误：
	1、语法错误：SyntaxError
	2、引用错误（访问的变量不存在）:ReferenceError
	3、TypeError  :类型错误，访问一个不是函数或者未定义属性
	
		var data = {};
		data.displayInfo();
		//TypeError   data.displayInfo的值是undefined,undefined不是一个函数
		
		
		var data = {};
		data.displayInfo.foo = "bar";
		//TypeError  我们试图给undefined添加一个属性"foo",Undefined不是一个对象，所以我们不能这样做。
	
	
	
	
	4、RangeError:自身调用时发生，超过最大堆栈调用大小就会抛出错误
	
JS中捕捉抛出异常与Java类似：
	try{
	
	}catch(e){
	
	}finally{
	
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	