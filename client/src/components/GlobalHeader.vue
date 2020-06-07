<template>
    <div class="hmtop">
		<!--顶部导航条 -->
		<div class="am-container header">
			<ul class="message-l">
				<div class="topMessage">
					<div class="menu-hd" v-show="!userIsLogin">
						<a class="h">亲，请登录</a>
						<a>免费注册</a>
					</div>
					<div class="menu-hd" v-show="userIsLogin">
						<span style="color: #d2364c">欢迎，{{userInfo.username}}</span>
					</div>
				</div>
			</ul>
			<ul class="message-r">
				<div class="topMessage home">
					<div class="menu-hd"><a target="_top" class="h">商城首页</a></div>
				</div>
				<div class="topMessage my-shangcheng">
					<div class="menu-hd MyShangcheng"><a href="javascript:void(0);" @click="goUserCenter">
						<i class="am-icon-user am-icon-fw"></i>个人中心</a></div>
				</div>
			</ul>
		</div>

		<!--悬浮搜索框-->
		<div class="nav white">
			<!-- <div class="logo"><img src="images/logo.png" /></div> -->
			<div class="logoBig">
				<li><img src="images/logobig.png" /></li>
			</div>
			<div class="search-bar pr">
				<a name="index_none_header_sysc" href="#"></a>
				<form>
					<input id="searchInput" v-model="keywords" name="index_none_header_sysc" type="text"
						placeholder="搜索" autocomplete="off">
					<input id="ai-topsearch" @click="doSearch" class="submit am-btn" value="搜索" index="1">
				</form>
			</div>
		</div>
		<div class="clear"></div>
	</div>
</template>
<script>
import logoBig from '@/assets/images/logobig.png'

export default {
  name: 'GlobalHeader',
  data() {
    return {}
  },
}
</script>