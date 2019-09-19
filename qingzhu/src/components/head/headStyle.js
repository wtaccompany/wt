import styled from 'styled-components';  //局部引入样式
import logo from './../../static/logo.jpg'; //引入背景图片需要用这种方式
export const HeadWrap = styled.div`
height: 60px;
background: #e3e4e5;
`
export const Logo = styled.div`
height: 60px;
width: 100px;
margin-left: 50px;
background: url(${logo});   //背景图片引入url(${logo})
background-size: contain;
float: left;
`
export const Nav = styled.div`
height: 60px;
width: 276px;
margin-left: 100px;
float: left;
`

export const Nava = styled.a`
font-size: 26px;
line-height: 60px;
color: #fff;
display: inline-block;
padding: 0 30px;
text-shadow: 1px 0px #e3e4e5,-2px -2px #000;
`
export const SerchInput = styled.div`
height: 60px;
float: right;
margin-right: 80px;
position: relative;
span{
position: absolute;
top: 24px;
right: 20px;
}
`
export const SearchInfo = styled.div`
width: 360px;
height: 60px;
line-height: 60px;
font-size: 20px;
float: left;
color: #fff;
margin-left: 300px;
span{
margin: 0 20px;
}
`
//attrs加载属性
export const Search = styled.input.attrs({placeholder:'请输入搜索内容'})`
width: 180px;
height: 36px;
padding-left: 30px;
box-sizing: border-box;
border: 0;
outline: 0;
border-radius: 18px;
margin-top: 12px;
transition: 1s;
&.flag{    //&.flag本身的类名
transition: 1s;
width: 230px;
}
`