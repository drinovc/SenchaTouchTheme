/*
 * File: app/view/Tabs.js
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

Ext.define('SenchaTouchTheme.view.Tabs', {
    extend: 'Ext.Container',

    requires: [
        'Ext.tab.Panel',
        'Ext.tab.Bar'
    ],

    config: {
        items: [
            {
                xtype: 'tabpanel',
                items: [
                    {
                        xtype: 'container',
                        title: 'Home'
                    },
                    {
                        xtype: 'container',
                        title: 'Settings'
                    },
                    {
                        xtype: 'container',
                        title: 'Trash'
                    }
                ],
                tabBar: {
                    docked: 'top'
                }
            },
            {
                xtype: 'tabpanel',
                ui: 'light',
                items: [
                    {
                        xtype: 'container',
                        title: 'Home'
                    },
                    {
                        xtype: 'container',
                        title: 'Settings'
                    },
                    {
                        xtype: 'container',
                        title: 'Trash'
                    }
                ],
                tabBar: {
                    docked: 'top',
                    ui: 'light',
                    layout: {
                        type: 'hbox',
                        pack: 'center'
                    }
                }
            },
            {
                xtype: 'tabpanel',
                ui: 'neutral',
                items: [
                    {
                        xtype: 'container',
                        title: 'Home'
                    },
                    {
                        xtype: 'container',
                        title: 'Settings'
                    },
                    {
                        xtype: 'container',
                        title: 'Trash'
                    }
                ],
                tabBar: {
                    docked: 'top',
                    ui: 'neutral',
                    layout: {
                        type: 'hbox',
                        pack: 'end'
                    }
                }
            },
            {
                xtype: 'tabpanel',
                docked: 'bottom',
                items: [
                    {
                        xtype: 'container',
                        title: 'Home',
                        iconCls: 'home'
                    },
                    {
                        xtype: 'container',
                        title: 'Settings',
                        iconCls: 'settings'
                    },
                    {
                        xtype: 'container',
                        title: 'Trash',
                        badgeText: 'Full',
                        iconCls: 'trash'
                    }
                ],
                tabBar: {
                    docked: 'bottom'
                }
            },
            {
                xtype: 'tabpanel',
                docked: 'bottom',
                ui: 'light',
                items: [
                    {
                        xtype: 'container',
                        title: 'Home',
                        iconCls: 'home'
                    },
                    {
                        xtype: 'container',
                        title: 'Settings',
                        iconCls: 'settings'
                    },
                    {
                        xtype: 'container',
                        title: 'Trash',
                        badgeText: 'Full',
                        iconCls: 'trash'
                    }
                ],
                tabBar: {
                    docked: 'bottom',
                    ui: 'light'
                }
            },
            {
                xtype: 'tabpanel',
                docked: 'bottom',
                ui: 'neutral',
                items: [
                    {
                        xtype: 'container',
                        title: 'Home',
                        iconCls: 'home'
                    },
                    {
                        xtype: 'container',
                        title: 'Settings',
                        iconCls: 'settings'
                    },
                    {
                        xtype: 'container',
                        title: 'Trash',
                        badgeText: 'Full',
                        iconCls: 'trash'
                    }
                ],
                tabBar: {
                    docked: 'bottom',
                    ui: 'neutral'
                }
            }
        ]
    }

});