const fontsize = document.getElementById('fontsize');
const fontcolor = document.getElementById('fontcolor');
const submit = document.getElementById('submit');

submit.addEventListener('click', (e) => {
    e.preventDefault();
    const size = fontsize.value;
    const color = fontcolor.value;

    let date = new Date();
    date.setTime(date.getTime() + (1 * 24 * 60 * 60 * 1000));  // 1 day from now
    let expires = "expires=" + date.toUTCString();
    
    // Ensure proper cookie format with space after semicolon and using "=" between name and value
    document.cookie = `size=${size}, color=${color}, ${expires}; path=/`;
    seeCookie();
});

function seeCookie(){
    if (document.cookie) {
        // now fetch the size and color from cookie and set the size and color into root element
        const data = document.cookie.split(", ");
        const size = Number(data[0].split("=")[1]);
        const color = data[1].split("=")[1];
        
        console.log(size, color);
        document.body.style.fontSize = size;
        document.body.style.color = color;

    }
}
seeCookie();

