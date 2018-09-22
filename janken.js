
$(document).ready(function(){
  $(".upper").animate({'left':'500px'});
    $("#name").load("/start.html #name")

    var hand=new Map()
    result=new Map([
      [0,'あいこ'],
      [1,'勝ち'],
      [2,'負け']
    ])
  $(".hand").each(function(){
    var num=parseInt($(this).val());
    value=$(this).find("p").text();

    hand.set(num,value);
  })
  $(".hand").on("click",function(){
    var com=Math.floor(Math.random()*3)
    var pl=parseInt($(this).val())
    var judge=(com-pl+3)%3
    $("ul").html(

      `<p>あなたは　${hand.get(pl)}　をだした</p>`+
      `<p>タケシは　${hand.get(com)}　をだした</p>`+
      `<h2>${result.get(judge)}です</h2>`
    )
  })
})
