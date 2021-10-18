function redirectingPages(){
    var starGithub,OpenGithub,OpenInsta;

    OpenGithub = document.getElementById('OpenGithub');
    starGithub = document.getElementById('starGithub');
    OpenInsta = document.getElementById('OpenInsta');

    OpenGithub.addEventListener('click', function(){
        window.open('https://github.com/visualway/cleanshot')
    })
    starGithub.addEventListener('click', function(){
        window.open('https://github.com/visualway/cleanshot')
    })
    OpenInsta.addEventListener('click', function(){
        window.open('https://www.twitter.com/visualwayorg')
    })
}

redirectingPages()
function generateScreenshot(){
    const white = document.getElementById('white');
    const blue = document.getElementById('blue');
    const yellow = document.getElementById('yellow');
    const green = document.getElementById('green');
    const violet = document.getElementById('violet');
    const pink = document.getElementById('pink');
    const red = document.getElementById('red');
    const trans = document.getElementById('trans');

    var color;

    //showing Background color selected
    const backgroundPalette = document.getElementById('backgroundPalette');
    const colorPalette = document.getElementById('colorPalette');
    const submitbtn = document.getElementById('submitbtn');

    //taking Background color from input
    const backgroundInput = document.getElementById('hexcode');

    submitbtn.addEventListener('click',function(){
        color = backgroundInput.value;
        console.log(color)
        backgroundPalette.style.border = '2px '+'solid '+ '#'+color;
        colorPalette.style.border = '2px '+'solid '+ '#'+color;
    });
    
    //Generating Background Color
    white.addEventListener('click',function(){
        color = 'fff'
        backgroundPalette.style.border = '2px '+'solid '+ '#'+color;
        colorPalette.style.border = '2px '+'solid '+ '#'+color;
    });
    blue.addEventListener('click',function(){
        color = '00b4d8';
        backgroundPalette.style.border = '2px '+'solid '+'#'+color;
        colorPalette.style.border = '2px '+'solid '+ '#'+color;
    });
    yellow.addEventListener('click',function(){
        color = 'ffbe0b';
        backgroundPalette.style.border = '2px '+'solid '+ '#'+color;
        colorPalette.style.border = '2px '+'solid '+ '#'+color;
    });
    green.addEventListener('click',function(){
        color = '0ff74d';
        backgroundPalette.style.border = '2px '+'solid '+ '#'+color;
        colorPalette.style.border = '2px '+'solid '+ '#'+color;
    });
    violet.addEventListener('click',function(){
        color = '7209b7';
        backgroundPalette.style.border = '2px '+'solid '+ '#'+color;
        colorPalette.style.border = '2px '+'solid '+ '#'+color;
    });
    pink.addEventListener('click',function(){
        color = 'f72585';
        backgroundPalette.style.border = '2px '+'solid '+ '#'+color;
        colorPalette.style.border = '2px '+'solid '+ '#'+color;
    });
    red.addEventListener('click',function(){
        color = 'd90429';
        backgroundPalette.style.border = '2px '+'solid '+ '#'+color;
        colorPalette.style.border = '2px '+'solid '+ '#'+color;
    });
    trans.addEventListener('click',function(){
        color = '';
        backgroundPalette.style.border = '2px '+'solid '+ '#'+'fff';
        colorPalette.style.border = '2px '+'solid '+ '#'+'fff';
    });

    var vid = document.getElementById("myVideo");
    vid.playbackRate = 0.5;

    //Generating Screen Shot
    const btn = document.getElementById('subUrl');
    

    btn.addEventListener('click', generate)
    
    function generate(){
        var website = document.getElementById('websiteAddress').value;
        var img = document.getElementById('resultImage')
        var main = document.getElementById('main') 
        var resultBody = document.getElementById('resutBody')

        //geting the screenshot
        setTimeout(function(){console.log(color)},1000)
        img.src='https://2s9e3bif52.execute-api.eu-central-1.amazonaws.com/production/screenshot?url='
            + website +'&color=' + color

        setTimeout(function(){
            var loader = document.getElementById('loader')
            var quote = document.getElementById('quote')

            main.style.display = 'none'
            loader.style.display = 'block'

            setTimeout(function(){
                quote.innerHTML = 'Opening Your Website'
            },1250)
            setTimeout(function(){
                quote.innerHTML = 'Taking Screenshot'
            },2500)
            setTimeout(function(){
                quote.innerHTML = 'Almost Done'
            },3750)
            console.log('taking screenshot of'+ website)
       },3000)

        setTimeout(function(){
            loader.style.display = 'none'
            resultBody.style.display = 'block';
        },8500)

        setTimeout(function(){console.log('thanks for using smart screenshot')},12000)
    }   
}

generateScreenshot()