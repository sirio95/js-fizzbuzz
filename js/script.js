const container= document.querySelector("#container");

for (let i= 1; i<= 100; i++){
    const element = document.createElement("div");
    element.append(i);
    element.classList.add("box");
    container.append(element);

    if ((i % 3 ) === 0 && !((i % 5) === 0 )){
        element.innerHTML = `fizz`;
        element.classList.add("fizz");
    }else if((i % 5) === 0 && !((i % 3) === 0 )){
        element.innerHTML = `buzz`;
        element.classList.add("buzz");
    }else if((i % 5) === 0 && (i % 3) === 0){
        element.innerHTML = `fizzbuzz`;
        element.classList.add("fizzbuzz");
    }else{
        element.classList.add("normal");
    }

}