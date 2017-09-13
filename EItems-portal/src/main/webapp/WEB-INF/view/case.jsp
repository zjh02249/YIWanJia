<%@ page language="java" contentType="text/html; charset=utf-8" pageEncoding="UTF-8"%>
<%@taglib  uri="http://java.sun.com/jsp/jstl/core" prefix="c"%>
<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>杭州钱王万家信息科技有限公司</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<meta name="description" content="杭州钱王万家信息科技有限公司" />
<meta name="author" content="杭州钱王万家信息科技有限公司" />
<!-- css --> 
<link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
<link rel="/stylesheet" href="${pageContext.request.contextPath}/materialize/css/materialize.min.css" media="screen,projection" />
<link href="${pageContext.request.contextPath}/css/bootstrap.min.css" rel="stylesheet" />
<link href="${pageContext.request.contextPath}/css/fancybox/jquery.fancybox.css" rel="stylesheet">
<link href="${pageContext.request.contextPath}/css/flexslider.css" rel="stylesheet" />
<link href="${pageContext.request.contextPath}/css/style.css" rel="stylesheet" />
<link href="${pageContext.request.contextPath}/css/public/default/css-outM/style.css" rel="stylesheet" />
	<!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
<!--[if lt IE 9]>
      <script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
    <![endif]-->

</head>
<body>
<div id="wrapper"> 
	<%--<header class="topbar">--%>
		<%--<div class="container">--%>
			<%--<div class="row">--%>
				<%--<div class="col-sm-3">--%>
					<%--<ul class="social-network">--%>
						<%--&lt;%&ndash;<li><a class="waves-effect waves-dark" href="#"><i class="fa fa-facebook"></i></a></li>&ndash;%&gt;--%>
						<%--&lt;%&ndash;<li><a class="waves-effect waves-dark" href="#"><i class="fa fa-twitter"></i></a></li>&ndash;%&gt;--%>
						<%--&lt;%&ndash;<li><a class="waves-effect waves-dark" href="#"><i class="fa fa-linkedin"></i></a></li>&ndash;%&gt;--%>
						<%--&lt;%&ndash;<li><a class="waves-effect waves-dark" href="#"><i class="fa fa-pinterest"></i></a></li>&ndash;%&gt;--%>
						<%--&lt;%&ndash;<li><a class="waves-effect waves-dark" href="#"><i class="fa fa-google-plus"></i></a></li>&ndash;%&gt;--%>
					<%--</ul>--%>
				<%--</div>--%>
				<%--<div class="col-sm-9">--%>
					<%--<div class="row">--%>
						<%--<ul class="info">--%>
							<%--<li><i class="icon-info-blocks material-icons">邮箱地址: </i><span>zjqwwy@163.com</span></li>--%>
							<%--<li><i class="icon-info-blocks material-icons">联系电话: </i><span>0571-61099111</span></li>--%>
						<%--</ul>--%>
						<%--<div class="clr"></div>--%>
					<%--</div>--%>
				<%--</div>--%>
			<%--</div>--%>
		<%--</div>--%>
	<%--</header>--%>

	<!-- start header -->
	<!-- start header -->
		<header>
			<div class="navbar navbar-default navbar-static-top">
				<div class="container">
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						<a class="navbar-brand" href="${pageContext.request.contextPath}/index.html">
							<%--<i class="icon-info-blocks material-icons">language</i>--%>
							<img src="${pageContext.request.contextPath}/img/logo.png" alt="" height="50" width="50" />
							杭州钱王万家信息科技有限公司
							<%--钱王万家--%>
						</a>

					</div>
					<div class="navbar-collapse collapse ">
						<ul class="nav navbar-nav">
							<li ><a class="waves-effect waves-dark" href="${pageContext.request.contextPath}/index.html">首 页</a></li>
							<li><a class="waves-effect waves-dark" href="${pageContext.request.contextPath}/news.html">新闻咨询</a></li>
							<li><a class="waves-effect waves-dark" href="${pageContext.request.contextPath}/portfolio.html">产品中心</a></li>
							<li><a class="waves-effect waves-dark" href="${pageContext.request.contextPath}/support.html">解决方案</a></li><!--服务支持-->
							<li class="active"><a class="waves-effect waves-dark" href="${pageContext.request.contextPath}/case.html">公司案例</a></li><!---->
							<li><a class="waves-effect waves-dark" href="${pageContext.request.contextPath}/joinUs.html">人才招聘</a></li><!--加入我们-->
							<li ><a class="waves-effect waves-dark" href="${pageContext.request.contextPath}/contact/contactUs.html">联系我们</a></li>
						</ul>
					</div>
				</div>
			</div>
		</header>
	<section id="inner-headline">
	<div class="container">
		<div class="row">
			<div class="col-lg-12">
				<h2 class="pageTitle">公司案例</h2>
			</div>
		</div>
	</div>
	</section>
	<section id="content">
	<div class="container">
		<div class="about-main" id="company-profile">
			<div id="nr_main_box">
			<!-- =+++++++++++++++++++++-->
				<div class="about_right">
					<div class="rnav_bt">
						<b>经典案例</b>
						<span class="x"></span>
					</div>
					<ul style="position:relative">
						<li ><a href="${pageContext.request.contextPath}/case.html" title="公司介绍" id="nynavID91" class="acvier">应用案例</a></li>
					</ul>
				</div>
				<!-- =++++++++++++++left        left    left   +++++++-->
				<div class="about_left">
					<div id="about_text">
						<div class="tab-con">
							<div class="tab-item">
								<c:forEach items="${caseList}" var="pr">
									<p style="text-align: center">
									<img src="${pr.image}" title="" alt="">
									</p>
									<p><br></p>
									<p><br></p>
								</c:forEach>

								<p style="text-align: center">
									<img src="/img/ceshi01.png" title="" alt="">
								</p>
								<p><br></p>
								<p><br></p>

								<p style="text-align: center">
									<img src="/img/ceshi01.png" title="" alt="">
								</p>
								<p><br></p>
								<p><br></p>
							</div>
						</div>
					</div>
				</div>
				<div id="clear" ></div>
			</div> <!--内容 END-->
				<!-- =+++++++++++++++++++++-->
		</div>
		<!--end about-main-->
	</div>
