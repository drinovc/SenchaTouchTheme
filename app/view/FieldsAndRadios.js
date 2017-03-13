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
        'Ext.field.TextArea',
        'Ext.field.File',
        'Ext.field.Search',
        'Ext.field.Radio',
        'Ext.field.Toggle'
    ],

    config: {
        layout: {
            type: 'hbox',
            align: 'stretchmax'
        },
        items: [
            {
                xtype: 'fieldset',
                flex: 1,
                title: 'Fields',
                items: [
                    {
                        xtype: 'textfield',
                        label: 'Name',
                        required: true
                    },
                    {
                        xtype: 'textfield',
                        label: 'Name (read only)',
                        required: true,
                        readOnly: true
                    },
                    {
                        xtype: 'textfield',
                        disabled: true,
                        label: 'Name (disabled)',
                        required: true
                    },
                    {
                        xtype: 'passwordfield',
                        label: 'Password'
                    },
                    {
                        xtype: 'emailfield',
                        label: 'Email',
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
                        xtype: 'checkboxfield',
                        label: 'Checkbox',
                        checked: true
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
                        xtype: 'textareafield',
                        label: 'Text Area'
                    },
                    {
                        xtype: 'filefield',
                        label: 'File'
                    },
                    {
                        xtype: 'numberfield',
                        label: 'Number'
                    },
                    {
                        xtype: 'searchfield',
                        label: 'Search'
                    }
                ]
            },
            {
                xtype: 'container',
                flex: 1,
                items: [
                    {
                        xtype: 'fieldset',
                        title: 'Radio',
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
                            }
                        ]
                    },
                    {
                        xtype: 'fieldset',
                        title: 'Sliders',
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
                                label: 'Multiple Thumbs',
                                labelAlign: 'top',
                                value: [
                                    20,
                                    80
                                ]
                            },
                            {
                                xtype: 'togglefield',
                                label: 'Toggle',
                                labelAlign: 'top',
                                value: 1
                            }
                        ]
                    }
                ]
            }
        ]
    }

});