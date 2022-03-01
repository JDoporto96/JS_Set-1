//Ex06
//--------------------------------------------------------------------------------------------------------
//--------------------------------------------------------------------------------------------------------


var tree ={name: 'A',
    children:[
        {
            name:'a',
            children:[
                {
                    name:'aa'
                }
            ]
        },
        {
            name:'b',
            children:[
                {
                    name:'ba'
                },
                {
                    name:'bb'
                }

            ]
        },
        {
            name:'c',
            children:[
                {
                    name:'ca'
                },
                {
                    name:'cb',
                    children:[
                        {
                            name:'cba'
                        }
                    ]
                }
            ]
        }
    ]
}

function printTree(input){
    console.log(input.name);
        if("children" in input){
            for(let child of input.children){
                printTree(child);
            }
        }
    }

printTree(tree);