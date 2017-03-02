/*
 * File: app/view/ListRound.js
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

Ext.define('SenchaTouchTheme.view.ListRound', {
    extend: 'Ext.Container',

    requires: [
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        centered: false,
        items: [
            {
                xtype: 'list',
                height: '100%',
                ui: 'round',
                itemTpl: [
                    '<div>{name} ({code})</div>'
                ],
                store: 'countryStore',
                grouped: false
            }
        ]
    }

});