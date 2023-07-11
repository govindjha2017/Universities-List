const inp=document.querySelector('input');
const url='http://universities.hipolabs.com/search?country=';

const btn= document.querySelector('button');

const name = document.querySelector('.name');
const link = document.querySelector('.site');
btn.addEventListener('click',()=>{
//    console.log(inp.value);
   const furl=url.concat(inp.value);
//    console.log(furl);

   fetch(furl)
        .then((res)=>{
            // console.log(res.json());
            return res.json();
        })
        .then((data)=>{
            // console.log(data);
            link.innerHTML='';
            name.innerHTML='';

            for(let item of data){
                // console.log(item);
                const para= document.createElement('p');
                para.innerText=item.name;
                name.append(para);

                const para2=document.createElement('p');
                para2.innerText=item.web_pages[0];
                link.append(para2);

            }
            // console.log(data[0].name);
            // // console.log(data[0].state-province);
            // console.log(data[0].web_pages[0]);
            // console.log(data[0].country
            //     );
        })
        .catch(err => {
            console.log("Something Went Wrong!!");
            windows.print('bangladesh')
        })
   
})