import {Platform, Page, ActionSheet, NavController, Alert} from 'ionic-framework/ionic';


@Page({
  templateUrl: 'build/pages/components/components.html'
})
export class Components {
    
    pageTitle: String = 'Components page';
    
    constructor(public platform: Platform, public nav: NavController) {
        
    }
    
    
    
}
