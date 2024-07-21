const read_more_text = document.getElementById("read_more_text_TB");
const read_more = document.getElementById("read_more_TB");
const read_less = document.getElementById("show_less_TB");

function handle_read_more_TB(){
    read_more_text.style.display = 'block';
    read_more.style.display = 'none';
}
function handle_show_less_TB(){
    read_more_text.style.display = 'none';
    read_more.style.display = 'block';
}

const read_more_text_Eye = document.getElementById("read_more_text_Eye");
const read_more_Eye = document.getElementById("read_more_Eye");
const read_less_Eye = document.getElementById("show_less_Eye");

function handle_read_more_Eye(){
    read_more_text_Eye.style.display = 'block';
    read_more_Eye.style.display = 'none';
}
function handle_show_less_Eye(){
    read_more_text_Eye.style.display = 'none';
    read_more_Eye.style.display = 'block';
}

