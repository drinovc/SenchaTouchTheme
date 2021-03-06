/*
 * File: app/view/FieldsAndRadios.js
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

Ext.define('SenchaTouchTheme.view.FieldsAndRadios', {
    extend: 'Ext.Container',
    alias: 'widget.fieldsandradios',

    requires: [
        'Ext.form.FieldSet',
        'Ext.field.Password',
        'Ext.field.Email',
        'Ext.field.Url',
        'Ext.field.Spinner',
        'Ext.field.DatePicker',
        'Ext.picker.Date',
        'Ext.Button',
        'Ext.field.Search',
        'Ext.field.File',
        'Ext.field.TextArea',
        'Ext.Toolbar',
        'Ext.SegmentedButton',
        'Ext.field.Radio',
        'Ext.field.Toggle'
    ],

    config: {
        scrollable: 'vertical',
        layout: {
            type: 'hbox',
            align: 'stretchmax'
        },
        items: [
            {
                xtype: 'fieldset',
                flex: 1,
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Name',
                        required: true,
                        value: 'value'
                    },
                    {
                        xtype: 'textfield',
                        label: 'Name (read only)',
                        required: true,
                        value: 'value',
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        disabled: true,
                        label: 'Name (disabled)',
                        required: true,
                        value: 'value'
                    },
                    {
                        xtype: 'passwordfield',
                        label: 'Password',
                        value: 'value'
                    },
                    {
                        xtype: 'emailfield',
                        label: 'Email',
                        value: 'value@email.com',
                        placeHolder: 'email@example.com'
                    },
                    {
                        xtype: 'urlfield',
                        label: 'URL',
                        placeHolder: 'http://example.com'
                    },
                    {
                        xtype: 'spinnerfield',
                        label: 'Spinner'
                    },
                    {
                        xtype: 'selectfield',
                        label: 'Select',
                        value: null,
                        options: [
                            {
                                text: 'First Option',
                                value: 'firstOption'
                            },
                            {
                                text: 'Second Option',
                                value: 'secondOption'
                            },
                            {
                                text: 'Third Option',
                                value: 'thirdOption'
                            }
                        ]
                    },
                    {
                        xtype: 'selectfield',
                        label: 'Select (read only)',
                        value: null,
                        readOnly: true,
                        options: [
                            {
                                text: 'First Option',
                                value: 'firstOption'
                            },
                            {
                                text: 'Second Option',
                                value: 'secondOption'
                            },
                            {
                                text: 'Third Option',
                                value: 'thirdOption'
                            }
                        ]
                    },
                    {
                        xtype: 'selectfield',
                        disabled: true,
                        label: 'Select (disabled)',
                        value: null,
                        readOnly: true,
                        options: [
                            {
                                text: 'First Option',
                                value: 'firstOption'
                            },
                            {
                                text: 'Second Option',
                                value: 'secondOption'
                            },
                            {
                                text: 'Third Option',
                                value: 'thirdOption'
                            }
                        ]
                    },
                    {
                        xtype: 'datepickerfield',
                        label: 'Date',
                        value: {
                            year: 2014,
                            month: 1,
                            day: 10
                        },
                        placeHolder: 'mm/dd/yyyy'
                    },
                    {
                        xtype: 'numberfield',
                        label: 'Number',
                        value: 0
                    },
                    {
                        xtype: 'searchfield',
                        label: 'Search',
                        value: 'value'
                    },
                    {
                        xtype: 'filefield',
                        label: 'File'
                    },
                    {
                        xtype: 'textareafield',
                        label: 'Text Area',
                        value: 'value'
                    },
                    {
                        xtype: 'textareafield',
                        label: 'Text Area (read only)',
                        value: 'value',
                        readOnly: true
                    },
                    {
                        xtype: 'textareafield',
                        disabled: true,
                        label: 'Text Area (disabled)',
                        value: 'value',
                        readOnly: true
                    },
                    {
                        xtype: 'toolbar',
                        docked: 'top',
                        items: [
                            {
                                xtype: 'segmentedbutton',
                                itemId: 'btnsFieldsSize',
                                items: [
                                    {
                                        xtype: 'button',
                                        pressed: true,
                                        itemId: 'mybutton',
                                        text: 'Normal'
                                    },
                                    {
                                        xtype: 'button',
                                        itemId: 'mybutton1',
                                        text: 'Smaller'
                                    },
                                    {
                                        xtype: 'button',
                                        itemId: 'mybutton2',
                                        text: 'Smallest'
                                    }
                                ]
                            }
                        ]
                    }
                ]
            },
            {
                xtype: 'container',
                flex: 1,
                items: [
                    {
                        xtype: 'fieldset',
                        items: [
                            {
                                xtype: 'radiofield',
                                label: 'Option 1',
                                name: 'options',
                                checked: true
                            },
                            {
                                xtype: 'radiofield',
                                label: 'Option 2',
                                name: 'options'
                            },
                            {
                                xtype: 'radiofield',
                                label: 'Option 3',
                                name: 'options'
                            },
                            {
                                xtype: 'radiofield',
                                disabled: true,
                                label: 'Option2 1 (disabled)',
                                name: 'options2',
                                checked: true
                            },
                            {
                                xtype: 'radiofield',
                                disabled: true,
                                label: 'Option2 2 (disabled)',
                                name: 'options2'
                            },
                            {
                                xtype: 'checkboxfield',
                                label: 'Checkbox',
                                checked: true
                            },
                            {
                                xtype: 'checkboxfield',
                                disabled: true,
                                label: 'Checkbox (disabled)',
                                checked: true
                            },
                            {
                                xtype: 'togglefield',
                                label: 'Toggle',
                                value: 1
                            },
                            {
                                xtype: 'togglefield',
                                disabled: true,
                                label: 'Toggle (disabled)',
                                value: 1
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        items: [
                            {
                                xtype: 'sliderfield',
                                label: 'Single Thumb',
                                labelAlign: 'top',
                                value: [
                                    42
                                ]
                            },
                            {
                                xtype: 'sliderfield',
                                disabled: true,
                                label: 'Single Thumb (disabled)',
                                labelAlign: 'top',
                                value: [
                                    42
                                ]
                            },
                            {
                                xtype: 'sliderfield',
                                label: 'Multiple Thumbs',
                                labelAlign: 'top',
                                value: [
                                    20,
                                    80
                                ]
                            }
                        ]
                    }
                ]
            }
        ],
        listeners: [
            {
                fn: 'onMybuttonTap',
                event: 'tap',
                delegate: '#mybutton'
            },
            {
                fn: 'onMybutton1Tap',
                event: 'tap',
                delegate: '#mybutton1'
            },
            {
                fn: 'onMybutton2Tap',
                event: 'tap',
                delegate: '#mybutton2'
            }
        ]
    },

    onMybuttonTap: function(button, e, eOpts) {
        button.up('fieldset').setCls('normal-font');
    },

    onMybutton1Tap: function(button, e, eOpts) {
        button.up('fieldset').setCls('smaller-font');
    },

    onMybutton2Tap: function(button, e, eOpts) {
        button.up('fieldset').setCls('smallest-font');
    }

});