document.querySelector('#send').addEventListener('click', ()=>{
    const mail = document.querySelector('#mail').value;
    const pass = document.querySelector('#password').value;

    document.querySelector('#mail').value = "";
    document.querySelector('#password').value = "";

    fetch(`https://univership.herokuapp.com/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            mail: mail,
            password: pass
        })
    })
    .then((res)=>{
        console.log(res.status);
    })


});

