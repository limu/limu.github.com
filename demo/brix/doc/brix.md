#BRIX组件架构
##目录
- [目标](#a01)
- [基本架构理念](#a02)
- [以DOM节点为参照](#a03)
- [组件接口](#b04)
- [参考](#a99)


##参考<a id='a99'></a>
- Kissy
- ExtJS
- YUI3 Widget
- MS HTC
- CommonJS
 
##目标<a id='a01'></a>
>开发者能够方便的使用平台内组件完成业务逻辑的书写


##基本架构理念<a id='a02'></a>
**BRIX和大多数组件平台差别并不大，只是有些面向我们的目标的特别重要的关键点必须更加彻底的坚持。**

![1](assets\1.png)

**平台化之后，未来的页面里除了组件再无其他。**  
小到select，大到复杂HTML5数据可视化图表，都是组件。  
想做到只有组件有三个关键点：*抽象*、*接驳*与*集成*。

![1](assets\2.png)

**首先我们要从铁板一块中抠出各个组件。**  
每个组件功能和表现各不相同，但是它们都有相同的几类特征暴露出来。  
正如拼图中的组件只有两种特征：凸起和凹陷。  
无论此拼图块有多少个凸起和凹陷，都只有凸起和凹陷这两种。  

而针对页面组件而言，这些特征即*属性*、*方法*、*事件*、*样式*、*数据结构*。  
以一个树组件为例:

- 属性：是否全部展开
- 方法：获取选中节点id
- 事件：节点被单击
- 样式：样式主题
- 数据结构：一组带有父子关系的数据

![1](assets\3.png)

**接下来重要的事情，通过有限的方式完成组件接驳。**  
每个组件都承载了一些数据，通过组件间的接驳实现数据的流通，进而体现了业务的变化。  
我们要把组件间交互的方式限定在几个固定的模式中。  
比如：

- 响应树组件节点点击事件，触发列表组件的刷新。
- 响应树组件节点点击事件，触发也Hash值变化，驱动OPOA页面的局部刷新。
- 将一个组件拖动到另一个组件处放下，触发组件间信息传递。

![1](assets\4.png)

**最后我们需要保证若干子组件可以组合成大组件。**  
通过前面的接驳方式，把多个子组件组合在一起，再封装成大组件。  
而对于与大组件接驳的其他组件，当然可以与大组件顺畅的沟通，  
但也应该具备按照规矩访问大组件内各子组件的能力。  

![1](assets\5.png)

**这样未来组件使用者的工作就是，选择合适的组件展现业务数据,再通过接驳组件描述数据变化，完成业务的书写。**  
无论是前台页面，后台页面，还算移动端页面皆是如此。

- 前台页面视觉复杂，交互简单，我们打算通过模板系统，把组件行为和html结构一定程度上解耦，所以这是我们讨论mustache的原因。
- 后台页面交互复杂，视觉统一，我们会更多的通过规范来把组件做少，做精。
- 移动页面对性能要求很高，我们可能不再使用kissy、jquery这样的pc类库做底层，但是我们希望保持接口一致、接驳方式一致、子组件组装方式一致。

##以DOM节点为参照<a id='a03'></a>
>解决设计问题，我们要寻找参照而非凭空制造

**DOM节点在是最小粒度的抽象，并精于配合:**  

- Dom节点拥有属性、事件、方法、样式和承载的数据。  
- Dom节点之间无限制嵌套组成了整个页面。  

我们希望将组件行为映射为Dom节点的行为，让使用者像操作Dom节点一样操作组件。

##组件接口<a id='a04'></a>
###属性
```
<select id="ex02">
	<option value="1">A</option>
	<option value="2">B</option>
</select>
<button onclick="clk02()">selectedIndex</button>
<scr ipt>
	function clk02(){
		var sel = document.getElementById("ex02");
		alert(sel.selectedIndex);
	}
</script>
```
###方法
```
<select id="ex01" abc="123">
	<option value="1">A</option>
	<option value="2">B</option>
</select>
<button onclick="clk01()">getAttribute("abc")</button>
<scr ipt>
	function clk01(){
		var sel = document.getElementById("ex01");
		alert(sel.getAttribute("abc"));
	}
</script>
```
###事件
```
<select id="ex03" onchange="chg01(this)">
	<option value="1">A</option>
	<option value="2">B</option>
</select>
<scr ipt>
	function chg01(ts){
			alert(ts.selectedIndex);
	}
</script>
```