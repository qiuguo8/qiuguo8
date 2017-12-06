import pathsUtil from 'web/common/utils/pathUtil.js'
import etpl from 'web/resources/lib/umeditor/third-party/template.min.js'
import sysUtil from 'web/common/utils/sysUtil.js'

window.etpl = etpl;
etpl.config({
	commandOpen: '<%',
	commandClose: '%>'
});
		
/**
 * 配置项主体。注意，此处所有涉及到路径的配置别遗漏URL变量。
 */
const UMEDITOR_CONFIG = window.UMEDITOR_CONFIG = {

	//为编辑器实例添加一个路径，这个不能被注释
	UMEDITOR_HOME_URL : pathsUtil.getOriginPath()+'/web/resources/lib/umeditor/'

	//图片上传配置区
	,imageUrl:pathsUtil.getBasePath()+"/common/pub-file/upload-to-sftp"             //图片上传提交地址
	,imagePath: pathsUtil.getBasePath()+"/common/pub-file/download?id="         //图片修正地址，引用了fixedImagePath,如有特殊需求，可自行配置
	,imageFieldName:"file"                   //图片数据的key,若此处修改，需要在后台对应文件修改对应参数
	,imgType:['jpg','png','jpeg','bmp','gif']     //本地化：图片上传的类型
	,uploadParams:{								//本地化：上传请求参数
		fileType:'12',							//本地化:文件上传保存的类型
		savePath:'12'				//本地化：文件上传保存的文件夹地址
	}
	,paramUtil:sysUtil.param				//序列化请求参数对象的函数
	,imgSize:1024*256						//本地化，上传文件的大小
	,imgFilters:[function(file,me){			//本地化：图片过滤函数数组
		if(me.editor.options.imgType.length ==0)return {checked:true};
		var types = me.editor.options.imgType;
		var ext = file.name.slice(file.name.lastIndexOf('.')+1).toLowerCase();
		if(types.indexOf(ext)>-1){
			return {checked:true};
		}else{
			return {checked:false,msg:"图片类型不对,仅允许上传类型为"+types.join(',')+"格式的图片!"};
		}
	},function(file,me){
		if(!me.editor.options.imgSize)return {checked:true};
		var tsize = me.editor.options.imgSize;
		var size = file.size;
		if(size>tsize){
			return {checked:false,msg:"您择的图片大于"+(tsize/(1024*1024))+"M，无法上传！"};;
		}else{
			return {checked:true};
		}
	}]
	//工具栏上的所有的功能按钮和下拉框，可以在new编辑器的实例时选择自己需要的从新定义
	,toolbar:[
		'fullscreen undo redo | bold italic underline strikethrough | superscript subscript | forecolor backcolor | removeformat |',
		'insertorderedlist insertunorderedlist | selectall cleardoc paragraph | fontfamily fontsize lineheight' ,
		'| justifyleft justifycenter justifyright justifyjustify |',
		'link unlink | image',
		'| horizontal', 
	]

	//语言配置项,默认是zh-cn。有需要的话也可以使用如下这样的方式来自动多语言切换，当然，前提条件是lang文件夹下存在对应的语言文件：
	//lang值也可以通过自动获取 (navigator.language||navigator.browserLanguage ||navigator.userLanguage).toLowerCase()
	,lang:"zh-cn"
	,langPath:URL +"lang/"

	//针对getAllHtml方法，会在对应的head标签中增加该编码设置。
	,charset:"utf-8"

	//imageScaleEnabled
	// 是否允许点击文件拖拽改变大小,默认true
	,imageScaleEnabled:true

	//填写过滤规则
	,filterRules: {}
	// xss 过滤是否开启,inserthtml等操作
	,xssFilterRules: true
	//input xss过滤
	,inputXssFilter: true
	//output xss过滤
	,outputXssFilter: true
	// xss过滤白名单 名单来源: https://raw.githubusercontent.com/leizongmin/js-xss/master/lib/default.js
	,whiteList: {
		a:      ['target', 'href', 'title', 'style', 'class', 'id'],
		abbr:   ['title', 'style', 'class', 'id'],
		address: ['style', 'class', 'id'],
		area:   ['shape', 'coords', 'href', 'alt', 'style', 'class', 'id'],
		article: ['style', 'class', 'id'],
		aside:  ['style', 'class', 'id'],
		audio:  ['autoplay', 'controls', 'loop', 'preload', 'src', 'style', 'class', 'id'],
		b:      ['style', 'class', 'id'],
		bdi:    ['dir'],
		bdo:    ['dir'],
		big:    [],
		blockquote: ['cite', 'style', 'class', 'id'],
		br:     [],
		caption: ['style', 'class', 'id'],
		center: [],
		cite:   [],
		code:   ['style', 'class', 'id'],
		col:    ['align', 'valign', 'span', 'width', 'style', 'class', 'id'],
		colgroup: ['align', 'valign', 'span', 'width', 'style', 'class', 'id'],
		dd:     ['style', 'class', 'id'],
		del:    ['datetime', 'style', 'class', 'id'],
		details: ['open', 'style', 'class', 'id'],
		div:    ['style', 'class', 'id'],
		dl:     ['style', 'class', 'id'],
		dt:     ['style', 'class', 'id'],
		em:     ['style', 'class', 'id'],
		embed:  ['style', 'class', 'id', '_url', 'type', 'pluginspage', 'src', 'width', 'height', 'wmode', 'play', 'loop', 'menu', 'allowscriptaccess', 'allowfullscreen'],
		font:   ['color', 'size', 'face', 'style', 'class', 'id'],
		footer: ['style', 'class', 'id'],
		h1:     ['style', 'class', 'id'],
		h2:     ['style', 'class', 'id'],
		h3:     ['style', 'class', 'id'],
		h4:     ['style', 'class', 'id'],
		h5:     ['style', 'class', 'id'],
		h6:     ['style', 'class', 'id'],
		header: ['style', 'class', 'id'],
		hr:     ['style', 'class', 'id'],
		i:      ['style', 'class', 'id'],
		iframe: ['style', 'class', 'id', 'src', 'frameborder', 'data-latex'],
		img:    ['src', 'alt', 'title', 'width', 'height', 'style', 'class', 'id', '_url'],
		ins:    ['datetime', 'style', 'class', 'id'],
		li:     ['style', 'class', 'id'],
		mark:   [],
		nav:    [],
		ol:     ['style', 'class', 'id'],
		p:      ['style', 'class', 'id'],
		pre:    ['style', 'class', 'id'],
		s:      [],
		section:[],
		small:  ['style', 'class', 'id'],
		span:   ['style', 'class', 'id'],
		sub:    ['style', 'class', 'id'],
		sup:    ['style', 'class', 'id'],
		strong: ['style', 'class', 'id'],
		table:  ['width', 'border', 'align', 'valign', 'style', 'class', 'id'],
		tbody:  ['align', 'valign', 'style', 'class', 'id'],
		td:     ['width', 'rowspan', 'colspan', 'align', 'valign', 'style', 'class', 'id'],
		tfoot:  ['align', 'valign', 'style', 'class', 'id'],
		th:     ['width', 'rowspan', 'colspan', 'align', 'valign', 'style', 'class', 'id'],
		thead:  ['align', 'valign', 'style', 'class', 'id'],
		tr:     ['rowspan', 'align', 'valign', 'style', 'class', 'id'],
		tt:     ['style', 'class', 'id'],
		u:      [],
		ul:     ['style', 'class', 'id'],
		svg:    ['style', 'class', 'id', 'width', 'height', 'xmlns', 'fill', 'viewBox'],
		video:  ['autoplay', 'controls', 'loop', 'preload', 'src', 'height', 'width', 'style', 'class', 'id']
	}
};

export default UMEDITOR_CONFIG;