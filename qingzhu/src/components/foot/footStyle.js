import styled from 'styled-components';  //局部引入样式式

export const FootWrap = styled.div`
height: 200px;
background: #e3e4e5;
margin: 30px auto 0;
`
export const FootLeft = styled.div`
float: left;
width: 300px;
height: 200px;
margin-left: 300px;
img{
width: 100px;
height: 60px;
margin: 20px;
}
p{
margin-left: 20px;
color: #3c3c3c;
}
`
export const FootCenter = styled.div`
float: left;
width: 350px;
height: 200px;
line-height: 200px;
text-align: center;
img{
margin: 0 20px;
}
`

export const FootRight = styled.div`
float: left;
width: 350px;
height: 200px;
dl{
float: left;
margin:15px 30px;
}
dl dt{
margin-top: 10px;
}
`