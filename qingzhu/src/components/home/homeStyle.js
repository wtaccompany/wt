import styled from 'styled-components';  //局部引入样式
export const HomeWrap = styled.div`
width: 1000px;
height: 1300px;
margin: 30px auto;
`
export const HomeLeft = styled.div`
width: 625px;
float: left;
img{
width: 625px;
height: 270px;
}
`
export const HomeRight = styled.div`
width: 340px;
float: right;
`
export const TopicWrap = styled.div`
width: 625px;
height: 130px;
margin: 30px 0;
`
export const ListWrap = styled.div`
width: 625px;
height: 600px;
`
export const ScanWrap = styled.div`
width: 340px;
height: 600px;
margin-bottom: 30px;
`

export const AdWrap = styled.div`
width: 340px;
height: 300px;
img{
margin:0 26px 30px;
}
ul li{
width: 340px;
height: 60px;
border-bottom: 2px solid #ccc;
font-size: 24px;
text-align: center;
line-height: 60px;
}
`
export const TopicItem = styled.div`
width: 100px;
height: 50px;
border: 2px solid #ccc;
float: left;
margin: 10px;
img{
width: 50px;
height: 30px;
margin: 7px;
}
`
export const ListItem = styled.div`
width: 625px;
height: 152px;
border: 2px solid #ccc;
margin-bottom: 20px;
img{
width: 200px;
height: 100px;
margin-top: 20px;
}
div{
width: 380px;
height: 150px;
float: right;
margin-right: 10px;
border-left: 2px solid #ccc;
padding-left: 30px;
}
`
export const ScanItem = styled.div`
width: 200px;
height: 130px;
margin: 0 70px 20px;
text-align: center;
border: 2px solid #ccc;
p{
font-size: 20px;
color: #5d5d5d;
}
`