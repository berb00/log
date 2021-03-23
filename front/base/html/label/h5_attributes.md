# h5 attributes

## global attributes from runboo

```text

accesskey 			设置访问元素的键盘快捷键。
class 				规定元素的类名（classname）
dir 					设置元素中内容的文本方向。
id 					规定元素的唯一 id
lang 				设置元素中内容的语言代码。
style 				规定元素的行内样式（inline style）
tabindex 			设置元素的 Tab 键控制次序。
title 				规定元素的额外信息（可在工具提示中显示）


contenteditable5 	规定是否可编辑元素的内容。
contextmenu5 		指定一个元素的上下文菜单。当用户右击该元素，出现上下文菜单
data-*5 				用于存储页面的自定义数据
draggable5			指定某个元素是否可以拖动
dropzone5 			指定是否将数据复制，移动，或链接，或删除
hidden5 				规定对元素进行隐藏。
spellcheck5 			检测元素是否拼写错误
translate5 			指定是否一个元素的值在页面载入时是否需要翻译

```

## h5 event attributes from runboo

```text
Window Form  Keyboard  Mouse  Media  other
窗口事件属性（Window Event Attributes）
由窗口触发该事件 (适用于 <body> 标签):

onafterprint5 			在打印文档之后运行脚本
onbeforeprint5 			在文档打印之前运行脚本
onbeforeonloa5 			在文档加载之前运行脚本
onblur 	script 			当窗口失去焦点时运行脚本
onerror5 				当错误发生时运行脚本
onfocus 	script 			当窗口获得焦点时运行脚本
onhaschange5 			当文档改变时运行脚本
onload 	script 			当文档加载时运行脚本
onmessage5 				当触发消息时运行脚本
onoffline5 				当文档离线时运行脚本
ononline5 				当文档上线时运行脚本
onpagehide5			 	当窗口隐藏时运行脚本
onpageshow5			 	当窗口可见时运行脚本
onpopstate5 				当窗口历史记录改变时运行脚本
onredo5 					当文档执行再执行操作（redo）时运行脚本
onresize5 				当调整窗口大小时运行脚本
onstorage5 				当 Web Storage 区域更新时（存储空间中的数据发生变化时）运行脚本
onundo5 					当文档执行撤销时运行脚本
onunload5 				当用户离开文档时运行脚本

表单事件(Form Events)
表单事件在HTML表单中触发 (适用于所有 HTML 元素, 但该HTML元素需在form表单内):

onblur 					当元素失去焦点时运行脚本
onchange 			 	当元素改变时运行脚本
oncontextmenu5 			当触发上下文菜单时运行脚本
onfocus 	script 			当元素获得焦点时运行脚本
onformchange5 			当表单改变时运行脚本
onforminput5 			当表单获得用户输入时运行脚本
oninput5 				当元素获得用户输入时运行脚本
oninvalid5 				当元素无效时运行脚本
onreset 				 	当表单重置时运行脚本。HTML 5 不支持。
onselect 			 	当选取元素时运行脚本
onsubmit 			 	当提交表单时运行脚本

键盘事件（Keyboard Events）

onkeydown 			 	当按下按键时运行脚本
onkeypress 			 	当按下并松开按键时运行脚本
onkeyup 				 	当松开按键时运行脚本

鼠标事件（Mouse Events）
通过鼠标触发事件, 类似用户的行为:

onclick 				 	当单击鼠标时运行脚本
ondblclick 			 	当双击鼠标时运行脚本
ondrag5					当拖动元素时运行脚本
ondragend5				当拖动操作结束时运行脚本
ondragenter5 			当元素被拖动至有效的拖放目标时运行脚本
ondragleave5				当元素离开有效拖放目标时运行脚本
ondragover5 				当元素被拖动至有效拖放目标上方时运行脚本
ondragstart5 			当拖动操作开始时运行脚本
ondrop5 					当被拖动元素正在被拖放时运行脚本
onmousedown 				当按下鼠标按钮时运行脚本
onmousemove 			 	当鼠标指针移动时运行脚本
onmouseout 			 	当鼠标指针移出元素时运行脚本
onmouseover 			 	当鼠标指针移至元素之上时运行脚本
onmouseup 			 	当松开鼠标按钮时运行脚本
onmousewheel5			当转动鼠标滚轮时运行脚本
onscroll5				当滚动元素的滚动条时运行脚本

多媒体事件(Media Events)
通过视频（videos），图像（images）或者音频（audio） 触发该事件，多应用于HTML媒体元素比如 <audio>, <embed>, <img>, <object>, 和<video>):

onabort 				 	当发生中止事件时运行脚本
oncanplay5 				当媒介能够开始播放但可能因缓冲而需要停止时运行脚本
oncanplaythrough5		当媒介能够无需因缓冲而停止即可播放至结尾时运行脚本
ondurationchange5 		当媒介长度改变时运行脚本
onemptied5				当媒介资源元素突然为空时（网络错误、加载错误等）运行脚本
onended5 				当媒介已抵达结尾时运行脚本
onerror5 				当在元素加载期间发生错误时运行脚本
onloadeddata5 			当加载媒介数据时运行脚本
onloadedmetadata5 		当媒介元素的持续时间以及其他媒介数据已加载时运行脚本
onloadstart5 			当浏览器开始加载媒介数据时运行脚本
onpause5 				当媒介数据暂停时运行脚本
onplay5 					当媒介数据将要开始播放时运行脚本
onplaying5 				当媒介数据已开始播放时运行脚本
onprogress5 				当浏览器正在取媒介数据时运行脚本
onratechange5 			当媒介数据的播放速率改变时运行脚本
onreadystatechange5 		当就绪状态（ready-state）改变时运行脚本
onseeked5 				当媒介元素的定位属性 [1] 不再为真且定位已结束时运行脚本
onseeking5				当媒介元素的定位属性为真且定位已开始时运行脚本
onstalled5				当取回媒介数据过程中（延迟）存在错误时运行脚本
onsuspend5 				当浏览器已在取媒介数据但在取回整个媒介文件之前停止时运行脚本
ontimeupdate5 			当媒介改变其播放位置时运行脚本
onvolumechange5		 	当媒介改变音量亦或当音量被设置为静音时运行脚本
onwaiting5 				当媒介已停止播放但打算继续播放时运行脚本

其他事件
onshow5 					当 <menu> 元素在上下文显示时触发
ontoggle5 				当用户打开或关闭 <details> 元素时触发

```

