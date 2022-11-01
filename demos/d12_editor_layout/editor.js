const radios = document.querySelectorAll("#topnav input[type='radio']");
function close_menus(){
        for (let checkbox of radios) {
            checkbox.checked = false;
        }
        let $radios = $('#topnav input[type="radio"]');
        $radios.prop('checked', false).data('checked', false);
    }

function setup(){

    const main = document.getElementById("main");
    const toolbox = document.getElementById("tools")
    const topnav_sub_items = document.querySelectorAll("#topnav ul li ul li *")

    main.addEventListener('click', () => {close_menus()});
    toolbox.addEventListener('click', () => {close_menus()});

    topnav_sub_items.forEach((element) => {
        element.addEventListener('click', () => {close_menus()});
    })

    let $radios = $('#topnav input[type="radio"]');
    $radios.click(function () {
        let $this = $(this);
        if ($this.data('checked')) {
            this.checked = false;
        }
        let $otherRadios = $radios.not($this).filter('[name="'+ $this.attr('name') + '"]');
        $otherRadios.prop('checked', false).data('checked', false);
        $this.data('checked', this.checked);
    });

    let fileupload = document.getElementById('open_file')
    fileupload.onchange = function(e) {
        open_file()
    };
}

function open_file(){

    let file = document.querySelector('#open_file').files[0];
    let reader = new FileReader();
    reader.readAsText(file, 'ISO-8859-1');
    reader.onload = function(event) {

    let csv = event.target.result;
    let rows = csv.split('\n');
    let html = '<table>';

    for (let i = 0; i < rows.length; i++) {

        cols = rows[i].split(';');
        html+=`<tr>`;

        for (let j = 0; j < cols.length; j++) {
            let value = cols[j];
            html+= `<td>${value}</td>`;
        }
        html += `</tr>`;
    }
     html += `</table>`;

    document.getElementById("main").innerHTML = html;
    }
}

function close_file(){
    document.getElementById("main").innerHTML = '<span>[no csv file]</span><br>File > Open';
}
