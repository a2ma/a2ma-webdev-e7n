
    function createParagraph() {
        let para = document.createElement('p');
        para.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias ad commodi possimus tempore. Repellat accusamus fuga debitis, molestias laborum porro saepe facere. Magni, tenetur. Incidunt sapiente cumque reprehenderit recusandae, quam labore ratione culpa, dolorum officiis accusantium aperiam ea debitis velit laborum voluptatibus quaerat blanditiis error pariatur, ullam quasi. Aspernatur error pariatur, nam nostrum eaque harum sunt porro voluptas suscipit dignissimos architecto voluptate? Ea eum ipsam possimus corporis aperiam quis ut ducimus quidem totam tempora cupiditate explicabo rerum repellat maxime nostrum, a, mollitia consectetur at quod velit sapiente accusantium! Odit cum fugit repudiandae reprehenderit quae, maxime doloremque numquam optio expedita voluptas nostrum repellat eos. Delectus, nesciunt quos! Nostrum dignissimos, dolorem quas architecto nobis incidunt dolor ab obcaecati similique fuga sequi ipsum.';
        document.body.appendChild(para);
    }
    const buttons = document.querySelectorAll('button');
    
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', createParagraph);
    }

