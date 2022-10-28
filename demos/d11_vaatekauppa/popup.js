// Source: Dialog Element | Loughlin McSweeney | CodePen

const setup_popup = () => {

    // show spesific dialog on button click
    const modals = document.querySelectorAll("dialog")
    const buttons = document.querySelectorAll(".shop-item button");
    const images = document.querySelectorAll(".shop-item img");

       buttons.forEach( (btn, index) => {
            btn.addEventListener("click", () => {
                modals[index].showModal();
                document.querySelector('body').classList.add("blur")
            });
            images[index].addEventListener("click", () => {
                modals[index].showModal();
                document.querySelector('body').classList.add("blur")
            });
       })

    // close dialogs (button click)
    const closeBtns = document.querySelectorAll(".close");

    closeBtns.forEach( (btn) => {
    btn.addEventListener("click", () => {
        document.querySelector('body').classList.remove("blur");
        modals.forEach( (modal) => {modal.close();})

    })
    });

    // close dialogs (background click)
    const dialogs = document.querySelectorAll("dialog");
    dialogs.forEach( (dia) => {
        dia.addEventListener("click", ( event ) => {
        if (event.target === dia) {
            modals.forEach( (modal) => {modal.close();})
            document.querySelector('body').classList.remove("blur");
        }

        });
    })

}
