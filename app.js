/*
 * File: app.js
 *
 * This file was generated by Sencha Architect version 3.5.1.
 * http://www.sencha.com/products/architect/
 *
 * This file requires use of the Sencha Touch 2.4.x library, under independent license.
 * License of Sencha Architect does not include license for Sencha Touch 2.4.x. For more
 * details see http://www.sencha.com/license or contact license@sencha.com.
 *
 * This file will be auto-generated each and everytime you save your project.
 *
 * Do NOT hand edit this file.
 */

// @require @packageOverrides
Ext.Loader.setConfig({

});


Ext.Loader.setPath('Ext.grid.column.Column','packages/sencha-touch-grid/src/grid/column/Column.js');
Ext.Loader.setPath('Ext.grid.Grid','packages/sencha-touch-grid/src/grid/Grid.js');

Ext.application({

    requires: [
        'Ext.MessageBox'
    ],
    stores: [
        'countryStore',
        'emptyStore'
    ],
    views: [
        'MainView',
        'Buttons',
        'FieldsAndRadios',
        'Toolbars',
        'List',
        'Tabs',
        'Overlays',
        'ListRound',
        'LoadMask',
        'Carousel',
        'Grid',
        'Login',
        'FontAwesome',
        'ListBuffered',
        'FormsAndPanels'
    ],
    controllers: [
        'MainView'
    ],
    name: 'SenchaTouchTheme',

    requires: [
        'Ext.MessageBox'
    ],

    launch: function() {

        Ext.create('SenchaTouchTheme.view.MainView', {fullscreen: true});
    }

});
