<!DOCTYPE html>
<html>
    <body>


<button onclick="myFunction()">Button</button>

    <script>
        let i = 0;

        function addBox (){
            let box = document.createElement('div')
            box.classList.add('box')
            box.setAttribute('id', i)
            box.innerHTML = i
            box.style.fontSize = '50px'
            bodyElement.appendChild(box)

            i++
        }

        boxButton.addEventListener('click', addBox)


        function deleteBox (){
            let toDelete = document.getElementById(i-1)
            toDelete.parentNode.removeChild(toDelete);

            i--
        }

        deleteButton.addEventListener('click', deleteBox)


    </script>

    </body>
</html>

















