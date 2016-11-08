import React from 'react';
import {grey100, redA700, cyan500, cyan700,
       fullBlack, darkBlack, white, grey400,
       grey500, grey300, grey900
       } from 'material-ui/styles/colors';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import baseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import spacing from 'material-ui/styles/spacing';
import {fade} from 'material-ui/utils/colorManipulator';
import injectTapEventPlugin from "react-tap-event-plugin";

import Modal from './WelcomeModal.jsx';
import Menu from './Menu.jsx';

injectTapEventPlugin();

const muiTheme = getMuiTheme({
   spacing: spacing,
   fontFamily: 'Roboto, sans-serif',
   palette: {
      primary1Color: cyan500,
      primary2Color: cyan700,
      primary3Color: grey400,
      accent1Color: redA700,
      accent2Color: grey500,
      accent3Color: grey500,
      textColor: white,
      alternateTextColor: white,
      canvasColor: grey900,
      borderColor: grey300,
      disabledColor: fade(darkBlack, 0.3),
      pickerHeaderColor: cyan500,
      clockCircleColor: fade(darkBlack, 0.07),
      shadowColor: fullBlack,
   },
   slider: {
      trackColor: redA700,
      trackColorSelected: redA700,
   }
});

export default class App extends React.Component {
   render() {
      return (
         <MuiThemeProvider muiTheme={muiTheme}>
            <div className="mdl-layout__container">
               <div className="mdl-layout mdl-js-layout">
                  <header className="mdl-layout__header mdl-layout__header--transparent">
                     <div className="mdl-layout__header-row">
                        <span className="company_name mdl-layout-title">Arcane</span>
                     </div>
                  </header>
                  <div className="mdl-layout__drawer">
                     <Menu />
                  </div>
                  <div className="mdl-layout__drawer-button" role="button">
                     <img src="./images/favicon.png"></img>
                  </div>

                  <div id="welcome_modal">
                     <Modal />
                  </div>
                  <main className="row">
                     <div>
                        {this.props.children}
                     </div>
                  </main>
               </div>
            </div>
         </MuiThemeProvider>
      );

   }
}
