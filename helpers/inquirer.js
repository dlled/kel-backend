const inquirer = require('inquirer')

const initOptions = [
    {
        type: 'list',
        name: 'option',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: 1,
                name: `1. User menu`
            },
            {
                value: 2,
                name: `2. Admin menu`
            },
            {
                value: 0,
                name: `0. Quit`            }
        ]
    }
]

const userOptions = [
    {
        type: 'list',
        name: 'option',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: 1,
                name: `1. Scan`
            },
            {
                value: 2,
                name: `2. Get available products`
            },
            {
                value: 3,
                name: `3. Get available offers`
            },
            {
                value: 4,
                name: `4. Show cart`
            },
            {
                value: 5,
                name: `5. Total`
            },
            {
                value: 6,
                name: `6. Empty cart`
            },
            {
                value: 0,
                name: `0. Back to menu `
            }
        ]
    }
]

const adminOptions = [
    {
        type: 'list',
        name: 'option',
        message: '¿Qué desea hacer?',
        choices: [
            {
                value: 1,
                name: `1. Init mock data`
            },
            {
                value: 2,
                name: `2. Add a product`
            },
            {
                value: 3,
                name: `3. Add offer`
            },
            {
                value: 4,
                name: `4. Remove a product`
            },
            {
                value: 5,
                name: `5. Remove offer`
            },
            {
                value: 6,
                name: `6. Show my data`
            },
            {
                value: 0,
                name: `0. Back to Menu `
            }
        ]
    }
]

const getMenu = async (idMenu) => {

    console.log('===========================');
    console.log('  Select an option')
    console.log('===========================');

    let options = []

    switch (idMenu) {
        case 'init':
            options = initOptions;
            break;
        case 'user':
            options = userOptions;
            break;
        case 'admin':
            options = adminOptions;
            break;

    }
    const { option } = await inquirer.prompt(
        options
    );

    return option;
}

const listItems = async(items = []) => {
    const myItems = items.map((item, i) => {
        return {
            value: item.id,
            name: `${i + 1}.` + ' ' + item.id 
        }
    })

    myItems.unshift({
        value: '0',
        name: '0.' + ' Cancelar'
    })
    const prompt_items = [
        {
            type: 'list',
            name: 'id',
            message: 'Select an item',
            choices: myItems
        }
    ]
    const {id} = await inquirer.prompt(prompt_items);
    return id;
};

const inquirerPause = async () => {
    const entered = await inquirer.prompt([{
        type: 'input',
        name: 'entered',
        message: `PRESS ENTER TO CONTINUE`
    }]);

    return entered;
}

const readInput = async (message) => {

    const question = [
        {
            type: 'input',
            name: 'desc',
            message,
            validate(value) {
                if (value.length === 0) {
                    return 'Enter a valid input'
                } else {
                    return true;
                }
            }
        }
    ];
    const { desc } = await inquirer.prompt(question);

    return desc;
}

module.exports = {
    readInput,
    getMenu,
    inquirerPause, 
    listItems
}