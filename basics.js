// let a=2
// let b=5

// let addnum=a+b
// let subnum=a-b
// let multnum=a*b
// let divnum=a/b



// FUNCTION

// function add(){
//     console.log(addnum);
// }


// function sub() {
//     console.log(subnum);
// }

// function mult() {
//     console.log(multnum);
// }

// function div() {
//     console.log(divnum);
// }


// div()



// ARROW FUNCTION

// add=(a,b) =>{
//     let sum=a+b
//     console.log(sum);
// }

// sub=(a,b) =>{
//     let sum=a-b
//     console.log(sum);
// }

// mult=(a,b) =>{
//     let sum=a*b
//     console.log(sum);
// }

// div=(a,b) =>{
//     let sum=a/b
//     console.log(sum);
// }

// percentage=(a,b,per) =>{
    
//     let perc=(a*b)*per/100
//     console.log(perc);
// }

// percentage(5,2,50)



// IF

// let a=5
// let b=3

// if (a>b) {
//     console.log('a is greater');
// }
// else {
//     console.log('b is greater');
// }


// let a=22

// if (a>=18) {
//     console.log('you are eligible');
// }
// else {
//     console.log('you are not eligible');
// }



//CALLBACK

// addition=(a,b,callback) =>{

//     callback(a+b)
// }

// addition(10,30,(sum)=>{
//     console.log(sum);
// })










add=(a,b,callback) =>{
    callback(a+b)
}

sub=(a,b,callback) =>{
    callback(a-b)
}

mult=(a,b,call) =>{
    call(a*b)
}

percentage=(a,b,callback) =>{
    callback(a*b/100)
}


add(2,4,(sumadd)=>{
    console.log(sumadd)

    sub(sumadd,1,(sumsub)=>{
        console.log(sumsub);

        mult(sumsub,2,(summult)=>{
            console.log(summult);

            percentage(summult,75,(result)=>{
                console.log(result);
            })
        })
    })
})













