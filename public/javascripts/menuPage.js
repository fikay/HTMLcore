// const add = document.querySelector('#add')

// console.dir(add)
// // add.addEventListener("click",function(){
// //     console.log('here')
// // })

// $(".quantity").on("click", function(event){
//     val += 1
//     console.log(event.target.id)
//     $('#quantityVal').val(val)
// })

// $(".subtract").on("click", function () {
//     if(val === 0)
//     {
//        val = 0;
//         $(".quantityVal").val(val);
//     }
//     else{
//          val -= 1;
//          $(".quantityVal").val(val);
//     }

// });

// $('.request').on("click", function(event){
//     console.log(event)
//     let r = event.target;
//     console.log(r.parentElement.parentElement)
// })

// const r = document.querySelectorAll('#quantity button')
// r.addEventListener("click", function(){
//     r.forEach(element=>{
//         if (element.id === )
//     })
// })
// console.log(r)
// console.log(menu)

// function addQuantity(event){
// console.log("here")
// // const r = document.getElementById('#display' + event.delegateTarget.activeElement.id)
// console.log(event);
//  console.log(event.delegateTarget);
// }

// $(".quantity").click(function (event) {
//   let id = event.currentTarget.attributes["data-value"].value;
//   let addButton = $(".card").find(`#${id}`);
//   var currentTarget = $(this).find(".addition");
//   var nextTarget = $(this).find("input");

//   $(currentTarget).on("click", function () {
//         console.log(nextTarget.val());
//     console.log("before addition operation starts");
//     let uniqueClass = "display" + id;
//     //var mocking = $(this).find(uniqueClass);
//     console.log(nextTarget.val());
//     let currentValue = nextTarget.val();
//     let modifiedValue = currentValue + 1;
//     console.log("after addition operation");
//         console.log(nextTarget.val());
//     nextTarget.val(modifiedValue);
//   });

  //   $(addButton).on("click", function () {
  //     let disId = "display" + id;
  //     let val = parseInt($(`#${disId}`).val());
  //     console.log(val);
  //     val =+ 1;
  //     console.log("new");
  //     console.log(val);
  //     $(`#${disId}`).val(val);
  //     let final = "final-quantity" + id;
  //     $(`#${final}`).val(val);
  //   });

  //   let subButton = $(".card").find(`#sub${id}`);
  //   $(subButton).on("click", function () {
  //     let disId = "display" + id;
  //     if (parseInt($(`#${disId}`).val()) === 0) {
  //       $(`#${disId}`).val(0);
  //     } else {
  //       let val = parseInt($(`#${disId}`).val());
  //       console.log(val);
  //       val = val - 1;
  //       $(`#${disId}`).val(val);
  //       let final = "final-quantity" + id;
  //       $(`#${final}`).val(val);
  //     }
  //   });
//});
   


$(".buttoncontainer").click(function(event){
 
  let id = event.currentTarget.attributes["data-value"].value;
   let sub = $(`#${id}`).find(`#sub${id}`);
  let plus = $(`#${id}`).find(`#add${id}`);
 console.log(event)
  // $(sub).click(subtraction(id));
  // $(plus).click(addition(id));

  if(event.target.id === `sub${id}`)
  {
    subtraction(id)
  }
  else if (event.target.id === `add${id}`)
  {
    addition(id);
  }
  
})

function addition(id)
{
let view = $(`#${id}`).find(`#display${id}`);
 view.val(parseInt(view.val()) + parseInt(1));
 $(`#final-quantity${id}`).val(view.val());
}

function subtraction(id){
let view = $(`#${id}`).find(`#display${id}`);
let final = $(`#final-quantity${id}`);
if(view.val() === '0')
{
  view.val(0)
}
else{
  view.val(parseInt(view.val()) - parseInt(1));
  $(`#final-quantity${id}`).val(view.val())
}

}