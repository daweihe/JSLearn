什么是事件：
	事件就是我们可以通过浏览器交互来触发的事情。
以下是一些我们可以监听的潜在的事件：
	1、点击某个东西
	2、鼠标悬停在某物上
	3、按某些键
	4、当DOM加载时
	5、提交表单时
	
如何添加监听事件
	var button = document.querySelector('first_button');
	button.addEventListener("click",function(){
		alert("you clicked the button");
	});
	
	
如何删除监听事件	
	如果我们想要删除监听事件，那么在添加监听事件的时候传入的回调函数不应该是匿名的，而应该有个名字。然后再删除该监听事件。
	var button = document.querySelector('#event');

    function alertData() {
        alert("你点击了按钮");
    }
    button.addEventListener("click", alertData);

    button.removeEventListener("click", alertData);
	

添加事件以等待DOM加载
	由于我们的script标签在DOM加载之前运行，所以不知道是什么body内的内容，所以我们在执行任何JavaScript之前等待DOM加载。这可以通过load事件或DOMContentLoaded事件来完成
	 document.addEventListener("DOMContentLoaded", function(){
            var container = document.getElementById("container");
            container.innerText = "Hello World"; 
        });
	
事件对象中的数据
	触发事件时，我们可以访问一个名为event对象的特殊对象。
	event.target - 事件的目标元素
	
	event.preventDefault() - 阻止默认动作的功能。这通常用于通过刷新页面停止提交表单（这是提交事件的默认操作）。
	
捕获与冒泡
	我们已经看到该addEventListener函数有两个参数：事件的名称和回调函数。但实际上有一个第三个参数，我们可以传递一个布尔值，useCapture它决定了我们是使用capturing还是bubbling。
	很少用。
	

访问点击的任何值
	当我们监听事件时，我们有时想知道什么元素触发事件。当我们使用addEventListener时，我们可以使用event对象target上的属性来实现。
	<ul> Ingredients
        <li>Sugar</li>
        <li>Milk</li>
        <li>Eggs</li>
        <li>Flour</li>
        <li>Baking Soda</li>
    </ul>

    <script>
        var listItem = document.querySelectorAll('li');
        for (var i = 0; i < listItem.length; i++) {
            listItem[i].addEventListener("click", function(event) {
                alert("你刚刚点击了" + event.target.innerText);
            });
        }
    </script>
	
	其实我们还可以给父元素添加监听事件来达到同样的效果，这往往也是我们应该选择的做法，因为使用大量的监听器不仅消耗内存而且难于管理。
	
本地存储
	1、sessionStorage
			将数据保存在session对象中。所谓session，就是用户在浏览某个网站时，从进入网站到浏览器关闭的这段时间。session对象可以用来保存这段时间内用户所要求保存的任何数据。浏览器关闭了数据也就随之消失了。
		2、localStroage
			将数据保存在客户端本地的硬件设备（通常是硬盘，但也可以是其他设备）中，即使浏览器关闭了，该数据仍然存在，下次打开浏览器的时候依然可以继续使用。这里需要注意：数据保存是按不同的浏览器保存的，打开别的浏览器，是读取不到这个浏览器中保存的数据的。
2、Web Storage的使用
	两种对象读写数据都有两种方式：分别是getItem和setItem两种方法
	
	1、保存数据
		sessionStorage.setItem(key,value);
		localStroage.setItem(key,value);
	2、读取数据
		var temp = sessionStorage.getItem(key);
		var temp = localStroage.getItem(key);
		保存时不允许重复保存相同的键名，保存以后可以修改键值，但不可以修改键值。
		
	两种对象还有两个重要的属性
		sessionStorage.length------------所有保存在该对象中的数据的条数
		sessionStorage.key(index)--------得到索引号为index的key
		localStroage亦同

	3、清除缓存
		localStorage.removeItem("instructor");  //清除某一个
		localStorage.clear();   //清除所有


JSON
	JSON.stringfy()
		用于将javascript转换为JSON字符串
	JSON.parse()
		用于将JSON字符串转换为JavaScript
		
	var instructors = ["Elie", "Matt", "Tim"];
	localStorage.setItem("instructors",JSON.stringify(instructors));
	JSON.parse（localStorage.getItem（“ instructors ”））;
	
















































































































	