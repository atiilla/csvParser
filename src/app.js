console.log('Hello world!');
import {parse} from 'papaparse'
const uploadconfirm= document.getElementById('uploadconfirm').
addEventListener('click', () => {
parse(document.getElementById('uploadfile').files[0],
{
    download: true,
    header: true,
    skipEmptyLines: true,
    complete: function(results){
        console.log(results);
    }
});
});