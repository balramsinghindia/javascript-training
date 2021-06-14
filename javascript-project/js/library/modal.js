class Modal {
        constructor(){

        }

        showModal(){
            document.getElementsByClassName('my-modal')[0].classList.remove('hidden');
            document.getElementsByClassName('body')[0].classList.add('gray-background');
        }

        hideModal(){
            document.getElementsByClassName('my-modal')[0].classList.add('hidden');
            document.getElementsByClassName('body')[0].classList.remove('gray-background');
        }

        routeFocus(){
            document.getElementById('close-icon').focus();
        }
    }
