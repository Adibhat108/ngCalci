import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent  {
    title = 'first-ng-app';
    
    adding: boolean;
    subtracting: boolean;
    multiplying: boolean;
    dividing: boolean;
    
    
    numberArray: any = [];
    secondNumber: any[] = [];
    numberString: string;
    fullNum: any = 0;
    numberList:any[];
    pressedKey: any;
    fullNumIsNeg: boolean;
    
    keyPress(pressedKey: any) {
        console.log(pressedKey);
        this.pressedKey = pressedKey;

        // if(pressedKey !== "+" || pressedKey !== "=" || pressedKey !== "-" || pressedKey !== "x" || pressedKey !== "+/-" )
        
        if(
            this.numberArray.length <=8 
            && 
            (pressedKey >= 0 && pressedKey <= 9)
            &&
            (pressedKey !== "+" || pressedKey !== "=" || pressedKey !== "-" || pressedKey !== "x" || pressedKey !== "+/-" || pressedKey !== "." )
            ) {
                if (this.fullNum < 0) {
                    this.fullNumIsNeg = true;
                    console.log('kk');
                }
            // this.numberProcess();
            // numberProcess() {
                console.log('00');
                this.numberArray.push(this.pressedKey);
                console.log('this.numberArray',this.numberArray);
                this.numberString = this.numberArray + "";
                console.log('this.numberString',this.numberString)
                console.log(this.numberString.replace (/,/g, ""));
                this.fullNum = this.numberString.replace (/,/g, "");
                if(this.fullNumIsNeg) {
                    this.fullNum = -this.fullNum;
                    this.fullNumIsNeg = !this.fullNumIsNeg;
                }
            // }
                console.log('fullNum',this.fullNum)
        } else if(pressedKey === "+/-") {
            this.fullNum = -this.fullNum;
            console.log('inside else if');
            console.log(this.fullNum)

        } else if(pressedKey === "+") {
            this.numberList.push(this.fullNum);

        }
    }
    add() {
        this.adding = true;

    }

    clearNumber() {
        this.fullNum = 0 ;
        this.numberArray = [];
        console.log('this.fullNum',this.fullNum);
    }

    

    
}
