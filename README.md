这里是我学习JS的代码


函数之前部分：
一、JS准备

1、JavaScript原名Mocha,由网景公司的Brendan Eich创建。1995年9月，更名为LiveScript;同年12月，在收到SUN公司的商标许可后，改名为JavaScript，这无疑是一个非常成功的营销措施。

2、ECMAScript
	ECMAScript是一个标准，该标准规定了某些功能和功能集。JavaScript是该标准的实现，有许多不同的JavaScript引擎实现ECMAScript标准，最流行的是谷歌的V8引擎。
	
3、使用工具
	Google Chrome浏览器+Sublime Text 3(或者其他)
	
	对于简短的JavaScript代码我们使用Chrome控制台（在Windows和Linux上使用Control+Shift+J打开关闭，Mac上使用Option+Command+j 或者在开发者工具中打开）
	
	使用alert()弹出信息，使用console.log()在控制台打印信息。
	使用clear()清空信息。回车才有结果
	在控制台中使用shift+enter换行
	
4、JavaScript的两种保存形式
	1、写在<script></script>中
	2、<script src="myFirst.js"></script>
	
5、JS的三种消息提示机制

1.警告消息框alert
	alert 方法有一个参数，即希望对用户显示的文本字符串。该字符串不是 HTML 格式。该消息框提供了一个“确定”按钮让用户关闭该消息框，并且该消息框是模式对话框，也就是说，用户必须先关闭该消息框然后才能继续进行操作。 
	window.alert("欢迎！请按“确定”继续。"); 
	
2.确认消息框confirm 
	使用确认消息框可向用户问一个“是-或-否”问题，并且用户可以选择单击“确定”按钮或者单击“取消”按钮。confirm 方法的返回值为 true 或 false。该消息框也是模式对话框：用户必须在响应该对话框（单击一个按钮）将其关闭后，才能进行下一步操作。 
		var value = window.confirm("您确定要删除吗");
		if(value){
			alert("您选择了确定");
		} else{
			alert("您选择了取消");	
		}
			
3.提示消息框prompt
	提示消息框提供了一个文本字段，用户可以在此字段输入一个答案来响应您的提示。该消息框有一个“确定”按钮和一个“取消”按钮。如果您提供了一个辅助字符串参数，则提示消息框将在文本字段显示该辅助字符串作为默认响应。否则，默认文本为 "<undefined>"。 
	与alert( ) 和 confirm( ) 方法类似，prompt 方法也将显示一个模式消息框。用户在继续操作之前必须先关闭该消息框 
	var value = window.prompt("请输入您的名字","默认名字");
	if(value == null){
		alert("您选择了取消按钮");
	} else if(value == ""){
		alert("您未填写您的名字");	
	} else {
		alert("你好"+value);
	}
	
二、变量和原语
1、使用变量存储一个名称的副本，在其他地方我们可以随时使用，修改时我们只修改一处即可。JavaScript使用var来声明变量。
	在JS中使用驼峰命名规则来命名变量：使用多个单词声明变量时，大写第一个单词以后的每个单词的开头字母。
	
2、JavaScript中的注释
	1、单行注释  //
	2、多行注释  /* */
	
	
3、JS中的原始数据
	JS中有6中数据类型，现在我们只谈论其中的5种
	
	字符串 - var greeting = "hello";
	数- var favoriteNum = 33;
	布尔 - var isAwesome = true;
	未定义 - var foo;或var setToUndefined = undefined;
	空值 - var empty = null;
	
	JavaScript被称为“弱”类型语言。这意味着当我们创建变量并将其分配给值时，不必指定正在使用的数据类型。在静态（或强烈）类型的语言（如Java和C ++）中，我们需要指定类型。
	
	1、在JS中使用''与""包裹字符串没有任何区别，但是在拼接字符串和函数混合传参的时候有事需要这两种引号的嵌套使用。
	
	2、在JS中，创建的没有分配值的变量是未定义类型的变量，表示变量本身的状态是未定义
	
		var noValue;
		var myCar = undefined;
	
	3、空值null
		null意味着没有数据，但是赋值了，是一个对象，表示对象内的数据状态
	
	
4、typeof

使用typeof返回变量的类型
typeof(5) 或者 typeof 5

typeof 5; "数字"


5、类型转换
	1、toString()
	  将任何不是未定义的值或者空值转换为字符串
	  
	2、转换为数字
		1、parseInt()、parseFloat()
	这两个函数都从左到右分析。如果他们看到数字，他们将继续解析，直到找到非数字字符，并且将返回一个整数或一个浮点数，这取决于使用哪个函数。
		2、Number()
		它尝试将整个字符串直接转换为一个数字
		如果字符串中包含其他非数字元素，则返回NaN
		
	3、转换为布尔值
	
	var greeting = "hi";
	!! greeting  //true
	
	4、使用+转换成数字
	    typeof	+"304"   //number


