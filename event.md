ʲô���¼���
	�¼��������ǿ���ͨ����������������������顣
������һЩ���ǿ��Լ�����Ǳ�ڵ��¼���
	1�����ĳ������
	2�������ͣ��ĳ����
	3����ĳЩ��
	4����DOM����ʱ
	5���ύ��ʱ
	
�����Ӽ����¼�
	var button = document.querySelector('first_button');
	button.addEventListener("click",function(){
		alert("you clicked the button");
	});
	
	
���ɾ�������¼�	
	���������Ҫɾ�������¼�����ô����Ӽ����¼���ʱ����Ļص�������Ӧ���������ģ���Ӧ���и����֡�Ȼ����ɾ���ü����¼���
	var button = document.querySelector('#event');

    function alertData() {
        alert("�����˰�ť");
    }
    button.addEventListener("click", alertData);

    button.removeEventListener("click", alertData);
	

����¼��Եȴ�DOM����
	�������ǵ�script��ǩ��DOM����֮ǰ���У����Բ�֪����ʲôbody�ڵ����ݣ�����������ִ���κ�JavaScript֮ǰ�ȴ�DOM���ء������ͨ��load�¼���DOMContentLoaded�¼������
	 document.addEventListener("DOMContentLoaded", function(){
            var container = document.getElementById("container");
            container.innerText = "Hello World"; 
        });
	
�¼������е�����
	�����¼�ʱ�����ǿ��Է���һ����Ϊevent������������
	event.target - �¼���Ŀ��Ԫ��
	
	event.preventDefault() - ��ֹĬ�϶����Ĺ��ܡ���ͨ������ͨ��ˢ��ҳ��ֹͣ�ύ���������ύ�¼���Ĭ�ϲ�������
	
������ð��
	�����Ѿ�������addEventListener�����������������¼������ƺͻص���������ʵ������һ�����������������ǿ��Դ���һ������ֵ��useCapture��������������ʹ��capturing����bubbling��
	�����á�
	

���ʵ�����κ�ֵ
	�����Ǽ����¼�ʱ��������ʱ��֪��ʲôԪ�ش����¼���������ʹ��addEventListenerʱ�����ǿ���ʹ��event����target�ϵ�������ʵ�֡�
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
                alert("��ոյ����" + event.target.innerText);
            });
        }
    </script>
	
	��ʵ���ǻ����Ը���Ԫ����Ӽ����¼����ﵽͬ����Ч����������Ҳ������Ӧ��ѡ�����������Ϊʹ�ô����ļ��������������ڴ�������ڹ���
	
���ش洢
	1��sessionStorage
			�����ݱ�����session�����С���νsession�������û������ĳ����վʱ���ӽ�����վ��������رյ����ʱ�䡣session������������������ʱ�����û���Ҫ�󱣴���κ����ݡ�������ر�������Ҳ����֮��ʧ�ˡ�
		2��localStroage
			�����ݱ����ڿͻ��˱��ص�Ӳ���豸��ͨ����Ӳ�̣���Ҳ�����������豸���У���ʹ������ر��ˣ���������Ȼ���ڣ��´δ��������ʱ����Ȼ���Լ���ʹ�á�������Ҫע�⣺���ݱ����ǰ���ͬ�����������ģ��򿪱����������Ƕ�ȡ�������������б�������ݵġ�
2��Web Storage��ʹ��
	���ֶ����д���ݶ������ַ�ʽ���ֱ���getItem��setItem���ַ���
	
	1����������
		sessionStorage.setItem(key,value);
		localStroage.setItem(key,value);
	2����ȡ����
		var temp = sessionStorage.getItem(key);
		var temp = localStroage.getItem(key);
		����ʱ�������ظ�������ͬ�ļ����������Ժ�����޸ļ�ֵ�����������޸ļ�ֵ��
		
	���ֶ�����������Ҫ������
		sessionStorage.length------------���б����ڸö����е����ݵ�����
		sessionStorage.key(index)--------�õ�������Ϊindex��key
		localStroage��ͬ

	3���������
		localStorage.removeItem("instructor");  //���ĳһ��
		localStorage.clear();   //�������


JSON
	JSON.stringfy()
		���ڽ�javascriptת��ΪJSON�ַ���
	JSON.parse()
		���ڽ�JSON�ַ���ת��ΪJavaScript
		
	var instructors = ["Elie", "Matt", "Tim"];
	localStorage.setItem("instructors",JSON.stringify(instructors));
	JSON.parse��localStorage.getItem���� instructors ������;
	
















































































































	