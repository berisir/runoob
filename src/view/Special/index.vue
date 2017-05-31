<template>
<div class='big'>
	<header>
		专题  
	</header>
	<div class="swiper-container">
  		<div class="swiper-wrapper">
  		  <div class="swiper-slide"><img src="http://img.mukewang.com/591d3df9000120b607500250.jpg"></div>
  		  <div class="swiper-slide"><img src="http://img.mukewang.com/5927d42f000129ff07500250.jpg"></div>
  		  <div class="swiper-slide"><img src="http://img.mukewang.com/5927d42f000129ff07500250.jpg"></div>
  		  <div class="swiper-slide"><img src="http://img.mukewang.com/592253770001a74307500250.jpg"></div>
  		  <div class="swiper-slide"><img src="http://img.mukewang.com/590d367a0001675007500250.jpg"></div>
  		</div>
  	  <div class="swiper-pagination"></div>	
  	</div>		
	<nav>
		<ul>
			<li>
				<i class='icon-music' style='color: orange'></i>
				<p>VUE</p>
			</li>
			<li>
				<i class='icon-beer' style='color: #f26765'></i>
				<p>Angular</p>
			</li>
			<li>
				<i class='icon-briefcase' style='color: #6f68df'></i>
				<p>php</p>
			</li>
			<li>
				<i class='icon-food' style='color: #7f2d00'></i>
				<p>js</p>
			</li>
			<li>
				<i class='icon-heart' style='color: #fd7a49'></i>
				<p>jquery</p>
			</li>
			<li>
				<i class='icon-reorder' style='color: #19cf8a'></i>
				<p>css3</p>
			</li>
			<li>
				<i class='icon-lightbulb'  style='color: #4493f7'></i>
				<p>HTML5</p>
			</li>
			<li>
				<i class='icon-credit-card' style='color: #7fd02b'></i>
				<p>react</p>
			</li>
		</ul>
	</nav>
	<div class="content">
		<div class='wrap' v-for='item in date.list'>
			<router-link :to="{name:'comment',params:{date:item.content,imgs:item.img}}">
				<p><img :src="item.img" alt=""><span>{{item.name}}</span><b :style='{color:item.color}'>{{item.type}}</b></p>
				<dl>
					<dd>
						<h2>想学vue那	就来八维!</h2>
						<p>
							{{item.content}}
						</p>
					</dd>
					<dt>
						<img src="../../../images/6.gif" alt="">
					</dt>
				</dl>
			</router-link>		
		</div>
	</div>
	<footerNav></footerNav>
</div>
</template>


<script>

import footerNav from '@/components/footerNav'
import axios from 'axios'
import Swiper from '@/lib/swiper/js/swiper.js'
import '@/lib/swiper/css/swiper.min.css'
import Mock from 'mockjs'
export default {
	data (){
		return{
			date:'',
			swiper:'',
			imgs:'../../../images/6.gif'
		}
	},
	methods:{
		createddate () {
			
		},
		getdata(){
			
			
		}
	},
	components:{
		footerNav
	},
	created (){
		this.createddate()
		this.getdata()
		this.swiper=new Swiper('.swiper-container',{
              loop:true,
              pagination:'.swiper-pagination'
         })

		this.date=Mock.mock({
			'list|5-10':[{
				'name':'@name',
				'img':'@Image',
				'type|1':['vue','javascript','HTML5','jquery','react','Angular'],
				'color':'@color',
				'content':'@paragraph'
			}]
		})
		
	},
	mounted (){
		
	},
	updated () {
        this.swiper.update()
    }
}
</script>
<style lang='less' scoped>
	.big{
		width: 100%;
		position: absolute;
		top:0;
		bottom:0;
		display: flex;
		flex-direction: column;
	}
	.content{
		width:90%;
		margin-left: 5%;
		margin-right: 5%;
		margin-bottom:.4rem;
		overflow: scroll;
		flex:1;

		.wrap{
			width:100%;
			border-bottom:1px solid #f5f5f5;
			padding-bottom: .1rem;
			p{
				width:100%;
				margin-bottom: .1rem;
				margin-top: .1rem;
				height:26px;

				img{
					width:26px;
					height:26px;
					float: left;

				}
				span{
					line-height: 26px;
					float: left;
					padding-left:.1rem;
				}
				b{
					line-height: 26px;
					float: right;
					color:orange;
					height:100%;
					padding-right:0.05rem;
					border-right:5px solid orange;
				}
			}
			dl{
				width:100%;
				display:flex;
				dt{
					width: .75rem;
					height:.56rem;
					img{
						width:100%;
						height:100%;
					}
				}
				dd{
					flex:1;
					h2{	
						width:100%;
						margin-bottom: .1rem;
						text-overflow: ellipsis;
					    display: -webkit-box;
					    -webkit-box-orient: vertical;
			        	-webkit-line-clamp: 2;
			        	overflow: hidden;
					}
					p{
						height:16px;
						overflow: hidden;
					    text-overflow: ellipsis;
					    display: -webkit-box;
					    -webkit-box-orient: vertical;
			        	-webkit-line-clamp: 1; 
			        	color:#757575;
					}
				}
			}
		}
	}
	header{
		width:100%;
		height:.4rem;
		background:skyblue;
		line-height: .4rem;
		text-align: center;
		color:#fff;
		font-size:14px;
	}
	.wrapper{
		width: 100%;
		dl{
			display: flex;
			width:100%;
			height: 1rem;
			background:#f7f7f7;
			dd{
				flex:1;

				p{
					display: flex;
					width:70%;
					text-overflow: ellipsis;
					overflow: hidden;
					white-space: nowrap;
					font-size:16px;
					font-weight: bold;
					
				}
				span{
					color:red;
				}
			}
		}
	}
	nav{
		width: 100%;
		background:#f5f5f5;
		ul{
			width: 100%;
			display: flex;
			flex-wrap:wrap;
			li{
				width:25%;
				text-align: center;
				margin-top:.1rem;
				padding-bottom:.1rem;
				i{
					font-size: 35px;
				}
				p{
					padding-top:.1rem;
				}
			}
		}
	}
	.swiper-slide img{
    	width: 100%;
 	 }
</style>