三、布尔值
1、在JavaScript中有6个false值：

	0
	""
	null
	undefined
	false
	NaN （不是数字的缩写）
	
2、== 与===
 
   使用==时会进行类型转换但是使用===时不会进行类型转换
   
    1、对于string,number等基础类型，==和===是有区别的
		1）不同类型间比较，==之比较“转化成同一类型后的值”看“值”是否相等，===如果类型不同，其结果就是不等
		2）同类型比较，直接进行“值”比较，两者结果一样
	2、对于Array,Object等高级类型，==和===是没有区别的进行“指针地址”比较
	3、基础类型与高级类型，==和===是有区别的
		1）对于==，将高级转化为基础类型，进行“值”比较
		2）因为类型不同，===结果为false


		
四、数组
	var arr = [5,3,6];
	
	如果访问超越界限的元素，例如arr[3]则会返回undefined;
	
	1.添加到数组
		1、通过新索引设置一个值
			arr[3] = "7";
			arr  	//[5,3,6,7]
				任何没有值的元素将被填充undefined值
					arr[4] = "7";
					arr  	//[5,3,6,undefined,7]
			
		2、添加到数组的末尾
			使用push()方法，可有多个参数，返回数组的新长度

		2、添加到数组的开头
			unshift()方法，返回数组的新长度


	2、从数组中删除
		1、手动改变数组的长度即可，新长度以后的元素将被删除
		2、使用pop()方法删除数组最后一个值，返回被删除的值
		3、使用unshift()方法删除数组最后一个值，返回被删除的值

		4、delete arr4[2] 此索引出的值就被替换成undefined
		
		
	3、强大的splice方法
		splice方法至少接受两个参数。第一个参数是起始索引，指出哪些值将被删除或添加。第二个参数是要删除的值的数量。或者，可以传递无限数量的附加参数; 这些对应于要添加到数组的值。拼接方法总??是返回一个已移除元素的数组。
			arr.splice(a,b,[c]);
			从a索引处删除b个元素，然后在a索引出插入[c]个元素，染回b个被删除的元素

	4、length属性
		数组的length属性用于返回数组的长度，注意：不是方法

	5、slice()
		1、不传入参数时用于复制整个数组
		2、传入参数时，表示需要得到的索引范围，左闭右开

	6、concat()
		用于连接两个数组
		，也可以传入多个数组，或者直接使用逗号分隔符与原始数组连接

		
	7、join()
		将参数插入数组中，作为分隔符，返回一个字符串


	8、indexof()
		找到数组中传入的元素的第一个索引，未找到则返回-1

	   相似函数：
		lastIndexOf()  
			找到数组中传入的元素的最后一个索引，未找到则返回-1
	
	
五、对象
	对象允许我们将键映射到值
	例：
		var firstObj = {
		 firstName：“ Tim ”，
		 lastName：“ Garcia ”，
		 isInstructor：true
		};	
		最后一个逗号省略，其他逗号不能少
		
		
	访问对象：
		firstObj.firstName
		或者
		firstObj["firstName"]
		
		
	两种访问对象属性方法的区别：
		当我们需要评估一些表达式或传递变量以获取该键的名称时，使用括号符号，但是当我们知道该键的名称并且它不是一个变量或表达式时，请始终使用点符号。
		
		
	JavaScript对象中的每个键都是一个字符串！
		
		
	添加到对象
		var obj = {
			 name：“ Jon Snow ”，
			 watchMember：true
		};

		obj.gameOfThrones = “ awesome ” ;
		
		
	从对象中删除
		使用delete关键字
		var obj = {
			 name：“ Elie ”，
			 job： “ Instructor ”
		};

		delete obj.job; //返回true
		
	遍历对象
		for(var singleKey in obj){
			console.log(obj[singleKey]);
		}
		
	确定某个键是否存在于对象中
		if("job" in obj){
			console.log("键存在于对象中");
		} else {
			console.log("键不存在于对象中");
		}
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
	
	
	







函数部分：
函数参数不同于传统函数，不需要声明类型，因为JS是弱类型语言。

函数变量范围

	1、在函数之外定义的所有变量（和没有var关键字的函数内部）都在全局范围内声明
	2、函数内定义的所有变量只能由这些函数（和任何内部函数）访问。域外访问将报错。
	
	
补充：转小写函数：toLowerCase()
      转小写函数：toUpperCase()

	charCodeAt()  //返回字符串指定位置的Unicode编码,第一个字符位置为0 


