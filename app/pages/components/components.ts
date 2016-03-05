import {Platform, Page, ActionSheet, NavController, Alert} from 'ionic-framework/ionic';


@Page({
  templateUrl: 'build/pages/components/components.html'
})
export class Components {
    
    pageTitle: String = 'Components page';
    
    myIcon: String = 'home';
    
    items: Array<any>;
    
    constructor(public platform: Platform, public nav: NavController) {
        this.items = new Array<any>();
        this.items.push( {prenom: "quentin"} );
        this.items.push( {prenom: "thibaud"} );
    }
    
    itemSelected(item) {
        let alert = Alert.create({
            title: 'Hello',
            subTitle: item.prenom,
            buttons: ['Ok']
        });
        
        this.nav.present(alert);
    }
    
}
