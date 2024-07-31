
import  inquirer from "inquirer";
import chalk from "chalk"

let samsungprice = 55000
let technoprice = 45000
let realmeprice = 40000
let huaweiprice = 65000
let oneplusprice = 75000


console.log(chalk.cyanBright("\n \tWELCOME TO A.A MOBILE SHOP\n"));

let message = await inquirer.prompt(
    [
          {
                name: "ans",
                message: chalk.yellowBright("ARE YOU LOOKING FOR A BEST MOBILE?"),
                type: "confirm"
          }
    ]
)

     let message2 = await inquirer.prompt(
        [
            {
                name: "mobiles",
                message:"THESE ARE THE MOBILES WHICH ARE AVAILABLE ON OUR SHOP, WHAT WOULD YOU LIKE TO BUY?",
                type: "list",
                choices: ["SAMSUNG","TECHNO","REALME","HUAWEI","ONEPLUS"]
            }
        ]
    );
    if(message2.mobiles === "SAMSUNG"){
        let amountAns = await inquirer.prompt(
        [
              {
                name: "amount",
                message:"BY WHICH PROCESS YOU WANT TO PURCHASE IT?",
                type: "list",
                choices:["CASH","INSTALLMENT"]
                
              }
        ]
     ); 
     if(amountAns.amount === "CASH"){
        console.log("THIS MOBILE PRICE IS : 55,000 RS");
        let paymentmethod = await inquirer.prompt([
            {
                name:"method",
                type:"list",
                message:"SELECT THE BANK TO DEPOSIT THE PRICE OF YOUR MOBILE",
                choices:["BANK AL HABIB","MEEZAN BANK","ALIED BANK","SINDH BANK"]
            }
        ])
        if (paymentmethod.method === "BANK AL HABIB") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"ENTER YOUR ACCOUNT NUMBER"

                },
            
                {
                    name:"deposit",
                    type:"number",
                    message:"ENTER THE AMOUNT TO DEPOSIT FOR YOUR PRODUCT"
                }
            ])  
            
         if (accountnum.deposit < samsungprice) {
            console.log(chalk.redBright("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT"));
                
            } 
            else{
                console.log(chalk.cyanBright("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY HERE IS YOUR NEW MOBILE"));
                
            }
        }
        if (paymentmethod.method === "MEEZAN BANK") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"ENTER YOUR ACCOUNT NUMBER"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"ENTER THE AMOUNT TO DEPOSIT FOR YOUR PRODUCT"
                }
            ])  
         if (accountnum.deposit < samsungprice) {
            console.log(chalk.redBright("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT"));
                
            } 
            else{
                console.log(chalk.cyanBright("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY HERE IS YOUR NEW MOBILE"));
                
            }
        }
        if (paymentmethod.method === "ALIED BANK") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"ENTER YOUR ACCOUNT NUMBER"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"ENTER THE AMOUNT TO DEPOSIT FOR YOUR PRODUCT"
                }
            ])  
         if (accountnum.deposit < samsungprice) {
            console.log(chalk.redBright("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT"));
                
            } 
            else{
                console.log(chalk.cyanBright("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY HERE IS YOUR NEW MOBILE"));
                
            }
        }
        if (paymentmethod.method === "SINDH BANK") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"ENTER YOUR ACCOUNT NUMBER"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"ENTER THE AMOUNT TO DEPOSIT FOR YOUR PRODUCT"
                }
            ])  
         if (accountnum.deposit < samsungprice) {
            console.log(chalk.redBright("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT"));
                
            } 
            else{
                console.log(chalk.cyanBright("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY HERE IS YOUR NEW MOBILE"));
                
            }
        }
        
    }
    else if(amountAns.amount === "INSTALLMENT"){
        let amountAns2 = await inquirer.prompt([
            {
                name:"amount2",
                message:(chalk.yellowBright("CHOOSE THE YEARS OF INSTALLMENT")),
                choices:["1 YEAR","2 YEAR"],
                type:"list"
            }
        ])
        if (amountAns2.amount2 === "1 YEAR") {
            console.log(chalk.cyanBright("CONGRATULATION YOUR NEW MOBILE IS HERE BY INSTALLMENT OF 1 YEAR YOU SHOULD PAY : RS 4,580 EVERY MONTH"));
            
            }
            else{
                console.log(chalk.cyanBright("CONGRATULATION YOUR NEW MOBILE IS HERE BY INSTALLMENT OF 2 YEAR YOU SHOULD PAY : RS 2,290 EVERY MONTH"));
                
            }
            
            
        }
            
    }
    if(message2.mobiles === "TECHNO"){
        let amountAns = await inquirer.prompt(
        [
              {
                name: "amount",
                message: (chalk.yellowBright("BY WHICH PROCESS YOU WANT TO PURCHASE IT?")),
                type: "list",
                choices:["CASH","INSTALLMENT"]
                
              }
        ]
     ); 
     if(amountAns.amount === "CASH"){
        console.log("THIS MOBILE PRICE IS : 45,000 RS");
        let paymentmethod = await inquirer.prompt([
            {
                name:"method",
                type:"list",
                message:"SELECT THE BANK TO DEPOSIT THE PRICE OF YOUR MOBILE",
                choices:["BANK AL HABIB","MEEZAN BANK","ALIED BANK","SINDH BANK"]
            }
        ])
        if (paymentmethod.method === "BANK AL HABIB") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"ENTER YOUR ACCOUNT NUMBER"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"ENTER THE AMOUNT TO DEPOSIT FOR YOUR PRODUCT"
                }
            ])  
         if (accountnum.deposit < technoprice) {
            console.log(chalk.redBright("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT"));
                
            } 
            else{
                console.log(chalk.cyanBright("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY HERE IS YOUR NEW MOBILE"));
                
            }
        }
        if (paymentmethod.method === "MEEZAN BANK") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"ENTER YOUR ACCOUNT NUMBER"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"ENTER THE AMOUNT TO DEPOSIT FOR YOUR PRODUCT"
                }
            ])  
         if (accountnum.deposit < technoprice) {
            console.log(chalk.redBright("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT"));
                
            } 
            else{
                console.log(chalk.cyanBright("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY HERE IS YOUR NEW MOBILE"));
                
            }
        }
        if (paymentmethod.method === "ALIED BANK") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"ENTER YOUR ACCOUNT NUMBER"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"ENTER THE AMOUNT TO DEPOSIT FOR YOUR PRODUCT"
                }
            ])  
         if (accountnum.deposit < technoprice) {
            console.log(chalk.redBright("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT"));
                
            } 
            else{
                console.log(chalk.cyanBright("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY HERE IS YOUR NEW MOBILE"));
                
            }
        }
        if (paymentmethod.method === "SINDH BANK") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"ENTER YOUR ACCOUNT NUMBER"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"ENTER THE AMOUNT TO DEPOSIT FOR YOUR PRODUCT"
                }
            ])  
         if (accountnum.deposit < technoprice) {
            console.log(chalk.redBright("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT"));
                
            } 
            else{
                console.log(chalk.cyanBright("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY HERE IS YOUR NEW MOBILE"));
                
            }
        }
        
    }
    else if(amountAns.amount === "INSTALLMENT"){
        let amountAns2 = await inquirer.prompt([
            {
                name:"amount2",
                message:"CHOOSE THE YEARS OF INSTALLMENT",
                choices:["1 YEAR","2 YEAR"],
                type:"list"
            }
        ])
        if (amountAns2.amount2 === "1 YEAR") {
            console.log(chalk.cyanBright("CONGRATULATION YOUR NEW MOBILE IS HERE BY INSTALLMENT OF 1 YEAR YOU SHOULD PAY : RS 3,750 EVERY MONTH"));
            
            }
            else{
                console.log(chalk.cyanBright("CONGRATULATION YOUR NEW MOBILE IS HERE BY INSTALLMENT OF 2 YEAR YOU SHOULD PAY : RS 1,870 EVERY MONTH"));
                
            }
            
            
        }
            
    }
    if(message2.mobiles === "HUAWEI"){
        let amountAns = await inquirer.prompt(
        [
              {
                name: "amount",
                message: (chalk.yellowBright("BY WHICH PROCESS YOU WANT TO PURCHASE IT?")),
                type: "list",
                choices:["CASH","INSTALLMENT"]
                
              }
        ]
     ); 
     if(amountAns.amount === "CASH"){
        console.log("THIS MOBILE PRICE IS : 65,000 RS");
        let paymentmethod = await inquirer.prompt([
            {
                name:"method",
                type:"list",
                message:"SELECT THE BANK TO DEPOSIT THE PRICE OF YOUR MOBILE",
                choices:["BANK AL HABIB","MEEZAN BANK","ALIED BANK","SINDH BANK"]
            }
        ])
        if (paymentmethod.method === "BANK AL HABIB") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"ENTER YOUR ACCOUNT NUMBER"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"ENTER THE AMOUNT TO DEPOSIT FOR YOUR PRODUCT"
                }
            ])  
         if (accountnum.deposit < huaweiprice) {
            console.log(chalk.redBright("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT"));
                
            } 
            else{
                console.log(chalk.cyanBright("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY HERE IS YOUR NEW MOBILE"));
                
            }
        }
        if (paymentmethod.method === "MEEZAN BANK") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"ENTER YOUR ACCOUNT NUMBER"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"ENTER THE AMOUNT TO DEPOSIT FOR YOUR PRODUCT"
                }
            ])  
         if (accountnum.deposit < huaweiprice) {
            console.log(chalk.redBright("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT"));
                
            } 
            else{
                console.log(chalk.cyanBright("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY HERE IS YOUR NEW MOBILE"));
                
            }
        }
        if (paymentmethod.method === "ALIED BANK") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"ENTER YOUR ACCOUNT NUMBER"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"ENTER THE AMOUNT TO DEPOSIT FOR YOUR PRODUCT"
                }
            ])  
         if (accountnum.deposit < huaweiprice) {
            console.log(chalk.redBright("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT"));
                
            } 
            else{
                console.log(chalk.cyanBright("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY HERE IS YOUR NEW MOBILE"));
                
            }
        }
        if (paymentmethod.method === "SINDH BANK") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"ENTER YOUR ACCOUNT NUMBER"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"ENTER THE AMOUNT TO DEPOSIT FOR YOUR PRODUCT"
                }
            ])  
         if (accountnum.deposit < huaweiprice) {
            console.log(chalk.redBright("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT"));
                
            } 
            else{
                console.log(chalk.cyanBright("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY HERE IS YOUR NEW MOBILE"));
                
            }
        }
    }
    else if(amountAns.amount === "INSTALLMENT"){
        let amountAns2 = await inquirer.prompt([
            {
                name:"amount2",
                message:(chalk.yellowBright("CHOOSE THE YEARS OF INSTALLMENT")),
                choices:["1 YEAR","2 YEAR"],
                type:"list"
            }
        ])
        if (amountAns2.amount2 === "1 YEAR") {
            console.log(chalk.cyanBright("CONGRATULATION YOUR NEW MOBILE IS HERE BY INSTALLMENT OF 1 YEAR YOU SHOULD PAY : RS 5,400 EVERY MONTH"));
            
            }
            else{
                console.log(chalk.cyanBright("CONGRATULATION YOUR NEW MOBILE IS HERE BY INSTALLMENT OF 2 YEAR YOU SHOULD PAY : RS 2,700 EVERY MONTH"));
                
            }
            
            
        }
            
    }
    if(message2.mobiles === "REALME"){
        let amountAns = await inquirer.prompt(
        [
              {
                name: "amount",
                message:"BY WHICH PROCESS YOU WANT TO PURCHASE IT?",
                type: "list",
                choices:["CASH","INSTALLMENT"]
                
              }
        ]
     ); 
     if(amountAns.amount === "CASH"){
        console.log("THIS MOBILE PRICE IS : 40,000 RS");
        let paymentmethod = await inquirer.prompt([
            {
                name:"method",
                type:"list",
                message:"SELECT THE BANK TO DEPOSIT THE PRICE OF YOUR MOBILE",
                choices:["BANK AL HABIB","MEEZAN BANK","ALIED BANK","SINDH BANK"]
            }
        ])
        if (paymentmethod.method === "BANK AL HABIB") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"ENTER YOUR ACCOUNT NUMBER"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"ENTER THE AMOUNT TO DEPOSIT FOR YOUR PRODUCT"
                }
            ])  
         if (accountnum.deposit < realmeprice) {
            console.log(chalk.redBright("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT"));
                
            } 
            else{
                console.log(chalk.cyanBright("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY HERE IS YOUR NEW MOBILE"));
                
            }
        }
        if (paymentmethod.method === "MEEZAN BANK") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"ENTER YOUR ACCOUNT NUMBER"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"ENTER THE AMOUNT TO DEPOSIT FOR YOUR PRODUCT"
                }
            ])  
         if (accountnum.deposit < realmeprice) {
            console.log(chalk.redBright("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT"));
                
            } 
            else{
                console.log(chalk.cyanBright("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY HERE IS YOUR NEW MOBILE"));
                
            }
        }
        if (paymentmethod.method === "ALIED BANK") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"ENTER YOUR ACCOUNT NUMBER"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"ENTER THE AMOUNT TO DEPOSIT FOR YOUR PRODUCT"
                }
            ])  
         if (accountnum.deposit < realmeprice) {
            console.log(chalk.redBright("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT"));
                
            } 
            else{
                console.log(chalk.cyanBright("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY HERE IS YOUR NEW MOBILE"));
                
            }
        }
        if (paymentmethod.method === "SINDH BANK") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"ENTER YOUR ACCOUNT NUMBER"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"ENTER THE AMOUNT TO DEPOSIT FOR YOUR PRODUCT"
                }
            ])  
         if (accountnum.deposit < realmeprice) {
            console.log(chalk.redBright("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT"));
                
            } 
            else{
                console.log(chalk.cyanBright("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY HERE IS YOUR NEW MOBILE"));
                
            }
        }
    }
    else if(amountAns.amount === "INSTALLMENT"){
        let amountAns2 = await inquirer.prompt([
            {
                name:"amount2",
                message:(chalk.yellowBright("CHOOSE THE YEARS OF INSTALLMENT")),
                choices:["1 YEAR","2 YEAR"],
                type:"list"
            }
        ])
        if (amountAns2.amount2 === "1 YEAR") {
            console.log(chalk.cyanBright("CONGRATULATION YOUR NEW MOBILE IS HERE BY INSTALLMENT OF 1 YEAR YOU SHOULD PAY : RS 3,300 EVERY MONTH"));
            
            }
            else{
                console.log(chalk.cyanBright("CONGRATULATION YOUR NEW MOBILE IS HERE BY INSTALLMENT OF 1 YEAR YOU SHOULD PAY : RS 1,600 EVERY MONTH"));
                
            }
            
            
        }
            
    }
    if(message2.mobiles === "ONEPLUS"){
        let amountAns = await inquirer.prompt(
        [
              {
                name: "amount",
                message:"BY WHICH PROCESS YOU WANT TO PURCHASE IT?",
                type: "list",
                choices:["CASH","INSTALLMENT"]
                
              }
        ]
     ); 
     if(amountAns.amount === "CASH"){
        console.log("THIS MOBILE PRICE IS : 75,000 RS");
        let paymentmethod = await inquirer.prompt([
            {
                name:"method",
                type:"list",
                message:"SELECT THE BANK TO DEPOSIT THE PRICE OF YOUR MOBILE",
                choices:["BANK AL HABIB","MEEZAN BANK","ALIED BANK","SINDH BANK"]
            }
        ])
        if (paymentmethod.method === "BANK AL HABIB") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"ENTER YOUR ACCOUNT NUMBER"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"ENTER THE AMOUNT TO DEPOSIT FOR YOUR PRODUCT"
                }
            ])  
         if (accountnum.deposit < oneplusprice) {
            console.log(chalk.redBright("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT"));
                
            } 
            else{
                console.log(chalk.cyanBright("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY HERE IS YOUR NEW MOBILE"));
                
            }
        }
        if (paymentmethod.method === "MEEZAN BANK") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"ENTER YOUR ACCOUNT NUMBER"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"ENTER THE AMOUNT TO DEPOSIT FOR YOUR PRODUCT"
                }
            ])  
         if (accountnum.deposit < oneplusprice) {
            console.log(chalk.redBright("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT"));
                
            } 
            else{
                console.log(chalk.cyanBright("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY HERE IS YOUR NEW MOBILE"));
                
            }
        }
        if (paymentmethod.method === "ALIED BANK") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"ENTER YOUR ACCOUNT NUMBER"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"ENTER THE AMOUNT TO DEPOSIT FOR YOUR PRODUCT"
                }
            ])  
         if (accountnum.deposit < oneplusprice) {
            console.log(chalk.redBright("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT"));
                
            } 
            else{
                console.log(chalk.cyanBright("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY HERE IS YOUR NEW MOBILE"));
                
            }
        }
        if (paymentmethod.method === "SINDH BANK") {
            let accountnum = await inquirer.prompt([
                {
                    name:"account",
                    type:"input",
                    message:"ENTER YOUR ACCOUNT NUMBER"

                },
                {
                    name:"deposit",
                    type:"number",
                    message:"ENTER THE AMOUNT TO DEPOSIT FOR YOUR PRODUCT"
                }
            ])  
         if (accountnum.deposit < oneplusprice) {
            console.log(chalk.redBright("ERROR,PLEASE DEPOSIT THE COMPLETE PAYMNENT"));
                
            } 
            else{
                console.log(chalk.cyanBright("CONGRATULATION, YOUR AMOUNT DEPOSIT SUCCESFULLY HERE IS YOUR NEW MOBILE"));
                
            }
        }
    }
    else if(amountAns.amount === "INSTALLMENT"){
        let amountAns2 = await inquirer.prompt([
            {
                name:"amount2",
                message:(chalk.yellowBright("CHOOSE THE YEARS OF INSTALLMENT")),
                choices:["1 YEAR","2 YEAR"],
                type:"list"
            }
        ])
        if (amountAns2.amount2 === "1 YEAR") {
            console.log(chalk.cyanBright("CONGRATULATION YOUR NEW MOBILE IS HERE BY INSTALLMENT OF 1 YEAR YOU SHOULD PAY : RS 6,250 EVERY MONTH"));
            
            }
            else{
                console.log(chalk.cyanBright("CONGRATULATION YOUR NEW MOBILE IS HERE BY INSTALLMENT OF 2 YEAR YOU SHOULD PAY : RS 3,120 EVERY MONTH"));
                
            }
            
            
        }
            
    }
