// JavaScript Document
$(function(){
//�X���C�h�V���[ ==========================
var page
var lastPage =parseInt($("#slide img").length-1);
var random = Math.round( Math.random()*lastPage );
var nextPage

//�����y�[�W�������_���ݒ�
page=random
  if(page === lastPage){
               nextPage = 0;
  }else{
               nextPage = page+1;
};
 console.log("random�F"+random);
 console.log("page�F"+page);
 console.log("nextPage�F"+nextPage);

//�摜�̏d�Ȃ菇�̏����\��
//nextPage��擪�ɂ���̂͏���̃C���^�[�o���őO�ʂɗ���摜�Ȃ̂ł����fadeOut���邽��
  $("#slide img").css("z-index","-3");
  $("#slide img").eq(nextPage).css("z-index","-1");

//�y�[�W�؊��֐�
function changePage(){
 console.log("page�F"+page);
 console.log("nextPage�F"+nextPage);
//�܂��S���Ŕw�ʂ�
  $("#slide img").css("z-index","-3");
//page���őO�ʂ�
  $("#slide img").eq(page).css("z-index","-1");
//nextPage���Q�Ԗڂ�
  $("#slide img").eq(nextPage).css("z-index","-2");
//����S��display block����
  $("#slide img").css("display","block");
//�őO�ʂ�page��fadeOut����ƂQ�Ԗ�nextPage�������Ă���
  $("#slide img").eq(page).fadeOut(2500);
};

//�J�E���g�A�b�v�֐�
function countUp(){
  if(page === lastPage){
    page = 0;
    nextPage = 1;
    changePage();
   }else if(nextPage===lastPage){
    page ++;
    nextPage = 0;
    changePage();
   }else{
     page ++;
     nextPage = page+1;
     changePage();
   } 
 };
  
//�`�b�Ԋu�ŃC���[�W�؊��̔��ΐݒ�
var Timer;
function startTimer(){
Timer =setInterval(function(){
          countUp();
     },4000);
};

//�`�b�Ԋu�ŃC���[�W�؊��̒�~�ݒ�
function stopTimer(){
clearInterval(Timer);
};

//�^�C�}�[�X�^�[�g
startTimer();
  
});