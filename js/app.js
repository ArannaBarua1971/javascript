function showNavbar(){
    document.querySelector('.logo').style.margin="0px 0px 0px 0px"
    document.querySelector('.logo').style.transition="0.3s linear"
    document.querySelector('#btn').style.display="none"
    document.querySelector('.menu').style.opacity="1"
    document.querySelector('.menu').style.visibility="visible"
    document.querySelector('.menu').style.transition="0.4s linear"
    document.querySelector('.line').style.width="1170px"
    document.querySelector('.line').style.transition="0.4s linear"
    document.querySelector('#bt').style.display="inline"
}
function hideNavbar(){
    document.querySelector('.logo').style.margin="0px 0px 0px 1104px"
    document.querySelector('.logo').style.transition="0.3s linear"
    document.querySelector('#btn').style.display="inline"
    document.querySelector('#bt').style.display="none"
    document.querySelector('.menu').style.opacity="0"
    document.querySelector('.menu').style.transition="0.4s linear"
    document.querySelector('.line').style.width="100px"
    document.querySelector('.line').style.transition="0.4s linear"

}