import {Page}       from 'ionic-framework/ionic';
import {Alerts}     from '../alerts/alerts';
import {Components} from '../components/components';


@Page({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    tabComponentsRoot: any = Components;
    tabAlertsRoot: any = Alerts;
}
