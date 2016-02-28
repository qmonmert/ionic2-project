import {Platform, Page, ActionSheet, NavController, Alert} from 'ionic-framework/ionic';


@Page({
  templateUrl: 'build/pages/alerts/alerts.html'
})
export class Alerts {
    
    pageTitle: String = 'Alerts page';
    
    constructor(public platform: Platform, public nav: NavController) {
        
    }
    
    /**
     * ALERT
     */
    doAlert() {
        let alert = Alert.create({
        title: 'Welcome in my app',
        subTitle: 'Thanks to use this app !!!',
        buttons: ['Ok']
        });
        this.nav.present(alert);
    }
    
    /**
     * ALERT PROMPT
     */
    doAlertPrompt() {
        let prompt = Alert.create({
            title: 'Login',
            //body: "Enter your login",
            inputs: [
                {
                name: 'title',
                placeholder: 'Title'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: data => {
                        console.log('Saved clicked : ' + data.title);
                    }
                }
            ]
        });
        this.nav.present(prompt);
    }
    
    /**
     * RADIO
     */
    doRadio() {
        let alert = Alert.create();
        alert.setTitle('Lightsaber color');

        alert.addInput({
            type: 'radio',
            label: 'Blue',
            value: 'blue',
            checked: true
        });
        alert.addInput({
            type: 'radio',
            label: 'Red',
            value: 'red',
            checked: false
        });

        alert.addButton('Cancel');
        alert.addButton({
            text: 'Ok',
            handler: data => {
                //this.testRadioOpen = false;
                //this.testRadioResult = data;
            }
        });
        this.nav.present(alert);
    }
    
    /**
     * ACTION SHEET
     */
    presentActionSheet() {
        let actionSheet = ActionSheet.create({
            title: 'Modify your album',
            buttons: [
                {
                    text: 'Destructive',
                    style: 'destructive',
                    handler: () => {
                        console.log('Destructive clicked');
                    }
                },{
                    text: 'Archive',
                    handler: () => {
                        console.log('Archive clicked');
                    }
                },{
                    text: 'Cancel',
                    style: 'cancel',
                    handler: () => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        this.nav.present(actionSheet);
    }
    
}