## h5 attributes from w3c

```text

--------------------HTML 全局属性---------------------
accesskey 	规定激活元素的快捷键。
class 	规定元素的一个或多个类名（引用样式表中的类）。
dir 	规定元素中内容的文本方向。dir="rtl|ltr"
id 	规定元素的唯一 id。
lang 	规定元素内容的语言。
style 	规定元素的行内 CSS 样式。
title 	规定有关元素的额外信息。
tabindex 	规定元素的 tab 键次序。<element tabindex="number">
5.draggable 	规定元素是否可拖动。<element draggable="true|false|auto">
5.hidden 	规定元素仍未或不再相关(隐藏元素)。<element hidden>
5.spellcheck 	规定是否对元素进行拼写和语法检查。
<element spellcheck="true|false">
可以对以下内容进行拼写检查：
    input 元素中的文本值（非密码）
    <textarea> 元素中的文本
    可编辑元素中的文本

5.dropzone 	规定在拖动被拖动数据时是否进行复制、移动或链接。
5.data-* 	用于存储页面或应用程序的私有定制数据。
5.contextmenu 	规定元素的上下文菜单。上下文菜单在用户点击元素时显示。
5.contenteditable 	规定元素内容是否可编辑。
5.translate 	规定是否应该翻译元素内容。



-------------HTML 事件属性-----------------
Window  Form Keyboard Mouse Media 

Window 事件属性：针对 window 对象触发的事件（应用到 <body> 标签）
onload 			 页面结束加载之后触发。
onunload 		 一旦页面已下载时触发（或者浏览器窗口已被关闭）。
onafterprint5 	 文档打印之后运行的脚本。
onbeforeprint5 	 文档打印之前运行的脚本。
onbeforeunload5 	 文档卸载之前运行的脚本。
onerror 	script5 	 在错误发生时运行的脚本。
onhaschange5 	 当文档已改变时运行的脚本。
onmessage5 		 在消息被触发时运行的脚本。
onoffline5 	     当文档离线时运行的脚本。
ononline5 		 当文档上线时运行的脚本。
onpagehide5 	 	 当窗口隐藏时运行的脚本。
onpageshow5      当窗口成为可见时运行的脚本。
onpopstate5 	  	 当窗口历史记录改变时运行的脚本。
onredo5 	 		 当文档执行撤销（redo）时运行的脚本。
onresize5 	    	 当浏览器窗口被调整大小时触发。
onstorage5 		 在 Web Storage 区域更新后运行的脚本。
onundo5 		 	 在文档执行 undo 时运行的脚本。

Form 事件：由 HTML 表单内的动作触发的事件（应用到几乎所有 HTML 元素，但最常用在 form 元素中）
onblur 			 元素失去焦点时运行的脚本。
onchange 	    	 在元素值被改变时运行的脚本。
onfocus 		 	 当元素获得焦点时运行的脚本。
onreset 			 当表单中的重置按钮被点击时触发。HTML5 中不支持。
onselect 		 在元素中文本被选中后触发。
onsubmit 		 在提交表单时触发。
oncontextmenu 	 当上下文菜单被触发时运行的脚本。
onformchange   	 在表单改变时运行的脚本。
onforminput 	     当表单获得用户输入时运行的脚本。
oninput 	  	     当元素获得用户输入时运行的脚本。
oninvalid 	     当元素无效时运行的脚本。

Keyboard 事件
onkeydown 	     在用户按下按键时触发。
onkeypress 	     在用户敲击按钮时触发。
onkeyup 	      	 当用户释放按键时触发。

Mouse 事件：由鼠标或类似用户动作触发的事件：
onclick 	  	     元素上发生鼠标点击时触发。
ondblclick 	   	 元素上发生鼠标双击时触发。
onmousedown 		 当元素上按下鼠标按钮时触发。
onmousemove 	  	 当鼠标指针移动到元素上时触发。
onmouseout 	  	 当鼠标指针移出元素时触发。
onmouseover 	  	 当鼠标指针移动到元素上时触发。
onmouseup 		 当在元素上释放鼠标按钮时触发。
ondrag5 	         元素被拖动时运行的脚本。
ondragend5 	     在拖动操作末端运行的脚本。
ondragenter5 	 当元素元素已被拖动到有效拖放区域时运行的脚本。
ondragleave5 	 当元素离开有效拖放目标时运行的脚本。
ondragover5      当元素在有效拖放目标上正在被拖动时运行的脚本。
ondragstart5 	 在拖动操作开端运行的脚本。
ondrop5          当被拖元素正在被拖放时运行的脚本。
onmousewheel5 	 当鼠标滚轮正在被滚动时运行的脚本。
onscroll5 	     当元素滚动条被滚动时运行的脚本。

Media 事件：由媒介（比如视频、图像和音频）触发的事件
（适用于所有 HTML 元素，但常见于媒介元素中，比如 <audio>、<embed>、<img>、<object> 以及 <video>）:
onabort          在退出时运行的脚本。
onwaiting 	   	 当媒介已停止播放但打算继续播放时（比如当媒介暂停已缓冲更多数据）运行脚本
oncanplay5 	 	 当文件就绪可以开始播放时运行的脚本（缓冲已足够开始时）。
oncanplaythrough5 	  当媒介能够无需因缓冲而停止即可播放至结尾时运行的脚本。
ondurationchange5     当媒介长度改变时运行的脚本。
onemptied5 	 	 当发生故障并且文件突然不可用时运行的脚本（比如连接意外断开时）。
onended5 	  	 当媒介已到达结尾时运行的脚本（可发送类似“感谢观看”之类的消息）。
onerror5 	  	 当在文件加载期间发生错误时运行的脚本。
onloadeddata5 	 当媒介数据已加载时运行的脚本。
onloadedmetadata5 	 当元数据（比如分辨率和时长）被加载时运行的脚本。
onloadstart5 	 在文件开始加载且未实际加载任何数据前运行的脚本。
onpause5 	     当媒介被用户或程序暂停时运行的脚本。
onplay5 	         当媒介已就绪可以开始播放时运行的脚本。
onplaying5    	 当媒介已开始播放时运行的脚本。
onprogress5      当浏览器正在获取媒介数据时运行的脚本。
onratechange5 	 每当回放速率改变时运行的脚本（比如当用户切换到慢动作或快进模式）。
onreadystatechange5 	 每当就绪状态改变时运行的脚本（就绪状态监测媒介数据的状态）。
onseeked5 	     当 seeking 属性设置为 false（指示定位已结束）时运行的脚本。
onseeking5 	     当 seeking 属性设置为 true（指示定位是活动的）时运行的脚本。
onstalled5 	 	 在浏览器不论何种原因未能取回媒介数据时运行的脚本。
onsuspend5 	  	 在媒介数据完全加载之前不论何种原因终止取回媒介数据时运行的脚本。
ontimeupdate5 	 当播放位置改变时（比如当用户快进到媒介中一个不同的位置时）运行的脚本。
onvolumechange5 	 每当音量改变时（包括将音量设置为静音）时运行的脚本。











```
