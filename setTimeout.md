setTimeout()与setInterval()
	两个函数都是接受一个回调函数和一个以毫秒为单位的时间作为参数。区别在于：setTimeout函数只执行一次，而setInterval会运行无限次（直到被定时器清零）
	
如何停止定时器？
	setTimeout并setInterval返回一个叫做定时器ID的特殊值。如果我们将此值传递给clearTimeoutor clearInterval方法，我们可以停止我们的计时器。
	例如：
		var timerId = setTimeout(function(){
		console.log("Hello!");
		},1000);

		clearTimeout(timerId);
		
	注：作为一个参数传递给另一个函数的函数是（回调函数）callback。	
		
JS异步代码：
	1.调用堆栈：
		调用堆栈（有时简称为堆栈）是LIFO（后进先出）的数据结构。这意味着如果堆栈上有一个函数，而且它处于另一个函数之下，那么在顶层的函数已经离开堆栈（通过return使用一些值或通过执行函数中的所有代码）之前，它永远不会执行，。
		
	2.事件队列
		当异步事件发生时，它被放入所谓的“事件队列”（也称为队列）中。当堆栈清除时（即堆栈上没有功能），然后将其移动到堆栈。MDN 将队列定义为要处理的消息列表，一个函数与每个消息相关联，当堆栈为空时，将一个消息从队列中取出并处理，该处理包括调用相关函数（因此创建初始堆栈帧）当堆栈再次变为空时，消息处理结束。队列是FIFO数据结构（先进先出）。
		
	3.	堆
		存储对象的位置堆是一个非结构化/无组织的记忆区域。
		
	事件循环
		JavaScript内部有一些称为“事件循环”的东西，它检查队列，看看是否有任何进程要执行。
		console.log（"first"）;
		setTimeout（function（）{
			console.log（"second"）;
		},0）;
		console.log（"third"）;
		
		第一个log功能在堆栈上，打印出"first"，然后将它销毁，
		一条消息发送到队列，以在0毫秒内记录"秒"
		在此期间，另一个log功能来自堆栈，打印出"third"
		现在堆栈是清除的，所以setTimeout打印到堆栈上的回调和"second"
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		