</div>

</div>
	</div>

	</section>
<footer>
	<div class="container">
		<div class="row">
			<div class="col-sm-3">
				<div class="widget">
					<h5 class="widgetheading">联系方式</h5>
					<ul class="foot_add_box">
						<li class="foot_tel">电话：0571-61099111</li>
						<li class="foot_add">邮箱：zjqwwy@163.com</li>
					</ul>
					<br>
					<address>
						杭州市临安市青山湖街道<br>
						大园路958号科创大楼A603</address>
				</div>
			</div>
			<div class="col-sm-3">
				<div class="widget">
					<h5 class="widgetheading">产品中心</h5>
					<ul class="link-list">
						<li><a class="waves-effect waves-dark" href="${pageContext.request.contextPath}/portfolio.html">手持终端</a></li>
						<li><a class="waves-effect waves-dark" href="${pageContext.request.contextPath}/portfolio.html">定点投放箱体</a></li>
						<li><a class="waves-effect waves-dark" href="${pageContext.request.contextPath}/portfolio.html">垃圾分类app</a></li>
						<li><a class="waves-effect waves-dark" href="${pageContext.request.contextPath}/portfolio.html">传感器原件</a></li>
					</ul>
				</div>
			</div>
			<div class="col-sm-3">
				<div class="widget">
					<h5 class="widgetheading">新闻资讯</h5>
					<ul class="link-list">
						<li><a class="waves-effect waves-dark" href="${pageContext.request.contextPath}/news.html">新闻直达</a></li>
					</ul>
				</div>
			</div>
			<div class="col-sm-4">
				<div class="widget">
					<h5 class="widgetheading"></h5>
					<ul class="link-list">
						<img src="${pageContext.request.contextPath}/img/public/erweima.jpg" alt="" height="170" width="290" align="">
					</ul>
				</div>
			</div></div>
	</div>
	<div id="sub-footer">
		<div class="container">
			<div class="row">
				<div class="col-lg-6">
					<div class="copyright">
						<p>
							Copyright &copy; 2017.杭州钱王万家信息科技有限公司 All rights reserved.
						</p>
					</div>
				</div>
				<div class="col-lg-6">
					<ul class="social-network">
						<p>浙ICP备14036718号-6浙公网安备 33018502001594号</p></ul>
				</div>
			</div>
		</div>
	</div>
</footer>
</div>
<a href="#" class="scrollup waves-effect waves-dark"><i class="fa fa-angle-up active"></i></a>
<!-- javascript
    ================================================== -->
<!-- Placed at the end of the document so the pages load faster -->
<script src="${pageContext.request.contextPath}/js/jquery.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery.easing.1.3.js"></script>
<script src="${pageContext.request.contextPath}/materialize/js/materialize.min.js"></script>
<script src="${pageContext.request.contextPath}/js/bootstrap.min.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery.fancybox.pack.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery.fancybox-media.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery.flexslider.js"></script>
<script src="${pageContext.request.contextPath}/js/animate.js"></script>
<!-- Vendor Scripts -->
<script src="${pageContext.request.contextPath}/js/modernizr.custom.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery.isotope.min.js"></script>
<script src="${pageContext.request.contextPath}/js/jquery.magnific-popup.min.js"></script>
<script src="${pageContext.request.contextPath}/js/animate.js"></script>
<script src="${pageContext.request.contextPath}/js/custom.js"></script>

 <script src="${pageContext.request.contextPath}/contact/jqBootstrapValidation.js"></script>
 <script src="${pageContext.request.contextPath}/contact/contact_me.js"></script>
</body>

</html>