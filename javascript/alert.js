//function expression.
//JS script →　microtask →　taskの順番で実行。
const hello = () =>{

    //setTimeout is recieved as task
    const watch = setTimeout(() => {
        console.log("third!!!");
    }, 1000);  

    //JS script
    console.log("first!");

    //microtask
    Promise.resolve().then(()=>{
        console.log("second!");
    })
    return watch;
}
export default hello;